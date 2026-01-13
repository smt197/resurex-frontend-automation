"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_auth_otp_otp_component_ts"],{

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

/***/ 66235:
/*!*******************************************!*\
  !*** ./src/app/auth/otp/otp.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpComponent: () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var ngx_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-otp-input */ 38527);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 49524);


















const _c0 = ["otpInput"];
function OtpComponent_ng_container_0_h4_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Un code est envoye par mail, veuillez verifier votre mail . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OtpComponent_ng_container_0_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.Errormessage, " ");
  }
}
function OtpComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Temps restant : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r6.minutes, ":", ctx_r6.seconds, " ");
  }
}
function OtpComponent_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " R\u00E9essayer dans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r7.minutes, ":", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 2, ctx_r7.seconds, "2.0"), " ");
  }
}
function OtpComponent_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Veuillez saisir les 6 chiffres de l'OTP. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OtpComponent_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OtpComponent_ng_container_0_div_15_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.resendOtp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Renvoyer l'OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function OtpComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Code OTP verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, OtpComponent_ng_container_0_h4_6_Template, 2, 0, "h4", 6)(7, OtpComponent_ng_container_0_h4_7_Template, 2, 1, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "ngx-otp-input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("otpChange", function OtpComponent_ng_container_0_Template_ngx_otp_input_otpChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.onOtpChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OtpComponent_ng_container_0_div_12_Template, 4, 2, "div", 12)(13, OtpComponent_ng_container_0_div_13_Template, 5, 5, "div", 7)(14, OtpComponent_ng_container_0_div_14_Template, 2, 0, "div", 13)(15, OtpComponent_ng_container_0_div_15_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OtpComponent_ng_container_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.sendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " SEND ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isOtpComplete && ctx_r0.timeLeft > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.Errormessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.formOTP);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r0.otpOptions)("disabled", ctx_r0.isInputDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.timeLeft > 0 && !ctx_r0.res);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.res);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isOtpComplete && ctx_r0.timeLeft > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.timeLeft === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r0.isOtpComplete || ctx_r0.isInputDisabled);
  }
}
function OtpComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "vex-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
class OtpComponent {
  static {
    this.DEFAULT_TIME_LEFT = 300;
  } // 5 minutes
  static {
    this.RESEND_LOCK_TIME = 840;
  } // 14 minutes
  static {
    this.ATTEMPTS_LOCK_TIME = 120;
  } // 2 minutes
  static {
    this.TIME_LEFT_KEY = 'timeLeft';
  }
  constructor(router, fb, cd, snackbar, authService) {
    this.router = router;
    this.fb = fb;
    this.cd = cd;
    this.snackbar = snackbar;
    this.authService = authService;
    this.formOTP = this.fb.group({
      codeOtp: ['']
    });
    this.otpOptions = {
      otpLength: 5,
      inputMode: 'numeric'
    };
    this.opt_id = '';
    this.timeLeft = OtpComponent.DEFAULT_TIME_LEFT;
    this.isInputDisabled = false;
    this.isloading = false;
    this.failedAttempts = 0;
    this.res = false;
    this.Errormessage = '';
    this.isOtpComplete = false;
    this.response = null;
    this.otpString = '';
  }
  ngOnInit() {
    this.loadSavedTimeLeft();
    this.getUserResponse();
    this.startTimer();
  }
  ngOnDestroy() {
    this.clearTimer();
    localStorage.removeItem(OtpComponent.TIME_LEFT_KEY);
  }
  get minutes() {
    return Math.floor(this.timeLeft / 60);
  }
  get seconds() {
    return (this.timeLeft % 60).toString().padStart(2, '0');
  }
  onOtpChange(otp) {
    this.otpString = otp.join('');
    this.isOtpComplete = otp.length === this.otpOptions.otpLength && otp.every(digit => digit !== '');
  }
  resendOtp(event) {
    event.preventDefault();
    this.clearTimer();
    this.ResendOTP();
  }
  loadSavedTimeLeft() {
    const savedTimeLeft = localStorage.getItem(OtpComponent.TIME_LEFT_KEY);
    this.timeLeft = savedTimeLeft ? parseInt(savedTimeLeft, 10) : OtpComponent.DEFAULT_TIME_LEFT;
  }
  startTimer() {
    this.isInputDisabled = false;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        localStorage.setItem(OtpComponent.TIME_LEFT_KEY, this.timeLeft.toString());
        this.cd.detectChanges();
      } else {
        this.handleTimerExpired();
      }
    }, 1000);
  }
  handleTimerExpired() {
    this.isInputDisabled = true;
    this.clearTimer();
    localStorage.removeItem(OtpComponent.TIME_LEFT_KEY);
  }
  clearTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  resetLock() {
    this.clearTimer();
    this.timeLeft = 0;
    localStorage.removeItem(OtpComponent.TIME_LEFT_KEY);
    this.isInputDisabled = true;
    this.failedAttempts = 0;
    this.cd.detectChanges();
  }
  getUserResponse() {
    this.response = this.authService.response;
    if (this.response?.otp_id) {
      this.opt_id = this.response.otp_id;
    }
  }
  resetForm() {
    this.otpInput.reset();
  }
  ResendOTP() {
    this.isloading = true;
    this.Errormessage = '';
    this.isInputDisabled = false;
    this.isOtpComplete = false;
    this.resetForm();
    this.cd.detectChanges();
    const form = {
      otp_id: this.opt_id
    };
    this.authService.ResenderOtp(form).subscribe({
      next: response => {
        this.isloading = false;
        if (response.otp_id) {
          this.opt_id = response.otp_id;
        }
        this.timeLeft = OtpComponent.DEFAULT_TIME_LEFT;
        this.isInputDisabled = false;
        this.startTimer();
        this.showMessage(response.message);
        this.cd.detectChanges();
      },
      error: error => {
        this.isloading = false;
        this.showMessage(error.error.message);
        this.Errormessage = error.error.message;
        if (error.error.throttle_error) {
          this.lockInputs(OtpComponent.RESEND_LOCK_TIME);
        }
        this.cd.detectChanges();
      }
    });
  }
  sendOTP() {
    this.isloading = true;
    const form = {
      code: this.otpString,
      otp_id: this.opt_id
    };
    this.authService.verificationOtp(form).subscribe({
      next: response => {
        this.cd.detectChanges();
        this.timeLeft = 0;
        this.isInputDisabled = true;
        this.router.navigate(['/index']);
        this.showMessage(response.message);
      },
      error: error => {
        this.isloading = false;
        this.Errormessage = error.error.message;
        if (error.error.attempts_exceeded) {
          this.lockInputs(OtpComponent.ATTEMPTS_LOCK_TIME);
        }
        this.showMessage(error.error.message);
      }
    });
  }
  lockInputs(lockTime) {
    this.res = true;
    this.isInputDisabled = true;
    this.timeLeft = lockTime;
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.resetLock();
        this.res = false;
        this.cd.detectChanges();
      }
    }, 1000);
  }
  showMessage(message) {
    if (message) {
      this.snackbar.open(message, 'Fermer', {
        duration: 10000
      });
    }
  }
  static {
    this.ɵfac = function OtpComponent_Factory(t) {
      return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: OtpComponent,
      selectors: [["vex-otp"]],
      viewQuery: function OtpComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.otpInput = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "w-full", "h-full", "bg-pattern", "flex", "flex-col", "items-center", "justify-center"], [1, "card", "overflow-hidden", "w-full", "max-w-lg"], [1, "text-center", "mt-4"], ["rxTranslate", "otp.title", 1, "title", "m-0"], ["class", "body-2 text-lg font-semibold text-red-600 m-4", "rxTranslate", "otp.subtile", 4, "ngIf"], ["class", "timer", 4, "ngIf"], [1, "p-6", "flex", "flex-col", 3, "formGroup"], [1, "p-6", "flex", "flex-col", "items-center"], [3, "options", "disabled", "otpChange"], ["otpInput", ""], ["class", "text-red-500 text-lg font-semibold", 4, "ngIf"], ["class", "info-message", "rxTranslate", "otp.message", 4, "ngIf"], ["class", "flex items-center justify-between", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", "type", "button", "rxTranslate", "otp.submit", 1, "mt-2", 3, "disabled", "click"], ["rxTranslate", "otp.subtile", 1, "body-2", "text-lg", "font-semibold", "text-red-600", "m-4"], [1, "timer"], [1, "text-red-500", "text-lg", "font-semibold"], ["rxTranslate", "otp.time"], ["rxTranslate", "otp.reessayer"], ["rxTranslate", "otp.message", 1, "info-message"], [1, "flex", "items-center", "justify-between"], ["mat-raised-button", "", "color", "primary", "rxTranslate", "otp.renvoie", 3, "click"], [1, "p-6", "flex", "items-center", "justify-center"]],
      template: function OtpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, OtpComponent_ng_container_0_Template, 18, 11, "ng-container", 0)(1, OtpComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isloading)("ngIfElse", _r2);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, ngx_otp_input__WEBPACK_IMPORTED_MODULE_14__.NgxOtpInputComponent, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__["default"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent],
      styles: [".timer {\n  color: #dc3545;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n\n.info-message {\n  color: orange;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.bg-pattern {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n/* Styles pour les cases de l'OTP */\n/* Styles pour le bouton */\nbutton[mat-raised-button] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n\nngx-otp-input .ngx-otp-input-form {\n  padding: 6px !important;\n}\nngx-otp-input .ngx-otp-input-box {\n  padding: 6px !important;\n  width: 80px !important;\n  height: 80px !important;\n  font-size: 30px !important;\n  text-align: center;\n  font-weight: bold;\n}\n\n.info-message {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\nbutton[mat-raised-button] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBMkJFO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Qk47O0FBMEJBO0VBQ0ksNmNBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQTVDSjs7QUE4Q0UsbUNBQUE7QUFHRiwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RFO0VBQ0UsdUJBQUE7QUE3Q0o7QUFnREU7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE5Q0o7O0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQS9DSjs7QUFrREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9DSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1wYXR0ZXJuIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAxMzVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSxcclxuLy8gICAgIGxpbmVhci1ncmFkaWVudChcclxuLy8gICAgICAgICAyMjVkZWcsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcclxuLy8gICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjRweCxcclxuLy8gICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4vLyAgICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY3cHgsXHJcbi8vICAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXHJcbi8vICAgICAgICAgdHJhbnNwYXJlbnQgNjlweFxyXG4vLyAgICAgKSAwIDY0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxuLy8gICB9XHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pbmZvLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5iZy1wYXR0ZXJuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAxMzVkZWcsXHJcbiAgICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyNHB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDI0cHgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgNjdweCxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsICAgLyogRGFya2VyIGxpbmUgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2OXB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHRyYW5zcGFyZW50IDY5cHhcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMjI1ZGVnLFxyXG4gICAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSAyMnB4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgMjRweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDY3cHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjE1KSA2N3B4LCAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xNSkgNjlweCwgICAvKiBEYXJrZXIgbGluZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cclxuICAgICAgICB0cmFuc3BhcmVudCA2OXB4XHJcbiAgICApIDAgNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xyXG4gIH1cclxuICAvKiBTdHlsZXMgcG91ciBsZXMgY2FzZXMgZGUgbCdPVFAgKi9cclxuXHJcblxyXG4vKiBTdHlsZXMgcG91ciBsZSBib3V0b24gKi9cclxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbm5neC1vdHAtaW5wdXQgeyBcclxuICAubmd4LW90cC1pbnB1dC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1vdHAtaW5wdXQtYm94IHtcclxuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7IC8vIFN1cHByZXNzaW9uIGRlIGxhIHJlZG9uZGFuY2VcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvLyBDb3JyZWN0aW9uIGRlIFwiZm9udDogYm9sZGVyXCIgZW4gXCJmb250LXdlaWdodDogYm9sZFwiXHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgLmluZm8tbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2,
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 38527:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-otp-input/fesm2022/ngx-otp-input.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxOtpInputComponent: () => (/* binding */ NgxOtpInputComponent),
/* harmony export */   NgxOtpStatus: () => (/* binding */ NgxOtpStatus)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);






const _c0 = ["otpInputElement"];
const _c1 = (a0, a1, a2, a3) => ({
  "ngx-otp-input-disabled": a0,
  "ngx-otp-input-filled": a1,
  "ngx-otp-input-success": a2,
  "ngx-otp-input-failed": a3
});
function NgxOtpInputComponent_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 2, 3);
  }
  if (rf & 2) {
    const control_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", control_r1.value)("type", ctx_r0.inputType)("inputMode", ctx_r0.ngxOtpOptions.inputMode)("disabled", ctx_r0.disabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](5, _c1, ctx_r0.disabled, ctx_r0.isInputFilled(i_r2), ctx_r0.isOTPSuccess, ctx_r0.isOTPFailed));
  }
}
const _c2 = a0 => ({
  "ngx-blinking-cursor": a0
});
class PasteDirective {
  constructor() {
    this.handlePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onPaste(event) {
    event.preventDefault();
    const clipboardData = event.clipboardData?.getData('text');
    if (clipboardData && this.regexp.test(clipboardData)) {
      const values = clipboardData.split('');
      this.inputs.forEach((input, index) => {
        if (values[index]) {
          input.nativeElement.value = values[index];
        }
      });
      this.handlePaste.emit(values);
    }
  }
  static {
    this.ɵfac = function PasteDirective_Factory(t) {
      return new (t || PasteDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PasteDirective,
      selectors: [["", "ngxOtpPaste", ""]],
      contentQueries: function PasteDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
        }
      },
      hostBindings: function PasteDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function PasteDirective_paste_HostBindingHandler($event) {
            return ctx.onPaste($event);
          });
        }
      },
      inputs: {
        regexp: "regexp"
      },
      outputs: {
        handlePaste: "handlePaste"
      },
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasteDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngxOtpPaste]'
    }]
  }], null, {
    inputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: ['otpInputElement', {
        descendants: true
      }]
    }],
    regexp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    handlePaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['paste', ['$event']]
    }]
  });
})();
class AutoFocusDirective {
  ngAfterContentInit() {
    if (this.ngxAutoFocus && this.firstInput) {
      this.firstInput.nativeElement.focus();
    }
  }
  static {
    this.ɵfac = function AutoFocusDirective_Factory(t) {
      return new (t || AutoFocusDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutoFocusDirective,
      selectors: [["", "ngxAutoFocus", ""]],
      contentQueries: function AutoFocusDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstInput = _t.first);
        }
      },
      inputs: {
        ngxAutoFocus: "ngxAutoFocus"
      },
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoFocusDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngxAutoFocus]'
    }]
  }], null, {
    firstInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['otpInputElement', {
        static: false
      }]
    }],
    ngxAutoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class InputNavigationsDirective {
  constructor() {
    this.inputsArray = [];
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngAfterContentInit() {
    this.inputsArray = this.inputs.toArray();
  }
  findInputIndex(target) {
    return this.inputsArray.findIndex(input => input.nativeElement === target);
  }
  setFocus(index) {
    if (index >= 0 && index < this.inputs.length) {
      this.inputsArray[index].nativeElement.focus();
    }
  }
  onArrowLeft(event) {
    const index = this.findInputIndex(event.target);
    if (index > 0) {
      this.setFocus(index - 1);
    }
  }
  onArrowRight(event) {
    const index = this.findInputIndex(event.target);
    if (index < this.inputs.length - 1) {
      this.setFocus(index + 1);
    }
  }
  onBackspace(event) {
    const index = this.findInputIndex(event.target);
    if (index >= 0) {
      this.valueChange.emit([index, '']);
      this.setFocus(index - 1);
      event.preventDefault();
    }
  }
  onKeyUp(event) {
    const index = this.findInputIndex(event.target);
    if (event.target.value?.match(this.regexp)) {
      this.valueChange.emit([index, event.target.value]);
      this.setFocus(index + 1);
    } else {
      this.inputsArray[index].nativeElement.value = '';
    }
  }
  static {
    this.ɵfac = function InputNavigationsDirective_Factory(t) {
      return new (t || InputNavigationsDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputNavigationsDirective,
      selectors: [["", "ngxInputNavigations", ""]],
      contentQueries: function InputNavigationsDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
        }
      },
      hostBindings: function InputNavigationsDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.arrowLeft", function InputNavigationsDirective_keydown_arrowLeft_HostBindingHandler($event) {
            return ctx.onArrowLeft($event);
          })("keydown.arrowRight", function InputNavigationsDirective_keydown_arrowRight_HostBindingHandler($event) {
            return ctx.onArrowRight($event);
          })("keydown.backspace", function InputNavigationsDirective_keydown_backspace_HostBindingHandler($event) {
            return ctx.onBackspace($event);
          })("input", function InputNavigationsDirective_input_HostBindingHandler($event) {
            return ctx.onKeyUp($event);
          });
        }
      },
      inputs: {
        regexp: "regexp"
      },
      outputs: {
        valueChange: "valueChange"
      },
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputNavigationsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngxInputNavigations]'
    }]
  }], null, {
    inputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: ['otpInputElement', {
        descendants: true
      }]
    }],
    regexp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onArrowLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowLeft', ['$event']]
    }],
    onArrowRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowRight', ['$event']]
    }],
    onBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.backspace', ['$event']]
    }],
    onKeyUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }]
  });
})();
class AutoBlurDirective {
  constructor() {
    this.inputHTMLElements = [];
  }
  ngOnChanges(changes) {
    if (this.ngxAutoBlur && this.inputHTMLElements.length > 0 && changes['isFormValid'].currentValue) {
      this.inputHTMLElements.forEach(input => {
        input.blur();
      });
    }
  }
  ngAfterContentInit() {
    this.inputs.forEach(input => {
      this.inputHTMLElements.push(input.nativeElement);
    });
  }
  static {
    this.ɵfac = function AutoBlurDirective_Factory(t) {
      return new (t || AutoBlurDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutoBlurDirective,
      selectors: [["", "ngxAutoBlur", ""]],
      contentQueries: function AutoBlurDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
        }
      },
      inputs: {
        ngxAutoBlur: "ngxAutoBlur",
        isFormValid: "isFormValid"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoBlurDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngxAutoBlur]'
    }]
  }], null, {
    inputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: ['otpInputElement', {
        descendants: true
      }]
    }],
    ngxAutoBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isFormValid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AriaLabelsDirective {
  ngAfterContentInit() {
    this.setAriaLabelsAttrs();
  }
  getDefaultAriaLabelText(index) {
    return `One Time Password Input Number ${index + 1}`;
  }
  setAriaLabelsAttrs() {
    this.inputs.forEach((input, index) => {
      input.nativeElement.setAttribute('aria-label', this.ngxOtpAriaLabels[index] ?? this.getDefaultAriaLabelText(index));
    });
  }
  static {
    this.ɵfac = function AriaLabelsDirective_Factory(t) {
      return new (t || AriaLabelsDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AriaLabelsDirective,
      selectors: [["", "ngxOtpAriaLabels", ""]],
      contentQueries: function AriaLabelsDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
        }
      },
      inputs: {
        ngxOtpAriaLabels: "ngxOtpAriaLabels"
      },
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaLabelsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngxOtpAriaLabels]'
    }]
  }], null, {
    inputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: ['otpInputElement', {
        descendants: true
      }]
    }],
    ngxOtpAriaLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const defaultOptions = {
  otpLength: 6,
  autoFocus: true,
  autoBlur: true,
  hideInputValues: false,
  regexp: /^[0-9]+$/,
  showBlinkingCursor: true,
  ariaLabels: [],
  inputMode: 'numeric'
};
var NgxOtpStatus;
(function (NgxOtpStatus) {
  NgxOtpStatus["SUCCESS"] = "success";
  NgxOtpStatus["FAILED"] = "failed";
})(NgxOtpStatus || (NgxOtpStatus = {}));
class NgxOtpInputComponent {
  constructor() {
    this.ngxOtpOptions = defaultOptions;
    this.disabled = false;
    this.otpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.otpComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  set options(customOptions) {
    this.ngxOtpOptions = {
      ...defaultOptions,
      ...customOptions
    };
  }
  // For testing purposes
  get ngxOtpOptionsInUse() {
    return this.ngxOtpOptions;
  }
  get inputType() {
    return this.ngxOtpOptions.hideInputValues ? 'password' : 'text';
  }
  get isOTPSuccess() {
    return this.status === NgxOtpStatus.SUCCESS;
  }
  get isOTPFailed() {
    return this.status === NgxOtpStatus.FAILED;
  }
  ngOnInit() {
    this.initOtpInputArray();
  }
  ngOnChanges(changes) {
    const otpChange = changes['otp'];
    if (otpChange?.currentValue) {
      if (!otpChange.firstChange) {
        this.setInitialOtp(otpChange.currentValue);
      } else {
        this.ngxOtpOptions.autoFocus = false;
      }
    }
  }
  initOtpInputArray() {
    this.ngxOtpInputArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArray(Array.from({
      length: this.ngxOtpOptions.otpLength
    }, () => new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)));
    if (this.otp) {
      this.setInitialOtp(this.otp);
    }
  }
  setInitialOtp(otp) {
    if (this.ngxOtpOptions.regexp.test(otp)) {
      const otpValueArray = otp.split('');
      otpValueArray.forEach((value, index) => {
        this.ngxOtpInputArray.controls[index].setValue(value ?? '');
      });
      this.emitOtpValueChange();
      if (otpValueArray.length !== this.ngxOtpOptions.otpLength) {
        console.warn('OTP length does not match the provided otpLength option!');
      }
    } else {
      throw new Error('Invalid OTP provided for the component <ngx-otp-input>');
    }
  }
  handleInputChanges($event) {
    const [index, value] = $event;
    this.ngxOtpInputArray.controls[index].setValue(value);
    this.emitOtpValueChange();
  }
  handlePasteChange($event) {
    if ($event.length === this.ngxOtpOptions.otpLength) {
      this.ngxOtpInputArray.setValue($event);
    } else {
      $event.map((value, index) => {
        this.ngxOtpInputArray.controls[index]?.setValue?.(value);
      });
    }
    this.emitOtpValueChange();
  }
  emitOtpValueChange() {
    this.otpChange.emit(this.ngxOtpInputArray.value);
    if (this.ngxOtpInputArray.valid) {
      this.otpComplete.emit(this.ngxOtpInputArray.value.join(''));
    }
  }
  isInputFilled(index) {
    return !!this.ngxOtpInputArray.controls[index].value;
  }
  reset() {
    this.ngxOtpInputArray.reset();
  }
  static {
    this.ɵfac = function NgxOtpInputComponent_Factory(t) {
      return new (t || NgxOtpInputComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxOtpInputComponent,
      selectors: [["ngx-otp-input"]],
      inputs: {
        options: "options",
        status: "status",
        disabled: "disabled",
        otp: "otp"
      },
      outputs: {
        otpChange: "otpChange",
        otpComplete: "otpComplete"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 9,
      consts: [["ngxOtpPaste", "", "ngxInputNavigations", "", "data-testid", "ngx-otp-input-form", 1, "ngx-otp-input-form", 3, "regexp", "isFormValid", "ngxAutoFocus", "ngxAutoBlur", "ngxOtpAriaLabels", "ngClass", "valueChange", "handlePaste"], ["class", "ngx-otp-input-box", "maxlength", "1", "spellcheck", "false", "autocomplete", "off", "autocapitalize", "off", "autocorrect", "off", "data-testid", "ngx-otp-input-box", 3, "value", "type", "inputMode", "disabled", "ngClass", 4, "ngFor", "ngForOf"], ["maxlength", "1", "spellcheck", "false", "autocomplete", "off", "autocapitalize", "off", "autocorrect", "off", "data-testid", "ngx-otp-input-box", 1, "ngx-otp-input-box", 3, "value", "type", "inputMode", "disabled", "ngClass"], ["otpInputElement", ""]],
      template: function NgxOtpInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NgxOtpInputComponent_Template_form_valueChange_0_listener($event) {
            return ctx.handleInputChanges($event);
          })("handlePaste", function NgxOtpInputComponent_Template_form_handlePaste_0_listener($event) {
            return ctx.handlePasteChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxOtpInputComponent_input_1_Template, 2, 10, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("regexp", ctx.ngxOtpOptions.regexp)("isFormValid", ctx.ngxOtpInputArray.valid)("ngxAutoFocus", ctx.ngxOtpOptions.autoFocus)("ngxAutoBlur", ctx.ngxOtpOptions.autoBlur)("ngxOtpAriaLabels", ctx.ngxOtpOptions.ariaLabels)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.ngxOtpOptions.showBlinkingCursor));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ngxOtpInputArray.controls);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, PasteDirective, AutoFocusDirective, InputNavigationsDirective, AutoBlurDirective, AriaLabelsDirective],
      styles: [".ngx-otp-input-form[_ngcontent-%COMP%]{display:inline-flex;gap:.5rem;caret-color:transparent}.ngx-blinking-cursor[_ngcontent-%COMP%]{caret-color:initial}.ngx-otp-input-box[_ngcontent-%COMP%]{width:30px;height:35px;padding:.5rem;font-size:1.5rem;text-align:center;border:1px solid #c4c4c4;border-radius:.5rem;outline:none}.ngx-otp-input-box[_ngcontent-%COMP%]:focus{border-color:#007bff}"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxOtpInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, PasteDirective, AutoFocusDirective, InputNavigationsDirective, AutoBlurDirective, AriaLabelsDirective],
      selector: 'ngx-otp-input',
      template: "<form\n  ngxOtpPaste\n  ngxInputNavigations\n  [regexp]=\"ngxOtpOptions.regexp!\"\n  [isFormValid]=\"ngxOtpInputArray.valid\"\n  [ngxAutoFocus]=\"ngxOtpOptions.autoFocus!\"\n  [ngxAutoBlur]=\"ngxOtpOptions.autoBlur!\"\n  [ngxOtpAriaLabels]=\"ngxOtpOptions.ariaLabels!\"\n  [ngClass]=\"{\n    'ngx-blinking-cursor': ngxOtpOptions.showBlinkingCursor\n  }\"\n  (valueChange)=\"handleInputChanges($event)\"\n  (handlePaste)=\"handlePasteChange($event)\"\n  class=\"ngx-otp-input-form\"\n  data-testid=\"ngx-otp-input-form\"\n>\n  <input\n    *ngFor=\"let control of ngxOtpInputArray.controls; let i = index\"\n    #otpInputElement\n    [value]=\"control.value\"\n    [type]=\"inputType\"\n    [inputMode]=\"ngxOtpOptions.inputMode\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'ngx-otp-input-disabled': disabled,\n      'ngx-otp-input-filled': isInputFilled(i),\n      'ngx-otp-input-success': isOTPSuccess,\n      'ngx-otp-input-failed': isOTPFailed\n    }\"\n    class=\"ngx-otp-input-box\"\n    maxlength=\"1\"\n    spellcheck=\"false\"\n    autocomplete=\"off\"\n    autocapitalize=\"off\"\n    autocorrect=\"off\"\n    data-testid=\"ngx-otp-input-box\"\n  />\n</form>\n",
      styles: [".ngx-otp-input-form{display:inline-flex;gap:.5rem;caret-color:transparent}.ngx-blinking-cursor{caret-color:initial}.ngx-otp-input-box{width:30px;height:35px;padding:.5rem;font-size:1.5rem;text-align:center;border:1px solid #c4c4c4;border-radius:.5rem;outline:none}.ngx-otp-input-box:focus{border-color:#007bff}\n"]
    }]
  }], null, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    status: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    otp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    otpChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    otpComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/*
 * Public API Surface of ngx-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_auth_otp_otp_component_ts.js.map