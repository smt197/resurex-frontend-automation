// src/app/services/chat-websocket.service.ts
import { Injectable, NgZone } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatStateService } from './chat-state.service';
import { ChatMessage } from 'src/app/interfaces/Chat';

// Constants
const CHAT_CHANNEL_PREFIX = 'chat.';
const PRIVATE_CHANNEL_PREFIX = 'private-';
const NEW_MESSAGE_EVENT = '.new-message';
const UNREAD_COUNT_EVENT = '.unread.count.updated';
const USER_UNREAD_CHANNEL_PREFIX = 'user-unreadcount.';

/**
 * Service responsible for WebSocket operations related to chat
 */
@Injectable({
  providedIn: 'root'
})
export class ChatWebsocketService {
  constructor(
    private readonly websocketService: WebsocketService,
    private readonly chatStateService: ChatStateService,
    private readonly zone: NgZone
  ) {}

  /**
   * Listen for unread chat messages updates
   */
  listenForUnreadMessagesUpdates(userId: string): void {
    if (!userId) {
      return;
    }

    const channelName = `${USER_UNREAD_CHANNEL_PREFIX}${userId}`;

    this.websocketService.listenPrivateWebsocket(
      UNREAD_COUNT_EVENT,
      channelName,
      (event: any) => {
        this.zone.run(() => {
          this.chatStateService.updateUnreadCount(event.unreadCount);
        });
      }
    );
  }

  /**
   * Check if a user is online
   */
  isUserOnline(userId: string | number | undefined): Observable<boolean> {
    if (userId === undefined || userId === null) {
      return new Observable(observer => {
        observer.next(false);
        observer.complete();
      });
    }

    return this.websocketService.onlineUsers$.pipe(
      map((onlineUsers) =>
        onlineUsers.some(
          (onlineUser) => String(onlineUser.id) === String(userId)
        )
      )
    );
  }

  /**
   * Listen for new messages on a specific chat
   */
  listenForNewMessages(
    chatId: string,
    onMessageReceived: (message: ChatMessage) => void
  ): void {
    const userId = this.chatStateService.getCurrentUserId();
    if (!userId) {
      return;
    }

    const baseChannelName = `${CHAT_CHANNEL_PREFIX}${chatId}`;
    const fullPrivateChannelName = `${PRIVATE_CHANNEL_PREFIX}${baseChannelName}`;

    // Leave previous active channel if different
    const previousChannel = this.chatStateService.getActiveChatChannel();
    if (previousChannel && previousChannel !== baseChannelName) {
      this.websocketService.leaveChannel(`${PRIVATE_CHANNEL_PREFIX}${previousChannel}`);
    }

    // Set new active channel
    this.chatStateService.setActiveChatChannel(baseChannelName);

    // Listen for new messages
    this.websocketService.listenPrivateWebsocket(
      NEW_MESSAGE_EVENT,
      baseChannelName,
      (echoEvent: any) => {
        this.zone.run(() => {
          const messagePayload = echoEvent;
          const timestampFromPayload = messagePayload.timestamp || new Date().toISOString();

          const newMessage: ChatMessage = {
            id: messagePayload.id,
            from: String(messagePayload.sender_id) === userId ? 'me' : 'partner',
            message: messagePayload.message,
            timestamp: timestampFromPayload,
            message_type: messagePayload.message_type || 'text',
            file_url: messagePayload.file_url,
            file_name: messagePayload.file_name,
            file_mime_type: messagePayload.file_mime_type,
            file_size: messagePayload.file_size
          };

          onMessageReceived(newMessage);
        });
      }
    );
  }

  /**
   * Stop listening to the active chat channel
   */
  stopListeningToActiveChat(): void {
    const activeChannel = this.chatStateService.getActiveChatChannel();
    if (activeChannel) {
      this.websocketService.leaveChannel(activeChannel);
      this.chatStateService.setActiveChatChannel(null);
    }
  }

  /**
   * Leave a specific channel
   */
  leaveChannel(channelName: string): void {
    this.websocketService.leaveChannel(channelName);
  }
}
