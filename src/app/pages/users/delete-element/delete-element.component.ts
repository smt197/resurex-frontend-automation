import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'vex-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrl: './delete-element.component.scss',
  standalone: true,
  imports: [
    MatDialogModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class DeleteElementComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: User | User[],
    private dialogRef: MatDialogRef<DeleteElementComponent>,
  ) {}

  send() {
    this.dialogRef.close(this.defaults);
  }

  isSingleUser(): boolean {
    return !Array.isArray(this.defaults);
  }

  getSingleUserName(): string {
    if (this.isSingleUser()) {
      const user = this.defaults as User;
      return `${user.first_name} ${user.last_name}`;
    }
    const users = this.defaults as User[];
    return users.length+'';
  }
}