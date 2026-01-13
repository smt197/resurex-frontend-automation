import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const otpGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    return authService.authenticate().pipe(
        map(response => {
          authService.response = response;
          if ((response.otp_required == true && response.status_otp == true) || 
          (response.otp_required == true && response.otp_status_auth == true)
        ) {
              router.navigate(['index']);
              return false;
            }             
            // Si l'utilisateur n'est pas authentifié
            // router.navigate(['/login']);
            return true;
        }),
        catchError(error => {
            // En cas d'erreur (comme une erreur HTTP 401), rediriger vers login
            console.error('Erreur d\'authentification:', error);
            router.navigate(['/login']);
            return of(false);
        })
    );
}