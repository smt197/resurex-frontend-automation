import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
  OnDestroy,
  signal
} from '@angular/core';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  startWith,
  switchMap,
  tap
} from 'rxjs/operators';
import { trackById } from '@vex/utils/track-by';
import { stagger80ms } from '@vex/animations/stagger.animation';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { ChatService } from './chat.service'; // Correct
import { MatRippleModule } from '@angular/material/core';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { VexLayoutService } from '@vex/services/vex-layout.service';
import { Chat } from 'src/app/interfaces/Chat';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/User';
import { AddContactModalComponent } from '../apps/chat/add-contact-modal/add-contact-modal.component';
import { LanguageService } from 'src/app/services/language.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Notifications } from 'src/app/interfaces/Notifications';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vex-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms, stagger80ms],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    NgClass,
    NgIf,
    NgFor,
    MatRippleModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    SharedModule,
    TranslateModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    LoadingSpinnerComponent
  ]
})
export class ChatComponent implements OnInit, OnDestroy {
  chats$!: Observable<Chat[]>;
  mobileQuery$ = this.layoutService.ltMd$;
  drawerOpen$ = this.chatService.drawerOpen$;
  allUsers: User[] = [];
  isLoading = signal<boolean>(false);
  limit = environment.pageSize;
  displayedChats$ = new BehaviorSubject<Chat[]>([]);
  displayedChats: Chat[] = []; // Propriété directe comme alternative
  totalChatsCount = 0;
  allFilteredChats: Chat[] = [];
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  searchCtrl = new UntypedFormControl();
  trackById = trackById;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private layoutService: VexLayoutService,
    public chatService: ChatService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public languageService: LanguageService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit() {
    this.searchChats();
    this.chatService.loadInitialChats();
    // Logique pour gérer l'ouverture/fermeture du drawer en fonction de la taille de l'écran
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        startWith(null), // Déclenche immédiatement avec la valeur actuelle
        switchMap(() => this.mobileQuery$),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((isMobile) => {
        if (isMobile) {
          this.closeDrawer();
        } else {
          this.openDrawer();
        }
      });

    // Logique pour marquer un chat comme lu lors de la navigation
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        startWith(null),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const urlSegments = this.router.url.split('/');
        const chatIdIndex = urlSegments.indexOf('chat') + 1;

        if (chatIdIndex > 0 && chatIdIndex < urlSegments.length) {
          const currentChatId = urlSegments[chatIdIndex];
          if (currentChatId && currentChatId !== 'empty') {
            // Utiliser la nouvelle méthode getter
            const chat = this.chatService.currentChatsValue.find(
              (c) => c.id === currentChatId
            );
            if (chat && chat.unreadCount > 0) {
              this.chatService.markMessagesAsRead(currentChatId);
              this.markAsReadchat(chat);
            }
          }
        }
      });
    // ChatComponent.ts - ngOnInit
    this.route.data.subscribe((routeData) => {
      const resolvedObject = routeData['usersData']; // Exemple de clé

      if (
        resolvedObject &&
        resolvedObject.data &&
        Array.isArray(resolvedObject.data)
      ) {
        this.allUsers = resolvedObject.data; // <<<< ACCÉDER À resolvedObject.data
      } else {
        console.warn(
          'ChatComponent: Users data not found or not an array in resolved route data object.',
          resolvedObject
        );
        this.allUsers = []; // Assurer que allUsers est toujours un tableau
      }
    });
  }

  searchChats() {
    this.isLoading.set(true);

    // Créer un observable combiné qui écoute les changements de recherche ET les chats du service
    const searchChats$ = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.isLoading.set(true);
        this.limit = 5; // Reset limit on new search
      }),
      switchMap((searchTerm) => {
        if (!searchTerm || searchTerm.trim() === '') {
          // Si pas de recherche, utiliser directement les chats du service
          return this.chatService.chats$;
        } else {
          // Si recherche, utiliser l'API de recherche
          return this.chatService.getChats(searchTerm).pipe(
            catchError((error) => {
              this.isLoading.set(false);
              return of([]);
            })
          );
        }
      }),
      tap(() => this.isLoading.set(false)),
      takeUntilDestroyed(this.destroyRef)
    );

    this.chats$ = searchChats$;

    this.chats$.subscribe((chats) => {
      this.allFilteredChats = chats;
      this.totalChatsCount = chats.length;
      this.updateDisplayedChats(chats);
      // Forcer la détection de changements car le composant utilise OnPush
      this.cd.markForCheck();
    });
  }

  markAsReadchat(chat: Chat) {
    this.chatService.markAsReadChat(chat).subscribe({
      next: (response) => {
        let notifications: Notifications[] = [];
        this.websocketService.unreadCountNotificationSubject.next(
          response.unreadnotificationcount as number
        );
        notifications = response.recent_unread_list as Notifications[];
        this.websocketService.addNotificationToList(notifications);
      },
      error: (err) => {
        console.error('Erreur lors du marquage comme lue', err);
      }
    });
  }

  openAddContactModal(): void {
    // ... (ouverture de la modale) ...
    const dialogRef = this.dialog.open(AddContactModalComponent, {
      width: '650px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((selectedUserId) => {
      if (selectedUserId) {
        // selectedUserId ne doit pas être undefined, null, ou une chaîne vide
        this.chatService
          .findOrCreateConversationWithUser(selectedUserId)
          .subscribe({
            next: (newOrExistingChat) => {
              if (newOrExistingChat && newOrExistingChat.id) {
                this.router.navigate(['/index/chat', newOrExistingChat.id]); // Adaptez le chemin
                this.closeDrawer();
                // Le chat est déjà ajouté à la liste dans ChatService.findOrCreateConversationWithUser
              } else {
                console.error(
                  'ChatComponent: Received invalid chat object from service.',
                  newOrExistingChat
                );
              }
            },
            error: (err) => {
              console.error('ChatComponent: Error starting chat:', err);
            }
          });
      } else if (typeof selectedUserId !== 'undefined') {
        // Si c'est défini mais "falsy" (ex: 0 si ID est number)
        console.warn(
          'ChatComponent: dialogRef.afterClosed() received a "falsy" but defined value:',
          selectedUserId
        );
      } else {
        console.log(
          'ChatComponent: Dialog closed without selecting a user (received undefined).'
        );
      }
    });
    // ... (reste de la méthode)
  }

  trackByIdChat(index: number, chat: Chat): string {
    return chat.id;
  }

  drawerChange(drawerOpen: boolean) {
    this.chatService.setDrawerOpen(drawerOpen);
  }

  openDrawer() {
    this.chatService.setDrawerOpen(true);
    this.cd.markForCheck();
  }

  closeDrawer() {
    this.chatService.setDrawerOpen(false);
    this.cd.markForCheck();
  }

  private updateDisplayedChats(allChats: Chat[]) {
    const displayedChats = allChats.slice(0, this.limit);
    // Mettre à jour les deux : l'observable ET la propriété directe
    this.displayedChats$.next(displayedChats);
    this.displayedChats = displayedChats;

    // Forcer la détection de changements après mise à jour des chats affichés
    this.cd.markForCheck();
  }

  loadMoreChats() {
    this.limit += 5;
    this.updateDisplayedChats(this.allFilteredChats);
  }

  get hasMoreChats(): boolean {
    return this.limit < this.totalChatsCount;
  }

  ngOnDestroy() {}
}
