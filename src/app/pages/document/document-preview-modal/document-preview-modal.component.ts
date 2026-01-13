import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxDocViewerModule, viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'vex-document-preview-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    NgxDocViewerModule
  ],
  templateUrl: './document-preview-modal.component.html',
  styleUrl: './document-preview-modal.component.scss'
})
export class DocumentPreviewModalComponent {
  viewerType: viewerType = 'google'; // Viewer par défaut

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { url: string; name: string; mimeType: string }
  ) {
    this.viewerType = this.getViewerType(data.mimeType);
  }
  private getViewerType(mimeType: string): viewerType {
    switch (mimeType) {
      case 'application/pdf':
        return 'pdf';

      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'application/msword':
        return 'google';

      case 'image/png':
      case 'image/jpeg':
      case 'image/gif':
        return 'url';

      default:
        return 'url';
    }
  }
}
