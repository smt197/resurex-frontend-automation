import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Products {
  name: string;
  price: number;
}

export const productsFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
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
      },
      {
        key: 'price',
        type: 'input',
        props: {
          label: 'product.label.price',
          placeholder: 'product.placeholder.price',
          required: true,
          type: 'number'
        },
        validation: {
          messages: {
            required: 'product.validation.price_required'
          }
        }
      }
    ]
  }
];
