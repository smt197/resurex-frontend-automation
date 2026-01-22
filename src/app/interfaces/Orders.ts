import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Orders {
  name: string;
  description?: string;
}

export const ordersFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'order.label.name',
          placeholder: 'order.placeholder.name',
          required: true
        },
        validation: {
          messages: {
            required: 'order.validation.name_required'
          }
        }
      },
      {
        key: 'description',
        type: 'input',
        props: {
          label: 'order.label.description',
          placeholder: 'order.placeholder.description',
          required: false
        }
      }
    ]
  }
];
