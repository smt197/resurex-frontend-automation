import {
  Component,
  DestroyRef,
  ElementRef,
  HostBinding,
  inject,
  OnInit
} from '@angular/core';
import { VexLayoutService } from '@vex/services/vex-layout.service';
import { VexConfigService } from '@vex/config/vex-config.service';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { VexPopoverService } from '@vex/components/vex-popover/vex-popover.service';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NavigationComponent } from '../navigation/navigation.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { NavigationItemComponent } from '../navigation/navigation-item/navigation-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationItem } from '../../../core/navigation/navigation-item.interface';
import { checkRouterChildsData } from '@vex/utils/check-router-childs-data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeLanguagueComponent } from 'src/app/shared/change-languague/change-languague.component';
import { Notifications } from 'src/app/interfaces/Notifications';
import { WebsocketService } from 'src/app/services/websocket.service';
import { AuthService } from 'src/app/services/auth-service';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIf,
    RouterLink,
    MatMenuModule,
    NgClass,
    NgFor,
    NavigationItemComponent,
    ToolbarNotificationsComponent,
    ToolbarUserComponent,
    NavigationComponent,
    AsyncPipe,
    ChangeLanguagueComponent
  ]
})
export class ToolbarComponent implements OnInit {
  @HostBinding('class.shadow-b')
  showShadow: boolean = false;

  navigationItems$: Observable<NavigationItem[]> =
    this.navigationService.items$;

  isHorizontalLayout$: Observable<boolean> = this.configService.config$.pipe(
    map((config) => config.layout === 'horizontal')
  );
  isVerticalLayout$: Observable<boolean> = this.configService.config$.pipe(
    map((config) => config.layout === 'vertical')
  );
  isNavbarInToolbar$: Observable<boolean> = this.configService.config$.pipe(
    map((config) => config.navbar.position === 'in-toolbar')
  );
  isNavbarBelowToolbar$: Observable<boolean> = this.configService.config$.pipe(
    map((config) => config.navbar.position === 'below-toolbar')
  );
  userVisible$: Observable<boolean> = this.configService.config$.pipe(
    map((config) => config.toolbar.user.visible)
  );
  title$: Observable<string> = this.configService.select(
    (config) => config.sidenav.title
  );

  searchVisible$ = this.configService.config$.pipe(
    map((config) => config.toolbar.search.visible)
  );

  panelVisible$ = this.configService.config$.pipe(
    map((config) => config.toolbar.panel.visible)
  );

  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  megaMenuOpen$: Observable<boolean> = of(false);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  
  user: User | null = null;
   public unreadnotificationcount$ = this.websocketService.unreadCountNotificationSubject;

  recent_unread_list?: Notifications[] = [];

  constructor(
    private readonly layoutService: VexLayoutService,
    private readonly configService: VexConfigService,
    private readonly navigationService: NavigationService,
    private readonly popoverService: VexPopoverService,
    private readonly router: Router,
    private websocketService: WebsocketService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.getUserNtofication();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(null),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.showShadow = checkRouterChildsData(
          this.router.routerState.root.snapshot,
          (data) => data.toolbarShadowEnabled ?? false
        );
      });
  }

  openQuickpanel(): void {
    this.layoutService.openQuickpanel();
  }

  openSidenav(): void {
    this.layoutService.openSidenav();
  }

  openMegaMenu(origin: ElementRef | HTMLElement): void {
    this.megaMenuOpen$ = of(
      this.popoverService.open({
        content: MegaMenuComponent,
        origin,
        offsetY: 12,
        position: [
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }
        ]
      })
    ).pipe(
      switchMap((popoverRef) => popoverRef.afterClosed$.pipe(map(() => false))),
      startWith(true)
    );
  }

  openSearch(): void {
    this.layoutService.openSearch();
  }

  getUserNtofication() {
    this.user = this.authService.user;
    const channelName = `user.${this.user?.id}`;
    const eventName = '.new.user.notification';

    this.recent_unread_list = (this.user?.recent_unread_list as Notifications[]);
    this.websocketService.addNotificationToList(this.recent_unread_list);

    // Initialiser le count des notifications non lues au chargement de la page
    const initialUnreadCount = this.recent_unread_list?.length || 0;
    this.websocketService.unreadCountNotificationSubject.next(initialUnreadCount);

    this.websocketService.listenPrivateWebsocket(eventName, channelName, (data: ResponseGlobalServer) => {

      let notifications: Notifications[] = [];
      if (data) {
        this.websocketService.unreadCountNotificationSubject.next(data.unreadnotificationcount as number);
        notifications = (data.recent_unread_list as Notifications[]);

        this.websocketService.addNotificationToList(notifications);
      }
    });
  }
}