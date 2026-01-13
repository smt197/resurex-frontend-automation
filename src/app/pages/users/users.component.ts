import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';

import { User, userFormlyFields } from 'src/app/models/user.model';
import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';
import { UserShowComponent } from './user-show/user-show.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { TranslateModule } from '@ngx-translate/core';
import { UserCreateUpdateModel, UserUpdateModel } from 'src/app/interfaces/User';
import { Utils } from 'src/app/classes/Utils';
import { ConfirmBlockDialogComponent } from './confirm-block-dialog/confirm-block-dialog.component';
import { FormDataBuilderService } from 'src/app/services/form-data-builder.service';

// Constants
const SNACKBAR_DURATION = 3000;

@Component({
  selector: 'vex-users',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent, TranslateModule],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  type = 'users';
  dataService: ResourceService<User>;
  formlyFields = userFormlyFields;

  // On récupère une référence au composant générique pour pouvoir le rafraîchir
  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<User>;

  constructor(
    private readonly genericApi: GenericApiService,
    private readonly dialog: MatDialog,
    private readonly snackbar: MatSnackBar,
    private readonly formDataBuilder: FormDataBuilderService,
    public readonly websocketService: WebsocketService
  ) {
    this.dataService = Utils.createDataService<User>(
      this.type,
      this.genericApi
    );
  }

  // C'est ici que la magie opère : on gère toutes les actions spécifiques
  handleAction(event: ActionEvent<User>) {
    switch (event.action) {
      case 'create':
        this.openCreateUserDialog();
        break;
      case 'edit':
        if (event.row) {
          this.openUpdateUserDialog(event.row);
        }
        break;
      case 'delete':
        if (event.row) {
          this.openDeleteUserDialog(event.row);
        }
        break;
      case 'show':
        if (event.row) {
          this.openShowUserDialog(event.row);
        }
        break;
      case 'deleteAll':
        if (event.rows) {
          this.openDeleteAllUsersDialog(event.rows);
        }
        break;
      case 'block':
        if (event.row) {
          this.blockUser(event.row);
        }
        break;
      case 'unblock':
        if (event.row) {
          this.unblockUser(event.row);
        }
        break;
      case 'toggle-block':
        if (event.row) {
          this.confirmToggleBlockUser(event.row);
        }
        break;
    }
  }

  openCreateUserDialog() {
    const dialogData = {
      mode: 'create'
    };

    this.dialog
      .open(UserCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((result) => {
        if (result && result.model) {
          const formData = this.formDataBuilder.createUserFormData(result.model);

          this.genericApi.create<User>(this.type, formData).subscribe((res) => {
            if (res) {
              this.snackbar.open(
                res.message ?? 'User created successfully!',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
              this.resourceList.refresh();
            }
          });
        }
      });
  }

  openUpdateUserDialog(user: User) {
    const dialogData = {
      mode: 'update',
      user: user
    };

    this.dialog
      .open(UserCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((updatedCustomer: UserUpdateModel) => {
        if (updatedCustomer && updatedCustomer.model) {
          const userIndex = this.resourceList.data.findIndex(
            (u) => u.slug === user.slug
          );
          if (userIndex === -1) {
            return;
          }

          const originalUser = this.resourceList.data[userIndex];
          const optimisticUser = {
            ...originalUser,
            ...updatedCustomer.model
          } as User;

          if (updatedCustomer.model.photo instanceof File) {
            optimisticUser.photo = URL.createObjectURL(updatedCustomer.model.photo);
          }
          if (updatedCustomer.model.birthday) {
            optimisticUser.birthday = this.formDataBuilder.formatDateForLaravel(
              updatedCustomer.model.birthday
            );
          }

          const currentData = [...this.resourceList.data];
          currentData[userIndex] = optimisticUser;
          this.resourceList.data = currentData;

          const formData = this.formDataBuilder.createUserFormData(updatedCustomer.model);
          this.genericApi
            .update<User>(this.type, user.slug, formData)
            .subscribe({
              next: (res) => {
                if (res && res.data && !Array.isArray(res.data)) {
                  const updatedUserFromServer = res.data as User;
                  if (updatedCustomer.model.photo instanceof File) {
                    updatedUserFromServer.photo = optimisticUser.photo;
                  }
                  const currentData = [...this.resourceList.data];
                  currentData[userIndex] = updatedUserFromServer;
                  this.resourceList.data = currentData;
                  this.snackbar.open(
                    res.message ?? 'User updated successfully!',
                    'OK',
                    { duration: SNACKBAR_DURATION }
                  );
                } else {
                  const currentData = [...this.resourceList.data];
                  currentData[userIndex] = originalUser;
                  this.resourceList.data = currentData;
                  this.snackbar.open('An unexpected error occurred.', 'OK', {
                    duration: SNACKBAR_DURATION
                  });
                }
              },
              error: (err) => {
                const currentData = [...this.resourceList.data];
                currentData[userIndex] = originalUser;
                this.resourceList.data = currentData;
                this.snackbar.open(
                  'Error updating user. Please try again.',
                  'OK',
                  { duration: SNACKBAR_DURATION }
                );
              }
            });
        }
      });
  }

  openDeleteUserDialog(user: User) {
    this.dialog
      .open(DeleteElementComponent, { data: user, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          // Optimistic update: remove the user from the local list immediately
          const originalData = [...this.resourceList.data]; // Save original data for rollback
          this.resourceList.data = this.resourceList.data.filter(
            (u) => u.slug !== user.slug
          );

          this.genericApi.delete(this.type, user.slug).subscribe({
            next: (res) => {
              if (res) {
                this.snackbar.open(res.message ?? '', 'OK', { duration: SNACKBAR_DURATION });
              }
            },
            error: (err) => {
              this.resourceList.data = originalData;
              this.snackbar.open(
                'Error deleting user. Please try again.',
                'OK',
                { duration: SNACKBAR_DURATION }
              );
            }
          });
        }
      });
  }

  openShowUserDialog(user: User) {
    this.dialog.open(UserShowComponent, { data: user, width: '650px' });
  }

  openDeleteAllUsersDialog(users: User[]) {
    this.dialog
      .open(DeleteElementComponent, { data: users, width: '600px' })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          const slugs = users.map((user) => user.slug);

          this.genericApi.deleteAll(this.type, slugs).subscribe((res) => {
            if (res) {
              this.snackbar.open(res.message ?? '', 'OK', { duration: SNACKBAR_DURATION });
              this.resourceList.refresh();
            }
          });
        }
      });
  }

  /**
   * Helper method to update user block status in the list
   */
  private updateUserBlockStatus(user: User, isBlocked: boolean): void {
    const userIndex = this.resourceList.data.findIndex(
      (u) => u.slug === user.slug
    );

    if (userIndex !== -1) {
      const currentData = [...this.resourceList.data];
      const currentUser = currentData[userIndex];

      // Create a new User instance to preserve the name getter
      currentData[userIndex] = new User({
        ...currentUser,
        is_blocked: isBlocked
      });

      this.resourceList.data = currentData;
    }
  }

  blockUser(user: User): void {
    if (user.is_blocked) {
      this.snackbar.open('User is already blocked', 'OK', { duration: SNACKBAR_DURATION });
      return;
    }

    this.genericApi.post<User>(`users/${user.slug}/block`, {}).subscribe({
      next: (res) => {
        if (res && res.data) {
          this.updateUserBlockStatus(user, true);
          this.snackbar.open(
            res.message ?? 'User blocked successfully!',
            'OK',
            { duration: SNACKBAR_DURATION }
          );
        }
      },
      error: (err) => {
        this.snackbar.open(
          'Error blocking user. Please try again.',
          'OK',
          { duration: SNACKBAR_DURATION }
        );
      }
    });
  }

  unblockUser(user: User): void {
    if (!user.is_blocked) {
      this.snackbar.open('User is not blocked', 'OK', { duration: SNACKBAR_DURATION });
      return;
    }

    this.genericApi.post<User>(`users/${user.slug}/unblock`, {}).subscribe({
      next: (res) => {
        if (res && res.data) {
          this.updateUserBlockStatus(user, false);
          this.snackbar.open(
            res.message ?? 'User unblocked successfully!',
            'OK',
            { duration: SNACKBAR_DURATION }
          );
        }
      },
      error: (err) => {
        this.snackbar.open(
          'Error unblocking user. Please try again.',
          'OK',
          { duration: SNACKBAR_DURATION }
        );
      }
    });
  }

  toggleBlockUser(user: User): void {
    const newBlockStatus = !user.is_blocked;

    this.genericApi.post<User>(`users/${user.slug}/toggle-block`, {}).subscribe({
      next: (res) => {
        if (res && res.data) {
          this.updateUserBlockStatus(user, newBlockStatus);
          this.snackbar.open(
            res.message ?? 'User status updated successfully!',
            'OK',
            { duration: SNACKBAR_DURATION }
          );
        }
      },
      error: (err) => {
        this.snackbar.open(
          'Error updating user status. Please try again.',
          'OK',
          { duration: SNACKBAR_DURATION }
        );
      }
    });
  }

  confirmToggleBlockUser(user: User): void {
    this.dialog
      .open(ConfirmBlockDialogComponent, {
        data: { isBlocked: user.is_blocked },
        width: '400px',
        disableClose: true 
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.toggleBlockUser(user); // ta logique actuelle
        } else {
          // Si l'utilisateur annule, on remet le toggle dans son état initial
          const index = this.resourceList.data.findIndex(
            (u) => u.slug === user.slug
          );
          if (index !== -1) {
            this.resourceList.data[index].is_blocked = user.is_blocked;
            this.resourceList.data = [...this.resourceList.data];
          }
        }
      });
  }
}
