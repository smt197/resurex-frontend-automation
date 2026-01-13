import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'vex-emailformly-type',
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
  templateUrl: './emailformly-type.component.html',
  styles: ``
})
export class EmailformlyTypeComponent extends FieldType<FieldTypeConfig> {


  get showError() {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
  }
}
