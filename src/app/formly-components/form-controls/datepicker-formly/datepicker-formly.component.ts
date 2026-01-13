import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-datepicker-formly',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormlyModule
  ],
  templateUrl: './datepicker-formly.component.html',
  styleUrls: ['./datepicker-formly.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerFormlyComponent extends FieldType<FieldTypeConfig> {
  // Optionnel: pour définir des valeurs min/max
  get minDate(): Date | null {
    return this.props['minDate'] || null;
  }

  get maxDate(): Date | null {
    return this.props['maxDate'] || null;
  }
}
