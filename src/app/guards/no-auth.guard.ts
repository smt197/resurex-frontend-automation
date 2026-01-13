import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { inject } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth-service';

export const noAuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authenticate().pipe(
    map((response) => {
      // Si l'utilisateur est déjà authentifié, rediriger vers la page d'accueil
      if (response.status) {
        router.navigate(['index']);
        return false;
      }

      // Autoriser l'accès à la route pour les utilisateurs non authentifiés
      return true;
    }),
    catchError(() => {
      // En cas d'erreur, autoriser l'accès (utilisateur non authentifié)
      return of(true);
    })
  );
};