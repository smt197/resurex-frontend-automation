import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Outils {
  name: string;
  description?: any;
}

export const outilsFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'outil.label.name',
          placeholder: 'outil.placeholder.name',
          required: true
        },
        validation: {
          messages: {
            required: 'outil.validation.name_required'
          }
        }
      },
      {
        key: 'description',
        type: 'input',
        props: {
          label: 'outil.label.description',
          placeholder: 'outil.placeholder.description',
          required: false
        }
      }
    ]
  }
];
