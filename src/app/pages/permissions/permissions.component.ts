import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Permission } from 'src/app/models/permission.model';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { PermissionsFormlyFields } from 'src/app/interfaces/Permissions';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { Utils } from 'src/app/classes/Utils';
import { PermissionCreateUpdateComponent } from './permission-create-update/permission-create-update.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';

const SNACKBAR_DURATION = 3000;

@Component({
  selector: 'vex-permissions',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent],
  templateUrl: './permissions.component.html'
})
export class PermissionsComponent {
  type = 'permissions';
  formlyFields = PermissionsFormlyFields;
  dataService!: ResourceService<Permission>;

  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<Permission>;

  constructor(
    private readonly genericApi: GenericApiService,
    private readonly dialog: MatDialog,
    private readonly snackbar: MatSnackBar
  ) {
    this.dataService = Utils.createDataService<Permission>(
      this.type,
      this.genericApi
    );
  }

  handleAction(event: ActionEvent<Permission>): void {
    switch (event.action) {
      case 'create':
        this.openCreatePermissionDialog();
        break;
      case 'edit':
        if (event.row) {
          this.openUpdatePermissionDialog(event.row);
        }
        break;
      case 'delete':
        if (event.row) {
          this.openDeletePermissionDialog(event.row);
        }
        break;
      case 'deleteAll':
        if (event.rows) {
          this.openDeleteAllPermissionsDialog(event.rows);
        }
        break;
    }
  }

  private openCreatePermissionDialog(): void {
    const dialogData = {
      mode: 'create'
    };

    this.dialog
      .open(PermissionCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((result) => {
        if (result && result.model) {
          this.genericApi.create<Permission>(this.type, result.model).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Permission created successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
                this.resourceList.refresh();
              }
            },
            error: (_error) => {
              this.snackbar.open(
                'Error creating permission. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  private openUpdatePermissionDialog(permission: Permission): void {
    const dialogData = {
      mode: 'update',
      permission: permission
    };

    this.dialog
      .open(PermissionCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((result) => {
        if (result && result.model) {
          this.genericApi.update<Permission>(this.type, permission.id.toString(), result.model).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Permission updated successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
                this.resourceList.refresh();
              }
            },
            error: (_error) => {
              this.snackbar.open(
                'Error updating permission. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  private openDeletePermissionDialog(permission: Permission): void {
    this.dialog
      .open(DeleteElementComponent, { data: permission, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const originalData = [...this.resourceList.data];
          this.resourceList.data = this.resourceList.data.filter(
            (p) => p.id !== permission.id
          );

          this.genericApi.delete(this.type, permission.id.toString()).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Permission deleted successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
              }
            },
            error: (_error) => {
              this.resourceList.data = originalData;
              this.snackbar.open(
                'Error deleting permission. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  private openDeleteAllPermissionsDialog(permissions: Permission[]): void {
    this.dialog
      .open(DeleteElementComponent, { data: permissions, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const ids = permissions.map((permission) => permission.id.toString());

          this.genericApi.deleteAll(this.type, ids).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Permissions deleted successfully!',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
                this.resourceList.refresh();
              }
            },
            error: (_error) => {
              this.snackbar.open(
                'Error deleting permissions. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }
}
