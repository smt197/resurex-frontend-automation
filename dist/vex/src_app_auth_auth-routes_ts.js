"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_auth_auth-routes_ts"],{

/***/ 73538:
/*!*************************************!*\
  !*** ./src/app/auth/auth-routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/no-auth.guard */ 41934);
/* harmony import */ var _services_SettingsResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/SettingsResolver */ 61420);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ 40998);



const authRoute = [{
  path: '',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent,
  canActivate: [_guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_0__.noAuthGuard],
  resolve: {
    settingsData: _services_SettingsResolver__WEBPACK_IMPORTED_MODULE_1__.settingsResolver
  },
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_interfaces_User_ts-node_modules_angular_material_fesm2022_stepper_mjs"), __webpack_require__.e("default-src_app_auth_email-not-verified_email-not-verified_component_ts-node_modules_ngx-form-07c572"), __webpack_require__.e("src_app_auth_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.component */ 66539)).then(m => m.LoginComponent)
  }, {
    path: 'register',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_interfaces_User_ts-node_modules_angular_material_fesm2022_stepper_mjs"), __webpack_require__.e("src_app_auth_register_register_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.component */ 39619)).then(m => m.RegisterComponent)
  }, {
    path: 'forgot-password',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_interfaces_User_ts-node_modules_angular_material_fesm2022_stepper_mjs"), __webpack_require__.e("default-src_app_auth_email-not-verified_email-not-verified_component_ts-node_modules_ngx-form-07c572"), __webpack_require__.e("src_app_auth_forgot-password_forgot-password_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.component */ 55783)).then(m => m.ForgotPasswordComponent)
  }, {
    path: 'reset-password',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_interfaces_User_ts-node_modules_angular_material_fesm2022_stepper_mjs"), __webpack_require__.e("src_app_auth_reset-password_reset-password_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.component */ 46503)).then(m => m.ResetPasswordComponent)
  }, {
    path: 'email/verify/:id/:hash/:uuid',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_auth_email-not-verify-expiry_email-not-verify-expiry_component_ts"), __webpack_require__.e("src_app_auth_email-verify_email-verify_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email-verify/email-verify.component */ 57245)).then(m => m.EmailVerifyComponent)
  }, {
    path: 'not-found-auth',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_auth_errors_error-404_error-404_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./errors/error-404/error-404.component */ 76063)).then(m => m.Error404Component)
  }, {
    path: 'link-expired',
    loadComponent: () => __webpack_require__.e(/*! import() */ "default-src_app_auth_email-not-verify-expiry_email-not-verify-expiry_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./email-not-verify-expiry/email-not-verify-expiry.component */ 58923)).then(m => m.EmailNotVerifyExpiryComponent)
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authRoute);

/***/ }),

/***/ 40998:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _shared_change_languague_change_languague_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/change-languague/change-languague.component */ 60502);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ 90198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/config/vex-config.service */ 85298);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/language/translate.directive */ 49524);















function AuthComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class AuthComponent {
  constructor(router, configService) {
    this.router = router;
    this.configService = configService;
    this.isAdminLogin = false;
    this.redirectUrl = '/login';
    this.title$ = this.configService.select(config => config.sidenav.title);
    this.imageUrl$ = this.configService.config$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(config => config.sidenav.imageUrl));
  }
  ngOnInit() {
    this.getAdminAuthority();
  }
  register() {
    this.router.navigate(['/register']).then(() => {
      window.location.reload();
    });
  }
  login() {
    this.router.navigate([this.redirectUrl]);
  }
  getAdminAuthority() {
    // Vérifier si c'est un login admin via les données de la route
    this.isAdminLogin = this.router.url.includes('/admin/login');
    this.isAdminLogin = this.isAdminLogin ?? false;
    this.redirectUrl = this.isAdminLogin ? '/admin/login' : this.redirectUrl;
  }
  static {
    this.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_2__.VexConfigService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["vex-auth"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 7,
      consts: [[1, "toolbar", "text-default", "w-full", "px-2", "sm:px-4", "md:px-6", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "py-2", "gap-2"], [1, "sidenav-toolbar", "flex", "items-center", "cursor-pointer", "w-full", "sm:w-auto", "justify-center", "sm:justify-start", "mb-2", "sm:mb-0", 3, "click"], [1, "flex", "items-center"], ["alt", "Logo", 1, "w-6", "sm:w-8", "select-none", 3, "src"], [1, "text-xl", "sm:text-2xl", "font-bold", "tracking-wide", "ltr:pl-2", "sm:ltr:pl-4", "rtl:pr-2", "sm:rtl:pr-4", "m-0", "select-none"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-2", "sm:gap-4", "w-full", "sm:w-auto"], [1, "flex", "items-end", "justify-end", "pt-4"], ["mat-mini-fab", "", "matTooltip", "Add Contact", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", "flex-none", "sm:hidden", "bg-white", "text-primary-600", 3, "click"], ["svgIcon", "mat:lock"], ["color", "primary", "mat-stroked-button", "", "type", "button", 1, "ltr:ml-4", "rtl:mr-4", "flex-none", "hidden", "sm:inline-block", "hover:border-primary-600", 3, "click"], ["svgIcon", "mat:lock", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", "icon-sm"], ["rxTranslate", "auth.signin.title"], ["class", "ltr:ml-4 rtl:mr-4 flex-none hidden sm:inline-block", "color", "primary", "mat-flat-button", "", "type", "button", 3, "click", 4, "ngIf"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "ltr:ml-4", "rtl:mr-4", "flex-none", "hidden", "sm:inline-block", 3, "click"], ["svgIcon", "mat:person_add", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", "icon-sm"], ["rxTranslate", "auth.signup.title", 1, "text-white"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_Template_div_click_1_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "vex-change-languague");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_11_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_13_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AuthComponent_button_17_Template, 4, 0, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, ctx.title$), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isAdminLogin);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatMiniFabButton, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _shared_change_languague_change_languague_component__WEBPACK_IMPORTED_MODULE_1__.ChangeLanguagueComponent, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__.CdkTableModule],
      styles: [".timer {\n  color: #dc3545;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.info-message {\n  color: orange;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.bg-pattern {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n/* Styles pour les cases de l'OTP */\n/* Styles pour le bouton */\nbutton[mat-raised-button] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nngx-otp-input .ngx-otp-input-form {\n  padding: 6px !important;\n}\nngx-otp-input .ngx-otp-input-box {\n  padding: 6px !important;\n  width: 80px !important;\n  height: 80px !important;\n  font-size: 30px !important;\n  text-align: center;\n  font-weight: bold;\n}\n\n.info-message {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\nbutton[mat-raised-button] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBMkJFO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Qk47O0FBMEJBO0VBQ0ksNmNBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQTVDSjs7QUE4Q0UsbUNBQUE7QUFHRiwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RFO0VBQ0UsdUJBQUE7QUE3Q0o7QUFnREU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5Q0o7O0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9DSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1wYXR0ZXJuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAxMzVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAyMjVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSAwIDY0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxuLy8gICB9XHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pbmZvLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5iZy1wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyNHB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDI0cHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgNjdweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2OXB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDY5cHhcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMjI1ZGVnLFxyXG4gICAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyMnB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMjRweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2N3B4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgNjlweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCA2OXB4XHJcbiAgICApIDAgNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xyXG4gIH1cclxuICAvKiBTdHlsZXMgcG91ciBsZXMgY2FzZXMgZGUgbCdPVFAgKi9cclxuXHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZSBib3V0b24gKi9cclxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm5neC1vdHAtaW5wdXQgeyBcclxuICAubmd4LW90cC1pbnB1dC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1vdHAtaW5wdXQtYm94IHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7IC8vIFN1cHByZXNzaW9uIGRlIGxhIHJlZG9uZGFuY2VcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBDb3JyZWN0aW9uIGRlIFwiZm9udDogYm9sZGVyXCIgZW4gXCJmb250LXdlaWdodDogYm9sZFwiXHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 41934:
/*!*****************************************!*\
  !*** ./src/app/guards/no-auth.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noAuthGuard: () => (/* binding */ noAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth-service */ 14023);





const noAuthGuard = (next, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return authService.authenticate().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
    // Si l'utilisateur est déjà authentifié, rediriger vers la page d'accueil
    if (response.status) {
      router.navigate(['index']);
      return false;
    }
    // Autoriser l'accès à la route pour les utilisateurs non authentifiés
    return true;
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
    // En cas d'erreur, autoriser l'accès (utilisateur non authentifié)
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true);
  }));
};

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth-routes_ts.js.map