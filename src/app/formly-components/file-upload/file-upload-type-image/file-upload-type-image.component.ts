import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { environment } from 'src/environments/environment';
import { FilePondOptions, registerPlugin } from 'filepond';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { NgFor, NgIf } from '@angular/common';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import { FilepondOptionsConfig } from 'src/app/interfaces/FilepondOptionsConfig';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

// Register the plugin globally
FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageValidateSize
);

@Component({
  selector: 'vex-file-upload-type-image',
  templateUrl: './file-upload-type-image.component.html',
  styleUrl: './file-upload-type-image.component.scss',
  standalone: true,
  imports: [
    FilePondModule,
    MatSelectModule,
    NgFor,
    TranslateModule
  ],
})
export class FileUploadTypeImageComponent extends FieldType<FieldTypeConfig> {
   extensions: string[] = environment.extensions_image;
  fileFields = [
    { key: 'photo', label: 'Images' },
  ];
  maxTotalSize = environment.max_file_size;
  requiredFields: string[] = []; // Liste des champs requis

  selectedFiles: { [key: string]: File[] } = {
    photo: [],
  };

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    super();
  }

  formatFileSize(octets: number, decimals: number = 2): string {
    if (octets === 0) return this.translate.instant('file_upload.size.bytes', { value: 0 });

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['size.bytes', 'size.kb', 'size.mb', 'size.gb', 'size.tb'];
    const i = Math.floor(Math.log(octets) / Math.log(k));

    return this.translate.instant(`file_upload.${sizes[i]}`, {
      value: parseFloat((octets / Math.pow(k, i)).toFixed(dm))
    });
  }

  getTotalFileSize(inputId: string): number {
    return this.selectedFiles[inputId]?.reduce((total, file) => total + file.size, 0) || 0;
  }

  getPondOptionsForField(field: { key: string; label: string; }): FilePondOptions {
    if (!this.requiredFields.includes(field.key)) {
      this.requiredFields.push(field.key);
    }

    const fileType = this.translate.instant(`file_upload.file_types.${field.key}`);
    const labelTextView = this.translate.instant('file_upload.label.idle', { 
      type: fileType,
      action: this.translate.instant('file_upload.label.action')
    });

    let pondOptions: FilePondOptions = FilepondOptionsConfig;
    pondOptions = {
      ...pondOptions,
      labelIdle: labelTextView,
      acceptedFileTypes: this.extensions,
      imagePreviewMaxFileSize: this.maxTotalSize.toString(),
      labelFileTypeNotAllowed: this.translate.instant('file_upload.validation.file_type'),
      fileValidateTypeDetectType: (source, type) => new Promise((resolve) => {
        resolve(this.extensions.includes(type) ? type : '');
      }),
      onaddfile: (error, file) => {
        if (error) {
          console.error('Error adding file', error);
          return;
        }
        this.formControl.setValue(file.file);
      },
    };

    return pondOptions;
  }

  pondHandleAddFile(event: any, fieldKey: string): void {
    const file = event.file.file;
    const allowedExtensions = ['.png', '.jpg', '.jpeg'];
    const formControl = this.formControl.get(fieldKey);

    if (!this.selectedFiles[fieldKey]) {
      this.selectedFiles[fieldKey] = [];
    }

    if (file) {
      const fileName = file.name.toLowerCase();
      let totalSize = this.getTotalFileSize(fieldKey);

      if (!allowedExtensions.some((ext) => fileName.endsWith(ext))) {
        this.showTranslatedSnackBar('file_upload.validation.file_type', 'error');
        event.file.abortLoad();
        return;
      }

      if (this.isDuplicateFile(fieldKey, file)) {
        this.showTranslatedSnackBar(
          'file_upload.validation.duplicate',
          'warning',
          { filename: file.name }
        );
        event.file.abortLoad();
        return;
      }

      if (totalSize + file.size > this.maxTotalSize) {
        const maxSizeMB = (this.maxTotalSize / 1024 / 1024).toFixed(2);
        this.showTranslatedSnackBar(
          'file_upload.validation.size_limit',
          'error',
          { 
            filename: file.name,
            size: maxSizeMB
          }
        );
        event.file.abortLoad();
        return;
      }

      this.selectedFiles[fieldKey].push(file);
      this.formControl.setValue([...this.selectedFiles[fieldKey]]);

      this.showTranslatedSnackBar(
        'file_upload.validation.success',
        'success',
        { filename: file.name }
      );
    }
  }

  private isDuplicateFile(fieldKey: string, file: File): boolean {
    if (!this.selectedFiles[fieldKey]) return false;
    const fileName = file.name.toLowerCase();
    return this.selectedFiles[fieldKey].some(
      (f) =>
        f.name.toLowerCase() === fileName &&
        f.size === file.size &&
        f.lastModified === file.lastModified
    );
  }

  pondHandleRemoveFile(event: any, fieldKey: string) {
    const removedFile = event.file.file;
    if (removedFile) {
      this.selectedFiles[fieldKey] = this.selectedFiles[fieldKey].filter(
        file => !this.isSameFile(file, removedFile)
      );
      
      this.formControl.get(fieldKey)?.setValue([...this.selectedFiles[fieldKey]]);
      
      this.showTranslatedSnackBar(
        'file_upload.validation.removed',
        'info',
        { filename: removedFile.name }
      );
    }
  }
  
  private isSameFile(file1: File, file2: File): boolean {
    return file1.name === file2.name &&
           file1.size === file2.size &&
           file1.lastModified === file2.lastModified;
  }

  private showTranslatedSnackBar(
    key: string, 
    panelClass: string, 
    params?: Record<string, any>
  ): void {
    const message = this.translate.instant(key, params);
    const close = this.translate.instant('global.close');
    
    this.snackBar.open(message, close, {
      duration: 5000,
      panelClass: `snackbar-${panelClass}`,
      verticalPosition: 'top'
    });
  }
}