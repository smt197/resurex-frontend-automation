import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  getManageMenuFiltersFormlyFields,
  Menu,
  MenuFormlyFields
} from 'src/app/interfaces/Menu';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { Roles } from 'src/app/interfaces/Roles';
import { Category } from 'src/app/interfaces/Category';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { Utils } from 'src/app/classes/Utils';
import { Link } from '@vex/interfaces/link.interface';
import { TranslateService } from '@ngx-translate/core';
import { MenuRealtimeService } from 'src/app/services/menu-realtime.service';

@Component({
  selector: 'app-managemenu',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    GenericResourceListComponent
  ],
  templateUrl: './managemenu.component.html'
})
export class ManagemenuComponent implements OnInit, OnDestroy {
  @ViewChild(GenericResourceListComponent)
  public resourceList!: GenericResourceListComponent<Menu>;

  type = 'menus';
  currentFilters: { [key: string]: any } = {};
  formlyFields: FormlyFieldConfig[] = [];
  filtersFormlyFields: FormlyFieldConfig[] = [];
  filtersModel: any = {};
  filtersForm = new FormGroup({});
  searchTerm: string = '';
  dataService: ResourceService<Menu>;
  rolesList: Roles[] = [];
  categoriesList: Category[] = [];
  links: Link[] = [];
  categoryLinks: Link[] = [];

  private routeSub!: Subscription;
  private menuUpdateSub!: Subscription;
  private isFirstLoad = true;

  get currentRole(): string | null {
    return this.route.snapshot.queryParamMap.get('role');
  }

  get currentCategory(): number | null {
    const categoryParam = this.route.snapshot.queryParamMap.get('category');
    return categoryParam ? parseInt(categoryParam, 10) : null;
  }

  constructor(
    private genericApi: GenericApiService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
    private menuRealtimeService: MenuRealtimeService,
    private zone: NgZone
  ) {
    this.dataService = Utils.createDataService<Menu>(
      this.type,
      this.genericApi
    );
  }

  ngOnInit(): void {
    this.formlyFields = MenuFormlyFields;
    this.loadRequiredData();
    this.setupRouteListener();

    this.translate.onLangChange.subscribe(() => {
      this.setupFiltersFormly();
    });

    this.initMenuUpdatesListener();
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.menuUpdateSub) {
      this.menuUpdateSub.unsubscribe();
    }
  }

  private loadRequiredData(): void {
    const rolesData = this.route.snapshot.data['roles'];
    const categoriesData = this.route.snapshot.data['categories'];

    if (rolesData && rolesData.data) {
      this.rolesList = rolesData.data as Roles[];
    } else {
      this.rolesList = [];
    }

    if (categoriesData && categoriesData.data) {
      this.categoriesList = categoriesData.data as Category[];
    } else {
      this.categoriesList = [];
    }

    this.updateFormlyFieldsWithRolesAndCategories();
    this.setupFiltersFormly();

    // Déclencher manuellement la détection des changements
    this.cdr.detectChanges();
  }

  private updateFormlyFieldsWithRolesAndCategories(): void {
    const roleOptions = this.rolesList.map((role) => ({
      value: role.name,
      label: role.name
    }));

    const categoryOptions = this.categoriesList.map((category) => ({
      value: category.id,
      label: category.name
    }));

    this.formlyFields = this.formlyFields.map((field) => {
      if (field.key === 'roles') {
        return {
          ...field,
          props: {
            ...field.props,
            options: roleOptions
          }
        };
      }
      if (field.key === 'category_id') {
        return {
          ...field,
          props: {
            ...field.props,
            options: categoryOptions
          }
        };
      }
      return field;
    });
  }

  private setupFiltersFormly(): void {
    this.filtersFormlyFields = getManageMenuFiltersFormlyFields(
      this.categoriesList,
      this.rolesList,
      this.translate.instant('global.types.toutes_les_categories'),
      this.translate.instant('global.types.tous_les_roles'),
      this.translate.instant('menu.filter_by_category'),
      this.translate.instant('menu.filter_by_role'),
      (categoryId) => this.onCategoryFilterChange(categoryId),
      (roleName) => this.onRoleFilterChange(roleName)
    );

    // Initialiser le modèle avec les valeurs actuelles
    this.filtersModel = {
      category_filter: this.currentCategory,
      role_filter: this.currentRole
    };
  }

  private setupRouteListener(): void {
    this.routeSub = this.route.queryParams.subscribe((params) => {
      const role = params['role'];
      const category = params['category'];

      this.currentFilters = {};
      if (role) this.currentFilters['roles'] = role;
      if (category) this.currentFilters['category_id'] = category;

      this.searchTerm = '';

      if (this.resourceList && !this.isFirstLoad) {
        this.resourceList.refresh();
      }
      this.isFirstLoad = false;
    });
  }

  handleAction(event: ActionEvent<Menu>) {
    switch (event.action) {
      case 'create':
        this.navigateToCreateMenu();
        break;
      case 'edit':
        if (event.row) {
          this.navigateToEditMenu(event.row);
        }
        break;
    }
  }

  navigateToCreateMenu(): void {
    this.router.navigate(['/index/managemenu/create']);
  }

  navigateToEditMenu(menu: Menu): void {
    this.router.navigate(['/index/managemenu/edit', menu.slug]);
  }

  onRoleFilterChange(selectedRole: string | null): void {
    const queryParams = { ...this.route.snapshot.queryParams };

    if (selectedRole) {
      queryParams['role'] = selectedRole;
    } else {
      delete queryParams['role'];
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams
    });
  }

  onCategoryFilterChange(selectedCategory: number | null): void {
    const queryParams = { ...this.route.snapshot.queryParams };

    if (selectedCategory) {
      queryParams['category'] = selectedCategory;
    } else {
      delete queryParams['category'];
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams
    });
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }

  private initMenuUpdatesListener(): void {
    this.menuUpdateSub = this.menuRealtimeService.getMenuUpdates().subscribe({
      next: (data) => {
        this.zone.run(() => {
          if (this.resourceList) {
            this.resourceList.refresh();

            const actionMessage =
              data.action === 'created'
                ? 'Menu créé'
                : data.action === 'deleted'
                  ? 'Menu supprimé'
                  : 'Menu mis à jour';
            this.showMessage(`${actionMessage} par l'administrateur`);
          }
        });
      },
      error: (error) => {
        console.error('Error listening for menu updates:', error);
      }
    });
  }
}