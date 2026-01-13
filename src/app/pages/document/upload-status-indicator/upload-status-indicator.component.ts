import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import {
  UploadStatus,
  UploadStatusService
} from 'src/app/services/upload-status.service';

@Component({
  selector: 'app-upload-status-indicator',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    TranslateModule
  ],
  template: `
    <div
      *ngIf="uploadStatus$ | async as status"
      class="flex items-center space-x-2 min-h-[24px]">
      <!-- Mode upload en cours -->
      <ng-container *ngIf="status.isUploading">
        <!-- Spinner pour l'initialisation (< 1%) -->
        <div *ngIf="status.progress < 1" class="flex items-center space-x-2">
          <mat-spinner
            diameter="20"
            strokeWidth="3"
            class="text-blue-500"></mat-spinner>
          <span class="text-xs text-blue-600 font-medium animate-pulse">{{
            'uploadStatus.initializing' | translate
          }}</span>
        </div>

        <!-- Spinner + progress pour l'attente (1-4%) -->
        <div
          *ngIf="status.progress >= 1 && status.progress < 5"
          class="flex items-center space-x-2">
          <mat-spinner
            diameter="16"
            strokeWidth="2"
            class="text-orange-500"></mat-spinner>
          <div class="w-16">
            <mat-progress-bar
              mode="determinate"
              [value]="status.progress"
              class="h-1"
              color="warn">
            </mat-progress-bar>
          </div>
          <span class="text-xs text-orange-600 font-medium animate-pulse">{{
            'uploadStatus.waiting' | translate
          }}</span>
        </div>

        <!-- Progress bar normale pour progression visible (>= 5%) -->
        <div *ngIf="status.progress >= 5" class="flex items-center space-x-2">
          <div class="w-20">
            <mat-progress-bar
              mode="determinate"
              [value]="status.progress"
              class="h-2">
            </mat-progress-bar>
          </div>
          <span class="text-xs text-blue-600 font-medium min-w-[35px]"
            >{{ status.progress.toFixed(0) }}%</span
          >
        </div>
      </ng-container>

      <!-- Mode terminé avec succès -->
      <div
        *ngIf="status.status === 'completed'"
        class="flex items-center space-x-1 animate-bounce">
        <mat-icon
          class="text-green-500"
          style="font-size: 18px; width: 18px; height: 18px;"
          >check_circle</mat-icon
        >
        <span class="text-xs text-green-600 font-medium">{{
          'uploadStatus.completed' | translate
        }}</span>
      </div>

      <!-- Mode échoué -->
      <div
        *ngIf="status.status === 'failed'"
        class="flex items-center space-x-1">
        <mat-icon
          class="text-red-500"
          style="font-size: 18px; width: 18px; height: 18px;"
          >error</mat-icon
        >
        <span class="text-xs text-red-600 font-medium">{{
          'uploadStatus.failed' | translate
        }}</span>
      </div>
    </div>
  `
})
export class UploadStatusIndicatorComponent implements OnInit, OnDestroy {
  @Input() documentId!: number;
  uploadStatus$!: Observable<UploadStatus | undefined>;
  private subscription?: Subscription;

  constructor(private uploadStatusService: UploadStatusService) {}

  ngOnInit(): void {
    this.uploadStatus$ = this.uploadStatusService.getUploadStatus(
      `doc-${this.documentId}`
    );

    // Debug: Log status changes
    this.subscription = this.uploadStatus$.subscribe((status) => {});
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
