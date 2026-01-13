import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Role } from 'src/app/models/role.model';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { rolesFormlyFields } from 'src/app/interfaces/Roles';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { Utils } from 'src/app/classes/Utils';
import { RoleCreateUpdateComponent } from './role-create-update/role-create-update.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';

const SNACKBAR_DURATION = 3000;

@Component({
  selector: 'vex-roles',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent],
  templateUrl: './roles.component.html'
})
export class RolesComponent {
  type = 'roles';
  formlyFields = rolesFormlyFields;
  dataService!: ResourceService<Role>;

  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<Role>;

  constructor(
    private readonly genericApi: GenericApiService,
    private readonly dialog: MatDialog,
    private readonly snackbar: MatSnackBar
  ) {
    this.dataService = Utils.createDataService<Role>(
      this.type,
      this.genericApi
    );
  }

  handleAction(event: ActionEvent<Role>): void {
    switch (event.action) {
      case 'create':
        this.openCreateRoleDialog();
        break;
      case 'edit':
        if (event.row) {
          this.openUpdateRoleDialog(event.row);
        }
        break;
      case 'delete':
        if (event.row) {
          this.openDeleteRoleDialog(event.row);
        }
        break;
      case 'deleteAll':
        if (event.rows) {
          this.openDeleteAllRolesDialog(event.rows);
        }
        break;
    }
  }

  private openCreateRoleDialog(): void {
    const dialogData = {
      mode: 'create'
    };

    this.dialog
      .open(RoleCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((result) => {
        if (result && result.model) {
          this.genericApi.create<Role>(this.type, result.model).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Role created successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
                this.resourceList.refresh();
              }
            },
            error: (_error) => {
              this.snackbar.open(
                'Error creating role. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  private openUpdateRoleDialog(role: Role): void {
    const dialogData = {
      mode: 'update',
      role: role
    };

    this.dialog
      .open(RoleCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((result) => {
        if (result && result.model) {
          this.genericApi.update<Role>(this.type, role.id.toString(), result.model).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Role updated successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
                this.resourceList.refresh();
              }
            },
            error: (_error) => {
              this.snackbar.open(
                'Error updating role. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  private openDeleteRoleDialog(role: Role): void {
    this.dialog
      .open(DeleteElementComponent, { data: role, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const originalData = [...this.resourceList.data];
          this.resourceList.data = this.resourceList.data.filter(
            (r) => r.id !== role.id
          );

          this.genericApi.delete(this.type, role.id.toString()).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Role deleted successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
              }
            },
            error: (_error) => {
              this.resourceList.data = originalData;
              this.snackbar.open(
                'Error deleting role. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  private openDeleteAllRolesDialog(roles: Role[]): void {
    this.dialog
      .open(DeleteElementComponent, { data: roles, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const ids = roles.map((role) => role.id.toString());

          this.genericApi.deleteAll(this.type, ids).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Roles deleted successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
                this.resourceList.refresh();
              }
            },
            error: (_error) => {
              this.snackbar.open(
                'Error deleting roles. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }
}
