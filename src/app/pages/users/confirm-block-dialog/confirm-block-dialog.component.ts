import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslationModule } from 'src/app/shared/language/translation.module';

@Component({
  selector: 'vex-confirm-block-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    TranslationModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule 
  ],
  templateUrl: './confirm-block-dialog.component.html',
  styleUrls: ['./confirm-block-dialog.component.scss']
})
export class ConfirmBlockDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmBlockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isBlocked: boolean}
  ) {}
}
