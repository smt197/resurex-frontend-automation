import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

export interface TemporyFile {
  id: number;
  user_id: number;
  path: string;
  original_name: string;
  type: string;
  collection: string;
  hash_field: string;
  confirmed: boolean;
  created_at: string;
  updated_at: string;
}

export interface FileUploadResponse {
  message: string;
  data: TemporyFile;
  success: boolean;
}

export interface ChunkUploadResponse {
  success: boolean;
  message: string;
  completed: boolean;
  progress?: number;
  data?: TemporyFile;
}

export interface FileUploadProgress {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
  response?: TemporyFile;
}

// Interface pour la file d'attente d'upload
interface QueuedUpload {
  file: File;
  collection: string;
  hashField: string;
  observer: any;
  fileKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private uploadProgress$ = new BehaviorSubject<Map<string, FileUploadProgress>>(new Map());

  // Configuration du chunking
  private readonly CHUNK_SIZE = 2 * 1024 * 1024; // 2 MB par chunk
  private readonly USE_CHUNKED_UPLOAD_THRESHOLD = 5 * 1024 * 1024; // Utiliser chunks si > 5 MB

  // File d'attente pour limiter les uploads concurrents
  private uploadQueue: QueuedUpload[] = [];
  private activeUploads = 0;
  private readonly MAX_CONCURRENT_UPLOADS = 2; // Maximum 2 uploads en parallèle
  private readonly MAX_RETRIES = 3; // Nombre maximum de tentatives par chunk
  private readonly RETRY_DELAY = 2000; // Délai entre les tentatives (ms)

  constructor(private http: HttpClient, private translate: TranslateService) {}

  /**
   * Get upload progress observable
   */
  getUploadProgress(): Observable<Map<string, FileUploadProgress>> {
    return this.uploadProgress$.asObservable();
  }

  /**
   * Upload a single file to temporary storage
   * Automatically uses chunked upload for large files (> 5 MB)
   * Utilise une file d'attente pour limiter les uploads concurrents
   */
  uploadFile(
    file: File,
    collection: string,
    hashField: string = 'document_hash'
  ): Observable<FileUploadProgress> {
    const fileKey = this.getFileKey(file, collection);

    return new Observable<FileUploadProgress>(observer => {
      // Ajouter à la file d'attente
      const queuedUpload: QueuedUpload = {
        file,
        collection,
        hashField,
        observer,
        fileKey
      };

      // Marquer comme en attente
      const pendingProgress: FileUploadProgress = {
        file,
        progress: 0,
        status: 'pending'
      };
      this.updateProgress(fileKey, pendingProgress);
      observer.next(pendingProgress);

      // Ajouter à la file et traiter
      this.uploadQueue.push(queuedUpload);
      this.processQueue();
    });
  }

  /**
   * Traiter la file d'attente d'upload
   */
  private processQueue(): void {
    while (this.activeUploads < this.MAX_CONCURRENT_UPLOADS && this.uploadQueue.length > 0) {
      const upload = this.uploadQueue.shift();
      if (upload) {
        this.activeUploads++;
        this.startUpload(upload);
      }
    }
  }

  /**
   * Démarrer l'upload d'un fichier
   */
  private startUpload(queuedUpload: QueuedUpload): void {
    const { file, collection, hashField, observer, fileKey } = queuedUpload;

    // Choisir la méthode d'upload appropriée
    const upload$ = file.size > this.USE_CHUNKED_UPLOAD_THRESHOLD
      ? this.executeChunkedUpload(file, collection, hashField, fileKey)
      : this.executeCompleteUpload(file, collection, hashField, fileKey);

    upload$.subscribe({
      next: (progress) => {
        observer.next(progress);
      },
      error: (error) => {
        this.activeUploads--;
        observer.error(error);
        this.processQueue(); // Traiter le prochain dans la file
      },
      complete: () => {
        this.activeUploads--;
        observer.complete();
        this.processQueue(); // Traiter le prochain dans la file
      }
    });
  }

  /**
   * Exécuter l'upload complet d'un fichier (pour petits fichiers < 5 MB)
   */
  private executeCompleteUpload(
    file: File,
    collection: string,
    hashField: string,
    fileKey: string
  ): Observable<FileUploadProgress> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('collection', collection);
    formData.append('hashField', hashField);
    formData.append('originalName', file.name);

    // Mettre à jour le statut en "uploading"
    const initialProgress: FileUploadProgress = {
      file,
      progress: 0,
      status: 'uploading'
    };
    this.updateProgress(fileKey, initialProgress);

    return new Observable<FileUploadProgress>(observer => {
      observer.next(initialProgress);

      this.http
        .post<FileUploadResponse>(`${this.apiUrl}/files/upload-complete`, formData, {
          reportProgress: true,
          observe: 'events'
        })
        .subscribe({
          next: (event: HttpEvent<FileUploadResponse>) => {
            if (event.type === HttpEventType.UploadProgress && event.total) {
              const progress = Math.round((100 * event.loaded) / event.total);
              const progressUpdate: FileUploadProgress = {
                file,
                progress,
                status: 'uploading'
              };
              this.updateProgress(fileKey, progressUpdate);
              observer.next(progressUpdate);
            } else if (event.type === HttpEventType.Response && event.body) {
              const completedProgress: FileUploadProgress = {
                file,
                progress: 100,
                status: 'completed',
                response: event.body.data
              };
              this.updateProgress(fileKey, completedProgress);
              observer.next(completedProgress);
              observer.complete();
            }
          },
          error: (error) => {
            const errorProgress: FileUploadProgress = {
              file,
              progress: 0,
              status: 'error',
              error: error.error?.message || this.translate.instant('document.errors.uploadError')
            };
            this.updateProgress(fileKey, errorProgress);
            observer.error(errorProgress);
          }
        });
    });
  }

  /**
   * Exécuter l'upload par chunks (pour gros fichiers > 5 MB)
   * Chunks de 2 MB chacun
   */
  private executeChunkedUpload(
    file: File,
    collection: string,
    hashField: string,
    fileKey: string
  ): Observable<FileUploadProgress> {
    const totalChunks = Math.ceil(file.size / this.CHUNK_SIZE);
    const fileIdentifier = this.generateFileIdentifier(file);

    // Mettre à jour le statut en "uploading"
    const initialProgress: FileUploadProgress = {
      file,
      progress: 0,
      status: 'uploading'
    };
    this.updateProgress(fileKey, initialProgress);

    return new Observable<FileUploadProgress>(observer => {
      observer.next(initialProgress);

      this.uploadChunksSequentially(
        file,
        collection,
        hashField,
        fileIdentifier,
        totalChunks,
        0,
        fileKey,
        observer
      );
    });
  }

  /**
   * Upload chunks one by one sequentially with retry mechanism
   */
  private uploadChunksSequentially(
    file: File,
    collection: string,
    hashField: string,
    fileIdentifier: string,
    totalChunks: number,
    currentChunk: number,
    fileKey: string,
    observer: any,
    retryCount: number = 0
  ): void {
    if (currentChunk >= totalChunks) {
      return;
    }

    const start = currentChunk * this.CHUNK_SIZE;
    const end = Math.min(start + this.CHUNK_SIZE, file.size);
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append('file', chunk, `chunk_${currentChunk}`);
    formData.append('chunkIndex', currentChunk.toString());
    formData.append('totalChunks', totalChunks.toString());
    formData.append('fileIdentifier', fileIdentifier);
    formData.append('originalName', file.name);
    formData.append('collection', collection);
    formData.append('hashField', hashField);

    this.http.post<ChunkUploadResponse>(`${this.apiUrl}/files/upload-chunk`, formData)
      .subscribe({
        next: (response) => {
          const overallProgress = Math.round(((currentChunk + 1) / totalChunks) * 100);

          const progressUpdate: FileUploadProgress = {
            file,
            progress: overallProgress,
            status: 'uploading'
          };
          this.updateProgress(fileKey, progressUpdate);
          observer.next(progressUpdate);

          if (response.completed && response.data) {
            // Tous les chunks sont uploadés
            const completedProgress: FileUploadProgress = {
              file,
              progress: 100,
              status: 'completed',
              response: response.data
            };
            this.updateProgress(fileKey, completedProgress);
            observer.next(completedProgress);
            observer.complete();
          } else {
            // Uploader le chunk suivant (reset retry count)
            this.uploadChunksSequentially(
              file,
              collection,
              hashField,
              fileIdentifier,
              totalChunks,
              currentChunk + 1,
              fileKey,
              observer,
              0 // Reset retry count for next chunk
            );
          }
        },
        error: (error) => {
          // Retry logic
          if (retryCount < this.MAX_RETRIES) {
            console.warn(`Chunk ${currentChunk} failed, retrying (${retryCount + 1}/${this.MAX_RETRIES})...`);

            // Attendre avant de réessayer
            setTimeout(() => {
              this.uploadChunksSequentially(
                file,
                collection,
                hashField,
                fileIdentifier,
                totalChunks,
                currentChunk,
                fileKey,
                observer,
                retryCount + 1
              );
            }, this.RETRY_DELAY * (retryCount + 1)); // Délai exponentiel
          } else {
            // Toutes les tentatives ont échoué
            const errorProgress: FileUploadProgress = {
              file,
              progress: 0,
              status: 'error',
              error: error.error?.message || this.translate.instant('document.errors.uploadError')
            };
            this.updateProgress(fileKey, errorProgress);
            observer.error(errorProgress);
          }
        }
      });
  }

  /**
   * Generate a unique identifier for the file
   */
  private generateFileIdentifier(file: File): string {
    return `${file.name}_${file.size}_${file.lastModified}_${Date.now()}`;
  }

  /**
   * Upload multiple files
   */
  uploadFiles(
    files: File[],
    collection: string,
    hashField: string = 'document_hash'
  ): Observable<FileUploadProgress[]> {
    return new Observable<FileUploadProgress[]>(observer => {
      const progressList: FileUploadProgress[] = [];
      let completedCount = 0;

      files.forEach((file, index) => {
        this.uploadFile(file, collection, hashField).subscribe({
          next: (progress) => {
            progressList[index] = progress;
            observer.next([...progressList]);
          },
          complete: () => {
            completedCount++;
            if (completedCount === files.length) {
              observer.complete();
            }
          },
          error: (error) => {
            progressList[index] = error;
            completedCount++;
            if (completedCount === files.length) {
              observer.complete();
            }
          }
        });
      });
    });
  }

  /**
   * Delete a temporary file
   */
  deleteTemporaryFile(fileId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/files/${fileId}`);
  }

  /**
   * Get all unconfirmed temporary files for current user
   */
  getUnconfirmedFiles(): Observable<TemporyFile[]> {
    return this.http
      .get<{ data: TemporyFile[] }>(`${this.apiUrl}/files/user-files`)
      .pipe(map(response => response.data));
  }

  /**
   * Clear all unconfirmed temporary files
   */
  clearUnconfirmedFiles(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/files/user-files`);
  }

  /**
   * Update progress map
   */
  private updateProgress(fileKey: string, progress: FileUploadProgress): void {
    const currentProgress = this.uploadProgress$.value;
    currentProgress.set(fileKey, progress);
    this.uploadProgress$.next(new Map(currentProgress));
  }

  /**
   * Generate unique key for file + collection
   */
  private getFileKey(file: File, collection: string): string {
    return `${collection}_${file.name}_${file.size}_${file.lastModified}`;
  }

  /**
   * Reset progress tracking and clear the upload queue
   */
  resetProgress(): void {
    this.uploadQueue = [];
    this.activeUploads = 0;
    this.uploadProgress$.next(new Map());
  }

  /**
   * Get number of pending uploads in the queue
   */
  getPendingUploadsCount(): number {
    return this.uploadQueue.length;
  }

  /**
   * Get number of active uploads
   */
  getActiveUploadsCount(): number {
    return this.activeUploads;
  }

  /**
   * Get progress for specific file
   */
  getFileProgress(file: File, collection: string): FileUploadProgress | undefined {
    const fileKey = this.getFileKey(file, collection);
    return this.uploadProgress$.value.get(fileKey);
  }

  /**
   * Check if file is uploading
   */
  isFileUploading(file: File, collection: string): boolean {
    const progress = this.getFileProgress(file, collection);
    return progress?.status === 'uploading';
  }

  /**
   * Check if file upload is completed
   */
  isFileUploaded(file: File, collection: string): boolean {
    const progress = this.getFileProgress(file, collection);
    return progress?.status === 'completed';
  }

  /**
   * Get uploaded file response
   */
  getUploadedFileResponse(file: File, collection: string): TemporyFile | undefined {
    const progress = this.getFileProgress(file, collection);
    return progress?.response;
  }
}
