import { FormlyFieldConfig } from "@ngx-formly/core";





export interface PermissionsModel {
    name: string;
    guard_name: string;
}

export const PermissionsFormlyFields: FormlyFieldConfig[] = [
    {

        key: 'name',
        type: 'input',
        props: {
            label: 'Permission Name',
            placeholder: 'Enter the Permission name',
            required: true,
            minLength: 4,
            maxLength: 50,
        },
        validation: {
            messages: {
                required: 'Permission name is required',
                minlength: 'Permission name must be at least 4 characters',
                maxlength: 'Permission name cannot exceed 50 characters',
            },
        },
    },
    {
        key: 'guard_name',
        type: 'input',
        props: {
            label: 'Role Guard Name',
            placeholder: 'Enter the guard name',
            required: true,
            minLength: 4,
            maxLength: 50,
        },
        validation: {
            messages: {
                required: 'Guard name is required',
                minlength: 'Guard name must be at least 4 characters',
                maxlength: 'Guard name cannot exceed 50 characters',
            },
        },
    },
];


export interface Permissions {
  id?: number;
  name: string;
  display_name?: string;
  guard_name: string;
}

export interface PermissionsModel {
  name: string;
  guard_name: string;
}

export const permissionFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Permission Name',
      placeholder: 'Enter the Permission name',
      required: true,
      minLength: 4,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'Permission name is required',
        minlength: 'Permission name must be at least 4 characters',
        maxlength: 'Permission name cannot exceed 50 characters'
      }
    }
  }
  //   {
  //     key: 'guard_name',
  //     type: 'input',
  //     props: {
  //       label: 'Permission Guard Name',
  //       placeholder: 'Enter the guard name',
  //       required: true,
  //       minLength: 3,
  //       maxLength: 50
  //     },
  //     validation: {
  //       messages: {
  //         required: 'Guard name is required',
  //         minlength: 'Guard name must be at least 4 characters',
  //         maxlength: 'Guard name cannot exceed 50 characters'
  //       }
  //     }
  //   }
];

