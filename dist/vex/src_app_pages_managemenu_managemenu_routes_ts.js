"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_managemenu_managemenu_routes_ts"],{

/***/ 56972:
/*!************************************!*\
  !*** ./src/app/interfaces/Menu.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuFormlyFields: () => (/* binding */ MenuFormlyFields),
/* harmony export */   getManageMenuFiltersFormlyFields: () => (/* binding */ getManageMenuFiltersFormlyFields),
/* harmony export */   getMenuFormlyFields: () => (/* binding */ getMenuFormlyFields)
/* harmony export */ });
const MenuFormlyFields = [{
  key: 'name',
  type: 'input',
  props: {
    label: 'Menu Name',
    placeholder: 'Enter the menu name',
    required: true,
    minLength: 2,
    maxLength: 50
  },
  validation: {
    messages: {
      required: 'Menu name is required',
      minlength: 'Menu name must be at least 2 characters',
      maxlength: 'Menu name cannot exceed 50 characters'
    }
  }
}, {
  key: 'icon',
  type: 'input',
  props: {
    label: 'Icon',
    placeholder: 'Enter icon name (e.g., mat:home)',
    required: true,
    minLength: 4,
    maxLength: 50
  },
  validation: {
    messages: {
      required: 'Icon is required',
      minlength: 'Icon name must be at least 4 characters',
      maxlength: 'Icon name cannot exceed 50 characters'
    }
  }
}, {
  key: 'color',
  type: 'input',
  props: {
    label: 'Color CSS Class',
    placeholder: 'Enter CSS color class (e.g., bg-blue-600)',
    required: true,
    minLength: 5,
    maxLength: 30
  },
  validation: {
    messages: {
      required: 'Color class is required',
      minlength: 'Color class must be at least 5 characters',
      maxlength: 'Color class cannot exceed 30 characters'
    }
  }
}, {
  key: 'route',
  type: 'input',
  props: {
    label: 'Route',
    placeholder: 'Enter the route path (e.g., /index/dashboard)',
    required: true,
    minLength: 2,
    maxLength: 100
  },
  validation: {
    messages: {
      required: 'Route is required',
      minlength: 'Route must be at least 2 characters',
      maxlength: 'Route cannot exceed 100 characters'
    }
  }
}, {
  key: 'category_id',
  type: 'select',
  props: {
    label: 'Category',
    placeholder: 'Select menu category',
    required: true
  },
  validation: {
    messages: {
      required: 'Category is required'
    }
  }
}, {
  key: 'roles',
  type: 'select',
  props: {
    label: 'Roles',
    placeholder: 'Select roles that can access this menu',
    required: true,
    multiple: true
  },
  validation: {
    messages: {
      required: 'At least one role must be selected'
    }
  }
}, {
  key: 'disable',
  type: 'slide-toggle',
  props: {
    label: 'disable'
  }
}];
function getMenuFormlyFields(translate, rolesList, categoriesList, Save, Cancel, isDisabled) {
  const roleOptions = rolesList.map(role => ({
    value: role.name,
    label: role.name // Le libellé affiché
  }));
  const categoryOptions = categoriesList.map(category => ({
    value: category.id,
    label: category.name
  }));
  return [{
    key: 'name',
    type: 'input',
    props: {
      label: translate.instant('menu.label.name'),
      placeholder: translate.instant('menu.label.name'),
      required: true,
      minLength: 2,
      maxLength: 50
    },
    validation: {
      messages: {
        required: 'Menu name is required',
        minlength: 'Menu name must be at least 2 characters',
        maxlength: 'Menu name cannot exceed 50 characters'
      }
    }
  }, {
    key: 'icon',
    type: 'material-icon-select',
    props: {
      label: translate.instant('menu.label.icon'),
      required: true
    },
    validation: {
      messages: {
        required: 'Icon is required'
      }
    }
  }, {
    key: 'color',
    type: 'tailwind-color-select',
    props: {
      label: translate.instant('menu.label.color'),
      required: true
    },
    validation: {
      messages: {
        required: 'Color class is required'
      }
    }
  }, {
    key: 'route',
    type: 'input',
    props: {
      label: translate.instant('menu.label.route'),
      placeholder: translate.instant('menu.label.route'),
      required: true,
      minLength: 2,
      maxLength: 100
    },
    validation: {
      messages: {
        required: 'Route is required',
        minlength: 'Route must be at least 2 characters',
        maxlength: 'Route cannot exceed 100 characters'
      }
    }
  }, {
    key: 'category_id',
    type: 'select',
    props: {
      label: translate.instant('menu.label.category'),
      required: true,
      options: categoryOptions
    },
    validation: {
      messages: {
        required: 'Category is required'
      }
    }
  }, {
    key: 'roles',
    type: 'select',
    props: {
      label: translate.instant('menu.label.roles'),
      required: true,
      multiple: true,
      options: roleOptions
    },
    validation: {
      messages: {
        required: 'At least one role must be selected'
      }
    }
  }, {
    key: 'disable',
    type: 'slide-toggle',
    props: {
      label: translate.instant('menu.label.disable')
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
function getManageMenuFiltersFormlyFields(categoriesList, rolesList, categoryAllLabel, roleAllLabel, categoryLabel, roleLabel, onCategoryChange, onRoleChange) {
  const categoryOptions = [{
    value: null,
    label: categoryAllLabel
  }, ...categoriesList.map(category => ({
    value: category.id,
    label: category.name
  }))];
  const roleOptions = [{
    value: null,
    label: roleAllLabel
  }, ...rolesList.map(role => ({
    value: role.name,
    label: role.name
  }))];
  return [{
    fieldGroupClassName: 'flex items-center gap-4 mb-2',
    fieldGroup: [{
      key: 'category_filter',
      type: 'select',
      className: 'w-64',
      props: {
        label: categoryLabel,
        appearance: 'outline',
        options: categoryOptions,
        change: (field, $event) => {
          onCategoryChange($event.value);
        }
      }
    }, {
      key: 'role_filter',
      type: 'select',
      className: 'w-64',
      props: {
        label: roleLabel,
        appearance: 'outline',
        options: roleOptions,
        change: (field, $event) => {
          onRoleChange($event.value);
        }
      }
    }]
  }];
}

/***/ }),

/***/ 97702:
/*!*********************************************************!*\
  !*** ./src/app/pages/managemenu/categories.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoriesResolver: () => (/* binding */ categoriesResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
// src/app/pages/managemenu/categories.resolver.ts





/**
 * Resolver for categories data
 * Loads categories before route activation
 */
const categoriesResolver = () => {
  const genericApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_0__.GenericApiService);
  const current_page = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.current_page;
  const pagesize = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pageSize;
  return genericApi.getAll('categories', current_page, pagesize).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
    return response;
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(_error => {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
      data: [],
      meta: {
        total: 0,
        page: 1,
        per_page: 5
      }
    });
  }));
};

/***/ }),

/***/ 29478:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/managemenu/create-update-menu/create-update-menu.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUpdateMenuComponent: () => (/* binding */ CreateUpdateMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var src_app_interfaces_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/Menu */ 56972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);














class CreateUpdateMenuComponent {
  constructor(dialogRef, data, translate) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.translate = translate;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    this.model = {
      name: '',
      icon: '',
      color: '',
      route: '',
      roles: [],
      category_id: 1,
      disable: 0
    };
    this.fields = [];
    this.isEditMode = false;
    this.mode = 'create';
  }
  ngOnInit() {
    this.mode = this.data.mode;
    this.initForm();
    if (this.data.menu) {
      this.isEditMode = true;
      this.updateMode();
    }
  }
  initForm() {
    this.fields = (0,src_app_interfaces_Menu__WEBPACK_IMPORTED_MODULE_0__.getMenuFormlyFields)(this.translate, this.data.roles, this.data.categories, () => this.onSubmit(), () => this.onCancel(), () => this.form.invalid);
  }
  updateMode() {
    if (this.data.menu) {
      const menu = this.data.menu;
      let selectedRoles = [];
      if (menu.roles && Array.isArray(menu.roles)) {
        selectedRoles = menu.roles.map(role => typeof role === 'object' && 'name' in role ? role.name : role);
      }
      this.model = {
        id: menu.id,
        slug: menu.slug,
        name: menu.name,
        icon: menu.icon,
        color: menu.color,
        route: menu.route,
        roles: selectedRoles,
        category_id: menu.category_id,
        disable: menu.disable || 0,
        queryParams: menu.queryParams
      };
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.dialogRef.close(this.model);
  }
  onCancel() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function CreateUpdateMenuComponent_Factory(t) {
      return new (t || CreateUpdateMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CreateUpdateMenuComponent,
      selectors: [["app-create-update-menu"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 11,
      consts: [[1, "p-6"], [1, "text-xl", "font-bold", "mb-4"], [3, "form", "fields", "model"]],
      template: function CreateUpdateMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "formly-form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.mode === "update" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "menu_action.edit") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, "menu_action.create"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "menu.menus"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fields)("model", ctx.model);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__.FormlyForm, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_7__.FormlyMaterialModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 500px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFuYWdlbWVudS9jcmVhdGUtdXBkYXRlLW1lbnUvY3JlYXRlLXVwZGF0ZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 40257:
/*!**********************************************************!*\
  !*** ./src/app/pages/managemenu/managemenu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagemenuComponent: () => (/* binding */ ManagemenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var _create_update_menu_create_update_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-update-menu/create-update-menu.component */ 29478);
/* harmony import */ var src_app_interfaces_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/Menu */ 56972);
/* harmony import */ var src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/Utils */ 18220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var src_app_services_menu_realtime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/menu-realtime.service */ 57637);























function ManagemenuComponent_formly_form_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "formly-form", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fields", ctx_r0.filtersFormlyFields)("model", ctx_r0.filtersModel)("form", ctx_r0.filtersForm);
  }
}
function ManagemenuComponent_vex_generic_resource_list_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "vex-generic-resource-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("action", function ManagemenuComponent_vex_generic_resource_list_5_Template_vex_generic_resource_list_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.handleAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r1.type)("formlyFields", ctx_r1.formlyFields)("dataService", ctx_r1.dataService)("externalFilters", ctx_r1.currentFilters);
  }
}
class ManagemenuComponent {
  get currentRole() {
    return this.route.snapshot.queryParamMap.get('role');
  }
  get currentCategory() {
    const categoryParam = this.route.snapshot.queryParamMap.get('category');
    return categoryParam ? parseInt(categoryParam, 10) : null;
  }
  constructor(genericApi, route, router, dialog, snackbar, authService, translate, cdr, menuRealtimeService, zone) {
    this.genericApi = genericApi;
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.authService = authService;
    this.translate = translate;
    this.cdr = cdr;
    this.menuRealtimeService = menuRealtimeService;
    this.zone = zone;
    this.type = 'menus';
    this.currentFilters = {};
    this.formlyFields = [];
    this.filtersFormlyFields = [];
    this.filtersModel = {};
    this.filtersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
    this.searchTerm = '';
    this.rolesList = [];
    this.categoriesList = [];
    this.links = [];
    this.categoryLinks = [];
    this.isFirstLoad = true;
    this.dataService = src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.createDataService(this.type, this.genericApi);
  }
  ngOnInit() {
    this.formlyFields = src_app_interfaces_Menu__WEBPACK_IMPORTED_MODULE_2__.MenuFormlyFields;
    this.loadRequiredData();
    this.setupRouteListener();
    this.translate.onLangChange.subscribe(() => {
      this.setupFiltersFormly();
    });
    this.initMenuUpdatesListener();
  }
  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.menuUpdateSub) {
      this.menuUpdateSub.unsubscribe();
    }
  }
  loadRequiredData() {
    const rolesData = this.route.snapshot.data['roles'];
    const categoriesData = this.route.snapshot.data['categories'];
    if (rolesData && rolesData.data) {
      this.rolesList = rolesData.data;
    } else {
      this.rolesList = [];
    }
    if (categoriesData && categoriesData.data) {
      this.categoriesList = categoriesData.data;
    } else {
      this.categoriesList = [];
    }
    this.updateFormlyFieldsWithRolesAndCategories();
    this.setupFiltersFormly();
    // Déclencher manuellement la détection des changements
    this.cdr.detectChanges();
  }
  updateFormlyFieldsWithRolesAndCategories() {
    const roleOptions = this.rolesList.map(role => ({
      value: role.name,
      label: role.name
    }));
    const categoryOptions = this.categoriesList.map(category => ({
      value: category.id,
      label: category.name
    }));
    this.formlyFields = this.formlyFields.map(field => {
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
  setupFiltersFormly() {
    this.filtersFormlyFields = (0,src_app_interfaces_Menu__WEBPACK_IMPORTED_MODULE_2__.getManageMenuFiltersFormlyFields)(this.categoriesList, this.rolesList, this.translate.instant('global.types.toutes_les_categories'), this.translate.instant('global.types.tous_les_roles'), this.translate.instant('menu.filter_by_category'), this.translate.instant('menu.filter_by_role'), categoryId => this.onCategoryFilterChange(categoryId), roleName => this.onRoleFilterChange(roleName));
    // Initialiser le modèle avec les valeurs actuelles
    this.filtersModel = {
      category_filter: this.currentCategory,
      role_filter: this.currentRole
    };
  }
  setupRouteListener() {
    this.routeSub = this.route.queryParams.subscribe(params => {
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
  handleAction(event) {
    switch (event.action) {
      case 'create':
        this.openCreateMenuDialog();
        break;
      case 'edit':
        if (event.row) {
          this.openUpdateMenuDialog(event.row);
        }
        break;
    }
  }
  openCreateMenuDialog() {
    const dialogData = {
      mode: 'create',
      menu: undefined,
      roles: this.rolesList,
      categories: this.categoriesList
    };
    const dialogRef = this.dialog.open(_create_update_menu_create_update_menu_component__WEBPACK_IMPORTED_MODULE_1__.CreateUpdateMenuComponent, {
      data: dialogData,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createMenu(result);
      }
    });
  }
  openUpdateMenuDialog(menu) {
    const dialogData = {
      mode: 'update',
      menu: menu,
      roles: this.rolesList,
      categories: this.categoriesList
    };
    const dialogRef = this.dialog.open(_create_update_menu_create_update_menu_component__WEBPACK_IMPORTED_MODULE_1__.CreateUpdateMenuComponent, {
      data: dialogData,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && menu.slug) {
        this.updateMenu(menu.slug, result);
      }
    });
  }
  createMenu(menuData) {
    const optimisticMenu = {
      ...menuData,
      id: Date.now(),
      slug: 'temp-' + Date.now()
    };
    const originalData = [...this.resourceList.data];
    this.resourceList.data = [...this.resourceList.data, optimisticMenu];
    this.genericApi.createJson(this.type, menuData).subscribe({
      next: response => {
        if (response && response.data) {
          this.resourceList.data = this.resourceList.data.map(menu => menu.slug === optimisticMenu.slug ? response.data : menu);
          this.resourceList.refresh();
          setTimeout(() => {
            const userRoles = this.authService.getRolesNames();
            this.authService.getMenuByRole(userRoles);
          }, 1000);
          this.showMessage(response.message || '');
        }
      },
      error: error => {
        this.resourceList.data = originalData;
        this.showMessage(error.error?.message || 'error.create_failed');
      }
    });
  }
  updateMenu(slug, menuData) {
    const menuIndex = this.resourceList.data.findIndex(m => m.slug === slug);
    if (menuIndex === -1) return;
    const originalMenu = this.resourceList.data[menuIndex];
    const updatedMenu = {
      ...originalMenu,
      ...menuData
    };
    const originalData = [...this.resourceList.data];
    this.resourceList.data[menuIndex] = updatedMenu;
    this.genericApi.updateJson(this.type, slug, menuData).subscribe({
      next: response => {
        if (response && response.data) {
          this.resourceList.data[menuIndex] = response.data;
          this.resourceList.refresh();
          setTimeout(() => {
            const userRoles = this.authService.getRolesNames();
            this.authService.getMenuByRole(userRoles);
          }, 1000);
          this.showMessage(response.message || '');
        }
      },
      error: error => {
        this.resourceList.data = originalData;
        this.showMessage(error.error?.message || 'error.update_failed');
      }
    });
  }
  onRoleFilterChange(selectedRole) {
    const queryParams = {
      ...this.route.snapshot.queryParams
    };
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
  onCategoryFilterChange(selectedCategory) {
    const queryParams = {
      ...this.route.snapshot.queryParams
    };
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
  showMessage(params) {
    if (params) {
      this.snackbar.open(params, 'Fermer', {
        duration: 5000
      });
    }
  }
  initMenuUpdatesListener() {
    this.menuUpdateSub = this.menuRealtimeService.getMenuUpdates().subscribe({
      next: data => {
        this.zone.run(() => {
          if (this.resourceList) {
            this.resourceList.refresh();
            const actionMessage = data.action === 'created' ? 'Menu créé' : data.action === 'deleted' ? 'Menu supprimé' : 'Menu mis à jour';
            this.showMessage(`${actionMessage} par l'administrateur`);
          }
        });
      },
      error: error => {
        console.error('Error listening for menu updates:', error);
      }
    });
  }
  static {
    this.ɵfac = function ManagemenuComponent_Factory(t) {
      return new (t || ManagemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_4__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_menu_realtime_service__WEBPACK_IMPORTED_MODULE_6__.MenuRealtimeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ManagemenuComponent,
      selectors: [["app-managemenu"]],
      viewQuery: function ManagemenuComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 5,
      consts: [[1, "p-6"], [1, "text-2xl", "font-bold", "mb-4"], [3, "fields", "model", "form", 4, "ngIf"], [3, "type", "formlyFields", "dataService", "externalFilters", "action", 4, "ngIf"], [3, "fields", "model", "form"], [3, "type", "formlyFields", "dataService", "externalFilters", "action"]],
      template: function ManagemenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ManagemenuComponent_formly_form_4_Template, 1, 3, "formly-form", 2)(5, ManagemenuComponent_vex_generic_resource_list_5_Template, 1, 4, "vex-generic-resource-list", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "menu.managemenu"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.resourceList && ctx.resourceList.data && ctx.resourceList.data.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataService);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_18__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_18__.FormlyForm, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_19__.FormlyMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 80206:
/*!*******************************************************!*\
  !*** ./src/app/pages/managemenu/managemenu.routes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   managemenuRoutes: () => (/* binding */ managemenuRoutes)
/* harmony export */ });
/* harmony import */ var _managemenu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managemenu.component */ 40257);
/* harmony import */ var _roles_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.resolver */ 73187);
/* harmony import */ var _categories_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.resolver */ 97702);



const managemenuRoutes = [{
  path: '',
  component: _managemenu_component__WEBPACK_IMPORTED_MODULE_0__.ManagemenuComponent,
  resolve: {
    roles: _roles_resolver__WEBPACK_IMPORTED_MODULE_1__.rolesResolver,
    categories: _categories_resolver__WEBPACK_IMPORTED_MODULE_2__.categoriesResolver
  }
}];

/***/ }),

/***/ 73187:
/*!****************************************************!*\
  !*** ./src/app/pages/managemenu/roles.resolver.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rolesResolver: () => (/* binding */ rolesResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
// src/app/pages/managemenu/roles.resolver.ts





/**
 * Resolver for roles data
 * Loads roles before route activation
 */
const rolesResolver = () => {
  const genericApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_0__.GenericApiService);
  const current_page = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.current_page;
  const pagesize = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.pageSize;
  return genericApi.getAll('roles', current_page, pagesize).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
    return response;
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(_error => {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
      data: [],
      meta: {
        total: 0,
        page: 1,
        per_page: 5
      }
    });
  }));
};

/***/ })

}]);
//# sourceMappingURL=src_app_pages_managemenu_managemenu_routes_ts.js.map