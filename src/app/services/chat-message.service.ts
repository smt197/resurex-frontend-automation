// src/app/services/chat-message.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Chat, ChatMessage } from 'src/app/interfaces/Chat';
import { ChatStateService } from './chat-state.service';

// Constants
const MESSAGE_TYPE_IMAGE = 'image';
const MESSAGE_TYPE_FILE = 'file';
const MOVE_TO_TOP_DELAY = 50;
const RETRY_LOAD_DELAY = 100;

/**
 * Service responsible for message operations (loading, sending, marking as read)
 */
@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly chatStateService: ChatStateService
  ) {}

  /**
   * Load messages for a specific chat
   */
  loadMessages(chatId: string): Observable<ChatMessage[]> {
    return this.http
      .get<{ data: ChatMessage[]; meta: any; links: any }>(
        `${this.apiUrl}/chats/${chatId}/messages`
      )
      .pipe(
        map((response) => response.data.map((msg) => ({ ...msg }))),
        tap((messagesFromApi) => {
          this.chatStateService.setCurrentChatMessages(messagesFromApi);
        }),
        catchError((err) => {
          this.chatStateService.setCurrentChatMessages([]);
          return throwError(() => err);
        })
      );
  }

  /**
   * Send a message to a chat
   */
  sendMessage(
    chatId: string,
    messageContent: string | null,
    attachment?: File | null
  ): Observable<ChatMessage> {
    const userId = this.chatStateService.getCurrentUserId();

    if (!userId) {
      return throwError(() => new Error('User not authenticated for sending message'));
    }

    if (!messageContent && !attachment) {
      return throwError(() => new Error('Message or attachment is required.'));
    }

    const formData = new FormData();
    if (messageContent) {
      formData.append('message', messageContent);
    }
    if (attachment) {
      formData.append('attachment', attachment, attachment.name);
    }

    return this.http
      .post<ChatMessage>(`${this.apiUrl}/chats/${chatId}/messages`, formData)
      .pipe(
        tap((sentMessageFromApi: ChatMessage) => {
          const timestamp =
            sentMessageFromApi.timestamp ||
            sentMessageFromApi.created_at ||
            new Date().toISOString();

          const messageToAddToSubject: ChatMessage = {
            id: sentMessageFromApi.id,
            from: 'me',
            message: sentMessageFromApi.message,
            timestamp: timestamp,
            message_type: sentMessageFromApi.message_type,
            file_url: sentMessageFromApi.file_url,
            file_name: sentMessageFromApi.file_name,
            file_mime_type: sentMessageFromApi.file_mime_type,
            file_size: sentMessageFromApi.file_size
          };

          this.chatStateService.addMessageToCurrentChat(messageToAddToSubject);

          let lastMessageText = messageToAddToSubject.message;
          if (messageToAddToSubject.message_type === MESSAGE_TYPE_IMAGE) {
            lastMessageText = messageToAddToSubject.file_name || 'Image';
          } else if (messageToAddToSubject.message_type === MESSAGE_TYPE_FILE) {
            lastMessageText = messageToAddToSubject.file_name || 'File';
          }

          this.updateChatListOnNewMessage(
            sentMessageFromApi.conversation_id!,
            lastMessageText || '',
            messageToAddToSubject.timestamp!,
            false
          );

          // Move chat to top after sending
          setTimeout(() => {
            this.chatStateService.moveChatToTop(sentMessageFromApi.conversation_id!);
          }, MOVE_TO_TOP_DELAY);
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  /**
   * Mark messages as read for a specific chat
   */
  markMessagesAsRead(chatId: string): Observable<void> {
    const userId = this.chatStateService.getCurrentUserId();
    if (!userId) {
      return throwError(() => new Error('User not authenticated'));
    }

    return this.http
      .post<void>(`${this.apiUrl}/chats/${chatId}/messages/read`, {})
      .pipe(
        tap(() => {
          // Update chat in list
          this.chatStateService.updateChatInList(chatId, { unreadCount: 0 });

          // Update current chat if it's the active one
          const currentActiveChat = this.chatStateService.getCurrentChatValue();
          if (currentActiveChat?.id === chatId && currentActiveChat.unreadCount > 0) {
            this.chatStateService.setCurrentChat({ ...currentActiveChat, unreadCount: 0 });
            this.chatStateService.updateTotalUnreadCount();
          }
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }

  /**
   * Update chat list when a new message arrives
   */
  updateChatListOnNewMessage(
    chatId: string,
    message: string,
    timestamp: string,
    incrementUnreadForPartner: boolean = false
  ): void {
    const chat = this.chatStateService.findChatById(chatId);

    if (chat) {
      const activeChatChannel = this.chatStateService.getActiveChatChannel();
      const isChatActive = activeChatChannel === `chat.${chatId}`;

      let calculatedNewUnreadCount = chat.unreadCount || 0;
      if (incrementUnreadForPartner && !isChatActive) {
        calculatedNewUnreadCount++;
      } else if (isChatActive) {
        calculatedNewUnreadCount = 0;
      }

      const updatedChat: Chat = {
        ...chat,
        lastMessage: message,
        timestamp: timestamp,
        unreadCount: calculatedNewUnreadCount
      };

      const currentChats = this.chatStateService.currentChatsValue;
      const chatIndex = currentChats.findIndex((c) => c.id === chatId);

      if (chatIndex > -1) {
        const newChatsList = [...currentChats];
        newChatsList.splice(chatIndex, 1);
        newChatsList.unshift(updatedChat);
        this.chatStateService.setChats(newChatsList);
      }
    }
  }

  /**
   * Handle incoming message from WebSocket
   */
  handleIncomingMessage(chatId: string, newMessage: ChatMessage): void {
    if (newMessage.from === 'partner') {
      const currentMessages = this.chatStateService.getCurrentChatMessagesValue();
      if (!currentMessages.find((m) => m.id === newMessage.id)) {
        this.chatStateService.addMessageToCurrentChat(newMessage);
      }
    }

    if (newMessage.timestamp) {
      this.updateChatListOnNewMessage(
        chatId,
        newMessage.message,
        newMessage.timestamp,
        newMessage.from === 'partner'
      );
    }
  }
}
