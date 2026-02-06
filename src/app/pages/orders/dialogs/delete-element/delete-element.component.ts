import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'vex-delete-element',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent {
  isMultiple = false;
  count = 0;
  displayName = 'Commande';
  displayNamePlural = 'Commandes';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteElementComponent>
  ) {
    if (Array.isArray(data)) {
      this.isMultiple = true;
      this.count = data.length;
    }
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
