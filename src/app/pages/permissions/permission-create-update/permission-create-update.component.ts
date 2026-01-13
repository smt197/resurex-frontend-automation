import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { permissionFormlyFields } from 'src/app/interfaces/Permissions';
import {
  Permission,
  PermissionCreateUpdateModel
} from 'src/app/models/permission.model';

@Component({
  selector: 'vex-permission-create-update',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormlyModule,
    FormlyMaterialModule
  ],
  templateUrl: './permission-create-update.component.html'
})
export class PermissionCreateUpdateComponent implements OnInit {
  form = new FormGroup({});

  model: PermissionCreateUpdateModel = {
    name: '',
    guard_name: 'api'
  };

  mode: 'create' | 'update' = 'create';

  fields: FormlyFieldConfig[] = permissionFormlyFields;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Permission,
    private dialogRef: MatDialogRef<PermissionCreateUpdateComponent>
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
      this.model = {
        name: this.defaults.name,
        guard_name: this.defaults.guard_name
      };
    } else {
      this.mode = 'create';
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.createPermission();
    } else if (this.mode === 'update') {
      this.updatePermission();
    }
  }

  createPermission() {
    const permission: PermissionCreateUpdateModel = {
      name: this.model.name,
      guard_name: this.model.guard_name || 'api'
    };
    this.dialogRef.close(permission);
  }

  updatePermission() {
    if (!this.model) {
      console.error('Model is undefined!');
      return;
    }
    const permission: PermissionCreateUpdateModel = {
      name: this.model.name,
      guard_name: this.model.guard_name || 'api'
    };

    this.dialogRef.close(permission);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
