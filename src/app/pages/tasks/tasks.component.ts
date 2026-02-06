import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { TASKS_CONFIG } from './tasks.config';

@Component({
  selector: 'vex-tasks',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class TasksComponent {
  config = TASKS_CONFIG;
}
