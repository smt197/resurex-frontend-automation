import { NgFor, NgIf, AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLinkActive, RouterLink, ActivatedRoute } from '@angular/router';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { MatTabsModule } from '@angular/material/tabs';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap
} from 'rxjs';
import { trackById } from '@vex/utils/track-by';
import { Link } from '@vex/interfaces/link.interface';
import { UntypedFormControl } from '@angular/forms';
import { NotificationParams, Notifications } from 'src/app/interfaces/Notifications';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { AuthService } from 'src/app/services/auth-service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { CardNotificationComponent } from './card-notification/card-notification.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrl: './all-notifications.component.scss',
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  standalone: true,
  imports: [
    MatIconModule,
    MatTabsModule,
    NgFor,
    RouterLinkActive,
    RouterLink,
    MatButtonModule,
    MatTooltipModule,
    NgIf,
    AsyncPipe,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    DatePipe,
    CardNotificationComponent,
    MatPaginatorModule,
    PageHeaderComponent,
    SharedModule,
    TranslateModule
  ]
})
export class AllNotificationsComponent implements OnInit, OnDestroy {
  title: string | undefined = '';
  activeCategory: string = 'all';
  pagination = {
    current_page: 1,
    per_page: 10,
    total: 0
  };

  // Ce BehaviorSubject est le déclencheur pour charger les données
  private paginationSubject = new BehaviorSubject<NotificationParams>({
    page: 1,
    unreadOnly: true
  });

  private destroy$ = new Subject<void>();
  
  unreadCount: number = 0;
  isLoading: boolean = false;

  links: Link[] = [
    {
      label: 'notification_onglet.non_lues', 
      route: '../all'
    },
    {
      label: 'notification_onglet.histories', 
      route: '../histories'
    }
  ];

  // AMÉLIORATION : notifications$ devient le flux principal de données
  // Il écoute les changements de pagination/onglet, lance l'appel API et retourne les données.
  notifications$: Observable<Notifications[]>;

  trackById = trackById;

  constructor(
    private route: ActivatedRoute,
    private websocketService: WebsocketService,
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {
    // On initialise l'observable dans le constructeur.
    this.notifications$ = this.paginationSubject.pipe(
      tap(() => this.isLoading = true), // 1. Activer le spinner
      switchMap(params =>   
        // 2. Lancer l'appel API. switchMap annule les requêtes précédentes.
        this.websocketService.loadNotifications(params.page, params.unreadOnly).pipe(
          catchError(error => {
            console.error('Erreur lors du chargement des notifications', error);
            // En cas d'erreur, on arrête le chargement et on retourne un tableau vide.
            this.isLoading = false; 
            return of({ data: [], meta: { total: 0, current_page: 1, per_page: 5, unreadnotificationcount: 0 }, message: 'Erreur de chargement' });
          })
        )
      ),
      tap(response => {
        // 3. Mettre à jour les "effets de bord" : pagination, titre, etc.
        this.pagination.total = response.meta.total;
        this.pagination.current_page = response.meta.current_page;
        this.pagination.per_page = response.meta.per_page;
        this.unreadCount = response.meta.unreadnotificationcount;
        this.title = response.message;
        this.isLoading = false; // 4. Arrêter le spinner
        this.cd.detectChanges(); // Forcer la détection de changement si nécessaire
      }),
      map(response => response.data) // 5. Finalement, on ne retourne que le tableau de données pour le template.
    );
  }

  ngOnInit() {
    this.handleRouteChange();
    this.setupWebSocket(); // Assurez-vous que cette méthode est appelée
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onPageChange(event: PageEvent) {
    // Pas besoin de mettre isLoading ici, le stream notifications$ le gère
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    const unreadOnly = this.activeCategory === 'all';
    
    // Déclencher le rechargement en publiant les nouveaux paramètres
    this.paginationSubject.next({
      page: this.pagination.current_page,
      unreadOnly
    });
  }

  private handleRouteChange() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((paramMap) => {
      this.activeCategory = paramMap.get('activeCategory') || 'all';
      const unreadOnly = this.activeCategory === 'all';

      // Reset la pagination et déclenche le chargement initial pour cet onglet
      this.pagination.current_page = 1;

      this.paginationSubject.next({
        page: this.pagination.current_page,
        unreadOnly
      });
    });
  }

  private setupWebSocket() {
    const userId = this.authService.user?.id;
    if (userId) {
      this.websocketService.listenPrivateWebsocket(
        '.new.user.notification',
        `user.${userId}`,
        () => this.refreshData() // On rafraîchit les données actuelles
      );

      this.websocketService.unreadCountNotification$
        .pipe(takeUntil(this.destroy$))
        .subscribe((count) => {
          this.unreadCount = count;
          this.cd.detectChanges();
        });
    }
  }

  markAsRead(notification: Notifications) {
    this.websocketService.markAsRead(notification.id).subscribe({
      next: () => {
        this.refreshData(); // On rafraîchit pour mettre à jour la liste et le compteur
      },
      error: (err) => console.error('Erreur lors du marquage comme lue', err)
    });
  }
  
  // Fonction utilitaire pour rafraîchir les données de la vue actuelle
  private refreshData() {
    this.paginationSubject.next(this.paginationSubject.value);
  }

  getNotificationIcon(isRead: boolean): string {
    return isRead ? 'mat:notifications_none' : 'mat:notifications_active';
  }

  getNotificationColor(isRead: boolean): string {
    return isRead ? 'text-gray-400' : 'text-primary-600';
  }
}