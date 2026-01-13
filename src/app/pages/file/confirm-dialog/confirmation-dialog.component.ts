import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

// Interface pour les données que notre dialogue recevra
export interface ConfirmationDialogData {
  name: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {
  // Injection de MatDialogRef pour contrôler la boîte de dialogue (par ex. la fermer)
  // Injection de MAT_DIALOG_DATA pour recevoir les données passées par le composant parent
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  // Méthode appelée lors du clic sur le bouton "Annuler"
  onCancel(): void {
    // Ferme le dialogue et retourne `false`
    this.dialogRef.close(false);
  }

  // Méthode appelée lors du clic sur le bouton "Confirmer"
  onConfirm(): void {
    // Ferme le dialogue et retourne `true`
    this.dialogRef.close(true);
  }
}