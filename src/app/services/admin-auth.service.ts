import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {
  AdminLoginResponse,
  AdminUser,
  MaintenanceStatus,
  MaintenanceToggleRequest,
  MaintenanceToggleResponse
} from '../interfaces/Maintenance';
import { credentialsFormLogin } from '../interfaces/Credentials-form-login';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private apiUrl = environment.apiUrl;
  private adminUser: AdminUser | null = null;
  private maintenanceStatusSubject = new BehaviorSubject<MaintenanceStatus>({
      is_active: false,
      message: undefined
    });

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/csrf-cookie`, {
      withCredentials: true
    });
  }

  login(credentials: credentialsFormLogin): Observable<AdminLoginResponse> {
    return this.http
      .post<AdminLoginResponse>(`${this.apiUrl}/admin/login`, credentials, {
        withCredentials: true
      })
      .pipe(
        tap((response) => {
          if (response.user) {
            this.adminUser = response.user;
          }
        })
      );
  }

  checkAuth(): Observable<{ authenticated: boolean; user?: AdminUser }> {
    return this.http
      .get<{ authenticated: boolean; user?: AdminUser }>(
        `${this.apiUrl}/admin/check-auth`,
        { withCredentials: true }
      )
      .pipe(
        tap((response) => {
          if (response.authenticated && response.user) {
            this.adminUser = response.user;
          } else {
            this.adminUser = null;
          }
        })
      );
  }

  getMaintenanceStatus(): Observable<MaintenanceStatus> {
    return this.http.get<MaintenanceStatus>(
      `${this.apiUrl}/maintenance/status`,
      { withCredentials: true }
    );
  }

   checkMaintenanceStatus(): Observable<MaintenanceStatus> {
    return this.http
      .get<MaintenanceStatus>(`${this.apiUrl}/maintenance/status`, {
        withCredentials: true
      })
      .pipe(
        tap((status) => {
          this.maintenanceStatusSubject.next(status);
        })
      );
  }

  toggleMaintenance(
    data: MaintenanceToggleRequest
  ): Observable<MaintenanceToggleResponse> {
    return this.http.post<MaintenanceToggleResponse>(
      `${this.apiUrl}/maintenance/toggle`,
      data,
      { withCredentials: true }
    );
  }

  isAuthenticated(): boolean {
    return this.adminUser !== null;
  }

  getAdminUser(): AdminUser | null {
    return this.adminUser;
  }
}
