// src/app/services/chat-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat, ChatMessage } from 'src/app/interfaces/Chat';

/**
 * Service responsible for managing chat state (chats list, current chat, messages, counters)
 */
@Injectable({
  providedIn: 'root'
})
export class ChatStateService {
  // Chat list state
  private readonly _chats = new BehaviorSubject<Chat[]>([]);
  readonly chats$: Observable<Chat[]> = this._chats.asObservable();

  // Current chat messages state
  private readonly _currentChatMessages = new BehaviorSubject<ChatMessage[]>([]);
  readonly currentChatMessages$: Observable<ChatMessage[]> = this._currentChatMessages.asObservable();

  // Current active chat
  private readonly _currentChat = new BehaviorSubject<Chat | null>(null);
  readonly currentChat$: Observable<Chat | null> = this._currentChat.asObservable();

  // Total unread count across all chats
  private readonly _totalChatUnreadCount = new BehaviorSubject<number>(0);
  readonly totalChatUnreadCount$: Observable<number> = this._totalChatUnreadCount.asObservable();

  // Individual chat unread count
  private readonly _unreadCountChatSubject = new BehaviorSubject<number>(0);
  readonly unreadChatCount$: Observable<number> = this._unreadCountChatSubject.asObservable();

  // Drawer state
  private readonly _drawerOpen = new BehaviorSubject<boolean>(false);
  readonly drawerOpen$: Observable<boolean> = this._drawerOpen.asObservable();

  // Initial chats loaded flag
  private readonly _initialChatsLoaded = new BehaviorSubject<boolean>(false);
  readonly initialChatsLoaded$: Observable<boolean> = this._initialChatsLoaded.asObservable();

  // Current user ID
  private currentUserId: string | null = null;

  // Active chat channel name
  private activeChatChannel: string | null = null;

  /**
   * Get current chats value
   */
  get currentChatsValue(): Chat[] {
    return this._chats.getValue();
  }

  /**
   * Get current user ID
   */
  getCurrentUserId(): string | null {
    return this.currentUserId;
  }

  /**
   * Set current user ID
   */
  setCurrentUserId(userId: string | null): void {
    this.currentUserId = userId;
  }

  /**
   * Get active chat channel name
   */
  getActiveChatChannel(): string | null {
    return this.activeChatChannel;
  }

  /**
   * Set active chat channel name
   */
  setActiveChatChannel(channel: string | null): void {
    this.activeChatChannel = channel;
  }

  /**
   * Update chats list
   */
  setChats(chats: Chat[]): void {
    this._chats.next(chats);
    this.updateTotalUnreadCount();
  }

  /**
   * Update current chat
   */
  setCurrentChat(chat: Chat | null): void {
    this._currentChat.next(chat);
  }

  /**
   * Get current chat value
   */
  getCurrentChatValue(): Chat | null {
    return this._currentChat.getValue();
  }

  /**
   * Update current chat messages
   */
  setCurrentChatMessages(messages: ChatMessage[]): void {
    this._currentChatMessages.next(messages);
  }

  /**
   * Get current chat messages value
   */
  getCurrentChatMessagesValue(): ChatMessage[] {
    return this._currentChatMessages.getValue();
  }

  /**
   * Add a message to current chat messages
   */
  addMessageToCurrentChat(message: ChatMessage): void {
    const currentMessages = this._currentChatMessages.getValue();
    this._currentChatMessages.next([...currentMessages, message]);
  }

  /**
   * Update unread count for a specific chat
   */
  updateUnreadCount(count: number): void {
    this._unreadCountChatSubject.next(count);
  }

  /**
   * Set initial chats loaded flag
   */
  setInitialChatsLoaded(loaded: boolean): void {
    this._initialChatsLoaded.next(loaded);
  }

  /**
   * Update total unread count across all chats
   */
  updateTotalUnreadCount(): void {
    const total = this._chats.value.reduce(
      (sum, chat) => sum + (chat.unreadCount || 0),
      0
    );
    this._totalChatUnreadCount.next(total);
  }

  /**
   * Update drawer open state
   */
  setDrawerOpen(isOpen: boolean): void {
    this._drawerOpen.next(isOpen);
  }

  /**
   * Find a chat by ID in the current chats list
   */
  findChatById(chatId: string): Chat | undefined {
    return this._chats.getValue().find((c) => c.id === chatId);
  }

  /**
   * Update a specific chat in the list
   */
  updateChatInList(chatId: string, updatedChat: Partial<Chat>): void {
    const currentChats = this._chats.getValue();
    const chatIndex = currentChats.findIndex((c) => c.id === chatId);

    if (chatIndex > -1) {
      const newChatsList = [...currentChats];
      newChatsList[chatIndex] = { ...newChatsList[chatIndex], ...updatedChat };
      this._chats.next(newChatsList);
      this.updateTotalUnreadCount();
    }
  }

  /**
   * Move a chat to the top of the list
   */
  moveChatToTop(chatId: string): void {
    const currentChats = this._chats.getValue();
    const chatIndex = currentChats.findIndex((c) => c.id === chatId);

    if (chatIndex > 0) {
      const updatedChats = [...currentChats];
      const chatToMove = updatedChats.splice(chatIndex, 1)[0];
      updatedChats.unshift(chatToMove);
      this._chats.next(updatedChats);
    }
  }

  /**
   * Add or update a chat in the list and move it to top
   */
  addOrUpdateChat(chat: Chat): void {
    const currentChats = this._chats.getValue();
    const existingChatIndex = currentChats.findIndex((c) => c.id === chat.id);

    let updatedChats: Chat[];

    if (existingChatIndex > -1) {
      // Update existing chat and move to top
      updatedChats = [...currentChats];
      if (existingChatIndex === 0) {
        updatedChats[0] = chat;
      } else {
        updatedChats.splice(existingChatIndex, 1);
        updatedChats.unshift(chat);
      }
    } else {
      // Add new chat to top
      updatedChats = [chat, ...currentChats];
    }

    this._chats.next(updatedChats);
    this.updateTotalUnreadCount();
  }

  /**
   * Clear all user-specific data
   */
  clearAllData(): void {
    this.currentUserId = null;
    this.activeChatChannel = null;
    this._chats.next([]);
    this._currentChat.next(null);
    this._currentChatMessages.next([]);
    this._totalChatUnreadCount.next(0);
    this._unreadCountChatSubject.next(0);
    this._initialChatsLoaded.next(false);
  }

  /**
   * Clear active chat data
   */
  clearActiveChat(): void {
    this._currentChat.next(null);
    this._currentChatMessages.next([]);
  }
}
