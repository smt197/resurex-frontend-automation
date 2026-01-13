import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getAllRole(
    page: number = 1,
    perPage: number = 5
  ): Observable<ResponseGlobalServer> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.http.get<ResponseGlobalServer>(`${this.apiUrl}/roles`, {
      params
    });
  }

  searchRoles(searchTerm: string): Observable<ResponseGlobalServer> {
    const payload = {
      search: {
        value: searchTerm ? searchTerm.trim() : ''
      }
    };
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/roles/search`,
      payload
    );
  }
}
