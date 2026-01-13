import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Roles } from './Roles';
import { Category } from './Category';

export interface MenuDescription {
  fr?: string;
  en?: string;
  pt?: string;
}

export interface Menu {
  id?: number;
  slug: string;
  name: string;
  description?: string;
  descriptions?: MenuDescription;
  icon: string;
  color: string;
  route: string;
  roles: string[];
  role_names?: string[];
  queryParams?: { [key: string]: any };
  category_id: Category['id'];
  category?: Category;
  disable?: number;
}

export const MenuFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'menu.label.name',
      placeholder: 'menu.placeholder.name',
      required: true,
      minLength: 2,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'menu.validation.name_required',
        minlength: 'menu.validation.name_minlength',
        maxlength: 'menu.validation.name_maxlength'
      }
    }
  },
  {
    key: 'description',
    type: 'text',
    props: {
      label: 'menu.label.description'
    }
  },
  {
    key: 'icon',
    type: 'input',
    props: {
      label: 'menu.label.icon',
      placeholder: 'menu.placeholder.icon',
      required: true,
      minLength: 4,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'menu.validation.icon_required',
        minlength: 'menu.validation.icon_minlength',
        maxlength: 'menu.validation.icon_maxlength'
      }
    }
  },
  {
    key: 'color',
    type: 'input',
    props: {
      label: 'menu.label.color',
      placeholder: 'menu.placeholder.color',
      required: true,
      minLength: 5,
      maxLength: 30
    },
    validation: {
      messages: {
        required: 'menu.validation.color_required',
        minlength: 'menu.validation.color_minlength',
        maxlength: 'menu.validation.color_maxlength'
      }
    }
  },
  {
    key: 'route',
    type: 'input',
    props: {
      label: 'menu.label.route',
      placeholder: 'menu.placeholder.route',
      required: true,
      minLength: 2,
      maxLength: 100
    },
    validation: {
      messages: {
        required: 'menu.validation.route_required',
        minlength: 'menu.validation.route_minlength',
        maxlength: 'menu.validation.route_maxlength'
      }
    }
  },
  {
    key: 'category_id',
    type: 'select',
    props: {
      label: 'menu.label.category',
      placeholder: 'menu.placeholder.category',
      required: true
    },
    validation: {
      messages: {
        required: 'menu.validation.category_required'
      }
    }
  },
  {
    key: 'roles',
    type: 'select',
    props: {
      label: 'menu.label.roles',
      placeholder: 'menu.placeholder.roles',
      required: true,
      multiple: true
    },
    validation: {
      messages: {
        required: 'menu.validation.roles_required'
      }
    }
  },
  {
    key: 'disable',
    type: 'slide-toggle',
    props: {
      label: 'menu.label.disable'
    }
  }
];

export function getMenuFormlyFields(
  translate: TranslateService,
  rolesList: Roles[],
  categoriesList: Category[],
  Save: () => void,
  Cancel: () => void,
  isDisabled: () => boolean,
  isLoading: () => boolean = () => false
): FormlyFieldConfig[] {
  const roleOptions = rolesList.map((role) => ({
    value: role.name, // La valeur stockée sera le nom du rôle
    label: role.name // Le libellé affiché
  }));

  const categoryOptions = categoriesList.map((category) => ({
    value: category.id,
    label: category.name
  }));

  return [
    {
      key: 'name',
      type: 'input',
      props: {
        label: translate.instant('menu.label.name'),
        placeholder: translate.instant('menu.label.name'),
        required: true,
        minLength: 2,
        maxLength: 50
      },
      validation: {
        messages: {
          required: 'Menu name is required',
          minlength: 'Menu name must be at least 2 characters',
          maxlength: 'Menu name cannot exceed 50 characters'
        }
      }
    },
    {
      key: 'descriptions',
      fieldGroup: [
        {
          key: 'fr',
          type: 'textarea',
          props: {
            label: translate.instant('menu.label.description_fr'),
            placeholder: translate.instant('menu.placeholder.description_fr'),
            required: false,
            rows: 2,
            maxLength: 500
          }
        },
        {
          key: 'en',
          type: 'textarea',
          props: {
            label: translate.instant('menu.label.description_en'),
            placeholder: translate.instant('menu.placeholder.description_en'),
            required: false,
            rows: 2,
            maxLength: 500
          }
        },
        {
          key: 'pt',
          type: 'textarea',
          props: {
            label: translate.instant('menu.label.description_pt'),
            placeholder: translate.instant('menu.placeholder.description_pt'),
            required: false,
            rows: 2,
            maxLength: 500
          }
        }
      ]
    },
    {
      key: 'icon',
      type: 'material-icon-select',
      props: {
        label: translate.instant('menu.label.icon'),
        required: true
      },
      validation: {
        messages: {
          required: 'Icon is required'
        }
      }
    },
    {
      key: 'color',
      type: 'tailwind-color-select',
      props: {
        label: translate.instant('menu.label.color'),
        required: true
      },
      validation: {
        messages: {
          required: 'Color class is required'
        }
      }
    },
    {
      key: 'route',
      type: 'input',
      props: {
        label: translate.instant('menu.label.route'),
        placeholder: translate.instant('menu.label.route'),
        required: true,
        minLength: 2,
        maxLength: 100
      },
      validation: {
        messages: {
          required: 'Route is required',
          minlength: 'Route must be at least 2 characters',
          maxlength: 'Route cannot exceed 100 characters'
        }
      }
    },
    {
      key: 'category_id',
      type: 'select',
      props: {
        label: translate.instant('menu.label.category'),
        required: true,
        options: categoryOptions
      },
      validation: {
        messages: {
          required: 'Category is required'
        }
      }
    },
    {
      key: 'roles',
      type: 'select',
      props: {
        label: translate.instant('menu.label.roles'),
        required: true,
        multiple: true,
        options: roleOptions
      },
      validation: {
        messages: {
          required: 'At least one role must be selected'
        }
      }
    },
    {
      key: 'disable',
      type: 'slide-toggle',
      props: {
        label: translate.instant('menu.label.disable')
      }
    },
    {
      fieldGroupClassName: 'flex justify-end gap-2 mt-4',
      fieldGroup: [
        {
          type: 'button',
          props: {
            text: translate.get('global.cancel'),
            color: 'default',
            type: 'button',
            className: 'bg-white text-black mat-flat-button',
            onClick: () => Cancel()
          },
          expressionProperties: {
            'props.disabled': () => isLoading()
          }
        },
        {
          type: 'button',
          props: {
            text: translate.get('global.save'),
            color: 'primary',
            type: 'button',
            className: 'mat-flat-button',
            onClick: () => Save()
          },
          expressionProperties: {
            'props.disabled': () => isDisabled() || isLoading(),
            'props.loading': () => isLoading()
          }
        }
      ]
    }
  ];
}

export function getManageMenuFiltersFormlyFields(
  categoriesList: Category[],
  rolesList: Roles[],
  categoryAllLabel: string,
  roleAllLabel: string,
  categoryLabel: string,
  roleLabel: string,
  onCategoryChange: (categoryId: number | null) => void,
  onRoleChange: (roleName: string | null) => void
): FormlyFieldConfig[] {
  const categoryOptions = [
    { value: null, label: categoryAllLabel },
    ...categoriesList.map((category) => ({
      value: category.id,
      label: category.name
    }))
  ];

  const roleOptions = [
    { value: null, label: roleAllLabel },
    ...rolesList.map((role) => ({
      value: role.name,
      label: role.name
    }))
  ];

  return [
    {
      fieldGroupClassName: 'flex items-center gap-4 mb-2',
      fieldGroup: [
        {
          key: 'category_filter',
          type: 'select',
          className: 'w-64',
          props: {
            label: categoryLabel,
            appearance: 'outline',
            options: categoryOptions,
            change: (field: any, $event: any) => {
              onCategoryChange($event.value);
            }
          }
        },
        {
          key: 'role_filter',
          type: 'select',
          className: 'w-64',
          props: {
            label: roleLabel,
            appearance: 'outline',
            options: roleOptions,
            change: (field: any, $event: any) => {
              onRoleChange($event.value);
            }
          }
        }
      ]
    }
  ];
}