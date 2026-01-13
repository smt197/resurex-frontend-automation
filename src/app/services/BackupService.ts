import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

export interface BackupDispatchResponse {
  message: string;
  status: 'dispatched' | 'already_running' | 'error';
  backup_identifier?: string;
}

export interface BackupCompletionNotification {
  status: 'completed' | 'failed';
  message: string;
  backup_identifier?: string;
}

export interface ServerBackupStatus {
  status: 'running' | 'idle' | 'completed' | 'failed' | 'error';
  message: string;
  backup_identifier?: string;
}

export type UiPossibleStatus =
  | 'idle'
  | 'dispatched'
  | 'running_from_server'
  | 'completed'
  | 'failed'
  | 'error';

export interface UiBackupState {
  status: UiPossibleStatus;
  message: string;
  backup_identifier?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackupService {
  private apiUrl = `${environment.apiUrl}/backup`;

  private uiStateSubject = new BehaviorSubject<UiBackupState>({
    status: 'idle',
    message: 'Ready for a new backup.'
  });

  public readonly uiState$: Observable<UiBackupState> = this.uiStateSubject.asObservable();

  constructor(private http: HttpClient, private tranlate: TranslateService) {}

  runBackup(): Observable<BackupDispatchResponse> {
    return this.http.post<BackupDispatchResponse>(`${this.apiUrl}/run`, {}).pipe(
      tap(response => {
        if (response.status === 'dispatched') {
          this.updateUiState({
            status: 'dispatched',
            message: response.message || this.tranlate.instant('card.backup.backup_process'),
            backup_identifier: response.backup_identifier
          });
        } else if (response.status === 'already_running') {
          this.updateUiState({
            status: 'running_from_server',
            message: response.message,
            backup_identifier: response.backup_identifier
          });
        }
      }),
      catchError(error => {
        return this.handleError('Failed to dispatch backup job', error);
      })
    );
  }

  getServerSideStatus(): Observable<ServerBackupStatus> {
    return this.http.get<ServerBackupStatus>(`${this.apiUrl}/status`).pipe(
      tap(serverStatus => {
        if (this.uiStateSubject.value.status !== 'dispatched') {
             let newUiStatus: UiPossibleStatus;
             switch (serverStatus.status) {
                case 'running': newUiStatus = 'running_from_server'; break;
                case 'idle':
                case 'completed':
                case 'failed':
                case 'error': newUiStatus = serverStatus.status; break;
                default: newUiStatus = 'idle';
             }
             this.updateUiState({
                status: newUiStatus,
                message: serverStatus.message,
                backup_identifier: serverStatus.backup_identifier
            });
        }
      }),
      catchError(error => {
        return this.handleError('Failed to get server-side backup status', error);
      })
    );
  }

  updateUiState(newState: Partial<UiBackupState>): void {
    const currentState = this.uiStateSubject.value;
    const validNewState: UiBackupState = {
        status: newState.status ?? currentState.status,
        message: newState.message ?? currentState.message,
        backup_identifier: newState.backup_identifier === undefined ? currentState.backup_identifier : newState.backup_identifier,
    };
    this.uiStateSubject.next(validNewState);
  }

  resetUiToIdle(): void {
    this.updateUiState({
      status: 'idle',
      message: 'Ready for a new backup.',
      backup_identifier: undefined
    });
  }

  private handleError(context: string, error: any): Observable<never> {
    console.error(`${context}:`, error);
    const serverErrorMessage = error.error?.message || error.message;
    const displayMessage = serverErrorMessage ? `${context}: ${serverErrorMessage}` : `${context}: An unknown error occurred.`;

    this.updateUiState({
        status: 'error',
        message: displayMessage,
    });
    return throwError(() => error);
  }
} 