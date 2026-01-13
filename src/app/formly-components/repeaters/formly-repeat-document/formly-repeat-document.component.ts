import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-formly-repeat-document',
  standalone: true,
  imports: [CommonModule, FormlyModule, MatButtonModule, MatIconModule, MatTooltipModule, SharedModule],
  templateUrl: './formly-repeat-document.component.html',
  styleUrl: './formly-repeat-document.component.scss'
})
export class FormlyRepeatDocumentComponent extends FieldArrayType {}