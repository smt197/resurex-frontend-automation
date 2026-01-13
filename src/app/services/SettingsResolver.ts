import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { catchError, map, of } from 'rxjs';
import { SettingsService } from './settings.service';
import { Setting } from '../interfaces/setting';

export const settingsResolver: ResolveFn<ResponseGlobalServer> = (
    route: ActivatedRouteSnapshot,
) => {
  const settingsService = inject(SettingsService);
  return settingsService.getSettings().pipe(
    map((response: Setting) => {
      if (response) {
        settingsService.setting = response;
      }
        return response;
    }),
    catchError(error => {
      console.error('Error loading settings:', error);
      // Return a default or empty response
      return of({ data: [] } as ResponseGlobalServer);
    })
  );
};