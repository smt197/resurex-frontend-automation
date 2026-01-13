import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from '../services/auth-service';

export const permissionGuard: CanActivateFn = async (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean> => {
  const permissionService = inject(NgxPermissionsService);
  const router = inject(Router);
  const authService = inject(AuthService);

  const requiredPermissions = next.data['permissions'];

  // Load user permissions first
  loadPermissions(permissionService, authService);

  // Check if user has required permissions
  const hasPermission = await permissionService.hasPermission(requiredPermissions);

  if (hasPermission) {
    return true;
  }

  router.navigate(['/index/notauthorized']);
  return false;
};

function loadPermissions(
  permissionService: NgxPermissionsService,
  authService: AuthService
): void {
  const user = authService.user;

  if (!user) {
    return;
  }

  // Add individual permissions
  if (user.permissions) {
    // Combine them (removing any duplicates)
    const allPermissions = authService.getAllPermission();

    // Load into permission service
    permissionService.loadPermissions(allPermissions);
  }
}
