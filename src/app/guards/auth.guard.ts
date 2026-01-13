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

// Key for storing return URL in localStorage (persists between sessions)
const RETURN_URL_KEY = 'returnUrl';

// URLs that should not be saved as redirect targets
const EXCLUDED_URLS = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/otp',
  '/access-denied',
  '/user-blocked',
  '/',
  '/index'
];

/**
 * Check if URL should be saved
 */
function shouldSaveUrl(url: string): boolean {
  if (!url) return false;
  return (
    !EXCLUDED_URLS.includes(url) &&
    !EXCLUDED_URLS.some((excluded) => url.startsWith(excluded + '?'))
  );
}

/**
 * Save the return URL for redirect after login
 */
export function saveReturnUrl(url: string): void {
  if (!shouldSaveUrl(url)) {
    return;
  }
  localStorage.setItem(RETURN_URL_KEY, url);
}

/**
 * Get and clear the saved return URL
 */
export function getAndClearRedirectUrl(): string | null {
  const url = localStorage.getItem(RETURN_URL_KEY);
  localStorage.removeItem(RETURN_URL_KEY);
  return url;
}

/**
 * Clear the saved return URL
 */
export function clearRedirectUrl(): void {
  localStorage.removeItem(RETURN_URL_KEY);
}

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authenticate().pipe(
    map((response) => {
      // Vérifier si l'utilisateur est bloqué
      if (authService.isUserBlocked() && state.url !== '/user-blocked') {
        router.navigate(['/access-denied']);
        return false;
      }

      // Si l'utilisateur n'est pas authentifié
      if (!response.status) {
        // Sauvegarder l'URL complète (state.url peut être partielle pour les routes enfants)
        const fullUrl = window.location.pathname + window.location.search;
        saveReturnUrl(fullUrl);
        router.navigate(['/login']);
        return false;
      }

      // Initialiser les données utilisateur
      if (response.user) {
        authService.user = response.user;
        const roles = authService.getRolesNames() as string[];
        authService.getMenuByRole(roles);
      }

      // Gérer la vérification OTP
      const requiresOtpVerification =
        response.otp_required &&
        !response.status_otp &&
        !response.otp_status_auth;

      if (requiresOtpVerification) {
        authService.response = response;
        router.navigate(['otp']);
        return false;
      }

      return true;
    }),
    catchError((error) => {
      console.error("Erreur d'authentification:", error);
      // Sauvegarder l'URL complète pour redirection après connexion
      const fullUrl = window.location.pathname + window.location.search;
      saveReturnUrl(fullUrl);
      router.navigate(['/login']);
      return of(false);
    })
  );
};
