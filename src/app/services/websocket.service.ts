import { Injectable, NgZone } from '@angular/core';
import Echo from 'laravel-echo';
import { environment } from 'src/environments/environment';
import {
  NotificationResponse,
  Notifications
} from '../interfaces/Notifications';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  Subject,
  tap,
  throwError
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackupCompletionNotification } from './BackupService';
import { JobStatus } from '../interfaces/JobStatus';
import { User } from '../interfaces/User';
import { Menu } from '../interfaces/Menu';
interface PresenceUser extends User {
  first_name: string;
}
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private readonly apiUrl = environment.apiUrl;
  private readonly echo: Echo<any>;
  private readonly presenceChannelName = 'presence-online-users';

  private readonly _onlineUsers = new BehaviorSubject<PresenceUser[]>([]);
  readonly onlineUsers$: Observable<PresenceUser[]> = this._onlineUsers.asObservable();
  private _initialLoadDone = false;

  public readonly notificationsSubject = new BehaviorSubject<Notifications[]>([]);
  readonly notificationsSub$ = this.notificationsSubject.asObservable();

  public readonly unreadCountNotificationSubject = new BehaviorSubject<number>(0);
  readonly unreadCountNotification$ = this.unreadCountNotificationSubject.asObservable();

  private readonly _activeJobs = new BehaviorSubject<JobStatus[]>([]);
  readonly activeJobs$: Observable<JobStatus[]> = this._activeJobs.asObservable();

  private readonly _jobFinished = new Subject<JobStatus>();
  readonly jobFinished$ = this._jobFinished.asObservable();

  private readonly _menuUpdated = new Subject<{ menus: Menu[]; action: string }>();
  readonly menuUpdated$ = this._menuUpdated.asObservable();

  private readonly _blockStatusUpdate = new Subject<{ is_blocked: boolean }>();
  readonly blockStatusUpdate$ = this._blockStatusUpdate.asObservable();

  private readonly STORAGE_KEY = 'resurex_active_jobs';
  private readonly JOB_TIMESTAMP_KEY = 'resurex_jobs_timestamp';
  private readonly JOB_VERIFICATION_DELAY = 3000;
  private readonly JOB_VERIFICATION_TIMEOUT = 10000;
  private readonly MAX_JOB_AGE_MS = 30 * 60 * 1000;

  constructor(
    private readonly zone: NgZone,
    private readonly http: HttpClient
  ) {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: environment.pusher_app_key,
      wsHost: environment.pusher_host,
      wsPort: environment.pusher_port_dev,
      forceTLS: false,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      cluster: environment.cluster,
      authorizer: (channel: any, options: any) => {
        return {
          authorize: (socketId: string, callback: Function) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `${environment.apiUrl}/broadcasting/auth`, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.withCredentials = true;

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  callback(null, JSON.parse(xhr.responseText));
                } else {
                  callback(new Error(xhr.statusText), null);
                }
              }
            };

            xhr.send(
              JSON.stringify({
                socket_id: socketId,
                channel_name: channel.name
              })
            );
          }
        };
      }
    });
  }

  initListeners(userId: number): void {
    this.joinOnlineUsersChannel();
    this.restoreJobsFromStorage();
    this.initBlockStatusListener(userId);
    this.listenForJobStatusUpdates(userId);
    this.initMenuUpdates(userId);
  }

  disconnectListeners(userId: number): void {
    this.echo.leave(this.presenceChannelName);
    this.echo.leave(`App.Models.User.${userId}`);
    this.echo.leave('menus');
  }

  listenPrivateWebsocket(
    eventName: string,
    channelName: string,
    callback: Function
  ) {
    this.echo.private(channelName).listen(eventName, (data: any) => {
      callback(data);
    });
  }

  private initBlockStatusListener(userId: number): void {
    const channelName = `App.Models.User.${userId}`;
    const eventName = '.user.block.status.updated';

    this.echo.private(channelName).listen(eventName, (data: { is_blocked: boolean }) => {
      this.zone.run(() => {
        this._blockStatusUpdate.next(data);
      });
    });
  }

  stopBlockStatusListener(userId: number): void {
    const channelName = `App.Models.User.${userId}`;
    this.echo.leave(channelName);
  }

  markAsRead(notificationIds: any): Observable<any> {
    let url = `${this.apiUrl}/read-notification`;
    const params = new URLSearchParams();

    if (Array.isArray(notificationIds)) {
      notificationIds.forEach((id) => params.append('notification_id[]', id));
    } else {
      params.append('notification_id', notificationIds);
    }

    return this.http.put(`${url}?${params.toString()}`, {}).pipe(
      tap(() => {
        const updatedNotifications = this.notificationsSubject.value.filter(
          (n) => {
            if (Array.isArray(notificationIds)) {
              return !notificationIds.includes(n.id);
            } else {
              return n.id !== notificationIds;
            }
          }
        );

        this.notificationsSubject.next(updatedNotifications);

        const removedCount = Array.isArray(notificationIds)
          ? notificationIds.length
          : 1;
        const newCount = Math.max(
          0,
          this.unreadCountNotificationSubject.value - removedCount
        );
        this.unreadCountNotificationSubject.next(newCount);
      }),
      catchError((error) => {
        console.error('[WebSocket Service] Error marking notification as read:', error);
        return throwError(() => error);
      })
    );
  }

  private joinOnlineUsersChannel(): void {
    if (!this.echo || !this.echo.join) {
      console.error(
        '[WebSocket Service] FATAL: Echo instance or Echo.join method is NOT available in joinOnlineUsersChannel'
      );
      return;
    }
    this.echo
      .join(this.presenceChannelName)
      .subscribed(() => {
        // Successfully subscribed to presence channel
      })
      .here((users: PresenceUser[]) => {
        this.zone.run(() => {
          this._onlineUsers.next(users);
        });
      })
      .joining((user: PresenceUser) => {
        this.zone.run(() => {
          const current = this._onlineUsers.getValue();
          if (!current.find((u) => u.id === user.id))
            this._onlineUsers.next([...current, user]);
        });
      })
      .leaving((user: PresenceUser) => {
        this.zone.run(() => {
          this._onlineUsers.next(
            this._onlineUsers.getValue().filter((u) => u.id !== user.id)
          );
        });
      })
      .error((error: any) => {
        console.error('[WebSocket Service] Presence channel error:', error);
      });
  }

  public isUserOnline(
    userId: string | number | undefined
  ): Observable<boolean> {
    if (userId === undefined || userId === null) {
      return of(false);
    }
    return this.onlineUsers$.pipe(
      map((_onlineUsers) => {
        const isOnline = _onlineUsers.some(
          (_onlineUsers) => String(_onlineUsers.id) === String(userId)
        );
        return isOnline;
      })
    );
  }

  public listenPrivate(
    eventName: string,
    channelName: string,
    callback: (data: any) => void
  ): void {
    this.echo.private(channelName).listen(eventName, (data: any) => {
      callback(data);
    });
  }

  leaveChannel(channelName: string): void {
    this.echo.leave(channelName);
  }

  disconnect(): void {
    this.echo.disconnect();
  }

  public addNotificationToList(notifications: Notifications[]): void {
    this.notificationsSubject.next(notifications);
  }

  get echoInstance() {
    return this.echo;
  }
  get initialLoadDone(): boolean {
    return this._initialLoadDone;
  }
  public listenForBackupCompletion(): Observable<BackupCompletionNotification> {
    const channelName = 'global-backup-status';
    const eventName = 'App\Events\BackupCompletedNotification';
    return new Observable<BackupCompletionNotification>((observer) => {
      try {
        this.echo
          .channel(channelName)
          .listenToAll((eventName: string, data: any) => {
            this.zone.run(() => {
              observer.next({
                status: data.status as BackupCompletionNotification['status'],
                message: data.message,
                backup_identifier: data.backup_identifier
              });
            });
          });
        return () => {
          this.echo.leave(channelName);
        };
      } catch (error) {
        console.error(
          `[WebSocket Service] Error in listenForBackupCompletion for ${channelName}:`,
          error
        );
        observer.error(error);
      }
    });
  }

  loadNotifications(
    page: number,
    unread: boolean = false
  ): Observable<NotificationResponse> {
    const url = `${this.apiUrl}/notifications?page=${page}&unread=${unread}`;
    return this.http.get<NotificationResponse>(url).pipe(
      tap((response) => {
        this.unreadCountNotificationSubject.next(
          response.meta.unreadnotificationcount
        );
        this._initialLoadDone = true;
      })
    );
  }

  private listenForJobStatusUpdates(userId: number): void {
    const channelName = `App.Models.User.${userId}`;
    const eventName = 'user-jobs.status-updated';

    this.echo
      .private(channelName)
      .listen(`.${eventName}`, (event: { active_jobs: JobStatus[] }) => {
        const timestamp = new Date().toLocaleTimeString();
        this.zone.run(() => {
          const previousJobs = this._activeJobs.getValue();
          const newActiveJobs: JobStatus[] = event.active_jobs || [];

          newActiveJobs.forEach((job) => {
            const prevJob = previousJobs.find((pj) => pj.id === job.id);

            if (!prevJob) {
            } else if (prevJob.status !== job.status) {
            } else if (prevJob.progress_now !== job.progress_now) {
              const prevPercent = Math.round(
                (prevJob.progress_now / prevJob.progress_max) * 100
              );
              const newPercent = Math.round(
                (job.progress_now / job.progress_max) * 100
              );
            }
          });

          previousJobs.forEach((prevJob) => {
            const isStillActive = newActiveJobs.some(
              (newJob) => newJob.id === prevJob.id
            );

            if (
              !isStillActive &&
              (prevJob.status === 'executing' || prevJob.status === 'queued')
            ) {
              this._jobFinished.next({ ...prevJob, status: 'finished' });
            }
          });

          const filteredActiveJobs = newActiveJobs
            .filter(
              (job) => job.status === 'queued' || job.status === 'executing'
            )
            .sort(
              (a, b) =>
                new Date(b.created_at || '').getTime() -
                new Date(a.created_at || '').getTime()
            );

          this._activeJobs.next(filteredActiveJobs);

          this.saveJobsToStorage(filteredActiveJobs);
        });
      });
  }

  private saveJobsToStorage(jobs: JobStatus[]): void {
    try {
      const timestamp = Date.now();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(jobs));
      localStorage.setItem(this.JOB_TIMESTAMP_KEY, timestamp.toString());
    } catch (error) {
      console.error('[WebSocket Service] Error saving jobs to localStorage:', error);
    }
  }

  private restoreJobsFromStorage(): void {
    try {
      const storedJobs = localStorage.getItem(this.STORAGE_KEY);
      const storedTimestamp = localStorage.getItem(this.JOB_TIMESTAMP_KEY);

      if (!storedJobs || !storedTimestamp) {
        return;
      }

      const timestamp = parseInt(storedTimestamp);
      const now = Date.now();

      if (now - timestamp > this.MAX_JOB_AGE_MS) {
        this.clearJobsStorage();
        return;
      }

      const jobs: JobStatus[] = JSON.parse(storedJobs);

      const activeJobs = jobs.filter(
        (job) => job.status === 'queued' || job.status === 'executing'
      );

      if (activeJobs.length > 0) {
        this._activeJobs.next(activeJobs);

        setTimeout(() => {
          this.verifyStoredJobs();
        }, this.JOB_VERIFICATION_DELAY);
      }
    } catch (error) {
      this.clearJobsStorage();
    }
  }

  private verifyStoredJobs(): void {
    const currentJobs = this._activeJobs.getValue();

    if (currentJobs.length === 0) return;

    setTimeout(() => {
      const timestamp = localStorage.getItem(this.JOB_TIMESTAMP_KEY);
      if (!timestamp) return;

      const storedTime = parseInt(timestamp);
      const now = Date.now();

      if (now - storedTime > this.JOB_VERIFICATION_TIMEOUT) {
        this._activeJobs.next([]);
        this.clearJobsStorage();
      }
    }, this.JOB_VERIFICATION_TIMEOUT);
  }

  private clearJobsStorage(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.JOB_TIMESTAMP_KEY);
    } catch (error) {
      console.error('[WebSocket Service] Error clearing jobs storage:', error);
    }
  }

  public clearJobsCache(): void {
    this.clearJobsStorage();
    this._activeJobs.next([]);
  }

  private initMenuUpdates(userId: number): void {
    const channelName = 'menus';
    const eventName = 'menus.updated';

    this.echo
      .channel(channelName)
      .listen(
        `.${eventName}`,
        (event: {
          menus: Menu[];
          action: string;
          exclude_user_id: number;
          timestamp: string;
        }) => {
          this.zone.run(() => {
            if (userId && event.exclude_user_id === userId) {
              return;
            }

            this._menuUpdated.next({
              menus: event.menus || [],
              action: event.action || 'updated'
            });
          });
        }
      );
  }

  public listenForMenuUpdates(): Observable<{ menus: Menu[]; action: string }> {
    return this.menuUpdated$;
  }
}