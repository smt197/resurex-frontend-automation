import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {
  TAILWIND_COLORS,
  TailwindColor
} from 'src/static-data/static-data-color';

@Component({
  selector: 'vex-tailwind-color-select',
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
  templateUrl: './tailwind-color-select.component.html',
  styleUrl: './tailwind-color-select.component.scss'
})
export class TailwindColorSelectComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  searchControl = new FormControl('');
  colorList: TailwindColor[] = [];
  filteredColors: TailwindColor[] = [];

  ngOnInit(): void {
    // Transformer l'objet TAILWIND_COLORS en tableau plat
    for (const [name, shades] of Object.entries(TAILWIND_COLORS)) {
      for (const [shade, value] of Object.entries(shades)) {
        this.colorList.push({ name, shade, value });
      }
    }

    this.filteredColors = [...this.colorList];

    // Valeur par défaut si existante
    if (
      this.field.model?.color &&
      this.colorList.find((c) => c.value === this.field.model.color)
    ) {
      this.formControl.setValue(this.field.model.color);
    }

    // Filtrage dynamique
    this.searchControl.valueChanges.subscribe((value) => {
      this.filteredColors = this.colorList.filter((color) =>
        `${color.name}-${color.shade}`
          .toLowerCase()
          .includes(value?.toLowerCase() || '')
      );
    });
  }

  onOpenedChange(opened: boolean) {
    if (opened) {
      setTimeout(() => {
        const input = document.querySelector<HTMLInputElement>(
          'input[placeholder="Rechercher une couleur..."]'
        );
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

  getSelectedColorName(value: string): string {
    return this.colorList.find((c) => c.value === value)?.name || '';
  }
}
