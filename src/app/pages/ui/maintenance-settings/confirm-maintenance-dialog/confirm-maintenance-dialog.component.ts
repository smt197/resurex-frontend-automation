import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'vex-confirm-maintenance-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    TranslateModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './confirm-maintenance-dialog.component.html',
  styleUrls: ['./confirm-maintenance-dialog.component.scss']
})
export class ConfirmMaintenanceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmMaintenanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isActive: boolean }
  ) {}
}
