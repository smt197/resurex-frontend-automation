import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { getDocumentCreationFormlyFields } from 'src/app/models/document.model';
import { Router } from '@angular/router';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentService } from '../document.service';
import { UploadStatusService } from 'src/app/services/upload-status.service';

@Component({
  selector: 'vex-document-create-update',
  templateUrl: './document-create-update.component.html',
  styleUrls: ['./document-create-update.component.scss'],
  standalone: true,
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormlyMaterialModule,
    FormlyModule,
    SharedModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    LoadingSpinnerComponent
  ]
})
export class DocumentCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: { files: File[] } = { files: [] };
  fields: FormlyFieldConfig[] = [];
  documentId: string | null = null;
  isLoading = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private genericApiService: GenericApiService,
    private documentService: DocumentService,
    private snackbar: MatSnackBar,
    private uploadStatusService: UploadStatusService
  ) {}

  ngOnInit(): void {
    this.fields = getDocumentCreationFormlyFields(this.translate, this);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const filesToUpload: File[] = this.model.files || [];

    if (filesToUpload.length === 0) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    const firstFile = filesToUpload[0];
    const mainDocumentName =
      firstFile.name.split('.').slice(0, -1).join('.') || firstFile.name;
    formData.append('name', mainDocumentName);
    formData.append('description', mainDocumentName);
    filesToUpload.forEach((file) => {
      formData.append('files[]', file, file.name);
    });
    this.genericApiService.create<any>('documents', formData).subscribe({
      next: (response) => {
        this.isLoading = false;

        // Créer immédiatement le statut d'upload si on a un document ID
        if (response?.data?.id) {
          this.uploadStatusService.startUpload(
            `doc-${response.data.id}`,
            response.data.id
          );

          // Notifier qu'un nouveau document a été créé
          this.documentService.notifyDocumentCreated(response.data);
        }
        this.back();

        this.showMessage(response?.message);
        this.documentService.notifyJobCreated();
      },
      error: (err) => {
        this.isLoading = false;
        this.showMessage(err.error?.message);
      }
    });
  }

  back() {
    this.router.navigate(['index/document']);
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }
}
