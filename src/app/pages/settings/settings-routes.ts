import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { usersResolver } from '../users/users.resolver';

const settingsRoute: VexRoutes = [
  {
    path: '',
    redirectTo: 'show',
    pathMatch: 'full'
  },
  {
    path: 'show',
    loadComponent: () =>
      import('./show-settings/show-settings.component').then(
        (m) => m.ShowSettingsComponent
      ),
    resolve: {
      usersData: usersResolver
    }
  }
];

export default settingsRoute;
