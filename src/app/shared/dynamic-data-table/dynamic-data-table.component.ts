import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent
} from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectionModel } from '@angular/cdk/collections';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { ActionEvent, PaginationConfig } from './Dynamic-Table-Interface';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormatFileIcon } from 'src/app/classes/format-document-icon';
import { Document, DocumentFileInfo } from 'src/app/interfaces/Document';
import { User } from 'src/app/interfaces/User';
import { Roles } from 'src/app/interfaces/Roles';
import { Permissions } from 'src/app/interfaces/Permissions';
import { UploadStatusIndicatorComponent } from 'src/app/pages/document/upload-status-indicator/upload-status-indicator.component';
import { UploadStatusService } from 'src/app/services/upload-status.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vex-dynamic-data-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatSlideToggleModule,
    TranslateModule,
    LoadingSpinnerComponent,
    UploadStatusIndicatorComponent
  ],
  templateUrl: './dynamic-data-table.component.html',
  styleUrl: './dynamic-data-table.component.scss',
  animations: [fadeInUp400ms, stagger40ms]
})
export class DynamicDataTableComponent<T> implements OnChanges {
  // --- INPUTS ---
  @Input({ required: true }) type: string = '';
  @Input({ required: true }) data: T[] = [];
  @Input() columns: TableColumn<T>[] = [];
  @Input() dynamicFormlyFields: FormlyFieldConfig[] = [];
  @Input() externalFilters: {
    [key: string]: string | number | boolean | null;
  } = {};
  @Input({ required: true }) pagination!: PaginationConfig;
  @Input() isLoading: boolean = false;
  @Input() selection?: SelectionModel<T>; // Optionnel, pour les tables avec sélection
  @Input() noDataMessage: string = 'Aucune donnée disponible.';

  // --- OUTPUTS ---
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() sortChange = new EventEmitter<Sort>();
  @Output() action = new EventEmitter<ActionEvent<T>>();

  // --- INTERNALS ---
  dataSource = new MatTableDataSource<T>();
  visibleColumns: string[] = [];

  // On utilise une propriété privée pour stocker la référence
  private _paginator!: MatPaginator;
  private _sort!: MatSort;

  // Le setter pour Paginator
  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    if (paginator) {
      this._paginator = paginator;
    }
  }

  @ViewChild(MatSort) set sort(sort: MatSort) {
    if (sort) {
      this._sort = sort;
      if (!this.dataSource.sort) {
        this.dataSource.sort = this._sort;
        this._sort.sortChange.subscribe((s) => this.sortChange.emit(s));
      }
    }
  }

  constructor(private uploadStatusService: UploadStatusService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Générer les colonnes depuis les champs Formly uniquement si aucune colonne n'est fournie explicitement
    if (this.dynamicFormlyFields && this.dynamicFormlyFields.length > 0 && (!this.columns || this.columns.length === 0)) {
      this.columns = this.generateColumnsFromFields(this.dynamicFormlyFields);
    }

    this.updateVisibleColumns();

    if (changes['data']) {
      this.dataSource.data = this.data;
    }
    if (changes['externalFilters']) {
      this.updateVisibleColumns();
    }
  }

  private updateVisibleColumns(): void {
    const hasRoleFilter = this.externalFilters && this.externalFilters['roles'];
    const hasCategoryFilter =
      this.externalFilters && this.externalFilters['category_id'];

    const properties = this.columns
      .filter((col) => {
        // Cacher la colonne roles si un filtre de rôle est actif
        if (col.property === 'roles' && hasRoleFilter) {
          return false;
        }
        // Cacher la colonne category_id dans le tableau managemenu
        if (
          (col.property === 'category_id' || col.property === 'category') &&
          this.type === 'menus'
        ) {
          return false;
        }
        return col.visible;
      })
      .map((col) => col.property);

    this.visibleColumns = properties;
  }

  private flattenFormlyFields(
    fields: FormlyFieldConfig[]
  ): FormlyFieldConfig[] {
    const flattened: FormlyFieldConfig[] = [];
    fields.forEach((field) => {
      // Ignorer les champs avec hide: true
      if (field.hide) {
        return;
      }

      if (field.fieldGroup) {
        flattened.push(...this.flattenFormlyFields(field.fieldGroup));
      } else if (field.key) {
        flattened.push(field);
      }
    });
    return flattened;
  }

  private generateColumnsFromFields(
    fields: FormlyFieldConfig[]
  ): TableColumn<T>[] {
    const staticStartColumns: TableColumn<T>[] = [
      {
        label: 'Checkbox',
        property: 'checkbox',
        type: 'checkbox',
        visible: this.type !== 'roles' && this.type !== 'permissions' && this.type !== 'github-repositories',
      }
    ];

    const flattenedFields = this.flattenFormlyFields(fields);

    // Trouver le champ image (s'il existe) et l'enlever de flattenedFields
    const imageFieldIndex = flattenedFields.findIndex(
      (f) => f.type === 'fileimage'
    );
    let imageField: FormlyFieldConfig | null = null;

    if (imageFieldIndex !== -1) {
      imageField = flattenedFields.splice(imageFieldIndex, 1)[0]; // On enlève le champ image
    }
    let singularType = this.type;
    if (this.type === 'github-repositories') {
      singularType = 'github-repository';
    } else if (this.type.endsWith('ies')) {
      singularType = this.type.slice(0, -3) + 'y';
    } else if (this.type.endsWith('s')) {
      singularType = this.type.slice(0, -1);
    }

    const imageColumn: TableColumn<T>[] = imageField
      ? [
          {
            label: `${singularType}.label.${imageField.key as string}`,
            property: imageField.key as string,
            type: 'image',
            visible: true,
            sortable: false
          }
        ]
      : [];

    // NOUVEAU: Vérifier si un filtre de rôle est actif
    const hasRoleFilter = this.externalFilters && this.externalFilters['roles'];

    // Génération des colonnes dynamiques
    const dynamicColumns = flattenedFields.map((field) => {
      let columnType: 'image' | 'text' | 'icon' | 'color' | 'disable' = 'text';
      let formatter:
        | ((
            value: string | number | boolean | string[] | object | null,
            row?: T
          ) => string | number | boolean)
        | undefined;
      const key = field.key as string;
      let columnProperty: string = key; // Initialize columnProperty with the field key

      // NOUVEAU: Cacher la colonne roles si un filtre de rôle est actif
      if (key === 'roles' && hasRoleFilter) {
        return {
          label: `${singularType}.label.${key}`,
          property: columnProperty,
          type: columnType,
          visible: false, // ← Colonne cachée
          sortable: true,
          formatter: formatter
        };
      }

      // NOUVEAU: Traitement spécial pour les champs de type file-upload
      if (field.type === 'file-upload') {
        columnType = 'icon';
        columnProperty = 'media'; // Les fichiers sont stockés dans la propriété 'media' par Spatie Media Library
      } else if (key === 'color') {
        columnType = 'color';
        formatter = (
          value: string | number | boolean | string[] | object | null
        ) => {
          return typeof value === 'string' ? value : '';
        };
      } else if (
        key === 'disable' ||
        key === 'is_blocked' ||
        field.type === 'slide-toggle'
      ) {
        columnType = 'disable';
        formatter = (
          value: string | number | boolean | string[] | object | null
        ) => {
          return Boolean(value);
        };
        columnProperty = key; // Use the field key as the property name
      } else if (key === 'files') {
        columnType = 'icon';
        formatter = (
          value: string | number | boolean | string[] | object | null
        ) => {
          if (Array.isArray(value) && value.length > 0) {
            const fileInfo = value[0] as DocumentFileInfo;
            const mimeType = fileInfo?.mime_type || '';
            return FormatFileIcon.getIcon(mimeType);
          }
          return '';
        };
        columnProperty = 'files_info'; // Set the correct property for the data object
      } else if (key === 'size') {
        formatter = (
          value: string | number | boolean | string[] | object | null,
          row?: T
        ) => {
          if (!row) return '0 Bytes'; // Handle undefined row
          const documentRow = row as unknown as Document;
          if (documentRow.files_info && documentRow.files_info.length > 0) {
            const totalSize = documentRow.files_info.reduce(
              (sum, file) => sum + file.size,
              0
            );
            return this._formatBytes(totalSize);
          }
          return '0 Bytes';
        };
        columnProperty = key; // Use the field key as the property name
      } else if (this.type === 'users') {
        if (key === 'roles') {
          formatter = (
            value: string | number | boolean | string[] | object | null
          ) => {
            if (Array.isArray(value)) {
              return (value as Roles[])
                .map((role) => role.display_name || role.name)
                .join(', ');
            }
            return '';
          };
        } else if (key === 'permissions') {
          formatter = (
            value: string | number | boolean | string[] | object | null
          ) => {
            if (Array.isArray(value)) {
              return (value as Permissions[])
                .map((p) => p.display_name || p.name)
                .join(', ');
            }
            return '';
          };
        }
      } else if (this.type === 'menus') {
        if (key === 'category_id') {
          // Pour category_id, utiliser la relation category pour afficher le nom
          formatter = (
            value: string | number | boolean | string[] | object | null,
            row?: T
          ) => {
            const menuRow = row as unknown as any;
            return (
              menuRow?.category?.display_name || menuRow?.category?.name || ''
            );
          };
          columnProperty = 'category'; // Pointer vers la relation category
        }
      } else if (this.type === 'roles' || this.type === 'permissions') {
        formatter = (
          value: string | number | boolean | string[] | object | null
        ) => {
          if (typeof value === 'string') return value;
          if (value && typeof value === 'object' && !Array.isArray(value)) {
            return (
              (value as Roles | Permissions)?.display_name ||
              (value as Roles | Permissions)?.name ||
              ''
            );
          }
          return '';
        };
      }
      const label = `${singularType}.label.${field.key as string}`;

      return {
        label: label,
        property: columnProperty, // Use the determined columnProperty
        type: columnType,
        visible: true,
        sortable: true,
        formatter: formatter
      };
    });

    // Ajout de la colonne pour le nombre de fichiers si le type est 'documents'
    if (this.type === 'documents') {
      const fileCountColumn = {
        label: 'document.label.file_count',
        property: 'file_count',
        type: 'text' as const, // 'as const' aide TypeScript à inférer le type le plus strict possible ('text')
        visible: true,
        sortable: true,
        formatter: (
          value: string | number | boolean | string[] | object | null,
          row?: T
        ) => {
          // Spécifier le type du 'row' ici est une bonne pratique
          const doc = row as unknown as Document;
          return doc.files_info ? doc.files_info.length : 0;
        }
      };

      // Insère la nouvelle colonne après la colonne 'size' pour un agencement logique
      const sizeColumnIndex = dynamicColumns.findIndex(
        (c) => c.property === 'size'
      );
      if (sizeColumnIndex > -1) {
        // On insère l'objet directement, sans assertion 'as ...'
        dynamicColumns.splice(sizeColumnIndex + 1, 0, fileCountColumn);
      } else {
        dynamicColumns.push(fileCountColumn);
      }
    }

    const staticEndColumns: TableColumn<T>[] = [
      {
        label: 'table.actions',
        property: 'actions',
        type: 'button',
        visible: this.type !== 'roles' && this.type !== 'permissions',
        sortable: false
      }
    ];

    return [
      ...staticStartColumns,
      ...imageColumn,
      ...dynamicColumns,
      ...staticEndColumns
    ];
  }

  trackByProperty(index: number, item: T): any {
    return item;
  }

  isAllSelected(): boolean {
    if (!this.selection) return false;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    if (!this.selection) return;
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection!.select(row));
  }

  emitAction(action: string, row: T): void {
    this.action.emit({ action, row });
  }

  getFileColor(mimeType: string): string {
    if (!mimeType) return '';

    if (mimeType === 'application/pdf') {
      return 'red';
    } else if (
      mimeType === 'application/msword' ||
      mimeType ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      return 'blue';
    } else if (
      mimeType === 'application/vnd.ms-excel' ||
      mimeType ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      return 'green';
    }
    return ''; // Default no color
  }

  private _formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  // Méthode pour vérifier si un document est en cours d'upload
  isDocumentUploading(documentId: number | undefined): boolean {
    if (!documentId) return false;
    return this.uploadStatusService.isUploadInProgress(`doc-${documentId}`);
  }

  

  isImageFile(mimeType: string): boolean {
    return mimeType?.startsWith('image/') || false;
  }

  getImageUrl(url: string | undefined): string {
    if (!url) return '';
    // Si l'URL commence déjà par http:// ou https://, la retourner telle quelle
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // Sinon, concaténer avec apiUrl
    // Enlever '/api' de apiUrl et ajouter l'url relative
    const baseUrl = environment.apiUrl.replace('/api', '');
    return `${baseUrl}${url.startsWith('/') ? url : '/' + url}`;
  }

  getFileIcon(mimeType: string): string {
    return FormatFileIcon.getIconDocument(mimeType);
  }
}
