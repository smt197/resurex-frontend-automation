// src/app/services/chat.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, throwError, Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Chat, ChatMessage } from 'src/app/interfaces/Chat';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth-service';
import { User } from 'src/app/interfaces/User';
import { Auth } from 'src/app/classes/Auth';

// Import new services
import { ChatStateService } from 'src/app/services/chat-state.service';
import { ChatWebsocketService } from 'src/app/services/chat-websocket.service';
import { ChatMessageService } from 'src/app/services/chat-message.service';
import { WebsocketService } from 'src/app/services/websocket.service';

// Constants
const FIND_OR_CREATE_TIMEOUT = 10;

/**
 * Main chat service that orchestrates chat operations
 * Delegates specific responsibilities to specialized services
 */
@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnDestroy {
  private readonly apiUrl = environment.apiUrl;
  private userEmitterSubscription: Subscription | undefined;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly chatStateService: ChatStateService,
    private readonly chatWebsocketService: ChatWebsocketService,
    private readonly chatMessageService: ChatMessageService,
    private readonly websocketService: WebsocketService
  ) {
    // Subscribe to user changes
    if (Auth.userEmitter && typeof Auth.userEmitter.subscribe === 'function') {
      this.userEmitterSubscription = Auth.userEmitter.subscribe(
        (user: User | null) => {
          this.handleUserChange(user);
        }
      );
    }

    // Check initial user state
    const initialUser = this.authService.user;
    if (initialUser) {
      this.handleUserChange(initialUser);
    }

    this.chatStateService.updateTotalUnreadCount();
  }

  // Expose state observables
  get chats$(): Observable<Chat[]> {
    return this.chatStateService.chats$;
  }

  get currentChatMessages$(): Observable<ChatMessage[]> {
    return this.chatStateService.currentChatMessages$;
  }

  get currentChat$(): Observable<Chat | null> {
    return this.chatStateService.currentChat$;
  }

  get totalChatUnreadCount$(): Observable<number> {
    return this.chatStateService.totalChatUnreadCount$;
  }

  get drawerOpen$(): Observable<boolean> {
    return this.chatStateService.drawerOpen$;
  }

  get initialChatsLoaded$(): Observable<boolean> {
    return this.chatStateService.initialChatsLoaded$;
  }

  get unreadChatCount$(): Observable<number> {
    return this.chatStateService.unreadChatCount$;
  }

  get currentChatsValue(): Chat[] {
    return this.chatStateService.currentChatsValue;
  }

  /**
   * Set drawer open state
   */
  setDrawerOpen(isOpen: boolean): void {
    this.chatStateService.setDrawerOpen(isOpen);
  }

  /**
   * Handle user authentication state changes
   */
  private handleUserChange(user: User | null): void {
    if (user && user.id) {
      const newUserId = String(user.id);
      const currentUserId = this.chatStateService.getCurrentUserId();

      if (currentUserId !== newUserId) {
        this.chatStateService.setCurrentUserId(newUserId);
        this.chatWebsocketService.listenForUnreadMessagesUpdates(newUserId);
        this.loadInitialChats();
      }
    } else {
      if (this.chatStateService.getCurrentUserId() !== null) {
        this.clearUserServiceSpecificData();
      }
    }
  }

  /**
   * Get current user ID
   */
  getCurrentUserId(): string | null {
    return this.chatStateService.getCurrentUserId();
  }

  /**
   * Clear user-specific data
   */
  private clearUserServiceSpecificData(): void {
    this.chatStateService.clearAllData();
  }

  /**
   * Initialize with a specific user ID
   */
  initializeWithUser(userId: string): void {
    const newUserId = String(userId);
    const currentUserId = this.chatStateService.getCurrentUserId();

    if (currentUserId !== newUserId) {
      this.chatStateService.setCurrentUserId(newUserId);
      this.loadInitialChats();
    }
  }

  /**
   * Load initial chats list
   */
  loadInitialChats(): void {
    if (!this.chatStateService.getCurrentUserId()) {
      return;
    }

    this.chatStateService.setInitialChatsLoaded(false);

    this.http
      .get<Chat[]>(`${this.apiUrl}/chats`)
      .pipe(
        tap((chats) => {
          this.chatStateService.setChats(chats);
          this.chatStateService.setInitialChatsLoaded(true);
        }),
        catchError((err) => {
          this.chatStateService.setChats([]);
          this.chatStateService.setInitialChatsLoaded(true);
          return throwError(() => err);
        })
      )
      .subscribe();
  }

  /**
   * Search chats
   */
  getChats(searchTerm: string = ''): Observable<Chat[]> {
    let params = new HttpParams();

    if (searchTerm) {
      params = params.set('q', searchTerm);
    }

    return this.http.get<Chat[]>(`${this.apiUrl}/chats`, { params });
  }

  /**
   * Load chat details
   */
  loadChatDetails(chatId: string): Observable<Chat | undefined> {
    const existingChat = this.chatStateService.findChatById(chatId);
    if (existingChat) {
      return of(existingChat);
    }
    return of(undefined);
  }

  /**
   * Load messages for a chat
   */
  loadMessages(chatId: string): void {
    this.chatMessageService.loadMessages(chatId).subscribe();
  }

  /**
   * Send a message
   */
  sendMessage(
    chatId: string,
    messageContent: string | null,
    attachment?: File | null
  ): Observable<ChatMessage> {
    return this.chatMessageService.sendMessage(chatId, messageContent, attachment);
  }

  /**
   * Check if a user is online
   */
  isUserOnline(userId: string | number | undefined): Observable<boolean> {
    return this.chatWebsocketService.isUserOnline(userId);
  }

  /**
   * Listen for new messages on a chat
   */
  listenForNewMessages(chatId: string): void {
    if (!this.chatStateService.getCurrentUserId()) {
      return;
    }

    this.chatWebsocketService.listenForNewMessages(chatId, (newMessage) => {
      this.chatMessageService.handleIncomingMessage(chatId, newMessage);
    });
  }

  /**
   * Find or create a conversation with a user
   */
  findOrCreateConversationWithUser(recipientId: string | number): Observable<Chat> {
    if (!this.chatStateService.getCurrentUserId()) {
      return throwError(() => new Error('User not authenticated for creating conversation'));
    }

    return this.http
      .post<Chat>(`${this.apiUrl}/chats/find-or-create`, {
        recipient_id: recipientId
      })
      .pipe(
        tap((newOrExistingChat: Chat) => {
          setTimeout(() => {
            this.chatStateService.addOrUpdateChat(newOrExistingChat);
          }, FIND_OR_CREATE_TIMEOUT);
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  /**
   * Stop listening to active chat
   */
  stopListeningToActiveChat(): void {
    this.chatWebsocketService.stopListeningToActiveChat();
  }

  /**
   * Set active chat
   */
  setActiveChat(chatId: string): void {
    if (!this.chatStateService.getCurrentUserId()) {
      this.clearActiveChat();
      return;
    }

    this.stopListeningToActiveChat();

    this.loadChatDetails(chatId).subscribe((chat) => {
      if (chat) {
        this.chatStateService.setCurrentChat(chat);
        this.loadMessages(chatId);
        this.listenForNewMessages(chatId);
        this.chatStateService.moveChatToTop(chatId);

        if (chat.unreadCount > 0) {
          this.markMessagesAsRead(chatId);
        }
      } else {
        // Chat not found, reload and retry
        this.loadInitialChats();

        setTimeout(() => {
          const retryChat = this.chatStateService.findChatById(chatId);
          if (retryChat) {
            this.chatStateService.setCurrentChat(retryChat);
            this.loadMessages(chatId);
            this.listenForNewMessages(chatId);

            if (retryChat.unreadCount > 0) {
              this.markMessagesAsRead(chatId);
            }
          } else {
            this.chatStateService.clearActiveChat();
          }
        }, 100);
      }
    });
  }

  /**
   * Clear active chat
   */
  clearActiveChat(): void {
    this.stopListeningToActiveChat();
    this.chatStateService.clearActiveChat();
  }

  /**
   * Mark messages as read
   */
  markMessagesAsRead(chatId: string): void {
    this.chatMessageService.markMessagesAsRead(chatId).subscribe();
  }

  /**
   * Mark a chat as read
   */
  markAsReadChat(chat: Chat): Observable<any> {
    const url = `${this.apiUrl}/read-notification-chat`;
    return this.http.put(`${url}/${chat.id}`, {});
  }

  /**
   * Mark all other notifications as read
   */
  markOtherAsRead(): void {
    const url = `${this.apiUrl}/read-all-others-notifications`;
    this.http
      .get(url)
      .pipe(
        tap((response: any) => {
          this.websocketService.unreadCountNotificationSubject.next(response.unread_count);
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.userEmitterSubscription?.unsubscribe();
    this.stopListeningToActiveChat();
  }
}
