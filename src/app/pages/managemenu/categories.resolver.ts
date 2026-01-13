// src/app/pages/managemenu/categories.resolver.ts
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';
import { Category } from 'src/app/interfaces/Category';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { environment } from 'src/environments/environment';

/**
 * Resolver for categories data
 * Loads categories before route activation
 */
export const categoriesResolver: ResolveFn<ResponseGenericApi<Category[]> | null> = () => {
  const genericApi = inject(GenericApiService);
  const current_page = environment.current_page;
  const pagesize = environment.pageSize;

  return genericApi.getAll<Category>('categories', current_page, pagesize).pipe(
    map((response) => {
      return response;
    }),
    catchError((_error) => {
      return of({ data: [], meta: { total: 0, page: 1, per_page: 5 } } as ResponseGenericApi<Category[]>);
    })
  );
};