import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Tasks {
  title: string;
  description?: any;
  status: string;
}

export const tasksFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'title',
        type: 'input',
        props: {
          label: 'task.label.title',
          placeholder: 'task.placeholder.title',
          required: true
        },
        validation: {
          messages: {
            required: 'task.validation.title_required'
          }
        }
      },
      {
        key: 'description',
        type: 'input',
        props: {
          label: 'task.label.description',
          placeholder: 'task.placeholder.description',
          required: false
        }
      }
    ]
  },
  {
    key: 'status',
    type: 'input',
    props: {
      label: 'task.label.status',
      placeholder: 'task.placeholder.status',
      required: true
    },
    validation: {
      messages: {
        required: 'task.validation.status_required'
      }
    }
  }
];
