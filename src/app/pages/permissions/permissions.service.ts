import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { PermissionCreateUpdateModel } from 'src/app/models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiUrl = environment.apiUrl;
  private _response: ResponseGlobalServer | null = null;

  constructor(private http: HttpClient) {}

  getAllPermission(
    page: number = 1,
    perPage: number = 10
  ): Observable<ResponseGlobalServer> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());
    return this.http.get<ResponseGlobalServer>(`${this.apiUrl}/permissions`, { params });
  }

  searchPermissions(searchTerm: string): Observable<ResponseGlobalServer> {
    const payload = {
      search: {
        value: searchTerm ? searchTerm.trim() : ''
      }
    };

    // Send the POST request
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/permissions/search`,
      payload
    );
  }

  getPermission(id: number): Observable<ResponseGlobalServer> {
    return this.http.get<ResponseGlobalServer>(
      `${this.apiUrl}/permissions/${id}`
    );
  }

  createPermission(
    permission: PermissionCreateUpdateModel
  ): Observable<ResponseGlobalServer> {
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/permissions`,
      permission
    );
  }

  updatePermission(
    permissionId: number,
    permissionData: PermissionCreateUpdateModel
  ): Observable<ResponseGlobalServer> {
    const data = {
      ...permissionData,
      _method: 'PUT'
    };

    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/permissions/${permissionId}`,
      data
    );
  }

  deletePermission(id: number): Observable<ResponseGlobalServer> {
    return this.http.delete<ResponseGlobalServer>(
      `${this.apiUrl}/permissions/${id}`
    );
  }
}
