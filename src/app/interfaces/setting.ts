import { Validators } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TranslateService } from "@ngx-translate/core";

export interface Setting {
    site_name: string;
    site_logo: string | File | null;
    site_description: string;
    site_subtitle: string;
    site_active: boolean;
    site_web: string;

  }
  export interface SettingModel {
    site_name: string;
    site_logo: string | File | null;
    site_description: string;
    site_subtitle: string;
    site_active: boolean;
    site_web: string;

  }
  export interface UpdateSettingModel {
    model: SettingModel;
    tempUrl?: string;
  }


  export function getSettingFormlyFields(translate: TranslateService): FormlyFieldConfig[] {
    return [
      // Première ligne - Nom du site et URL
      {
        fieldGroupClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
        fieldGroup: [
          {
            key: 'site_name',
            type: 'input',
            props: {
              label: translate.instant('form.site_name.label'),
              required: true,
              icon: 'title',
            },
            validators: {
              validation: [Validators.required, Validators.maxLength(100)],
            },
            validation: {
              messages: {
                required: translate.instant('form.site_name.validation.required'),
                maxlength: translate.instant('form.site_name.validation.maxlength'),
              },
            },
          },
          {
            key: 'site_subtitle',
            type: 'input',
            props: {
              label: translate.instant('form.site_subtitle.label'),
              required: true,
              icon: 'title',
            },
            validators: {
              validation: [Validators.required, Validators.maxLength(100)],
            },
            validation: {
              messages: {
                required: translate.instant('form.site_subtitle.validation.required'),
                maxlength: translate.instant('form.site_subtitle.validation.maxlength'),
              },
            },
          },
          {
            key: 'site_web',
            type: 'input',
            props: {
              label: translate.instant('form.site_web.label'),
              placeholder: translate.instant('form.site_web.placeholder'),
              required: true,
              icon: 'language',
            },
            validators: {
              validation: [Validators.required],
            },
            validation: {
              messages: {
                required: translate.instant('form.site_web.validation.required'),
                pattern: translate.instant('form.site_web.validation.pattern'),
              },
            },
          }
        ]
      },
  
      // Description (pleine largeur)
      {
        className: 'w-full',
        fieldGroup: [
          {
            key: 'site_description',
            type: 'textarea',
            props: {
              label: translate.instant('form.site_description.label'),
              placeholder: translate.instant('form.site_description.placeholder'),
              required: false,
              rows: 3,
              icon: 'description',
            },
            validators: {
              validation: [Validators.maxLength(500)],
            },
            validation: {
              messages: {
                maxlength: translate.instant('form.site_description.validation.maxlength'),
              },
            },
          }
        ]
      },
  
      // Statut (pleine largeur)
      {
        className: 'w-full',
        fieldGroup: [
          {
            key: 'site_active',
            type: 'checkbox',
            props: {
              label: translate.instant('form.site_active.label'),
              icon: 'power_settings_new',
            },
            defaultValue: true,
          }
        ]
      },
  
      // Logo du site
      {
        className: 'w-full',
        fieldGroup: [
          {
            key: 'site_logo',
            type: 'fileimage',
            props: {
              label: translate.instant('form.site_logo.label'),
              required: false,
              accept: 'image/*',
            },
          }
        ]
      }
    ];
  }