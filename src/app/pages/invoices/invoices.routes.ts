import { Routes } from '@angular/router';
import { INVOICES_CONFIG } from './invoices.config';
import { InvoicesComponent } from './invoices.component';
import { InvoiceCreateUpdateComponent } from './pages/invoice-create-update/invoice-create-update.component';
import { InvoiceShowComponent } from './pages/invoice-show/invoice-show.component';

export const invoicesRoutes: Routes = [
  {
    path: '',
    component: InvoicesComponent
  },
  {
    path: 'create',
    component: InvoiceCreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: InvoiceCreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: InvoiceShowComponent
  }
];

export default invoicesRoutes;
