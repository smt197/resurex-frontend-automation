"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_category-menu_category_route_ts"],{

/***/ 71747:
/*!****************************************!*\
  !*** ./src/app/interfaces/Category.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryFormlyFields: () => (/* binding */ CategoryFormlyFields),
/* harmony export */   getCategoryFormlyFields: () => (/* binding */ getCategoryFormlyFields)
/* harmony export */ });
const CategoryFormlyFields = [{
  key: 'name',
  type: 'input',
  props: {
    label: 'Category Name',
    placeholder: 'Enter the category name',
    required: true,
    minLength: 2,
    maxLength: 50
  },
  validation: {
    messages: {
      required: 'Category name is required',
      minlength: 'Category name must be at least 2 characters',
      maxlength: 'Category name cannot exceed 50 characters'
    }
  }
}, {
  key: 'order',
  type: 'input',
  props: {
    label: 'Order',
    placeholder: 'Enter display order',
    type: 'number',
    min: 0,
    max: 999
  }
}, {
  key: 'icon',
  type: 'input',
  props: {
    label: 'Icon',
    placeholder: 'Enter icon name (e.g., mat:folder)',
    required: false
  }
}, {
  key: 'navigation_type',
  type: 'select',
  props: {
    label: 'Navigation Type',
    required: true,
    options: [{
      value: 'subheading',
      label: 'Subheading'
    }, {
      value: 'dropdown',
      label: 'Dropdown'
    }]
  },
  validation: {
    messages: {
      required: 'Navigation type is required'
    }
  }
}];
function getCategoryFormlyFields(translate, Save, Cancel, isDisabled, existingCategories = []) {
  return [{
    key: 'name',
    type: 'input',
    props: {
      label: translate.instant('categorie.label.name'),
      placeholder: translate.instant('categorie.label.name'),
      required: true,
      minLength: 2,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'Category name is required',
        minlength: 'Category name must be at least 2 characters',
        maxlength: 'Category name cannot exceed 50 characters'
      }
    }
  }, {
    key: 'position_reference_id',
    type: 'select',
    props: {
      label: translate.instant('categorie.label.position_reference'),
      options: existingCategories.map(cat => ({
        value: cat.id,
        label: cat.name
      }))
    }
  }, {
    key: 'position_type',
    type: 'select',
    props: {
      label: translate.instant('categorie.label.position_type'),
      options: [{
        value: 'before',
        label: translate.instant('categorie.position_type.before')
      }, {
        value: 'after',
        label: translate.instant('categorie.position_type.after')
      }]
    },
    expressions: {
      hide: '!model.position_reference_id'
    }
  }, {
    key: 'order',
    type: 'input',
    props: {
      label: translate.instant('categorie.label.order'),
      type: 'number',
      min: 0,
      max: 999
    },
    expressions: {
      hide: field => !!field.model.position_reference_id // plus robuste
    }
  }, {
    key: 'icon',
    type: 'material-icon-select',
    props: {
      label: translate.instant('categorie.label.icon'),
      required: false
    }
  }, {
    key: 'navigation_type',
    type: 'select',
    props: {
      label: translate.instant('categorie.label.navigation_type'),
      required: true,
      options: [{
        value: 'subheading',
        label: translate.instant('categorie.navigation_type.subheading')
      }, {
        value: 'dropdown',
        label: translate.instant('categorie.navigation_type.dropdown')
      }]
    },
    validation: {
      messages: {
        required: 'Navigation type is required'
      }
    }
  }, {
    fieldGroupClassName: 'flex justify-end gap-2 mt-4',
    fieldGroup: [{
      type: 'button',
      props: {
        text: translate.get('global.cancel'),
        color: 'default',
        type: 'button',
        className: 'bg-white text-black mat-flat-button',
        onClick: () => Cancel()
      }
    }, {
      type: 'button',
      props: {
        text: translate.get('global.save'),
        color: 'primary',
        type: 'button',
        className: 'mat-flat-button',
        onClick: () => Save()
      },
      expressionProperties: {
        'props.disabled': () => isDisabled()
      }
    }]
  }];
}

/***/ }),

/***/ 8692:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/category-menu/category-create-update/category-create-update.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryCreateUpdateComponent: () => (/* binding */ CategoryCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 59864);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-formly/material/checkbox */ 47405);
/* harmony import */ var _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-formly/material/input */ 1346);
/* harmony import */ var _ngx_formly_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-formly/material/select */ 96110);
/* harmony import */ var src_app_interfaces_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/Category */ 71747);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
























function CategoryCreateUpdateComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.model.icon);
  }
}
function CategoryCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.model.name, " ");
  }
}
function CategoryCreateUpdateComponent_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.isCreateMode() ? "New Category" : "Edit Category", " ");
  }
}
class CategoryCreateUpdateComponent {
  constructor(defaults, dialogRef, translate, cdr) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.translate = translate;
    this.cdr = cdr;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
    this.model = {
      name: '',
      order: 0,
      icon: undefined,
      navigation_type: 'subheading',
      position_reference_id: undefined,
      position_type: undefined
    };
    this.fields = [];
    this.mode = 'create';
  }
  ngOnInit() {
    this.mode = this.init();
    if (this.mode === 'update') {
      this.updateMode();
    }
    this.fields = (0,src_app_interfaces_Category__WEBPACK_IMPORTED_MODULE_0__.getCategoryFormlyFields)(this.translate, () => this.save(), () => this.cancel(), () => this.form.invalid, this.defaults.existingCategories || []);
    // Déclencher manuellement la détection des changements
    this.cdr.detectChanges();
  }
  init() {
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
    const category = {
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
      const category = {
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
  static {
    this.ɵfac = function CategoryCreateUpdateComponent_Factory(t) {
      return new (t || CategoryCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CategoryCreateUpdateComponent,
      selectors: [["vex-category-create-update"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 6,
      consts: [[1, "flex", "flex-col", "h-full"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["class", "mr-5", 4, "ngIf"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "w-full"], [3, "form", "model", "fields"], [1, "mr-5"], [1, "headline", "m-0", "flex-auto"]],
      template: function CategoryCreateUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CategoryCreateUpdateComponent_div_2_Template, 3, 1, "div", 2)(3, CategoryCreateUpdateComponent_h2_3_Template, 2, 1, "h2", 3)(4, CategoryCreateUpdateComponent_h2_4_Template, 2, 1, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-divider", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-dialog-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "formly-form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model.icon && ctx.model.icon !== undefined && ctx.model.icon.trim() !== "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.model.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.form)("model", ctx.model)("fields", ctx.fields);
        }
      },
      dependencies: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_12__.FormlyForm, _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_13__.FormlyMatInputModule, _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.FormlyMatCheckboxModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _ngx_formly_material_select__WEBPACK_IMPORTED_MODULE_17__.FormlyMatSelectModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule],
      styles: [".avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcnktbWVudS9jYXRlZ29yeS1jcmVhdGUtdXBkYXRlL2NhdGVnb3J5LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 51291:
/*!****************************************************************!*\
  !*** ./src/app/pages/category-menu/category-menu.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryMenuComponent: () => (/* binding */ CategoryMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var src_app_interfaces_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/Category */ 71747);
/* harmony import */ var _category_create_update_category_create_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-create-update/category-create-update.component */ 8692);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/Utils */ 18220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);












class CategoryMenuComponent {
  constructor(genericApi, dialog, snackbar, authService) {
    this.genericApi = genericApi;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.authService = authService;
    this.type = 'categories';
    this.formlyFields = [];
    this.dataService = src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.createDataService(this.type, this.genericApi);
  }
  ngOnInit() {
    this.formlyFields = src_app_interfaces_Category__WEBPACK_IMPORTED_MODULE_1__.CategoryFormlyFields;
  }
  handleAction(event) {
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
    this.dialog.open(_category_create_update_category_create_update_component__WEBPACK_IMPORTED_MODULE_2__.CategoryCreateUpdateComponent, {
      data: dialogData,
      width: '650px'
    }).afterClosed().subscribe(result => {
      if (result && result.model) {
        this.genericApi.create(this.type, this.createFormData(result.model)).subscribe(res => {
          if (res) {
            this.snackbar.open(res.message ?? 'Category created successfully!', 'OK', {
              duration: 3000
            });
            this.resourceList.refresh();
          }
        });
      }
    });
  }
  openUpdateCategoryDialog(category) {
    const dialogData = {
      mode: 'update',
      category: category,
      existingCategories: this.resourceList.data.filter(c => c.id !== category.id)
    };
    this.dialog.open(_category_create_update_category_create_update_component__WEBPACK_IMPORTED_MODULE_2__.CategoryCreateUpdateComponent, {
      data: dialogData,
      width: '650px'
    }).afterClosed().subscribe(updatedCategory => {
      if (updatedCategory && updatedCategory.model) {
        const categoryIndex = this.resourceList.data.findIndex(c => c.id === category.id);
        if (categoryIndex === -1) {
          return;
        }
        const originalCategory = this.resourceList.data[categoryIndex];
        const optimisticCategory = {
          ...originalCategory,
          ...updatedCategory.model
        };
        const currentData = [...this.resourceList.data];
        currentData[categoryIndex] = optimisticCategory;
        this.resourceList.data = currentData;
        this.genericApi.update(this.type, category.slug, this.createFormData(updatedCategory.model)).subscribe({
          next: res => {
            if (res && res.data && !Array.isArray(res.data)) {
              const updatedCategoryFromServer = res.data;
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
          error: err => {
            const currentData = [...this.resourceList.data];
            currentData[categoryIndex] = originalCategory;
            this.resourceList.data = currentData;
            this.showMessage(err.error?.message || '');
          }
        });
      }
    });
  }
  createFormData(category) {
    const formData = new FormData();
    formData.append('name', category.name || '');
    formData.append('order', category.order?.toString() || '0');
    formData.append('icon', category.icon || '');
    formData.append('navigation_type', category.navigation_type || 'subheading');
    if (category.position_reference_id) {
      formData.append('position_reference_id', category.position_reference_id.toString());
    }
    if (category.position_type) {
      formData.append('position_type', category.position_type);
    }
    return formData;
  }
  showMessage(params) {
    if (params) {
      this.snackbar.open(params, 'Fermer', {
        duration: 5000
      });
    }
  }
  static {
    this.ɵfac = function CategoryMenuComponent_Factory(t) {
      return new (t || CategoryMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_4__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CategoryMenuComponent,
      selectors: [["vex-category-menu"]],
      viewQuery: function CategoryMenuComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 6,
      consts: [[1, "p-6"], [1, "text-2xl", "font-bold", "mb-4"], [3, "type", "formlyFields", "dataService", "action"]],
      template: function CategoryMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "vex-generic-resource-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function CategoryMenuComponent_Template_vex_generic_resource_list_action_4_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "menu.categories"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.type)("formlyFields", ctx.formlyFields)("dataService", ctx.dataService);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91143:
/*!*******************************************************!*\
  !*** ./src/app/pages/category-menu/category.route.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categorymenuRoutes: () => (/* binding */ categorymenuRoutes)
/* harmony export */ });
/* harmony import */ var _category_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-menu.component */ 51291);

const categorymenuRoutes = [{
  path: '',
  component: _category_menu_component__WEBPACK_IMPORTED_MODULE_0__.CategoryMenuComponent
}];

/***/ })

}]);
//# sourceMappingURL=src_app_pages_category-menu_category_route_ts.js.map