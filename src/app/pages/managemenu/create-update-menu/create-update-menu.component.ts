import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Menu, getMenuFormlyFields } from 'src/app/interfaces/Menu';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Roles } from 'src/app/interfaces/Roles';
import { Category } from 'src/app/interfaces/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';

@Component({
  selector: 'app-create-update-menu',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TranslateModule
  ],
  templateUrl: './create-update-menu.component.html',
  styleUrls: ['./create-update-menu.component.scss']
})
export class CreateUpdateMenuComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private translate = inject(TranslateService);
  private genericApi = inject(GenericApiService);
  private snackbar = inject(MatSnackBar);

  form = new FormGroup({});
  model: Partial<Menu> = {
    name: '',
    descriptions: { fr: '', en: '', pt: '' },
    icon: '',
    color: '',
    route: '',
    roles: [],
    category_id: undefined,
    disable: 0
  };
  fields: FormlyFieldConfig[] = [];
  isEditMode = false;
  mode: 'create' | 'update' = 'create';
  isLoading = false;

  rolesList: Roles[] = [];
  categoriesList: Category[] = [];
  menuSlug: string | null = null;

  ngOnInit(): void {
    this.menuSlug = this.route.snapshot.paramMap.get('slug');
    this.mode = this.menuSlug ? 'update' : 'create';
    this.isEditMode = this.mode === 'update';

    // Get roles and categories from resolver
    const rolesData = this.route.snapshot.data['roles'];
    const categoriesData = this.route.snapshot.data['categories'];

    if (rolesData?.data) {
      this.rolesList = rolesData.data as Roles[];
    }
    if (categoriesData?.data) {
      this.categoriesList = categoriesData.data as Category[];
    }

    this.initForm();

    if (this.menuSlug) {
      this.loadMenu();
    }
  }

  private initForm(): void {
    this.fields = getMenuFormlyFields(
      this.translate,
      this.rolesList,
      this.categoriesList,
      () => this.onSubmit(),
      () => this.onCancel(),
      () => this.form.invalid,
      () => this.isLoading
    );
  }

  private loadMenu(): void {
    if (!this.menuSlug) return;

    this.isLoading = true;
    this.genericApi.getOne<Menu>('menus', this.menuSlug).subscribe({
      next: (response: ResponseGenericApi<Menu>) => {
        if (response?.data) {
          this.populateForm(response.data as Menu);
        }
        this.isLoading = false;
      },
      error: (error: { error?: { message?: string } }) => {
        this.snackbar.open(
          error.error?.message || 'Erreur lors du chargement du menu',
          'Fermer',
          { duration: 5000 }
        );
        this.isLoading = false;
        this.router.navigate(['/index/managemenu']);
      }
    });
  }

  private populateForm(menu: Menu): void {
    let selectedRoles: string[] = [];
    if (menu.roles && Array.isArray(menu.roles)) {
      selectedRoles = menu.roles.map((role) =>
        typeof role === 'object' && 'name' in role
          ? (role as { name: string }).name
          : (role as string)
      );
    }

    // Le backend renvoie 'descriptions' (objet) et 'description' (string)
    // Pour le formulaire, on utilise 'descriptions'
    const descriptionsObj = menu.descriptions || { fr: '', en: '', pt: '' };

    this.model = {
      id: menu.id,
      slug: menu.slug,
      name: menu.name,
      descriptions: descriptionsObj,
      icon: menu.icon,
      color: menu.color,
      route: menu.route,
      roles: selectedRoles,
      category_id: menu.category_id,
      disable: menu.disable || 0,
      queryParams: menu.queryParams
    };
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    if (this.isEditMode && this.menuSlug) {
      this.genericApi.updateJson('menus', this.menuSlug, this.model).subscribe({
        next: (response) => {
          this.snackbar.open(
            response.message || 'Menu mis à jour avec succès',
            'Fermer',
            { duration: 5000 }
          );
          this.isLoading = false;
          this.router.navigate(['/index/managemenu']);
        },
        error: (error) => {
          this.snackbar.open(
            error.error?.message || 'Erreur lors de la mise à jour',
            'Fermer',
            { duration: 5000 }
          );
          this.isLoading = false;
        }
      });
    } else {
      this.genericApi.createJson('menus', this.model).subscribe({
        next: (response) => {
          this.snackbar.open(
            response.message || 'Menu créé avec succès',
            'Fermer',
            { duration: 5000 }
          );
          this.isLoading = false;
          this.router.navigate(['/index/managemenu']);
        },
        error: (error) => {
          this.snackbar.open(
            error.error?.message || 'Erreur lors de la création',
            'Fermer',
            { duration: 5000 }
          );
          this.isLoading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/index/managemenu']);
  }
}