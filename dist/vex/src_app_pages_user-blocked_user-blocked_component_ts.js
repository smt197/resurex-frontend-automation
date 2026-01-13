"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_user-blocked_user-blocked_component_ts"],{

/***/ 85937:
/*!**************************************************************!*\
  !*** ./src/app/pages/user-blocked/user-blocked.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserBlockedComponent: () => (/* binding */ UserBlockedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);










const _c0 = () => ["/login"];
class UserBlockedComponent {
  static {
    this.ɵfac = function UserBlockedComponent_Factory(t) {
      return new (t || UserBlockedComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserBlockedComponent,
      selectors: [["vex-user-blocked"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 11,
      consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "px-4", "bg-cover", "bg-center", "bg-pattern", 2, "background-image", "url('assets/img/backgrounds/access-denied-bg.jpg')"], [1, "card", "shadow-xl", "text-center", "w-full", "max-w-sm", "overflow-hidden"], [1, "p-6", "flex", "flex-col", "items-center"], ["svgIcon", "mat:block", 1, "text-red-500", "text-8xl", "mb-4"], [1, "display-1", "font-medium", "m-0", "text-red-600"], [1, "title", "mt-3", "mb-0"], [1, "bg-app-bar", "p-6", "flex", "flex-col", "mt-6"], [1, "mt-0", "mb-4", "font-medium"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]],
      template: function UserBlockedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "access_denied.title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "access_denied.message"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "access_denied.contact_admin"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".bg-pattern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, rgba(0, 0, 0, 0.15) 22px, rgba(0, 0, 0, 0.15) 24px, transparent 24px, transparent 67px, rgba(0, 0, 0, 0.15) 67px, rgba(0, 0, 0, 0.15) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci1ibG9ja2VkL3VzZXItYmxvY2tlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZjQUNJO0VBMEJKLGtEQUFBO0VBQ0EsMkJBQUE7QUF6Qko7O0FBNEJBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBekJKIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXBhdHRlcm4ge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLFxyXG4gICAgICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKSAyMnB4LFxyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDI0cHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA2N3B4LFxyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY5cHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA2OXB4KSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLFxyXG4gICAgICAgICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKSAyMnB4LFxyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDIycHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDI0cHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAyNHB4LFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA2N3B4LFxyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY3cHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTUpIDY5cHgsXHJcbiAgICAgICAgICAgIC8qIERhcmtlciBsaW5lIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA2OXB4KSAwIDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-blocked_user-blocked_component_ts.js.map