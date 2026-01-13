import { VexRoutes } from '@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: ':activeCategory',
        loadComponent: () =>
          import('./all-notifications/all-notifications.component').then(
            (m) => m.AllNotificationsComponent
          ),
        data: {
          scrollDisabled: true,
          toolbarShadowEnabled: false
        }
      }
    ]
  },
];

export default routes;