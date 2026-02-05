import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { ORDERS_CONFIG } from './orders.config';

@Component({
  selector: 'vex-orders',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class OrdersComponent {
  config = ORDERS_CONFIG;
}
