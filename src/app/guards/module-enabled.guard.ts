import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';

export const moduleEnabledGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // The module config is passed in the route data
  const moduleConfig = route.data?.['moduleConfig'] as ModuleConfig<any>;

  // If the enabled flag is explicitly false, redirect to not-found
  if (moduleConfig && moduleConfig.enabled === false) {
    router.navigate(['/not-found']);
    return false;
  }

  // Otherwise, allow access
  return true;
};
