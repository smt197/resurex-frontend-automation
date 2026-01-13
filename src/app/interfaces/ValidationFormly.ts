import { AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  passwordMatchValidatorVerify,
  passwordStrengthValidatorVerify
} from './passwordValidators';

// Import all Formly components from centralized index
import {
  // Auth Components
  EmailformlyTypeComponent,
  ForgotPasswordFormlyTypeComponent,
  PasswordformlyTypeComponent,
  // File Upload Components
  FileUploadTypeImageComponent,
  FileUploadTypePDFComponent,
  ChatFilePondTypeComponent,
  DocumentFilePondTypeComponent,
  FormlyFieldFilepondComponent,
  // Form Controls Components
  FileUploadFormlyComponent,
  DatepickerFormlyComponent,
  DateRangePickerFormlyComponent,
  MaterialIconSelectComponent,
  FormlySlideToggleComponent,
  TailwindColorSelectComponent,
  FormlyButtonTypeComponent,
  ChatInputTypeComponent,
  GithubRepositorySelectComponent,
  GithubBranchSelectComponent,
  // Repeater Components
  FormlyRepeatCustomFieldComponent,
  FormlyRepeatDocumentComponent
} from '../formly-components';

import { SelectOptionsComponent } from '../formly-components/form-controls/select-options/select-options.component';
import { QuillEditorTypeComponent } from '../formly-components/form-controls/quill-editor-type/quill-editor-type.component';
import { InfoBoxTypeComponent } from '../formly-components/form-controls/info-box-type/info-box-type.component';
import { CustomWrapperComponent } from '../formly-components/wrappers/custom-wrapper/custom-wrapper.component';
import { ButtonTypeComponent } from '../shared/button-type/button-type.component';

export const ValidationFormly = {
  types: [
    {
      name: 'repeat',
      component: FormlyRepeatDocumentComponent
    },
    {
      name: 'custom-field',
      component: FormlyRepeatCustomFieldComponent
    },
    {
      name: 'password',
      component: PasswordformlyTypeComponent
    },
    {
      name: 'email',
      component: EmailformlyTypeComponent
    },
    {
      name: 'url',
      component: ForgotPasswordFormlyTypeComponent
    },
    {
      name: 'fileimage',
      component: FileUploadTypeImageComponent
    },
    {
      name: 'file',
      component: FileUploadTypePDFComponent
    },
    {
      name: 'file-upload',
      component: FileUploadFormlyComponent
    },
    {
      name: 'selecte',
      component: SelectOptionsComponent
    },
    {
      name: 'datepick',
      component: DatepickerFormlyComponent
    },
    {
      name: 'daterange',
      component: DateRangePickerFormlyComponent
    },
    {
      name: 'chat-file-pond',
      component: ChatFilePondTypeComponent
    },
    {
      name: 'chat-input-type',
      component: ChatInputTypeComponent
    },
    {
      name: 'document-file-pond',
      component: DocumentFilePondTypeComponent
    },
    {
      name: 'filepond',
      component: FormlyFieldFilepondComponent
    },
    {
      name: 'button',
      component: ButtonTypeComponent
    },
    {
      name: 'button-type',
      component: FormlyButtonTypeComponent
    },
    {
      name: 'material-icon-select',
      component: MaterialIconSelectComponent
    },
    {
      name: 'tailwind-color-select',
      component: TailwindColorSelectComponent
    },
    {
      name: 'slide-toggle',
      component: FormlySlideToggleComponent
    },
    {
      name: 'quill-editor',
      component: QuillEditorTypeComponent
    },
    {
      name: 'info-box',
      component: InfoBoxTypeComponent
    },
    {
      name: 'github-repository-select',
      component: GithubRepositorySelectComponent
    },
    {
      name: 'github-branch-select',
      component: GithubBranchSelectComponent
    }
  ],
  wrappers: [
    {
      name: 'custom-wrapper',
      component: CustomWrapperComponent
    }
  ],
  // Dans votre module Formly
  validators: [
    { name: 'fieldMatchValidator', validation: passwordMatchValidatorVerify() },
    { name: 'passwordStrength', validation: passwordStrengthValidatorVerify() },
    {
      name: 'minDate',
      validation: (control: AbstractControl, field: FormlyFieldConfig) => {
        const minDate = field.props?.['minDate'] || new Date(1900, 0, 1);
        if (!control.value) return null;
        return new Date(control.value) < minDate ? { minDate: true } : null;
      }
    },
    {
      name: 'maxDate',
      validation: (control: AbstractControl, field: FormlyFieldConfig) => {
        const maxDate = field.props?.['maxDate'] || new Date();
        if (!control.value) return null;
        return new Date(control.value) > maxDate ? { maxDate: true } : null;
      }
    }
  ],
  validationMessages: [
    { name: 'required', message: 'form.password.validation.required' },
    {
      name: 'passwordMismatch',
      message: 'form.password.validation.passwordMismatch'
    },
    {
      name: 'invalidLength',
      message: 'form.password.validation.invalidLength'
    },
    { name: 'containsLink', message: 'form.password.validation.containsLink' },
    {
      name: 'containsEmail',
      message: 'form.password.validation.containsEmail'
    },
    {
      name: 'passwordStrength',
      message: 'form.password.validation.passwordStrength'
    }
  ]
};
