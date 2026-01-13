import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'vex-chat-input-type',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    TranslatePipe, // **CORRECTION 1: Utiliser le Pipe directement**
    FormlyModule,
    FormlyMaterialModule // NOUVEAU
  ],
  templateUrl: './chat-input-type.component.html'
})
export class ChatInputTypeComponent extends FieldType<FieldTypeConfig> {}
