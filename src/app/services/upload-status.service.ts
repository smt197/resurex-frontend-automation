import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UploadStatus {
  documentId?: number;
  aliasName?: string;
  isUploading: boolean;
  progress: number;
  status: 'idle' | 'uploading' | 'completed' | 'failed';
  jobId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UploadStatusService {
  private uploadStatuses = new BehaviorSubject<Map<string, UploadStatus>>(
    new Map()
  );
  private progressIntervals = new Map<string, any>();

  private readonly UPLOAD_STORAGE_KEY = 'resurex_upload_statuses';

  constructor() {
    this.restoreUploadStatuses();
  }

  // Démarrer un upload pour un document/alias
  startUpload(identifier: string, documentId?: number): void {
    const currentStatuses = this.uploadStatuses.value;
    currentStatuses.set(identifier, {
      documentId,
      aliasName: identifier,
      isUploading: true,
      progress: 0,
      status: 'uploading'
    });
    this.uploadStatuses.next(new Map(currentStatuses));
    this.saveUploadStatuses();

    // Simuler une progression initiale pendant l'attente du job WebSocket
    this.simulateInitialProgress(identifier);
  }

  private simulateInitialProgress(identifier: string): void {
    // Nettoyer un éventuel interval existant
    this.clearProgressInterval(identifier);

    let progress = 0;
    const interval = setInterval(() => {
      const currentStatuses = this.uploadStatuses.value;
      const status = currentStatuses.get(identifier);

      if (!status || !status.isUploading) {
        this.clearProgressInterval(identifier);
        return;
      }

      // Augmenter progressivement jusqu'à 3% maximum
      // pour indiquer que quelque chose se passe
      progress += Math.random() * 0.5; // Progression très lente

      if (progress >= 3) {
        progress = 3;
        this.clearProgressInterval(identifier);
      }

      status.progress = progress;
      currentStatuses.set(identifier, status);
      this.uploadStatuses.next(new Map(currentStatuses));
      this.saveUploadStatuses();
    }, 2000); // Toutes les 2 secondes

    // Stocker l'interval pour pouvoir le nettoyer
    this.progressIntervals.set(identifier, interval);

    // Nettoyer l'interval après 30 secondes au cas où
    setTimeout(() => {
      this.clearProgressInterval(identifier);
    }, 30000);
  }

  private clearProgressInterval(identifier: string): void {
    const interval = this.progressIntervals.get(identifier);
    if (interval) {
      clearInterval(interval);
      this.progressIntervals.delete(identifier);
    }
  }

  // Mettre à jour le progrès
  updateProgress(identifier: string, progress: number, jobId?: number): void {
    const currentStatuses = this.uploadStatuses.value;
    const existing = currentStatuses.get(identifier);
    if (existing) {
      // Si le nouveau progrès est supérieur au progrès simulé, on l'utilise
      // Sinon on garde le progrès simulé pour éviter les retours en arrière
      const newProgress = Math.max(existing.progress, progress);

      existing.progress = newProgress;
      existing.jobId = jobId;
      currentStatuses.set(identifier, existing);
      this.uploadStatuses.next(new Map(currentStatuses));
      this.saveUploadStatuses();
    }
  }

  // Terminer un upload
  completeUpload(identifier: string): void {
    const currentStatuses = this.uploadStatuses.value;
    const existing = currentStatuses.get(identifier);
    if (existing) {
      existing.isUploading = false;
      existing.progress = 100;
      existing.status = 'completed';
      currentStatuses.set(identifier, existing);
      this.uploadStatuses.next(new Map(currentStatuses));
      this.saveUploadStatuses();
      // Supprimer après 3 secondes
      setTimeout(() => {
        this.removeUploadStatus(identifier);
      }, 3000);
    }
  }

  // Marquer comme échoué
  failUpload(identifier: string): void {
    const currentStatuses = this.uploadStatuses.value;
    const existing = currentStatuses.get(identifier);
    if (existing) {
      existing.isUploading = false;
      existing.status = 'failed';
      currentStatuses.set(identifier, existing);
      this.uploadStatuses.next(new Map(currentStatuses));
      this.saveUploadStatuses();
    }
  }

  // Supprimer un statut
  removeUploadStatus(identifier: string): void {
    const currentStatuses = this.uploadStatuses.value;
    currentStatuses.delete(identifier);
    this.uploadStatuses.next(new Map(currentStatuses));
    this.saveUploadStatuses();
  }

  // Obtenir le statut d'un upload spécifique
  getUploadStatus(identifier: string): Observable<UploadStatus | undefined> {
    return new Observable((observer) => {
      const subscription = this.uploadStatuses.subscribe((statuses) => {
        observer.next(statuses.get(identifier));
      });
      return () => subscription.unsubscribe();
    });
  }

  // Obtenir tous les statuts
  getAllUploadStatuses(): Observable<Map<string, UploadStatus>> {
    return this.uploadStatuses.asObservable();
  }

  // Vérifier si un upload est en cours
  isUploadInProgress(identifier: string): boolean {
    const status = this.uploadStatuses.value.get(identifier);
    return status?.isUploading || false;
  }

  // Méthodes de persistance
  private saveUploadStatuses(): void {
    try {
      const statusesMap = this.uploadStatuses.value;
      const statusesArray = Array.from(statusesMap.entries()).map(
        ([key, value]) => ({
          key,
          value: {
            ...value,
            timestamp: Date.now() // Ajouter un timestamp pour la validation
          }
        })
      );

      localStorage.setItem(
        this.UPLOAD_STORAGE_KEY,
        JSON.stringify(statusesArray)
      );
    } catch (error) {
      console.error('Error saving upload statuses to localStorage:', error);
    }
  }

  private restoreUploadStatuses(): void {
    try {
      const storedData = localStorage.getItem(this.UPLOAD_STORAGE_KEY);
      if (!storedData) return;

      const statusesArray = JSON.parse(storedData);
      const restoredMap = new Map<string, UploadStatus>();
      const now = Date.now();
      const maxAge = 10 * 60 * 1000; // 10 minutes

      statusesArray.forEach((item: any) => {
        // Vérifier que les données ne sont pas trop anciennes
        if (item.value.timestamp && now - item.value.timestamp < maxAge) {
          // Supprimer le timestamp avant de restaurer
          const { timestamp, ...uploadStatus } = item.value;
          restoredMap.set(item.key, uploadStatus);
        }
      });

      if (restoredMap.size > 0) {
        this.uploadStatuses.next(restoredMap);

        // Reprendre les simulations de progression si nécessaire
        restoredMap.forEach((status, identifier) => {
          if (status.isUploading && status.progress < 5) {
            this.simulateInitialProgress(identifier);
          }
        });
      }
    } catch (error) {
      console.error(
        'Error restoring upload statuses from localStorage:',
        error
      );
      this.clearUploadStorage();
    }
  }

  private clearUploadStorage(): void {
    try {
      localStorage.removeItem(this.UPLOAD_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing upload statuses storage:', error);
    }
  }

  // Méthode publique pour nettoyer le cache
  public clearUploadCache(): void {
    this.clearUploadStorage();
    this.uploadStatuses.next(new Map());
    // Nettoyer aussi tous les intervals
    this.progressIntervals.forEach((interval, key) => {
      clearInterval(interval);
    });
    this.progressIntervals.clear();
  }
}
