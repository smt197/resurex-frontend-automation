import { Injectable, NgZone } from '@angular/core';
import { Subject, Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { Menu } from '../interfaces/Menu';
import { WebsocketService } from './websocket.service';
import { AuthService } from './auth-service';
import { NavigationLoaderService } from '../core/navigation/navigation-loader.service';
import { ChatService } from '../pages/chat/chat.service';

@Injectable({
  providedIn: 'root'
})
export class MenuRealtimeService {
  private _menuUpdated = new Subject<{ menus: Menu[]; action: string }>();
  readonly menuUpdated$ = this._menuUpdated.asObservable().pipe(
    debounceTime(300),
    distinctUntilChanged(
      (prev, curr) =>
        prev.action === curr.action && prev.menus.length === curr.menus.length
    )
  );

  private lastUpdateTime = 0;

  constructor(
    private websocketService: WebsocketService,
    private authService: AuthService,
    private navigationLoader: NavigationLoaderService,
    private chatService: ChatService,
    private zone: NgZone
  ) {
    this.initMenuUpdatesListener();
  }

  private initMenuUpdatesListener(): void {
    this.websocketService.listenForMenuUpdates().subscribe({
      next: (data) => {
        const now = Date.now();
        if (now - this.lastUpdateTime < 1000) {
          return;
        }
        this.lastUpdateTime = now;

        this.zone.run(() => {
          const userRoles = this.authService.getRolesNames();
          if (userRoles && userRoles.length > 0) {
            const unreadCount$ = this.websocketService.unreadCountNotificationSubject;
            const chatUnreadCount$ = this.chatService.totalChatUnreadCount$;
            this.navigationLoader.reloadMenusOnly(userRoles, unreadCount$, chatUnreadCount$);
          }

          this._menuUpdated.next(data);
        });
      },
      error: (error) => {
        console.error('Error in menu realtime updates:', error);
      }
    });
  }

  public getMenuUpdates(): Observable<{ menus: Menu[]; action: string }> {
    return this.menuUpdated$;
  }
}
