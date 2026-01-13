import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  DestroyRef,
  inject,
  signal
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  takeUntil,
  catchError,
  tap,
  map,
  filter
} from 'rxjs/operators';
import { User } from 'src/app/interfaces/User'; // Votre interface User
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent
} from '@angular/material/paginator'; // Pour la pagination
import { MatFormFieldModule } from '@angular/material/form-field'; // Pour le champ de recherche
import { MatInputModule } from '@angular/material/input'; // Pour le champ de recherche
import { FormControl, ReactiveFormsModule } from '@angular/forms'; // Pour le champ de recherche
import { UsersService } from 'src/app/pages/users/users.service'; // VOTRE SERVICE UTILISATEUR
import {
  ResponseGlobalServer,
  customPagination,
  PaginationStandard
} from 'src/app/interfaces/Response-globalServer'; // Vos interfaces
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from 'src/app/services/auth-service'; // Pour l'ID de l'utilisateur actuel
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CustomPaginatorIntl } from 'src/app/services/CustomPaginatorIntl';
import { MatRippleModule } from '@angular/material/core';
import { ChatService } from 'src/app/pages/chat/chat.service'; // Pour accéder aux chats existants
import { Chat, UserStub } from 'src/app/interfaces/Chat'; // Pour les interfaces Chat

@Component({
  selector: 'vex-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    MatPaginatorModule,
    MatRippleModule
  ]
})
export class AddContactModalComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private _users = new BehaviorSubject<User[]>([]);
  readonly users$: Observable<User[]> = this._users.asObservable();

  private _recentContacts = new BehaviorSubject<User[]>([]);
  readonly recentContacts$: Observable<User[]> =
    this._recentContacts.asObservable();

  private _displayedRecentContacts = new BehaviorSubject<User[]>([]);
  readonly displayedRecentContacts$: Observable<User[]> =
    this._displayedRecentContacts.asObservable();

  searchCtrl = new FormControl('');
  isLoading = signal(false);
  showRecentContacts = signal(true); // État pour basculer entre recently list et recherche

  // Variables pour la pagination des contacts récents
  recentContactsLimit = 5;
  allRecentContacts: User[] = [];

  pagination: customPagination = {
    current_page: PaginationStandard.current_page,
    per_page: 5, // Commencer avec un petit nombre pour la modale
    total: PaginationStandard.total
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private currentUserId: string | number | null = null;

  constructor(
    public dialogRef: MatDialogRef<AddContactModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      /* Peut-être plus besoin de passer users ici */
    },
    private usersService: UsersService, // Injecter votre service utilisateur
    private authService: AuthService,
    private chatService: ChatService // Injecter ChatService pour accéder aux chats existants
  ) {
    this.currentUserId = this.authService.user?.id ?? null;
  }

  ngOnInit(): void {
    // S'abonner aux chats du service et charger les contacts récents quand ils sont disponibles
    this.chatService.chats$
      .pipe(
        filter((chats) => chats.length > 0), // Attendre que les chats soient chargés
        tap((chats) => {
          this.loadRecentContacts();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();

    // Charger immédiatement si les chats sont déjà disponibles
    if (this.chatService.currentChatsValue.length > 0) {
      this.loadRecentContacts();
    }

    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((searchTerm) => {
          this.isLoading.set(true);
          // Basculer vers la recherche si un terme est saisi, sinon afficher recently list
          this.showRecentContacts.set(!searchTerm || searchTerm.trim() === '');
        }),
        switchMap((searchTerm) => {
          if (!searchTerm || searchTerm.trim() === '') {
            // Réafficher les contacts récents
            this.loadRecentContacts();
            return of({
              data: [],
              pagination: this.pagination,
              message: 'Recent contacts loaded'
            } as ResponseGlobalServer);
          } else {
            // Rechercher des utilisateurs
            return this.usersService.searchUsers(searchTerm).pipe(
              catchError((error) => {
                this.isLoading.set(false);
                return of({
                  data: [],
                  pagination: this.pagination,
                  message: 'Error'
                } as ResponseGlobalServer);
              })
            );
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        if (!this.showRecentContacts()) {
          this.handleUserResponse(response);
        }
        this.isLoading.set(false);
      });
  }

  ngAfterViewInit(): void {
    // Le paginator est initialisé après que les données initiales soient chargées
    // ou après une recherche pour mettre à jour `this.pagination.total`.
  }

  fetchUsers(page: number, searchTerm?: string): void {
    this.isLoading.set(true);
    this.usersService
      .getUsers(page)
      .pipe(
        // Assumer que getUsers accepte per_page et searchTerm
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (response) => {
          this.handleUserResponse(response);
          this.isLoading.set(false);
        },
        error: (error) => {
          console.error('Error fetching users:', error);
          this._users.next([]); // Vider la liste en cas d'erreur
          this.isLoading.set(false);
        }
      });
  }

  private handleUserResponse(response: ResponseGlobalServer): void {
    let usersData = (response.data as User[]) || [];
    // Filtrer l'utilisateur actuel
    if (this.currentUserId !== null) {
      usersData = usersData.filter(
        (user) => String(user.id) !== String(this.currentUserId)
      );
    }
    this._users.next(usersData);

    if (response.pagination) {
      this.pagination = response.pagination;
      // Forcer la mise à jour du paginator si la vue a déjà été initialisée
      if (
        this.paginator &&
        (this.paginator.length !== this.pagination.total ||
          this.paginator.pageIndex !== this.pagination.current_page - 1)
      ) {
        // Il est un peu délicat de mettre à jour le paginator directement s'il est déjà rendu.
        // Parfois, il suffit de s'assurer que les inputs [length] et [pageIndex] sont correctement liés.
        // Pour forcer une réinitialisation, on pourrait reconstruire le DataSource si on utilisait MatTableDataSource
        // Ici, avec un simple *ngFor, on s'assure que les propriétés du paginator sont mises à jour.
      }
    }
  }

  onPageChange(event: PageEvent): void {
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.fetchUsers(
      this.pagination.current_page,
      this.searchCtrl.value || undefined
    );
  }

  onContactSelect(selectedUser: User): void {
    if (selectedUser && selectedUser.id) {
      this.dialogRef.close(selectedUser.id); // <<< CETTE LIGNE EST CRUCIALE
    } else {
      console.error(
        'AddContactModalComponent: Selected user or user ID is invalid.',
        selectedUser
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  private loadRecentContacts(): void {
    // Récupérer les chats existants depuis ChatService
    const existingChats = this.chatService.currentChatsValue;
    const recentContactsMap = new Map<string, User>();

    // Extraire les contacts depuis les chats existants en utilisant partnerId et first_name
    existingChats.forEach((chat, index) => {
      // Utiliser partnerId comme contact récent
      if (chat.partnerId) {
        const partnerIdStr = String(chat.partnerId);
        const currentUserIdStr = String(this.currentUserId);

        // Exclure l'utilisateur actuel
        if (
          partnerIdStr !== currentUserIdStr &&
          !recentContactsMap.has(partnerIdStr)
        ) {
          // Créer un User à partir des informations du chat
          const recentContact: User = {
            id:
              typeof chat.partnerId === 'string'
                ? parseInt(chat.partnerId) || 0
                : chat.partnerId,
            first_name: chat.first_name || 'Contact',
            last_name: '', // Pas disponible dans la structure Chat
            email: '', // Pas disponible dans la structure Chat
            confirmed: true, // Par défaut true pour les contacts existants
            photo: chat.imageUrl || 'assets/img/avatars/noavatar.png'
          };
          recentContactsMap.set(partnerIdStr, recentContact);
        }
      }
    });

    const recentContactsArray = Array.from(recentContactsMap.values());
    // Stocker tous les contacts récents
    this.allRecentContacts = recentContactsArray;
    this._recentContacts.next(recentContactsArray);

    // Afficher seulement les 5 premiers par défaut
    this.updateDisplayedRecentContacts();
  }

  private updateDisplayedRecentContacts(): void {
    const displayed = this.allRecentContacts.slice(0, this.recentContactsLimit);
    this._displayedRecentContacts.next(displayed);
  }

  loadMoreRecentContacts(): void {
    this.recentContactsLimit += 5;
    this.updateDisplayedRecentContacts();
  }

  get hasMoreRecentContacts(): boolean {
    return this.recentContactsLimit < this.allRecentContacts.length;
  }

  ngOnDestroy(): void {
    // destroyRef s'occupe de la désinscription des observables pipés avec takeUntilDestroyed
  }
}
