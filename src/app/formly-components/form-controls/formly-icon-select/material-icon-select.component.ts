import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ICONS_list } from 'src/static-data/static-icon-data';

@Component({
  selector: 'vex-material-icon-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    NgFor,
    NgIf
  ],
  templateUrl: './material-icon-select.component.html',
  styleUrl: './material-icon-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialIconSelectComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  searchControl = new FormControl('');
  iconsList = ICONS_list;
  filteredIcons: string[] = [];

  ngOnInit(): void {
    this.filteredIcons = [...this.iconsList];

    if (
      this.field.model?.icon &&
      this.iconsList.includes(this.field.model.icon)
    ) {
      this.formControl.setValue(this.field.model.icon);
    } else if (this.iconsList.length) {
      this.formControl.setValue(this.iconsList[0]);
    }

    this.searchControl.valueChanges.subscribe((value) => {
      this.filteredIcons = this.iconsList.filter((icon) =>
        icon.toLowerCase().includes(value?.toLowerCase() || '')
      );
    });
  }

  onOpenedChange(opened: boolean) {
    if (opened) {
      setTimeout(() => {
        const input =
          document.querySelector<HTMLInputElement>('input[matInput]');
        input?.focus();
      });
    }
  }

  get showError() {
    return (
      this.formControl?.invalid &&
      (this.formControl.dirty || this.formControl.touched)
    );
  }

  get showErrorMessage() {
    return this.to?.['validation']?.messages?.required || 'Ce champ est requis';
  }
}
