import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { rolesFormlyFields } from 'src/app/interfaces/Roles';
import { UserUpdateModel } from 'src/app/interfaces/User';
import { Role, RoleCreateUpdateModel } from 'src/app/models/role.model';

@Component({
  selector: 'vex-role-create-update',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    NgFor,
    NgClass,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FormlyModule,
    FormlyMaterialModule
  ],
  templateUrl: './role-create-update.component.html',
  styleUrl: './role-create-update.component.scss'
})
export class RoleCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: RoleCreateUpdateModel = {
    id: 0,
    name: '',
    guard_name: ''
  };

  mode: 'create' | 'update' = 'create';

  fields: FormlyFieldConfig[] = rolesFormlyFields;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: Role,
    private dialogRef: MatDialogRef<RoleCreateUpdateComponent>
  ) {}

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
      this.model = {
        id: this.defaults.id,
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
      this.createRole();
    } else if (this.mode === 'update') {
      this.updateRole();
    }
  }

  createRole() {
    const role: RoleCreateUpdateModel = {
      name: this.model.name,
      guard_name: this.model.guard_name
    };
    this.dialogRef.close(role);
  }

  updateRole() {
    if (!this.model) {
      console.error('Model is undefined!');
      return;
    }
    const role: RoleCreateUpdateModel = {
      id: this.defaults.id,
      name: this.model.name,
      guard_name: this.model.guard_name
    };

    this.dialogRef.close(role);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
