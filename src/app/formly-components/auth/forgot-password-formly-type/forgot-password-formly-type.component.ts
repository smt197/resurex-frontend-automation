import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'vex-forgot-password-formly-type',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    
  ],
  templateUrl: './forgot-password-formly-type.component.html',
  styles: ``
})
export class ForgotPasswordFormlyTypeComponent extends FieldType<FieldTypeConfig>  {

}
