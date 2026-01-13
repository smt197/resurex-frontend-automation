import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-loading-spinner',
  standalone: true,
  imports: [
   MatProgressBarModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['../../auth.component.scss']
})
export class LoadingSpinnerComponent {

}
