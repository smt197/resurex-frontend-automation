"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_auth_email-not-verify-expiry_email-not-verify-expiry_component_ts"],{

/***/ 57524:
/*!******************************************************************************!*\
  !*** ./src/app/auth/components/loading-spinner/loading-spinner.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 49524);






class LoadingSpinnerComponent {
  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["vex-loading-spinner"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[1, "flex", "flex-col", "items-center", "justify-center"], ["color", "primary", "mat-raised-button", ""], ["rxTranslate", "global.loading", 1, "text-lg"], ["mode", "indeterminate", "color", "primary", "diameter", "35", 1, "icon-2xl"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Please wait...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-progress-spinner", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__["default"]],
      styles: [".timer[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  color: orange;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.bg-pattern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n\n\n\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-form[_ngcontent-%COMP%] {\n  padding: 6px !important;\n}\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-box[_ngcontent-%COMP%] {\n  padding: 6px !important;\n  width: 80px !important;\n  height: 80px !important;\n  font-size: 30px !important;\n  text-align: center;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBMkJFO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Qk47O0FBMEJBO0VBQ0ksNmNBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQTVDSjs7QUE4Q0UsbUNBQUE7QUFHRiwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RFO0VBQ0UsdUJBQUE7QUE3Q0o7QUFnREU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5Q0o7O0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9DSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1wYXR0ZXJuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAxMzVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAyMjVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSAwIDY0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxuLy8gICB9XHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pbmZvLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5iZy1wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyNHB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDI0cHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgNjdweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2OXB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDY5cHhcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMjI1ZGVnLFxyXG4gICAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyMnB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMjRweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2N3B4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgNjlweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCA2OXB4XHJcbiAgICApIDAgNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xyXG4gIH1cclxuICAvKiBTdHlsZXMgcG91ciBsZXMgY2FzZXMgZGUgbCdPVFAgKi9cclxuXHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZSBib3V0b24gKi9cclxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm5neC1vdHAtaW5wdXQgeyBcclxuICAubmd4LW90cC1pbnB1dC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1vdHAtaW5wdXQtYm94IHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7IC8vIFN1cHByZXNzaW9uIGRlIGxhIHJlZG9uZGFuY2VcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBDb3JyZWN0aW9uIGRlIFwiZm9udDogYm9sZGVyXCIgZW4gXCJmb250LXdlaWdodDogYm9sZFwiXHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 58923:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/email-not-verify-expiry/email-not-verify-expiry.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailNotVerifyExpiryComponent: () => (/* binding */ EmailNotVerifyExpiryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 48503);




















function EmailNotVerifyExpiryComponent_ng_container_9_form_1_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmailNotVerifyExpiryComponent_ng_container_9_form_1_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EmailNotVerifyExpiryComponent_ng_container_9_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EmailNotVerifyExpiryComponent_ng_container_9_form_1_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.resendVerification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EmailNotVerifyExpiryComponent_ng_container_9_form_1_mat_error_7_Template, 2, 0, "mat-error", 16)(8, EmailNotVerifyExpiryComponent_ng_container_9_form_1_mat_error_8_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 17)(10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Resend link email verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r4.emailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.emailControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.emailControl.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.emailForm.invalid);
  }
}
function EmailNotVerifyExpiryComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EmailNotVerifyExpiryComponent_ng_container_9_form_1_Template, 12, 4, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isSuccess());
  }
}
function EmailNotVerifyExpiryComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "vex-loading-spinner");
  }
}
function EmailNotVerifyExpiryComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailNotVerifyExpiryComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Come back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = a0 => ({
  "text-red-500": a0
});
class EmailNotVerifyExpiryComponent {
  constructor() {
    // Component state signals
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.isSuccess = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false);
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)('Your verification link has expired. Please enter your email to receive a new one.');
    // Form
    this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])
    });
    // Services
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    this.snackbar = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
  }
  get emailControl() {
    return this.emailForm.get('email');
  }
  get emailError() {
    if (this.emailControl.hasError('required')) {
      return 'Email is required';
    }
    if (this.emailControl.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }
  resendVerification() {
    // Marquer tous les champs comme touchés pour afficher les erreurs
    this.emailForm.markAllAsTouched();
    if (this.emailForm.invalid) {
      return;
    }
    this.isLoading.set(true);
    const form = {
      email: this.emailControl.value || ''
    };
    this.authService.ResenderVerificationEmail(form).subscribe({
      next: response => {
        console.log('Response from resendVerification:', response);
        this.isLoading.set(false);
        this.isSuccess.set(true);
        this.message.set(response.message || 'A new verification link has been sent to your email address.');
        this.showMessage(response.message || 'Verification email sent successfully!');
        // Désactiver le formulaire après l'envoi réussi
        this.emailForm.disable();
      },
      error: error => {
        this.isLoading.set(false);
        const errorMessage = error.error?.message || 'Failed to send verification email. Please try again.';
        this.showMessage(errorMessage, true);
      }
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  refresh() {
    window.location.reload();
  }
  showMessage(message, isError = false) {
    this.snackbar.open(message, 'Close', {
      duration: isError ? 10000 : 5000,
      panelClass: isError ? ['error-snackbar'] : []
    });
  }
  static {
    this.ɵfac = function EmailNotVerifyExpiryComponent_Factory(t) {
      return new (t || EmailNotVerifyExpiryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmailNotVerifyExpiryComponent,
      selectors: [["vex-email-not-verify-expiry"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 9,
      consts: [[1, "w-full", "h-full", "bg-pattern", "flex", "flex-col", "items-center", "justify-center"], [1, "card", "overflow-hidden", "w-full", "max-w-md"], [1, "flex", "flex-col", "items-center"], [1, "p-6", "rounded-full", "bg-primary-600/10", "text-primary-600", "mx-auto", "flex", "items-center", "justify-center"], [1, "icon-5xl", 3, "svgIcon"], [1, "text-center", "mt-4"], ["rxTranslate", "form.expiry_link", 1, "title", "m-0", 3, "ngClass"], [1, "p-6", "flex", "flex-col"], [4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["color", "primary", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "mb-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mb-4", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "your.email@example.com", "autocomplete", "email"], ["matPrefix", ""], [4, "ngIf"], ["type", "submit", "color", "primary", "mat-raised-button", "", 1, "w-full", 3, "disabled"], [1, "uppercase"], ["color", "primary", "mat-raised-button", "", 3, "click"]],
      template: function EmailNotVerifyExpiryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EmailNotVerifyExpiryComponent_ng_container_9_Template, 2, 1, "ng-container", 8)(10, EmailNotVerifyExpiryComponent_ng_template_10_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(12, EmailNotVerifyExpiryComponent_button_12_Template, 2, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInUp", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", ctx.isSuccess() ? "mat:check" : "mat:mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, !ctx.isSuccess()));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.message(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading())("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSuccess());
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule],
      styles: [".timer[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  color: orange;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.bg-pattern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n\n\n\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-form[_ngcontent-%COMP%] {\n  padding: 6px !important;\n}\nngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-box[_ngcontent-%COMP%] {\n  padding: 6px !important;\n  width: 80px !important;\n  height: 80px !important;\n  font-size: 30px !important;\n  text-align: center;\n  font-weight: bold;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBMkJFO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Qk47O0FBMEJBO0VBQ0ksNmNBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQTVDSjs7QUE4Q0UsbUNBQUE7QUFHRiwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RFO0VBQ0UsdUJBQUE7QUE3Q0o7QUFnREU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5Q0o7O0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9DSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1wYXR0ZXJuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAxMzVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAyMjVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSAwIDY0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxuLy8gICB9XHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pbmZvLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5iZy1wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyNHB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDI0cHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgNjdweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2OXB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDY5cHhcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMjI1ZGVnLFxyXG4gICAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyMnB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMjRweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2N3B4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgNjlweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCA2OXB4XHJcbiAgICApIDAgNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xyXG4gIH1cclxuICAvKiBTdHlsZXMgcG91ciBsZXMgY2FzZXMgZGUgbCdPVFAgKi9cclxuXHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZSBib3V0b24gKi9cclxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm5neC1vdHAtaW5wdXQgeyBcclxuICAubmd4LW90cC1pbnB1dC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1vdHAtaW5wdXQtYm94IHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7IC8vIFN1cHByZXNzaW9uIGRlIGxhIHJlZG9uZGFuY2VcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBDb3JyZWN0aW9uIGRlIFwiZm9udDogYm9sZGVyXCIgZW4gXCJmb250LXdlaWdodDogYm9sZFwiXHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */", ".w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9lbWFpbC1ub3QtdmVyaWZ5LWV4cGlyeS9lbWFpbC1ub3QtdmVyaWZ5LWV4cGlyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSw4PCqXV0aWxpc2UgbGUgbcODwqptZSBzdHlsZSBxdWUgZW1haWwtbm90LXZlcmlmaWVkXHJcbi8vIFBhcyBiZXNvaW4gZGUgcmVkw4PCqWZpbmlyIGxlcyBzdHlsZXMgY2FyIGlscyBzb250IGfDg8KpcsODwqlzIHBhciBhdXRoLmNvbXBvbmVudC5zY3NzXHJcblxyXG4udy1mdWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
      },
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_auth_email-not-verify-expiry_email-not-verify-expiry_component_ts.js.map