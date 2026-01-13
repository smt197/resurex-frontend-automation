import { Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Roles } from '../interfaces/Roles';
import { Permissions } from '../interfaces/Permissions';

import { TranslateService } from '@ngx-translate/core';
import { Language } from './language.model';
import { Country } from './country.model';


export class User {
  id: number;
  slug: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  confirmed?: boolean;
  is_blocked?: boolean;
  otp_enabled?: boolean;
  birthday?: Date | string | null;
  roles?: Roles[];
  permissions?: Permissions[];
  photo?: string | File | null;
  available_countries: Country;


  constructor(user: Partial<User>) {
    this.id = user.id ?? 0;
    this.slug = user.slug || '';
    this.last_name = user.last_name || '';
    this.first_name = user.first_name || '';
    this.email = user.email || '';
    this.confirmed = user.confirmed;
    this.is_blocked = user.is_blocked ?? false;
    this.otp_enabled = user.otp_enabled ?? false;
    this.roles = user.roles || [];
    this.permissions = user.permissions || [];
    this.photo = user.photo;
    this.phone = user.phone;

    this.available_countries = user.available_countries as Country;

  }
   get name() {
    let name = '';

    if (this.first_name && this.last_name) {
      name = this.first_name + ' ' + this.last_name;
    } else if (this.first_name) {
      name = this.first_name;
    } else if (this.last_name) {
      name = this.last_name;
    }

    return name;
  }
  

  set name(value) {}
}
export interface UserModel {
  id?: number;
  slug?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  confirmed?: boolean;
  is_blocked?: boolean;
  otp_enabled?: boolean;
  birthday?: Date | string | null;
  roles?: Roles[];
  permissions?: Permissions[];
  photo?: string | File | null;
  languages?: Language[];
  

}


export const userFormlyFields: FormlyFieldConfig[] = [
  // Première ligne - Prénom et Nom
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'first_name',
        type: 'input',
        props: {
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true
        },
        validators: {
          validation: [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(50)
          ]
        },
        validation: {
          messages: {
            required: 'First name is required',
            minlength: 'First name must be at least 4 characters',
            maxlength: 'First name cannot exceed 50 characters'
          }
        },
        templateOptions: {
          icon: 'mat:person'
        }
      },
      {
        key: 'last_name',
        type: 'input',
        props: {
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true
        },
        validators: {
          validation: [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(50)
          ]
        },
        validation: {
          messages: {
            required: 'Last name is required',
            minlength: 'Last name must be at least 4 characters',
            maxlength: 'Last name cannot exceed 50 characters'
          }
        }
      }
    ]
  },
  // Deuxième ligne - Email et Date de naissance
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'email',
        type: 'email',
        props: {
          label: 'Email',
          placeholder: 'Enter your email',
          required: true,
          type: 'email'
        },
        validators: {
          validation: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(254),
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ]
        },
        validation: {
          messages: {
            required: 'Email is required',
            minlength: 'Email must be at least 8 characters',
            maxlength: 'Email cannot exceed 254 characters',
            pattern: 'Please enter a valid email address'
          }
        }
      },
      {
        key: 'birthday',
        type: 'datepicker', // Assurez-vous que ce type est configuré dans votre Formly
        props: {
          label: 'Birthday',
          placeholder: 'Select birth date',
          required: false,
          dateFormat: 'YYYY-MM-DD', // Format de date
          minDate: new Date(1900, 0, 1), // Date minimale
          maxDate: new Date() // Date maximale (aujourd'hui)
        },
        templateOptions: {
          icon: 'mat:calendar_today'
        }
      }
    ]
  },
  // Troisième ligne - Rôle et Permissions
  {
    fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
    fieldGroup: [
      {
        key: 'roles',
        type: 'select',
        props: {
          label: 'Role Name',
          placeholder: 'Enter role name',
          required: true,
          multiple: true,
          options: [] // Will be populated dynamically
        },
        validators: {
          validation: [Validators.required]
        },
        validation: {
          messages: {
            required: 'Role is required'
          }
        }
      },
      {
        key: 'permissions',
        type: 'select',
        props: {
          label: 'Permission Name',
          placeholder: 'Enter permission name',
          required: true,
          multiple: true,
          options: [] // Will be populated dynamically
        },
        validators: {
          validation: [Validators.required]
        },
        validation: {
          messages: {
            required: 'Permission is required'
          }
        }
      }
    ]
  },
  {
    key: 'is_blocked',
    type: 'slide-toggle',
    props: {
      label: 'Blocked Status',
      required: false
    }
  },
  {
    key: 'otp_enabled',
    type: 'slide-toggle',
    props: {
      label: 'Otp Status',
      required: false
    }
  },
  {
    key: 'photo',
    type: 'fileimage',
    props: {
      label: 'Profile Photo',
      required: false
    }
  }
];


export function getUserFormlyFields(translate: TranslateService): FormlyFieldConfig[] {
  return [
    // Première ligne - Prénom et Nom
    {
      fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
      fieldGroup: [
        {
          key: 'first_name',
          type: 'input',
          props: {
            label: translate.instant('form.first_name.label'),
            required: true,
            minLength: 4,
            maxLength: 50,
            icon: 'person'
          },
          validators: {
            validation: [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(50)
            ]
          },
          validation: {
            messages: {
              required: translate.instant('form.first_name.validation.required'),
              minLength: translate.instant('form.first_name.validation.minLength'),
              maxLength: translate.instant('form.first_name.validation.maxLength')
            }
          }
        },
        {
          key: 'last_name',
          type: 'input',
          props: {
            label: translate.instant('form.last_name.label'),
            required: true,
            minLength: 4,
            maxLength: 50,
            icon: 'person'
          },
          validators: {
            validation: [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(50)
            ]
          },
          validation: {
            messages: {
              required: translate.instant('form.last_name.validation.required'),
              minLength: translate.instant('form.last_name.validation.minLength'),
              maxLength: translate.instant('form.last_name.validation.maxLength')
            }
          }
        }
      ]
    },
    // Deuxième ligne - Email et Rôle
    {
      fieldGroupClassName: 'w-full grid grid-cols-2 gap-2 mb-6',
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          props: {
            type: 'email',
            label: translate.instant('form.email.label'),
            required: true,
            minLength: 8,
            maxLength: 254,
            icon: 'email'
          },
          validators: {
            validation: [
              Validators.required,
              Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)
            ]
          },
          validation: {
            messages: {
              required: translate.instant('form.email.validation.required'),
              minLength: translate.instant('form.email.validation.minLength'),
              maxLength: translate.instant('form.email.validation.maxLength'),
              pattern: translate.instant('form.email.validation.pattern')
            }
          }
        },
        {
          key: 'birthday',
          type: 'datepicker',
          props: {
            label: translate.instant('form.birthday.label'),
            placeholder: translate.instant('form.birthday.placeholder'),
            required: false,
            minDate: new Date(1900, 0, 1), // Date minimale
            maxDate: new Date(), // Date maximale
            datepickerOptions: {
              displayFormat: translate.instant('form.birthday.format'),
            },
          },
          templateOptions: {
            icon: 'mat:calendar_today'
          },
          validators: {
            validation: [
              { name: 'minDate' },
              { name: 'maxDate' }
            ]
          },
          validation: {
            messages: {
              minDate: translate.instant('form.birthday.validation.minDate'),
              maxDate: translate.instant('form.birthday.validation.maxDate')
            }
          },
          modelOptions: {
            updateOn: 'blur' // Cela aide à synchroniser les valeurs
          }
        },
        //   {
        //     key: 'dateRange',
        //     type: 'daterange',
        //     props: {
        //       label: 'Période',
        // startPlaceholder: 'Date début',
        // endPlaceholder: 'Date fin'
        //     },
        //   },
        {
          key: 'available_countries',
          type: 'selecte',
          props: {
            label: translate.instant('global.country'),
            required: false,
            icon: 'location_on',
            
          },
        },
        {
          key: 'phone',
          type: 'selecte',
          props: {
            label: translate.instant('global.phone'),
            required: false,
            icon: 'phone',

          },
        },
        {
          key: 'roles',
          type: 'select',
          props: {
            label: translate.instant('form.roles.label'),
            required: true,
            multiple: true,
            icon: 'badge',
            options: [
            ]
          },
          validators: {
            validation: [Validators.required]
          },
          validation: {
            messages: {
              required: translate.instant('form.roles.validation.required')
            }
          }
        },
        {
          key: 'permissions',
          type: 'select',
          props: {
            label: translate.instant('form.permissions.label'),
            required: true,
            multiple: true,
            options: [] // Will be populated dynamically
          },
          validators: {
            validation: [Validators.required]
          },
          validation: {
            messages: {
              required: translate.instant('form.permissions.validation.required')
            }
          }
        },
        {
          key: 'is_blocked',
          type: 'slide-toggle',
          props: {
            label: translate.instant('form.is_blocked.label'),
          }
        },
        {
          key: 'otp_enabled',
          type: 'slide-toggle',
          props: {
            label: translate.instant('form.otp_enabled.label'),
          }
        }
      ]
    },
    // Photo de profil
    {
      key: 'photo',
      type: 'fileimage',
      props: {
        label: translate.instant('form.photo.label'),
        required: false,
        icon: 'photo_camera'
      }
    }
  ];
}

