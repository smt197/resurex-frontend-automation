// src/app/services/settings.resolver.ts
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { catchError, map, of } from 'rxjs';
import { SettingsService } from './settings.service';
import { Setting } from '../interfaces/setting';

/**
 * Resolver for settings data
 * Loads settings before route activation
 */
export const settingsResolver: ResolveFn<ResponseGlobalServer> = (
  route: ActivatedRouteSnapshot
) => {
  const settingsService = inject(SettingsService);
  return settingsService.getSettings().pipe(
    map((response: Setting) => {
      if (response) {
        settingsService.setting = response;
      }
      return response;
    }),
    catchError((_error) => {
      // Return a default or empty response
      return of({ data: [] } as ResponseGlobalServer);
    })
  );
};
