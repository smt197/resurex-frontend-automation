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
import { NgFor, NgForOf } from '@angular/common';
import { Utils } from 'src/app/classes/Utils';

FilePond.registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation
);

@Component({
  selector: 'vex-chat-file-pond-type',
  standalone: true,
  imports: [FilePondModule, TranslateModule, MatSnackBarModule, NgForOf, NgFor],
  templateUrl: './chat-file-pond-type.component.html'
})
export class ChatFilePondTypeComponent
  extends FieldType<FieldTypeConfig>
  implements AfterViewInit, OnInit, OnChanges
{
  @ViewChild('pond') pondComponent?: FilePondComponent;
  private cd = inject(ChangeDetectorRef);

  pondFiles: File[] = [];
  pondOptionsConfig: FilePondOptions = FilepondOptionsConfig;
  maxTotalSize: number = 10 * 1024 * 1024; // 10 MB
  fileFields: any[] = []; // Ajouté pour le *ngFor
  private browseFnInitialized = false;

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    super();
    this.fileFields = [
      {
        key: 'attachment' // Clé correspondant au champ dans le formulaire
      }
    ];
  }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['props']) {
      this.initializeBrowseFunction();
    }
  }

  formatFileSize(octets: number) {
    return Utils.formatFileSize(octets);
  }

  // Fonction pour obtenir la taille totale des fichiers
  getTotalFileSize(inputId: string): number {
    return this.pondFiles.reduce((total, file) => total + file.size, 0);
  }

  getPondOptionsForField(field: {
    key: string;
    label: string;
  }): FilePondOptions {
    const pondOptions: FilePondOptions = {
      ...this.pondOptionsConfig,
      credits: false,
      allowMultiple: true,
      allowImagePreview: true,
      imagePreviewHeight: 170,
      labelIdle: this.translate.instant('global.filepond.label_idle')
    };
    return pondOptions;
  }

  ngAfterViewInit() {
    // On essaie aussi d'initialiser ici, au cas où ngOnChanges ne se déclencherait pas la première fois
    this.initializeBrowseFunction();
  }

  private initializeBrowseFunction(): void {
    // On s'assure de ne l'exécuter qu'une seule fois
    if (this.browseFnInitialized) {
      return;
    }

    // On vérifie que la vue ET les props sont prêtes
    if (
      this.pondComponent &&
      this.props &&
      this.props['browse'] &&
      typeof this.props['browse'] === 'function'
    ) {
      this.props['browse'](() => {
        (this.pondComponent as any)?.pond?.browse();
      });

      // On met le drapeau pour ne plus refaire cette initialisation
      this.browseFnInitialized = true;
    } else {
      console.warn(
        '[FILE-POND] initializeBrowseFunction called, but conditions not met.',
        {
          viewReady: !!this.pondComponent,
          propsReady: !!this.props?.['browse']
        }
      );
    }
  }

  onAddFile(event: any): void {
    if (event.error) {
      console.error('Filepond error:', event.error);
      this.formControl.setValue(null);
      this.pondFiles = [];
      return;
    }

    // Ajout du fichier à la liste
    const file = event.file.file;
    this.pondFiles = [file];
    this.formControl.setValue(file);
    this.cd.detectChanges();
  }

  onRemoveFile(event: any): void {
    this.formControl.setValue(null);
    this.pondFiles = [];
    this.cd.detectChanges();
  }
}
