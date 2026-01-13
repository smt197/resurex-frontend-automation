import { NgIf } from '@angular/common';
import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatSelectModule } from '@ngx-formly/material/select';

import { Category, getCategoryFormlyFields } from 'src/app/interfaces/Category';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface CategoryCreateUpdateModel {
  name: string;
  order?: number;
  icon?: string;
  navigation_type?: 'subheading' | 'dropdown';
  position_reference_id?: number;
  position_type?: 'before' | 'after';
}

export interface CategoryUpdateData {
  mode: 'create' | 'update';
  category?: Category;
  existingCategories?: Category[];
}

export interface CategoryCreateModel {
  model: CategoryCreateUpdateModel;
}

export interface CategoryUpdateModel {
  id: number;
  slug: string;
  model: CategoryCreateUpdateModel;
}

@Component({
  selector: 'vex-category-create-update',
  templateUrl: './category-create-update.component.html',
  styleUrls: ['./category-create-update.component.scss'],
  standalone: true,
  imports: [
    MatButtonToggleModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormlyModule,
    FormlyMatInputModule,
    FormlyMatCheckboxModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormlyMatSelectModule,
    SharedModule,
    TranslateModule
  ]
})
export class CategoryCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: CategoryCreateUpdateModel = {
    name: '',
    order: 0,
    icon: undefined,
    navigation_type: 'subheading',
    position_reference_id: undefined,
    position_type: undefined
  };
  fields: FormlyFieldConfig[] = [];
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: CategoryUpdateData,
    private dialogRef: MatDialogRef<CategoryCreateUpdateComponent>,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.mode = this.init();
    if (this.mode === 'update') {
      this.updateMode();
    }
    this.fields = getCategoryFormlyFields(
      this.translate,
      () => this.save(),
      () => this.cancel(),
      () => this.form.invalid,
      this.defaults.existingCategories || []
    );

    // Déclencher manuellement la détection des changements
    this.cdr.detectChanges();
  }

  init(): 'create' | 'update' {
    return this.defaults?.mode || 'create';
  }

  updateMode() {
    if (this.defaults.category) {
      this.model = {
        name: this.defaults.category.name,
        order: this.defaults.category.order || 0,
        icon: this.defaults.category.icon || undefined,
        navigation_type: this.defaults.category.navigation_type || 'subheading',
        position_reference_id: this.defaults.category.position_reference_id,
        position_type: this.defaults.category.position_type
      };
    }
  }

  save() {
    if (this.mode === 'create') {
      this.createCategory();
    } else if (this.mode === 'update') {
      this.updateCategory();
    }
  }

  createCategory() {
    const category: CategoryCreateModel = {
      model: {
        ...this.model
      }
    };
    this.dialogRef.close(category);
  }

  updateCategory() {
    if (!this.model) {
      console.error('Model is undefined!');
      return;
    }

    if (this.defaults.category) {
      const category: CategoryUpdateModel = {
        id: this.defaults.category.id,
        slug: this.defaults.category.slug,
        model: this.model
      };
      this.dialogRef.close(category);
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
