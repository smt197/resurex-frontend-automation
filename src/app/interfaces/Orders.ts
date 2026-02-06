import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Orders {
  name: string;
  position: number;
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
        key: 'position',
        type: 'input',
        props: {
          label: 'order.label.position',
          placeholder: 'order.placeholder.position',
          required: true,
          type: 'number'
        },
        validation: {
          messages: {
            required: 'order.validation.position_required'
          }
        }
      }
    ]
  }
];
