import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'vex-formly-repeat-custom-field',
  standalone: true,
  imports: [CommonModule, FormlyModule, MatButtonModule, MatIconModule, MatTooltipModule], // <-- MatTooltipModule ajouté ici
  templateUrl: './formly-repeat-custom-field.component.html',
  styleUrl: './formly-repeat-custom-field.component.scss'
})
export class FormlyRepeatCustomFieldComponent extends FieldArrayType {
}

