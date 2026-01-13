import { Routes } from '@angular/router';
import { ManagemenuComponent } from './managemenu.component';
import { CreateUpdateMenuComponent } from './create-update-menu/create-update-menu.component';
import { rolesResolver } from './roles.resolver';
import { categoriesResolver } from './categories.resolver';

export const managemenuRoutes: Routes = [
  {
    path: '',
    component: ManagemenuComponent,
    resolve: {
      roles: rolesResolver,
      categories: categoriesResolver
    }
  },
  {
    path: 'create',
    component: CreateUpdateMenuComponent,
    resolve: {
      roles: rolesResolver,
      categories: categoriesResolver
    }
  },
  {
    path: 'edit/:slug',
    component: CreateUpdateMenuComponent,
    resolve: {
      roles: rolesResolver,
      categories: categoriesResolver
    }
  }
];