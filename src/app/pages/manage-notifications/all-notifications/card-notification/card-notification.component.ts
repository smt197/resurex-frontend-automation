import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'vex-card-notification',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    DatePipe,
    TranslateModule
  ],
  templateUrl: './card-notification.component.html',
  styleUrl: './card-notification.component.scss'
})
export class CardNotificationComponent {
  @Input() notification: any;
  @Input() showMarkAsRead: boolean = true;
  @Output() markAsRead = new EventEmitter<void>();

  onMarkAsRead() {
    this.notification.is_read = true;
    this.markAsRead.emit();
  }

  getNotificationIcon(isRead: boolean): string {
    return isRead ? 'mat:notifications_none' : 'mat:notifications_active';
  }

  getNotificationColor(isRead: boolean): string {
    return isRead ? 'text-gray-400' : 'text-primary-600';
  }
}
