import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil } from 'rxjs';
import { DeploymentService } from 'src/app/services/deployment.service';
import { DeploymentStatus } from 'src/app/services/websocket.service';

export interface DeploymentDialogData {
  moduleSlug: string;
  moduleName: string;
  branchName: string;
}

@Component({
  selector: 'vex-deployment-status',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon class="title-icon">rocket_launch</mat-icon>
      Deployment Status
    </h2>

    <mat-dialog-content>
      <div class="deployment-info">
        <div class="info-row">
          <span class="label">Module:</span>
          <span class="value">{{ data.moduleName }}</span>
        </div>
        <div class="info-row">
          <span class="label">Branch:</span>
          <span class="value">{{ data.branchName }}</span>
        </div>
      </div>

      <div class="status-container" [ngClass]="currentStatus">
        <div class="status-header">
          <mat-icon *ngIf="currentStatus === 'pending'">schedule</mat-icon>
          <mat-icon *ngIf="currentStatus === 'building'" class="spinning">build</mat-icon>
          <mat-icon *ngIf="currentStatus === 'deploying'" class="spinning">cloud_upload</mat-icon>
          <mat-icon *ngIf="currentStatus === 'success'">check_circle</mat-icon>
          <mat-icon *ngIf="currentStatus === 'failed'">error</mat-icon>
          <span class="status-text">{{ getStatusText() }}</span>
        </div>

        <mat-progress-bar
          *ngIf="currentStatus === 'building' || currentStatus === 'deploying'"
          mode="indeterminate"
          color="primary">
        </mat-progress-bar>

        <div *ngIf="statusMessage" class="status-message">
          {{ statusMessage }}
        </div>

        <div *ngIf="logs.length > 0" class="logs-container">
          <div class="logs-header">Logs:</div>
          <div class="logs-content">
            <div *ngFor="let log of logs" class="log-line">{{ log }}</div>
          </div>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button
        mat-button
        *ngIf="currentStatus === 'pending' || currentStatus === 'building' || currentStatus === 'deploying'"
        (click)="closeAndContinue()">
        Continue in Background
      </button>
      <button
        mat-flat-button
        color="primary"
        *ngIf="currentStatus === 'success'"
        (click)="close(true)">
        Done
      </button>
      <button
        mat-flat-button
        color="warn"
        *ngIf="currentStatus === 'failed'"
        (click)="close(false)">
        Close
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
      min-width: 400px;
    }

    .title-icon {
      vertical-align: middle;
      margin-right: 8px;
    }

    .deployment-info {
      background: rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .info-row {
      display: flex;
      margin-bottom: 8px;
    }

    .info-row:last-child {
      margin-bottom: 0;
    }

    .label {
      font-weight: 500;
      width: 80px;
      color: rgba(0, 0, 0, 0.6);
    }

    .value {
      font-family: monospace;
    }

    .status-container {
      border-radius: 8px;
      padding: 16px;
      transition: all 0.3s ease;
    }

    .status-container.pending {
      background: rgba(255, 152, 0, 0.1);
      border: 1px solid rgba(255, 152, 0, 0.3);
    }

    .status-container.building,
    .status-container.deploying {
      background: rgba(33, 150, 243, 0.1);
      border: 1px solid rgba(33, 150, 243, 0.3);
    }

    .status-container.success {
      background: rgba(76, 175, 80, 0.1);
      border: 1px solid rgba(76, 175, 80, 0.3);
    }

    .status-container.failed {
      background: rgba(244, 67, 54, 0.1);
      border: 1px solid rgba(244, 67, 54, 0.3);
    }

    .status-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .status-text {
      font-size: 16px;
      font-weight: 500;
    }

    .pending .status-header mat-icon { color: #ff9800; }
    .building .status-header mat-icon,
    .deploying .status-header mat-icon { color: #2196f3; }
    .success .status-header mat-icon { color: #4caf50; }
    .failed .status-header mat-icon { color: #f44336; }

    .spinning {
      animation: spin 1.5s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    mat-progress-bar {
      margin-bottom: 12px;
    }

    .status-message {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }

    .logs-container {
      margin-top: 16px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding-top: 12px;
    }

    .logs-header {
      font-weight: 500;
      margin-bottom: 8px;
      font-size: 12px;
      text-transform: uppercase;
    }

    .logs-content {
      background: rgba(0, 0, 0, 0.8);
      color: #00ff00;
      font-family: monospace;
      font-size: 12px;
      padding: 12px;
      border-radius: 4px;
      max-height: 200px;
      overflow-y: auto;
    }

    .log-line {
      margin-bottom: 4px;
    }

    .log-line:last-child {
      margin-bottom: 0;
    }
  `]
})
export class DeploymentStatusComponent implements OnInit, OnDestroy {
  currentStatus: DeploymentStatus['status'] = 'pending';
  statusMessage = '';
  logs: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeploymentDialogData,
    private dialogRef: MatDialogRef<DeploymentStatusComponent>,
    private deploymentService: DeploymentService
  ) {}

  ngOnInit(): void {
    this.deploymentService.trackDeployment(this.data.moduleSlug, this.data.branchName);

    this.deploymentService
      .watchModuleDeployment(this.data.moduleSlug)
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.currentStatus = status.status;
        this.statusMessage = status.message || '';
        if (status.logs) {
          this.logs = status.logs;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getStatusText(): string {
    const statusTexts: Record<DeploymentStatus['status'], string> = {
      pending: 'Waiting for deployment...',
      building: 'Building application...',
      deploying: 'Deploying to server...',
      success: 'Deployment successful!',
      failed: 'Deployment failed'
    };
    return statusTexts[this.currentStatus];
  }

  closeAndContinue(): void {
    this.dialogRef.close({ continueInBackground: true });
  }

  close(success: boolean): void {
    this.dialogRef.close({ success, completed: true });
  }
}
