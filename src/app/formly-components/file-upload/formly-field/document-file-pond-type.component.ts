import {
  Component,
  ViewChild,
  inject,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { FilePondOptions } from 'filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { FilepondOptionsConfig } from 'src/app/interfaces/FilepondOptionsConfig';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgFor, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from 'src/app/classes/Utils';
import { FileUploadService, FileUploadProgress } from 'src/app/services/file-upload.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation
);

interface FilePondAbortHandler {
  abort: () => void;
}

@Component({
  selector: 'vex-document-file-pond-type',
  standalone: true,
  imports: [
    FilePondModule,
    TranslateModule,
    MatSnackBarModule,
    NgForOf,
    NgFor,
    MatIconModule
  ],
  templateUrl: './document-file-pond-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentFilePondTypeComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit, OnDestroy
{
  @ViewChild('pond') pondComponent?: FilePondComponent;
  private cd = inject(ChangeDetectorRef);

  pondFiles: File[] = [];
  pondOptionsConfig: FilePondOptions = FilepondOptionsConfig;
  maxTotalSize: number = 10 * 1024 * 1024; // 10 MB
  fileFields: any[] = [];
  activeUploadsCount = 0;

  // Map pour stocker les IDs des fichiers temporaires (uniqueKey -> tempFileId)
  private uploadedFileIds: Map<string, number> = new Map();

  // Compteur pour générer des clés uniques pour chaque upload
  private uploadCounter = 0;

  // Set pour stocker les IDs des fichiers en cours de suppression
  private deletingFileIds: Set<string> = new Set();

  private destroy$ = new Subject<void>();

  constructor(
    private translate: TranslateService,
    private snackbar: MatSnackBar,
    private fileUploadService: FileUploadService
  ) {
    super();
    this.fileFields = [
      {
        key: 'documentAttachment'
      }
    ];
  }

  ngOnInit() {
    this.getTranslation();
    this.initFilePondOptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectedFiles!: { [key: string]: any[] };

  formatFileSize(octets: number) {
    return Utils.formatFileSize(octets);
  }

  getTotalFileSize(inputId: string): number {
    return this.pondFiles.reduce((total, file) => total + file.size, 0);
  }

  getPondOptionsForField(field: {
    key: string;
    label: string;
  }): FilePondOptions {
    const pondOptions: FilePondOptions = {
      ...this.pondOptionsConfig,
      credits: false,
      allowReorder: true,
      allowReplace: false,
      allowMultiple: this.props?.['multiple'] !== false,
      allowImagePreview: true,
      imagePreviewHeight: 170
    };
    return pondOptions;
  }

  getTranslation() {
    this.translate
      .get('global.filepond.label_idle')
      .subscribe((translatedLabel) => {
        this.pondOptionsConfig = {
          ...this.pondOptionsConfig,
          labelIdle: translatedLabel
        };
        this.cd.detectChanges();
      });
  }

  /**
   * Initialize FilePond options with chunked upload support
   */
  private initFilePondOptions(): void {
    const acceptedFileTypes = this.props?.['acceptedFileTypes'] || [];
    const allowMultiple = this.props?.['multiple'] !== false;

    this.pondOptionsConfig = {
      ...this.pondOptionsConfig,
      acceptedFileTypes: acceptedFileTypes,
      allowMultiple: allowMultiple,
      instantUpload: true,
      labelIdle: this.props?.['dropzoneLabel'] || this.translate.instant('global.filepond.label_idle'),
      labelFileProcessing: '',
      labelFileProcessingComplete: '',
      labelTapToCancel: '',
      labelTapToRetry: this.translate.instant('global.retry'),
      labelTapToUndo: '',
      credits: false,
      // Valider la taille avant l'ajout du fichier
      beforeAddFile: (item: any): boolean => {
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (item.file.size > maxSize) {
          this.showMessage(
            this.translate.instant('global.filepond.maxFileSizeExceeded', {
              filesize: this.formatFileSize(item.file.size / (1024 * 1024)),
              maxsize: '10 MB'
            })
          );
          return false;
        }
        return true;
      },
      // Callback avant la suppression pour griser les icônes
      beforeRemoveFile: (fileItem: any): Promise<boolean> => {
        if (fileItem && fileItem.id) {
          this.markFileAsDeleting(fileItem.id, true);
        }
        return Promise.resolve(true);
      },
      server: {
        process: (
          _fieldName: string,
          file: any,
          _metadata: Record<string, unknown>,
          load: (response: string | { [key: string]: any }) => void,
          error: (errorMessage: string) => void,
          progress: (
            isLengthComputable: boolean,
            loaded: number,
            total: number
          ) => void,
          abort: () => void
        ): FilePondAbortHandler => {
          this.activeUploadsCount++;
          this.cd.detectChanges();

          return this.uploadToTemporaryStorage(file as File, load, error, progress, abort);
        },
        revert: (
          uniqueFileId: string,
          load: () => void,
          error: (errorMessage: string) => void
        ): void => {
          // Marquer visuellement le fichier comme en cours de suppression
          this.markFileAsDeletingByServerId(uniqueFileId, true);

          const fileId = this.uploadedFileIds.get(uniqueFileId);
          if (fileId) {
            this.fileUploadService.deleteTemporaryFile(fileId)
              .pipe(takeUntil(this.destroy$))
              .subscribe({
                next: () => {
                  this.uploadedFileIds.delete(uniqueFileId);
                  load();
                },
                error: (err) => {
                  console.error('Error deleting temporary file:', err);
                  this.uploadedFileIds.delete(uniqueFileId);
                  this.markFileAsDeletingByServerId(uniqueFileId, false);
                  error('Erreur lors de la suppression');
                }
              });
          } else {
            load();
          }
        }
      }
    };
  }

  /**
   * Upload file to temporary storage with chunked upload support
   */
  private uploadToTemporaryStorage(
    file: File,
    load: (response: string | { [key: string]: any }) => void,
    error: (errorMessage: string) => void,
    progress: (isLengthComputable: boolean, loaded: number, total: number) => void,
    abort: () => void
  ): FilePondAbortHandler {
    // Générer une clé unique pour cet upload
    const uniqueKey = `${file.name}_${++this.uploadCounter}_${Date.now()}`;

    const upload$ = this.fileUploadService.uploadFile(
      file,
      'documents',
      'document_hash'
    );

    const subscription = upload$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (event: FileUploadProgress): void => {
          if (event.progress !== undefined) {
            progress(true, event.progress, 100);
          }

          if (event.status === 'completed') {
            // Stocker l'ID du fichier temporaire avec la clé unique
            if (event.response?.id) {
              this.uploadedFileIds.set(uniqueKey, event.response.id);
            }
            // Retourner la clé unique à FilePond (sera utilisée comme serverId)
            load(uniqueKey);
            this.decrementUploadCount();
          }
        },
        error: (err: unknown): void => {
          const errorMessage =
            err instanceof Error
              ? err.message
              : 'Erreur lors du chargement';
          console.error('Upload error', err);
          error(errorMessage);
          this.decrementUploadCount();
        }
      });

    return {
      abort: (): void => {
        subscription.unsubscribe();
        abort();
        this.decrementUploadCount();
      }
    };
  }

  /**
   * Marquer un fichier comme en cours de suppression par son ID FilePond
   */
  private markFileAsDeleting(fileId: string, isDeleting: boolean): void {
    if (!this.pondComponent?.['pond']) return;

    const pondElement = this.pondComponent['pond'].element;
    const fileItems = pondElement.querySelectorAll('.filepond--item');

    fileItems.forEach((item: HTMLElement) => {
      const itemId = item.getAttribute('data-filepond-item-id');
      if (itemId === fileId) {
        if (isDeleting) {
          item.classList.add('is-deleting');
          this.deletingFileIds.add(fileId);

          const removeBtn = item.querySelector('.filepond--action-remove-item') as HTMLElement;
          const revertBtn = item.querySelector('.filepond--action-revert-item-processing') as HTMLElement;

          if (removeBtn) {
            removeBtn.style.opacity = '0.3';
            removeBtn.style.pointerEvents = 'none';
            removeBtn.style.cursor = 'not-allowed';
          }
          if (revertBtn) {
            revertBtn.style.opacity = '0.3';
            revertBtn.style.pointerEvents = 'none';
            revertBtn.style.cursor = 'not-allowed';
          }
        } else {
          item.classList.remove('is-deleting');
          this.deletingFileIds.delete(fileId);

          const removeBtn = item.querySelector('.filepond--action-remove-item') as HTMLElement;
          const revertBtn = item.querySelector('.filepond--action-revert-item-processing') as HTMLElement;

          if (removeBtn) {
            removeBtn.style.opacity = '';
            removeBtn.style.pointerEvents = '';
            removeBtn.style.cursor = '';
          }
          if (revertBtn) {
            revertBtn.style.opacity = '';
            revertBtn.style.pointerEvents = '';
            revertBtn.style.cursor = '';
          }
        }
      }
    });

    this.cd.detectChanges();
  }

  /**
   * Marquer un fichier comme en cours de suppression par son serverId
   */
  private markFileAsDeletingByServerId(serverId: string, isDeleting: boolean): void {
    if (!this.pondComponent?.['pond']) return;

    const pondFiles = this.pondComponent['pond'].getFiles();
    const fileItem = pondFiles.find((f: any) => f.serverId === serverId);

    if (fileItem) {
      this.markFileAsDeleting(fileItem.id, isDeleting);
    }
  }

  onAddFile(event: any): void {
    if (event.error) {
      console.error('Filepond error:', event.error);
      this.formControl.setValue([]);
      this.pondFiles = [];
      return;
    }

    const file = event.file.file;
    const existingFileIndex = this.pondFiles.findIndex(
      (f) => f.name === file.name && f.size === file.size
    );

    if (existingFileIndex !== -1) {
      const pondFiles = this.pondComponent?.['pond']?.getFiles();

      if (pondFiles) {
        const fileToRemove = pondFiles.find(
          (pondFile: any) => pondFile.file === file
        );

        if (fileToRemove) {
          this.pondComponent?.['pond']?.removeFile(fileToRemove.id);
        }
      }

      this.showMessage(
        `Le fichier "${file.name}" existe déjà et n'a pas été ajouté.`
      );
      return;
    }

    if (this.props?.['multiple']) {
      this.pondFiles.push(file);
      this.formControl.setValue(this.pondFiles);
    } else {
      this.pondFiles = [file];
      this.formControl.setValue([file]);
    }
  }

  onRemoveFile(event: any): void {
    const fileToRemove = event.file.file;
    const serverId = event.file.serverId;

    // Supprimer du backend si le fichier a été uploadé
    if (serverId) {
      const fileId = this.uploadedFileIds.get(serverId);
      if (fileId) {
        this.fileUploadService.deleteTemporaryFile(fileId)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: () => {
              this.uploadedFileIds.delete(serverId);
            },
            error: (err) => {
              console.error('Error deleting temporary file:', err);
              this.uploadedFileIds.delete(serverId);
            }
          });
      }
    }

    this.pondFiles = this.pondFiles.filter((f) => f !== fileToRemove);
    this.formControl.setValue(this.pondFiles);
    this.cd.detectChanges();
  }

  /**
   * Decrement upload count
   */
  private decrementUploadCount(): void {
    this.activeUploadsCount--;
    if (this.activeUploadsCount < 0) this.activeUploadsCount = 0;
    this.cd.detectChanges();
  }

  /**
   * Check if uploading is in progress
   */
  get isUploading(): boolean {
    return this.activeUploadsCount > 0;
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }
}
