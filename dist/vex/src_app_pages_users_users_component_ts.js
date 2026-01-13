"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_users_users_component_ts"],{

/***/ 88752:
/*!************************************************************************************!*\
  !*** ./src/app/pages/users/confirm-block-dialog/confirm-block-dialog.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmBlockDialogComponent: () => (/* binding */ ConfirmBlockDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var src_app_shared_language_translation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/language/translation.module */ 94818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 48503);











class ConfirmBlockDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static {
    this.ɵfac = function ConfirmBlockDialogComponent_Factory(t) {
      return new (t || ConfirmBlockDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfirmBlockDialogComponent,
      selectors: [["vex-confirm-block-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 19,
      consts: [[1, "container", "p-6"], ["mat-dialog-title", "", 1, "flex", "items-start", "justify-between"], [1, "flex", "items-start", "justify-start", "gap-2"], ["color", "warn", "svgIcon", "mat:lock"], [1, "headline", "m-0", "flex-auto"], [1, "text-border"], [1, "flex", "flex-col", "items-start", "justify-start", "space-y-2"], [1, "text-lg", "text-red-500", "font-medium"], ["align", "end", 1, "space-x-2"], ["mat-stroked-button", "", "mat-dialog-close", "false", "color", "default", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "mat-dialog-close"]],
      template: function ConfirmBlockDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-dialog-content", 6)(10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions", 8)(15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.isBlocked ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "menu_action.unblock") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "menu_action.block"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.isBlocked ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "user.block_confirm") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, "user.unblock_confirm"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 13, "user.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.isBlocked ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 15, "user.unblock") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, "user.block"), " ");
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, src_app_shared_language_translation_module__WEBPACK_IMPORTED_MODULE_0__.TranslationModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 96434:
/*!************************************************************************!*\
  !*** ./src/app/pages/users/delete-element/delete-element.component.ts ***!
  \************************************************************************/
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" USER: ", ctx_r0.getSingleUserName(), " ");
  }
}
function DeleteElementComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete all users?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NUMBERS: ", ctx_r1.getSingleUserName(), " ");
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
  isSingleUser() {
    return !Array.isArray(this.defaults);
  }
  getSingleUserName() {
    if (this.isSingleUser()) {
      const user = this.defaults;
      return `${user.first_name} ${user.last_name}`;
    }
    const users = this.defaults;
    return users.length + '';
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Delete Object ");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSingleUser())("ngIfElse", _r2);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 70018:
/*!********************************************************************************!*\
  !*** ./src/app/pages/users/user-create-update/user-create-update.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserCreateUpdateComponent: () => (/* binding */ UserCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ 59864);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-formly/material/checkbox */ 47405);
/* harmony import */ var _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-formly/material/input */ 1346);
/* harmony import */ var _ngx_formly_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-formly/material/select */ 96110);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user.model */ 43873);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ 28604);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material-moment-adapter */ 56114);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_FormUtilsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/FormUtilsService */ 38613);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ 48756);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 49524);































function UserCreateUpdateComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function UserCreateUpdateComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1.model.first_name, " ", ctx_r1.model.last_name, " ");
  }
}
function UserCreateUpdateComponent_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " New User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserCreateUpdateComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserCreateUpdateComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r3.mode, " ");
  }
}
class UserCreateUpdateComponent {
  constructor(defaults, dialogRef, translate, formUtils,
  // Service externe injecté
  languageService, genericApi) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.translate = translate;
    this.formUtils = formUtils;
    this.languageService = languageService;
    this.genericApi = genericApi;
    this.imageView = null;
    this._cachedImageUrl = null;
    this._lastPhotoRef = null;
    this.tempImageUrl = null;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
    this.model = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      roles: [],
      available_countries: {},
      birthday: null,
      permissions: [],
      photo: null,
      is_blocked: false,
      otp_enabled: false
    };
    this.fields = [];
    // fields: FormlyFieldConfig[] = getUserFormlyFields(this.translate);
    this.mode = 'create';
    // Map pour stocker les rôles par nom pour un accès rapide
    this.rolesMap = new Map();
    this.permissionsMap = new Map();
  }
  ngOnInit() {
    this.mode = this.init();
    // Enfin, initialiser le modèle après avoir configuré les champs
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)({
      roles: this.genericApi.getAll('roles', 1, 100),
      permissions: this.genericApi.getAll('permissions', 1, 100)
    }).subscribe(({
      roles,
      permissions
    }) => {
      if (roles && permissions) {
        this.defaults.roles = roles.data;
        this.defaults.permissions = permissions.data;
        this.formUtils.configureSelectFields(this.fields, this.defaults);
        if (this.mode === 'update') {
          this.updateMode();
        } else {
          this.mode = 'create';
          this.clearImageCache();
        }
      } else {
        console.error('Failed to load roles or permissions.');
      }
    });
  }
  init() {
    // Initialiser d'abord les champs de formulaire
    this.fields = [...(0,src_app_models_user_model__WEBPACK_IMPORTED_MODULE_0__.getUserFormlyFields)(this.translate)];
    if (this.defaults && this.defaults.roles) {
      this.formUtils.configureSelectFields(this.fields, this.defaults);
    }
    let mymode = this.defaults;
    return mymode.mode;
  }
  updateMode() {
    let myuser = this.defaults;
    let userRoles = myuser.roles;
    let userPermissions = myuser.permissions;
    // Récupérer les rôles précédemment sélectionnés pour l'utilisateur
    let selectedRoles = [];
    // Si user.roles existe et contient des données
    if (this.defaults.user?.roles && Array.isArray(this.defaults.user.roles)) {
      // Filtrer pour trouver les objets Roles correspondants aux rôles de l'utilisateur
      selectedRoles = userRoles.filter(role => this.defaults.user?.roles?.some(userRole => typeof userRole === 'object' && 'name' in userRole && userRole.name === role.name));
    }
    let selectedPermissions = [];
    if (this.defaults.user?.permissions && Array.isArray(this.defaults.user.permissions)) {
      selectedPermissions = userPermissions.filter(role => this.defaults.user?.permissions?.some(userPermissions => typeof userPermissions === 'object' && 'name' in userPermissions && userPermissions.name === role.name));
    }
    this.model = {
      first_name: this.defaults.user?.first_name ?? '',
      last_name: this.defaults.user?.last_name ?? '',
      email: this.defaults.user?.email ?? '',
      phone: this.defaults.user?.phone ?? '',
      available_countries: this.defaults.user?.available_countries,
      birthday: this.defaults.user?.birthday ? this.languageService.parseDate(String(this.defaults.user.birthday)) : null,
      roles: selectedRoles,
      permissions: selectedPermissions,
      photo: this.defaults.user?.photo ?? '',
      is_blocked: this.defaults.user?.is_blocked ?? false,
      otp_enabled: this.defaults.user?.otp_enabled ?? false
    };
  }
  /**
   * Crée une URL temporaire pour afficher une image sélectionnée localement
   * @param fileInput - L'élément input de type file ou l'événement de changement
   * @returns Promise avec l'URL temporaire de l'image
   */
  getLocalImagePath(photo) {
    // Si la photo est null ou undefined, retourner une image par défaut
    if (!photo) {
      return 'assets/img/avatars/default-user.png';
    }
    // Si c'est une instance de File, créer une URL temporaire
    if (photo instanceof File) {
      // Si une URL temporaire existe déjà pour ce fichier, la révoquer
      if (this.tempImageUrl) {
        URL.revokeObjectURL(this.tempImageUrl);
      }
      // Créer et stocker la nouvelle URL temporaire
      this.tempImageUrl = URL.createObjectURL(photo);
      return this.tempImageUrl;
    }
    // Si c'est déjà une chaîne (URL), la retourner directement
    return photo;
  }
  get imageUrl() {
    // Si la photo a changé, on nettoie l'ancien cache
    if (this._lastPhotoRef !== this.model.photo) {
      this.clearImageCache();
      this._lastPhotoRef = this.model.photo;
    }
    if (!this._cachedImageUrl) {
      if (this.model.photo instanceof File) {
        this._cachedImageUrl = URL.createObjectURL(this.model.photo);
      } else if (typeof this.model.photo === 'string' && this.model.photo) {
        this._cachedImageUrl = this.model.photo;
      } else {
        this._cachedImageUrl = 'assets/img/avatars/noavatar.png';
      }
    }
    return this._cachedImageUrl;
  }
  clearImageCache() {
    if (this._cachedImageUrl && this._cachedImageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this._cachedImageUrl);
    }
    this._cachedImageUrl = null;
  }
  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }
  createCustomer() {
    // Si nécessaire, assurez-vous que la photo est bien traitée
    if (this.model.photo instanceof File) {
      this.getLocalImagePath(this.model.photo);
    }
    const user = {
      tempUrl: this.tempImageUrl ?? '',
      model: {
        ...this.model
      }
    };
    this.dialogRef.close(user);
  }
  updateCustomer() {
    if (!this.model) {
      console.error('Model is undefined!');
      return;
    }
    // Si nécessaire, assurez-vous que la photo est bien traitée
    if (this.model.photo instanceof File) {
      this.getLocalImagePath(this.model.photo);
    }
    let defaultsUser = this.defaults;
    if (defaultsUser.user) {
      const user = {
        slug: defaultsUser.user.slug,
        model: this.model,
        tempUrl: this.tempImageUrl ?? ''
      };
      this.dialogRef.close(user);
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
    this.ɵfac = function UserCreateUpdateComponent_Factory(t) {
      return new (t || UserCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_FormUtilsService__WEBPACK_IMPORTED_MODULE_2__.FormUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_4__.GenericApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UserCreateUpdateComponent,
      selectors: [["vex-user-create-update"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "flex", "flex-col", "h-full"], ["mat-dialog-title", "", 1, "flex", "items-center"], [4, "ngIf"], ["class", "headline m-0 flex-auto", 4, "ngIf"], ["class", "headline m-0 flex-auto", "rxTranslate", "user.user_create", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "w-full"], [3, "form", "model", "fields"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button", "rxTranslate", "user.cancel"], ["color", "primary", "mat-flat-button", "", 3, "disabled", "click", 4, "ngIf"], [1, "avatar", "mr-5", 3, "src"], [1, "headline", "m-0", "flex-auto"], ["rxTranslate", "user.user_create", 1, "headline", "m-0", "flex-auto"], ["color", "primary", "mat-flat-button", "", 3, "disabled", "click"], [1, "capitalize"], ["rxTranslate", "user.select"]],
      template: function UserCreateUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, UserCreateUpdateComponent_div_2_Template, 2, 1, "div", 2)(3, UserCreateUpdateComponent_h2_3_Template, 2, 2, "h2", 3)(4, UserCreateUpdateComponent_h2_4_Template, 2, 0, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-dialog-content", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "formly-form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-dialog-actions", 10)(11, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UserCreateUpdateComponent_button_13_Template, 5, 2, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.model.first_name || ctx.model.last_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.model.first_name && !ctx.model.last_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("model", ctx.model)("fields", ctx.fields);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCreateMode() || ctx.isUpdateMode());
        }
      },
      dependencies: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_17__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_17__.FormlyForm, _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_18__.FormlyMatInputModule, _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.FormlyMatCheckboxModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _ngx_formly_material_select__WEBPACK_IMPORTED_MODULE_22__.FormlyMatSelectModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__["default"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.FormlyMatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_24__.MatMomentDateModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 14600:
/*!**************************************************************!*\
  !*** ./src/app/pages/users/user-show/user-show.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserShowComponent: () => (/* binding */ UserShowComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);











function UserShowComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function UserShowComponent_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.defaults.first_name, " ", ctx_r1.defaults.last_name, " ");
  }
}
function UserShowComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getRolesNames(ctx_r2.defaults.roles), " ");
  }
}
function UserShowComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function UserShowComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getPermissionsNames(ctx_r4.defaults.permissions), " ");
  }
}
function UserShowComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class UserShowComponent {
  constructor(defaults, dialogRef) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this._cachedImageUrl = null;
    this._lastPhotoRef = null;
  }
  get imageUrl() {
    // Si la photo a changé, on nettoie l'ancien cache
    if (this._lastPhotoRef !== this.defaults.photo) {
      this.clearImageCache();
      this._lastPhotoRef = this.defaults.photo || '';
    }
    if (!this._cachedImageUrl) {
      if (this.defaults.photo instanceof File) {
        this._cachedImageUrl = URL.createObjectURL(this.defaults.photo);
      } else if (typeof this.defaults.photo === 'string' && this.defaults.photo) {
        this._cachedImageUrl = this.defaults.photo;
      } else {
        this._cachedImageUrl = 'assets/img/avatars/noavatar.png';
      }
    }
    return this._cachedImageUrl;
  }
  clearImageCache() {
    if (this._cachedImageUrl && this._cachedImageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this._cachedImageUrl);
    }
    this._cachedImageUrl = null;
  }
  cancel() {
    this.dialogRef.close(null);
  }
  // fonction pour parcourir et afficher le name des roles du user
  getRolesNames(roles) {
    return roles.map(role => typeof role === 'string' ? role : role.display_name).join(', ');
  }
  getPermissionsNames(permissions) {
    return permissions.map(permission => typeof permission === 'string' ? permission : permission.display_name).join(', ');
  }
  static {
    this.ɵfac = function UserShowComponent_Factory(t) {
      return new (t || UserShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserShowComponent,
      selectors: [["vex-user-show"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 7,
      consts: [[1, "flex", "flex-col", "gap-4", "w-full", "h-full"], [1, "flex", "items-center", "justify-end"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], ["class", "mx-auto", 4, "ngIf"], ["mat-dialog-title", "", 1, "text-center", "space-y-2"], ["class", "text-xl font-extrabold text-gray-800 tracking-tight capitalize", 4, "ngIf"], ["mat-dialog-content", "", 1, "text-start", "space-y-2"], [1, "flex", "items-start", "gap-2", "text-primary-400"], ["svgIcon", "mat:person", 1, "icon-xl"], [4, "ngIf"], ["svgIcon", "mat:security", 1, "icon-xl"], [1, "flex", "items-start", "gap-2", "text-primary-500"], ["svgIcon", "mat:email", 1, "icon-xl"], [1, "text-lg", "font-medium", "text-gray-500", "mt-1"], [1, "text-border"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], [1, "text-lg", "font-medium"], [1, "mx-auto"], [1, "rounded-full", "w-36", "h-36", "mr-5", 3, "src"], [1, "text-xl", "font-extrabold", "text-gray-800", "tracking-tight", "capitalize"], [1, "inline-flex", "items-center", "rounded-full", "bg-primary-100", "text-primary-500", "px-3", "py-1", "text-sm", "font-semibold"], [1, "text-gray-400", "italic"]],
      template: function UserShowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserShowComponent_div_4_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserShowComponent_h1_6_Template, 2, 2, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserShowComponent_ng_container_10_Template, 3, 1, "ng-container", 10)(11, UserShowComponent_ng_container_11_Template, 3, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserShowComponent_ng_container_14_Template, 3, 1, "ng-container", 10)(15, UserShowComponent_ng_container_15_Template, 3, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions", 16)(22, "button", 17)(23, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.defaults.first_name || ctx.defaults.last_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.defaults.roles && ctx.defaults.roles.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.defaults.roles || ctx.defaults.roles.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.defaults.permissions && ctx.defaults.permissions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.defaults.permissions || ctx.defaults.permissions.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.defaults.email, "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 19731:
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/user.model */ 43873);
/* harmony import */ var _user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-create-update/user-create-update.component */ 70018);
/* harmony import */ var _user_show_user_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-show/user-show.component */ 14600);
/* harmony import */ var _delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-element/delete-element.component */ 96434);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/Utils */ 18220);
/* harmony import */ var _confirm_block_dialog_confirm_block_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-block-dialog/confirm-block-dialog.component */ 88752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_form_data_builder_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/form-data-builder.service */ 34365);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);















// Constants
const SNACKBAR_DURATION = 3000;
class UsersComponent {
  constructor(genericApi, dialog, snackbar, formDataBuilder, websocketService) {
    this.genericApi = genericApi;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.formDataBuilder = formDataBuilder;
    this.websocketService = websocketService;
    this.type = 'users';
    this.formlyFields = src_app_models_user_model__WEBPACK_IMPORTED_MODULE_1__.userFormlyFields;
    this.dataService = src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_5__.Utils.createDataService(this.type, this.genericApi);
  }
  // C'est ici que la magie opère : on gère toutes les actions spécifiques
  handleAction(event) {
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
    this.dialog.open(_user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_2__.UserCreateUpdateComponent, {
      data: dialogData,
      width: '650px'
    }).afterClosed().subscribe(result => {
      if (result && result.model) {
        const formData = this.formDataBuilder.createUserFormData(result.model);
        this.genericApi.create(this.type, formData).subscribe(res => {
          if (res) {
            this.snackbar.open(res.message ?? 'User created successfully!', 'OK', {
              duration: SNACKBAR_DURATION
            });
            this.resourceList.refresh();
          }
        });
      }
    });
  }
  openUpdateUserDialog(user) {
    const dialogData = {
      mode: 'update',
      user: user
    };
    this.dialog.open(_user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_2__.UserCreateUpdateComponent, {
      data: dialogData,
      width: '650px'
    }).afterClosed().subscribe(updatedCustomer => {
      if (updatedCustomer && updatedCustomer.model) {
        const userIndex = this.resourceList.data.findIndex(u => u.slug === user.slug);
        if (userIndex === -1) {
          return;
        }
        const originalUser = this.resourceList.data[userIndex];
        const optimisticUser = {
          ...originalUser,
          ...updatedCustomer.model
        };
        if (updatedCustomer.model.photo instanceof File) {
          optimisticUser.photo = URL.createObjectURL(updatedCustomer.model.photo);
        }
        if (updatedCustomer.model.birthday) {
          optimisticUser.birthday = this.formDataBuilder.formatDateForLaravel(updatedCustomer.model.birthday);
        }
        const currentData = [...this.resourceList.data];
        currentData[userIndex] = optimisticUser;
        this.resourceList.data = currentData;
        const formData = this.formDataBuilder.createUserFormData(updatedCustomer.model);
        this.genericApi.update(this.type, user.slug, formData).subscribe({
          next: res => {
            if (res && res.data && !Array.isArray(res.data)) {
              const updatedUserFromServer = res.data;
              if (updatedCustomer.model.photo instanceof File) {
                updatedUserFromServer.photo = optimisticUser.photo;
              }
              const currentData = [...this.resourceList.data];
              currentData[userIndex] = updatedUserFromServer;
              this.resourceList.data = currentData;
              this.snackbar.open(res.message ?? 'User updated successfully!', 'OK', {
                duration: SNACKBAR_DURATION
              });
            } else {
              const currentData = [...this.resourceList.data];
              currentData[userIndex] = originalUser;
              this.resourceList.data = currentData;
              this.snackbar.open('An unexpected error occurred.', 'OK', {
                duration: SNACKBAR_DURATION
              });
            }
          },
          error: err => {
            const currentData = [...this.resourceList.data];
            currentData[userIndex] = originalUser;
            this.resourceList.data = currentData;
            this.snackbar.open('Error updating user. Please try again.', 'OK', {
              duration: SNACKBAR_DURATION
            });
          }
        });
      }
    });
  }
  openDeleteUserDialog(user) {
    this.dialog.open(_delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_4__.DeleteElementComponent, {
      data: user,
      width: '600px'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        // Optimistic update: remove the user from the local list immediately
        const originalData = [...this.resourceList.data]; // Save original data for rollback
        this.resourceList.data = this.resourceList.data.filter(u => u.slug !== user.slug);
        this.genericApi.delete(this.type, user.slug).subscribe({
          next: res => {
            if (res) {
              this.snackbar.open(res.message ?? '', 'OK', {
                duration: SNACKBAR_DURATION
              });
            }
          },
          error: err => {
            this.resourceList.data = originalData;
            this.snackbar.open('Error deleting user. Please try again.', 'OK', {
              duration: SNACKBAR_DURATION
            });
          }
        });
      }
    });
  }
  openShowUserDialog(user) {
    this.dialog.open(_user_show_user_show_component__WEBPACK_IMPORTED_MODULE_3__.UserShowComponent, {
      data: user,
      width: '650px'
    });
  }
  openDeleteAllUsersDialog(users) {
    this.dialog.open(_delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_4__.DeleteElementComponent, {
      data: users,
      width: '600px'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        const slugs = users.map(user => user.slug);
        this.genericApi.deleteAll(this.type, slugs).subscribe(res => {
          if (res) {
            this.snackbar.open(res.message ?? '', 'OK', {
              duration: SNACKBAR_DURATION
            });
            this.resourceList.refresh();
          }
        });
      }
    });
  }
  /**
   * Helper method to update user block status in the list
   */
  updateUserBlockStatus(user, isBlocked) {
    const userIndex = this.resourceList.data.findIndex(u => u.slug === user.slug);
    if (userIndex !== -1) {
      const currentData = [...this.resourceList.data];
      const currentUser = currentData[userIndex];
      // Create a new User instance to preserve the name getter
      currentData[userIndex] = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_1__.User({
        ...currentUser,
        is_blocked: isBlocked
      });
      this.resourceList.data = currentData;
    }
  }
  blockUser(user) {
    if (user.is_blocked) {
      this.snackbar.open('User is already blocked', 'OK', {
        duration: SNACKBAR_DURATION
      });
      return;
    }
    this.genericApi.post(`users/${user.slug}/block`, {}).subscribe({
      next: res => {
        if (res && res.data) {
          this.updateUserBlockStatus(user, true);
          this.snackbar.open(res.message ?? 'User blocked successfully!', 'OK', {
            duration: SNACKBAR_DURATION
          });
        }
      },
      error: err => {
        this.snackbar.open('Error blocking user. Please try again.', 'OK', {
          duration: SNACKBAR_DURATION
        });
      }
    });
  }
  unblockUser(user) {
    if (!user.is_blocked) {
      this.snackbar.open('User is not blocked', 'OK', {
        duration: SNACKBAR_DURATION
      });
      return;
    }
    this.genericApi.post(`users/${user.slug}/unblock`, {}).subscribe({
      next: res => {
        if (res && res.data) {
          this.updateUserBlockStatus(user, false);
          this.snackbar.open(res.message ?? 'User unblocked successfully!', 'OK', {
            duration: SNACKBAR_DURATION
          });
        }
      },
      error: err => {
        this.snackbar.open('Error unblocking user. Please try again.', 'OK', {
          duration: SNACKBAR_DURATION
        });
      }
    });
  }
  toggleBlockUser(user) {
    const newBlockStatus = !user.is_blocked;
    this.genericApi.post(`users/${user.slug}/toggle-block`, {}).subscribe({
      next: res => {
        if (res && res.data) {
          this.updateUserBlockStatus(user, newBlockStatus);
          this.snackbar.open(res.message ?? 'User status updated successfully!', 'OK', {
            duration: SNACKBAR_DURATION
          });
        }
      },
      error: err => {
        this.snackbar.open('Error updating user status. Please try again.', 'OK', {
          duration: SNACKBAR_DURATION
        });
      }
    });
  }
  confirmToggleBlockUser(user) {
    this.dialog.open(_confirm_block_dialog_confirm_block_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmBlockDialogComponent, {
      data: {
        isBlocked: user.is_blocked
      },
      width: '400px',
      disableClose: true
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.toggleBlockUser(user); // ta logique actuelle
      } else {
        // Si l'utilisateur annule, on remet le toggle dans son état initial
        const index = this.resourceList.data.findIndex(u => u.slug === user.slug);
        if (index !== -1) {
          this.resourceList.data[index].is_blocked = user.is_blocked;
          this.resourceList.data = [...this.resourceList.data];
        }
      }
    });
  }
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_7__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_form_data_builder_service__WEBPACK_IMPORTED_MODULE_8__.FormDataBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_9__.WebsocketService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["vex-users"]],
      viewQuery: function UsersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 3,
      consts: [[3, "type", "formlyFields", "dataService", "action"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "vex-generic-resource-list", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("action", function UsersComponent_Template_vex_generic_resource_list_action_0_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx.type)("formlyFields", ctx.formlyFields)("dataService", ctx.dataService);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_users_component_ts.js.map