"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_module-managers_module-managers_component_ts"],{

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

/***/ 2202:
/*!****************************************************************************!*\
  !*** ./src/app/pages/components/shared/search-bar/search-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBarComponent: () => (/* binding */ SearchBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/material/input */ 1346);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);










class SearchBarComponent {
  constructor() {
    this.placeholder = '';
    this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    this.model = {
      search: ''
    };
    this.fields = [{
      key: 'search',
      type: 'input',
      props: {
        placeholder: this.placeholder,
        appearance: 'outline',
        floatLabel: 'always',
        hideRequiredMarker: true,
        addonLeft: {
          class: 'text-secondary',
          text: 'search'
        }
      }
    }];
  }
  ngOnInit() {
    // Mettre à jour le placeholder si il est fourni en input
    if (this.placeholder && this.fields[0].props) {
      this.fields[0].props.placeholder = this.placeholder;
    }
  }
  onModelChange(model) {
    this.searchChange.emit(model.search);
  }
  static {
    this.ɵfac = function SearchBarComponent_Factory(t) {
      return new (t || SearchBarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchBarComponent,
      selectors: [["vex-search-bar"]],
      inputs: {
        placeholder: "placeholder"
      },
      outputs: {
        searchChange: "searchChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 3,
      consts: [[3, "form", "fields", "model", "modelChange"]],
      template: function SearchBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "formly-form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function SearchBarComponent_Template_formly_form_modelChange_0_listener($event) {
            return ctx.onModelChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fields)("model", ctx.model);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.FormlyForm, _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_4__.FormlyMatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 27319:
/*!********************************************************************!*\
  !*** ./src/app/pages/module-managers/module-managers.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleManagersComponent: () => (/* binding */ ModuleManagersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _dialogs_module_manager_create_update_module_manager_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogs/module-manager-create-update/module-manager-create-update.component */ 26917);
/* harmony import */ var _dialogs_delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/delete-element/delete-element.component */ 35599);
/* harmony import */ var _ui_confirm_dialog_component_confirm_dialog_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/confirm-dialog-component/confirm-dialog-component.component */ 75946);
/* harmony import */ var src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 42465);
/* harmony import */ var _components_shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/page-header/page-header.component */ 76112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _components_shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/search-bar/search-bar.component */ 2202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_module_generator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/module-generator.service */ 10161);




































function ModuleManagersComponent_div_3_vex_search_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "vex-search-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("searchChange", function ModuleManagersComponent_div_3_vex_search_bar_1_Template_vex_search_bar_searchChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.onSearchChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, "user.search"));
  }
}
function ModuleManagersComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ModuleManagersComponent_div_3_vex_search_bar_1_Template, 2, 3, "vex-search-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.modules.length > 0 || ctx_r0.searchCtrl) && !(ctx_r0.loading && !ctx_r0.searchCtrl));
  }
}
function ModuleManagersComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ModuleManagersComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.createModule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ModuleManagersComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "vex-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.noDataMessage);
  }
}
function ModuleManagersComponent_div_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Module Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32)(1, "div", 33)(2, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const module_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r24.moduleName);
  }
}
function ModuleManagersComponent_div_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Display Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const module_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](module_r25.displayName);
  }
}
function ModuleManagersComponent_div_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", module_r26.fieldsCount || 0, " ");
  }
}
function ModuleManagersComponent_div_8_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32)(1, "div", 37)(2, "mat-slide-toggle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ModuleManagersComponent_div_8_td_13_Template_mat_slide_toggle_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const module_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.toggleModule(module_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const module_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", module_r27.enabled)("matTooltip", module_r27.enabled ? "Disable module" : "Enable module")("color", module_r27.enabled ? "primary" : "default");
  }
}
function ModuleManagersComponent_div_8_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_16_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Mock Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "API");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ModuleManagersComponent_div_8_td_16_ng_container_2_Template, 5, 0, "ng-container", 39)(3, ModuleManagersComponent_div_8_td_16_ng_container_3_Template, 5, 0, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", module_r30.devMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !module_r30.devMode);
  }
}
function ModuleManagersComponent_div_8_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ModuleManagersComponent_div_8_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ModuleManagersComponent_div_8_td_19_Template_td_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 46)(2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-menu", null, 49)(6, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ModuleManagersComponent_div_8_td_19_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const module_r33 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.editModule(module_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ModuleManagersComponent_div_8_td_19_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const module_r33 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r38.regenerateModule(module_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Regenerate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ModuleManagersComponent_div_8_td_19_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const module_r33 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.deleteModule(module_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r21.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r21.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r21.loading);
  }
}
function ModuleManagersComponent_div_8_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 54);
  }
}
function ModuleManagersComponent_div_8_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 55);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function ModuleManagersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 17)(1, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ModuleManagersComponent_div_8_th_3_Template, 2, 0, "th", 20)(4, ModuleManagersComponent_div_8_td_4_Template, 6, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](5, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ModuleManagersComponent_div_8_th_6_Template, 2, 0, "th", 20)(7, ModuleManagersComponent_div_8_td_7_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](8, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ModuleManagersComponent_div_8_th_9_Template, 2, 0, "th", 20)(10, ModuleManagersComponent_div_8_td_10_Template, 3, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](11, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ModuleManagersComponent_div_8_th_12_Template, 2, 0, "th", 20)(13, ModuleManagersComponent_div_8_td_13_Template, 3, 3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](14, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ModuleManagersComponent_div_8_th_15_Template, 2, 0, "th", 20)(16, ModuleManagersComponent_div_8_td_16_Template, 4, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](17, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ModuleManagersComponent_div_8_th_18_Template, 2, 0, "th", 27)(19, ModuleManagersComponent_div_8_td_19_Template, 18, 4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ModuleManagersComponent_div_8_tr_20_Template, 1, 0, "tr", 29)(21, ModuleManagersComponent_div_8_tr_21_Template, 1, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx_r4.modules);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
  }
}
const _c0 = () => ["Dashboard", "Module Generator"];
class ModuleManagersComponent {
  constructor(moduleService, dialog, snackBar) {
    this.moduleService = moduleService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.modules = [];
    this.loading = false;
    this.title = 'Module Managers';
    this.noDataMessage = 'No Modules found.';
    this.displayedColumns = ['moduleName', 'displayName', 'fieldsCount', 'enabled', 'devMode', 'actions'];
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl('fullwidth');
    this.searchTerm = '';
    this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl();
  }
  ngOnInit() {
    this.loadModules();
  }
  loadModules() {
    this.loading = true;
    this.moduleService.getAllModules().subscribe({
      next: modules => {
        this.modules = modules;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading modules:', error);
        this.snackBar.open('Error loading modules', 'Close', {
          duration: 3000
        });
        this.loading = false;
      }
    });
  }
  createModule() {
    const dialogRef = this.dialog.open(_dialogs_module_manager_create_update_module_manager_create_update_component__WEBPACK_IMPORTED_MODULE_0__.ModuleManagerCreateUpdateComponent, {
      width: '900px',
      data: {
        mode: 'create'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.model) {
        this.loading = true;
        const request = {
          moduleName: result.model.moduleName,
          displayName: result.model.displayName,
          displayNameSingular: result.model.displayNameSingular,
          resourceType: result.model.resourceType || result.model.moduleName,
          identifierField: result.model.identifierField || 'id',
          identifierType: result.model.identifierField === 'slug' ? 'string' : 'number',
          requiresAuth: result.model.requiresAuth !== false,
          routePath: result.model.moduleName,
          fields: result.model.fields || [],
          devMode: result.model.devMode || false
        };
        this.moduleService.generateModule(request).subscribe({
          next: response => {
            this.snackBar.open(response.message || 'Module generated successfully!', 'Close', {
              duration: 3000
            });
            this.loadModules();
          },
          error: error => {
            console.error('Error generating module:', error);
            this.snackBar.open(error.error?.message || 'Error generating module', 'Close', {
              duration: 5000
            });
            this.loading = false;
          }
        });
      }
    });
  }
  editModule(module) {
    // Load full module details
    this.moduleService.getModule(module.slug).subscribe({
      next: fullModule => {
        const dialogRef = this.dialog.open(_dialogs_module_manager_create_update_module_manager_create_update_component__WEBPACK_IMPORTED_MODULE_0__.ModuleManagerCreateUpdateComponent, {
          width: '900px',
          data: {
            mode: 'update',
            moduleManager: fullModule
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result?.model) {
            this.loading = true;
            this.moduleService.updateModule(module.slug, result.model).subscribe({
              next: response => {
                this.snackBar.open(response.message || 'Module updated successfully!', 'Close', {
                  duration: 3000
                });
                this.loadModules();
              },
              error: error => {
                console.error('Error updating module:', error);
                this.snackBar.open(error.error?.message || 'Error updating module', 'Close', {
                  duration: 5000
                });
                this.loading = false;
              }
            });
          }
        });
      },
      error: error => {
        console.error('Error loading module:', error);
        this.snackBar.open('Error loading module details', 'Close', {
          duration: 3000
        });
      }
    });
  }
  deleteModule(module) {
    const dialogRef = this.dialog.open(_dialogs_delete_element_delete_element_component__WEBPACK_IMPORTED_MODULE_1__.DeleteElementComponent, {
      width: '500px',
      data: {
        title: 'Delete Module',
        message: `Are you sure you want to delete the module "${module.displayName}"? This will remove all generated files.`,
        element: module
      }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.loading = true;
        this.moduleService.deleteModule(module.slug).subscribe({
          next: response => {
            this.snackBar.open(response.message || 'Module deleted successfully!', 'Close', {
              duration: 3000
            });
            this.loadModules();
          },
          error: error => {
            console.error('Error deleting module:', error);
            this.snackBar.open(error.error?.message || 'Error deleting module', 'Close', {
              duration: 5000
            });
            this.loading = false;
          }
        });
      }
    });
  }
  toggleModule(module) {
    this.moduleService.toggleModule(module.slug, !module.enabled).subscribe({
      next: response => {
        this.snackBar.open(response.message || 'Module toggled successfully!', 'Close', {
          duration: 2000
        });
        this.loadModules();
      },
      error: error => {
        console.error('Error toggling module:', error);
        this.snackBar.open(error.error?.message || 'Error toggling module', 'Close', {
          duration: 3000
        });
      }
    });
  }
  regenerateModule(module) {
    const dialogRef = this.dialog.open(_ui_confirm_dialog_component_confirm_dialog_component_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
      width: '500px',
      data: {
        message: `Are you sure you want to regenerate all files for module "${module.displayName}"? This will overwrite existing files.`
      }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.loading = true;
        this.moduleService.regenerateModule(module.slug).subscribe({
          next: response => {
            this.snackBar.open(response.message || 'Module regenerated successfully!', 'Close', {
              duration: 3000
            });
            this.loading = false;
          },
          error: error => {
            console.error('Error regenerating module:', error);
            this.snackBar.open(error.error?.message || 'Error regenerating module', 'Close', {
              duration: 5000
            });
            this.loading = false;
          }
        });
      }
    });
  }
  onSearchChange(term) {
    this.searchTerm$.next(term);
  }
  shouldShowSearchBar() {
    const hasDataOrSearchTerm = this.modules.length > 0 || this.searchTerm !== '';
    const isLoadingWithoutSearch = this.loading && this.searchTerm === '';
    return hasDataOrSearchTerm && !isLoadingWithoutSearch;
  }
  static {
    this.ɵfac = function ModuleManagersComponent_Factory(t) {
      return new (t || ModuleManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_module_generator_service__WEBPACK_IMPORTED_MODULE_8__.ModuleGeneratorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ModuleManagersComponent,
      selectors: [["vex-module-managers"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 9,
      consts: [[3, "title", "breadcrumbs", "layoutControl"], [1, "module-manager-container", "mb-8"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], ["class", "mt-5", 4, "ngIf"], [1, "flex-1"], ["mat-mini-fab", "", "color", "primary", "class", "ml-4 shadow-md flex items-center justify-center", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center p-10", 4, "ngIf"], ["class", "flex flex-col items-center justify-center p-10", 4, "ngIf"], ["class", "overflow-auto", 4, "ngIf"], [1, "mt-5"], [3, "placeholder", "searchChange", 4, "ngIf"], [3, "placeholder", "searchChange"], ["mat-mini-fab", "", "color", "primary", 1, "ml-4", "shadow-md", "flex", "items-center", "justify-center", 3, "click"], [1, "flex", "items-center", "justify-center", "p-10"], [1, "flex", "flex-col", "items-center", "justify-center", "p-10"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"], [1, "overflow-auto"], ["mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "moduleName"], ["mat-header-cell", "", "class", "uppercase", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "displayName"], ["matColumnDef", "fieldsCount"], ["matColumnDef", "enabled"], ["matColumnDef", "devMode"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "uppercase text-right", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "uppercase"], ["mat-cell", ""], [1, "flex", "items-center", "gap-2"], [1, "text-primary"], [1, "font-medium"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], [1, "flex", "items-center", "justify-center"], [3, "checked", "matTooltip", "color", "change"], [4, "ngIf"], [1, "text-orange-600"], [1, "text-sm", "font-medium", "text-orange-600"], [1, "text-green-600"], [1, "text-sm", "font-medium", "text-green-600"], ["mat-header-cell", "", 1, "uppercase", "text-right"], ["mat-cell", "", 3, "click"], [1, "flex", "items-center", "justify-end", "space-x-2"], ["mat-icon-button", "", "matTooltip", "Actions", 3, "matMenuTriggerFor"], ["svgIcon", "mat:more_vert"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"], ["svgIcon", "mat:edit", 1, "mr-2"], ["svgIcon", "mat:refresh", 1, "mr-2"], ["svgIcon", "mat:delete", 1, "mr-2", "text-red-600"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"]],
      template: function ModuleManagersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vex-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ModuleManagersComponent_div_3_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ModuleManagersComponent_button_5_Template, 3, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ModuleManagersComponent_div_6_Template, 2, 0, "div", 6)(7, ModuleManagersComponent_div_7_Template, 4, 1, "div", 7)(8, ModuleManagersComponent_div_8_Template, 22, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.title)("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c0))("layoutControl", ctx.layoutCtrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shouldShowSearchBar());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.modules.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.modules.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__.MatSlideToggle, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent, _components_shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__.PageHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _components_shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__.SearchBarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms, src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger40ms]
      }
    });
  }
}

/***/ }),

/***/ 10161:
/*!****************************************************************************!*\
  !*** ./src/app/pages/module-managers/services/module-generator.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleGeneratorService: () => (/* binding */ ModuleGeneratorService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);




class ModuleGeneratorService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/admin/modules`;
  }
  /**
   * Convertir les clés camelCase en snake_case pour Laravel
   */
  toSnakeCase(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
      return obj.map(item => this.toSnakeCase(item));
    }
    const snakeCaseObj = {};
    Object.keys(obj).forEach(key => {
      const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
      snakeCaseObj[snakeKey] = this.toSnakeCase(obj[key]);
    });
    return snakeCaseObj;
  }
  /**
   * Convertir les clés snake_case en camelCase pour Angular
   */
  toCamelCase(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
      return obj.map(item => this.toCamelCase(item));
    }
    const camelCaseObj = {};
    Object.keys(obj).forEach(key => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      camelCaseObj[camelKey] = this.toCamelCase(obj[key]);
    });
    return camelCaseObj;
  }
  /**
   * Obtenir la liste de tous les modules
   */
  getAllModules() {
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      const data = response.data || response;
      return this.toCamelCase(data);
    }));
  }
  /**
   * Obtenir les détails d'un module
   */
  getModule(slug) {
    return this.http.get(`${this.apiUrl}/${slug}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      const data = response.data || response;
      return this.toCamelCase(data);
    }));
  }
  /**
   * Créer un nouveau module
   * Note: La route /generate est une route custom qui attend les données en camelCase
   */
  generateModule(request) {
    return this.http.post(`${this.apiUrl}/generate`, request);
  }
  /**
   * Mettre à jour un module existant
   */
  updateModule(slug, request) {
    return this.http.put(`${this.apiUrl}/${slug}`, this.toSnakeCase(request));
  }
  /**
   * Supprimer un module
   */
  deleteModule(slug) {
    return this.http.delete(`${this.apiUrl}/${slug}`);
  }
  /**
   * Activer/Désactiver un module
   */
  toggleModule(slug, enabled) {
    return this.http.patch(`${this.apiUrl}/${slug}/toggle`, {
      enabled
    });
  }
  /**
   * Régénérer les fichiers d'un module
   */
  regenerateModule(slug) {
    return this.http.post(`${this.apiUrl}/${slug}/regenerate`, {});
  }
  /**
   * Obtenir les fichiers d'un module (pour prévisualisation)
   */
  getModuleFiles(slug) {
    return this.http.get(`${this.apiUrl}/${slug}/files`);
  }
  static {
    this.ɵfac = function ModuleGeneratorService_Factory(t) {
      return new (t || ModuleGeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ModuleGeneratorService,
      factory: ModuleGeneratorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_module-managers_module-managers_component_ts.js.map