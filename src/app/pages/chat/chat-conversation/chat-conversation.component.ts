import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  signal,
  effect
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  map,
  switchMap,
  tap,
  distinctUntilChanged,
  filter,
  take,
  startWith
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { stagger20ms } from '@vex/animations/stagger.animation';
import { VexScrollbarComponent } from '@vex/components/vex-scrollbar/vex-scrollbar.component';
import { ChatService } from '../chat.service';
import { MatMenuModule } from '@angular/material/menu';
import { AsyncPipe, NgFor, NgIf, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Chat, ChatMessage, UserStub } from 'src/app/interfaces/Chat';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FileSizePipe } from '../file-size.pipe'; // Votre pipe pour la taille des fichiers
import { MatTooltipModule } from '@angular/material/tooltip'; // Pour les tooltips
import { WebsocketService } from 'src/app/services/websocket.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { LanguageService } from 'src/app/services/language.service';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule
} from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'; // Pour l'animation
import {
  ChatMessageModel,
  getChatMessageFormFields
} from 'src/app/models/chat.model';
import { ChatFilePondTypeComponent } from 'src/app/formly-components';

export const slideInOutAnimation = trigger('slideInOut', [
  state(
    'out',
    style({
      'max-height': '0px',
      opacity: '0',
      visibility: 'hidden',
      'margin-top': '0'
    })
  ),
  state(
    'in',
    style({
      'max-height': '500px', // Assez grand pour contenir le filepond
      opacity: '1',
      visibility: 'visible',
      'margin-top': '0.5rem' // Ajoute un espace quand il est visible
    })
  ),
  transition('out => in', animate('200ms ease-in-out')),
  transition('in => out', animate('200ms ease-in-out'))
]);
@Component({
  selector: 'vex-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms, stagger20ms, slideInOutAnimation],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIf,
    NgFor,
    AsyncPipe,
    MatMenuModule,
    VexScrollbarComponent,
    ReactiveFormsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FileSizePipe,
    MatTooltipModule,
    MatTooltipModule,
    SharedModule,
    TranslateModule,
    LoadingSpinnerComponent,
    FormlyModule,
    FormlyMaterialModule, // NOUVEAU
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ChatConversationComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(ChatFilePondTypeComponent)
  filePondComponent?: ChatFilePondTypeComponent;
  @ViewChild(VexScrollbarComponent) scrollbar?: VexScrollbarComponent;
  chat$: Observable<Chat | null> = this.chatService.currentChat$;
  messages$: Observable<ChatMessage[]> = this.chatService.currentChatMessages$;
  isPartnerOnline$!: Observable<boolean>;
  isChatBlocked = signal(false);
  isLoadingConversation = signal(false); // Pour le spinner de chargement
  selectedFile: File | null = null;
  selectedFilePreview: string | ArrayBuffer | null = null; // Pour la preview d'image avant envoi
  isUploadingFile = signal(false); // Pour le spinner sur le bouton d'envoi
  isAttachmentAreaVisible = signal(false);
  
  trackByIdFn(index: number, item: ChatMessage): string {
    return item.id; // Crucial que item.id soit unique et toujours défini
  }

  private triggerFileBrowse: () => void = () => {};
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private currentChatId: string | null = null;
  private currentUserId: string | null = null;
  private browseRequested = false;
  form = new FormGroup({});
  model: ChatMessageModel = {
    message: null,
    attachment: null
  };
  fields: FormlyFieldConfig[] = [];
  options: FormlyFormOptions = {};

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private cd: ChangeDetectorRef,
    private websocketService: WebsocketService,
    public languageService: LanguageService,
    public translateService: TranslateService
  ) {
    effect(() => {
      // Ce code s'exécutera chaque fois que isAttachmentAreaVisible() ou isChatBlocked() change
      const isVisible = this.isAttachmentAreaVisible();
      const isBlocked = this.isChatBlocked();
      // On reconstruit la configuration des champs pour forcer Formly à réagir
      this.fields = getChatMessageFormFields(this);
    });
    this.onLinePartnerStatusChange();
    this.initBlockStatusListener();
    this.chat$
      .pipe(
        filter((chat) => !!chat),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((chat) => {
        this.isChatBlocked.set(chat!.is_blocked ?? false);
        this.fields = getChatMessageFormFields(this);
      });
  }

  isBlocked(): boolean {
    return this.isChatBlocked();
  }

  ngOnInit() {
    this.currentUserId = this.chatService.getCurrentUserId();
    this.getChatMessageFormFields();
    this.initChat();
  }

  onBrowseInit = (browseFn: () => void) => {
    this.triggerFileBrowse = browseFn;

    if (this.browseRequested) {
      this.triggerFileBrowse();
      this.browseRequested = false;
    }
  };

  onLinePartnerStatusChange() {
    this.isPartnerOnline$ = this.chat$.pipe(
      // this.chat$ est this.chatService.currentChat$
      switchMap((activeChat) => {
        // Option 1: Utiliser activeChat.partnerId si votre backend l'envoie via /api/chats
        if (activeChat && typeof activeChat.partnerId !== 'undefined') {
          return this.websocketService.isUserOnline(activeChat.partnerId);
        }
        // Option 2: Essayer de le déduire de activeChat.participants
        else if (
          activeChat &&
          activeChat.participants &&
          activeChat.participants.length > 0
        ) {
          const currentUserId = this.chatService.getCurrentUserId();
          const partner = activeChat.participants.find(
            (p) => String(p.id) !== String(currentUserId)
          );
          if (partner && typeof partner.id !== 'undefined') {
            return this.websocketService.isUserOnline(partner.id);
          }
        }
        return of(false);
      }),
      startWith(false),
      distinctUntilChanged(),
      tap(),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  toggleAttachmentArea(): void {
    const wasVisible = this.isAttachmentAreaVisible();

    if (wasVisible) {
      // Si on ferme, on cache la zone et on réinitialise le formulaire
      this.isAttachmentAreaVisible.set(false);
      this.model.message = null;
      this.browseRequested = false; // Sécurité
    } else {
      this.browseRequested = true;
      this.isAttachmentAreaVisible.set(true);
    }
  }

  getChatMessageFormFields() {
    this.fields = getChatMessageFormFields(this);

    this.translateService.onLangChange.subscribe(() => {
      this.fields = getChatMessageFormFields(this);
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom(true);
  }

  initChat() {
    this.route.paramMap
      .pipe(
        map((paramMap) => paramMap.get('chatId')),
        distinctUntilChanged(),
        filter((chatId) => !!chatId),
        switchMap((chatId) =>
          this.chatService.initialChatsLoaded$.pipe(
            filter((loaded) => loaded === true),
            take(1),
            tap(() => {
              this.currentChatId = chatId!;
              this.isLoadingConversation.set(true);
              this.chatService.setActiveChat(chatId!);
            })
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();

    this.messages$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => {
          if (this.isLoadingConversation()) {
            this.isLoadingConversation.set(false);
          }
        })
      )
      .subscribe((messages: ChatMessage[]) => {
        this.cd.markForCheck(); // ou detectChanges()
        this.scrollToBottom(true);
      });
  }

  send() {
    // Utiliser form.value pour obtenir les valeurs actuelles des contrôles
    const messageContent = this.model.message?.trim() || null;
    const fileToSend = this.model.attachment || null;

    if (!messageContent && !fileToSend) {
      return; // Ne rien envoyer si tout est vide
    }

    if (!this.currentChatId) {
      console.error('currentChatId is null, cannot send message.');
      return;
    }

    if (fileToSend) {
      this.isAttachmentAreaVisible.set(false);
    }

    this.isUploadingFile.set(true);
    this.cd.detectChanges();

    this.chatService
      .sendMessage(this.currentChatId, messageContent, fileToSend)
      .subscribe({
        next: (sentMessage) => {
          this.model = {
            message: null,
            attachment: null
          };
          this.isUploadingFile.set(false);
          this.cd.detectChanges();
        },
        error: (err) => {
          console.error('Failed to send message/file:', err);
          this.isUploadingFile.set(false);
          this.cd.detectChanges();
        }
      });
  }

  scrollToBottom(force: boolean = false): void {
    requestAnimationFrame(() => {
      if (this.scrollbar && this.scrollbar.scrollbarRef) {
        const scrollElement = this.scrollbar.scrollbarRef.getScrollElement();
        const contentElement = this.scrollbar.scrollbarRef.getContentElement();

        if (scrollElement && contentElement) {
          const scrollBuffer = 100; // Augmenter le buffer pour être plus tolérant
          const isEffectivelyAtBottom =
            scrollElement.scrollHeight -
              scrollElement.scrollTop -
              scrollElement.clientHeight <
            scrollBuffer;

          if (force || isEffectivelyAtBottom) {
            scrollElement.scrollTo({
              top: contentElement.scrollHeight,
              behavior: force ? 'auto' : 'smooth' // 'auto' pour les ajouts rapides, 'smooth' si déjà en bas
            });
          } else {
          }
        } else {
          console.warn('Scrollbar elements not found for scrollToBottom');
        }
      } else {
        // console.warn('Scrollbar component/ref not found for scrollToBottom');
      }
    });
  }

  getFileIcon(mimeType: string | undefined | null): string {
    if (!mimeType) return 'mat:insert_drive_file';
    if (mimeType.startsWith('image/')) return 'mat:image';
    if (mimeType === 'application/pdf') return 'mat:picture_as_pdf';
    if (mimeType.includes('word')) return 'mat:description';
    if (mimeType.includes('excel') || mimeType.includes('spreadsheet'))
      return 'mat:assessment';
    if (mimeType.includes('presentation')) return 'mat:slideshow';
    if (mimeType.includes('zip') || mimeType.includes('archive'))
      return 'mat:archive';
    return 'mat:insert_drive_file';
  }

  openImage(imageUrl: string | undefined): void {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  }

  openDrawer() {
    this.chatService.setDrawerOpen(true);
  }

  private initBlockStatusListener(): void {
    // Solution 1: Écouter les changements de statut de blocage depuis le WebSocket (utilisateur propre)
    this.websocketService.blockStatusUpdate$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((blockStatusData: { is_blocked: boolean }) => {
        this.handleBlockStatusUpdate(blockStatusData.is_blocked);
      });

    // Solution 2: Écouter les événements de blocage sur le canal du chat actif
    this.chat$
      .pipe(
        filter((chat) => !!chat),
        switchMap((chat) => {
          if (!chat!.id || !this.currentUserId) {
            return of(null);
          }

          // Écouter les événements de blocage spécifiques au chat
          return new Observable((subscriber) => {
            const channelName = `chat.${chat!.id}`;
            const eventName = '.partner.block.status.updated';

            this.websocketService.listenPrivateWebsocket(
              eventName,
              channelName,
              (eventData: any) => {
                if (eventData && typeof eventData.is_blocked !== 'undefined') {
                  subscriber.next({ is_blocked: eventData.is_blocked });
                }
              }
            );

            return () => {
              // Le cleanup sera géré par le système de WebSocket existant
            };
          });
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((blockEvent: any) => {
        if (blockEvent) {
          this.handleBlockStatusUpdate(blockEvent.is_blocked);
        }
      });
  }

  private handleBlockStatusUpdate(isBlocked: boolean): void {
    // Éviter les mises à jour inutiles si la valeur n'a pas changé
    if (this.isChatBlocked() === isBlocked) {
      return;
    }

    // Mettre à jour uniquement le signal local
    this.isChatBlocked.set(isBlocked);

    // Mettre à jour le chat actuel dans le service si nécessaire
    const currentChat = (this.chatService as any)._currentChat.getValue();
    if (currentChat && currentChat.is_blocked !== isBlocked) {
      const updatedChat = { ...currentChat, is_blocked: isBlocked };
      (this.chatService as any)._currentChat.next(updatedChat);
    }
  }

  ngOnDestroy() {
    if (this.currentChatId) {
    }
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }
}
