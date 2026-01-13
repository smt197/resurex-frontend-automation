// src/app/services/generic-api.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseGenericApi } from '../interfaces/responseGenericApi';

// Constants for filter keys
const FILTER_KEY_PREFIX = 'filter[';
const FILTER_KEY_ROLES = 'roles';
const FILTER_KEY_ROLE = 'role';
const FILTER_KEY_CATEGORY_ID = 'category_id';
const HTTP_METHOD_PATCH = 'PATCH';
const BATCH_ENDPOINT_SUFFIX = '/batch/';

/**
 * Generic API service for CRUD operations
 * Provides standardized methods for interacting with RESTful APIs
 */
@Injectable({
  providedIn: 'root'
})
export class GenericApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  /**
   * Get paginated list of resources with optional filters
   */
  getAll<T>(
    resourcePath: string,
    page: number,
    perPage: number,
    filters: { [key: string]: any } = {}
  ): Observable<ResponseGenericApi<T[]> | null> {
    const url = `${this.apiUrl}/${resourcePath}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    params = this.applyFilters(params, filters);

    return this.http.get<ResponseGenericApi<T[]>>(url, { params }).pipe(
      catchError((_err) => {
        return of(null);
      })
    );
  }

  /**
   * Get all resources without pagination
   */
  getAlls<T>(resourcePath: string): Observable<ResponseGenericApi<T[]> | null> {
    const url = `${this.apiUrl}/${resourcePath}`;
    const params = new HttpParams();

    return this.http.get<ResponseGenericApi<T[]>>(url, { params }).pipe(
      catchError((_err) => {
        return of(null);
      })
    );
  }

  /**
   * Search resources by term with optional filters
   */
  search<T>(
    resourcePath: string,
    term: string,
    filters: { [key: string]: any } = {}
  ): Observable<ResponseGenericApi<T[]> | null> {
    const url = `${this.apiUrl}/${resourcePath}/search`;
    let params = new HttpParams();

    const payload = {
      search: {
        value: term ? term.trim() : ''
      }
    };

    for (const key in filters) {
      if (
        filters.hasOwnProperty(key) &&
        filters[key] !== null &&
        filters[key] !== undefined
      ) {
        if (key === FILTER_KEY_ROLES) {
          params = params.set(`${FILTER_KEY_PREFIX}${FILTER_KEY_ROLES}]`, filters[key]);
        } else {
          params = params.set(`${FILTER_KEY_PREFIX}${key}]`, filters[key]);
        }
      }
    }

    return this.http
      .post<ResponseGenericApi<T[]>>(url, payload, { params })
      .pipe(
        catchError((_err) => {
          return of(null);
        })
      );
  }

  /**
   * Create a new resource
   */
  create<T>(
    resourcePath: string,
    data: FormData
  ): Observable<ResponseGenericApi<T> | null> {
    const url = `${this.apiUrl}/${resourcePath}`;
    return this.http.post<ResponseGenericApi<T>>(url, data).pipe(
      catchError((_err) => {
        return of(null);
      })
    );
  }

  /**
   * Update an existing resource
   */
  update<T>(
    resourcePath: string,
    slug: string,
    data: FormData
  ): Observable<ResponseGenericApi<T>> {
    const url = `${this.apiUrl}/${resourcePath}/${slug}`;
    data.append('_method', HTTP_METHOD_PATCH);

    return this.http.post<ResponseGenericApi<T>>(url, data).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Delete a resource by slug
   */
  delete(
    resourcePath: string,
    slug: string
  ): Observable<ResponseGenericApi | null> {
    const url = `${this.apiUrl}/${resourcePath}/${slug}`;
    return this.http.delete<ResponseGenericApi>(url).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Delete multiple resources by slugs
   */
  deleteAll(
    resourcePath: string,
    slugs: string[]
  ): Observable<ResponseGenericApi | null> {
    const url = `${this.apiUrl}/${resourcePath}${BATCH_ENDPOINT_SUFFIX}`;
    return this.http
      .delete<ResponseGenericApi>(url, {
        body: { resources: slugs }
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  /**
   * Get a single resource by slug
   */
  getOne<T>(
    resourcePath: string,
    slug: string
  ): Observable<ResponseGenericApi<T>> {
    const url = `${this.apiUrl}/${resourcePath}/${slug}`;
    return this.http.get<ResponseGenericApi<T>>(url).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Update a file for a resource
   */
  updateFile<T>(
    resourcePath: string,
    slug: string,
    data: FormData
  ): Observable<ResponseGenericApi<T>> {
    const url = `${this.apiUrl}/${resourcePath}/${slug}`;
    return this.http.post<ResponseGenericApi<T>>(url, data).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Get all resources (simple response without pagination metadata)
   */
  getAllSimple<T>(resourcePath: string): Observable<T | null> {
    const url = `${this.apiUrl}/${resourcePath}`;
    return this.http.get<T>(url).pipe(
      catchError((_err) => {
        return of(null);
      })
    );
  }

  /**
   * Create a resource with JSON payload
   */
  createJson<T>(
    resourcePath: string,
    data: object
  ): Observable<ResponseGenericApi<T>> {
    const url = `${this.apiUrl}/${resourcePath}`;
    return this.http
      .post<ResponseGenericApi<T>>(url, data)
      .pipe(catchError((err) => throwError(() => err)));
  }

  /**
   * Update a resource with JSON payload
   */
  updateJson<T>(
    resourcePath: string,
    slug: string,
    data: object
  ): Observable<ResponseGenericApi<T>> {
    const url = `${this.apiUrl}/${resourcePath}/${slug}`;
    return this.http
      .put<ResponseGenericApi<T>>(url, data)
      .pipe(catchError((err) => throwError(() => err)));
  }

  /**
   * Generic POST request
   */
  post<T>(
    endpoint: string,
    data: object = {}
  ): Observable<ResponseGenericApi<T> | null> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<ResponseGenericApi<T>>(url, data).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Apply filters to HTTP params
   * Handles special cases for 'roles' and 'category_id'
   */
  private applyFilters(
    params: HttpParams,
    filters: { [key: string]: any }
  ): HttpParams {
    for (const key in filters) {
      if (
        filters.hasOwnProperty(key) &&
        filters[key] !== null &&
        filters[key] !== undefined
      ) {
        if (key === FILTER_KEY_ROLES) {
          params = params.set(FILTER_KEY_ROLE, filters[key]);
        } else if (key === FILTER_KEY_CATEGORY_ID) {
          params = params.set(FILTER_KEY_CATEGORY_ID, filters[key]);
        } else {
          params = params.append(`${FILTER_KEY_PREFIX}${key}]`, filters[key]);
        }
      }
    }
    return params;
  }
}
