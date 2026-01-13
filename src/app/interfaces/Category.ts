import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

export interface Category {
  id: number;
  slug: string;
  name: string;
  order?: number;
  icon?: string;
  navigation_type?: 'subheading' | 'dropdown';
  position_reference_id?: number;
  position_type?: 'before' | 'after';
  created_at?: string;
  updated_at?: string;
}

export const CategoryFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Category Name',
      placeholder: 'Enter the category name',
      required: true,
      minLength: 2,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'Category name is required',
        minlength: 'Category name must be at least 2 characters',
        maxlength: 'Category name cannot exceed 50 characters'
      }
    }
  },
  {
    key: 'order',
    type: 'input',
    props: {
      label: 'Order',
      placeholder: 'Enter display order',
      type: 'number',
      min: 0,
      max: 999
    }
  },
  {
    key: 'icon',
    type: 'input',
    props: {
      label: 'Icon',
      placeholder: 'Enter icon name (e.g., mat:folder)',
      required: false
    }
  },
  {
    key: 'navigation_type',
    type: 'select',
    props: {
      label: 'Navigation Type',
      required: true,
      options: [
        { value: 'subheading', label: 'Subheading' },
        { value: 'dropdown', label: 'Dropdown' }
      ]
    },
    validation: {
      messages: {
        required: 'Navigation type is required'
      }
    }
  }
];

export function getCategoryFormlyFields(
  translate: TranslateService,
  Save: () => void,
  Cancel: () => void,
  isDisabled: () => boolean,
  existingCategories: Category[] = []
): FormlyFieldConfig[] {
  return [
    {
      key: 'name',
      type: 'input',
      props: {
        label: translate.instant('categorie.label.name'),
        placeholder: translate.instant('categorie.label.name'),
        required: true,
        minLength: 2,
        maxLength: 50
      },
      validation: {
        messages: {
          required: 'Category name is required',
          minlength: 'Category name must be at least 2 characters',
          maxlength: 'Category name cannot exceed 50 characters'
        }
      }
    },
    {
      key: 'position_reference_id',
      type: 'select',
      props: {
        label: translate.instant('categorie.label.position_reference'),
        options: existingCategories.map((cat) => ({
          value: cat.id,
          label: cat.name
        }))
      }
    },
    {
      key: 'position_type',
      type: 'select',
      props: {
        label: translate.instant('categorie.label.position_type'),
        options: [
          {
            value: 'before',
            label: translate.instant('categorie.position_type.before')
          },
          {
            value: 'after',
            label: translate.instant('categorie.position_type.after')
          }
        ]
      },
      expressions: {
        hide: '!model.position_reference_id'
      }
    },
    {
      key: 'order',
      type: 'input',
      props: {
        label: translate.instant('categorie.label.order'),
        type: 'number',
        min: 0,
        max: 999
      },
      expressions: {
        hide: (field) => !!field.model.position_reference_id // plus robuste
      }
    },
    {
      key: 'icon',
      type: 'material-icon-select',
      props: {
        label: translate.instant('categorie.label.icon'),
        required: false
      }
    },
    {
      key: 'navigation_type',
      type: 'select',
      props: {
        label: translate.instant('categorie.label.navigation_type'),
        required: true,
        options: [
          {
            value: 'subheading',
            label: translate.instant('categorie.navigation_type.subheading')
          },
          {
            value: 'dropdown',
            label: translate.instant('categorie.navigation_type.dropdown')
          }
        ]
      },
      validation: {
        messages: {
          required: 'Navigation type is required'
        }
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
            'props.disabled': () => isDisabled()
          }
        }
      ]
    }
  ];
}
