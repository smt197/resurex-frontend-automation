import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DocumentService } from 'src/app/pages/document/document.service';
import { JobStatus } from 'src/app/interfaces/JobStatus';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'vex-job-progress-monitor',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  templateUrl: './job-progress-monitor.component.html',
  styleUrl: './job-progress-monitor.component.scss'
})
export class JobProgressMonitorComponent implements OnInit, OnDestroy {
  activeJobs: JobStatus[] = [];
  activeJobs$: Observable<JobStatus[]>;
  estimatedTime: string | null = null;
  private jobsSubscription: Subscription | undefined;
  private jobFinishedSubscription: Subscription | undefined;
  private jobProgressMap = new Map<
    number,
    { lastUpdate: number; isStale: boolean }
  >();

  constructor(
    private websocketService: WebsocketService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {
    this.activeJobs$ = this.websocketService.activeJobs$;
  }

  ngOnInit(): void {
    this.jobsSubscription = this.websocketService.activeJobs$.subscribe(
      (jobs) => {
        const now = Date.now();

        // Mettre à jour le suivi des jobs
        jobs.forEach((job) => {
          const current = this.jobProgressMap.get(job.id);
          this.jobProgressMap.set(job.id, {
            lastUpdate: now,
            isStale: false
          });
        });

        // Marquer comme "stale" les jobs qui n'ont pas été mis à jour récemment
        this.jobProgressMap.forEach((value, jobId) => {
          if (now - value.lastUpdate > 5000) {
            // 5 secondes sans update
            value.isStale = true;
          }
        });

        this.activeJobs = jobs;
        // Calculate estimated time here instead of in template
        this.estimatedTime = this.calculateEstimatedTime(jobs);
        this.cdr.detectChanges(); // Forcer la détection des changements
      }
    );

    // S'abonner aux jobs terminés pour afficher une notification
    this.jobFinishedSubscription = this.websocketService.jobFinished$.subscribe(
      (finishedJob) => {
        this.showJobCompletionMessage(finishedJob);
        // Supprimer du suivi
        this.jobProgressMap.delete(finishedJob.id);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.jobsSubscription) {
      this.jobsSubscription.unsubscribe();
    }
    if (this.jobFinishedSubscription) {
      this.jobFinishedSubscription.unsubscribe();
    }
  }

  private showJobCompletionMessage(job: JobStatus): void {
    const fileCount = job.input?.file_count || 0;
    const message = this.translate.instant('jobMonitor.completed', {
      count: fileCount
    });
    this.showMessage(message);
  }

  calculateProgress(job: JobStatus): number {
    if (job?.progress_max > 0) {
      // Avec le nouveau système, progress_now est déjà un pourcentage sur 100
      const progress = (job.progress_now / job.progress_max) * 100;
      return Math.min(100, Math.max(0, progress)); // S'assurer que c'est entre 0 et 100
    }
    return 0;
  }

  getProgressLabel(job: JobStatus): string {
    const progress = this.calculateProgress(job);
    return `${progress.toFixed(1)}%`;
  }

  getJobTitle(job: JobStatus): string {
    const type = job.input?.type || 'default';
    const fileCount = job.input?.file_count || 0;
    if (type === 'document' && fileCount > 0) {
      return this.translate.instant('jobMonitor.uploading', {
        count: fileCount
      });
    }
    return this.translate.instant('jobMonitor.processing');
  }

  isJobWaiting(job: JobStatus): boolean {
    // Un job est en attente si :
    // 1. Il vient d'être créé (progress_now = 0 et status = queued)
    // 2. Il n'a pas progressé depuis 5+ secondes
    const progressInfo = this.jobProgressMap.get(job.id);
    const isNewJob = job.progress_now === 0 && job.status === 'queued';
    const isStale = progressInfo?.isStale || false;

    return isNewJob || isStale;
  }

  shouldShowSpinner(job: JobStatus): boolean {
    return (
      this.isJobWaiting(job) ||
      (job.progress_now === 0 && job.status === 'executing')
    );
  }

  trackByJobId(index: number, job: JobStatus): number {
    return job.id;
  }

  getGlobalJobTitle(jobs: JobStatus[]): string {
    const totalFiles = jobs.reduce(
      (sum, job) => sum + (job.input?.file_count || 0),
      0
    );
    if (jobs.length === 1) {
      return this.getJobTitle(jobs[0]);
    }
    return this.translate.instant('jobMonitor.multipleUploads', {
      jobCount: jobs.length,
      totalFiles: totalFiles
    });
  }

  getCompactJobTitle(job: JobStatus, index: number): string {
    const fileCount = job.input?.file_count || 0;
    const documentId = job.input?.main_document_id;
    const baseName = documentId
      ? `Document #${documentId}`
      : `Document ${index + 1}`;
    return `${baseName} (${fileCount} fichiers)`;
  }

  getGlobalProgress(jobs: JobStatus[]): number {
    if (jobs.length === 0) return 0;

    const totalProgress = jobs.reduce((sum, job) => {
      return sum + this.calculateProgress(job);
    }, 0);

    return Math.round(totalProgress / jobs.length);
  }

  getGlobalProgressValue(jobs: JobStatus[]): number {
    return this.getGlobalProgress(jobs);
  }

  private calculateEstimatedTime(jobs: JobStatus[]): string | null {
    const activeJobs = jobs.filter((job) => !this.isJobWaiting(job));
    if (activeJobs.length === 0) return null;

    let totalEstimated = 0;
    let validEstimates = 0;

    activeJobs.forEach((job) => {
      const progress = this.calculateProgress(job);
      if (progress > 0 && progress < 100) {
        const progressInfo = this.jobProgressMap.get(job.id);
        if (progressInfo) {
          const elapsedTime = Date.now() - progressInfo.lastUpdate;
          const estimatedTotal = (elapsedTime / progress) * 100;
          const remaining = estimatedTotal - elapsedTime;

          if (remaining > 0) {
            totalEstimated += remaining;
            validEstimates++;
          }
        }
      }
    });

    if (validEstimates === 0) return null;

    const avgEstimated = totalEstimated / validEstimates;
    const minutes = Math.ceil(avgEstimated / (1000 * 60));

    if (minutes < 1) return '< 1 min';
    if (minutes === 1) return '1 min';
    return `${minutes} min`;
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackBar.open(params, 'Fermer', { duration: 5000 });
    }
  }
}
