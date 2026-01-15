import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebsocketService, DeploymentStatus } from './websocket.service';

export interface DeploymentTracker {
  moduleSlug: string;
  branchName: string;
  status: DeploymentStatus['status'];
  startedAt: Date;
  lastUpdate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DeploymentService {
  private readonly apiUrl = `${environment.apiUrl}/admin/deployments`;

  private readonly _activeDeployments = new BehaviorSubject<DeploymentTracker[]>([]);
  readonly activeDeployments$ = this._activeDeployments.asObservable();

  private readonly _deploymentCompleted = new Subject<DeploymentStatus>();
  readonly deploymentCompleted$ = this._deploymentCompleted.asObservable();

  constructor(
    private http: HttpClient,
    private websocketService: WebsocketService
  ) {
    this.initWebSocketListener();
  }

  private initWebSocketListener(): void {
    this.websocketService.listenForDeploymentUpdates().subscribe((status) => {
      this.updateDeploymentStatus(status);

      if (status.status === 'success' || status.status === 'failed') {
        this._deploymentCompleted.next(status);
        this.removeDeployment(status.module_slug);
      }
    });
  }

  /**
   * Start tracking a deployment for a module
   */
  trackDeployment(moduleSlug: string, branchName: string): void {
    const current = this._activeDeployments.getValue();
    const existing = current.find((d) => d.moduleSlug === moduleSlug);

    if (!existing) {
      this._activeDeployments.next([
        ...current,
        {
          moduleSlug,
          branchName,
          status: 'pending',
          startedAt: new Date()
        }
      ]);
    }
  }

  /**
   * Update the status of a tracked deployment
   */
  private updateDeploymentStatus(status: DeploymentStatus): void {
    const current = this._activeDeployments.getValue();
    const updated = current.map((d) => {
      if (d.moduleSlug === status.module_slug) {
        return {
          ...d,
          status: status.status,
          lastUpdate: new Date()
        };
      }
      return d;
    });
    this._activeDeployments.next(updated);
  }

  /**
   * Remove a deployment from tracking
   */
  private removeDeployment(moduleSlug: string): void {
    const current = this._activeDeployments.getValue();
    this._activeDeployments.next(current.filter((d) => d.moduleSlug !== moduleSlug));
  }

  /**
   * Get deployment status from backend
   */
  getDeploymentStatus(moduleSlug: string): Observable<DeploymentStatus> {
    return this.http.get<DeploymentStatus>(`${this.apiUrl}/${moduleSlug}/status`);
  }

  /**
   * Get all active deployments from backend
   */
  getActiveDeployments(): Observable<DeploymentStatus[]> {
    return this.http.get<DeploymentStatus[]>(`${this.apiUrl}/active`);
  }

  /**
   * Check if a module has an active deployment
   */
  isDeploying(moduleSlug: string): Observable<boolean> {
    return new Observable((observer) => {
      this.activeDeployments$.subscribe((deployments) => {
        observer.next(deployments.some((d) => d.moduleSlug === moduleSlug));
      });
    });
  }

  /**
   * Subscribe to deployment updates for a specific module
   */
  watchModuleDeployment(moduleSlug: string): Observable<DeploymentStatus> {
    return this.websocketService.listenForModuleDeployment(moduleSlug);
  }
}
