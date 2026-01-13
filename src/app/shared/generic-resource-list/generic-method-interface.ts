import { Observable } from 'rxjs';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';

export interface ResourceService<T> {
  getAll(page: number, perPage: number, filters?: { [key: string]: any }
  ): Observable<ResponseGenericApi<T[]> | null>;
  getAllSimple?(resourcePath: string): Observable<ResponseGenericApi<T[]> | null>;
  search(term: string,filters?: { [key: string]: any }
  ): Observable<ResponseGenericApi<T[]> | null>;
}