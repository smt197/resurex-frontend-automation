// src/app/pages/managemenu/roles.resolver.ts
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';
import { Roles } from 'src/app/interfaces/Roles';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { environment } from 'src/environments/environment';

/**
 * Resolver for roles data
 * Loads roles before route activation
 */
export const rolesResolver: ResolveFn<ResponseGenericApi<Roles[]> | null> = () => {
  const genericApi = inject(GenericApiService);
  const current_page = environment.current_page;
  const pagesize = environment.pageSize;

  return genericApi.getAll<Roles>('roles', current_page, pagesize).pipe(
    map((response) => {
      return response;
    }),
    catchError((_error) => {
      return of({ data: [], meta: { total: 0, page: 1, per_page: 5 } } as ResponseGenericApi<Roles[]>);
    })
  );
};