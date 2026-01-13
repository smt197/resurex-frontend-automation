import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Roles {

    id?: number;
    name: string;
    display_name: string;
    guard_name: string;
}

export interface RolesModel {
  name: string;
  guard_name: string;
}

export const rolesFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Role Name',
      placeholder: 'Enter the role name',
      required: true,
      minLength: 4,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'Role name is required',
        minlength: 'Role name must be at least 4 characters',
        maxlength: 'Role name cannot exceed 50 characters'
      }
    }
  },
    {
      key: 'guard_name',
      type: 'input',
      props: {
        label: 'Role Guard Name',
        placeholder: 'Enter the guard name',
        required: true,
        minLength: 3,
        maxLength: 50
      },
      validation: {
        messages: {
          required: 'Guard name is required',
          minlength: 'Guard name must be at least 4 characters',
          maxlength: 'Guard name cannot exceed 50 characters'
        }
      }
    }
];
