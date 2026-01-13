#!/usr/bin/env node

/**
 * Script de génération automatique de module
 *
 * Usage: npm run module:generate
 * ou: node scripts/generate-module.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function question(query) {
  return new Promise((resolve) =>
    rl.question(`${colors.cyan}${query}${colors.reset}`, resolve)
  );
}

// Templates
const templates = {
  config: (
    moduleName,
    displayName,
    displayNameSingular,
    resourceType,
    identifierField,
    identifierType,
    routePath,
    fields,
    requiresAuth,
    actions = {},
    roles = ['user']
  ) => {
    const hasFileField = fields.some((f) => f.type === 'File');
    const fullPath = requiresAuth
      ? `/index/${routePath}`
      : `/index/${routePath}`;

    // Default actions if not provided
    const defaultActions = {
      create: { enabled: true },
      edit: { enabled: true },
      delete: { enabled: true },
      deleteAll: { enabled: true },
      show: { enabled: true },
      search: { enabled: true },
      export: { enabled: false }
    };

    const finalActions = { ...defaultActions, ...actions };

    // Convert roles array to Authority constants
    const roleMapping = {
      'admin': 'Authority.ADMIN',
      'manager': 'Authority.MANAGER',
      'user': 'Authority.USER'
    };
    const permissions = roles.map(role => roleMapping[role] || 'Authority.USER').join(', ');

    return `import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { ${moduleName}FormlyFields } from 'src/app/interfaces/${capitalize(moduleName)}';
import { Authority } from 'src/static-data/authority.constants';
import { ${capitalize(moduleName.slice(0, -1))} } from 'src/app/models/${moduleName.slice(0, -1)}.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const ${moduleName.toUpperCase()}_CONFIG: ModuleConfig<${capitalize(moduleName.slice(0, -1))}> = {
  moduleName: '${moduleName}',
  enabled: true,
  resourceType: '${resourceType}',
  displayName: '${displayName}',
  displayNameSingular: '${displayNameSingular}',

  identifierField: '${identifierField}',
  identifierType: '${identifierType}',

  route: {
    path: '${fullPath}',
    permissions: [${permissions}],
    resolver: true,
    resolverKey: '${moduleName}Data'
  },

  form: {
    fields: ${moduleName}FormlyFields,
    width: '650px'
  },

  actions: {
    create: { enabled: ${finalActions.create?.enabled ?? true} },
    edit: { enabled: ${finalActions.edit?.enabled ?? true} },
    delete: { enabled: ${finalActions.delete?.enabled ?? true} },
    deleteAll: { enabled: ${finalActions.deleteAll?.enabled ?? true} },
    show: { enabled: ${finalActions.show?.enabled ?? true} },
    search: { enabled: ${finalActions.search?.enabled ?? true} },
    export: { enabled: ${finalActions.export?.enabled ?? false} }
  },

  data: {
    useFormData: ${hasFileField},
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: true,
    useGenericApi: true
  },

  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: true
    // Les colonnes seront générées automatiquement depuis les champs Formly
  },

  notifications: {
    duration: 3000,
    messages: {
      createSuccess: '${displayNameSingular} created successfully!',
      updateSuccess: '${displayNameSingular} updated successfully!',
      deleteSuccess: '${displayNameSingular} deleted successfully!',
      deleteAllSuccess: '${displayName} deleted successfully!',
      createError: 'Error creating ${displayNameSingular.toLowerCase()}.',
      updateError: 'Error updating ${displayNameSingular.toLowerCase()}.',
      deleteError: 'Error deleting ${displayNameSingular.toLowerCase()}.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
`;
  },

  component: (moduleName) => `import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';

@Component({
  selector: 'vex-${moduleName}',
  standalone: true,
  imports: [GenericModuleComponent],
  template: \`<vex-generic-module [config]="config"></vex-generic-module>\`
})
export class ${capitalize(moduleName)}Component {
  config = ${moduleName.toUpperCase()}_CONFIG;
}
`,

  resolver: (
    moduleName
  ) => `import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';

export const ${moduleName}Resolver = createGenericResolver(${moduleName.toUpperCase()}_CONFIG);
`,

  routes: (moduleName) => {
    const className = capitalize(moduleName.slice(0, -1));
    return `import { Routes } from '@angular/router';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';
import { ${capitalize(moduleName)}Component } from './${moduleName}.component';
import { ${className}CreateUpdateComponent } from './pages/${moduleName.slice(0, -1)}-create-update/${moduleName.slice(0, -1)}-create-update.component';
import { ${className}ShowComponent } from './pages/${moduleName.slice(0, -1)}-show/${moduleName.slice(0, -1)}-show.component';

export const ${moduleName}Routes: Routes = [
  {
    path: '',
    component: ${capitalize(moduleName)}Component
  },
  {
    path: 'create',
    component: ${className}CreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: ${className}CreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: ${className}ShowComponent
  }
];

export default ${moduleName}Routes;
`;
  },

  model: (moduleName, fields, identifierField, identifierType) => {
    const className = capitalize(moduleName.slice(0, -1));

    // Mapper les types Formly vers les types TypeScript
    const getTypeScriptType = (type) => {
      const typeMap = {
        email: 'string',
        password: 'string',
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        Date: 'Date',
        File: 'File',
        textarea: 'string',
        'quill-editor': 'string',
        email: 'string',
        password: 'string'
      };
      return typeMap[type] || 'any';
    };

    const allFields = [
      {
        name: identifierField,
        type: getTypeScriptType(identifierType),
        required: false
      },
      ...fields.map((f) => ({ ...f, type: getTypeScriptType(f.type) }))
    ];

    // Ajouter la propriété media si un champ File existe
    const hasFileField = fields.some((f) => f.type === 'File');
    if (hasFileField) {
      allFields.push({ name: 'media', type: 'any[]', required: false });
    }

    const fieldDeclarations = allFields
      .map((f) => {
        if (f.name === 'media') {
          return `  ${f.name}${f.required ? '' : '?'}: ${f.type}; // Pour les fichiers retournés par l'API (Spatie Media Library)`;
        }
        return `  ${f.name}${f.required ? '' : '?'}: ${f.type};`;
      })
      .join('\n');

    const constructorAssignments = allFields
      .map((f) => {
        if (f.name === 'media') {
          return `    this.${f.name} = ${moduleName.slice(0, -1)}.${f.name} || [];`;
        }
        const defaultVal = getDefaultValue(f.type);
        return `    this.${f.name} = ${moduleName.slice(0, -1)}.${f.name}${!f.required ? ` || ${defaultVal}` : ''};`;
      })
      .join('\n');

    return `export class ${className} {
${fieldDeclarations}

  constructor(${moduleName.slice(0, -1)}: ${className}) {
${constructorAssignments}
  }
}
`;
  },

  interface: (moduleName, fields) => {
    const interfaceName = capitalize(moduleName);

    // Mapper les types Formly vers les types TypeScript
    const getTypeScriptType = (type) => {
      const typeMap = {
        email: 'string',
        password: 'string',
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        Date: 'Date',
        File: 'File',
        textarea: 'string',
        'quill-editor': 'string',
        email: 'string',
        password: 'string'
      };
      return typeMap[type] || 'any';
    };

    const fieldDeclarations = fields
      .map(
        (f) =>
          `  ${f.name}${f.required ? '' : '?'}: ${getTypeScriptType(f.type)};`
      )
      .join('\n');
    const formlyFields = generateFormlyFields(fields, moduleName);

    return `import { FormlyFieldConfig } from '@ngx-formly/core';

export interface ${interfaceName} {
${fieldDeclarations}
}

export const ${moduleName}FormlyFields: FormlyFieldConfig[] = ${formlyFields};
`;
  },

  createUpdateComponent: (moduleName, displayNameSingular) => {
    const singularName = moduleName.slice(0, -1);
    const className = capitalize(singularName);

    return `import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ${moduleName}FormlyFields } from 'src/app/interfaces/${capitalize(moduleName)}';
import { ${className} } from 'src/app/models/${singularName}.model';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { FormDataBuilderService } from 'src/app/services/form-data-builder.service';
import { ${moduleName.toUpperCase()}_CONFIG } from '../../${moduleName}.config';

@Component({
  selector: 'vex-${singularName}-create-update',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    TranslateModule
  ],
  templateUrl: './${singularName}-create-update.component.html',
  styleUrls: ['./${singularName}-create-update.component.scss']
})
export class ${className}CreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  mode: 'create' | 'update' = 'create';
  id?: number | string;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genericApi: GenericApiService,
    private formDataBuilder: FormDataBuilderService,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Déterminer le mode (create ou update)
    this.id = this.route.snapshot.paramMap.get('id') || undefined;
    this.mode = this.id ? 'update' : 'create';

    // Charger les données si mode update
    if (this.mode === 'update' && this.id) {
      this.loadData();
    }

    // Translate field labels, placeholders and validation messages
    this.fields = ${moduleName}FormlyFields.map(field => {
      // Si le field a un fieldGroup, on doit traduire les fields à l'intérieur
      if (field.fieldGroup) {
        return {
          ...field,
          fieldGroup: field.fieldGroup.map(subField => ({
            ...subField,
            props: {
              ...subField.props,
              label: this.translate.instant(subField.props?.label || ''),
              placeholder: this.translate.instant(subField.props?.placeholder || '')
            },
            validation: subField.validation ? {
              messages: Object.keys(subField.validation.messages || {}).reduce((acc, key) => {
                const message = subField.validation!.messages![key];
                acc[key] = typeof message === 'string' ? this.translate.instant(message) : message;
                return acc;
              }, {} as any)
            } : undefined
          }))
        };
      }
      // Sinon, traduire le field normalement
      return {
        ...field,
        props: {
          ...field.props,
          label: this.translate.instant(field.props?.label || ''),
          placeholder: this.translate.instant(field.props?.placeholder || '')
        },
        validation: field.validation ? {
          messages: Object.keys(field.validation.messages || {}).reduce((acc, key) => {
            const message = field.validation!.messages![key];
            acc[key] = typeof message === 'string' ? this.translate.instant(message) : message;
            return acc;
          }, {} as any)
        } : undefined
      };
    });
  }

  loadData(): void {
    this.isLoading = true;
    this.genericApi.getOne<${className}>('${moduleName}', this.id!.toString()).subscribe({
      next: (response) => {
        this.model = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading ${singularName}:', error);
        this.snackBar.open('Error loading data', 'OK', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  save(): void {
    if (this.form.valid) {
      this.isLoading = true;

      const config = ${moduleName.toUpperCase()}_CONFIG;
      const useFormData = config.data.useFormData;

      if (this.mode === 'create') {
        const createObservable = useFormData
          ? this.genericApi.create<${className}>('${moduleName}', this.formDataBuilder.createFormData(this.model))
          : this.genericApi.createJson<${className}>('${moduleName}', this.model);

        createObservable.subscribe({
          next: (response) => {
            this.snackBar.open(
              response!.message || '${displayNameSingular} created successfully!',
              'OK',
              { duration: 3000 }
            );
            this.router.navigate(['..'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error creating ${singularName}:', error);
            this.snackBar.open('Error creating ${singularName.toLowerCase()}', 'OK', { duration: 3000 });
            this.isLoading = false;
          }
        });
      } else {
        const updateObservable = useFormData
          ? this.genericApi.update<${className}>('${moduleName}', this.id!.toString(), this.formDataBuilder.createFormData(this.model))
          : this.genericApi.updateJson<${className}>('${moduleName}', this.id!.toString(), this.model);

        updateObservable.subscribe({
          next: (response) => {
            this.snackBar.open(
              response.message || '${displayNameSingular} updated successfully!',
              'OK',
              { duration: 3000 }
            );
            this.router.navigate(['../..'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error updating ${singularName}:', error);
            this.snackBar.open('Error updating ${singularName.toLowerCase()}', 'OK', { duration: 3000 });
            this.isLoading = false;
          }
        });
      }
    }
  }

  cancel(): void {
    if (this.mode === 'create') {
      this.router.navigate(['..'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../..'], { relativeTo: this.route });
    }
  }
}
`;
  },

  createUpdateHtml: (displayNameSingular) => {
    return `<div class="container">
  <mat-card class="form-card">
    <mat-card-header>
      <mat-card-title>
        <h1>{{ (mode === 'create' ? 'global.create' : 'global.update') | translate }} ${displayNameSingular}</h1>
      </mat-card-title>
    </mat-card-header>

    <mat-card-content>
      <form [formGroup]="form">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      </form>
    </mat-card-content>

    <mat-card-actions align="end" class="actions">
      <button mat-button type="button" (click)="cancel()" [disabled]="isLoading">
        {{ 'global.cancel' | translate }}
      </button>
      <button mat-raised-button color="primary" type="button" (click)="save()"
              [disabled]="!form.valid || isLoading">
        {{ (mode === 'create' ? 'global.create' : 'global.update') | translate }}
      </button>
    </mat-card-actions>
  </mat-card>
</div>
`;
  },

  createUpdateScss: () => {
    return `.container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.form-card {
  mat-card-header {
    padding: 24px 24px 0;

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 500;
    }
  }

  mat-card-content {
    padding: 24px;
  }

  .actions {
    padding: 16px 24px;
    margin: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    gap: 12px;
  }
}
`;
  },

  deleteComponent: (moduleName, displayName, displayNameSingular) => {
    const singularName = moduleName.slice(0, -1);

    return `import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'vex-delete-element',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent {
  isMultiple = false;
  count = 0;
  displayName = '${displayNameSingular}';
  displayNamePlural = '${displayName}';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteElementComponent>
  ) {
    if (Array.isArray(data)) {
      this.isMultiple = true;
      this.count = data.length;
    }
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
`;
  },

  deleteHtml: () => {
    return `<div class="dialog-container">
  <div class="dialog-header">
    <mat-icon class="warning-icon">warning</mat-icon>
    <h2 mat-dialog-title>
      Confirm Deletion
    </h2>
  </div>

  <mat-dialog-content>
    <p *ngIf="!isMultiple">
      Are you sure you want to delete this {{ displayName }}?
    </p>
    <p *ngIf="isMultiple">
      Are you sure you want to delete {{ count }} {{ displayNamePlural }}?
    </p>
    <p class="warning-text">
      This action cannot be undone.
    </p>
  </mat-dialog-content>

  <mat-dialog-actions align="end">
    <button mat-button type="button" (click)="cancel()">
      Cancel
    </button>
    <button mat-raised-button color="warn" type="button" (click)="confirm()">
      Delete
    </button>
  </mat-dialog-actions>
</div>
`;
  },

  deleteScss: () => {
    return `.dialog-container {
  padding: 0;
}

.dialog-header {
  padding: 24px 24px 0;
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon {
  color: #f44336;
  font-size: 48px;
  width: 48px;
  height: 48px;
}

mat-dialog-content {
  padding: 24px;
  min-width: 400px;
}

.warning-text {
  color: #f44336;
  font-weight: 500;
  margin-top: 16px;
}

mat-dialog-actions {
  padding: 16px 24px;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
`;
  },

  showComponent: (moduleName, displayNameSingular, fields) => {
    const singularName = moduleName.slice(0, -1);
    const className = capitalize(singularName);
    const hasFileField = fields.some((f) => f.type === 'File');

    return `import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { TranslationModule } from 'src/app/shared/language/translation.module';
import { ${className} } from 'src/app/models/${singularName}.model';${
      hasFileField
        ? `
import { FormatFileIcon } from 'src/app/classes/format-document-icon';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DocumentPreviewModalComponent } from 'src/app/pages/document/document-preview-modal/document-preview-modal.component';
import { DeleteMediaConfirmationComponent } from 'src/app/shared/dialogs/delete-media-confirmation/delete-media-confirmation.component';`
        : ''
    }

@Component({
  selector: 'vex-${singularName}-show',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
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
  templateUrl: './${singularName}-show.component.html',
  styleUrls: ['./${singularName}-show.component.scss']
})
export class ${className}ShowComponent implements OnInit {
  data = signal<${className} | null>(null);
  isLoading = signal(true);
  identifier: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private genericApi: GenericApiService,
    private snackbar: MatSnackBar${hasFileField ? ',\n    private http: HttpClient,\n    public dialog: MatDialog' : ''}
  ) {}

  ngOnInit(): void {
    this.getParamsRouter();
  }

  getParamsRouter() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.identifier = params.get('id');
      if (this.identifier) {
        this.loadData(this.identifier);
      } else {
        this.back();
      }
    });
  }

  loadData(id: string): void {
    this.isLoading.set(true);
    this.genericApi.getOne<${className}>('${moduleName}', id).subscribe({
      next: (res) => {
        const response = res.data as ${className};
        if (response) {
          this.data.set(response);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        this.showMessage(err.error?.message || 'Error loading data');
        this.isLoading.set(false);
        this.back();
      }
    });
  }

  back(): void {
    this.router.navigate(['index/${moduleName}']);
  }

  edit(): void {
    if (this.identifier) {
      this.router.navigate(['index/${moduleName}/edit', this.identifier]);
    }
  }

  formatValue(value: any): string {
    if (value === null || value === undefined) return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (value instanceof Date) return value.toLocaleDateString();
    return value.toString();
  }${
    hasFileField
      ? `

  getFileIcon(mimeType: string): string {
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

  previewFile(file: any): void {
    if (!file || !file.url) {
      console.error('Impossible de prévisualiser : fichier ou URL manquant.');
      return;
    }
    this.dialog.open(DocumentPreviewModalComponent, {
      disableClose: true,
      width: '90vw',
      height: '90vh',
      maxWidth: '1200px',
      data: {
        url: file.url,
        name: file.file_name,
        mimeType: file.mime_type
      }
    });
  }

  isWordDocument(file: any): boolean {
    if (!file?.mime_type) return false;
    const wordMimeTypes = [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-word.document.macroEnabled.12'
    ];
    return wordMimeTypes.includes(file.mime_type);
  }

  downloadFile(file: any): void {
    const fileUrl = \`\${environment.apiUrl}/${moduleName}/\${file.id}/\${file.file_name}\`;

    this.http.get(fileUrl, {
      responseType: 'blob',
      headers: { Accept: file.mime_type }
    }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.file_name || file.name || 'document';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }

  deleteFile(file: any): void {
    const dialogRef = this.dialog.open(DeleteMediaConfirmationComponent, {
      width: '450px',
      data: {
        fileName: file.name || file.file_name,
        fileType: file.mime_type
      }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        const deleteUrl = \`\${environment.apiUrl}/${moduleName}/\${this.identifier}/media/\${file.id}\`;

        this.http.delete(deleteUrl).subscribe({
          next: () => {
            this.showMessage('File deleted successfully');
            // Refresh data to update the media list
            if (this.identifier) {
              this.loadData(this.identifier);
            }
          },
          error: (err) => {
            this.showMessage(err.error?.message || 'Failed to delete file');
          }
        });
      }
    });
  }`
      : ''
  }

  showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Close', { duration: 5000 });
    }
  }
}
`;
  },

  showHtml: (moduleName, fields) => {
    const singularName = moduleName.slice(0, -1);

    // Trouver le premier champ de type image dans media
    const hasFileField = fields.some((f) => f.type === 'File');

    // Générer les champs non-File avec icônes
    const fieldsList = fields
      .filter((f) => f.type !== 'File')
      .map((field, index) => {
        const icon =
          index === 0
            ? 'mat:label'
            : field.type === 'number'
              ? 'mat:tag'
              : field.type === 'Date'
                ? 'mat:calendar_today'
                : 'mat:info';
        return `        <div class="flex items-start gap-2 text-primary-500">
          <mat-icon class="icon-xl" svgIcon="${icon}"></mat-icon>
          <div class="flex flex-col mt-1">
            <span class="text-xs font-medium text-gray-400 uppercase">{{ '${singularName}.label.${field.name}' | translate }}</span>
            <span class="text-lg font-medium text-gray-700">{{ formatValue(data()?.${field.name}) }}</span>
          </div>
        </div>`;
      })
      .join('\n');

    // Section media pour les fichiers (basée sur MediaCardComponent)
    const mediaSection = hasFileField
      ? `
      <!-- Files section -->
      <div *ngIf="!isLoading() && data()?.media && data()?.media?.length" @stagger
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div *ngFor="let file of data()?.media" @fadeInUp class="card overflow-hidden relative">
          <div class="p-4 text-center hover:bg-hover transition duration-400 ease-out-swift cursor-pointer relative">
            <mat-icon [svgIcon]="getFileIcon(file.mime_type)" class="w-16 h-16 text-gray-400 mx-auto"></mat-icon>
            <h2 class="title mb-1 mt-3 truncate w-full" [matTooltip]="file.name">{{ file.name }}</h2>
            <div class="body-2 text-secondary flex items-center justify-center">
              <mat-icon class="ltr:mr-1 rtl:ml-1 icon-xs" svgIcon="mat:storage"></mat-icon>
              <span>{{ formatBytes(file.size) }}</span>
            </div>
            <div class="bg-app-bar p-2 flex items-center justify-around mt-3">
              <button (click)="downloadFile(file)" class="text-secondary" mat-icon-button type="button"
                [matTooltip]="'Télécharger'">
                <mat-icon svgIcon="mat:download"></mat-icon>
              </button>
              <button *ngIf="!isWordDocument(file)" (click)="previewFile(file)" class="text-secondary" mat-icon-button
                type="button" [matTooltip]="'Prévisualiser'">
                <mat-icon svgIcon="mat:visibility"></mat-icon>
              </button>
              <button (click)="deleteFile(file)" class="text-red-500" mat-icon-button type="button"
                [matTooltip]="'Supprimer'">
                <mat-icon svgIcon="mat:delete"></mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="!isLoading() && data() && (!data()?.media || data()?.media?.length === 0)"
        @scaleFadeIn class="min-h-[200px] flex flex-col items-center justify-center">
        <img class="m-6 h-32" src="assets/img/illustrations/idea.svg" />
        <h2 class="text-lg m-0 text-center text-gray-500">Aucun fichier attaché</h2>
      </div>`
      : '';

    return `<div class="h-full flex flex-col">
  <!-- Header section -->
  <div class="p-6 bg-foreground shadow-b flex-none border-b">
    <div class="container px-0">
      <div class="flex items-center justify-between">
        <h3 class="display-1 font-bold flex items-center">
          <span @scaleIn
            class="w-12 h-12 rounded-full text-primary-600 ltr:mr-4 rtl:ml-4 flex items-center justify-center bg-primary-600/10">
            <mat-icon svgIcon="mat:visibility"></mat-icon>
          </span>
          <span @fadeInRight class="block">{{ '${singularName}.detail.title' | translate }}</span>
        </h3>

        <div class="flex items-center gap-3">
          <button (click)="back()" [disabled]="isLoading()"
            class="flex-none hidden sm:inline-block" color="primary" mat-flat-button type="button">
            <mat-icon class="ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 icon-sm" svgIcon="mat:arrow_back"></mat-icon>
            <span>Retour</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Content section -->
  <div class="overflow-y-auto flex-auto">
    <div class="p-6">
      <div *ngIf="isLoading()" class="flex justify-center items-center h-64">
        <vex-loading-spinner></vex-loading-spinner>
      </div>

      <div *ngIf="!isLoading() && data()" class="space-y-6">
        <!-- Fields section -->
        <div class="bg-card rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="space-y-4">
${fieldsList}
          </div>
        </div>
${mediaSection}
      </div>

      <div *ngIf="!isLoading() && !data()"
        @scaleFadeIn class="min-h-[400px] flex flex-col items-center justify-center">
        <img class="m-12 h-64" src="assets/img/illustrations/idea.svg" />
        <h2 class="headline m-0 text-center">Aucune donnée disponible</h2>
      </div>
    </div>
  </div>
</div>
`;
  },

  showScss: () => {
    return `// Styles gérés par Tailwind CSS
// Ce fichier peut rester vide ou être utilisé pour des styles personnalisés spécifiques
`;
  },

  mockData: (moduleName, fields, count = 10) => {
    const generateMockValue = (type, fieldName, index) => {
      switch (type) {
        case 'string':
          return `${capitalize(fieldName)} ${index + 1}`;
        case 'number':
          return Math.floor(Math.random() * 1000);
        case 'boolean':
          return Math.random() > 0.5;
        case 'Date':
          return new Date().toISOString();
        default:
          return `Value ${index + 1}`;
      }
    };

    const items = [];
    for (let i = 0; i < count; i++) {
      const item = { id: i + 1 };
      fields.forEach((field) => {
        item[field.name] = generateMockValue(field.type, field.name, i);
      });
      items.push(item);
    }

    return JSON.stringify(items, null, 2);
  },

  mockService: (
    moduleName,
    displayNameSingular,
    identifierField,
    identifierType
  ) => {
    const className = capitalize(moduleName.slice(0, -1));
    const isSlugIdentifier = identifierField === 'slug';

    // Génération du code pour la création selon le type d'identifiant
    const createCode = isSlugIdentifier
      ? `    const newItem = {
      ...item,
      slug: item.slug || \`${moduleName.slice(0, -1)}-\${this.nextId++}\`
    } as ${className};`
      : `    const newItem = {
      ...item,
      id: this.nextId++
    } as ${className};`;

    return `import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { ${className} } from 'src/app/models/${moduleName.slice(0, -1)}.model';
import mockData from './mock-data.json';

/**
 * Mock service for development mode
 * Uses local JSON data instead of API calls
 * Identifier field: ${identifierField} (${identifierType})
 */
@Injectable({
  providedIn: 'root'
})
export class ${className}MockService {
  private data: ${className}[] = mockData as ${className}[];
  private nextId: ${identifierType} = ${isSlugIdentifier ? "'';" : 'this.data.length + 1;'}

  constructor() {
    console.log('🔧 [DEV MODE] Using mock data for ${moduleName}');
    ${isSlugIdentifier ? `this.nextId = \`${moduleName.slice(0, -1)}-\${this.data.length + 1}\`;` : ''}
  }

  getAll(): Observable<${className}[]> {
    return of([...this.data]).pipe(delay(500)); // Simulate network delay
  }

  /**
   * Get item by ${identifierField}
   * @param identifier - ${identifierType === 'number' ? 'number (id)' : 'string (slug)'}
   */
  getById(identifier: ${identifierType}): Observable<${className}> {
    const item = this.data.find(d => d.${identifierField} === identifier);
    if (item) {
      return of({ ...item }).pipe(delay(300));
    }
    return throwError(() => new Error('${displayNameSingular} not found'));
  }

  create(item: Partial<${className}>): Observable<${className}> {
${createCode}
    this.data.push(newItem);
    console.log('🔧 [DEV MODE] Created:', newItem);
    return of(newItem).pipe(delay(500));
  }

  /**
   * Update item by ${identifierField}
   * @param identifier - ${identifierType === 'number' ? 'number (id)' : 'string (slug)'}
   */
  update(identifier: ${identifierType}, item: Partial<${className}>): Observable<${className}> {
    const index = this.data.findIndex(d => d.${identifierField} === identifier);
    if (index !== -1) {
      this.data[index] = { ...this.data[index], ...item };
      console.log('🔧 [DEV MODE] Updated:', this.data[index]);
      return of(this.data[index]).pipe(delay(500));
    }
    return throwError(() => new Error('${displayNameSingular} not found'));
  }

  /**
   * Delete item by ${identifierField}
   * @param identifier - ${identifierType === 'number' ? 'number (id)' : 'string (slug)'}
   */
  delete(identifier: ${identifierType}): Observable<void> {
    const index = this.data.findIndex(d => d.${identifierField} === identifier);
    if (index !== -1) {
      this.data.splice(index, 1);
      console.log('🔧 [DEV MODE] Deleted:', identifier);
      return of(void 0).pipe(delay(500));
    }
    return throwError(() => new Error('${displayNameSingular} not found'));
  }

  /**
   * Delete multiple items by ${identifierField}
   * @param identifiers - Array of ${identifierType === 'number' ? 'numbers (id)' : 'strings (slug)'}
   */
  deleteMultiple(identifiers: ${identifierType}[]): Observable<void> {
    identifiers.forEach(identifier => {
      const index = this.data.findIndex(d => d.${identifierField} === identifier);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    });
    console.log('🔧 [DEV MODE] Deleted:', identifiers);
    return of(void 0).pipe(delay(500));
  }
}
`;
  },

  configWithMock: (
    moduleName,
    displayName,
    displayNameSingular,
    resourceType,
    identifierField,
    identifierType,
    routePath,
    fields,
    requiresAuth,
    actions = {},
    roles = ['user']
  ) => {
    const hasFileField = fields.some((f) => f.type === 'File');
    const fullPath = requiresAuth ? `/index/${routePath}` : `/${routePath}`;

    // Default actions if not provided
    const defaultActions = {
      create: { enabled: true },
      edit: { enabled: true },
      delete: { enabled: true },
      deleteAll: { enabled: true },
      show: { enabled: true },
      search: { enabled: true },
      export: { enabled: false }
    };

    const finalActions = { ...defaultActions, ...actions };

    // Convert roles array to Authority constants
    const roleMapping = {
      'admin': 'Authority.ADMIN',
      'manager': 'Authority.MANAGER',
      'user': 'Authority.USER'
    };
    const permissions = roles.map(role => roleMapping[role] || 'Authority.USER').join(', ');

    return `import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { ${moduleName}FormlyFields } from 'src/app/interfaces/${capitalize(moduleName)}';
import { Authority } from 'src/static-data/authority.constants';
import { ${capitalize(moduleName.slice(0, -1))} } from 'src/app/models/${moduleName.slice(0, -1)}.model';
import { ${capitalize(moduleName.slice(0, -1))}ShowComponent } from './dialogs/${moduleName.slice(0, -1)}-show/${moduleName.slice(0, -1)}-show.component';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

// 🔧 DEV MODE: This configuration uses mock data instead of API calls
export const ${moduleName.toUpperCase()}_CONFIG: ModuleConfig<${capitalize(moduleName.slice(0, -1))}> = {
  moduleName: '${moduleName}',
  enabled: true,
  resourceType: '${resourceType}',
  displayName: '${displayName}',
  displayNameSingular: '${displayNameSingular}',

  identifierField: '${identifierField}',
  identifierType: '${identifierType}',

  route: {
    path: '${fullPath}',
    permissions: [${permissions}],
    resolver: true,
    resolverKey: '${moduleName}Data'
  },

  form: {
    fields: ${moduleName}FormlyFields,
    width: '650px'
  },

  actions: {
    create: { enabled: ${finalActions.create?.enabled ?? true} },
    edit: { enabled: ${finalActions.edit?.enabled ?? true} },
    delete: { enabled: ${finalActions.delete?.enabled ?? true} },
    deleteAll: { enabled: ${finalActions.deleteAll?.enabled ?? true} },
    show: { enabled: ${finalActions.show?.enabled ?? true} },
    search: { enabled: ${finalActions.search?.enabled ?? true} },
    export: { enabled: ${finalActions.export?.enabled ?? false} }
  },

  data: {
    useFormData: ${hasFileField},
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: true,
    useGenericApi: false // 🔧 DEV MODE: Set to true for production API calls
    // customService will be injected in the component
  },

  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: true
    // Les colonnes seront générées automatiquement depuis les champs Formly
  },

  notifications: {
    duration: 3000,
    messages: {
      createSuccess: '${displayNameSingular} created successfully!',
      updateSuccess: '${displayNameSingular} updated successfully!',
      deleteSuccess: '${displayNameSingular} deleted successfully!',
      deleteAllSuccess: '${displayName} deleted successfully!',
      createError: 'Error creating ${displayNameSingular.toLowerCase()}.',
      updateError: 'Error updating ${displayNameSingular.toLowerCase()}.',
      deleteError: 'Error deleting ${displayNameSingular.toLowerCase()}.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
`;
  },

  componentWithMock: (
    moduleName
  ) => `import { Component, inject } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';
import { ${capitalize(moduleName.slice(0, -1))}MockService } from './${moduleName.slice(0, -1)}-mock.service';
import { Utils } from 'src/app/classes/Utils';

// 🔧 DEV MODE: This component uses mock data
@Component({
  selector: 'vex-${moduleName}',
  standalone: true,
  imports: [GenericModuleComponent],
  template: \`<vex-generic-module [config]="config"></vex-generic-module>\`
})
export class ${capitalize(moduleName)}Component {
  private mockService = inject(${capitalize(moduleName.slice(0, -1))}MockService);

  config = {
    ...${moduleName.toUpperCase()}_CONFIG,
    data: {
      ...${moduleName.toUpperCase()}_CONFIG.data,
      customService: Utils.createDataServiceFromMock(this.mockService)
    }
  };
}
`
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getDefaultValue(type) {
  const defaults = {
    string: "''",
    number: '0',
    boolean: 'false',
    Date: 'new Date()'
  };
  return defaults[type] || 'undefined';
}

// La fonction generateTableColumns a été supprimée car les colonnes sont maintenant
// générées automatiquement par le système auto-generator à partir des champs Formly

function generateFormlyFields(fields, moduleName) {
  const singularName = moduleName.slice(0, -1);

  // Fonction pour générer un field individuel
  const generateField = (field, indentLevel = 2) => {
    const typeMapping = {
      string: 'input',
      email: 'email',
      password: 'password',
      number: 'input',
      boolean: 'checkbox',
      Date: 'datepick',
      File: 'file-upload',
      textarea: 'textarea',
      'quill-editor': 'quill-editor'
    };

    let baseType = typeMapping[field.type] || 'input';
    let typeProps = '';

    const indent = ' '.repeat(indentLevel * 2);

    // Si le type est 'string', détecter les champs email et password par leur nom
    const fieldNameLower = field.name.toLowerCase();
    if (field.type === 'string') {
      if (fieldNameLower === 'email' || fieldNameLower.includes('email')) {
        baseType = 'email';
      } else if (
        fieldNameLower === 'password' ||
        fieldNameLower.includes('password')
      ) {
        baseType = 'password';
      }
    }

    // Pour les nombres, ajouter type: 'number'
    if (field.type === 'number') {
      typeProps = `,\n${indent}    type: 'number'`;
    }
    // Pour les fichiers, ajouter les propriétés FilePond
    else if (field.type === 'File') {
      typeProps = `,\n${indent}    multiple: true,\n${indent}    acceptedFileTypes: null`;
    }
    // Pour les textarea, ajouter rows
    else if (field.type === 'textarea') {
      typeProps = `,\n${indent}    rows: 5`;
    }
    // Pour les quill-editor, ajouter les propriétés Quill
    else if (field.type === 'quill-editor') {
      typeProps = `,\n${indent}    modules: {
${indent}      toolbar: [
${indent}        ['bold', 'italic', 'underline', 'strike'],
${indent}        ['blockquote', 'code-block'],
${indent}        [{ 'header': 1 }, { 'header': 2 }],
${indent}        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
${indent}        [{ 'script': 'sub'}, { 'script': 'super' }],
${indent}        [{ 'indent': '-1'}, { 'indent': '+1' }],
${indent}        [{ 'size': ['small', false, 'large', 'huge'] }],
${indent}        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
${indent}        [{ 'color': [] }, { 'background': [] }],
${indent}        [{ 'align': [] }],
${indent}        ['clean'],
${indent}        ['link', 'image']
${indent}      ]
${indent}    }`;
    }

    return `${indent}{
${indent}  key: '${field.name}',
${indent}  type: '${baseType}',
${indent}  props: {
${indent}    label: '${singularName}.label.${field.name}',
${indent}    placeholder: '${singularName}.placeholder.${field.name}',
${indent}    required: ${field.required}${typeProps}
${indent}  }${field.required ? `,\n${indent}  validation: {\n${indent}    messages: {\n${indent}      required: '${singularName}.validation.${field.name}_required'\n${indent}    }\n${indent}  }` : ''}
${indent}}`;
  };

  // Grouper les fields par paires
  const formlyFields = [];

  for (let i = 0; i < fields.length; i += 2) {
    const field1 = fields[i];
    const field2 = fields[i + 1];

    if (field2) {
      // Créer un groupe de 2 fields
      formlyFields.push(`  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
${generateField(field1, 3)},
${generateField(field2, 3)}
    ]
  }`);
    } else {
      // Dernier field seul (nombre impair de fields)
      formlyFields.push(generateField(field1, 1));
    }
  }

  return `[\n${formlyFields.join(',\n')}\n]`;
}

async function createModuleStructure(moduleName, config) {
  const basePath = path.join(process.cwd(), 'src', 'app', 'pages', moduleName);

  log('\n📁 Creating module structure...', 'blue');

  // Créer les dossiers
  const dirs = [
    basePath,
    path.join(basePath, 'pages'),
    path.join(basePath, 'pages', `${moduleName.slice(0, -1)}-create-update`),
    path.join(basePath, 'pages', `${moduleName.slice(0, -1)}-show`),
    path.join(basePath, 'dialogs'),
    path.join(basePath, 'dialogs', 'delete-element')
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      log(`  ✓ Created: ${dir}`, 'green');
    }
  });

  // Créer les fichiers
  const configTemplate = config.devMode
    ? templates.configWithMock
    : templates.config;

  const componentTemplate = config.devMode
    ? templates.componentWithMock
    : templates.component;

  const files = {
    [`${moduleName}.config.ts`]: configTemplate(
      moduleName,
      config.displayName,
      config.displayNameSingular,
      config.resourceType,
      config.identifierField,
      config.identifierType,
      config.routePath,
      config.fields,
      config.requiresAuth,
      config.actions,
      config.roles
    ),
    [`${moduleName}.component.ts`]: componentTemplate(moduleName),
    [`${moduleName}.resolver.ts`]: templates.resolver(moduleName),
    [`${moduleName}.routes.ts`]: templates.routes(moduleName)
  };

  // Ajouter les fichiers mock si mode dev
  if (config.devMode) {
    files[`${moduleName.slice(0, -1)}-mock.service.ts`] = templates.mockService(
      moduleName,
      config.displayNameSingular,
      config.identifierField,
      config.identifierType
    );
    files['mock-data.json'] = templates.mockData(moduleName, config.fields, 10);
    log('  💻 Dev mode: Mock files will be created', 'cyan');
  }

  Object.entries(files).forEach(([filename, content]) => {
    const filepath = path.join(basePath, filename);
    fs.writeFileSync(filepath, content);
    log(`  ✓ Created: ${filename}`, 'green');
  });

  // Créer le model
  const modelPath = path.join(
    process.cwd(),
    'src',
    'app',
    'models',
    `${moduleName.slice(0, -1)}.model.ts`
  );
  fs.writeFileSync(
    modelPath,
    templates.model(
      moduleName,
      config.fields,
      config.identifierField,
      config.identifierType
    )
  );
  log(`  ✓ Created: models/${moduleName.slice(0, -1)}.model.ts`, 'green');

  // Créer l'interface
  const interfacePath = path.join(
    process.cwd(),
    'src',
    'app',
    'interfaces',
    `${capitalize(moduleName)}.ts`
  );
  fs.writeFileSync(
    interfacePath,
    templates.interface(moduleName, config.fields)
  );
  log(`  ✓ Created: interfaces/${capitalize(moduleName)}.ts`, 'green');

  // Créer les dialogs
  log('\n📦 Creating dialog components...', 'blue');

  // Page Create/Update
  const createUpdatePath = path.join(
    basePath,
    'pages',
    `${moduleName.slice(0, -1)}-create-update`
  );
  const createUpdateFiles = {
    [`${moduleName.slice(0, -1)}-create-update.component.ts`]:
      templates.createUpdateComponent(moduleName, config.displayNameSingular),
    [`${moduleName.slice(0, -1)}-create-update.component.html`]:
      templates.createUpdateHtml(config.displayNameSingular),
    [`${moduleName.slice(0, -1)}-create-update.component.scss`]:
      templates.createUpdateScss()
  };

  Object.entries(createUpdateFiles).forEach(([filename, content]) => {
    const filepath = path.join(createUpdatePath, filename);
    fs.writeFileSync(filepath, content);
    log(
      `  ✓ Created: pages/${moduleName.slice(0, -1)}-create-update/${filename}`,
      'green'
    );
  });

  // Page Show
  const showPath = path.join(
    basePath,
    'pages',
    `${moduleName.slice(0, -1)}-show`
  );
  const showFiles = {
    [`${moduleName.slice(0, -1)}-show.component.ts`]: templates.showComponent(
      moduleName,
      config.displayNameSingular,
      config.fields
    ),
    [`${moduleName.slice(0, -1)}-show.component.html`]: templates.showHtml(
      moduleName,
      config.fields
    ),
    [`${moduleName.slice(0, -1)}-show.component.scss`]: templates.showScss()
  };

  Object.entries(showFiles).forEach(([filename, content]) => {
    const filepath = path.join(showPath, filename);
    fs.writeFileSync(filepath, content);
    log(
      `  ✓ Created: pages/${moduleName.slice(0, -1)}-show/${filename}`,
      'green'
    );
  });

  // Dialog Delete
  const deletePath = path.join(basePath, 'dialogs', 'delete-element');
  const deleteFiles = {
    'delete-element.component.ts': templates.deleteComponent(
      moduleName,
      config.displayName,
      config.displayNameSingular
    ),
    'delete-element.component.html': templates.deleteHtml(),
    'delete-element.component.scss': templates.deleteScss()
  };

  Object.entries(deleteFiles).forEach(([filename, content]) => {
    const filepath = path.join(deletePath, filename);
    fs.writeFileSync(filepath, content);
    log(`  ✓ Created: dialogs/delete-element/${filename}`, 'green');
  });

  log('\n✅ Module structure created successfully!', 'green');
  log('✅ All dialog components created!', 'green');
}

function addRouteToFile(moduleName, routePath, requiresAuth) {
  const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
  const authRoutesPath = path.join(
    process.cwd(),
    'src',
    'app',
    'auth',
    'auth-routes.ts'
  );
  const targetFile = requiresAuth ? appRoutesPath : authRoutesPath;
  const notFoundPath = requiresAuth
    ? "path: 'not-found'"
    : "path: 'not-found-auth'";
  const importPrefix = requiresAuth ? './pages/' : '../pages/';

  try {
    if (!fs.existsSync(targetFile)) {
      log(`  ⚠️  Routing file not found: ${targetFile}`, 'yellow');
      return false;
    }

    let content = fs.readFileSync(targetFile, 'utf8');

    const guardImport =
      "import { moduleEnabledGuard } from 'src/app/guards/module-enabled.guard';";
    if (!content.includes(guardImport)) {
      content = guardImport + '\n' + content;
    }
    const configImport = `import { ${moduleName.toUpperCase()}_CONFIG } from '${importPrefix}${moduleName}/${moduleName}.config';`;
    if (!content.includes(configImport)) {
      content = configImport + '\n' + content;
    }

    const lines = content.split(/\n/);
    const notFoundLineIndex = lines.findIndex((line) =>
      line.includes(notFoundPath)
    );

    if (notFoundLineIndex === -1) {
      log(
        `  ⚠️  Could not find '${notFoundPath}' route in ${targetFile}.`,
        'yellow'
      );
      return false;
    }

    let insertLineIndex = -1;
    for (let i = notFoundLineIndex; i >= 0; i--) {
      if (lines[i].trim().startsWith('{')) {
        insertLineIndex = i;
        break;
      }
    }

    if (insertLineIndex === -1) {
      log(`  ⚠️  Could not find insertion point in ${targetFile}.`, 'yellow');
      return false;
    }

    const newRoute = `      {
        path: '${routePath}',
        canActivate: [moduleEnabledGuard],
        data: { moduleConfig: ${moduleName.toUpperCase()}_CONFIG },
        loadChildren: () =>
          import('${importPrefix}${moduleName}/${moduleName}.routes').then((m) => m.${moduleName}Routes)
      },`;

    lines.splice(insertLineIndex, 0, newRoute);

    const newContent = lines.join('\n');
    fs.writeFileSync(targetFile, newContent);
    log(
      `  ✓ Route added to ${requiresAuth ? 'app.routes.ts' : 'auth-routes.ts'}`,
      'green'
    );
    return true;
  } catch (error) {
    log(`  ⚠️  Could not automatically add route: ${error.message}`, 'yellow');
    return false;
  }
}

function addTranslations(moduleName, displayName, displayNameSingular, fields) {
  const i18nPath = path.join(process.cwd(), 'src', 'assets', 'i18n');
  const singularName = moduleName.slice(0, -1);

  const translations = {
    en: {
      menu: displayName,
      types: displayNameSingular
    },
    fr: {
      menu: displayName, // Pour français, utiliser le même ou traduire manuellement
      types: displayNameSingular
    },
    pt: {
      menu: displayName, // Pour portugais, utiliser le même ou traduire manuellement
      types: displayNameSingular
    }
  };

  let allSuccess = true;

  Object.keys(translations).forEach((lang) => {
    try {
      const filePath = path.join(i18nPath, `${lang}.json`);

      // Lire le fichier JSON
      const content = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(content);

      // Ajouter dans menu
      if (!jsonData.menu) {
        jsonData.menu = {};
      }
      jsonData.menu[moduleName] = translations[lang].menu;

      // Ajouter dans global.types
      if (!jsonData.global) {
        jsonData.global = {};
      }
      if (!jsonData.global.types) {
        jsonData.global.types = {};
      }
      jsonData.global.types[moduleName] = translations[lang].types;

      // Ajouter les traductions des champs du formulaire
      if (!jsonData[singularName]) {
        jsonData[singularName] = {};
      }

      // Ajouter la traduction pour le bouton "Add {type}" (ex: "Add Product")
      const createButtonTranslations = {
        en: `New ${displayNameSingular}`,
        fr: `Nouveau ${displayNameSingular}`,
        pt: `Novo ${displayNameSingular}`
      };
      jsonData[singularName][`${singularName}_create`] =
        createButtonTranslations[lang];

      // Ajouter la traduction pour le titre de la page detail
      if (!jsonData[singularName].detail) {
        jsonData[singularName].detail = {};
      }
      const detailTitleTranslations = {
        en: `${displayNameSingular} Details`,
        fr: `Détails du ${displayNameSingular}`,
        pt: `Detalhes do ${displayNameSingular}`
      };
      jsonData[singularName].detail.title = detailTitleTranslations[lang];

      // Labels
      jsonData[singularName].label = {};
      fields.forEach((field) => {
        jsonData[singularName].label[field.name] = capitalize(field.name);
      });

      // Placeholders
      jsonData[singularName].placeholder = {};
      fields.forEach((field) => {
        jsonData[singularName].placeholder[field.name] = `Enter ${field.name}`;
      });

      // Validation messages
      jsonData[singularName].validation = {};
      fields.forEach((field) => {
        if (field.required) {
          jsonData[singularName].validation[`${field.name}_required`] =
            `${capitalize(field.name)} is required`;
        }
      });

      // Écrire le fichier avec formatage (2 espaces)
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
      log(`  ✓ Translations added to ${lang}.json`, 'green');
    } catch (error) {
      log(
        `  ⚠️  Could not add translations to ${lang}.json: ${error.message}`,
        'yellow'
      );
      allSuccess = false;
    }
  });

  return allSuccess;
}

async function main() {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║   🚀 AUTO-GENERATOR - MODULE CREATOR    ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');

  try {
    // Questions
    const moduleName = await question(
      '📝 Module name (plural, e.g., "products"): '
    );
    if (!moduleName) {
      log('❌ Module name is required!', 'red');
      rl.close();
      return;
    }

    const displayName =
      (await question(
        `📝 Display name (plural, default: "${capitalize(moduleName)}"): `
      )) || capitalize(moduleName);
    const displayNameSingular =
      (await question(
        `📝 Display name (singular, default: "${capitalize(moduleName.slice(0, -1))}"): `
      )) || capitalize(moduleName.slice(0, -1));
    const resourceType =
      (await question(
        `📝 Resource type for API (default: "${moduleName}"): `
      )) || moduleName;
    const routePath =
      (await question(`📝 Route path (default: "${moduleName}"): `)) ||
      moduleName;
    const identifierField =
      (await question('📝 Identifier field (id or slug, default: "id"): ')) ||
      'id';
    const identifierType = identifierField === 'slug' ? 'string' : 'number';

    // Question sur l'authentification
    const requiresAuth =
      (
        await question(
          '🔐 Does this route require authentication? (y/n, default: y): '
        )
      ).toLowerCase() !== 'n';

    // Question sur le mode développement
    const devMode =
      (
        await question(
          '💻 Development mode with mock data? (y/n, default: n): '
        )
      ).toLowerCase() === 'y';

    // Champs du modèle
    log('\n📋 Define model fields (type "done" when finished):', 'yellow');
    const fields = [];
    let fieldIndex = 1;

    while (true) {
      const fieldName = await question(
        `  Field ${fieldIndex} name (or "done"): `
      );
      if (fieldName.toLowerCase() === 'done') break;
      if (!fieldName) continue;

      const fieldType =
        (await question(
          `  Field "${fieldName}" type (string/number/boolean/Date): `
        )) || 'string';
      const required =
        (
          await question(`  Field "${fieldName}" required? (y/n): `)
        ).toLowerCase() === 'y';

      fields.push({ name: fieldName, type: fieldType, required });
      fieldIndex++;
    }

    if (fields.length === 0) {
      log('❌ At least one field is required!', 'red');
      rl.close();
      return;
    }

    // Question sur les rôles d'accès
    const rolesInput = await question(
      '👥 Access roles (comma-separated: admin,manager,user - default: user): '
    );
    const roles = rolesInput
      ? rolesInput.split(',').map(r => r.trim().toLowerCase()).filter(r => r)
      : ['user'];

    // Confirmer
    log('\n📊 Summary:', 'yellow');
    log(`  Module: ${moduleName}`);
    log(`  Display: ${displayName} / ${displayNameSingular}`);
    log(`  Resource: ${resourceType}`);
    log(`  Route: /${routePath}`);
    log(`  Identifier: ${identifierField} (${identifierType})`);
    log(
      `  Authentication: ${requiresAuth ? 'Required (authenticated route)' : 'Not required (public route)'}`
    );
    log(`  Access Roles: ${roles.join(', ')}`);
    log(
      `  Development Mode: ${devMode ? '💻 Yes (Mock data)' : '🌐 No (API calls)'}`,
      devMode ? 'cyan' : 'reset'
    );
    log(
      `  Fields: ${fields.map((f) => `${f.name} (${f.type}${f.required ? ', required' : ''})`).join(', ')}`
    );

    const confirm = await question('\n✅ Create this module? (y/n): ');
    if (confirm.toLowerCase() !== 'y') {
      log('❌ Cancelled.', 'red');
      rl.close();
      return;
    }

    // Créer le module
    await createModuleStructure(moduleName, {
      displayName,
      displayNameSingular,
      resourceType,
      routePath,
      identifierField,
      identifierType,
      fields,
      devMode,
      requiresAuth,
      roles
    });

    // Ajouter la route automatiquement
    log('\n🔗 Adding route to routing file...', 'blue');
    const routeAdded = addRouteToFile(moduleName, routePath, requiresAuth);

    // Ajouter les traductions automatiquement
    log('\n🌍 Adding translations to i18n files...', 'blue');
    const translationsAdded = addTranslations(
      moduleName,
      displayName,
      displayNameSingular,
      fields
    );

    // Instructions finales
    log('\n📌 Next steps:', 'yellow');
    if (!routeAdded) {
      log(
        '  1. Manually add route to ' +
          (requiresAuth ? 'app.routes.ts' : 'auth-routes.ts'),
        'cyan'
      );
      log(`     path: '${routePath}'`, 'green');
      log(`     component: ${capitalize(moduleName)}Component`, 'green');
      log('  2. Run: npm start', 'cyan');
    } else {
      log('  1. Run: npm start', 'cyan');
    }
    log(
      `  ${routeAdded ? '2' : '3'}. Navigate to: ${requiresAuth ? '/index/' : '/'}${routePath}`,
      'cyan'
    );
    log(
      '\n✨ Everything is ready! All files including dialogs have been created!',
      'green'
    );
    if (routeAdded) {
      log(
        `✨ Route automatically added to ${requiresAuth ? 'app.routes.ts (authenticated)' : 'auth-routes.ts (public)'}!`,
        'green'
      );
    }
    if (translationsAdded) {
      log(
        '✨ Translations automatically added to en.json, fr.json, and pt.json!',
        'green'
      );
    }
    if (devMode) {
      log(
        '✨ Development mode enabled: Mock service and data files created!',
        'cyan'
      );
      log('   📝 Check mock-data.json to customize the mock data', 'cyan');
      log(
        '   🔧 The module will use local JSON data instead of API calls',
        'cyan'
      );
    }
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
  } finally {
    rl.close();
  }
}

// Exporter les fonctions pour réutilisation dans d'autres scripts
module.exports = {
  templates,
  capitalize,
  getDefaultValue,
  generateFormlyFields,
  createModuleStructure,
  addRouteToFile,
  addTranslations
};

// Exécuter main() seulement si le script est lancé directement
if (require.main === module) {
  main();
}
