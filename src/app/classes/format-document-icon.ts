// src/app/helpers/file-icon.helper.ts
export class FormatFileIcon {
  static getIcon(mimeType: string): string {
    if (!mimeType) return 'insert_drive_file';

    if (mimeType.startsWith('image/')) {
      return 'image';
    } else if (mimeType === 'application/pdf') {
      return 'picture_as_pdf';
    } else if (
      mimeType === 'application/msword' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      return 'description'; // Icône texte pour Word
    } else if (
      mimeType === 'application/vnd.ms-excel' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      return 'grid_on'; // Icône tableau pour Excel
    } else if (
      mimeType === 'application/vnd.ms-powerpoint' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ) {
      return 'slideshow'; // Icône diaporama pour PowerPoint
    } else if (
      mimeType === 'application/zip' ||
      mimeType === 'application/x-rar-compressed' ||
      mimeType === 'application/x-7z-compressed'
    ) {
      return 'folder_zip'; // Icône pour les archives
    }

    // Par défaut
    return 'insert_drive_file';
  }

  static getIconDocument(mimeType: string): string {
    if (!mimeType) return 'insert_drive_file';

    if (mimeType.startsWith('image/')) {
      return 'mat:image';
    } else if (mimeType === 'application/pdf') {
      return 'mat:picture_as_pdf';
    } else if (
      mimeType === 'application/msword' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      return 'mat:description'; // Icône texte pour Word
    } else if (
      mimeType === 'application/vnd.ms-excel' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      return 'mat:grid_on'; // Icône tableau pour Excel
    } else if (
      mimeType === 'application/vnd.ms-powerpoint' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ) {
      return 'mat:slideshow'; // Icône diaporama pour PowerPoint
    } else if (
      mimeType === 'application/zip' ||
      mimeType === 'application/x-rar-compressed' ||
      mimeType === 'application/x-7z-compressed'
    ) {
      return 'mat:folder_zip'; // Icône pour les archives
    }

    // Par défaut
    return 'mat:insert_drive_file';
  }

  static getSlideToggle(disable : boolean){
    return disable ? 'mat:check': 'mat:add';
  }
}

