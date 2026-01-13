import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { trackById } from '@vex/utils/track-by';
import { Router, RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Notifications } from 'src/app/interfaces/Notifications';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { VexPopoverRef } from '@vex/components/vex-popover/vex-popover-ref';
import { BehaviorSubject } from 'rxjs';
import { NotificationDisplayService } from 'src/app/services/notification-display.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'vex-toolbar-notifications-dropdown',
  templateUrl: './toolbar-notifications-dropdown.component.html',
  styleUrls: ['./toolbar-notifications-dropdown.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgFor,
    NgIf,
    MatRippleModule,
    RouterLink,
    AsyncPipe,
    TranslateModule
  ]
})
export class ToolbarNotificationsDropdownComponent implements OnInit {
  notifications: Notifications[] = [];
  trackById = trackById;
  public unreadnotificationcount$ =
    this.websocketService.unreadCountNotificationSubject;

  constructor(
    private websocketService: WebsocketService,
    // Injectez la référence au popover dans lequel ce composant est affiché
    private popoverRef: VexPopoverRef<ToolbarNotificationsDropdownComponent>,
    private router: Router,
    private notificationDisplayService: NotificationDisplayService
  ) {}

  ngOnInit() {
    this.getNotification();
  }

  public getNotification() {
    this.websocketService.notificationsSub$.subscribe((notifications) => {
      this.notifications = notifications;
    });
  }
  onNotificationClick(notification: Notifications) {
    if (notification.data.notification_type === 'chat') {
      const conversation_id = notification.data.model_type;
      if (conversation_id) {
        this.router.navigate(['/index/chat', conversation_id]);
        this.markAsRead(notification);
      } else {
        console.warn(
          'Conversation ID manquant pour une notification de type chat.'
        );
      }
    }else if (
      notification.data.notification_type === 'user' ||
      notification.data.notification_type === 'setting'||
      notification.data.notification_type === 'user_block_status'
    ) {
      this.markAsRead(notification);
      // Rediriger vers ShowNotificationComponent en passant model_type via l'état de la navigation
      this.router.navigate(['index/show_notification'], {
        // Utilisez le chemin que vous avez défini
        state: {
          modelTypeData: notification.data.model_type,
          entityType: notification.data.notification_type
        }
      });
    } else {
      console.log(
        "Pas de message ou d'action spécifique lié à cette notification."
      );
      this.notificationDisplayService.clearNotificationDetails(); // Optionnel: cacher la carte si autre type
      this.closeDropdown();
    }
  }
  markAsRead(notification: Notifications) {
    this.websocketService.markAsRead(notification.id).subscribe({
      next: () => {
         this.popoverRef.close();
      },
      error: (err) => {
        console.error('Erreur lors du marquage comme lue', err);
        // Revert local changes if needed
        notification.is_read = false;
        notification.read_at = null;
      }
    });
  }

  // Méthode pour fermer le popover depuis ce composant
  closeDropdown() {
    this.popoverRef.close(); // Appel de la méthode close sur la référence injectée
    this.router.navigate(['index/notifications/']);
  }

  extractSenderName(notification: any): string {
  // Essaye d'extraire le nom du message formaté
  const message = notification.data.message;
  const prefix = 'Nouveau message de ';
  const enPrefix = 'New message from ';
  
  if (message.startsWith(prefix)) {
    return message.substring(prefix.length).split(':')[0].trim();
  } else if (message.startsWith(enPrefix)) {
    return message.substring(enPrefix.length).split(':')[0].trim();
  }
  
  return 'Unknown'; // Fallback
}

extractPreview(notification: any): string | null {
  const message = notification.data.message;
  const parts = message.split(': "');
  
  if (parts.length > 1) {
    return parts[1].replace(/"/g, '');
  }
  
  return null;
}
}
