import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Products {
  name: string;
}

export const productsFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'product.label.name',
      placeholder: 'product.placeholder.name',
      required: true
    },
    validation: {
      messages: {
        required: 'product.validation.name_required'
      }
    }
  }
];
