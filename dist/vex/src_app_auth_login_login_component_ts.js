"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_auth_login_login_component_ts"],{

/***/ 66539:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-formly/material/toggle */ 14298);
/* harmony import */ var _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-formly/material/input */ 1346);
/* harmony import */ var _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-formly/material/checkbox */ 47405);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin-auth.service */ 34858);
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/settings.service */ 40875);
/* harmony import */ var src_app_interfaces_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/User */ 30252);
/* harmony import */ var _email_not_verified_email_not_verified_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../email-not-verified/email-not-verified.component */ 82567);
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 49524);






























function LoginComponent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const site_logo_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", site_logo_r3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function LoginComponent_ng_container_0_ng_container_16_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_ng_container_0_ng_container_16_ng_container_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "SIGN IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r4.loginFormGroup.invalid);
  }
}
function LoginComponent_ng_container_0_ng_container_16_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vex-loading-spinner");
  }
}
function LoginComponent_ng_container_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 14)(2, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Sign in with your credentials below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 17)(7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "formly-form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, LoginComponent_ng_container_0_ng_container_16_ng_container_9_Template, 4, 1, "ng-container", 20)(10, LoginComponent_ng_container_0_ng_container_16_ng_template_10_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("form", ctx_r2.loginFormGroup)("fields", ctx_r2.loginfields)("model", ctx_r2.loginModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading())("ngIfElse", _r6);
  }
}
function LoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LoginComponent_ng_container_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8)(9, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, LoginComponent_ng_container_0_ng_container_16_Template, 12, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@fadeInUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 5, ctx_r0.authService.image$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 7, ctx_r0.authService.site_subtitle$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 9, ctx_r0.authService.site_description$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.sucess());
  }
}
class LoginComponent {
  constructor() {
    // Services injectés
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router);
    this.snackbar = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar);
    this.settingsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    this.adminAuthService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.inject)(src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__.AdminAuthService);
    // Signals pour l'état du composant
    this.inputType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('password');
    this.visible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    this.isSuccess = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    this.errorMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)([]);
    this.sucess = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    this.LoadingForm = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    this.mailmessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('');
    this.settings = null;
    this.isAdminLogin = false;
    // Formulaire
    this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({});
    this.loginModel = {
      email: '',
      password: '',
      remember_me: false
    };
    this.loginfields = [];
  }
  ngOnInit() {
    this.getSettingInfo();
    this.getAdminAuthority();
  }
  getAdminAuthority() {
    // Vérifier si c'est un login admin via les données de la route
    this.isAdminLogin = this.router.url.includes('/admin/login');
    console.log(this.isAdminLogin);
    this.loginfields = src_app_interfaces_User__WEBPACK_IMPORTED_MODULE_4__.loginFormForlyFields.map(field => {
      if (this.isAdminLogin && field.fieldGroupClassName) {
        const newField = {
          ...field
        };
        if (newField.fieldGroup) {
          newField.fieldGroup = newField.fieldGroup.filter(innerField => innerField.key !== 'forgotpasswordurl');
        }
        return newField;
      }
      return field;
    });
  }
  getEmail() {
    return this.loginModel.email;
  }
  getSettingInfo() {
    this.settings = this.settingsService.setting;
  }
  send() {
    this.isLoading.set(true);
    // Si c'est un login admin, utiliser le service admin
    if (this.isAdminLogin) {
      this.sendLoginWithAdmin();
      return;
    }
    // Sinon, utiliser le service d'authentification normal
    this.authService.login(this.loginModel).subscribe({
      next: response => {
        this.showMessage(response.message);
        if (response.otp_required) {
          this.router.navigate(['otp']);
        } else {
          // Charger les settings avant de rediriger
          this.settingsService.getSettings().subscribe({
            next: settings => {
              this.settingsService.setting = settings;
              this.redirectAfterLogin();
            },
            error: () => {
              // Même en cas d'erreur de chargement des settings, rediriger
              this.router.navigate(['index']).then(() => {
                window.location.reload();
              });
            }
          });
        }
      },
      error: error => {
        this.isLoading.set(false);
        this.showMessage(error.error.message);
        this.mailmessage.set(error.error.message);
        console.error('Erreur de connexion:', error.error);
        if (error.error.email_verified !== undefined) {
          this.LoadingForm.set(true);
          this.sucess.set(true);
        }
      }
    });
  }
  redirectAfterLogin() {
    this.isLoading.set(true);
    this.router.navigate(['index']);
  }
  sendLoginWithAdmin() {
    // Récupérer le token CSRF puis effectuer la connexion admin
    this.adminAuthService.getCsrfToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.adminAuthService.login(this.loginModel))).subscribe({
      next: response => {
        this.isLoading.set(false);
        this.snackbar.open(response.message, 'Fermer', {
          duration: 3000
        });
        this.redirectAfterLogin();
      },
      error: error => {
        this.isLoading.set(false);
        this.snackbar.open(error.error.message || 'Erreur de connexion', 'Fermer', {
          duration: 5000
        });
      }
    });
  }
  Refrech() {
    this.isLoading.set(false);
    this.sucess.set(false);
    this.LoadingForm.set(false);
    this.loginModel = {
      email: '',
      password: '',
      remember_me: false
    };
    this.router.navigate(['/login']);
  }
  Resend() {
    this.isLoading.set(true);
    this.LoadingForm.set(false);
    this.authService.ResenderVerificationEmail(this.loginModel).subscribe({
      next: response => {
        this.showMessage(response.message);
        this.mailmessage.set(response.message);
      },
      error: error => {
        this.showMessage(error.error.message);
        console.error("Erreur de renvoi d'email:", error.error);
      }
    });
  }
  toggleVisibility() {
    const currentVisible = this.visible();
    this.visible.set(!currentVisible);
    this.inputType.set(currentVisible ? 'password' : 'text');
  }
  showMessage(params) {
    if (params) {
      this.snackbar.open(params, 'Fermer', {
        duration: 10000
      });
    }
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["vex-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 6,
      consts: [[4, "ngIf"], [3, "mailmessage", "email", "LoadingForm", "isSuccess", "sucess"], [1, "w-full", "min-h-screen", "bg-pattern", "flex", "justify-center", "p-4", "sm:items-center"], [1, "w-full", "max-w-4xl", "card", "shadow-2xl", "overflow-hidden"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-0"], [1, "order-2", "md:order-1", "bg-slate-100", "flex", "flex-col", "justify-center", "p-6", "md:p-8"], [1, "pb-4", "flex", "flex-col", "items-center", "justify-center"], ["class", "fill-current text-center", 4, "ngIf"], [1, "flex", "flex-col", "items-center"], [1, "capitalize", "text-2xl", "sm:text-3xl", "font-bold", "text-slate-800", "dark:text-white", "text-center"], [1, "mt-4", "text-base", "text-slate-600", "dark:text-slate-300", "leading-normal", "text-center"], [1, "order-1", "md:order-2", "flex", "flex-col", "justify-center", "p-6", "md:p-8"], [1, "fill-current", "text-center"], ["alt", "Logo", 1, "w-12", 3, "src"], [1, "text-center", "mb-6"], ["rxTranslate", "login.title", 1, "title", "m-0", "text-xl", "md:text-2xl"], ["rxTranslate", "login.subtile", 1, "body-2", "text-secondary", "m-0", "text-sm", "md:text-base"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col"], [3, "form", "fields", "model"], [4, "ngIf", "ngIfElse"], ["spinner", ""], ["color", "primary", "mat-raised-button", "", 1, "w-full", 3, "disabled", "click"], ["rxTranslate", "login.submit"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, LoginComponent_ng_container_0_Template, 17, 11, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "vex-email-not-verified", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.LoadingForm());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("mailmessage", ctx.mailmessage())("email", ctx.getEmail())("LoadingForm", ctx.LoadingForm())("isSuccess", ctx.isSuccess())("sucess", ctx.sucess());
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_23__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_23__.FormlyForm, _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_24__.FormlyMatInputModule, _ngx_formly_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.FormlyMatCheckboxModule, _ngx_formly_material_toggle__WEBPACK_IMPORTED_MODULE_26__.FormlyMatToggleModule, _email_not_verified_email_not_verified_component__WEBPACK_IMPORTED_MODULE_5__.EmailNotVerifiedComponent, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_8__["default"]],
      styles: [".timer[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  color: orange;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.bg-pattern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n\n\n\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-form[_ngcontent-%COMP%] {\n  padding: 6px !important;\n}\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-box[_ngcontent-%COMP%] {\n  padding: 6px !important;\n  width: 80px !important;\n  height: 80px !important;\n  font-size: 30px !important;\n  text-align: center;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBMkJFO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Qk47O0FBMEJBO0VBQ0ksNmNBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQTVDSjs7QUE4Q0UsbUNBQUE7QUFHRiwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RFO0VBQ0UsdUJBQUE7QUE3Q0o7QUFnREU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5Q0o7O0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9DSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1wYXR0ZXJuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAxMzVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAyMjVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSAwIDY0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxuLy8gICB9XHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pbmZvLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5iZy1wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyNHB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDI0cHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgNjdweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2OXB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDY5cHhcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMjI1ZGVnLFxyXG4gICAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyMnB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMjRweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2N3B4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgNjlweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCA2OXB4XHJcbiAgICApIDAgNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xyXG4gIH1cclxuICAvKiBTdHlsZXMgcG91ciBsZXMgY2FzZXMgZGUgbCdPVFAgKi9cclxuXHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZSBib3V0b24gKi9cclxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm5neC1vdHAtaW5wdXQgeyBcclxuICAubmd4LW90cC1pbnB1dC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1vdHAtaW5wdXQtYm94IHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7IC8vIFN1cHByZXNzaW9uIGRlIGxhIHJlZG9uZGFuY2VcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBDb3JyZWN0aW9uIGRlIFwiZm9udDogYm9sZGVyXCIgZW4gXCJmb250LXdlaWdodDogYm9sZFwiXHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_component_ts.js.map