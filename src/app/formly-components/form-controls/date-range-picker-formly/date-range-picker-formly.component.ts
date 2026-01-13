import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'vex-date-range-picker-formly',
  standalone: true,
  imports: [
     MatFormFieldModule,
           MatInputModule,
           MatIconModule,
           ReactiveFormsModule,
           FormlyModule,
           ReactiveFormsModule,
           MatButtonModule,
           NgIf,
           MatDatepickerModule
          
  ],
  templateUrl: './date-range-picker-formly.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './date-range-picker-formly.component.scss'
})
export class DateRangePickerFormlyComponent extends FieldType<FieldTypeConfig>  {
  rangeGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  ngOnInit() {
    // Synchronisation avec le formControl parent
    this.rangeGroup.valueChanges.subscribe(val => {
      this.formControl.patchValue(val);
    });

    // Initialisation des valeurs
    if (this.formControl.value) {
      this.rangeGroup.patchValue(this.formControl.value);
    }
  }
 
}
