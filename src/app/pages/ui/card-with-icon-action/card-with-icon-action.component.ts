import { NgIf, NgComponentOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'vex-card-with-icon-action',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    NgIf,
    NgComponentOutlet,
    SharedModule,
    TranslateModule,
    MatExpansionModule
  ],
  templateUrl: './card-with-icon-action.component.html',
  styleUrl: './card-with-icon-action.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(20px)' })
        )
      ])
    ])
  ]
})
export class CardWithIconActionComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() component: any;
  @Input() actionText: string = 'Modifier';

  @Output() cancel = new EventEmitter<void>();

  showComponent = false;
  toggleComponent() {
    this.showComponent = !this.showComponent;
    if (!this.showComponent) {
      this.cancel.emit();
    }
  }
  onPanelClosed() {
    this.showComponent = false;
    this.cancel.emit();
  }
}
