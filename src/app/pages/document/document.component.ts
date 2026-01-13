import { Component, OnInit, ViewChild, signal } from '@angular/core'; // Added OnInit
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { getDocumentFormlyFields } from 'src/app/models/document.model';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DocumentShowComponent } from './document-show/document-show.component';
import { DeleteElementComponent } from './delete-element-component/delete-element.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Document } from 'src/app/interfaces/Document';
import { finalize, map, Observable } from 'rxjs';
import { Utils } from 'src/app/classes/Utils';
import { DocumentService } from './document.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { UploadStatusService } from 'src/app/services/upload-status.service';

@Component({
  selector: 'vex-document',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent, TranslateModule],
  templateUrl: './document.component.html'
})
export class DocumentComponent implements OnInit {
  type = 'documents';
  isLoading = signal(true);
  dataService: ResourceService<Document>;
  activeJobsCount$: Observable<number>;
  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<Document>;
  formlyFields: FormlyFieldConfig[] = [];

  constructor(
    private genericApi: GenericApiService,
    private snackbar: MatSnackBar,
    private translate: TranslateService,
    private router: Router,
    private dialog: MatDialog,
    private websocketService: WebsocketService,
    private uploadStatusService: UploadStatusService,
    private documentService: DocumentService
  ) {
    this.dataService = Utils.createDataService<Document>(
      this.type,
      this.genericApi
    );
    this.activeJobsCount$ = this.websocketService.activeJobs$.pipe(
      map((jobs) => jobs.length)
    );

    // Synchroniser les jobs WebSocket avec le service d'upload
    this.websocketService.activeJobs$.subscribe((jobs) => {
      const currentTime = Date.now();

      jobs.forEach((job) => {
        if (job.input?.type === 'document' && job.input?.main_document_id) {
          const progress = (job.progress_now / job.progress_max) * 100;
          const docId = `doc-${job.input.main_document_id}`;

          // Si c'est un nouveau job, démarrer le tracking
          if (!this.uploadStatusService.isUploadInProgress(docId)) {
            this.uploadStatusService.startUpload(
              docId,
              job.input.main_document_id
            );
          }

          // Mettre à jour le progrès
          this.uploadStatusService.updateProgress(docId, progress, job.id);
        }
      });
    });

    // Écouter les jobs terminés
    this.websocketService.jobFinished$.subscribe((finishedJob) => {
      if (finishedJob.input?.main_document_id) {
        this.uploadStatusService.completeUpload(
          `doc-${finishedJob.input.main_document_id}`
        );
      }
    });

    // Écouter les nouveaux documents créés pour actualiser la liste
    this.documentService.documentCreated$.subscribe((newDocument) => {
      // Actualiser la liste après un petit délai pour voir le preloader
      setTimeout(() => {
        if (this.resourceList) {
          this.resourceList.refresh();
        }
      }, 500);
    });
  }

  ngOnInit(): void {
    this.formlyFields = getDocumentFormlyFields(this.translate);
  }

  handleAction(event: ActionEvent<Document>) {
    switch (event.action) {
      case 'create':
        this.router.navigate(['index/document/create']);
        break;

      case 'edit':
        if (event.row) {
          this.router.navigate(['index/document/edit', event.row.id]);
        }
        break;

      case 'show':
        if (event.row?.name) {
          // On redirige vers la nouvelle page de grille média
          this.router.navigate(['index/media-grid', event.row.name]);
        }
        break;

      case 'delete':
        if (event.row) {
          this.openDeleteDocumentDialog(event.row);
        }
        break;

      case 'deleteAll':
        if (event.rows) {
          this.openDeleteAllDocumentDialog(event.rows);
        }
        break;
    }
  }

  openDeleteDocumentDialog(document: Document) {
    this.dialog
      .open(DeleteElementComponent, { data: document, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const originalData = [...this.resourceList.data];
          this.resourceList.data = this.resourceList.data.filter(
            (d) => d.slug !== document.slug
          );

          if (document.slug) {
            this.resourceList.isLoading.set(true);
            this.genericApi
              .delete(this.type, document.slug)
              .pipe(
                // 3. Utiliser finalize pour garantir l'exécution, que ce soit un succès ou une erreur
                finalize(() => {
                  // Le spinner est désactivé à la fin de l'opération, MAIS c'est le refresh qui s'en chargera
                  // en mettant isLoading à false, donc cette ligne n'est pas nécessaire si on refresh toujours.
                  // this.genericListComponent.isLoading.set(false);
                })
              )
              .subscribe({
                next: (res) => {
                  if (res) {
                    this.showMessage(res.message);
                    this.resourceList.refresh();
                  }
                },
                error: (err) => {
                  this.resourceList.data = originalData;
                  this.showMessage(err.error.message);
                  this.resourceList.refresh();
                }
              });
          }
        }
      });
  }
  openDeleteAllDocumentDialog(documents: Document[]) {
    this.dialog
      .open(DeleteElementComponent, { data: documents, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const slugs = documents.map((document) => document.slug);
          this.resourceList.isLoading.set(true);
          this.genericApi
            .deleteAll(this.type, slugs)
            .pipe(finalize(() => this.resourceList.refresh()))
            .subscribe((res) => {
              if (res) {
                this.showMessage(res.message);
                this.isLoading.set(false);
                this.resourceList.refresh();
              }
            });
        }
      });
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }

  getDocumentUploadStatus(document: Document) {
    return this.uploadStatusService.getUploadStatus(`doc-${document.id}`);
  }

  isDocumentUploading(document: Document): boolean {
    return this.uploadStatusService.isUploadInProgress(`doc-${document.id}`);
  }

  openShowDocumentDialog(document: Document) {
    this.dialog.open(DocumentShowComponent, { data: document, width: '650px' });
  }
}
