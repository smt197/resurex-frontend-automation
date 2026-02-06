import { Routes } from '@angular/router';
import { OUTILS_CONFIG } from './outils.config';
import { OutilsComponent } from './outils.component';
import { OutilCreateUpdateComponent } from './pages/outil-create-update/outil-create-update.component';
import { OutilShowComponent } from './pages/outil-show/outil-show.component';

export const outilsRoutes: Routes = [
  {
    path: '',
    component: OutilsComponent
  },
  {
    path: 'create',
    component: OutilCreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: OutilCreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: OutilShowComponent
  }
];

export default outilsRoutes;
