import { OUTILS_CONFIG } from './pages/outils/outils.config';
import { ORDERS_CONFIG } from './pages/orders/orders.config';
import { MODULE_MANAGERS_CONFIG } from './pages/module-managers/module-managers.config';
import { moduleEnabledGuard } from 'src/app/guards/module-enabled.guard';
import { authGuard } from './guards/auth.guard';
import { otpGuard } from './guards/otp.guard';
import { maintenanceGuard } from './guards/maintenance.guard';
import { menuGuard } from './guards/menu.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { permissionGuard } from './guards/permission.guard';
import { Authority } from 'src/static-data/authority.constants';
import { settingsResolver } from './services/SettingsResolver';
import { documentRoutes } from './pages/document/document.routes';
import { menusResolver } from './pages/dashboard/menus.resolver';
import { usersResolver } from './pages/users/users.resolver';
import { githubRepositoriesResolver } from './pages/module-managers/resolvers/github-repositories.resolver';

export const appRoutes: VexRoutes = [
  {
    path: 'maintenance-mode',
    loadComponent: () =>
      import('./pages/maintenance-mode/maintenance-mode.component').then(
        (m) => m.MaintenanceModeComponent
      )
  },
  {
    path: 'admin',
    loadChildren: () => import('./auth/auth-routes')
  },
  {
    path: '',
    canActivate: [maintenanceGuard],
    loadChildren: () => import('./auth/auth-routes')
  },
  {
    path: 'otp',
    canActivate: [otpGuard, maintenanceGuard],
    loadComponent: () =>
      import('./auth/otp/otp.component').then((m) => m.OtpComponent)
  },
  {
    path: 'access-denied',
    canActivate: [maintenanceGuard],
    loadComponent: () =>
      import('./pages/access-denied/access-denied.component').then(
        (m) => m.AccessDeniedComponent
      )
  },
  {
    path: 'user-blocked',
    canActivate: [maintenanceGuard],
    loadComponent: () =>
      import('./pages/user-blocked/user-blocked.component').then(
        (m) => m.UserBlockedComponent
      )
  },

  {
    path: 'index',
    component: LayoutComponent,

    canActivate: [authGuard, maintenanceGuard],
    canActivateChild: [menuGuard],
    resolve: {
      settingsData: settingsResolver,
      menusData: menusResolver
    },

    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        canActivate: [permissionGuard],
        data: {
          permissions: [Authority.ADMIN, Authority.MANAGER, Authority.USER] // Example required permissions
        },
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          )
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './pages/dashboard/dashboard-analytics/dashboard-analytics.component'
          ).then((m) => m.DashboardAnalyticsComponent)
      },

      {
        path: 'user',
        canActivate: [permissionGuard],
        data: {
          permissions: [Authority.ADMIN, Authority.MANAGER] // Example required permissions
        },
        loadComponent: () =>
          import('./pages/users/users.component').then((m) => m.UsersComponent),
        resolve: {
          usersData: usersResolver
        }
      },
      {
        path: 'document',
        children: documentRoutes
      },
      {
        path: 'media-grid/:slug',
        loadComponent: () =>
          import('./pages/document/document-show/document-show.component').then(
            (m) => m.DocumentShowComponent
          )
      },
      {
        path: 'github',
        canActivate: [permissionGuard],
        data: {
          permissions: [Authority.ADMIN, Authority.MANAGER]
        },
        loadComponent: () =>
          import('./pages/github/github.component').then(
            (m) => m.GithubComponent
          )
      },
      {
        path: 'github/branches/:slug',
        canActivate: [permissionGuard],
        data: {
          permissions: [Authority.ADMIN, Authority.MANAGER]
        },
        loadComponent: () =>
          import('./pages/github/pages/github-branches-page/github-branches-page.component').then(
            (m) => m.GithubBranchesPageComponent
          )
      },
      {
        path: 'jobs',
        loadComponent: () =>
          import('./pages/job-status/job-status.component').then(
            (m) => m.JobStatusComponent
          )
      },
      {
        path: 'log',
        loadComponent: () =>
          import('./pages/activity-logs/activity-logs.component').then(
            (m) => m.ActivityLogsComponent
          )
      },
      {
        path: 'show_notification', // Ou un chemin plus descriptif comme 'notification-details'
        loadComponent: () =>
          import(
            './pages/notifications/show-notification/show-notification.component'
          ).then((m) => m.ShowNotificationComponent)
      },
      {
        path: 'notauthorized',
        loadComponent: () =>
          import('./auth/errors/error-404/error-404.component').then(
            (m) => m.Error404Component
          )
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./pages/manage-notifications/notifications.routes')
      },
      {
        path: 'chat',
        loadChildren: () => import('./pages/chat/chat.routes')
      },
      {
        path: 'role',
        loadComponent: () =>
          import('./pages/roles/roles.component').then((m) => m.RolesComponent)
      },
      {
        path: 'permission',
        loadComponent: () =>
          import('./pages/permissions/permissions.component').then(
            (m) => m.PermissionsComponent
          )
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings-routes')
      },
      {
        path: 'managemenu',
        loadChildren: () =>
          import('./pages/managemenu/managemenu.routes').then(
            (m) => m.managemenuRoutes
          )
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./pages/category-menu/category.route').then(
            (m) => m.categorymenuRoutes
          )
      },
      {
        path: 'module-managers',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: MODULE_MANAGERS_CONFIG },
        loadComponent: () =>
          import('./pages/module-managers/module-managers.component').then(
            (m) => m.ModuleManagersComponent
          )
      },
      {
        path: 'module-managers/create',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: MODULE_MANAGERS_CONFIG },
        resolve: {
          githubRepositories: githubRepositoriesResolver
        },
        loadComponent: () =>
          import(
            './pages/module-managers/pages/module-managers/module-manager-create-update-page.component'
          ).then((m) => m.ModuleManagerCreateUpdatePageComponent)
      },
      {
        path: 'module-managers/edit/:slug',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: MODULE_MANAGERS_CONFIG },
        loadComponent: () =>
          import(
            './pages/module-managers/pages/module-managers/module-manager-create-update-page.component'
          ).then((m) => m.ModuleManagerCreateUpdatePageComponent)
      },
      {
        path: 'orders',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: ORDERS_CONFIG },
        loadChildren: () =>
          import('./pages/orders/orders.routes').then((m) => m.ordersRoutes)
      },
      {
        path: 'orders',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: ORDERS_CONFIG },
        loadChildren: () =>
          import('./pages/orders/orders.routes').then((m) => m.ordersRoutes)
      },
      {
        path: 'orders',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: ORDERS_CONFIG },
        loadChildren: () =>
          import('./pages/orders/orders.routes').then((m) => m.ordersRoutes)
      },
      {
        path: 'orders',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: ORDERS_CONFIG },
        loadChildren: () =>
          import('./pages/orders/orders.routes').then((m) => m.ordersRoutes)
      },
      {
        path: 'outils',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: OUTILS_CONFIG },
        loadChildren: () =>
          import('./pages/outils/outils.routes').then((m) => m.outilsRoutes)
      },
      {
        path: 'not-found',
        loadComponent: () =>
          import('./auth/errors/error-404/error-404.component').then(
            (m) => m.Error404Component
          )
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./auth/errors/error-404/error-404.component').then(
        (m) => m.Error404Component
      )
  }
];
