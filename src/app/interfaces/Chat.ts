export interface Chat {
  id: string;
  partnerId: string;
  imageUrl: string;
  first_name: string;
  lastMessage: string;
  unreadCount: number;
  timestamp: string;
  participants?: UserStub[];
  is_blocked?: boolean;
}
export interface UserStub {
  // Une version simplifiée de User, juste pour les participants
  id: string | number;
  name?: string;
  photo?: string;
  is_blocked?: boolean;
  // ... autres champs que vous voulez pour les participants
}

export interface ChatMessage {
  id: string;
  from: 'me' | 'partner';
  message: string;
  timestamp?: string;
  conversation_id?: string;
  created_at?: string;
  message_type?: 'text' | 'image' | 'file'; // AJOUTER
  file_url?: string; // AJOUTER
  file_name?: string; // AJOUTER
  file_mime_type?: string; // AJOUTER
  file_size?: number; // AJOUTER
  // Optionnel: pour la prévisualisation avant upload ou l'affichage d'un spinner d'upload
  isUploading?: boolean;
  uploadProgress?: number;
  tempFile?: File; // Pour stocker le fichier local avant l'envoi
  tempPreviewUrl?: string; // Pour la prévisualisation d'image
}
