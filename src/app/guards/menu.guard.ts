import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Menu } from 'src/app/interfaces/Menu';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { map, catchError, of } from 'rxjs';

export const menuGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const genericApi = inject(GenericApiService);

  // Try to get menus from parent route data first
  let parent = route.parent;
  let menusData: ResponseGenericApi<Menu[]> | null = null;

  while (parent) {
    if (parent.data && parent.data['menusData']) {
      menusData = parent.data['menusData'];
      break;
    }
    parent = parent.parent;
  }

  // If menus are already loaded, check them synchronously
  if (menusData && menusData.data) {
    const result = checkMenuAccess(menusData.data as Menu[], state.url, router);
    return result;
  }

  // If menus are not loaded, fetch them asynchronously
  return genericApi.getAlls<Menu>('user-menus').pipe(
    map((response) => {
      if (!response || !response.data) {
        return true;
      }
      return checkMenuAccess(response.data as Menu[], state.url, router);
    }),
    catchError((error) => {
      console.error('❌ MenuGuard - Error loading menus:', error);
      return of(true); // Allow access on error
    })
  );
};

/**
 * Check if the current URL is accessible based on menu disable status
 */
function checkMenuAccess(menus: Menu[], url: string, router: Router): boolean {
  // Get current URL and normalize it (remove query params and fragments)
  const currentUrl = url.split('?')[0].split('#')[0];

  // Check if any disabled menu matches the current URL or is a parent route
  const matchingMenu = menus.find((menu) => {
    if (menu.disable !== 0) {
      return false; // Skip enabled menus
    }

    // Normalize menu route (ensure it starts with /index/)
    let menuRoute = menu.route;
    if (!menuRoute.startsWith('/index/')) {
      menuRoute = '/index/' + menuRoute.replace(/^\/+/, '');
    }

    // Exact match
    if (currentUrl === menuRoute) {
      return true;
    }

    // Check if current URL is a child route of this menu
    // For example, if menu.route is /index/document and currentUrl is /index/document/create
    if (currentUrl.startsWith(menuRoute + '/')) {
      return true;
    }

    return false;
  });

  // If a disabled menu matches, redirect to not-found
  if (matchingMenu) {
    router.navigate(['/index/not-found']);
    return false;
  }

  return true;
}
