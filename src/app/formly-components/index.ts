/**
 * Formly Components Index
 *
 * Ce fichier centralise tous les exports des composants Formly personnalisés
 * pour faciliter les imports dans le reste de l'application.
 */

// Auth Components
export { EmailformlyTypeComponent } from './auth/emailformly-type/emailformly-type.component';
export { ForgotPasswordFormlyTypeComponent } from './auth/forgot-password-formly-type/forgot-password-formly-type.component';
export { PasswordformlyTypeComponent } from './auth/passwordformly-type/passwordformly-type.component';

// File Upload Components
export { FileUploadTypeImageComponent } from './file-upload/file-upload-type-image/file-upload-type-image.component';
export { FileUploadTypePDFComponent } from './file-upload/file-upload-type-pdf/file-upload-type-pdf.component';
export { ChatFilePondTypeComponent } from './file-upload/formly-field/chat-file-pond-type.component';
export { DocumentFilePondTypeComponent } from './file-upload/formly-field/document-file-pond-type.component';
export { FormlyFieldFilepondComponent } from './file-upload/formly-field-filepond';

// Form Controls Components
export { FileUploadFormlyComponent } from './form-controls/file-upload-formly/file-upload-formly.component';
export { DatepickerFormlyComponent } from './form-controls/datepicker-formly/datepicker-formly.component';
export { DateRangePickerFormlyComponent } from './form-controls/date-range-picker-formly/date-range-picker-formly.component';
export { MaterialIconSelectComponent } from './form-controls/formly-icon-select/material-icon-select.component';
export { FormlySlideToggleComponent } from './form-controls/formly-slide-toggle/formly-slide-toggle.component';
export { TailwindColorSelectComponent } from './form-controls/formly-tailwind-color-select/tailwind-color-select.component';
export * from './form-controls/select-options/select-options.component';
export { FormlyButtonTypeComponent } from './form-controls/button-type/button-type.component';
export { ChatInputTypeComponent } from './form-controls/chat-input-type/chat-input-type.component';
export { GithubRepositorySelectComponent } from './form-controls/github-repository-select/github-repository-select.component';
export { GithubBranchSelectComponent } from './form-controls/github-branch-select/github-branch-select.component';

// Repeater Components
export { FormlyRepeatCustomFieldComponent } from './repeaters/formly-repeat-custom-field/formly-repeat-custom-field.component';
export { FormlyRepeatDocumentComponent } from './repeaters/formly-repeat-document/formly-repeat-document.component';
