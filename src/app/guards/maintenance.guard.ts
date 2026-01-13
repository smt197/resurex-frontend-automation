import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, catchError, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth-service';
import { Authority } from 'src/static-data/authority.constants';
import { AdminAuthService } from '../services/admin-auth.service';

export const maintenanceGuard: CanActivateFn = (_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const adminAuthService = inject(AdminAuthService);
  const authService = inject(AuthService);
  const router = inject(Router);

  // Routes toujours accessibles sans vérification
  const alwaysAccessiblePaths = [
    '/login/admin',
    '/admin/maintenance'
  ];

  // Si la route est toujours accessible, laisser passer
  if (alwaysAccessiblePaths.some((path) => state.url.startsWith(path))) {
    return true;
  }

  // Fonction pour vérifier si l'utilisateur est admin
  const isAdmin = (): boolean => {
    const user = authService.user;
    if (!user || !user.roles) return false;
    return user.roles.some(role => role.name === Authority.ADMIN);
  };

  // Si c'est la page de maintenance, vérifier si l'admin est connecté
  if (state.url.startsWith('/maintenance-mode')) {
    // Vérification immédiate en mémoire
    if (isAdmin()) {
      router.navigate(['/index']);
      return false;
    }

    // Vérification avec le serveur
    return authService.authenticate().pipe(
      map((response) => {
        const user = response.user;
        if (user && user.roles?.some(role => role.name === Authority.ADMIN)) {
          // Admin connecté : rediriger vers /index
          router.navigate(['/index']);
          return false;
        }
        // Utilisateur normal : laisser accéder à la page de maintenance
        return true;
      }),
      catchError(() => {
        // En cas d'erreur, laisser accéder à la page de maintenance
        return of(true);
      })
    );
  }

  return adminAuthService.checkMaintenanceStatus().pipe(
    switchMap((status) => {
      if (status.is_active) {
        // Vérification immédiate en mémoire pour l'admin
        if (isAdmin()) {
          // Admin déjà authentifié : laisser passer immédiatement
          return of(true);
        }

        // Vérifier avec le serveur si l'utilisateur est un admin authentifié
        return authService.authenticate().pipe(
          map((response) => {
            const user = response.user;
            if (user && user.roles?.some(role => role.name === Authority.ADMIN)) {
              // Admin authentifié : laisser passer vers /index
              return true;
            } else {
              // Utilisateur normal : rediriger vers la page de maintenance
              router.navigate(['/maintenance-mode']);
              return false;
            }
          }),
          catchError(() => {
            // En cas d'erreur d'authentification, considérer comme utilisateur normal
            router.navigate(['/maintenance-mode']);
            return of(false);
          })
        );
      }
      // Si le mode maintenance n'est pas actif, laisser passer
      return of(true);
    }),
    catchError(() => {
      // En cas d'erreur, laisser passer
      return of(true);
    })
  );
};
