import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { UserStatsWithHistory } from 'src/app/interfaces/UserStats';
import { environment } from 'src/environments/environment';

export interface CountResponse {
  count: number;
}

@Injectable({
  providedIn: 'root' // The service is provided in the root injector (app-wide singleton)
})
export class DashboardService {
  private apiUrl = environment.apiUrl; // Base API URL from environment configuration

  constructor(private http: HttpClient) {}

  /**
   * Fetches the list of users from the server.
   * @returns An Observable containing the response from the server.
   */
  getUserStats(): Observable<UserStatsWithHistory> {
    // Changer le type de retour
    return this.http.get<UserStatsWithHistory>(`${this.apiUrl}/users/stats`);
  }
  getAllLogs(
    page: number = 1,
    perPage: number = 5,
    search: string = '',
    sortBy: string = 'created_at',
    sortOrder: 'asc' | 'desc' = 'desc',
    dateDebut?: string,
    dateFin?: string
  ): Observable<ResponseGlobalServer> {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      search,
      sort_by: sortBy,
      sort_order: sortOrder
    });
    if (dateDebut) params.append('date_debut', dateDebut);
    if (dateFin) params.append('date_fin', dateFin);

    return this.http.get<ResponseGlobalServer>(
      `${this.apiUrl}/activity-logs?${params.toString()}`
    );
  }

  getRolesCount(): Observable<CountResponse> {
    return this.http.get<CountResponse>(`${this.apiUrl}/roles/count`);
  }

  getPermissionsCount(): Observable<CountResponse> {
    return this.http.get<CountResponse>(`${this.apiUrl}/permissions/count`);
  }

  // AJOUT : Méthode pour obtenir le nombre total de rôles
  // getRolesCount(): Observable<number> {
  //   return this.http
  //     .get<{ count: number }>(`${this.apiUrl}/roles/count`)
  //     .pipe(map((response) => response.count));
  // }

  // // AJOUT : Méthode pour obtenir le nombre total de permissions
  // getPermissionsCount(): Observable<number> {
  //   return this.http
  //     .get<{ count: number }>(`${this.apiUrl}/permissions/count`)
  //     .pipe(map((response) => response.count));
  // }
}
