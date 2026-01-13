import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { noAuthGuard } from '../guards/no-auth.guard';
import { settingsResolver } from '../services/SettingsResolver';
import { AuthComponent } from './auth.component';

const authRoute: VexRoutes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [noAuthGuard],
    resolve: {
      settingsData: settingsResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((m) => m.LoginComponent)
      },
      {
        path: 'preview-register',
        loadComponent: () =>
          import('./previewregister/previewregister.component').then((m) => m.PreviewregisterComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.component').then((m) => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          )
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          )
      },
      {
        path: 'email/verify/:id/:hash/:uuid',
        loadComponent: () =>
          import('./email-verify/email-verify.component').then(
            (m) => m.EmailVerifyComponent
          )
      },
      {
        path: 'not-found-auth',
        loadComponent: () =>
          import('./errors/error-404/error-404.component').then(
            (m) => m.Error404Component
          )
      },
      {
        path: 'link-expired',
        loadComponent: () =>
          import('./email-not-verify-expiry/email-not-verify-expiry.component').then(
            (m) => m.EmailNotVerifyExpiryComponent
          )
      }
    ]
  }
];

export default authRoute;
