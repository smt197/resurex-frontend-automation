import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'vex-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMatInputModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() placeholder: string = '';
  @Output() searchChange = new EventEmitter<string>();

  form = new FormGroup({});
  model = { search: '' };

  fields: FormlyFieldConfig[] = [
    {
      key: 'search',
      type: 'input',
      props: {
        placeholder: this.placeholder,
        appearance: 'outline',
        floatLabel: 'always',
        hideRequiredMarker: true,
        addonLeft: {
          class: 'text-secondary',
          text: 'search'
        }
      }
    }
  ];

  ngOnInit() {
    // Mettre à jour le placeholder si il est fourni en input
    if (this.placeholder && this.fields[0].props) {
      this.fields[0].props!.placeholder = this.placeholder;
    }
  }

  onModelChange(model: any) {
    this.searchChange.emit(model.search);
  }
}
