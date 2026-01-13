import { Component, OnInit, AfterViewInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { getGithubRepositoryFormlyFields } from 'src/app/models/github-repository.model';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GithubRepository } from 'src/app/interfaces/GithubRepository';
import { finalize } from 'rxjs';
import { Utils } from 'src/app/classes/Utils';
import { GithubService } from './github.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GithubCreateUpdateComponent } from './dialogs/github-create-update/github-create-update.component';
import { ConfirmDialogComponent } from '../ui/confirm-dialog-component/confirm-dialog-component.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'vex-github',
  standalone: true,
  imports: [
    CommonModule,
    GenericResourceListComponent,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit, AfterViewInit {
  type = 'github-repositories';
  isLoading = signal(true);
  isSyncing = signal(false);
  showOwned = signal(false); // false = collaboration repos, true = owned repos
  externalFilters: { [key: string]: string | number | boolean | null } = { is_owner: false };
  dataService: ResourceService<GithubRepository>;

  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<GithubRepository>;

  formlyFields: FormlyFieldConfig[] = [];

  constructor(
    private genericApi: GenericApiService,
    private snackbar: MatSnackBar,
    private translate: TranslateService,
    private router: Router,
    private dialog: MatDialog,
    private githubService: GithubService
  ) {
    this.dataService = Utils.createDataService<GithubRepository>(
      this.type,
      this.genericApi
    );

    // Écouter les nouveaux repositories créés
    this.githubService.repositoryCreated$.subscribe(() => {
      setTimeout(() => {
        if (this.resourceList) {
          this.resourceList.refresh();
        }
      }, 500);
    });

    // Écouter les repositories mis à jour
    this.githubService.repositoryUpdated$.subscribe(() => {
      if (this.resourceList) {
        this.resourceList.refresh();
      }
    });
  }

  ngOnInit(): void {
    this.formlyFields = getGithubRepositoryFormlyFields(this.translate);
  }

  ngAfterViewInit(): void {
    // Forcer le rafraîchissement avec les filtres après l'initialisation de la vue
    // Cela garantit que externalFilters est bien appliqué dès le premier chargement
    if (this.resourceList) {
      setTimeout(() => {
        this.resourceList.refresh();
      }, 0);
    }
  }

  toggleRepositoryView(): void {
    this.showOwned.set(!this.showOwned());
    // Activer le spinner pendant le changement
    if (this.resourceList) {
      this.resourceList.isLoading.set(true);
    }
    // Créer un nouvel objet pour forcer la détection de changement par Angular
    this.externalFilters = { ...this.externalFilters, is_owner: this.showOwned() };
  }

  handleAction(event: ActionEvent<GithubRepository>) {
    switch (event.action) {
      case 'create':
        this.openCreateDialog();
        break;

      case 'edit':
        if (event.row) {
          this.openEditDialog(event.row);
        }
        break;

      case 'show':
        if (event.row) {
          this.viewBranches(event.row);
        }
        break;

      case 'delete':
        if (event.row) {
          this.deleteRepository(event.row);
        }
        break;

      case 'deleteAll':
        if (event.rows) {
          this.deleteAllRepositories(event.rows);
        }
        break;

      case 'sync':
        if (event.row) {
          this.syncRepository(event.row);
        }
        break;

      case 'branches':
        if (event.row) {
          this.viewBranches(event.row);
        }
        break;

      case 'add-collaborator':
        if (event.row) {
          this.openGithubCollaborators(event.row);
        }
        break;
    }
  }

  openGithubCollaborators(repository: GithubRepository): void {
    if (!repository.owner || !repository.name) {
      this.snackbar.open(
        this.translate.instant('GITHUB.MESSAGES.INVALID_REPOSITORY'),
        this.translate.instant('COMMON.CLOSE'),
        { duration: 3000 }
      );
      return;
    }

    const githubUrl = `https://github.com/${repository.owner}/${repository.name}/settings/access`;
    window.open(githubUrl, '_blank');
  }

  // openCreateDialog(): void {
  //   const dialogRef = this.dialog.open(GithubCreateUpdateComponent, {
  //     width: '800px',
  //     data: { mode: 'create' }
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.resourceList.isLoading.set(true);
  //       this.githubService
  //         .createRepository(result.model)
  //         .pipe(finalize(() => this.resourceList.isLoading.set(false)))
  //         .subscribe({
  //           next: (response) => {
  //             this.showMessage(response.data.message);
  //             this.githubService.notifyRepositoryCreated(response);
  //           },
  //           error: (error) => {
  //             this.snackbar.open(
  //               error.error?.message ||
  //                 this.translate.instant('GITHUB.MESSAGES.CREATED_ERROR'),
  //               this.translate.instant('COMMON.CLOSE'),
  //               { duration: 5000 }
  //             );
  //           }
  //         });
  //     }
  //   });
  // }

   openCreateDialog() {
      const dialogData = {
        mode: 'create',
        existingCategories: this.resourceList.data
      };
  
      this.dialog
        .open(GithubCreateUpdateComponent, { data: dialogData, width: '650px' })
        .afterClosed()
        .subscribe((result) => {
          if (result && result.model) {
            this.genericApi
              .create<GithubRepository>(this.type, result.model)
              .subscribe((res) => {
                if (res) {
                  this.showMessage(res.message);
                  this.resourceList.refresh();
                }
              });
          }
        });
    }
  

  openEditDialog(repository: GithubRepository): void {
    const dialogRef = this.dialog.open(GithubCreateUpdateComponent, {
      width: '800px',
      data: { mode: 'update', repository }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && repository.slug) {
        this.resourceList.isLoading.set(true);
        this.githubService
          .updateRepository(repository.slug, result.model)
          .pipe(finalize(() => this.resourceList.isLoading.set(false)))
          .subscribe({
            next: (updated) => {
             this.showMessage(updated.message);
              this.githubService.notifyRepositoryUpdated(updated);
            },
            error: (error) => {
             this.showMessage(error.error.message);
            }
          });
      }
    });
  }

  viewBranches(repository: GithubRepository): void {
    if (repository.slug) {
      this.router.navigate(['/index/github/branches', repository.slug], {
        state: { repository }
      });
    }
  }

  deleteRepository(repository: GithubRepository): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        message: this.translate.instant('GITHUB.MESSAGES.DELETE_CONFIRM', {
          name: repository.full_name
        })
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed && repository.slug) {
        const originalData = [...this.resourceList.data];
        this.resourceList.data = this.resourceList.data.filter(
          (r) => r.slug !== repository.slug
        );

        this.resourceList.isLoading.set(true);
        this.githubService
          .deleteRepository(repository.slug)
          .pipe(finalize(() => this.resourceList.isLoading.set(false)))
          .subscribe({
            next: () => {
              this.snackbar.open(
                this.translate.instant('GITHUB.MESSAGES.DELETED_SUCCESS'),
                this.translate.instant('COMMON.CLOSE'),
                { duration: 3000 }
              );
              this.githubService.notifyRepositoryDeleted(repository.slug!);
            },
            error: (error) => {
              this.resourceList.data = originalData;
              this.snackbar.open(
                error.error?.message ||
                  this.translate.instant('GITHUB.MESSAGES.DELETED_ERROR'),
                this.translate.instant('COMMON.CLOSE'),
                { duration: 5000 }
              );
            }
          });
      }
    });
  }

  deleteAllRepositories(repositories: GithubRepository[]): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        message: this.translate.instant('GITHUB.MESSAGES.DELETE_ALL_CONFIRM', {
          count: repositories.length
        })
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.resourceList.isLoading.set(true);
        const deletions = repositories
          .filter((r) => r.slug)
          .map((r) => this.githubService.deleteRepository(r.slug!));

        // Execute all deletions (simplified, you might want better error handling)
        Promise.all(deletions)
          .then(() => {
            this.snackbar.open(
              this.translate.instant('GITHUB.MESSAGES.DELETED_ALL_SUCCESS'),
              this.translate.instant('COMMON.CLOSE'),
              { duration: 3000 }
            );
            this.resourceList.refresh();
          })
          .catch((error) => {
            this.snackbar.open(
              this.translate.instant('GITHUB.MESSAGES.DELETED_ALL_ERROR'),
              this.translate.instant('COMMON.CLOSE'),
              { duration: 5000 }
            );
          })
          .finally(() => {
            this.resourceList.isLoading.set(false);
          });
      }
    });
  }

  syncRepository(repository: GithubRepository): void {
    if (!repository.slug) return;

    this.resourceList.isLoading.set(true);
    this.githubService
      .syncRepository(repository.slug)
      .pipe(finalize(() => this.resourceList.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.snackbar.open(
            this.translate.instant('GITHUB.MESSAGES.SYNC_SUCCESS'),
            this.translate.instant('COMMON.CLOSE'),
            { duration: 3000 }
          );
          this.resourceList.refresh();
        },
        error: (error) => {
          this.snackbar.open(
            error.error?.message ||
              this.translate.instant('GITHUB.MESSAGES.SYNC_ERROR'),
            this.translate.instant('COMMON.CLOSE'),
            { duration: 5000 }
          );
        }
      });
  }

  syncFromGithub(): void {
    this.isSyncing.set(true);
    this.githubService
      .syncFromGithub()
      .pipe(finalize(() => this.isSyncing.set(false)))
      .subscribe({
        next: (result) => {
          // this.snackbar.open(
          //   this.translate.instant('GITHUB.MESSAGES.SYNC_FROM_GITHUB_SUCCESS', {
          //     count: result.synced
          //   }),
          //   this.translate.instant('COMMON.CLOSE'),
          //   { duration: 3000 }
          // );
          this.showMessage(result.message);
          this.resourceList.refresh();
        },
        error: (error) => {
          this.showMessage(error.error.message);
        }
      });
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }
}
