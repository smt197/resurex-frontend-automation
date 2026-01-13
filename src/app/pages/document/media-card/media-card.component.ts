import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormatFileIcon } from 'src/app/classes/format-document-icon';
import { DocumentFileInfo } from 'src/app/interfaces/Document';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { DocumentPreviewModalComponent } from '../document-preview-modal/document-preview-modal.component';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { DocumentEditFileModalComponent } from '../../file/document-file-edit/document-edit-file-modal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vex-media-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    SharedModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMatInputModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './media-card.component.html'
})
export class MediaCardComponent {
  @Input() file!: DocumentFileInfo;
  @Output() fileDeleted = new EventEmitter<number>();
  @Output() fileUpdated = new EventEmitter<void>();
  @Output() updateStarted = new EventEmitter<void>();
  title = this.translate.instant('document.create_update.create_title');
  documentId: string | null = null;

  constructor(
    private translate: TranslateService,
    public dialog: MatDialog,
    public cdRef: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  getFileIcon(mimeType: string) {
    return FormatFileIcon.getIconDocument(mimeType);
  }

  formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  previewFile(): void {
    if (!this.file || !this.file.url) {
      console.error('Impossible de prévisualiser : fichier ou URL manquant.');
      return;
    }
    this.dialog.open(DocumentPreviewModalComponent, {
      disableClose: true,
      width: '90vw',
      height: '90vh',
      maxWidth: '1200px',
      data: {
        url: this.file.url,
        name: this.file.file_name,
        mimeType: this.file.mime_type
      }
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(DocumentEditFileModalComponent, {
      disableClose: true,
      width: '400px',
      data: { file: this.file }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateStarted.emit();
        this.fileUpdated.emit();
      }
    });
  }

  isWordDocument(): boolean {
    if (!this.file?.mime_type) return false;
    const wordMimeTypes = [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-word.document.macroEnabled.12'
    ];

    return wordMimeTypes.includes(this.file.mime_type);
  }

  downloadFile() {
    const fileUrl = `${environment.apiUrl}/documents/${this.file.id}/${this.file.file_name}`;

    this.http
      .get(fileUrl, {
        responseType: 'blob',
        headers: {
          Accept: this.file.mime_type
        }
      })
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = this.file.file_name || this.file.name || 'document';
        link.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
