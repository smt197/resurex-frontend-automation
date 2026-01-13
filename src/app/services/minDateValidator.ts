import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

// Validateur pour date minimum
export function minDateValidator(field: FormlyFieldConfig): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const minDate = field.props?.['minDate'] || new Date(1900, 0, 1);
    if (!control.value) return null;
    
    const date = new Date(control.value);
    return date < minDate ? { minDate: true } : null;
  };
}

// Validateur pour date maximum
export function maxDateValidator(field: FormlyFieldConfig): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const maxDate = field.props?.['maxDate'] || new Date();
    if (!control.value) return null;
    
    const date = new Date(control.value);
    return date > maxDate ? { maxDate: true } : null;
  };
}