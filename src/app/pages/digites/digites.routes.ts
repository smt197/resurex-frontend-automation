import { Routes } from '@angular/router';
import { DIGITES_CONFIG } from './digites.config';
import { DigitesComponent } from './digites.component';
import { DigiteCreateUpdateComponent } from './pages/digite-create-update/digite-create-update.component';
import { DigiteShowComponent } from './pages/digite-show/digite-show.component';

export const digitesRoutes: Routes = [
  {
    path: '',
    component: DigitesComponent
  },
  {
    path: 'create',
    component: DigiteCreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: DigiteCreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: DigiteShowComponent
  }
];

export default digitesRoutes;
