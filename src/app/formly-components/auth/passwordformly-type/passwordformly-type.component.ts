import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FieldType, FormlyModule, FieldTypeConfig } from '@ngx-formly/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'vex-passwordformly-type',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './passwordformly-type.component.html',
})
export class PasswordformlyTypeComponent extends FieldType<FieldTypeConfig>  implements OnInit {
  visible = false;
 

  toggleVisibility() {
    this.visible = !this.visible;
  }


  ngOnInit(): void {
 

  }

  get showError() {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
  }

  // showPasswordMismatchError(): boolean {
  //   if (!this.parentFormGroup) return false;
    
  //   return (
  //     this.parentFormGroup.errors?.['passwordMismatch']);
  // }



}

