// src/app/pages/dashboard/menus.resolver.ts
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';
import { Menu } from 'src/app/interfaces/Menu';
import { GenericApiService } from 'src/app/services/generic-api.service';

/**
 * Resolver for menus data
 * Loads user menus before route activation
 */
export const menusResolver: ResolveFn<
  ResponseGenericApi<Menu[]> | null
> = () => {
  const genericApi = inject(GenericApiService);

  return genericApi.getAlls<Menu>('user-menus').pipe(
    map((response) => {
      return response;
    }),
    catchError((_error) => {
      return of(null);
    })
  );
};
