import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Invoices {
  reference: string;
  amount: number;
  due_date?: any;
  client_name: string;
  is_paid?: boolean;
}

export const invoicesFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'reference',
        type: 'input',
        props: {
          label: 'invoice.label.reference',
          placeholder: 'invoice.placeholder.reference',
          required: true
        },
        validation: {
          messages: {
            required: 'invoice.validation.reference_required'
          }
        }
      },
      {
        key: 'amount',
        type: 'input',
        props: {
          label: 'invoice.label.amount',
          placeholder: 'invoice.placeholder.amount',
          required: true,
          type: 'number'
        },
        validation: {
          messages: {
            required: 'invoice.validation.amount_required'
          }
        }
      }
    ]
  },
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'due_date',
        type: 'input',
        props: {
          label: 'invoice.label.due_date',
          placeholder: 'invoice.placeholder.due_date',
          required: false
        }
      },
      {
        key: 'client_name',
        type: 'input',
        props: {
          label: 'invoice.label.client_name',
          placeholder: 'invoice.placeholder.client_name',
          required: true
        },
        validation: {
          messages: {
            required: 'invoice.validation.client_name_required'
          }
        }
      }
    ]
  },
  {
    key: 'is_paid',
    type: 'checkbox',
    props: {
      label: 'invoice.label.is_paid',
      placeholder: 'invoice.placeholder.is_paid',
      required: false
    }
  }
];
