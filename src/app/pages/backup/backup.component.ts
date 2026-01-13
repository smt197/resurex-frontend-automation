import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf, NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { catchError, interval, of, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { BackupCompletionNotification, BackupService, UiBackupState } from 'src/app/services/BackupService';
import { WebsocketService } from 'src/app/services/websocket.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-backup',
  standalone: true,
  animations: [
    trigger('fadeInUp400ms', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ],
  imports: [
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective,
    NgIf,
    NgClass,
    SharedModule,
    TranslateModule,
    MatProgressSpinnerModule,
    
  ],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.scss'
})
export class BackupComponent implements OnInit, OnDestroy {
  isLoading = false;
  uiState: UiBackupState = { status: 'idle', message: this.translateService.instant('card.backup.backup_ready')   }; // Message initial

  private destroy$ = new Subject<void>();



  constructor(
    private backupService: BackupService,
    private websocketService: WebsocketService,
    private cdRef: ChangeDetectorRef,
    private translateService: TranslateService
  ) {
     this.translateService.get([
          'card.backup.backup_ready',
        ]).subscribe(translations => {
  this.uiState = { status: 'idle', message: translations['card.backup.backup_ready']   }; // Message initial
        })
  }

  ngOnInit(): void {
    this.backupService.uiState$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
          if (state.message !== 'No query results') {
        this.uiState = state;
        this.isLoading = (state.status === 'dispatched' || state.status === 'running_from_server');
        this.cdRef.detectChanges(); // Crucial avec OnPush
           }
       
      });

    this.backupService.getServerSideStatus().subscribe(); // Déclenche une mise à jour de uiState$

    this.websocketService.listenForBackupCompletion()
      .pipe(takeUntil(this.destroy$))
      .subscribe((completionData: BackupCompletionNotification) => {
      if (completionData.backup_identifier != undefined) {
        this.backupService.updateUiState({ // Cela va déclencher l'abonnement à uiState$ ci-dessus
          status: completionData.status, // Doit être 'completed' ou 'failed'
          message: completionData.message,
          backup_identifier: completionData.backup_identifier
        });
      }
        
      });
  }

  startBackup(): void {
    // Met l'état immédiatement à 'dispatched' via le service
    // isLoading deviendra true via l'abonnement à uiState$
    this.backupService.updateUiState({
        status: 'dispatched',
        message: 'Dispatching backup job...'
    });

    this.backupService.runBackup().subscribe({
        next: response => {
        },
        error: err => {
            console.error('BackupComponent: Error from runBackup API:', err);
        }
    });
  }

  resetUiAndCheckServer(): void {
    this.backupService.resetUiToIdle();
    this.backupService.getServerSideStatus().subscribe(); // Re-vérifier l'état serveur
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Getters pour le template
  get canStartBackup(): boolean {
    const canStart = !this.isLoading && this.uiState.status !== 'dispatched' && this.uiState.status !== 'running_from_server';
    return canStart;
  }

  get canReset(): boolean {
    const can = this.uiState.status === 'completed' || this.uiState.status === 'failed' || this.uiState.status === 'error';
    return can;
  }
}