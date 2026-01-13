"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_dashboard_dashboard_component_ts"],{

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

/***/ 95199:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-breadcrumbs/vex-breadcrumbs.component */ 23483);
/* harmony import */ var _vex_components_vex_secondary_toolbar_vex_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component */ 99955);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-permissions */ 90291);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-user/menu-user.component */ 13259);
/* harmony import */ var src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var src_app_services_menu_realtime_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/menu-realtime.service */ 57637);
/* harmony import */ var src_app_core_navigation_navigation_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/navigation/navigation-loader.service */ 87440);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chat/chat.service */ 47425);

























function DashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "vex-loading-spinner");
  }
}
function DashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-menu-user", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("appClick", function DashboardComponent_Conditional_10_Template_vex_menu_user_appClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.appClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("apps", ctx_r1.filteredApps);
  }
}
const _c0 = (a0, a1) => [a0, a1];
class DashboardComponent {
  constructor(authService, router, genericApi, route, menuRealtimeService, navigationLoader, websocketService, chatService, permissionsService) {
    this.authService = authService;
    this.router = router;
    this.genericApi = genericApi;
    this.route = route;
    this.menuRealtimeService = menuRealtimeService;
    this.navigationLoader = navigationLoader;
    this.websocketService = websocketService;
    this.chatService = chatService;
    this.permissionsService = permissionsService;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl('fullwidth');
    this.user = null;
    this.permissionsUser = [];
    this.rolesUser = [];
    this.filteredApps = []; // Menus filtrés
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false);
    // L'état (state) est aussi une propriété de la classe
    this.openApps = ['finder', 'safari'];
    this.ADMIN = 'admin';
  }
  ngOnInit() {
    this.getUserInfo();
    this.loadMenusFromResolver();
    this.initMenuUpdatesListener();
  }
  ngOnDestroy() {
    if (this.menuUpdateSub) {
      this.menuUpdateSub.unsubscribe();
    }
  }
  getUserInfo() {
    this.user = this.authService.user;
    this.permissionsUser = this.authService.getAllPermission();
    this.rolesUser = this.authService.getRolesNames();
  }
  users() {
    this.router.navigate(['/index/user']);
  }
  loadMenusFromResolver() {
    const menusData = this.route.snapshot.data['menusData'];
    if (menusData && menusData.data && Array.isArray(menusData.data)) {
      const menus = menusData.data;
      this.filterAppsByRole(menus);
      // Also update navigation with resolver data using reloadMenusOnly to preserve badges
      const unreadCount$ = this.websocketService.unreadCountNotificationSubject;
      const chatUnreadCount$ = this.chatService.totalChatUnreadCount$;
      this.navigationLoader.reloadMenusOnly(this.rolesUser, unreadCount$, chatUnreadCount$);
    } else {
      console.warn('Aucune donnée de menu trouvée dans le resolver');
      this.filteredApps = [];
    }
  }
  loadMenusByRole() {
    // this.isLoading.set(true);
    this.genericApi.getAlls('user-menus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(response => {
      if (response && response.data && Array.isArray(response.data)) {
        this.filterAppsByRole(response.data);
      } else {
        console.warn('Format de réponse inattendu:', response);
        this.filteredApps = [];
      }
    })).subscribe({
      error: error => {
        console.error('Erreur lors du chargement des menus:', error);
        this.filteredApps = [];
      }
    });
  }
  // Traite les menus reçus (déjà filtrés par rôle côté backend)
  filterAppsByRole(menus) {
    this.filteredApps = menus.map(menu => ({
      ...menu,
      icon: menu.icon.startsWith('mat:') ? menu.icon : 'mat:' + menu.icon,
      disable: menu.disable
    }));
  }
  appClick(menu) {
    this.router.navigate([menu.route], {
      queryParams: menu.queryParams
    });
  }
  initMenuUpdatesListener() {
    this.menuUpdateSub = this.menuRealtimeService.getMenuUpdates().subscribe({
      next: () => {
        this.loadMenusByRole();
      },
      error: error => {
        console.error('Error listening for menu updates in dashboard:', error);
      }
    });
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_7__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_menu_realtime_service__WEBPACK_IMPORTED_MODULE_8__.MenuRealtimeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_navigation_navigation_loader_service__WEBPACK_IMPORTED_MODULE_9__.NavigationLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_10__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_chat_chat_service__WEBPACK_IMPORTED_MODULE_11__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["vex-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 12,
      consts: [[3, "current"], [1, "flex-auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], ["svgIcon", "mat:more_vert"], [1, "min-h-screen", "bg-black/5", "backdrop-blur-lg"], [1, "flex", "flex-col", "items-center", "justify-center"], [3, "apps", "appClick"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-secondary-toolbar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "vex-breadcrumbs", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, DashboardComponent_Conditional_9_Template, 1, 0, "vex-loading-spinner")(10, DashboardComponent_Conditional_10_Template, 1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("current", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, "menu.dashboards"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, "menu.dashboards"), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 7, "menu.home")));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"](9, ctx.isLoading() ? 9 : 10);
        }
      },
      dependencies: [_vex_components_vex_secondary_toolbar_vex_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.VexSecondaryToolbarComponent, _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.VexBreadcrumbsComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_4__.MenuUserComponent, src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms]
      }
    });
  }
}

/***/ }),

/***/ 13259:
/*!********************************************************!*\
  !*** ./src/app/pages/menu-user/menu-user.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuUserComponent: () => (/* binding */ MenuUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);












const _forTrack0 = ($index, $item) => $item.id || $item.slug;
const _c1 = (a0, a1) => ({
  "cursor-pointer hover:scale-105": a0,
  "cursor-not-allowed opacity-50 blur-sm": a1
});
const _c2 = (a0, a1) => ({
  "hover:shadow-2xl hover:shadow-black/20": a0,
  "grayscale": a1
});
const _c3 = (a0, a1) => ({
  "text-white": a0,
  "text-gray-400": a1
});
const _c4 = (a0, a1) => ({
  "text-secondary group-hover:text-primary": a0,
  "text-gray-400": a1
});
function MenuUserComponent_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuUserComponent_For_2_For_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const app_r8 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onAppClick(app_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const app_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInUp", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c1, app_r8.disable === 1, app_r8.disable === 0))("matTooltip", app_r8.disable === 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 10, "menu.disabled") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 12, "menu." + app_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", app_r8.disable === 0 ? "#9ca3af" : app_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c2, app_r8.disable === 1, app_r8.disable === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", app_r8.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](22, _c3, app_r8.disable === 1, app_r8.disable === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c4, app_r8.disable === 1, app_r8.disable === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 14, "menu." + app_r8.name), " ");
  }
}
function MenuUserComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr", 7);
  }
}
function MenuUserComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, MenuUserComponent_For_2_For_2_Template, 8, 28, "div", 8, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuUserComponent_For_2_Conditional_3_Template, 1, 0, "hr", 2);
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const $count_r4 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@stagger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](group_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, !($index_r2 === $count_r4 - 1) ? 3 : -1);
  }
}
class MenuUserComponent {
  constructor() {
    this.apps = [];
    this.openApps = [];
    this.appClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // Émettre l'objet complet
  }
  // Grouper les menus par blocs de 4
  get groupedMenus() {
    const groups = [];
    for (let i = 0; i < this.apps.length; i += 5) {
      groups.push(this.apps.slice(i, i + 5));
    }
    return groups;
  }
  onAppClick(app) {
    // Ne pas permettre le clic si le menu est désactivé (disable === 0)
    if (app.disable === 1) {
      this.appClick.emit(app);
    }
  }
  static {
    this.ɵfac = function MenuUserComponent_Factory(t) {
      return new (t || MenuUserComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MenuUserComponent,
      selectors: [["vex-menu-user"]],
      inputs: {
        apps: "apps",
        openApps: "openApps"
      },
      outputs: {
        appClick: "appClick"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      consts: [[1, "mt-4", "w-full", "p-6", "space-y-8"], [1, "grid", "gap-6", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5"], ["class", "border-divider opacity-30"], ["matTooltipPosition", "below", 1, "relative", "flex", "flex-col", "items-center", "group", "transition-all", "duration-300", 3, "ngClass", "matTooltip", "click"], [1, "card", "w-28", "h-28", "flex", "items-center", "justify-center", "rounded-2xl", "shadow-xl", "shadow-black/10", "transition-all", "duration-300", 3, "ngClass"], [1, "w-20", "h-20", 3, "svgIcon", "ngClass"], [1, "mt-3", "text-base", "text-center", "font-medium", "transition-colors", "duration-300", "max-w-full", "truncate", 3, "ngClass"], [1, "border-divider", "opacity-30"], ["class", "relative flex flex-col items-center group transition-all duration-300", "matTooltipPosition", "below", 3, "ngClass", "matTooltip"]],
      template: function MenuUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, MenuUserComponent_For_2_Template, 4, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.groupedMenus);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger40ms]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_component_ts.js.map