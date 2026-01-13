"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_auth_components_loading-spinner_loading-spinner_component_ts-src_app_classes_format-d-17780b"],{

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

/***/ 28666:
/*!*************************************************!*\
  !*** ./src/app/classes/format-document-icon.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatFileIcon: () => (/* binding */ FormatFileIcon)
/* harmony export */ });
// src/app/helpers/file-icon.helper.ts
class FormatFileIcon {
  static getIcon(mimeType) {
    if (!mimeType) return 'insert_drive_file';
    if (mimeType.startsWith('image/')) {
      return 'image';
    } else if (mimeType === 'application/pdf') {
      return 'picture_as_pdf';
    } else if (mimeType === 'application/msword' || mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return 'description'; // Icône texte pour Word
    } else if (mimeType === 'application/vnd.ms-excel' || mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return 'grid_on'; // Icône tableau pour Excel
    } else if (mimeType === 'application/vnd.ms-powerpoint' || mimeType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      return 'slideshow'; // Icône diaporama pour PowerPoint
    } else if (mimeType === 'application/zip' || mimeType === 'application/x-rar-compressed' || mimeType === 'application/x-7z-compressed') {
      return 'folder_zip'; // Icône pour les archives
    }
    // Par défaut
    return 'insert_drive_file';
  }
  static getIconDocument(mimeType) {
    if (!mimeType) return 'insert_drive_file';
    if (mimeType.startsWith('image/')) {
      return 'mat:image';
    } else if (mimeType === 'application/pdf') {
      return 'mat:picture_as_pdf';
    } else if (mimeType === 'application/msword' || mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return 'mat:description'; // Icône texte pour Word
    } else if (mimeType === 'application/vnd.ms-excel' || mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return 'mat:grid_on'; // Icône tableau pour Excel
    } else if (mimeType === 'application/vnd.ms-powerpoint' || mimeType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      return 'mat:slideshow'; // Icône diaporama pour PowerPoint
    } else if (mimeType === 'application/zip' || mimeType === 'application/x-rar-compressed' || mimeType === 'application/x-7z-compressed') {
      return 'mat:folder_zip'; // Icône pour les archives
    }
    // Par défaut
    return 'mat:insert_drive_file';
  }
  static getSlideToggle(disable) {
    return disable ? 'mat:check' : 'mat:add';
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_auth_components_loading-spinner_loading-spinner_component_ts-src_app_classes_format-d-17780b.js.map