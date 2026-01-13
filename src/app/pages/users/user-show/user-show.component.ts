import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Permissions } from 'src/app/interfaces/Permissions';
import { Roles } from 'src/app/interfaces/Roles';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'vex-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class UserShowComponent {
  private _cachedImageUrl: string | null = null;
  private _lastPhotoRef: File | string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: User,
    private dialogRef: MatDialogRef<UserShowComponent>
  ) {}

  get imageUrl(): string {
    // Si la photo a changé, on nettoie l'ancien cache
    if (this._lastPhotoRef !== this.defaults.photo) {
      this.clearImageCache();
      this._lastPhotoRef = this.defaults.photo || '';
    }

    if (!this._cachedImageUrl) {
      if (this.defaults.photo instanceof File) {
        this._cachedImageUrl = URL.createObjectURL(this.defaults.photo);
      } else if (
        typeof this.defaults.photo === 'string' &&
        this.defaults.photo
      ) {
        this._cachedImageUrl = this.defaults.photo;
      } else {
        this._cachedImageUrl = 'assets/img/avatars/noavatar.png';
      }
    }

    return this._cachedImageUrl;
  }

  private clearImageCache() {
    if (this._cachedImageUrl && this._cachedImageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this._cachedImageUrl);
    }
    this._cachedImageUrl = null;
  }

  cancel() {
    this.dialogRef.close(null);
  }

  // fonction pour parcourir et afficher le name des roles du user
  getRolesNames(roles: Roles[]): string {
    return roles
      .map((role) => (typeof role === 'string' ? role : role.display_name))
      .join(', ');
  }
  getPermissionsNames(permissions: Permissions[]): string {
    return permissions
      .map((permission) =>
        typeof permission === 'string' ? permission : permission.display_name
      )
      .join(', ');
  }
}
