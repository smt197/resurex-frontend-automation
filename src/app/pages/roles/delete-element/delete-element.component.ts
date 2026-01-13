import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Role, RoleCreateUpdateModel } from 'src/app/models/role.model';

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
    @Inject(MAT_DIALOG_DATA) public defaults: Role | Role[],
    private dialogRef: MatDialogRef<DeleteElementComponent>,
  ) {}

  send() {
    this.dialogRef.close(this.defaults);
  }

  isSingleRole(): boolean {
    return !Array.isArray(this.defaults);
  }

  getSingleRoleName(): string {
    if (this.isSingleRole()) {
      const role = this.defaults as Role;
      return `${role.name}`;
    }
    const roles = this.defaults as Role[];
    return roles.length+'';
  }
}