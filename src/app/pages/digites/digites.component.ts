import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { DIGITES_CONFIG } from './digites.config';

@Component({
  selector: 'vex-digites',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class DigitesComponent {
  config = DIGITES_CONFIG;
}
