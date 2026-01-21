import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Digites {
  name: string;
  description?: string;
}

export const digitesFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'digite.label.name',
          placeholder: 'digite.placeholder.name',
          required: true
        },
        validation: {
          messages: {
            required: 'digite.validation.name_required'
          }
        }
      },
      {
        key: 'description',
        type: 'input',
        props: {
          label: 'digite.label.description',
          placeholder: 'digite.placeholder.description',
          required: false
        }
      }
    ]
  }
];
