import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { Observable, of, Subscription } from 'rxjs';
import { IslandState, Notifications } from 'src/app/interfaces/Notifications';

@Component({
  selector: 'vex-dynamic-island',
  standalone: true,
  templateUrl: './dynamic-island.component.html',
  styleUrl: './dynamic-island.component.scss',
  animations: [fadeInUp400ms],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule, NgIf, TranslateModule],
})
export class DynamicIslandComponent implements OnInit, OnDestroy {
  IslandState = IslandState;
  
  @Input() notifications: Notifications | null = null;
  @Input() unreadnotificationcount$: Observable<number> = of(0);
  @Output() islandClick = new EventEmitter<void>();

  unreadCount: number = 0;
  currentState = IslandState.Pill;

  private notificationTimeout: any = null;
  private subscription: Subscription = new Subscription();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getValueUnreadCount();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.clearNotificationTimeout();
  }

  getValueUnreadCount(): void {
    // Ajouter la subscription au container pour éviter les fuites mémoire
      this.unreadnotificationcount$.subscribe(count => {
        // Stocker la valeur AVANT de vérifier
        this.unreadCount = count;
        
        // Vérifier si on a des notifications non lues
        if (this.unreadCount > 0) {
          this.showNotification();
        } else {
          // Si pas de notifications, revenir à l'état pill
          this.reset();
        }
      })
  }

  showPill(): void {
    this.clearNotificationTimeout();
    this.currentState = IslandState.Pill;
    this.cd.detectChanges();

    // Réinitialise automatiquement l'île après 4 secondes
    this.notificationTimeout = setTimeout(() => {
      this.reset();
    }, 4000);
  }

  showNotification(): void {
    this.clearNotificationTimeout();
    this.currentState = IslandState.Notification;
    this.cd.detectChanges();

    // Réinitialise automatiquement l'île après 4 secondes
    this.notificationTimeout = setTimeout(() => {
      this.reset();
    }, 4000);
  }

  reset(): void {
    this.clearNotificationTimeout();
    this.currentState = IslandState.Pill;
    this.cd.detectChanges();
  }

  onIslandClick(event: Event): void {
    event.stopPropagation();
    this.islandClick.emit();
  }

  private clearNotificationTimeout(): void {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
      this.notificationTimeout = null;
    }
  }
}