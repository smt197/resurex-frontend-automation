import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';

export interface DeleteMediaDialogData {
  fileName: string;
  fileType?: string;
}

@Component({
  selector: 'vex-delete-media-confirmation',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ],
  templateUrl: './delete-media-confirmation.component.html',
  styleUrls: ['./delete-media-confirmation.component.scss']
})
export class DeleteMediaConfirmationComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeleteMediaDialogData,
    private dialogRef: MatDialogRef<DeleteMediaConfirmationComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
