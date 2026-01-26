import { Routes } from '@angular/router';
import { PRODUCTS_CONFIG } from './products.config';
import { ProductsComponent } from './products.component';
import { ProductCreateUpdateComponent } from './pages/product-create-update/product-create-update.component';
import { ProductShowComponent } from './pages/product-show/product-show.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'create',
    component: ProductCreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: ProductCreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: ProductShowComponent
  }
];

export default productsRoutes;
