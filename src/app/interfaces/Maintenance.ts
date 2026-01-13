import { Signal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { skip } from 'rxjs/operators';

export interface MaintenanceStatus {
  is_active: boolean;
  message?: string;
}

export interface MaintenanceToggleRequest {
  is_active: boolean;
  message?: string;
}

export interface MaintenanceToggleResponse {
  message: string;
}

export interface AdminLoginResponse {
  message: string;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
  };
}

export interface AdminUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export const adminLoginFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'input',
    props: {
      label: 'Email',
      placeholder: 'admin@example.com',
      required: true,
      type: 'email'
    }
  },
  {
    key: 'password',
    type: 'input',
    props: {
      label: 'Mot de passe',
      placeholder: 'Mot de passe',
      required: true,
      type: 'password'
    }
  }
];

export function getMaintenanceSettingsFormlyFields(
  translate: TranslateService,
  onToggleChangeFn?: (field: FormlyFieldConfig) => void,
  onSaveClickFn?: () => void
): FormlyFieldConfig[] {
  return [
    {
      fieldGroupClassName:
        'flex flex-col gap-6 w-full max-w-5xl mx-auto p-4 sm:p-6',
      fieldGroup: [
        // Toggle Maintenance
        {
          key: 'is_active',
          type: 'slide-toggle',
          wrappers: ['custom-wrapper'],
          className: 'maintenance-toggle-field',
          props: {
            label: translate.instant('admin_maintenance.mode_title'),
            description: translate.instant('admin_maintenance.status_active'),
            descriptionInactive: translate.instant(
              'admin_maintenance.status_inactive'
            ),
            color: 'primary',
            customWrapperClass: 'maintenance-toggle-wrapper',
            translate: false
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              // Abonnement aux changements de toggle - skip(1) pour ignorer l'initialisation
              if (field.formControl && onToggleChangeFn) {
                field.formControl.valueChanges.pipe(skip(1)).subscribe(() => {
                  onToggleChangeFn(field);
                });
              }

              // Abonnement aux changements de langue pour les labels
              translate
                .stream('admin_maintenance.mode_title')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['label'] = text;
                  }
                });

              translate
                .stream('admin_maintenance.status_active')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['description'] = text;
                  }
                });

              translate
                .stream('admin_maintenance.status_inactive')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['descriptionInactive'] = text;
                  }
                });
            }
          }
        },
        // Message de maintenance avec Quill Editor
        {
          key: 'message',
          type: 'quill-editor',
          className: 'w-full',
          props: {
            label: translate.instant('admin_maintenance.message_label'),
            placeholder: translate.instant(
              'admin_maintenance.message_placeholder'
            ),
            hint: translate.instant('admin_maintenance.message_hint'),
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                ['clean'],
                ['link']
              ]
            }
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              // Abonnement aux changements de langue pour le champ message
              translate
                .stream('admin_maintenance.message_label')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['label'] = text;
                  }
                });

              translate
                .stream('admin_maintenance.message_placeholder')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['placeholder'] = text;
                  }
                });

              translate
                .stream('admin_maintenance.message_hint')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['hint'] = text;
                  }
                });
            }
          }
        },
        // Bouton d'action
        {
          type: 'button-type',
          className: 'flex justify-end',
          props: {
            text: translate.instant('admin_maintenance.save_button'),
            loadingText: translate.instant('admin_maintenance.saving_button'),
            color: 'primary',
            btnType: 'button',
            appearance: 'raised',
            className: 'w-full sm:w-auto min-w-[120px]',
            onClick: onSaveClickFn
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              // Abonnement aux changements de langue pour le bouton
              translate
                .stream('admin_maintenance.save_button')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['text'] = text;
                  }
                });

              translate
                .stream('admin_maintenance.saving_button')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['loadingText'] = text;
                  }
                });
            }
          }
        },
        // Informations
        {
          type: 'info-box',
          className: 'bg-blue-50 rounded-lg p-4 sm:p-6',
          props: {
            title: translate.instant('admin_maintenance.info_title'),
            items: [
              translate.instant('admin_maintenance.info_admin_access'),
              translate.instant('admin_maintenance.info_users_blocked'),
              translate.instant('admin_maintenance.info_pages_blocked')
            ]
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              // Abonnement aux changements de langue pour l'info box
              translate
                .stream('admin_maintenance.info_title')
                .subscribe((text: string) => {
                  if (field.props) {
                    field.props['title'] = text;
                  }
                });

              // Mise à jour dynamique de tous les items
              translate
                .stream('admin_maintenance.info_admin_access')
                .subscribe((text: string) => {
                  if (field.props && field.props['items']) {
                    field.props['items'][0] = text;
                  }
                });

              translate
                .stream('admin_maintenance.info_users_blocked')
                .subscribe((text: string) => {
                  if (field.props && field.props['items']) {
                    field.props['items'][1] = text;
                  }
                });

              translate
                .stream('admin_maintenance.info_pages_blocked')
                .subscribe((text: string) => {
                  if (field.props && field.props['items']) {
                    field.props['items'][2] = text;
                  }
                });
            }
          }
        }
      ]
    }
  ];
}
