import { User as UserModel } from 'src/app/models/user.model';
import { Language } from '../models/language.model';
import { Roles } from './Roles';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validators } from '@angular/forms';
import { Permissions } from './Permissions';
import { Country } from '../models/country.model';
import { newPasswordDifferentValidator } from './passwordValidators';
import { Notifications } from './Notifications';
import { Menu } from './Menu';

export interface User {
  id?: number; // ID facultatif (utilisé après enregistrement)
  slug?: string;
  first_name: string;
  last_name: string;
  email: string;
  confirmed: boolean;
  is_blocked?: boolean; // Nouveau champ pour le blocage
  otp_enabled?: boolean; // Nouveau champ pour le statut OTP
  password?: string; // Facultatif pour éviter de le stocker après connexion
  password_confirmation?: string; // Facultatif, utilisé uniquement pour l'inscription
  birthday?: Date | string | null; // Nouveau champ ajouté
  roles?: Roles[]; // Exemple : "admin", "user", etc.
  permissions?: Permissions[]; // Exemple : "read", "write", etc.
  photo?: string | File | null;
  phone?: string;
  preferred_language?: Language;
  languages?: Language[];
  available_countries?: Country;
  country?: Country[];
  unreadnotificationcount?: number;
  recent_unread_list?: Notifications[];
  session_user_second?: number;
  menus?:Menu[];
}

export interface AccountModel {
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserCreateUpdateModel {
  first_name: string;
  last_name: string;
  email: string;
  roles: Roles[];
  birthday?: Date | string | null;
  permissions: Permissions[];
  photo: string | File | null;
  phone?: string;
  languages?: Language[];
  country_name?: Country;
  available_countries?: Country;
  is_blocked?: boolean;
  otp_enabled?: boolean;
}

export interface UserUpdateModel {
  id?: number;
  slug?: string;
  model: UserCreateUpdateModel;
  tempUrl?: string;
}

export interface UserCreateModel {
  tempUrl?: string;
  model: UserCreateUpdateModel;
}

export interface PasswordModel {
  password: string;
  current_password?: string;
  password_confirmation: string;
  email?: string;
}

export type DefaultDialogData =
  | User
  | Roles[]
  | Roles
  | Permissions[]
  | Permissions
  | UpdateData;
export interface UpdateData {
  user?: UserModel;
  roles: Roles[];
  permissions: Permissions[];
  mode: 'create' | 'update';
}
export interface ConfirmModel {
  confirmed: boolean;
}
export const accountFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'first_name',
    type: 'input',
    props: {
      label: 'form.first_name.label',
      required: true,
      translate: true,
      minLength: 4,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'form.first_name.validation.required',
        minlength: 'form.first_name.validation.minlength',
        maxlength: 'form.first_name.validation.maxlength'
      }
    }
  },
  {
    key: 'last_name',
    type: 'input',
    props: {
      label: 'form.last_name.label',
      required: true,
      translate: true,
      minLength: 4,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'form.last_name.validation.required',
        minLength: 'form.last_name.validation.minLength',
        maxLength: 'form.last_name.validation.maxLength'
      }
    }
  },
  {
    key: 'email',
    type: 'email',
    props: {
      type: 'email',
      label: 'form.email.label',
      required: true,
      translate: true,
      minLength: 8,
      maxLength: 254
      // Pattern corrigé ci-dessous
    },
    validation: {
      messages: {
        required: 'form.email.validation.required',
        minLength: 'form.email.validation.minLength',
        maxLength: 'form.email.validation.maxLength',
        pattern: 'form.email.validation.pattern'
      }
    },
    validators: {
      validation: [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]
    }
  }
];
export const passwordFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroup: [
      {
        key: 'password',
        type: 'password',
        props: {
          label: 'form.password.label',
          required: true,
          translate: true
        },
        validators: {
          validation: ['passwordStrength']
        },
        validation: {
          messages: {
            required: 'form.password.validation.required',
            minLength: 'form.password.validation.minLength',
            maxLength: 'form.password.validation.maxLength',
            invalidLength: 'form.password.validation.invalidLength',
            containsLink: 'form.password.validation.containsLink',
            containsEmail: 'form.password.validation.containsEmail',
            passwordStrength: 'form.password.validation.passwordStrength'
          }
        }
      },
      {
        key: 'password_confirmation',
        type: 'password',
        props: {
          label: 'form.password_confirmation.label',
          required: true,
          translate: true
        },
        validators: {
          validation: ['fieldMatchValidator']
        },
        validation: {
          messages: {
            required: 'form.password.validation.required',
            passwordMismatch: 'form.password.validation.passwordMismatch'
          }
        }
      }
    ]
  }
];
export const passwordChangeFormlyFields: FormlyFieldConfig[] = [
  {
    fieldGroup: [
      {
        key: 'current_password',
        type: 'password',
        props: {
          label: 'form.current_password.label',
          required: true,
          translate: true
        },
        validators: {
          validation: ['passwordStrength']
        },
        validation: {
          messages: {
            required: 'form.current_password.validation.required',
            minLength: 'form.current_password.validation.minLength',
            maxLength: 'form.current_password.validation.maxLength',
            invalidLength: 'form.current_password.validation.invalidLength',
            containsLink: 'form.current_password.validation.containsLink',
            containsEmail: 'form.current_password.validation.containsEmail',
            passwordStrength:
              'form.current_password.validation.passwordStrength'
          }
        }
      },
      {
        key: 'password',
        type: 'password',
        props: {
          label: 'form.password.label',
          required: true,
          translate: true
        },
        validators: {
          validation: ['passwordStrength', newPasswordDifferentValidator()]
        },
        validation: {
          messages: {
            required: 'form.password.validation.required',
            minLength: 'form.password.validation.minLength',
            maxLength: 'form.password.validation.maxLength',
            invalidLength: 'form.password.validation.invalidLength',
            containsLink: 'form.password.validation.containsLink',
            containsEmail: 'form.password.validation.containsEmail',
            passwordStrength: 'form.password.validation.passwordStrength',
            sameAsCurrent: 'form.password.validation.sameAsCurrent'
          }
        }
      },
      {
        key: 'password_confirmation',
        type: 'password',
        props: {
          label: 'form.password_confirmation.label',
          required: true,
          translate: true
        },
        validators: {
          validation: ['fieldMatchValidator']
        },
        validation: {
          messages: {
            required: 'form.password.validation.required',
            passwordMismatch: 'form.password.validation.passwordMismatch'
          }
        }
      }
    ]
  }
];
export const confirmFormForlyFields: FormlyFieldConfig[] = [
  {
    key: 'confirmed',
    type: 'checkbox',
    props: {
      label: 'form.confirmed.label',
      pattern: 'true',
      translate: true,
      required: true
    },
    validation: {
      messages: {
        pattern: 'form.confirmed.validation.pattern'
      }
    }
  }
];
export const loginFormForlyFields: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'email',
    props: {
      type: 'email',
      label: 'form.email.label',
      placeholder: 'Enter your email',
      required: true,
      translate: true,
      minLength: 8,
      maxLength: 254
      // Pattern corrigé ci-dessous
    },
    validation: {
      messages: {
        required: 'form.email.validation.required',
        minLength: 'form.email.validation.minLength',
        maxLength: 'form.email.validation.maxLength',
        pattern: 'form.email.validation.pattern'
      }
    },
    validators: {
      validation: [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]
    }
  },
  {
    key: 'password',
    type: 'password',
    props: {
      label: 'form.password.label',
      required: true,
      translate: true,
      minLength: 8,
      maxLength: 8
    },
    validators: {
      validation: ['passwordStrength']
    },
    validation: {
      messages: {
        required: 'form.password.validation.required',
        minLength: 'form.password.validation.minLength',
        maxLength: 'form.password.validation.maxLength',
        invalidLength: 'form.password.validation.invalidLength',
        containsLink: 'form.password.validation.containsLink',
        containsEmail: 'form.password.validation.containsEmail',
        passwordStrength: 'form.password.validation.passwordStrength'
      }
    }
  },
  {
    fieldGroupClassName: 'flex items-center justify-between',
    fieldGroup: [
      {
        key: 'remember_me',
        type: 'checkbox',
        props: {
          translate: true,
          label: 'form.remember_me.label'
        },
        wrappers: []
      },
      {
        key: 'forgotpasswordurl',
        type: 'url',
        props: {
          label: 'form.forgotpasswordurl.label',
          type: 'url',
          translate: true,
          required: false
        },
        wrappers: []
      }
    ]
  }
];
export const forgotFormFomlyfields: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'email',
    props: {
      type: 'email',
      label: 'form.email.label',
      placeholder: 'Enter your email',
      required: true,
      translate: true,
      minLength: 8,
      maxLength: 254
      // Pattern corrigé ci-dessous
    },
    validation: {
      messages: {
        required: 'form.email.validation.required',
        minLength: 'form.email.validation.minLength',
        maxLength: 'form.email.validation.maxLength',
        pattern: 'form.email.validation.pattern'
      }
    },
    validators: {
      validation: [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]
    }
  }
];
