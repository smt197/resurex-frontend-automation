"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_permissions_permissions_component_ts"],{

/***/ 93963:
/*!*******************************************!*\
  !*** ./src/app/interfaces/Permissions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsFormlyFields: () => (/* binding */ PermissionsFormlyFields),
/* harmony export */   permissionFormlyFields: () => (/* binding */ permissionFormlyFields)
/* harmony export */ });
const PermissionsFormlyFields = [{
  key: 'name',
  type: 'input',
  props: {
    label: 'Permission Name',
    placeholder: 'Enter the Permission name',
    required: true,
    minLength: 4,
    maxLength: 50
  },
  validation: {
    messages: {
      required: 'Permission name is required',
      minlength: 'Permission name must be at least 4 characters',
      maxlength: 'Permission name cannot exceed 50 characters'
    }
  }
}, {
  key: 'guard_name',
  type: 'input',
  props: {
    label: 'Role Guard Name',
    placeholder: 'Enter the guard name',
    required: true,
    minLength: 4,
    maxLength: 50
  },
  validation: {
    messages: {
      required: 'Guard name is required',
      minlength: 'Guard name must be at least 4 characters',
      maxlength: 'Guard name cannot exceed 50 characters'
    }
  }
}];
const permissionFormlyFields = [{
  key: 'name',
  type: 'input',
  props: {
    label: 'Permission Name',
    placeholder: 'Enter the Permission name',
    required: true,
    minLength: 4,
    maxLength: 50
  },
  validation: {
    messages: {
      required: 'Permission name is required',
      minlength: 'Permission name must be at least 4 characters',
      maxlength: 'Permission name cannot exceed 50 characters'
    }
  }
}
//   {
//     key: 'guard_name',
//     type: 'input',
//     props: {
//       label: 'Permission Guard Name',
//       placeholder: 'Enter the guard name',
//       required: true,
//       minLength: 3,
//       maxLength: 50
//     },
//     validation: {
//       messages: {
//         required: 'Guard name is required',
//         minlength: 'Guard name must be at least 4 characters',
//         maxlength: 'Guard name cannot exceed 50 characters'
//       }
//     }
//   }
];

/***/ }),

/***/ 93813:
/*!********************************************!*\
  !*** ./src/app/models/permission.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Permission: () => (/* binding */ Permission)
/* harmony export */ });
class Permission {
  constructor(permission) {
    this.id = permission.id ?? 0;
    this.name = permission.name;
    this.display_name = permission.display_name || permission.name;
    this.guard_name = permission.guard_name;
  }
}

/***/ }),

/***/ 41502:
/*!******************************************************************************!*\
  !*** ./src/app/pages/permissions/delete-element/delete-element.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteElementComponent: () => (/* binding */ DeleteElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);










function DeleteElementComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Are you sure you want to delete? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" PERMISSIONS: ", ctx_r0.getSinglePermissionName(), " ");
  }
}
function DeleteElementComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Are you sure you want to delete all permissions? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NUMBERS: ", ctx_r1.getSinglePermissionName(), " ");
  }
}
class DeleteElementComponent {
  constructor(defaults, dialogRef) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
  }
  send() {
    this.dialogRef.close(this.defaults);
  }
  isSinglePermission() {
    return !Array.isArray(this.defaults);
  }
  getSinglePermissionName() {
    if (this.isSinglePermission()) {
      const role = this.defaults;
      return `${role.name}`;
    }
    const roles = this.defaults;
    return roles.length + '';
  }
  static {
    this.ɵfac = function DeleteElementComponent_Factory(t) {
      return new (t || DeleteElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteElementComponent,
      selectors: [["vex-delete-element"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 2,
      consts: [[1, "container", "p-6"], ["mat-dialog-title", "", 1, "flex", "items-start", "justify-between"], [1, "flex", "items-start", "justify-start", "gap-2"], ["color", "warn", "svgIcon", "mat:delete"], [1, "headline", "m-0", "flex-auto"], [1, "text-border"], [1, "flex", "flex-col", "items-start", "justify-start", "space-y-2"], [4, "ngIf", "ngIfElse"], ["userList", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 3, "click"], [1, "text-lg", "text-red-500", "font-medium"], [1, "text-lg", "font-semibold"]],
      template: function DeleteElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete Object");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeleteElementComponent_ng_container_8_Template, 5, 1, "ng-container", 7)(9, DeleteElementComponent_ng_template_9_Template, 4, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteElementComponent_Template_button_click_14_listener() {
            return ctx.send();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delete ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSinglePermission())("ngIfElse", _r2);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 99614:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/permissions/permission-create-update/permission-create-update.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionCreateUpdateComponent: () => (/* binding */ PermissionCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var src_app_interfaces_Permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/Permissions */ 93963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_models_permission_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/permission.model */ 93813);














function PermissionCreateUpdateComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PermissionCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New Permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PermissionCreateUpdateComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionCreateUpdateComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.mode, " permission");
  }
}
class PermissionCreateUpdateComponent {
  constructor(defaults, dialogRef) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
    this.model = {
      name: '',
      guard_name: 'api'
    };
    this.mode = 'create';
    this.fields = src_app_interfaces_Permissions__WEBPACK_IMPORTED_MODULE_0__.permissionFormlyFields;
  }
  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
      this.model = {
        name: this.defaults.name,
        guard_name: this.defaults.guard_name
      };
    } else {
      this.mode = 'create';
    }
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.createPermission();
    } else if (this.mode === 'update') {
      this.updatePermission();
    }
  }
  createPermission() {
    const permission = {
      name: this.model.name,
      guard_name: this.model.guard_name || 'api'
    };
    this.dialogRef.close(permission);
  }
  updatePermission() {
    if (!this.model) {
      console.error('Model is undefined!');
      return;
    }
    const permission = {
      name: this.model.name,
      guard_name: this.model.guard_name || 'api'
    };
    this.dialogRef.close(permission);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  static {
    this.ɵfac = function PermissionCreateUpdateComponent_Factory(t) {
      return new (t || PermissionCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PermissionCreateUpdateComponent,
      selectors: [["vex-permission-create-update"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 6,
      consts: [[1, "p-6"], ["mat-dialog-title", "", 1, "flex", "items-center", "justify-between"], ["class", "text-xl font-medium", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "mt-6"], [3, "form", "model", "fields"], [1, "flex", "justify-end", "mt-6"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["mat-raised-button", "", "color", "primary", "type", "button", "class", "ml-2", 3, "disabled", "click", 4, "ngIf"], [1, "text-xl", "font-medium"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "ml-2", 3, "disabled", "click"], [1, "capitalize"]],
      template: function PermissionCreateUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PermissionCreateUpdateComponent_h2_2_Template, 2, 0, "h2", 2)(3, PermissionCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "formly-form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PermissionCreateUpdateComponent_button_11_Template, 3, 2, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.defaults);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.defaults);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.form)("model", ctx.model)("fields", ctx.fields);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreateMode() || ctx.isUpdateMode());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_8__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_8__.FormlyForm, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_9__.FormlyMaterialModule],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 21207:
/*!************************************************************!*\
  !*** ./src/app/pages/permissions/permissions.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsComponent: () => (/* binding */ PermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_interfaces_Permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/Permissions */ 93963);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/Utils */ 18220);
/* harmony import */ var _permission_create_update_permission_create_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permission-create-update/permission-create-update.component */ 99614);
/* harmony import */ var _delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-element/delete-element.component */ 41502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);










const SNACKBAR_DURATION = 3000;
class PermissionsComponent {
  constructor(genericApi, dialog, snackbar) {
    this.genericApi = genericApi;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.type = 'permissions';
    this.formlyFields = src_app_interfaces_Permissions__WEBPACK_IMPORTED_MODULE_0__.PermissionsFormlyFields;
    this.dataService = src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_2__.Utils.createDataService(this.type, this.genericApi);
  }
  handleAction(event) {
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
  openCreatePermissionDialog() {
    const dialogData = {
      mode: 'create'
    };
    this.dialog.open(_permission_create_update_permission_create_update_component__WEBPACK_IMPORTED_MODULE_3__.PermissionCreateUpdateComponent, {
      data: dialogData,
      width: '650px'
    }).afterClosed().subscribe(result => {
      if (result && result.model) {
        this.genericApi.create(this.type, result.model).subscribe({
          next: res => {
            if (res) {
              this.snackbar.open(res.message ?? 'Permission created successfully!', 'OK', {
                duration: SNACKBAR_DURATION
              });
              this.resourceList.refresh();
            }
          },
          error: _error => {
            this.snackbar.open('Error creating permission. Please try again.', 'OK', {
              duration: SNACKBAR_DURATION
            });
          }
        });
      }
    });
  }
  openUpdatePermissionDialog(permission) {
    const dialogData = {
      mode: 'update',
      permission: permission
    };
    this.dialog.open(_permission_create_update_permission_create_update_component__WEBPACK_IMPORTED_MODULE_3__.PermissionCreateUpdateComponent, {
      data: dialogData,
      width: '650px'
    }).afterClosed().subscribe(result => {
      if (result && result.model) {
        this.genericApi.update(this.type, permission.id.toString(), result.model).subscribe({
          next: res => {
            if (res) {
              this.snackbar.open(res.message ?? 'Permission updated successfully!', 'OK', {
                duration: SNACKBAR_DURATION
              });
              this.resourceList.refresh();
            }
          },
          error: _error => {
            this.snackbar.open('Error updating permission. Please try again.', 'OK', {
              duration: SNACKBAR_DURATION
            });
          }
        });
      }
    });
  }
  openDeletePermissionDialog(permission) {
    this.dialog.open(_delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_4__.DeleteElementComponent, {
      data: permission,
      width: '600px'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        const originalData = [...this.resourceList.data];
        this.resourceList.data = this.resourceList.data.filter(p => p.id !== permission.id);
        this.genericApi.delete(this.type, permission.id.toString()).subscribe({
          next: res => {
            if (res) {
              this.snackbar.open(res.message ?? 'Permission deleted successfully!', 'OK', {
                duration: SNACKBAR_DURATION
              });
            }
          },
          error: _error => {
            this.resourceList.data = originalData;
            this.snackbar.open('Error deleting permission. Please try again.', 'OK', {
              duration: SNACKBAR_DURATION
            });
          }
        });
      }
    });
  }
  openDeleteAllPermissionsDialog(permissions) {
    this.dialog.open(_delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_4__.DeleteElementComponent, {
      data: permissions,
      width: '600px'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        const ids = permissions.map(permission => permission.id.toString());
        this.genericApi.deleteAll(this.type, ids).subscribe({
          next: res => {
            if (res) {
              this.snackbar.open(res.message ?? 'Permissions deleted successfully!', 'OK', {
                duration: SNACKBAR_DURATION
              });
              this.resourceList.refresh();
            }
          },
          error: _error => {
            this.snackbar.open('Error deleting permissions. Please try again.', 'OK', {
              duration: SNACKBAR_DURATION
            });
          }
        });
      }
    });
  }
  static {
    this.ɵfac = function PermissionsComponent_Factory(t) {
      return new (t || PermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_5__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PermissionsComponent,
      selectors: [["vex-permissions"]],
      viewQuery: function PermissionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_1__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 4,
      consts: [[3, "type", "formlyFields", "dataService", "disableCreateButton", "action"]],
      template: function PermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "vex-generic-resource-list", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PermissionsComponent_Template_vex_generic_resource_list_action_0_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.type)("formlyFields", ctx.formlyFields)("dataService", ctx.dataService)("disableCreateButton", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_1__.GenericResourceListComponent],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_permissions_permissions_component_ts.js.map