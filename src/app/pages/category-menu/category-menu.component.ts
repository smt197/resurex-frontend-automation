import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';

import { Category, CategoryFormlyFields } from 'src/app/interfaces/Category';
import { CategoryCreateUpdateComponent } from './category-create-update/category-create-update.component';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { TranslateModule } from '@ngx-translate/core';
import { Utils } from 'src/app/classes/Utils';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'vex-category-menu',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent, TranslateModule],
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.scss'
})
export class CategoryMenuComponent implements OnInit {
  type = 'categories';
  dataService: ResourceService<Category>;
  formlyFields: FormlyFieldConfig[] = [];
  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<Category>;

  constructor(
    private genericApi: GenericApiService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private authService: AuthService
  ) {
    this.dataService = Utils.createDataService<Category>(
      this.type,
      this.genericApi
    );
  }

  ngOnInit(): void {
    this.formlyFields = CategoryFormlyFields;
  }

  handleAction(event: ActionEvent<Category>) {
    switch (event.action) {
      case 'create':
        this.openCreateCategoryDialog();
        break;
      case 'edit':
        if (event.row) {
          this.openUpdateCategoryDialog(event.row);
        }
        break;
    }
  }

  openCreateCategoryDialog() {
    const dialogData = {
      mode: 'create',
      existingCategories: this.resourceList.data
    };

    this.dialog
      .open(CategoryCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((result) => {
        if (result && result.model) {
          this.genericApi
            .create<Category>(this.type, this.createFormData(result.model))
            .subscribe((res) => {
              if (res) {
                this.snackbar.open(
                  res.message ?? 'Category created successfully!',
                  'OK',
                  { duration: 3000 }
                );
                this.resourceList.refresh();
              }
            });
        }
      });
  }

  openUpdateCategoryDialog(category: Category) {
    const dialogData = {
      mode: 'update',
      category: category,
      existingCategories: this.resourceList.data.filter(c => c.id !== category.id)
    };

    this.dialog
      .open(CategoryCreateUpdateComponent, { data: dialogData, width: '650px' })
      .afterClosed()
      .subscribe((updatedCategory) => {
        if (updatedCategory && updatedCategory.model) {
          const categoryIndex = this.resourceList.data.findIndex(
            (c) => c.id === category.id
          );
          if (categoryIndex === -1) {
            return;
          }

          const originalCategory = this.resourceList.data[categoryIndex];
          const optimisticCategory = {
            ...originalCategory,
            ...updatedCategory.model
          } as Category;

          const currentData = [...this.resourceList.data];
          currentData[categoryIndex] = optimisticCategory;
          this.resourceList.data = currentData;

          this.genericApi
            .update<Category>(
              this.type,
              category.slug,
              this.createFormData(updatedCategory.model)
            )
            .subscribe({
              next: (res) => {
                if (res && res.data && !Array.isArray(res.data)) {
                  const updatedCategoryFromServer = res.data as Category;
                  const currentData = [...this.resourceList.data];
                  currentData[categoryIndex] = updatedCategoryFromServer;
                  this.resourceList.data = currentData;
                  this.resourceList.refresh();
                  setTimeout(() => {
                    const userRoles = this.authService.getRolesNames();
                    this.authService.getMenuByRole(userRoles);
                  }, 1000);

                  this.showMessage(res.message || '');
                } else {
                  const currentData = [...this.resourceList.data];
                  currentData[categoryIndex] = originalCategory;
                  this.resourceList.data = currentData;
                }
              },
              error: (err) => {
                const currentData = [...this.resourceList.data];
                currentData[categoryIndex] = originalCategory;
                this.resourceList.data = currentData;
                this.showMessage(err.error?.message || '');
              }
            });
        }
      });
  }

  private createFormData(category: any): FormData {
    const formData = new FormData();
    formData.append('name', category.name || '');
    formData.append('order', category.order?.toString() || '0');
    formData.append('icon', category.icon || '');
    formData.append(
      'navigation_type',
      category.navigation_type || 'subheading'
    );
    
    if (category.position_reference_id) {
      formData.append('position_reference_id', category.position_reference_id.toString());
    }
    if (category.position_type) {
      formData.append('position_type', category.position_type);
    }
    
    return formData;
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }
}
