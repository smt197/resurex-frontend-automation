import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GithubRepository, GithubBranch, GithubCommit } from 'src/app/interfaces/GithubRepository';

interface PaginatedResponse<T> {
  data: T[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
  };
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly apiUrl = `${environment.apiUrl}/github-repositories`;

  // Subject pour notifier les changements
  private repositoryCreated = new Subject<GithubRepository>();
  private repositoryUpdated = new Subject<GithubRepository>();
  private repositoryDeleted = new Subject<string>();

  public repositoryCreated$ = this.repositoryCreated.asObservable();
  public repositoryUpdated$ = this.repositoryUpdated.asObservable();
  public repositoryDeleted$ = this.repositoryDeleted.asObservable();

  constructor(private http: HttpClient) {}

  // Repository operations
  getAllRepositories(limit: number = 100): Observable<any> {
    // Charger les repositories avec le maximum autorisé par le backend (100)
    const params = { limit: limit.toString() };
    return this.http.get<any>(`${this.apiUrl}`, { params });
  }

  getCollaborationRepositories(limit: number = 100): Observable<any> {
    // Charger uniquement les repositories en collaboration (is_owner: false)
    const params = { limit: limit.toString(), 'filter[is_owner]': 'false' };
    return this.http.get<any>(`${this.apiUrl}`, { params });
  }

  getRepository(slug: string): Observable<GithubRepository> {
    return this.http.get<GithubRepository>(`${this.apiUrl}/${slug}`);
  }

  createRepository(repository: Partial<GithubRepository>): Observable<GithubRepository> {
    return this.http.post<GithubRepository>(`${this.apiUrl}`, repository);
  }

  updateRepository(slug: string, repository: Partial<GithubRepository>): Observable<GithubRepository> {
    return this.http.put<GithubRepository>(`${this.apiUrl}/${slug}`, repository);
  }

  deleteRepository(slug: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${slug}`);
  }

  syncRepository(slug: string): Observable<GithubRepository> {
    return this.http.post<GithubRepository>(`${this.apiUrl}/${slug}/sync`, {});
  }

  // Branch operations
  getBranches(repositorySlug: string, page: number = 1, perPage: number = 5): Observable<PaginatedResponse<GithubBranch>> {
    const params = { page: page.toString(), per_page: perPage.toString() };
    return this.http.get<PaginatedResponse<GithubBranch>>(`${this.apiUrl}/${repositorySlug}/branches`, { params });
  }

  createBranch(repositorySlug: string, branch: Partial<GithubBranch>): Observable<GithubBranch> {
    return this.http.post<{ data: GithubBranch }>(`${this.apiUrl}/${repositorySlug}/branches`, branch)
      .pipe(
        map(response => response.data)
      );
  }

  deleteBranch(repositorySlug: string, branchName: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${repositorySlug}/branches/${branchName}`);
  }

  protectBranch(repositorySlug: string, branchName: string): Observable<GithubBranch> {
    return this.http.post<{ data: GithubBranch }>(`${this.apiUrl}/${repositorySlug}/branches/${branchName}/protect`, {})
      .pipe(
        map(response => response.data)
      );
  }

  unprotectBranch(repositorySlug: string, branchName: string): Observable<GithubBranch> {
    return this.http.post<{ data: GithubBranch }>(`${this.apiUrl}/${repositorySlug}/branches/${branchName}/unprotect`, {})
      .pipe(
        map(response => response.data)
      );
  }

  // Commit operations
  getCommits(repositorySlug: string, branchName?: string, page: number = 1): Observable<GithubCommit[]> {
    const params: any = { page };
    if (branchName) {
      params.branch = branchName;
    }
    return this.http.get<GithubCommit[]>(`${this.apiUrl}/${repositorySlug}/commits`, { params });
  }

  // Webhook operations
  createWebhook(repositorySlug: string, webhook: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${repositorySlug}/webhooks`, webhook);
  }

  deleteWebhook(repositorySlug: string, webhookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${repositorySlug}/webhooks/${webhookId}`);
  }

  // Sync from GitHub
  syncFromGithub(): Observable<{ synced: number; updated: number; errors: number; total: number; message: string }> {
    return this.http.post<{ synced: number; updated: number; errors: number; total: number; message: string }>(`${this.apiUrl}/sync-from-github`, {});
  }

  // Notify events
  notifyRepositoryCreated(repository: GithubRepository): void {
    this.repositoryCreated.next(repository);
  }

  notifyRepositoryUpdated(repository: GithubRepository): void {
    this.repositoryUpdated.next(repository);
  }

  notifyRepositoryDeleted(slug: string): void {
    this.repositoryDeleted.next(slug);
  }
}
