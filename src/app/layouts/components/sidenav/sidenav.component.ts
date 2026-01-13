import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { VexLayoutService } from '@vex/services/vex-layout.service';
import { VexConfigService } from '@vex/config/vex-config.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { NavigationItem } from '../../../core/navigation/navigation-item.interface';
import { VexPopoverService } from '@vex/components/vex-popover/vex-popover.service';
import { Observable, of, combineLatest } from 'rxjs';
import { filter, take, delay } from 'rxjs/operators';
import { SidenavUserMenuComponent } from './sidenav-user-menu/sidenav-user-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { VexScrollbarComponent } from '@vex/components/vex-scrollbar/vex-scrollbar.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Setting } from 'src/app/interfaces/setting';
import { SettingsService } from 'src/app/services/settings.service';
import { ChatService } from 'src/app/pages/chat/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { AuthService } from 'src/app/services/auth-service';
import { MenuRealtimeService } from 'src/app/services/menu-realtime.service';

@Component({
  selector: 'vex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    VexScrollbarComponent,
    NgFor,
    SidenavItemComponent,
    AsyncPipe
  ]
})
export class SidenavComponent implements OnInit {
  @Input() collapsed: boolean = false;
  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  title$ = this.configService.config$.pipe(
    map((config) => config.sidenav.title)
  );
  imageUrl$ = this.configService.config$.pipe(
    map((config) => config.sidenav.imageUrl)
  );
  showCollapsePin$ = this.configService.config$.pipe(
    map((config) => config.sidenav.showCollapsePin)
  );
  userVisible$ = this.configService.config$.pipe(
    map((config) => config.sidenav.user.visible)
  );
  searchVisible$ = this.configService.config$.pipe(
    map((config) => config.sidenav.search.visible)
  );

  userMenuOpen$: Observable<boolean> = of(false);

  items$: Observable<NavigationItem[]> = this.navigationService.items$;
  settings: Setting | null = null;

  notificationCount$ = this.websocketService.unreadCountNotificationSubject;
  chatUnreadCount$ = this.chatService.totalChatUnreadCount$;

  constructor(
    private navigationService: NavigationService,
    private layoutService: VexLayoutService,
    private configService: VexConfigService,
    private readonly popoverService: VexPopoverService,
    private readonly dialog: MatDialog,
    private setting_service: SettingsService,
    private websocketService: WebsocketService,
    private chatService: ChatService,
    private authService: AuthService,
    private menuRealtimeService: MenuRealtimeService
  ) {}

  ngOnInit() {
    this.getSettingInfo();
    this.updateNavigationWithBadges();
    this.watchForBadgeUpdates();
    this.watchForMenuUpdates();
  }

  private updateNavigationWithBadges() {
    // Les badges sont maintenant préchargés par le resolver, donc les valeurs sont déjà disponibles
    const userRoles = this.authService.getRolesNames();
    if (userRoles && userRoles.length > 0) {
      this.authService.getMenuByRole(
        userRoles,
        this.notificationCount$,
        this.chatUnreadCount$
      );
    }
  }

  private watchForBadgeUpdates() {
    // Écouter les changements des badges en temps réel pour les mises à jour dynamiques
    this.notificationCount$.subscribe(() => {
      this.updateNavigationWithBadges();
    });

    this.chatUnreadCount$.subscribe(() => {
      this.updateNavigationWithBadges();
    });
  }
  isString(value: any): boolean {
    return typeof value === 'string';
  }

  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }
  getSettingInfo() {
    this.setting_service.settings$.subscribe((data) => {
      this.settings = data;
    });
  }
  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed
      ? this.layoutService.expandSidenav()
      : this.layoutService.collapseSidenav();
  }

  trackByRoute(index: number, item: NavigationItem): string {
    if (item.type === 'link') {
      return item.route;
    }
    if (
      item.type === 'dropdown' ||
      item.type === 'subheading' ||
      item.type === 'category'
    ) {
      return item.label;
    }
    return `item-${index}`;
  }

  private watchForMenuUpdates(): void {
    this.menuRealtimeService.getMenuUpdates().subscribe({
      next: () => {
        // MenuRealtimeService gère déjà la mise à jour des menus
        // Pas besoin de recharger ici pour éviter les boucles
      },
      error: (error) => {
        console.error('Error watching menu updates in sidenav:', error);
      }
    });
  }

  openProfileMenu(origin: HTMLDivElement): void {
    this.userMenuOpen$ = of(
      this.popoverService.open({
        content: SidenavUserMenuComponent,
        origin,
        offsetY: -8,
        width: origin.clientWidth,
        position: [
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom'
          }
        ]
      })
    ).pipe(
      switchMap((popoverRef) => popoverRef.afterClosed$.pipe(map(() => false))),
      startWith(true)
    );
  }

  openSearch(): void {
    this.dialog.open(SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }
}
