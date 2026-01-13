import { FormlyFieldConfig } from '@ngx-formly/core';
import { ChatConversationComponent } from '../pages/chat/chat-conversation/chat-conversation.component';

export class ChatMessageModel {
  message: string | null;
  attachment: File | null;

  constructor(chat: ChatMessageModel) {
    this.message = chat.message ?? null;
    this.attachment = chat.attachment ?? null;
  }
}

export function getChatMessageFormFields(
  component: ChatConversationComponent
): FormlyFieldConfig[] {
  return [
    {
      fieldGroupClassName: 'flex flex-col gap-2',
      fieldGroup: [
        // CHAMP 1: FilePond (pièce jointe)
        {
          key: 'attachment',
          type: 'chat-file-pond',
          className: 'flex-none',
          // Affiche ce champ uniquement si isAttachmentAreaVisible est vrai
          hide: !component.isAttachmentAreaVisible(),
          props: {
            browse: component.onBrowseInit.bind(component),
            disabled: component.isBlocked()
          }
        },

        // CHAMP 2: Barre de saisie de message
        {
          key: 'message',
          type: 'chat-input-type', // Notre nouveau type personnalisé
          className: 'flex-auto',
          props: {
            placeholder: component.translateService.instant(
              'global.chats.try_message'
            ),
            // Lie les actions des boutons aux méthodes du composant parent
            onAdd: () => component.toggleAttachmentArea(),
            onSend: () => component.send(),
            // Passe l'état de chargement et de désactivation en tant que fonctions
            isUploading: () => component.isUploadingFile(),
            isSendDisabled: () =>
              (!component.model.message?.trim() &&
                !component.model.attachment) ||
              component.isUploadingFile()
          }
        }
      ]
    }
  ];
}
