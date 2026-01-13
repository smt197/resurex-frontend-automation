"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_settings_show-settings_show-settings_component_ts"],{

/***/ 25680:
/*!****************************************************************************************!*\
  !*** ./src/@vex/components/vex-breadcrumbs/vex-breadcrumb/vex-breadcrumb.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexBreadcrumbComponent: () => (/* binding */ VexBreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const _c0 = ["*"];
class VexBreadcrumbComponent {
  static {
    this.ɵfac = function VexBreadcrumbComponent_Factory(t) {
      return new (t || VexBreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VexBreadcrumbComponent,
      selectors: [["vex-breadcrumb"]],
      hostAttrs: [1, "vex-breadcrumb", "body-2", "text-hint", "leading-none", "hover:text-primary-600", "no-underline", "transition", "duration-400", "ease-out-swift"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function VexBreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 23483:
/*!**************************************************************************!*\
  !*** ./src/@vex/components/vex-breadcrumbs/vex-breadcrumbs.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexBreadcrumbsComponent: () => (/* binding */ VexBreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 82087);
/* harmony import */ var _vex_breadcrumb_vex_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-breadcrumb/vex-breadcrumb.component */ 25680);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);







const _c0 = a1 => ["/index", a1];
function VexBreadcrumbsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "vex-breadcrumb")(3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const crumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, crumb_r1.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crumb_r1);
  }
}
const _c1 = () => ["/index/dashboard"];
class VexBreadcrumbsComponent {
  constructor() {
    this.crumbs = [];
    this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByValue;
  }
  static {
    this.ɵfac = function VexBreadcrumbsComponent_Factory(t) {
      return new (t || VexBreadcrumbsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VexBreadcrumbsComponent,
      selectors: [["vex-breadcrumbs"]],
      inputs: {
        crumbs: "crumbs"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "flex", "items-center", "gap-2"], [3, "routerLink"], ["svgIcon", "mat:home", 1, "icon-sm"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "w-1", "h-1", "bg-gray-600", "rounded-full"]],
      template: function VexBreadcrumbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "vex-breadcrumb")(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VexBreadcrumbsComponent_ng_container_4_Template, 5, 4, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.crumbs)("ngForTrackBy", ctx.trackByValue);
        }
      },
      dependencies: [_vex_breadcrumb_vex_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.VexBreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 58713:
/*!**********************************************************************************!*\
  !*** ./src/@vex/components/vex-page-layout/vex-page-layout-content.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPageLayoutContentDirective: () => (/* binding */ VexPageLayoutContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class VexPageLayoutContentDirective {
  constructor() {}
  static {
    this.ɵfac = function VexPageLayoutContentDirective_Factory(t) {
      return new (t || VexPageLayoutContentDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: VexPageLayoutContentDirective,
      selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]],
      hostAttrs: [1, "vex-page-layout-content"],
      standalone: true
    });
  }
}

/***/ }),

/***/ 23219:
/*!*******************************************************************!*\
  !*** ./src/app/auth/change-password/change-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent),
/* harmony export */   fadeInUp: () => (/* binding */ fadeInUp)
/* harmony export */ });
/* harmony import */ var C_laragon_www_resurex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ 56622);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-formly/material/checkbox */ 47405);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/fade-in-right.animation */ 95903);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/scale-in.animation */ 16962);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var src_app_interfaces_passwordValidators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/passwordValidators */ 45169);
/* harmony import */ var src_app_interfaces_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/User */ 30252);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_pages_ui_confirm_dialog_component_confirm_dialog_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/ui/confirm-dialog-component/confirm-dialog-component.component */ 75946);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 49524);

































function ChangePasswordComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Chargement en cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "mat-progress-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ChangePasswordComponent_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.mailmessage, " ");
  }
}
function ChangePasswordComponent_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r4.mailmessagError, " ");
  }
}
function ChangePasswordComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ChangePasswordComponent_ng_container_2_div_2_Template, 3, 1, "div", 7)(3, ChangePasswordComponent_ng_container_2_div_3_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "formly-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 10)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_container_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " UPDATE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.mailmessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.mailmessagError);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx_r2.PasswordFormGroup)("fields", ctx_r2.passwordFields)("model", ctx_r2.passwordModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r2.PasswordFormGroup.invalid);
  }
}
// Ajoutez cette animation si fadeInUp400ms n'est pas disponible
const fadeInUp = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
  opacity: 0,
  transform: 'translateY(20px)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
  opacity: 1,
  transform: 'translateY(0)'
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
  opacity: 0,
  transform: 'translateY(20px)'
}))])]);
class ChangePasswordComponent {
  constructor(fb, cd, snackbar, authService, activatedRoute, router, route, authservice, dialog) {
    // Récupère les paramètres de l'URL (id, email, token)
    this.fb = fb;
    this.cd = cd;
    this.snackbar = snackbar;
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.route = route;
    this.authservice = authservice;
    this.dialog = dialog;
    this.passwordFormGroup = this.fb.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8)]],
      password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]]
    }, {
      validators: [(0,src_app_interfaces_passwordValidators__WEBPACK_IMPORTED_MODULE_5__.passwordMatchValidator)()]
    });
    this.passwordInputType = 'password';
    this.RestPasswordModel = null;
    this.ResendeModel = null;
    this.params = null;
    this.token = '';
    this.email = '';
    this.expires = '';
    this.isTokenValid = false;
    this.isLoading = false;
    this.isLoading2 = false;
    this.LoadingFormReset = true;
    this.mailmessage = '';
    this.mailmessagError = '';
    this.showPasswordForm = false;
    this.errorMessage = false;
    this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.passwordModel = {
      password: '',
      current_password: '',
      password_confirmation: ''
    };
    this.PasswordFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
    this.passwordFields = src_app_interfaces_User__WEBPACK_IMPORTED_MODULE_6__.passwordChangeFormlyFields;
    // Récupérer le token et l'email depuis l'URL
  }
  togglePasswordForm() {
    this.showPasswordForm = !this.showPasswordForm;
    this.cd.detectChanges(); // Force la détection des changements si nécessaire
  }
  ngOnInit() {}
  cancel() {
    this.onCancel.emit();
  }
  showPassword() {
    this.passwordInputType = 'text';
    this.cd.markForCheck();
  }
  hidePassword() {
    this.passwordInputType = 'password';
    this.cd.markForCheck();
  }
  submit() {
    var _this = this;
    return (0,C_laragon_www_resurex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Vérifiez d'abord que le formulaire est valide
      if (_this.PasswordFormGroup.invalid) {
        _this.showMessage('Veuillez corriger les erreurs dans le formulaire');
        return;
      }
      // Ouvrez la boîte de dialogue de confirmation
      const dialogRef = _this.dialog.open(src_app_pages_ui_confirm_dialog_component_confirm_dialog_component_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogComponent, {
        width: '400px',
        data: {
          message: 'Êtes-vous sûr de vouloir modifier votre mot de passe ?'
        }
      });
      // Attendez la réponse de l'utilisateur
      const result = yield dialogRef.afterClosed().toPromise();
      if (result) {
        // Si l'utilisateur a confirmé
        _this.isLoading = true;
        _this.mailmessage = '';
        _this.errorMessage = false;
        _this.authService.resetPassword(_this.passwordModel).subscribe({
          next: response => {
            _this.mailmessage = response.message;
            _this.showMessage(response.message);
            _this.isLoading = false;
            _this.resetForm();
            setTimeout(() => _this.showPasswordForm = false, 2000);
          },
          error: error => {
            _this.isLoading = false;
            _this.errorMessage = true;
            _this.mailmessagError = error.error.message;
            _this.showMessage(error.error.message);
          }
        });
      }
    })();
  }
  showMessage(message) {
    if (message) {
      this.snackbar.open(message, 'Fermer', {
        duration: 10000
      });
    }
  }
  resetForm() {
    // Réinitialisation du modèle
    this.passwordModel = {
      password: '',
      current_password: '',
      password_confirmation: ''
    };
    // Réinitialisation du formulaire réactif
    this.passwordFormGroup.reset();
    // Réinitialisation des états
    this.errorMessage = false;
    this.mailmessagError = '';
    // Si vous utilisez Formly, réinitialisez aussi son modèle
    this.PasswordFormGroup.reset();
    // Force la détection des changements
    this.cd.detectChanges();
  }
  static {
    this.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["vex-change-password"]],
      outputs: {
        onCancel: "onCancel"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [1, "p-10"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-6"], ["rxTranslate", "global.loading", 1, "text-lg", "text-gray-600"], ["mode", "indeterminate", "color", "primary", "diameter", "35", 1, "icon-2xl"], [1, "text-center", "mt-4", "w-full"], ["class", "text-center p-4", 4, "ngIf"], [1, "p-6", "flex", "flex-col", "gap-4", "w-full"], [3, "form", "fields", "model"], [1, "flex", "gap-2", "mt-4", "justify-end"], ["color", "primary", "mat-raised-button", "", "type", "button", "rxTranslate", "reset-password.submit", 3, "disabled", "click"], [1, "text-center", "p-4"], [1, "text-green-500", "text-lg", "font-medium"], [1, "text-red-500", "text-lg", "font-medium"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ChangePasswordComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"])(2, ChangePasswordComponent_ng_container_2_Template, 9, 6, "ng-container", 1);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.FormlyMatCheckboxModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_27__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_27__.FormlyForm, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_10__["default"]],
      styles: [".timer[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  color: orange;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.bg-pattern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n\n\n\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-form[_ngcontent-%COMP%] {\n  padding: 6px !important;\n}\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-box[_ngcontent-%COMP%] {\n  padding: 6px !important;\n  width: 80px !important;\n  height: 80px !important;\n  font-size: 30px !important;\n  text-align: center;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBMkJFO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Qk47O0FBMEJBO0VBQ0ksNmNBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQTVDSjs7QUE4Q0UsbUNBQUE7QUFHRiwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RFO0VBQ0UsdUJBQUE7QUE3Q0o7QUFnREU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5Q0o7O0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9DSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1wYXR0ZXJuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAxMzVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAyMjVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSAwIDY0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxuLy8gICB9XHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pbmZvLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5iZy1wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyNHB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDI0cHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgNjdweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2OXB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDY5cHhcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMjI1ZGVnLFxyXG4gICAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyMnB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMjRweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2N3B4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgNjlweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCA2OXB4XHJcbiAgICApIDAgNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xyXG4gIH1cclxuICAvKiBTdHlsZXMgcG91ciBsZXMgY2FzZXMgZGUgbCdPVFAgKi9cclxuXHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZSBib3V0b24gKi9cclxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm5neC1vdHAtaW5wdXQgeyBcclxuICAubmd4LW90cC1pbnB1dC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1vdHAtaW5wdXQtYm94IHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7IC8vIFN1cHByZXNzaW9uIGRlIGxhIHJlZG9uZGFuY2VcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBDb3JyZWN0aW9uIGRlIFwiZm9udDogYm9sZGVyXCIgZW4gXCJmb250LXdlaWdodDogYm9sZFwiXHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__.stagger80ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRight400ms]
      }
    });
  }
}

/***/ }),

/***/ 14316:
/*!*******************************************!*\
  !*** ./src/app/interfaces/Maintenance.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminLoginFormlyFields: () => (/* binding */ adminLoginFormlyFields),
/* harmony export */   getMaintenanceSettingsFormlyFields: () => (/* binding */ getMaintenanceSettingsFormlyFields)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 47470);

const adminLoginFormlyFields = [{
  key: 'email',
  type: 'input',
  props: {
    label: 'Email',
    placeholder: 'admin@example.com',
    required: true,
    type: 'email'
  }
}, {
  key: 'password',
  type: 'input',
  props: {
    label: 'Mot de passe',
    placeholder: 'Mot de passe',
    required: true,
    type: 'password'
  }
}];
function getMaintenanceSettingsFormlyFields(translate, onToggleChangeFn, onSaveClickFn) {
  return [{
    fieldGroupClassName: 'flex flex-col gap-6 w-full max-w-5xl mx-auto p-4 sm:p-6',
    fieldGroup: [
    // Toggle Maintenance
    {
      key: 'is_active',
      type: 'slide-toggle',
      wrappers: ['custom-wrapper'],
      className: 'maintenance-toggle-field',
      props: {
        label: translate.instant('admin_maintenance.mode_title'),
        description: translate.instant('admin_maintenance.status_active'),
        descriptionInactive: translate.instant('admin_maintenance.status_inactive'),
        color: 'primary',
        customWrapperClass: 'maintenance-toggle-wrapper'
      },
      hooks: {
        onInit: field => {
          // Abonnement aux changements de toggle - skip(1) pour ignorer l'initialisation
          if (field.formControl && onToggleChangeFn) {
            field.formControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.skip)(1)).subscribe(() => {
              onToggleChangeFn(field);
            });
          }
          // Abonnement aux changements de langue pour les labels
          translate.stream('admin_maintenance.mode_title').subscribe(text => {
            if (field.props) {
              field.props['label'] = text;
            }
          });
          translate.stream('admin_maintenance.status_active').subscribe(text => {
            if (field.props) {
              field.props['description'] = text;
            }
          });
          translate.stream('admin_maintenance.status_inactive').subscribe(text => {
            if (field.props) {
              field.props['descriptionInactive'] = text;
            }
          });
        }
      }
    },
    // Message de maintenance avec Quill Editor
    {
      key: 'message',
      type: 'quill-editor',
      className: 'w-full',
      props: {
        label: translate.instant('admin_maintenance.message_label'),
        placeholder: translate.instant('admin_maintenance.message_placeholder'),
        hint: translate.instant('admin_maintenance.message_hint'),
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
            list: 'ordered'
          }, {
            list: 'bullet'
          }], [{
            header: [1, 2, 3, 4, 5, 6, false]
          }], [{
            color: []
          }, {
            background: []
          }], ['clean'], ['link']]
        }
      },
      hooks: {
        onInit: field => {
          // Abonnement aux changements de langue pour le champ message
          translate.stream('admin_maintenance.message_label').subscribe(text => {
            if (field.props) {
              field.props['label'] = text;
            }
          });
          translate.stream('admin_maintenance.message_placeholder').subscribe(text => {
            if (field.props) {
              field.props['placeholder'] = text;
            }
          });
          translate.stream('admin_maintenance.message_hint').subscribe(text => {
            if (field.props) {
              field.props['hint'] = text;
            }
          });
        }
      }
    },
    // Bouton d'action
    {
      type: 'button-type',
      className: 'flex justify-end',
      props: {
        text: translate.instant('admin_maintenance.save_button'),
        loadingText: translate.instant('admin_maintenance.saving_button'),
        color: 'primary',
        btnType: 'button',
        appearance: 'raised',
        className: 'w-full sm:w-auto min-w-[120px]',
        onClick: onSaveClickFn
      },
      hooks: {
        onInit: field => {
          // Abonnement aux changements de langue pour le bouton
          translate.stream('admin_maintenance.save_button').subscribe(text => {
            if (field.props) {
              field.props['text'] = text;
            }
          });
          translate.stream('admin_maintenance.saving_button').subscribe(text => {
            if (field.props) {
              field.props['loadingText'] = text;
            }
          });
        }
      }
    },
    // Informations
    {
      type: 'info-box',
      className: 'bg-blue-50 rounded-lg p-4 sm:p-6',
      props: {
        title: translate.instant('admin_maintenance.info_title'),
        items: [translate.instant('admin_maintenance.info_admin_access'), translate.instant('admin_maintenance.info_users_blocked'), translate.instant('admin_maintenance.info_pages_blocked')]
      },
      hooks: {
        onInit: field => {
          // Abonnement aux changements de langue pour l'info box
          translate.stream('admin_maintenance.info_title').subscribe(text => {
            if (field.props) {
              field.props['title'] = text;
            }
          });
          // Mise à jour dynamique de tous les items
          translate.stream('admin_maintenance.info_admin_access').subscribe(text => {
            if (field.props && field.props['items']) {
              field.props['items'][0] = text;
            }
          });
          translate.stream('admin_maintenance.info_users_blocked').subscribe(text => {
            if (field.props && field.props['items']) {
              field.props['items'][1] = text;
            }
          });
          translate.stream('admin_maintenance.info_pages_blocked').subscribe(text => {
            if (field.props && field.props['items']) {
              field.props['items'][2] = text;
            }
          });
        }
      }
    }]
  }];
}

/***/ }),

/***/ 35208:
/*!***************************************************!*\
  !*** ./src/app/interfaces/ShowCardInformation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSettingsCardInformation: () => (/* binding */ appSettingsCardInformation),
/* harmony export */   createCardInfo: () => (/* binding */ createCardInfo),
/* harmony export */   profileSettingsCardInformation: () => (/* binding */ profileSettingsCardInformation),
/* harmony export */   settingModelCard: () => (/* binding */ settingModelCard),
/* harmony export */   userModelCard: () => (/* binding */ userModelCard)
/* harmony export */ });
const userModelCard = {
  first_name: '',
  last_name: '',
  email: '',
  roles: [],
  birthday: '',
  phone: '',
  permissions: [],
  photo: '',
  languages: []
};
const settingModelCard = {
  site_name: '',
  site_logo: '',
  site_description: '',
  site_subtitle: '',
  site_active: false,
  site_web: ''
};
const profileSettingsCardInformation = {
  title: 'Profil',
  icon: 'person',
  description: 'Gérez vos informations personnelles, votre avatar et vos préférences de compte',
  type: 'user',
  model: userModelCard,
  form: []
};
const appSettingsCardInformation = {
  title: 'Settings',
  icon: 'settings',
  description: 'Configurez les paramètres de l\'application et personnalisez votre expérience',
  type: 'setting',
  model: settingModelCard,
  form: []
};
// Dans votre fichier d'interface
function createCardInfo(autoTranslate, config) {
  return {
    ...config,
    title: autoTranslate.translateText(config.title),
    description: autoTranslate.translateText(config.description)
  };
}

/***/ }),

/***/ 36969:
/*!**************************************************!*\
  !*** ./src/app/pages/backup/backup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackupComponent: () => (/* binding */ BackupComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_BackupService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/BackupService */ 50274);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 49524);

















function BackupComponent_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 9);
  }
}
function BackupComponent_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 10);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("svgIcon", "mat:", ctx_r1.canReset ? "refresh" : "backup", "");
  }
}
function BackupComponent_div_9_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Backup Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BackupComponent_div_9_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 21);
  }
}
function BackupComponent_div_9_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 22);
  }
}
function BackupComponent_div_9_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 23);
  }
}
function BackupComponent_div_9_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 24);
  }
}
const _c0 = (a0, a1, a2, a3) => ({
  "bg-green-50 dark:bg-green-700 text-green-700 dark:text-green-100 border border-green-300 dark:border-green-600": a0,
  "bg-blue-50 dark:bg-blue-700 text-blue-700 dark:text-blue-100 border border-blue-300 dark:border-blue-600": a1,
  "bg-red-50 dark:bg-red-700 text-red-700 dark:text-red-100 border border-red-300 dark:border-red-600": a2,
  "bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600": a3
});
function BackupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BackupComponent_div_9_h3_2_Template, 2, 0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BackupComponent_div_9_mat_icon_4_Template, 1, 0, "mat-icon", 15)(5, BackupComponent_div_9_mat_icon_5_Template, 1, 0, "mat-icon", 16)(6, BackupComponent_div_9_mat_icon_6_Template, 1, 0, "mat-icon", 17)(7, BackupComponent_div_9_mat_icon_7_Template, 1, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInUp400ms", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLoading || ctx_r2.uiState.status !== "idle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](8, _c0, ctx_r2.uiState.status === "completed", ctx_r2.uiState.status === "dispatched" || ctx_r2.uiState.status === "running_from_server", ctx_r2.uiState.status === "error" || ctx_r2.uiState.status === "failed", ctx_r2.uiState.status === "idle" && ctx_r2.uiState.message));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.uiState.status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.uiState.status === "dispatched" || ctx_r2.uiState.status === "running_from_server");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.uiState.status === "error" || ctx_r2.uiState.status === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.uiState.status === "idle" && ctx_r2.uiState.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.uiState.message);
  }
}
function BackupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Click \"Launch Backup\" to start a new backup process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class BackupComponent {
  constructor(backupService, websocketService, cdRef, translateService) {
    this.backupService = backupService;
    this.websocketService = websocketService;
    this.cdRef = cdRef;
    this.translateService = translateService;
    this.isLoading = false;
    this.uiState = {
      status: 'idle',
      message: this.translateService.instant('card.backup.backup_ready')
    }; // Message initial
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.translateService.get(['card.backup.backup_ready']).subscribe(translations => {
      this.uiState = {
        status: 'idle',
        message: translations['card.backup.backup_ready']
      }; // Message initial
    });
  }
  ngOnInit() {
    this.backupService.uiState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(state => {
      if (state.message !== 'No query results') {
        this.uiState = state;
        this.isLoading = state.status === 'dispatched' || state.status === 'running_from_server';
        this.cdRef.detectChanges(); // Crucial avec OnPush
      }
    });
    this.backupService.getServerSideStatus().subscribe(); // Déclenche une mise à jour de uiState$
    this.websocketService.listenForBackupCompletion().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(completionData => {
      if (completionData.backup_identifier != undefined) {
        this.backupService.updateUiState({
          status: completionData.status,
          message: completionData.message,
          backup_identifier: completionData.backup_identifier
        });
      }
    });
  }
  startBackup() {
    // Met l'état immédiatement à 'dispatched' via le service
    // isLoading deviendra true via l'abonnement à uiState$
    this.backupService.updateUiState({
      status: 'dispatched',
      message: 'Dispatching backup job...'
    });
    this.backupService.runBackup().subscribe({
      next: response => {},
      error: err => {
        console.error('BackupComponent: Error from runBackup API:', err);
      }
    });
  }
  resetUiAndCheckServer() {
    this.backupService.resetUiToIdle();
    this.backupService.getServerSideStatus().subscribe(); // Re-vérifier l'état serveur
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Getters pour le template
  get canStartBackup() {
    const canStart = !this.isLoading && this.uiState.status !== 'dispatched' && this.uiState.status !== 'running_from_server';
    return canStart;
  }
  get canReset() {
    const can = this.uiState.status === 'completed' || this.uiState.status === 'failed' || this.uiState.status === 'error';
    return can;
  }
  static {
    this.ɵfac = function BackupComponent_Factory(t) {
      return new (t || BackupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_BackupService__WEBPACK_IMPORTED_MODULE_1__.BackupService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BackupComponent,
      selectors: [["vex-backup"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 8,
      consts: [[1, "w-full", "max-w-lg", "mx-auto", "p-4", "md:p-6"], [1, "flex", "justify-center", "mb-6"], ["mat-raised-button", "", "color", "primary", 1, "backup-button", "px-6", "py-3", "text-base", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition-shadow", "duration-300", "flex", "items-center", 3, "disabled", "click"], [1, "inline-flex", "items-center", "justify-center", "w-6", "h-6", "mr-3"], ["diameter", "20", "class", "block", 4, "ngIf"], ["class", "block", 3, "svgIcon", 4, "ngIf"], [1, "font-medium"], ["class", "backup-container bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 transition-all duration-500 ease-out", 4, "ngIf"], ["class", "text-center text-gray-500 dark:text-gray-400 py-8", "rxTranslate", "card.backup.no_status_backup", 4, "ngIf"], ["diameter", "20", 1, "block"], [1, "block", 3, "svgIcon"], [1, "backup-container", "bg-white", "dark:bg-gray-800", "shadow-xl", "rounded-lg", "p-6", "transition-all", "duration-500", "ease-out"], [1, "backup-status"], ["class", "text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center", "rxTranslate", "card.backup.status", 4, "ngIf"], [1, "status-message", "flex", "items-center", "justify-center", "py-3", "px-4", "rounded-md", "text-sm", 3, "ngClass"], ["class", "mr-3 text-xl", "svgIcon", "mat:check_circle", 4, "ngIf"], ["class", "mr-3 text-xl", "svgIcon", "mat:hourglass_empty", 4, "ngIf"], ["class", "mr-3 text-xl", "svgIcon", "mat:error", 4, "ngIf"], ["class", "mr-3 text-xl", "svgIcon", "mat:info", 4, "ngIf"], [1, "message-text", "font-medium"], ["rxTranslate", "card.backup.status", 1, "text-lg", "font-semibold", "text-gray-700", "dark:text-gray-200", "mb-4", "text-center"], ["svgIcon", "mat:check_circle", 1, "mr-3", "text-xl"], ["svgIcon", "mat:hourglass_empty", 1, "mr-3", "text-xl"], ["svgIcon", "mat:error", 1, "mr-3", "text-xl"], ["svgIcon", "mat:info", 1, "mr-3", "text-xl"], ["rxTranslate", "card.backup.no_status_backup", 1, "text-center", "text-gray-500", "dark:text-gray-400", "py-8"]],
      template: function BackupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BackupComponent_Template_button_click_2_listener() {
            return ctx.canReset ? ctx.resetUiAndCheckServer() : ctx.startBackup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BackupComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 4)(5, BackupComponent_mat_icon_5_Template, 1, 1, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BackupComponent_div_9_Template, 10, 13, "div", 7)(10, BackupComponent_div_10_Template, 2, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.canStartBackup && !ctx.canReset);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, ctx.canReset ? "card.backup.reset" : "card.backup.start"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uiState.message || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.uiState.message && !ctx.isLoading);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner],
      styles: [".backup-container[_ngcontent-%COMP%] {\n  background: rgba(245, 245, 245, 0.8);\n  border-radius: 8px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.backup-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n}\n.backup-container[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n.backup-container[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.backup-container[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.backup-container[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%]   .estimated-time[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.5);\n}\n.backup-container[_ngcontent-%COMP%]   .backup-details[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 1rem;\n}\n.backup-container[_ngcontent-%COMP%]   .backup-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.backup-container[_ngcontent-%COMP%]   .backup-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.backup-button[_ngcontent-%COMP%], .download-button[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.backup-button[_ngcontent-%COMP%]:hover, .download-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.backup-button[_ngcontent-%COMP%]:active, .download-button[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: #4CAF50;\n}\n\n.text-warn[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\n\n.text-error[_ngcontent-%COMP%] {\n  color: #F44336;\n}\n\n.text-info[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYmFja3VwL2JhY2t1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ047QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxtQkFBQTtBQUFSO0FBSUk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBRk47QUFJTTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFGUjtBQU1JO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtBQUpOO0FBTU07RUFDRSxpQkFBQTtFQUNBLDRDQUFBO0FBSlI7QUFNUTtFQUNFLG1CQUFBO0FBSlY7O0FBVUU7RUFDRSx5QkFBQTtBQVBKO0FBU0k7RUFDRSwyQkFBQTtBQVBOO0FBVUk7RUFDRSwwQkFBQTtBQVJOOztBQVlFO0VBQ0UsY0FBQTtBQVRKOztBQVlFO0VBQ0UsY0FBQTtBQVRKOztBQVlFO0VBQ0UsY0FBQTtBQVRKOztBQVlFO0VBQ0UsY0FBQTtBQVRKIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t1cC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGF0dXMtbWVzc2FnZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC5tZXNzYWdlLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2dyZXNzLXBlcmNlbnQge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICBcclxuICAgICAgLmVzdGltYXRlZC10aW1lIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFja3VwLWRldGFpbHMge1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgXHJcbiAgICAgIC5kZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrdXAtYnV0dG9uLCAuZG93bmxvYWQtYnV0dG9uIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICM0Q0FGNTA7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXdhcm4ge1xyXG4gICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWVycm9yIHtcclxuICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1pbmZvIHtcclxuICAgIGNvbG9yOiAjMjE5NkYzO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('fadeInUp400ms', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
          opacity: 0,
          transform: 'translateY(20px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 90305:
/*!*************************************************************************!*\
  !*** ./src/app/pages/settings/show-settings/show-settings.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowSettingsComponent: () => (/* binding */ ShowSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-right.animation */ 95903);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/scale-in.animation */ 16962);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 58713);
/* harmony import */ var src_app_interfaces_setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/setting */ 63431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/ShowCardInformation */ 35208);
/* harmony import */ var _show_dynamic_card_show_dynamic_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../show-dynamic-card/show-dynamic-card.component */ 51735);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/user.model */ 43873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ 28604);
/* harmony import */ var _backup_backup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../backup/backup.component */ 36969);
/* harmony import */ var _ui_card_with_icon_action_card_with_icon_action_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/card-with-icon-action/card-with-icon-action.component */ 76758);
/* harmony import */ var _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vex/components/vex-breadcrumbs/vex-breadcrumbs.component */ 23483);
/* harmony import */ var _vex_components_vex_secondary_toolbar_vex_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component */ 99955);
/* harmony import */ var _ui_otp_status_otp_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/otp-status/otp-status.component */ 89112);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var src_app_auth_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/auth/change-password/change-password.component */ 23219);
/* harmony import */ var src_app_shared_change_languague_change_languague_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/change-languague/change-languague.component */ 60502);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _ui_maintenance_settings_maintenance_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/maintenance-settings/maintenance-settings.component */ 72601);
/* harmony import */ var src_static_data_authority_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/static-data/authority.constants */ 57570);
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/settings.service */ 40875);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../users/users.service */ 17259);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_AutoTranslateService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/AutoTranslateService */ 55249);
/* harmony import */ var src_app_services_FormUtilsService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/services/FormUtilsService */ 38613);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/services/language.service */ 48756);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 95072);












































function ShowSettingsComponent_vex_show_dynamic_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "vex-show-dynamic-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("editToggle", function ShowSettingsComponent_vex_show_dynamic_card_10_Template_vex_show_dynamic_card_editToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r2.onEditToggle($event));
    })("submitData", function ShowSettingsComponent_vex_show_dynamic_card_10_Template_vex_show_dynamic_card_submitData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r4.onSubmitData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("data", ctx_r0.InformationCard)("showEditButton", true);
  }
}
function ShowSettingsComponent_vex_card_with_icon_action_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "vex-card-with-icon-action", 9);
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("icon", card_r5.icon)("title", card_r5.title)("description", card_r5.description)("component", card_r5.component);
  }
}
const _c0 = (a0, a1) => [a0, a1];
class ShowSettingsComponent {
  constructor(setting_service, authService, userService, snackbar, translate, autoTranslate, formUtils, languaservice, activatedRoute, languageService) {
    this.setting_service = setting_service;
    this.authService = authService;
    this.userService = userService;
    this.snackbar = snackbar;
    this.translate = translate;
    this.autoTranslate = autoTranslate;
    this.formUtils = formUtils;
    this.languaservice = languaservice;
    this.activatedRoute = activatedRoute;
    this.languageService = languageService;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_26__.UntypedFormControl('fullwidth');
    this.InformationCard = [];
    this.userModel = src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.userModelCard;
    this.userAllRolesPermissions = src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.userModelCard;
    this.settingModel = src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.settingModelCard;
    this.roles = [];
    this.permissions = [];
    this.users = [];
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_25__.DestroyRef);
    this.cards = [{
      icon: 'language',
      title: this.translate.instant('card.language.title'),
      description: this.translate.instant('card.language.description'),
      component: src_app_shared_change_languague_change_languague_component__WEBPACK_IMPORTED_MODULE_16__.ChangeLanguagueComponent
    }, {
      icon: 'lock',
      title: this.translate.instant('card.password.title'),
      description: this.translate.instant('card.password.description'),
      component: src_app_auth_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__.ChangePasswordComponent
    }, {
      icon: 'backup',
      title: this.translate.instant('card.backup.title'),
      description: this.translate.instant('card.backup.description'),
      component: _backup_backup_component__WEBPACK_IMPORTED_MODULE_10__.BackupComponent
    }, {
      icon: 'phonelink_lock',
      title: this.translate.instant('card.otp.title'),
      description: this.translate.instant('card.otp.description'),
      component: _ui_otp_status_otp_status_component__WEBPACK_IMPORTED_MODULE_14__.OtpStatusComponent
    }];
  }
  initLang() {
    this.translate.get(['card.language.title', 'card.language.description', 'card.password.title', 'card.password.description', 'card.backup.title', 'card.backup.description', 'card.otp.title', 'card.otp.description', 'card.maintenance.title', 'card.maintenance.description']).subscribe(translations => {
      const baseCards = [{
        icon: 'language',
        title: translations['card.language.title'],
        description: translations['card.language.description'],
        component: src_app_shared_change_languague_change_languague_component__WEBPACK_IMPORTED_MODULE_16__.ChangeLanguagueComponent
      }, {
        icon: 'lock',
        title: translations['card.password.title'],
        description: translations['card.password.description'],
        component: src_app_auth_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__.ChangePasswordComponent
      }, {
        icon: 'backup',
        title: translations['card.backup.title'],
        description: translations['card.backup.description'],
        component: _backup_backup_component__WEBPACK_IMPORTED_MODULE_10__.BackupComponent
      }, {
        icon: 'phonelink_lock',
        title: translations['card.otp.title'],
        description: translations['card.otp.description'],
        component: _ui_otp_status_otp_status_component__WEBPACK_IMPORTED_MODULE_14__.OtpStatusComponent
      }];
      if (this.isAdmin()) {
        baseCards.push({
          icon: 'build',
          title: translations['card.maintenance.title'],
          description: translations['card.maintenance.description'],
          component: _ui_maintenance_settings_maintenance_settings_component__WEBPACK_IMPORTED_MODULE_17__.MaintenanceSettingsComponent
        });
      }
      this.cards = baseCards;
    });
  }
  isAdmin() {
    const user = this.authService.user;
    if (!user || !user.roles) return false;
    return user.roles.some(role => role.name === src_static_data_authority_constants__WEBPACK_IMPORTED_MODULE_18__.Authority.ADMIN);
  }
  ngOnInit() {
    this.initLang();
    this.getData();
    this.initData();
    this.createCards();
    this.translate.onLangChange.subscribe(() => {
      this.InformationCard = [];
      this.createCards();
    });
  }
  getData() {
    this.getInitData().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_27__.takeUntilDestroyed)(this.destroyRef)).subscribe(users => {
      // Traitement supplémentaire si nécessaire
    });
  }
  getInitData() {
    return this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_28__.map)(response => {
      if (response['usersData']) {
        this.roles = response['usersData'].roles || [];
        this.permissions = response['usersData'].permissions || [];
        // Ne pas mettre à jour directement l'utilisateur ici
        // Cela sera fait dans initData()
      }
      this.users = response['usersData']?.users || [];
      return this.users;
    }));
  }
  initData() {
    let user = this.authService.user;
    let settings = this.setting_service.setting;
    // Ne pas modifier les rôles et permissions ici
    // Conservez les rôles et permissions de l'utilisateur tels quels
    this.userModel = user ? user : this.userModel;
    this.userAllRolesPermissions.roles = this.roles;
    this.userAllRolesPermissions.permissions = this.permissions;
    this.settingModel = settings ? settings : this.settingModel;
  }
  createCards() {
    // Récupérer les champs Formly
    const userFields = (0,src_app_models_user_model__WEBPACK_IMPORTED_MODULE_8__.getUserFormlyFields)(this.translate).flatMap(f => f.fieldGroup ?? [f]);
    // Initialiser les champs si nécessaire
    if (this.userModel) {
      // Configure les champs select avec:
      // - Tous les rôles et permissions disponibles
      // - Les rôles et permissions de l'utilisateur
      this.formUtils.configureSelectFields(userFields, {
        ...this.userAllRolesPermissions
      });
    }
    // Crée les cartes avec les données mises à jour
    const profileSettings = (0,src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.createCardInfo)(this.autoTranslate, {
      ...src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.profileSettingsCardInformation,
      model: this.userModel,
      form: userFields
    });
    const appSettings = (0,src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.createCardInfo)(this.autoTranslate, {
      ...src_app_interfaces_ShowCardInformation__WEBPACK_IMPORTED_MODULE_6__.appSettingsCardInformation,
      model: this.settingModel,
      form: (0,src_app_interfaces_setting__WEBPACK_IMPORTED_MODULE_5__.getSettingFormlyFields)(this.translate).flatMap(f => f.fieldGroup ?? [f])
    });
    this.InformationCard = [];
    if (profileSettings.model) this.InformationCard.push(profileSettings);
    if (appSettings.model) this.InformationCard.push(appSettings);
  }
  /**
   * Gère le basculement du mode édition d'une carte
   * @param cardData - Les données de la carte à modifier
   */
  /**
   * Gère le basculement du mode édition d'une carte
   * @param cardData - Les données de la carte à modifier
   */
  onEditToggle(cardData) {
    // Basculer l'état d'édition
    const wasEditing = cardData.editing;
    cardData.editing = !wasEditing;
    if (cardData.editing) {
      // Passage en mode édition
      this.handleEditMode(cardData);
    } else {
      // Sortie du mode édition
      this.handleViewMode(cardData);
    }
  }
  handleEditMode(cardData) {
    // Déployer la carte
    cardData.isExpanded = true;
    // Convertir la date pour l'édition si nécessaire
    this.convertBirthdayForEdit(cardData);
  }
  handleViewMode(cardData) {
    // Convertir la date pour l'affichage si nécessaire
    this.convertBirthdayForView(cardData);
  }
  convertBirthdayForEdit(cardData) {
    if (!cardData.model.birthday) return;
    cardData.model.birthday = typeof cardData.model.birthday === 'string' ? this.safeParseDate(cardData.model.birthday) : cardData.model.birthday;
  }
  convertBirthdayForView(cardData) {
    if (!cardData.model.birthday) return;
    cardData.model.birthday = cardData.model.birthday instanceof Date ? this.languageService.formatDateLocal(cardData.model.birthday) : cardData.model.birthday;
  }
  safeParseDate(dateString) {
    try {
      // Utilisation de la méthode parseDate du service LanguageService
      const parsedDate = this.languageService.parseDate(dateString);
      return parsedDate instanceof Date ? parsedDate : null;
    } catch (error) {
      console.error('Erreur lors du parsing de la date:', error);
      return null;
    }
  }
  onSubmitData(cardDataInfo) {
    cardDataInfo.isLoading = true;
    switch (cardDataInfo.type) {
      case 'user':
        this.handleUserUpdate(cardDataInfo);
        break;
      // Ajout du break manquant
      case 'setting':
        this.handleSettingUpdate(cardDataInfo);
        break;
      // Ajoutez un cas par défaut si nécessaire
      default:
        console.warn(`Type non géré: ${cardDataInfo.type}`);
        cardDataInfo.isLoading = false;
        break;
    }
  }
  handleSettingUpdate(cardData) {
    const updateSetting = cardData.model;
    this.setting_service.updateSetting(updateSetting).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => cardData.isLoading = false)).subscribe({
      next: response => {
        if (response?.data) {
          this.setting_service.setting = response.data;
          const index = this.InformationCard.indexOf(cardData);
          if (index !== -1) {
            this.InformationCard[index].model = this.setting_service.setting;
            this.InformationCard[index].editing = false;
          }
        }
        this.showResponse(response?.message);
      },
      error: error => {
        console.error('Error updating setting:', error);
        this.showResponse('Error updating setting');
      }
    });
  }
  handleUserUpdate(cardData) {
    const slug = cardData.model.slug;
    const updateUser = cardData.model;
    if (updateUser.country_name) {
      updateUser.available_countries = updateUser.country_name;
    }
    const userdata = this.createFormData(updateUser);
    this.userService.updateUser(slug, userdata).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => cardData.isLoading = false)).subscribe({
      next: response => {
        if (response?.data) {
          const index = this.InformationCard.indexOf(cardData);
          if (index !== -1) {
            this.InformationCard[index].model = this.authService.user;
            this.convertBirthdayForView(this.InformationCard[index]);
            this.InformationCard[index].editing = false;
            // Reconfigurer les champs select après la mise à jour
            if (cardData.form) {
              this.formUtils.configureSelectFields(cardData.form, this.authService.user);
            }
          }
        }
        // window.location.reload();
        this.showResponse(response?.message);
      },
      error: error => {
        console.error('Error updating user:', error);
        this.showResponse('Error updating user');
      }
    });
  }
  createFormData(user) {
    const formData = new FormData();
    // Champs obligatoires
    formData.append('first_name', user.first_name || '');
    formData.append('last_name', user.last_name || '');
    formData.append('email', user.email || '');
    formData.append('phone', user.phone || '');
    // Gestion du pays
    if (user.available_countries) {
      if (Array.isArray(user.available_countries) && user.available_countries.length > 0) {
        const country = user.available_countries[0]; // Prend le premier pays
        formData.append('country_id', country.id.toString());
      } else if (typeof user.available_countries === 'object' && user.available_countries.id) {
        formData.append('country_id', user.available_countries.id.toString());
      }
    } else {
      // Si aucun pays n'est sélectionné, envoyez une chaîne vide
      formData.append('country_id', '');
    }
    // Autres champs...
    if (user.birthday) {
      const formattedDate = this.formatDateForLaravel(user.birthday);
      if (formattedDate) {
        formData.append('birthday', formattedDate);
      }
    }
    if (user.photo instanceof File) {
      formData.append('photo', user.photo);
    }
    //  Gestion des rôles et permissions si nécessaire
    if (user.roles && Array.isArray(user.roles)) {
      user.roles.forEach((role, index) => {
        formData.append(`roles[${index}]`, role.name);
      });
    }
    if (user.permissions && Array.isArray(user.permissions)) {
      user.permissions.forEach((permission, index) => {
        formData.append(`permissions[${index}]`, permission.name);
      });
    }
    return formData;
  }
  // private createFormData(user: any): FormData {
  //   const formData = new FormData();
  //   formData.append('first_name', user.first_name);
  //   formData.append('last_name', user.last_name);
  //   formData.append('email', user.email);
  //   if (user.birthday) {
  //     const formattedDate = this.formatDateForLaravel(user.birthday);
  //     if (formattedDate) {
  //       formData.append('birthday', formattedDate);
  //     }
  //   }
  //   if (user.photo instanceof File) {
  //     formData.append('photo', user.photo);
  //   }
  //   // Gestion des rôles et permissions si nécessaire
  //   if (user.roles && Array.isArray(user.roles)) {
  //     user.roles.forEach((role: Roles, index: number) => {
  //       formData.append(`roles[${index}]`, role.name);
  //     });
  //   }
  //   if (user.permissions && Array.isArray(user.permissions)) {
  //     user.permissions.forEach((permission: Permissions, index: number) => {
  //       formData.append(`permissions[${index}]`, permission.name);
  //     });
  //   }
  //   return formData;
  // }
  formatDateForLaravel(date) {
    if (!date) return null;
    // Si c'est déjà un string au bon format
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }
    // Conversion depuis un objet Date ou un autre format de string
    const jsDate = new Date(date);
    if (isNaN(jsDate.getTime())) return null;
    return jsDate.toISOString().split('T')[0]; // Extrait YYYY-MM-DD
  }
  showResponse(message) {
    if (message) {
      this.snackbar.open(message, 'Fermer', {
        duration: 9000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: 'snackbar-success'
      });
    }
  }
  static {
    this.ɵfac = function ShowSettingsComponent_Factory(t) {
      return new (t || ShowSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_19__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_20__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_21__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_AutoTranslateService__WEBPACK_IMPORTED_MODULE_22__.AutoTranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_FormUtilsService__WEBPACK_IMPORTED_MODULE_23__.FormUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_24__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_24__.LanguageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
      type: ShowSettingsComponent,
      selectors: [["vex-show-settings"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 17,
      consts: [[3, "current"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "mt-6"], [1, "w-full"], [3, "data", "showEditButton", "editToggle", "submitData", 4, "ngIf"], [3, "icon", "title", "description", "component", 4, "ngFor", "ngForOf"], [3, "data", "showEditButton", "editToggle", "submitData"], [3, "icon", "title", "description", "component"]],
      template: function ShowSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](2, "vex-breadcrumbs", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](6, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "vex-page-layout-content", 4)(8, "div", 5)(9, "mat-accordion", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](10, ShowSettingsComponent_vex_show_dynamic_card_10_Template, 1, 2, "vex-show-dynamic-card", 6)(11, ShowSettingsComponent_vex_card_with_icon_action_11_Template, 1, 4, "vex-card-with-icon-action", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("current", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](1, 8, "menu.dashboards"));
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction2"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](3, 10, "menu.dashboards"), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 12, "menu.settings")));
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.InformationCard.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx.cards);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIcon, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__.VexPageLayoutContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgIf, _show_dynamic_card_show_dynamic_card_component__WEBPACK_IMPORTED_MODULE_7__.ShowDynamicCardComponent, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_36__.FormlyModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe, _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_37__.FormlyMatDatepickerModule, _ui_card_with_icon_action_card_with_icon_action_component__WEBPACK_IMPORTED_MODULE_11__.CardWithIconActionComponent, _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_12__.VexBreadcrumbsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_38__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_38__.MatAccordion, _vex_components_vex_secondary_toolbar_vex_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_13__.VexSecondaryToolbarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInUp400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleIn400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__.stagger40ms]
      }
    });
  }
}

/***/ }),

/***/ 76758:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ui/card-with-icon-action/card-with-icon-action.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardWithIconActionComponent: () => (/* binding */ CardWithIconActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 19322);













function CardWithIconActionComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.description, " ");
  }
}
function CardWithIconActionComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
class CardWithIconActionComponent {
  constructor() {
    this.icon = '';
    this.title = '';
    this.description = '';
    this.actionText = 'Modifier';
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.showComponent = false;
  }
  toggleComponent() {
    this.showComponent = !this.showComponent;
    if (!this.showComponent) {
      this.cancel.emit();
    }
  }
  onPanelClosed() {
    this.showComponent = false;
    this.cancel.emit();
  }
  static {
    this.ɵfac = function CardWithIconActionComponent_Factory(t) {
      return new (t || CardWithIconActionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CardWithIconActionComponent,
      selectors: [["vex-card-with-icon-action"]],
      inputs: {
        icon: "icon",
        title: "title",
        description: "description",
        component: "component",
        actionText: "actionText"
      },
      outputs: {
        cancel: "cancel"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 10,
      consts: [[1, "bg-white", "rounded-lg", "shadow-sm", "hover:shadow-none", "border", "border-transparent", "hover:border-primary-500", "transition-all", "duration-300", "ease-in-out", "overflow-hidden", "border-2", "hover:border-2", "my-6", "p-2", 3, "expanded", "opened", "closed"], [1, "px-2", "py-2", "sm:px-10", "sm:py-8", "hover:bg-gray-50", "transition-colors", "duration-200"], [1, "flex", "flex-wrap", "items-center", "w-full", "min-w-0"], [1, "flex", "gap-4", "sm:gap-6", "flex-grow"], [1, "icon-lg", "text-primary-600", "flex-shrink-0"], [1, "flex", "flex-col", "min-w-0"], [1, "title", "m-0", "text-lg", "font-semibold", "text-gray-700", "truncate"], ["class", "text-gray-600 text-sm mt-2 mb-0 truncate", 4, "ngIf"], [1, "flex", "items-center", "ml-auto", "flex-shrink-0"], [1, "text-sm", "text-gray-500", "mr-3"], [1, "transition-transform", "duration-200", "transform", "-rotate-90", "text-gray-600"], [1, "w-full", "px-10", "py-6"], [4, "ngComponentOutlet"], [1, "text-gray-600", "text-sm", "mt-2", "mb-0", "truncate"]],
      template: function CardWithIconActionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function CardWithIconActionComponent_Template_mat_expansion_panel_opened_0_listener() {
            return ctx.showComponent = true;
          })("closed", function CardWithIconActionComponent_Template_mat_expansion_panel_closed_0_listener() {
            return ctx.onPanelClosed();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CardWithIconActionComponent_p_9_Template, 2, 1, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " expand_more ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CardWithIconActionComponent_ng_container_17_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx.showComponent);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, ctx.showComponent ? "global.expansion.Unfolded" : "global.expansion.Folded"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("rotate-0", ctx.showComponent);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", ctx.component);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgComponentOutlet, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelHeader],
      styles: ["[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e0e0e0;\n  background-color: #f9f9f9;\n  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #c0c0c0;\n}\n[_nghost-%COMP%]   .mat-expansion-panel.mat-expanded[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #a0a0a0;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto !important;\n  padding: 16px 24px;\n  border-radius: 8px 8px 0 0;\n  transition: background-color 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 16px;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #606060;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0078d4;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   button.mat-raised-button[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n[_nghost-%COMP%]   button.mat-raised-button[_ngcontent-%COMP%]:hover {\n  background-color: #005a9e;\n}\n[_nghost-%COMP%]   button.mat-button[_ngcontent-%COMP%] {\n  color: #0078d4;\n}\n[_nghost-%COMP%]   button.mat-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 120, 212, 0.1);\n}\n[_nghost-%COMP%]   formly-form[_ngcontent-%COMP%]   .mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #e8e8e8;\n}\n[_nghost-%COMP%]   formly-form[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .photo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #e0e0e0;\n}\n[_nghost-%COMP%]   .dynamic-field-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 120, 212, 0.1);\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .dynamic-field-item[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n[_nghost-%COMP%]   .dynamic-field-item[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvY2FyZC13aXRoLWljb24tYWN0aW9uL2NhcmQtd2l0aC1pY29uLWFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUVFLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0VBQUE7QUFESjtBQUdJO0VBQ0Usd0NBQUE7RUFDQSxxQkFBQTtBQUROO0FBSUk7RUFDRSx3Q0FBQTtFQUNBLHFCQUFBO0FBRk47QUFLSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO0FBSE47QUFLTTtFQUNFLHlCQUFBO0FBSFI7QUFNTTs7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9NO0VBQ0UsY0FBQTtBQUxSO0FBU0k7RUFDRSxvQkFBQTtBQVBOO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVZKO0FBYUU7RUFDRSxXQUFBO0FBWEo7QUFlRTtFQUNFLGNBQUE7QUFiSjtBQWlCRTtFQUNFLGtCQUFBO0FBZko7QUFnQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFkTjtBQWVNO0VBQ0UseUJBQUE7QUFiUjtBQWdCSTtFQUNFLGNBQUE7QUFkTjtBQWVNO0VBQ0Usd0NBQUE7QUFiUjtBQW9CSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFsQk47QUFvQkk7RUFDRSxpQkFBQTtBQWxCTjtBQXdCSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUF0Qk47QUE0Qkk7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0FBMUJOO0FBNEJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBMUJOO0FBNEJJO0VBQ0UsV0FBQTtBQTFCTiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAvLyBCYXNlIGNhcmQgc3R5bGluZ1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAvLyBNb3JlIHJvdW5kZWQgY29ybmVyc1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IC8vIFN1YnRsZSBzaGFkb3dcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7IC8vIExpZ2h0IGJvcmRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLy8gU2xpZ2h0bHkgb2ZmLXdoaXRlIGJhY2tncm91bmRcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8vIFNsaWdodGx5IG1vcmUgcHJvbWluZW50IHNoYWRvdyBvbiBob3ZlclxyXG4gICAgICBib3JkZXItY29sb3I6ICNjMGMwYzA7IC8vIFNsaWdodGx5IGRhcmtlciBib3JkZXIgb24gaG92ZXJcclxuICAgIH1cclxuXHJcbiAgICAmLm1hdC1leHBhbmRlZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8vIFNsaWdodGx5IG1vcmUgcHJvbWluZW50IHNoYWRvdyB3aGVuIGV4cGFuZGVkXHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2EwYTBhMDsgLy8gRGFya2VyIGJvcmRlciB3aGVuIGV4cGFuZGVkXHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IC8vIEFsbG93IGhlaWdodCB0byBhZGp1c3QgYmFzZWQgb24gY29udGVudFxyXG4gICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7IC8vIEluY3JlYXNlZCBwYWRkaW5nXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwOyAvLyBSb3VuZGVkIHRvcCBjb3JuZXJzXHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8vIExpZ2h0IGhvdmVyIGVmZmVjdFxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxOyAvLyBBbGxvdyB0ZXh0IHRvIHRha2UgYXZhaWxhYmxlIHNwYWNlXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4OyAvLyBTcGFjZSBiZXR3ZWVuIHRleHQgYW5kIGNvbnRyb2xzXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjA2MDYwOyAvLyBEYXJrZXIgYXJyb3cgY29sb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAwIDI0cHggMjRweDsgLy8gUGFkZGluZyBmb3IgY29udGVudCBhcmVhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTcGVjaWZpYyBhZGp1c3RtZW50cyBmb3IgZWxlbWVudHMgd2l0aGluIHRoZSBjYXJkXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAvLyBTbGlnaHRseSBsYXJnZXIgdGl0bGVcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IC8vIFNlbWktYm9sZFxyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxuXHJcbiAgLy8gSWNvbiBzdHlsaW5nXHJcbiAgbWF0LWljb24ge1xyXG4gICAgY29sb3I6ICMwMDc4ZDQ7IC8vIFdpbmRvd3MgMTEgYWNjZW50IGJsdWUgZm9yIHByaW1hcnkgaWNvbnNcclxuICB9XHJcblxyXG4gIC8vIEJ1dHRvbiBzdHlsaW5nXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgLy8gU2xpZ2h0bHkgcm91bmRlZCBidXR0b25zXHJcbiAgICAmLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhkNDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YTllO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm1hdC1idXR0b24ge1xyXG4gICAgICBjb2xvcjogIzAwNzhkNDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjAsIDIxMiwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRm9ybWx5IGZvcm0gYWRqdXN0bWVudHMgKGFzc3VtaW5nIEZvcm1seSBNYXRlcmlhbCBpcyB1c2VkKVxyXG4gIGZvcm1seS1mb3JtIHtcclxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8vIFJvdW5kZWQgaW5wdXQgZmllbGRzXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IC8vIExpZ2h0IGJhY2tncm91bmQgZm9yIGlucHV0c1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDsgLy8gUmVtb3ZlIGV4dHJhIHBhZGRpbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFBob3RvIHNlY3Rpb25cclxuICAucGhvdG8tc2VjdGlvbiB7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8vIEVuc3VyZSBjaXJjdWxhclxyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwOyAvLyBMaWdodCBib3JkZXJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIER5bmFtaWMgZmllbGRzIGluIHZpZXcgbW9kZVxyXG4gIC5keW5hbWljLWZpZWxkLWl0ZW0ge1xyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjAsIDIxMiwgMC4xKTsgLy8gTGlnaHQgYmx1ZSBiYWNrZ3JvdW5kIGZvciBpY29uc1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8vIENpcmN1bGFyIGJhY2tncm91bmRcclxuICAgIH1cclxuICAgIC5maWVsZC12YWx1ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IC8vIE1lZGl1bSB3ZWlnaHQgZm9yIHZhbHVlc1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICAgIC5maWVsZC1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateY(20px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateY(20px)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 100:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/ui/maintenance-settings/confirm-maintenance-dialog/confirm-maintenance-dialog.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmMaintenanceDialogComponent: () => (/* binding */ ConfirmMaintenanceDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);











class ConfirmMaintenanceDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static {
    this.ɵfac = function ConfirmMaintenanceDialogComponent_Factory(t) {
      return new (t || ConfirmMaintenanceDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmMaintenanceDialogComponent,
      selectors: [["vex-confirm-maintenance-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 19,
      consts: [[1, "container", "p-6"], ["mat-dialog-title", "", 1, "flex", "items-start", "justify-between"], [1, "flex", "items-start", "justify-start", "gap-2"], ["color", "warn", "svgIcon", "mat:build"], [1, "headline", "m-0", "flex-auto"], [1, "text-border"], [1, "flex", "flex-col", "items-start", "justify-start", "space-y-2"], [1, "text-lg", "text-red-500", "font-medium"], ["align", "end", 1, "space-x-2"], ["mat-stroked-button", "", "mat-dialog-close", "false", "color", "default", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "mat-dialog-close"]],
      template: function ConfirmMaintenanceDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-content", 6)(10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 8)(15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.isActive ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "maintenance_dialog.activate_title") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "maintenance_dialog.deactivate_title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.isActive ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "maintenance_dialog.activate_message") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "maintenance_dialog.deactivate_message"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "user.cancel"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.isActive ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, "maintenance_dialog.activate_button") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "maintenance_dialog.deactivate_button"), " ");
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 72601:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ui/maintenance-settings/maintenance-settings.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceSettingsComponent: () => (/* binding */ MaintenanceSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/admin-auth.service */ 34858);
/* harmony import */ var src_app_interfaces_Maintenance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/Maintenance */ 14316);
/* harmony import */ var _confirm_maintenance_dialog_confirm_maintenance_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-maintenance-dialog/confirm-maintenance-dialog.component */ 100);














class MaintenanceSettingsComponent {
  constructor() {
    this.adminAuthService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_0__.AdminAuthService);
    this.snackbar = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog);
    this.translate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService);
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
    this.model = {
      is_active: false,
      message: ''
    };
    this.fields = [];
    this.previousState = false;
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.isDialogOpen = false;
  }
  ngOnInit() {
    this.initializeFormlyFields();
    this.loadMaintenanceStatus();
  }
  initializeFormlyFields() {
    this.fields = (0,src_app_interfaces_Maintenance__WEBPACK_IMPORTED_MODULE_1__.getMaintenanceSettingsFormlyFields)(this.translate, field => {
      this.onToggleChange(field);
    }, () => {
      this.toggleMaintenance();
    });
  }
  disableFormFields() {
    // Désactiver tous les contrôles du formulaire
    this.form.get('is_active')?.disable({
      emitEvent: false
    });
    this.form.get('message')?.disable({
      emitEvent: false
    });
  }
  enableFormFields() {
    // Réactiver tous les contrôles du formulaire
    this.form.get('is_active')?.enable({
      emitEvent: false
    });
    this.form.get('message')?.enable({
      emitEvent: false
    });
  }
  loadMaintenanceStatus() {
    this.adminAuthService.getMaintenanceStatus().subscribe({
      next: response => {
        this.model = {
          is_active: response.is_active,
          message: response.message || ''
        };
        this.previousState = response.is_active;
      },
      error: error => {
        console.error('Error loading maintenance status:', error);
        this.snackbar.open('Erreur lors du chargement du statut', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }
  onToggleChange(field) {
    // Éviter d'ouvrir plusieurs dialogs en même temps
    if (this.isDialogOpen) {
      return;
    }
    const willBeActive = field.formControl?.value;
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(_confirm_maintenance_dialog_confirm_maintenance_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmMaintenanceDialogComponent, {
      data: {
        isActive: willBeActive
      },
      width: '500px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      this.isDialogOpen = false;
      if (confirmed) {
        // Appliquer le changement immédiatement
        this.toggleMaintenance();
      } else {
        // Annuler le changement et revenir à l'état précédent
        if (field.formControl) {
          field.formControl.setValue(this.previousState, {
            emitEvent: false
          });
        }
        this.model.is_active = this.previousState;
      }
    });
  }
  toggleMaintenance() {
    this.isLoading.set(true);
    this.disableFormFields();
    this.adminAuthService.toggleMaintenance({
      is_active: this.model.is_active,
      message: this.model.message || ''
    }).subscribe({
      next: response => {
        this.isLoading.set(false);
        this.enableFormFields();
        this.previousState = this.model.is_active;
        this.snackbar.open(response.message, 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: 'snackbar-success'
        });
      },
      error: error => {
        this.isLoading.set(false);
        this.enableFormFields();
        // Remettre le toggle à l'état précédent
        this.model.is_active = this.previousState;
        this.snackbar.open(error.error?.message || 'Erreur', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: 'snackbar-error'
        });
      }
    });
  }
  static {
    this.ɵfac = function MaintenanceSettingsComponent_Factory(t) {
      return new (t || MaintenanceSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MaintenanceSettingsComponent,
      selectors: [["vex-maintenance-settings"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 4,
      consts: [[3, "form", "fields", "model"]],
      template: function MaintenanceSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "formly-form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInRight", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fields)("model", ctx.model);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_9__.FormlyForm, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_10__.FormlyMaterialModule],
      styles: ["[_nghost-%COMP%]     quill-editor {\n  display: block;\n  width: 100%;\n}\n[_nghost-%COMP%]     .ql-toolbar {\n  border: 1px solid #e5e7eb;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  background-color: #f9fafb;\n  padding: 0.5rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]     .ql-toolbar {\n    padding: 0.375rem;\n  }\n  [_nghost-%COMP%]     .ql-toolbar .ql-formats {\n    margin-right: 0.25rem !important;\n  }\n}\n[_nghost-%COMP%]     .ql-container {\n  border: 1px solid #e5e7eb;\n  border-top: none;\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n  min-height: 200px;\n  font-size: 14px;\n  width: 100%;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]     .ql-container {\n    min-height: 150px;\n    font-size: 13px;\n  }\n}\n[_nghost-%COMP%]     .ql-editor {\n  min-height: 200px;\n  padding: 1rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]     .ql-editor {\n    min-height: 150px;\n    padding: 0.75rem;\n  }\n}\n[_nghost-%COMP%]     .ql-editor.ql-blank::before {\n  color: #9ca3af;\n  font-style: normal;\n  left: 1rem;\n  right: 1rem;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]     .ql-editor.ql-blank::before {\n    left: 0.75rem;\n    right: 0.75rem;\n  }\n}\n[_nghost-%COMP%]     quill-editor[disabled] .ql-toolbar {\n  background-color: #f3f4f6;\n  opacity: 0.6;\n  pointer-events: none;\n}\n[_nghost-%COMP%]     quill-editor[disabled] .ql-container {\n  background-color: #f9fafb;\n  opacity: 0.6;\n}\n[_nghost-%COMP%]     quill-editor[disabled] .ql-editor {\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]     .ql-toolbar button {\n  width: 28px;\n  height: 28px;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]     .ql-toolbar button {\n    width: 24px;\n    height: 24px;\n  }\n}\n[_nghost-%COMP%]     .ql-toolbar .ql-stroke {\n  stroke: #374151;\n}\n[_nghost-%COMP%]     .ql-toolbar .ql-fill {\n  fill: #374151;\n}\n[_nghost-%COMP%]     .ql-toolbar button:hover .ql-stroke, [_nghost-%COMP%]     .ql-toolbar button:focus .ql-stroke {\n  stroke: #1f2937;\n}\n[_nghost-%COMP%]     .ql-toolbar button:hover .ql-fill, [_nghost-%COMP%]     .ql-toolbar button:focus .ql-fill {\n  fill: #1f2937;\n}\n[_nghost-%COMP%]     .ql-toolbar button.ql-active .ql-stroke {\n  stroke: #3b82f6;\n}\n[_nghost-%COMP%]     .ql-toolbar button.ql-active .ql-fill {\n  fill: #3b82f6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvbWFpbnRlbmFuY2Utc2V0dGluZ3MvbWFpbnRlbmFuY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFKSjtBQVFFO0VBQ0U7SUFDRSxpQkFBQTtFQU5KO0VBU0U7SUFDRSxnQ0FBQTtFQVBKO0FBQ0Y7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0U7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQVRKO0FBQ0Y7QUFZRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQVZKO0FBYUU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFYSjtBQUNGO0FBY0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVpKO0FBZUU7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBYko7QUFDRjtBQWlCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBZko7QUFrQkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFoQko7QUFtQkU7RUFDRSxtQkFBQTtBQWpCSjtBQXFCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBbkJKO0FBc0JFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXBCSjtBQUNGO0FBdUJFO0VBQ0UsZUFBQTtBQXJCSjtBQXdCRTtFQUNFLGFBQUE7QUF0Qko7QUF5QkU7O0VBRUUsZUFBQTtBQXZCSjtBQTBCRTs7RUFFRSxhQUFBO0FBeEJKO0FBMkJFO0VBQ0UsZUFBQTtBQXpCSjtBQTRCRTtFQUNFLGFBQUE7QUExQkoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdHlsZXMgcG91ciBsZSBjb21wb3NhbnQgbWFpbnRlbmFuY2Utc2V0dGluZ3NcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLy8gUXVpbGwgRWRpdG9yIFN0eWxlc1xuICBxdWlsbC1lZGl0b3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnFsLXRvb2xiYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zNzVyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5cbiAgLy8gUmVzcG9uc2l2ZSB0b29sYmFyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5xbC10b29sYmFyIHtcbiAgICAgIHBhZGRpbmc6IDAuMzc1cmVtO1xuICAgIH1cblxuICAgIC5xbC10b29sYmFyIC5xbC1mb3JtYXRzIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5xbC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjM3NXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zNzVyZW07XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLnFsLWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cblxuICAucWwtZWRpdG9yIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLnFsLWVkaXRvciB7XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgLnFsLWVkaXRvci5xbC1ibGFuazo6YmVmb3JlIHtcbiAgICBjb2xvcjogIzljYTNhZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGVmdDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAwLjc1cmVtO1xuICAgICAgcmlnaHQ6IDAuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZWQgc3RhdGVcbiAgcXVpbGwtZWRpdG9yW2Rpc2FibGVkXSAucWwtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBxdWlsbC1lZGl0b3JbZGlzYWJsZWRdIC5xbC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgcXVpbGwtZWRpdG9yW2Rpc2FibGVkXSAucWwtZWRpdG9yIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLy8gQW3Dg8KpbGlvcmF0aW9uIGRlIGwnYWZmaWNoYWdlIGRlcyBib3V0b25zIGRlIGxhIHRvb2xiYXJcbiAgLnFsLXRvb2xiYXIgYnV0dG9uIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAucWwtdG9vbGJhciBidXR0b24ge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLnFsLXRvb2xiYXIgLnFsLXN0cm9rZSB7XG4gICAgc3Ryb2tlOiAjMzc0MTUxO1xuICB9XG5cbiAgLnFsLXRvb2xiYXIgLnFsLWZpbGwge1xuICAgIGZpbGw6ICMzNzQxNTE7XG4gIH1cblxuICAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZSxcbiAgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2Uge1xuICAgIHN0cm9rZTogIzFmMjkzNztcbiAgfVxuXG4gIC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtZmlsbCxcbiAgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1maWxsIHtcbiAgICBmaWxsOiAjMWYyOTM3O1xuICB9XG5cbiAgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlIHtcbiAgICBzdHJva2U6ICMzYjgyZjY7XG4gIH1cblxuICAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsIHtcbiAgICBmaWxsOiAjM2I4MmY2O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
          opacity: 0,
          transform: 'translateX(20px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
          opacity: 1,
          transform: 'translateX(0)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 89112:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/otp-status/otp-status.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpStatusComponent: () => (/* binding */ OtpStatusComponent)
/* harmony export */ });
/* harmony import */ var C_laragon_www_resurex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _confirm_dialog_component_confirm_dialog_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-dialog-component/confirm-dialog-component.component */ 75946);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);

















function OtpStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mat-progress-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "global.loading"), " ");
  }
}
function OtpStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function OtpStatusComponent_div_2_Template_mat_slide_toggle_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx_r1.status ? "otp.status.active" : "otp.status.disabled"), " ");
  }
}
class OtpStatusComponent {
  constructor(authService, snackbar, router) {
    this.authService = authService;
    this.snackbar = snackbar;
    this.router = router;
    this.status = false;
    this.isLoading = false;
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog);
  }
  getResponseInfo() {
    this.status = this.authService.response?.otp_required;
  }
  ngOnInit() {
    this.getResponseInfo();
  }
  onToggleChange(event) {
    var _this = this;
    return (0,C_laragon_www_resurex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Annule le changement immédiat du toggle
      event.source.checked = !event.checked;
      // Ouvre la boîte de dialogue
      const dialogRef = _this.dialog.open(_confirm_dialog_component_confirm_dialog_component_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
        width: '400px',
        data: {
          message: event.checked ? 'Voulez-vous activer la vérification en deux étapes ?' : 'Voulez-vous désactiver la vérification en deux étapes ?'
        }
      });
      // Attend la réponse
      const result = yield dialogRef.afterClosed().toPromise();
      if (result) {
        _this.processToggleChange(event.checked);
      }
    })();
  }
  processToggleChange(newStatus) {
    this.isLoading = true;
    this.authService.UpdateOtp({
      otp_enabled: newStatus
    }).subscribe({
      next: response => {
        this.status = newStatus;
        this.isLoading = false;
        this.showMessage(response.message);
      },
      error: error => {
        this.isLoading = false;
        this.showMessage(error.error.message);
      }
    });
  }
  showMessage(params) {
    if (params) {
      this.snackbar.open(params, 'Fermer', {
        duration: 10000
      });
    }
  }
  static {
    this.ɵfac = function OtpStatusComponent_Factory(t) {
      return new (t || OtpStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: OtpStatusComponent,
      selectors: [["vex-otp-status"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "otp-toggle-container"], ["class", "otp-loading-state", 4, "ngIf"], ["class", "otp-active-state", 4, "ngIf"], [1, "otp-loading-state"], [1, "loading-text"], ["mode", "indeterminate", "color", "primary", "diameter", "30", "strokeWidth", "4"], [1, "otp-active-state"], ["color", "primary", 1, "otp-slide-toggle", 3, "checked", "change"], [1, "status-text"]],
      template: function OtpStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OtpStatusComponent_div_1_Template, 5, 3, "div", 1)(2, OtpStatusComponent_div_2_Template, 5, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule],
      styles: [".otp-toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0;\n}\n\n.otp-loading-state[_ngcontent-%COMP%], .otp-active-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #555;\n}\n\n.status-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvb3RwLXN0YXR1cy9vdHAtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vdHAtdG9nZ2xlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvLyBBbGlnbmUgdG91dCBsZSBjb250ZW5ldXIgw4PCoCBkcm9pdGVcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAvLyBDZW50cmUgdmVydGljYWxlbWVudCBsZXMgZW5mYW50cyBkaXJlY3RzXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4IDA7IC8vIFVuIHBldSBkZSBwYWRkaW5nIHZlcnRpY2FsXHJcbn1cclxuXHJcbi5vdHAtbG9hZGluZy1zdGF0ZSxcclxuLm90cC1hY3RpdmUtc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7IC8vIEVzcGFjZSBlbnRyZSBsZXMgw4PCqWzDg8KpbWVudHNcclxufVxyXG5cclxuLmxvYWRpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxcmVtOyAvLyBUYWlsbGUgYWp1c3TDg8KpZVxyXG4gIGNvbG9yOiAjNTU1OyAvLyBDb3VsZXVyIGRlIHRleHRlIHBvdXIgbGUgY2hhcmdlbWVudFxyXG59XHJcblxyXG4uc3RhdHVzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtOyAvLyBUYWlsbGUgZGUgdGV4dGUgcG91ciBsZSBzdGF0dXRcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7IC8vIFBldGl0ZSBtYXJnZSBzaSBsZSBnYXAgbidlc3QgcGFzIHN1ZmZpc2FudCBhdmVjIGxlIHRvZ2dsZVxyXG59XHJcblxyXG4ub3RwLXNsaWRlLXRvZ2dsZSB7XHJcbiAgLy8gU2kgdm91cyB2b3VsZXogYWdyYW5kaXIgbGUgdG9nZ2xlLCBpbCBlc3QgcHLDg8KpZsODwqlyYWJsZSBkZSBsZSBmYWlyZSB2aWEgZGVzIHRow4PCqG1lcyBBbmd1bGFyIE1hdGVyaWFsXHJcbiAgLy8gb3UgZGVzIHN1cmNoYXJnZXMgQ1NTIHBsdXMgc3DDg8KpY2lmaXF1ZXMgZXQgcm9idXN0ZXMgcXVlIGB0cmFuc2Zvcm06IHNjYWxlKClgLlxyXG4gIC8vIGB0cmFuc2Zvcm06IHNjYWxlKDEuMik7YCBwYXIgZXhlbXBsZSwgbWFpcyBhdHRlbnRpb24gYXV4IGltcGFjdHMgc3VyIGxhIG1pc2UgZW4gcGFnZS5cclxuICAvLyBQb3VyIHVuZSBzb2x1dGlvbiBwbHVzIHByb3ByZSwgY29uc2lkw4PCqXJleiBsYSBwZXJzb25uYWxpc2F0aW9uIGR1IHRow4PCqG1lIE1hdGVyaWFsLlxyXG59XHJcblxyXG4vLyBFeGVtcGxlIGRlIGNvbW1lbnQgYWdyYW5kaXIgbGUgc2xpZGUtdG9nZ2xlIHZpYSBDU1MgKHBldXQgw4PCqnRyZSBmcmFnaWxlIGF2ZWMgbGVzIG1pc2VzIMODwqAgam91ciBkZSBNYXRlcmlhbClcclxuLy8gOjpuZy1kZWVwIC5vdHAtc2xpZGUtdG9nZ2xlIC5tZGMtc3dpdGNoX190cmFjayB7XHJcbi8vICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAgLm90cC1zbGlkZS10b2dnbGUgLm1kYy1zd2l0Y2hfX2hhbmRsZSB7XHJcbi8vICAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgd2lkdGg6IDI4cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAgLm90cC1zbGlkZS10b2dnbGUgLm1kYy1zd2l0Y2hfX2hhbmRsZS10cmFjayB7XHJcbi8vICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KSAhaW1wb3J0YW50OyAvLyBDJ2VzdCB1biBoYWNrLCDDg8KgIHV0aWxpc2VyIGF2ZWMgcHLDg8KpY2F1dGlvblxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 55249:
/*!**************************************************!*\
  !*** ./src/app/services/AutoTranslateService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoTranslateService: () => (/* binding */ AutoTranslateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 48503);


class AutoTranslateService {
  constructor(translate) {
    this.translate = translate;
    this.translations = {};
    this.initDefaultTranslations();
  }
  initDefaultTranslations() {
    this.translations = {
      // Titres
      Profil: {
        en: 'Profile',
        fr: 'Profil',
        pt: 'Perfil'
      },
      Settings: {
        en: 'Settings',
        fr: 'Paramètres',
        pt: 'Configurações'
      },
      Language: {
        en: 'Language',
        fr: 'Langue',
        pt: 'Idioma'
      },
      Country: {
        en: 'Country',
        fr: 'Pays',
        pt: 'País',
        es: 'País'
      },
      // Descriptions
      'Gérez vos informations personnelles, votre avatar et vos préférences de compte': {
        en: 'Manage your personal information, avatar and account preferences',
        fr: 'Gérez vos informations personnelles, votre avatar et vos préférences de compte',
        pt: 'Gerencie suas informações pessoais, avatar e preferências de conta'
      },
      'Configurez les paramètres de l\'application et personnalisez votre expérience': {
        en: 'Configure application settings and customize your experience',
        fr: 'Configurez les paramètres de l\'application et personnalisez votre expérience',
        pt: 'Configure as definições do aplicativo e personalize sua experiência'
      },
      'Choisissez votre langue préférée pour l\'interface de l\'application': {
        en: 'Choose your preferred language for the application interface',
        fr: 'a pour l\'interface de l\'application',
        pt: 'Escolha seu idioma preferido para a interface do aplicativo'
      },
      'Select your country for regional settings and phone number formatting': {
        en: 'Select your country for regional settings and phone number formatting',
        fr: 'Sélectionnez votre pays pour les paramètres régionaux et le format des numéros de téléphone',
        pt: 'Selecione seu país para configurações regionais e formatação de números de telefone',
        es: 'Seleccione su país para configuraciones regionales y formato de números telefónicos'
      }
    };
  }
  translateText(text) {
    const currentLang = this.translate.currentLang || 'en';
    const translation = this.translations[text]?.[currentLang];
    if (!translation) {
      console.warn(`Missing translation for "${text}" in ${currentLang}`);
      return text;
    }
    return translation;
  }
  static {
    this.ɵfac = function AutoTranslateService_Factory(t) {
      return new (t || AutoTranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AutoTranslateService,
      factory: AutoTranslateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 50274:
/*!*******************************************!*\
  !*** ./src/app/services/BackupService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackupService: () => (/* binding */ BackupService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 48503);






class BackupService {
  constructor(http, tranlate) {
    this.http = http;
    this.tranlate = tranlate;
    this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/backup`;
    this.uiStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
      status: 'idle',
      message: 'Ready for a new backup.'
    });
    this.uiState$ = this.uiStateSubject.asObservable();
  }
  runBackup() {
    return this.http.post(`${this.apiUrl}/run`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.status === 'dispatched') {
        this.updateUiState({
          status: 'dispatched',
          message: response.message || this.tranlate.instant('card.backup.backup_process'),
          backup_identifier: response.backup_identifier
        });
      } else if (response.status === 'already_running') {
        this.updateUiState({
          status: 'running_from_server',
          message: response.message,
          backup_identifier: response.backup_identifier
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return this.handleError('Failed to dispatch backup job', error);
    }));
  }
  getServerSideStatus() {
    return this.http.get(`${this.apiUrl}/status`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(serverStatus => {
      if (this.uiStateSubject.value.status !== 'dispatched') {
        let newUiStatus;
        switch (serverStatus.status) {
          case 'running':
            newUiStatus = 'running_from_server';
            break;
          case 'idle':
          case 'completed':
          case 'failed':
          case 'error':
            newUiStatus = serverStatus.status;
            break;
          default:
            newUiStatus = 'idle';
        }
        this.updateUiState({
          status: newUiStatus,
          message: serverStatus.message,
          backup_identifier: serverStatus.backup_identifier
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return this.handleError('Failed to get server-side backup status', error);
    }));
  }
  updateUiState(newState) {
    const currentState = this.uiStateSubject.value;
    const validNewState = {
      status: newState.status ?? currentState.status,
      message: newState.message ?? currentState.message,
      backup_identifier: newState.backup_identifier === undefined ? currentState.backup_identifier : newState.backup_identifier
    };
    this.uiStateSubject.next(validNewState);
  }
  resetUiToIdle() {
    this.updateUiState({
      status: 'idle',
      message: 'Ready for a new backup.',
      backup_identifier: undefined
    });
  }
  handleError(context, error) {
    console.error(`${context}:`, error);
    const serverErrorMessage = error.error?.message || error.message;
    const displayMessage = serverErrorMessage ? `${context}: ${serverErrorMessage}` : `${context}: An unknown error occurred.`;
    this.updateUiState({
      status: 'error',
      message: displayMessage
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
  }
  static {
    this.ɵfac = function BackupService_Factory(t) {
      return new (t || BackupService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: BackupService,
      factory: BackupService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_show-settings_show-settings_component_ts.js.map