import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Document } from 'src/app/interfaces/Document';

@Component({
  selector: 'vex-delete-element-component',
  standalone: true,
  imports: [
    MatDialogModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './delete-element.component.html',
  styleUrl: './delete-element.component.scss'
})
export class DeleteElementComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Document | Document[],
    private dialogRef: MatDialogRef<DeleteElementComponent>
  ) {}

  send() {
    this.dialogRef.close(this.defaults);
  }

  isSingleDocument(): boolean {
    return !Array.isArray(this.defaults);
  }

  getSingleDocumentName(): string {
    if (this.isSingleDocument()) {
      const document = this.defaults as Document;
      return `${document.name}`;
    }
    const documents = this.defaults as Document[];
    return documents.length + '';
  }
}
