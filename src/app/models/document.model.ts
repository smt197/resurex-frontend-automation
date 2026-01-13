import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { DocumentAddFileModalComponent } from '../pages/document/document-add-file-modal/document-add-file-modal.component';
import { DocumentCreateUpdateComponent } from '../pages/document/document-create-update/document-create-update.component';

export function getDocumentCreationFormlyFields(
  translate: TranslateService,
  component: DocumentCreateUpdateComponent
): FormlyFieldConfig[] {
  return [
    {
      type: 'button',
      className: 'flex justify-end mb-1',
      props: {
        text: translate.get('global.save'),
        color: 'primary',
        type: 'button',
        className: 'mat-flat-button',
        onClick: () => component.onSubmit()
      },
      expressionProperties: {
        'props.disabled': 'field.form.invalid || formState.isLoading'
      }
    },
    {
      key: 'files',
      type: 'document-file-pond', // Votre composant personnalisé pour l'upload
      props: {
        label: translate.instant('document.label.files'), // Nouvelle clé de traduction si besoin
        required: true,
        multiple: true, // C'est la clé !
        maxWidth: '100%',
        acceptedFileTypes: environment.extensions_files
      }
    }
  ];
}

export function getDocumentFormlyFields(
  translate: TranslateService
): FormlyFieldConfig[] {
  const fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: translate.instant('document.label.name'),
        placeholder: translate.instant('document.label.name'),
        required: true,
        minLength: 3
      },
      validation: {
        messages: {
          required: 'Le nom est requis.',
          minlength: 'Le nom doit contenir au moins 3 caractères.'
        }
      }
    },
    {
      key: 'size',
      type: 'input',
      props: {
        label: translate.instant('document.label.size'),
        placeholder: translate.instant('document.label.size'),
        readonly: true
      }
    }
  ];

  return fields;
}

export function getFieldAddNewFile(
  translate: TranslateService,
  component?: DocumentAddFileModalComponent
): FormlyFieldConfig[] {
  return [
    {
      key: 'files',
      type: 'document-file-pond',
      props: {
        label: translate.instant('document.label.files'),
        placeholder: translate.instant('document.label.files'),
        required: true,
        multiple: true,
        allowReorder: true,
        acceptedFileTypes: environment.extensions_files
      }
    },
    {
      type: 'button',
      className: 'flex justify-end mb-1',
      props: {
        text: translate.get('global.save'),
        color: 'primary',
        type: 'button',
        className: 'mat-flat-button',
        onClick: () => component?.uploadNewFiles()
      },
      expressionProperties: {
        'props.disabled': 'field.form.invalid || formState.isLoading'
      }
    }
  ];
}

export function getFileFields(
  translate: TranslateService,
  Save: () => void,
  isDisabled: () => boolean,
  onFileChange?: (file: File) => void
): FormlyFieldConfig[] {
  return [
    {
      key: 'file',
      type: 'filepond',
      props: {
        labelIdle: translate.instant('global.filepond.label_idle'),
        acceptedFileTypes: environment.extensions_files,
        required: true,
        onChange: (file: File) => {
          if (onFileChange) {
            onFileChange(file); // Utilisez le callback au lieu de this
          }
        }
      }
    },
    {
      type: 'button',
      props: {
        text: translate.get('global.save'),
        color: 'primary',
        type: 'button',
        disabled: !isDisabled,
        className: 'mat-flat-button',
        onClick: () => Save()
      }
    }
  ];
}

export function getJobStatusTableFields(
  translate: TranslateService
): FormlyFieldConfig[] {
  return [
    {
      key: 'id',
      type: 'input',
      props: {
        label: translate.instant('job_status.label.id'),
        readonly: true
      }
    },
    {
      key: 'type',
      type: 'input',
      props: {
        label: translate.instant('job_status.label.type'),
        readonly: true
      }
    },
    {
      key: 'status',
      type: 'select',
      props: {
        label: translate.instant('job_status.label.status'),
        readonly: true,
        options: [
          {
            label: translate.instant('job_status.status.queued'),
            value: 'queued'
          },
          {
            label: translate.instant('job_status.status.executing'),
            value: 'executing'
          },
          {
            label: translate.instant('job_status.status.finished'),
            value: 'finished'
          },
          {
            label: translate.instant('job_status.status.failed'),
            value: 'failed'
          },
          {
            label: translate.instant('job_status.status.retrying'),
            value: 'retrying'
          }
        ]
      }
    },
    {
      key: 'created_at',
      type: 'input',
      props: {
        label: translate.instant('job_status.label.created_at'),
        type: 'datetime-local',
        readonly: true
      }
    }
  ];
}