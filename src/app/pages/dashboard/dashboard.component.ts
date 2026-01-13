import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexSecondaryToolbarComponent } from '@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth-service';
import { SharedModule } from 'src/app/shared/shared.module';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { Menu } from 'src/app/interfaces/Menu';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { MenuUserComponent } from '../menu-user/menu-user.component';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { finalize, tap, Subscription } from 'rxjs';
import { MenuRealtimeService } from 'src/app/services/menu-realtime.service';
import { NavigationLoaderService } from 'src/app/core/navigation/navigation-loader.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  animations: [fadeInUp400ms],
  imports: [
    VexSecondaryToolbarComponent,
    VexBreadcrumbsComponent,
    MatButtonModule,
    MatIconModule,
    NgxPermissionsModule,
    SharedModule,
    TranslateModule,
    MenuUserComponent,
    LoadingSpinnerComponent
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  layoutCtrl = new UntypedFormControl('fullwidth');

  user: User | null = null;
  permissionsUser: string[] = [];
  rolesUser: string[] = [];

  public filteredApps: Menu[] = []; // Menus filtrés
  isLoading = signal<boolean>(false);
  // L'état (state) est aussi une propriété de la classe
  public openApps: string[] = ['finder', 'safari'];

  private menuUpdateSub!: Subscription;
  public ADMIN = 'admin';

  constructor(
    private authService: AuthService,
    private router: Router,
    private genericApi: GenericApiService,
    private route: ActivatedRoute,
    private menuRealtimeService: MenuRealtimeService,
    private navigationLoader: NavigationLoaderService,
    private websocketService: WebsocketService,
    private chatService: ChatService,
    private permissionsService: NgxPermissionsService,
  ) {}
  ngOnInit(): void {
    this.getUserInfo();
    this.loadMenusFromResolver();
    this.initMenuUpdatesListener();
  }

  ngOnDestroy(): void {
    if (this.menuUpdateSub) {
      this.menuUpdateSub.unsubscribe();
    }
  }

  getUserInfo() {
    this.user = this.authService.user;
    this.permissionsUser = this.authService.getAllPermission();
    this.rolesUser = this.authService.getRolesNames();
  }

  users() {
    this.router.navigate(['/index/user']);
  }

  loadMenusFromResolver(): void {
    const menusData = this.route.snapshot.data['menusData'];

    if (menusData && menusData.data && Array.isArray(menusData.data)) {
      const menus = menusData.data as Menu[];
      this.filterAppsByRole(menus);

      // Also update navigation with resolver data using reloadMenusOnly to preserve badges
      const unreadCount$ = this.websocketService.unreadCountNotificationSubject;
      const chatUnreadCount$ = this.chatService.totalChatUnreadCount$;
      this.navigationLoader.reloadMenusOnly(
        this.rolesUser,
        unreadCount$,
        chatUnreadCount$
      );
    } else {
      console.warn('Aucune donnée de menu trouvée dans le resolver');
      this.filteredApps = [];
    }
  }

  loadMenusByRole(): void {
    // this.isLoading.set(true);
    this.genericApi
      .getAlls<Menu>('user-menus')
      .pipe(
        tap((response) => {
          if (response && response.data && Array.isArray(response.data)) {
            this.filterAppsByRole(response.data as Menu[]);
          } else {
            console.warn('Format de réponse inattendu:', response);
            this.filteredApps = [];
          }
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Erreur lors du chargement des menus:', error);
          this.filteredApps = [];
        }
      });
  }
  // Traite les menus reçus (déjà filtrés par rôle côté backend)
  filterAppsByRole(menus: Menu[]): void {
    this.filteredApps = menus.map((menu) => ({
      ...menu,
      icon: menu.icon.startsWith('mat:') ? menu.icon : 'mat:' + menu.icon,
      disable: menu.disable
    }));
  }

  appClick(menu: Menu): void {
    this.router.navigate([menu.route], { queryParams: menu.queryParams });
  }

  private initMenuUpdatesListener(): void {
    this.menuUpdateSub = this.menuRealtimeService.getMenuUpdates().subscribe({
      next: () => {
        this.loadMenusByRole();
      },
      error: (error) => {
        console.error('Error listening for menu updates in dashboard:', error);
      }
    });
  }
}
