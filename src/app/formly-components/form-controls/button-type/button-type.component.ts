// button-type.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'formly-button-type',
  imports: [
    CommonModule,
     FormlyModule,
     MatButtonModule,
     MatIconModule,
     TranslateModule
  ],
  templateUrl: './button-type.component.html',
  styles: [`
    .button-container {
      display: flex;
      justify-content: flex-end;
      margin: 8px 0;
    }
  `]
})
export class FormlyButtonTypeComponent extends FieldType<FieldTypeConfig> {}
