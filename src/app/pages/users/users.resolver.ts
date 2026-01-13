// src/app/pages/users/users.resolver.ts
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { UsersService } from './users.service';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Resolver for users data
 * Loads users before route activation
 */
export const usersResolver: ResolveFn<ResponseGlobalServer> = (
  route: ActivatedRouteSnapshot
) => {
  const usersService = inject(UsersService);
  const current_page = environment.current_page;
  return usersService.getUsers(current_page).pipe(
    map((response) => {
      return response;
    }),
    catchError((_error) => {
      // Return a default or empty response
      return of({ data: [], meta: { total: 0 } } as ResponseGlobalServer);
    })
  );
};
