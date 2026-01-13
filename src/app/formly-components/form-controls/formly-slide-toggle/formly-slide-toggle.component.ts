import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-slide-toggle',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FormlyModule
  ],
  template: `
    <mat-slide-toggle
      [formControl]="formControl"
      [formlyAttributes]="field"
      [color]="props['color'] || 'primary'"
      class="self-start sm:self-center">
    </mat-slide-toggle>
  `
})
export class FormlySlideToggleComponent extends FieldType<FieldTypeConfig> {}