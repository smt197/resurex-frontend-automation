import { Routes } from '@angular/router';
import { permissionGuard } from 'src/app/guards/permission.guard';
import { Authority } from 'src/static-data/authority.constants';

export const documentRoutes: Routes = [
  {
    path: '',
    canActivate: [permissionGuard],
    data: {
      permissions: [Authority.ADMIN, Authority.MANAGER, Authority.USER]
    },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./document.component').then((m) => m.DocumentComponent)
      },
      {
        path: 'create',
        loadComponent: () =>
          import(
            './document-create-update/document-create-update.component'
          ).then((m) => m.DocumentCreateUpdateComponent)
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import(
            './document-create-update/document-create-update.component'
          ).then((m) => m.DocumentCreateUpdateComponent)
      }
    ]
  }
];
