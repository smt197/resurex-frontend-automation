import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { FilePondModule } from 'ngx-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { MediaCardComponent } from '../media-card/media-card.component';
import { Document, DocumentFileInfo } from 'src/app/interfaces/Document';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation
);

import { MatDialog } from '@angular/material/dialog';
import { DocumentAddFileModalComponent } from '../document-add-file-modal/document-add-file-modal.component';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { TranslationModule } from 'src/app/shared/language/translation.module';
import { ConfirmationDialogComponent } from '../../file/confirm-dialog/confirmation-dialog.component';

@Component({
  selector: 'vex-document-show',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FilePondModule,
    MediaCardComponent,
    ReactiveFormsModule,
    FormlyModule,
    LoadingSpinnerComponent,
    TranslationModule
  ],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  templateUrl: './document-show.component.html',
  styleUrl: './document-show.component.scss'
})
export class DocumentShowComponent implements OnInit {
  document = signal<Document | null>(null);
  isLoading = signal(true);
  isGlobalUpdating = signal(false);
  name: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private genericApi: GenericApiService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getParamsRouter();
  }
  getParamsRouter() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.name = params.get('slug') + '';
      this.loadDocument(this.name);
    });

    if (!this.name) {
      this.router.navigate(['index/document']);
    }
  }
  loadDocument(slug: string): void {
    this.isLoading.set(true);
    this.genericApi.getOne<Document>('documents', slug).subscribe({
      next: (res) => {
        let response = res.data as Document;
        if (response) {
          if (response.files_info.length > 0) {
            this.isGlobalUpdating.set(true);
            this.document.set(response);
          } else {
            this.isGlobalUpdating.set(false);
            this.document.update;
            this.back();
          }
        }
        this.isGlobalUpdating.set(false);
        this.isLoading.set(false);
      },
      error: () => {
        this.isGlobalUpdating.set(false);

        this.isLoading.set(false);
      }
    });
  }

  openAddFileDialog(): void {
    const dialogRef = this.dialog.open(DocumentAddFileModalComponent, {
      width: '500px',
      data: { slug: this.name }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result?.files || result.files.length === 0) return;
      this.isLoading.set(true);

      const formData = new FormData();
      formData.append('_method', 'PATCH');

      result.files.forEach((file: File) => {
        formData.append('files[]', file, file.name);
      });
      this.genericApi
        .update('documents', this.name as string, formData)
        .subscribe({
          next: (response) => {
            this.showMessage(response.message);
            this.loadDocument(this.name as string);
          },
          error: (err) => {
            this.showMessage(err.error?.message);
            this.isLoading.set(false);
          }
        });
    });
  }

  deleteFile(fileId: number): void {
    const fileToDelete = this.document()?.files_info?.find(
      (f) => f.id === fileId
    );

    if (!fileToDelete) {
      console.error(`Impossible de trouver le fichier avec l'ID: ${fileId}`);
      this.showMessage('Erreur : Fichier non trouvé.');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        name: fileToDelete.name
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.isLoading.set(true);
        this.isGlobalUpdating.set(true);
        this.genericApi.delete('documents', fileId.toString()).subscribe({
          next: (response) => {
            this.showMessage(response?.message);
            this.loadDocument(this.name as string);
          },
          error: (err) => {
            this.showMessage(err.error?.message);
            this.isLoading.set(false);
            this.isGlobalUpdating.set(false);
          }
        });
      }
    });
  }
  back() {
    this.router.navigate(['index/document']);
  }

  reloadUpdate(): void {
    if (this.name) {
      this.isGlobalUpdating.set(true);
      this.loadDocument(this.name);
      this.isGlobalUpdating.set(false);
    }
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }

  addDocument() {
    this.router.navigate(['index/document/create']);
  }
}
