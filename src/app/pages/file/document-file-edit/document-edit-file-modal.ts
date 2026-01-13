import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericApiService } from 'src/app/services/generic-api.service';
import {
  DocumentFileInfo,
  FileCreateUpdateModel
} from 'src/app/interfaces/Document';
import { TranslationModule } from 'src/app/shared/language/translation.module';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { getFileFields } from 'src/app/models/document.model';
import { TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'vex-document-edit-file-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMatInputModule,
    MatButtonModule,
    TranslationModule,
    MatDialogModule,
    MatIconModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './document-edit-file-modal.component.html'
})
export class DocumentEditFileModalComponent implements OnInit {
  isLoading = false;
  form = new FormGroup({});
  model: { file?: File } = {};
  fields!: FormlyFieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<DocumentEditFileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { file: DocumentFileInfo },
    private genericApi: GenericApiService,
    private snackbar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.model = {};
  }

  ngOnInit(): void {
    this.fields = getFileFields(
      this.translate,
      () => this.save(),
      () => !this.model.file
    );
  }

  save(): void {
    if (this.form.invalid || !this.model.file) {
      return;
    }
    this.isLoading = true;
    const formData = this.createFormData(this.model);
    this.genericApi
      .updateFile('documents/files', this.data.file.id!.toString(), formData)
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.showMessage(res.message);
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.isLoading = false;
          this.showMessage(err.error?.message);
          this.dialogRef.close(false);
        }
      });
  }

  createFormData(model: Partial<FileCreateUpdateModel>): FormData {
    const formData = new FormData();
    if (model.file) {
      formData.append('file', model.file);
    }
    return formData;
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
