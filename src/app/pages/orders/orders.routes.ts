import { Routes } from '@angular/router';
import { ORDERS_CONFIG } from './orders.config';
import { OrdersComponent } from './orders.component';
import { OrderCreateUpdateComponent } from './pages/order-create-update/order-create-update.component';
import { OrderShowComponent } from './pages/order-show/order-show.component';

export const ordersRoutes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'create',
    component: OrderCreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: OrderCreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: OrderShowComponent
  }
];

export default ordersRoutes;
