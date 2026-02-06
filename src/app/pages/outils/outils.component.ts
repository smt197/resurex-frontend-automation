import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { OUTILS_CONFIG } from './outils.config';

@Component({
  selector: 'vex-outils',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class OutilsComponent {
  config = OUTILS_CONFIG;
}
