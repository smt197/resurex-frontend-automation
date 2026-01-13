import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private readonly ACCOUNT_SUSPENDED_MESSAGE =
    'Your account has been suspended. Please contact support.';

  constructor(private readonly router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error?.message === this.ACCOUNT_SUSPENDED_MESSAGE) {
          this.router.navigate(['/user-blocked']);
        }
        return throwError(() => error);
      })
    );
  }
}
