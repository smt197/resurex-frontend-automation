import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Orders {
  name: string;
}

export const ordersFormlyFields: FormlyFieldConfig[] = [
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
  }
];
