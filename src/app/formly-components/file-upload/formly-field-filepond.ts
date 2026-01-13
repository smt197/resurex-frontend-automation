import {
  Component,
  ViewChild,
  AfterViewInit,
  inject,
  ChangeDetectorRef,
  OnInit,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { FilePondOptions } from 'filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { FilepondOptionsConfig } from 'src/app/interfaces/FilepondOptionsConfig';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation
);
@Component({
  selector: 'vex-formly-field-filepond',
  standalone: true,
  imports: [CommonModule, FormlyModule, FilePondModule],
  template: `
    <!-- On passe les options depuis les props et on écoute les événements -->
    <file-pond
  #pond
  [options]="getPondOptionsForField(field)"
  (onaddfile)="onFileAdded($event)"
  (onremovefile)="onFileRemoved()">
</file-pond>

  `
})
export class FormlyFieldFilepondComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  @ViewChild('pond') pondComponent?: FilePondComponent;
  private cd = inject(ChangeDetectorRef);
  // Les options par défaut peuvent être surchargées par les props
  pondFiles: File[] = [];
  pondOptionsConfig: FilePond.FilePondOptions = FilepondOptionsConfig;
  maxTotalSize: number = 10 * 1024 * 1024; // 10 MB
  fileFields: any[] = []; // Ajouté pour le *ngFor

  constructor(
    private translate: TranslateService
  ) {
    super();
    this.fileFields = [
      {
        key: 'file' // Clé correspondant au champ dans le formulaire
      }
    ];
  }
  ngOnInit() {}

getPondOptionsForField(field: FormlyFieldConfig): FilePondOptions {
  const key = Array.isArray(field.key) ? field.key.join('.') : String(field.key ?? 'file');

  const pondOptions: FilePondOptions = {
    ...this.pondOptionsConfig,
    name: key,
    credits: false,
    allowReorder: true,
    allowImagePreview: true,
    imagePreviewHeight: 170,
    labelIdle: this.translate.instant('global.filepond.label_idle'),
  };
  return pondOptions;
}

  // Quand un fichier est ajouté dans FilePond...
  onFileAdded(event: any) {
    const file = event.file.file; // On récupère l'objet File natif
    // ...on met à jour la valeur du contrôle de formulaire Formly.
    this.formControl.setValue(file);
    this.cd.detectChanges();
  }

  // Quand un fichier est retiré...
  onFileRemoved() {
    this.formControl.setValue(null);
    this.pondFiles = [];
    this.cd.detectChanges();
  }
}
