import {
  Component,
  ViewChild,
  inject,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { FilePondOptions } from 'filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { FilepondOptionsConfig } from 'src/app/interfaces/FilepondOptionsConfig';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Utils } from 'src/app/classes/Utils';

FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation
);

@Component({
  selector: 'vex-file-upload-formly',
  standalone: true,
  imports: [
    CommonModule,
    FilePondModule,
    TranslateModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  templateUrl: './file-upload-formly.component.html',
  styleUrls: ['./file-upload-formly.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadFormlyComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  @ViewChild('pond') pondComponent?: FilePondComponent;
  private cd = inject(ChangeDetectorRef);
  maxTotalSize: number = 10 * 1024 * 1024; // 10 MB
  pondFiles: File[] = [];
  pondOptionsConfig: FilePondOptions = FilepondOptionsConfig;

  constructor(
    private translate: TranslateService,
    private snackbar: MatSnackBar
  ) {
    super();
  }

  ngOnInit() {
    this.initPondOptions();
  }

  initPondOptions() {
    this.translate
      .get('global.filepond.label_idle')
      .subscribe((translatedLabel) => {
        this.pondOptionsConfig = {
          ...this.pondOptionsConfig,
          labelIdle: translatedLabel,
          allowMultiple: this.props['multiple'] || false,
          maxFiles: this.props['maxFiles'] || null,
          acceptedFileTypes: this.props['acceptedFileTypes'] || null,
          allowImagePreview: true,
          imagePreviewHeight: 170,
          credits: false,
          allowReorder: this.props['allowReorder'] || false
        };
        this.cd.detectChanges();
      });
  }

  onAddFile(event: any): void {

    if (event.error) {
      this.formControl.setValue([]);
      this.pondFiles = [];
      return;
    }

    const file = event.file.file;

    // Vérifier si le fichier existe déjà
    const existingFileIndex = this.pondFiles.findIndex(
      (f) => f.name === file.name && f.size === file.size
    );

    if (existingFileIndex !== -1) {
      const pondFiles = this.pondComponent?.['pond']?.getFiles();
      if (pondFiles) {
        const fileToRemove = pondFiles.find(
          (pondFile: any) => pondFile.file === file
        );
        if (fileToRemove) {
          this.pondComponent?.['pond']?.removeFile(fileToRemove.id);
        }
      }
      this.showMessage(
        this.translate.instant('global.file_already_exists', {
          filename: file.name
        })
      );
      return;
    }

    // Ajouter le fichier
    if (this.props['multiple']) {
      this.pondFiles.push(file);
      this.formControl.setValue(this.pondFiles);
    } else {
      this.pondFiles = [file];
      this.formControl.setValue([file]);
    }

  }

  formatFileSize(octets: number) {
    return Utils.formatFileSize(octets);
  }

  getTotalFileSize(inputId: string): number {
    return this.pondFiles.reduce((total, file) => total + file.size, 0);
  }

  onRemoveFile(event: any): void {
    const fileToRemove = event.file.file;
    this.pondFiles = this.pondFiles.filter((f) => f !== fileToRemove);
    this.formControl.setValue(this.pondFiles);
    this.cd.detectChanges();
  }

  showMessage(message: string) {
    this.snackbar.open(message, 'Fermer', { duration: 5000 });
  }
}
