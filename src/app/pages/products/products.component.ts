import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { PRODUCTS_CONFIG } from './products.config';

@Component({
  selector: 'vex-products',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class ProductsComponent {
  config = PRODUCTS_CONFIG;
}
