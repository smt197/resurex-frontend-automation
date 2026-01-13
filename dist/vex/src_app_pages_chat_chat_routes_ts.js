"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_chat_chat_routes_ts"],{

/***/ 24555:
/*!********************************************************!*\
  !*** ./src/@vex/animations/scale-fade-in.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaleFadeIn400ms: () => (/* binding */ scaleFadeIn400ms),
/* harmony export */   scaleFadeInAnimation: () => (/* binding */ scaleFadeInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 47172);

function scaleFadeInAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleFadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(1)',
    opacity: 1
  }))])]);
}
const scaleFadeIn400ms = scaleFadeInAnimation(400);

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

/***/ 77157:
/*!*****************************************************!*\
  !*** ./src/app/interfaces/Response-globalServer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationStandard: () => (/* binding */ PaginationStandard)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);

const PaginationStandard = {
  current_page: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.current_page,
  pageSize: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pageSize,
  total: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.total,
  total_user_blocked: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.total_user_blocked
};

/***/ }),

/***/ 55536:
/*!**************************************!*\
  !*** ./src/app/models/chat.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatMessageModel: () => (/* binding */ ChatMessageModel),
/* harmony export */   getChatMessageFormFields: () => (/* binding */ getChatMessageFormFields)
/* harmony export */ });
class ChatMessageModel {
  constructor(chat) {
    this.message = chat.message ?? null;
    this.attachment = chat.attachment ?? null;
  }
}
function getChatMessageFormFields(component) {
  return [{
    fieldGroupClassName: 'flex flex-col gap-2',
    fieldGroup: [
    // CHAMP 1: FilePond (pièce jointe)
    {
      key: 'attachment',
      type: 'chat-file-pond',
      className: 'flex-none',
      // Affiche ce champ uniquement si isAttachmentAreaVisible est vrai
      hide: !component.isAttachmentAreaVisible(),
      props: {
        browse: component.onBrowseInit.bind(component),
        disabled: component.isBlocked()
      }
    },
    // CHAMP 2: Barre de saisie de message
    {
      key: 'message',
      type: 'chat-input-type',
      className: 'flex-auto',
      props: {
        placeholder: component.translateService.instant('global.chats.try_message'),
        // Lie les actions des boutons aux méthodes du composant parent
        onAdd: () => component.toggleAttachmentArea(),
        onSend: () => component.send(),
        // Passe l'état de chargement et de désactivation en tant que fonctions
        isUploading: () => component.isUploadingFile(),
        isSendDisabled: () => !component.model.message?.trim() && !component.model.attachment || component.isUploadingFile()
      }
    }]
  }];
}

/***/ }),

/***/ 42043:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/apps/chat/add-contact-modal/add-contact-modal.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddContactModalComponent: () => (/* binding */ AddContactModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 20943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/Response-globalServer */ 77157);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_services_CustomPaginatorIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/CustomPaginatorIntl */ 97742);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var src_app_pages_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/users/users.service */ 17259);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);
/* harmony import */ var src_app_pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/chat/chat.service */ 47425);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/language/translate.directive */ 49524);









 // Pour la pagination
 // Pour le champ de recherche
 // Pour le champ de recherche
 // Pour le champ de recherche
 // Vos interfaces



















function AddContactModalComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddContactModalComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchCtrl.setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddContactModalComponent_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddContactModalComponent_div_13_div_6_div_1_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddContactModalComponent_div_13_div_6_div_1_ng_container_1_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const contact_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.onContactSelect(contact_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contact_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("alt", "", contact_r14.first_name, " avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", contact_r14.photo || "assets/img/avatars/noavatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", contact_r14.last_name, " ", contact_r14.first_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](contact_r14.email || "Recent contact");
  }
}
function AddContactModalComponent_div_13_div_6_div_1_ng_container_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddContactModalComponent_div_13_div_6_div_1_ng_container_1_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.loadMoreRecentContacts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "global.expansion.Folded"));
  }
}
function AddContactModalComponent_div_13_div_6_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddContactModalComponent_div_13_div_6_div_1_ng_container_1_div_2_Template, 8, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddContactModalComponent_div_13_div_6_div_1_ng_container_1_a_3_Template, 5, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const displayedRecentContacts_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", displayedRecentContacts_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.hasMoreRecentContacts);
  }
}
function AddContactModalComponent_div_13_div_6_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "global.chats.no_recent_contacts"), " ");
  }
}
function AddContactModalComponent_div_13_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddContactModalComponent_div_13_div_6_div_1_ng_container_1_Template, 4, 2, "ng-container", 19)(2, AddContactModalComponent_div_13_div_6_div_1_ng_template_2_Template, 3, 3, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const displayedRecentContacts_r8 = ctx.ngIf;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", displayedRecentContacts_r8.length > 0)("ngIfElse", _r11);
  }
}
function AddContactModalComponent_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddContactModalComponent_div_13_div_6_div_1_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r6.displayedRecentContacts$));
  }
}
function AddContactModalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Recently");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AddContactModalComponent_div_13_div_5_Template, 2, 0, "div", 16)(6, AddContactModalComponent_div_13_div_6_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading());
  }
}
function AddContactModalComponent_div_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddContactModalComponent_div_14_div_6_div_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddContactModalComponent_div_14_div_6_div_1_ng_container_1_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const user_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.onContactSelect(user_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("alt", "", user_r28.first_name, " avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", user_r28.photo || "assets/img/avatars/noavatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", user_r28.last_name, " ", user_r28.first_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r28.email);
  }
}
function AddContactModalComponent_div_14_div_6_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddContactModalComponent_div_14_div_6_div_1_ng_container_1_div_1_Template, 8, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const users_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", users_r23);
  }
}
function AddContactModalComponent_div_14_div_6_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r25.searchCtrl.value ? "user.no_user_matching" : "user.no_user_matching"), " ");
  }
}
function AddContactModalComponent_div_14_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddContactModalComponent_div_14_div_6_div_1_ng_container_1_Template, 2, 1, "ng-container", 19)(2, AddContactModalComponent_div_14_div_6_div_1_ng_template_2_Template, 3, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const users_r23 = ctx.ngIf;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", users_r23.length > 0)("ngIfElse", _r26);
  }
}
function AddContactModalComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddContactModalComponent_div_14_div_6_div_1_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r21.users$));
  }
}
function AddContactModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AddContactModalComponent_div_14_div_5_Template, 2, 0, "div", 16)(6, AddContactModalComponent_div_14_div_6_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading());
  }
}
class AddContactModalComponent {
  constructor(dialogRef, data, usersService,
  // Injecter votre service utilisateur
  authService, chatService // Injecter ChatService pour accéder aux chats existants
  ) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.usersService = usersService;
    this.authService = authService;
    this.chatService = chatService;
    this._users = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.users$ = this._users.asObservable();
    this._recentContacts = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.recentContacts$ = this._recentContacts.asObservable();
    this._displayedRecentContacts = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.displayedRecentContacts$ = this._displayedRecentContacts.asObservable();
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('');
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(false);
    this.showRecentContacts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(true); // État pour basculer entre recently list et recherche
    // Variables pour la pagination des contacts récents
    this.recentContactsLimit = 5;
    this.allRecentContacts = [];
    this.pagination = {
      current_page: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_0__.PaginationStandard.current_page,
      per_page: 5,
      total: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_0__.PaginationStandard.total
    };
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    this.currentUserId = null;
    this.currentUserId = this.authService.user?.id ?? null;
  }
  ngOnInit() {
    // S'abonner aux chats du service et charger les contacts récents quand ils sont disponibles
    this.chatService.chats$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(chats => chats.length > 0),
    // Attendre que les chats soient chargés
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(chats => {
      this.loadRecentContacts();
    }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe();
    // Charger immédiatement si les chats sont déjà disponibles
    if (this.chatService.currentChatsValue.length > 0) {
      this.loadRecentContacts();
    }
    this.searchCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(searchTerm => {
      this.isLoading.set(true);
      // Basculer vers la recherche si un terme est saisi, sinon afficher recently list
      this.showRecentContacts.set(!searchTerm || searchTerm.trim() === '');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(searchTerm => {
      if (!searchTerm || searchTerm.trim() === '') {
        // Réafficher les contacts récents
        this.loadRecentContacts();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
          data: [],
          pagination: this.pagination,
          message: 'Recent contacts loaded'
        });
      } else {
        // Rechercher des utilisateurs
        return this.usersService.searchUsers(searchTerm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.catchError)(error => {
          this.isLoading.set(false);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
            data: [],
            pagination: this.pagination,
            message: 'Error'
          });
        }));
      }
    }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe(response => {
      if (!this.showRecentContacts()) {
        this.handleUserResponse(response);
      }
      this.isLoading.set(false);
    });
  }
  ngAfterViewInit() {
    // Le paginator est initialisé après que les données initiales soient chargées
    // ou après une recherche pour mettre à jour `this.pagination.total`.
  }
  fetchUsers(page, searchTerm) {
    this.isLoading.set(true);
    this.usersService.getUsers(page).pipe(
    // Assumer que getUsers accepte per_page et searchTerm
    (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_12__.takeUntilDestroyed)(this.destroyRef)).subscribe({
      next: response => {
        this.handleUserResponse(response);
        this.isLoading.set(false);
      },
      error: error => {
        console.error('Error fetching users:', error);
        this._users.next([]); // Vider la liste en cas d'erreur
        this.isLoading.set(false);
      }
    });
  }
  handleUserResponse(response) {
    let usersData = response.data || [];
    // Filtrer l'utilisateur actuel
    if (this.currentUserId !== null) {
      usersData = usersData.filter(user => String(user.id) !== String(this.currentUserId));
    }
    this._users.next(usersData);
    if (response.pagination) {
      this.pagination = response.pagination;
      // Forcer la mise à jour du paginator si la vue a déjà été initialisée
      if (this.paginator && (this.paginator.length !== this.pagination.total || this.paginator.pageIndex !== this.pagination.current_page - 1)) {
        // Il est un peu délicat de mettre à jour le paginator directement s'il est déjà rendu.
        // Parfois, il suffit de s'assurer que les inputs [length] et [pageIndex] sont correctement liés.
        // Pour forcer une réinitialisation, on pourrait reconstruire le DataSource si on utilisait MatTableDataSource
        // Ici, avec un simple *ngFor, on s'assure que les propriétés du paginator sont mises à jour.
      }
    }
  }
  onPageChange(event) {
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.fetchUsers(this.pagination.current_page, this.searchCtrl.value || undefined);
  }
  onContactSelect(selectedUser) {
    if (selectedUser && selectedUser.id) {
      this.dialogRef.close(selectedUser.id); // <<< CETTE LIGNE EST CRUCIALE
    } else {
      console.error('AddContactModalComponent: Selected user or user ID is invalid.', selectedUser);
    }
  }
  close() {
    this.dialogRef.close();
  }
  loadRecentContacts() {
    // Récupérer les chats existants depuis ChatService
    const existingChats = this.chatService.currentChatsValue;
    const recentContactsMap = new Map();
    // Extraire les contacts depuis les chats existants en utilisant partnerId et first_name
    existingChats.forEach((chat, index) => {
      // Utiliser partnerId comme contact récent
      if (chat.partnerId) {
        const partnerIdStr = String(chat.partnerId);
        const currentUserIdStr = String(this.currentUserId);
        // Exclure l'utilisateur actuel
        if (partnerIdStr !== currentUserIdStr && !recentContactsMap.has(partnerIdStr)) {
          // Créer un User à partir des informations du chat
          const recentContact = {
            id: typeof chat.partnerId === 'string' ? parseInt(chat.partnerId) || 0 : chat.partnerId,
            first_name: chat.first_name || 'Contact',
            last_name: '',
            email: '',
            confirmed: true,
            photo: chat.imageUrl || 'assets/img/avatars/noavatar.png'
          };
          recentContactsMap.set(partnerIdStr, recentContact);
        }
      }
    });
    const recentContactsArray = Array.from(recentContactsMap.values());
    // Stocker tous les contacts récents
    this.allRecentContacts = recentContactsArray;
    this._recentContacts.next(recentContactsArray);
    // Afficher seulement les 5 premiers par défaut
    this.updateDisplayedRecentContacts();
  }
  updateDisplayedRecentContacts() {
    const displayed = this.allRecentContacts.slice(0, this.recentContactsLimit);
    this._displayedRecentContacts.next(displayed);
  }
  loadMoreRecentContacts() {
    this.recentContactsLimit += 5;
    this.updateDisplayedRecentContacts();
  }
  get hasMoreRecentContacts() {
    return this.recentContactsLimit < this.allRecentContacts.length;
  }
  ngOnDestroy() {
    // destroyRef s'occupe de la désinscription des observables pipés avec takeUntilDestroyed
  }
  static {
    this.ɵfac = function AddContactModalComponent_Factory(t) {
      return new (t || AddContactModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_pages_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_pages_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AddContactModalComponent,
      selectors: [["vex-add-contact-modal"]],
      viewQuery: function AddContactModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorIntl,
        useClass: src_app_services_CustomPaginatorIntl__WEBPACK_IMPORTED_MODULE_2__.CustomPaginatorIntl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 7,
      consts: [[1, "flex", "flex-col", "gap-4", "px-6", "py-3", "border-b", "border-divider"], [1, "flex", "items-center", "gap-3", "w-full"], ["svgIcon", "mat:person_add", 1, "icon-2xl", "text-primary-600", "flex-shrink-0"], ["rxTranslate", "global.chats.add_new_discussion", 1, "text-lg", "sm:text-xl", "font-medium", "capitalize", "truncate"], ["mat-icon-button", "", "aria-label", "Close dialog", 1, "ltr:right-12", "rtl:left-12", "top-2", "absolute", 3, "click"], ["svgIcon", "mat:close"], ["subscriptSizing", "dynamic", 1, "w-full"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "type", "text", 3, "formControl", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "p-4"], [4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "text-xs", "font-semibold", "text-secondary", "px-2", "mb-2"], ["rxTranslate", "global.chats.recently_list"], [1, "space-y-1"], ["class", "flex justify-center items-center h-40", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-40"], ["diameter", "40"], [4, "ngIf", "ngIfElse"], ["noRecentContacts", ""], [1, "max-h-80", "overflow-y-auto"], ["class", "px-2 py-2 hover:bg-hover rounded transition duration-200 ease-out flex items-center gap-4 cursor-pointer select-none", "matRipple", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "inline-block text-gray-600 dark:text-gray-300 font-medium text-xs mx-6 mt-3", "href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["matRipple", "", 1, "px-2", "py-2", "hover:bg-hover", "rounded", "transition", "duration-200", "ease-out", "flex", "items-center", "gap-4", "cursor-pointer", "select-none", 3, "click"], [1, "w-8", "h-8", "rounded-full", "flex-none", 3, "src", "alt"], [1, "flex-auto", "flex-col", "gap-2"], [1, "flex-auto", "text-base", "font-medium"], [1, "flex-auto", "text-xs", "text-gray-500"], ["svgIcon", "mat:chevron_right", 1, "icon-sm", "flex-none"], ["href", "javascript:void(0);", 1, "inline-block", "text-gray-600", "dark:text-gray-300", "font-medium", "text-xs", "mx-6", "mt-3", 3, "click"], ["svgIcon", "mat:expand_more", 1, "icon-xs", "align-middle", "select-none"], [1, "p-6", "text-center", "text-gray-500"], ["rxTranslate", "home.title_bloc"], ["noUsersFound", ""]],
      template: function AddContactModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Add New Contact ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddContactModalComponent_Template_button_click_5_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-icon", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AddContactModalComponent_button_11_Template, 2, 0, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AddContactModalComponent_div_13_Template, 7, 2, "div", 11)(14, AddContactModalComponent_div_14_Template, 7, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.searchCtrl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 5, "global.chats.search_user"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchCtrl.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showRecentContacts());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showRecentContacts());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatIconButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__["default"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRipple],
      styles: [".vex-add-contact-content[_ngcontent-%COMP%] {\n  min-height: 200px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXBwcy9jaGF0L2FkZC1jb250YWN0LW1vZGFsL2FkZC1jb250YWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGQtY29udGFjdC1tb2RhbC5jb21wb25lbnQuc2Nzc1xyXG4udmV4LWFkZC1jb250YWN0LWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4OyAvLyBQb3VyIHMnYXNzdXJlciBxdSdpbCB5IGEgZGUgbGEgcGxhY2UgcG91ciBsZSBzcGlubmVyXHJcbiAgbWF4LWhlaWdodDogNjB2aDsgLy8gTGltaXRlciBsYSBoYXV0ZXVyIG1heGltYWxlXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLy8gUydhc3N1cmVyIHF1ZSBsZSBwYWdpbmF0b3IgZXN0IGJpZW4gdmlzaWJsZSBldCBzdHlsaXPDg8KpXHJcbjo6bmctZGVlcCAubWF0LW1kYy1kaWFsb2ctYWN0aW9ucyBtYXQtcGFnaW5hdG9yIHtcclxuICAvLyBTaSBsZSBwYWdpbmF0b3IgZXN0IHRyb3AgbGFyZ2UsIGFqdXN0ZXogc29uIGNvbnRlbmV1ciBvdSBzZXMgc3R5bGVzXHJcbiAgLy8gUGFyIGV4ZW1wbGUsIHBvdXIgcXUnaWwgbmUgcHJlbm5lIHBhcyB0b3V0ZSBsYSBsYXJnZXVyIHMnaWwgeSBhIGF1c3NpIGxlIGJvdXRvbiBjYW5jZWxcclxuICAvLyBWb3VzIGRldnJleiBwZXV0LcODwqp0cmUgYWp1c3RlciBsZXMgZmxleC1wcm9wZXJ0aWVzIGR1IGNvbnRlbmV1ciBtYXQtZGlhbG9nLWFjdGlvbnNcclxuICAvLyBvdSByZW5kcmUgbGUgcGFnaW5hdG9yIHBsdXMgcGV0aXQuXHJcbiAgLy8gUG91ciBsZSBtb21lbnQsIGlsIGVzdCBtaXMgw4PCoCB3LWZ1bGwsIGNlIHF1aSBwZXV0IMODwqp0cmUgb2sgc2kgbGUgYm91dG9uIGNhbmNlbCBlc3Qgw4PCoCBjw4PCtHTDg8KpLlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2946:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/chat/chat-conversation/chat-conversation.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatConversationComponent: () => (/* binding */ ChatConversationComponent),
/* harmony export */   slideInOutAnimation: () => (/* binding */ slideInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/components/vex-scrollbar/vex-scrollbar.component */ 99183);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _file_size_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-size.pipe */ 57920);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var src_app_models_chat_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/chat.model */ 55536);
/* harmony import */ var src_app_formly_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/formly-components */ 5177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chat.service */ 47425);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/language.service */ 48756);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 49524);














 // Votre pipe pour la taille des fichiers
 // Pour les tooltips







 // Pour l'animation













function ChatConversationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 16)(7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r8 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("alt", "", chat_r8.first_name, " avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", chat_r8.imageUrl || "assets/img/avatars/noavatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](chat_r8.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("bg-green-600", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 8, ctx_r0.isPartnerOnline$))("bg-gray-400", !_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 10, ctx_r0.isPartnerOnline$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 14, ctx_r0.isPartnerOnline$) ? "user.status.online" : "user.status.offline"), " ");
  }
}
function ChatConversationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "div", 21)(4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ChatConversationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "vex-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Loading conversation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_ng_container_5_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.openImage(message_r15.file_url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("alt", message_r15.file_name || "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", message_r15.file_url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 39)(2, "div", 40)(3, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 42)(6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("download", message_r15.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", message_r15.file_url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r19.getFileIcon(message_r15.file_mime_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", message_r15.file_name || "Attachment", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 5, message_r15.file_size), " ");
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", message_r15.message, "");
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 33)(4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_ng_container_5_Template, 2, 2, "ng-container", 9)(6, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_ng_container_6_Template, 12, 7, "ng-container", 9)(7, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_div_7_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 36)(9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 5, ctx_r16.chat$)) == null ? null : tmp_0_0.imageUrl) || "assets/img/avatars/noavatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.message_type === "image" && message_r15.file_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.message_type === "file" && message_r15.file_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r16.languageService.parseAndFormatDate(message_r15.timestamp || ""), " ");
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_ng_container_2_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.openImage(message_r15.file_url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("alt", message_r15.file_name || "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", message_r15.file_url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 54)(2, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("download", message_r15.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", message_r15.file_url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r29.getFileIcon(message_r15.file_mime_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](message_r15.file_name || "Attachment");
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](message_r15.message);
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_mat_progress_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-progress-spinner", 58);
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_ng_container_2_Template, 2, 2, "ng-container", 9)(3, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_ng_container_3_Template, 6, 4, "ng-container", 9)(4, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_div_4_Template, 2, 1, "div", 49)(5, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_mat_progress_spinner_5_Template, 1, 0, "mat-progress-spinner", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.message_type === "image" && message_r15.file_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.message_type === "file" && message_r15.file_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.message && message_r15.message_type !== "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r17.languageService.parseAndFormatDate(message_r15.timestamp || ""), "");
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_1_Template, 11, 7, "div", 29)(2, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_div_2_Template, 10, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const message_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.from === "partner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", message_r15.from === "me");
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "vex-scrollbar", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const messages_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", messages_r12)("ngForTrackBy", ctx_r13.trackByIdFn);
  }
}
function ChatConversationComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChatConversationComponent_ng_container_11_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const messages_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", messages_r12.length > 0)("ngIfElse", _r11);
  }
}
function ChatConversationComponent_ng_container_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "No messages yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Start the conversation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function ChatConversationComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChatConversationComponent_ng_container_11_ng_container_1_Template, 2, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ChatConversationComponent_ng_container_11_ng_template_3_Template, 6, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r4.messages$));
  }
}
function ChatConversationComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "formly-form", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("form", ctx_r5.form)("model", ctx_r5.model)("fields", ctx_r5.fields);
  }
}
function ChatConversationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64)(1, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "This user is suspended. You cannot send messages to this user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
const slideInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
  'max-height': '0px',
  opacity: '0',
  visibility: 'hidden',
  'margin-top': '0'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
  'max-height': '500px',
  opacity: '1',
  visibility: 'visible',
  'margin-top': '0.5rem' // Ajoute un espace quand il est visible
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('out => in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('200ms ease-in-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('in => out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('200ms ease-in-out'))]);
class ChatConversationComponent {
  trackByIdFn(index, item) {
    return item.id; // Crucial que item.id soit unique et toujours défini
  }
  constructor(route, chatService, cd, websocketService, languageService, translateService) {
    this.route = route;
    this.chatService = chatService;
    this.cd = cd;
    this.websocketService = websocketService;
    this.languageService = languageService;
    this.translateService = translateService;
    this.chat$ = this.chatService.currentChat$;
    this.messages$ = this.chatService.currentChatMessages$;
    this.isChatBlocked = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false);
    this.isLoadingConversation = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false); // Pour le spinner de chargement
    this.selectedFile = null;
    this.selectedFilePreview = null; // Pour la preview d'image avant envoi
    this.isUploadingFile = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false); // Pour le spinner sur le bouton d'envoi
    this.isAttachmentAreaVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false);
    this.triggerFileBrowse = () => {};
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
    this.currentChatId = null;
    this.currentUserId = null;
    this.browseRequested = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({});
    this.model = {
      message: null,
      attachment: null
    };
    this.fields = [];
    this.options = {};
    this.onBrowseInit = browseFn => {
      this.triggerFileBrowse = browseFn;
      if (this.browseRequested) {
        this.triggerFileBrowse();
        this.browseRequested = false;
      }
    };
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.effect)(() => {
      // Ce code s'exécutera chaque fois que isAttachmentAreaVisible() ou isChatBlocked() change
      const isVisible = this.isAttachmentAreaVisible();
      const isBlocked = this.isChatBlocked();
      // On reconstruit la configuration des champs pour forcer Formly à réagir
      this.fields = (0,src_app_models_chat_model__WEBPACK_IMPORTED_MODULE_6__.getChatMessageFormFields)(this);
    });
    this.onLinePartnerStatusChange();
    this.initBlockStatusListener();
    this.chat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(chat => !!chat), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef)).subscribe(chat => {
      this.isChatBlocked.set(chat.is_blocked ?? false);
      this.fields = (0,src_app_models_chat_model__WEBPACK_IMPORTED_MODULE_6__.getChatMessageFormFields)(this);
    });
  }
  isBlocked() {
    return this.isChatBlocked();
  }
  ngOnInit() {
    this.currentUserId = this.chatService.getCurrentUserId();
    this.getChatMessageFormFields();
    this.initChat();
  }
  onLinePartnerStatusChange() {
    this.isPartnerOnline$ = this.chat$.pipe(
    // this.chat$ est this.chatService.currentChat$
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(activeChat => {
      // Option 1: Utiliser activeChat.partnerId si votre backend l'envoie via /api/chats
      if (activeChat && typeof activeChat.partnerId !== 'undefined') {
        return this.websocketService.isUserOnline(activeChat.partnerId);
      }
      // Option 2: Essayer de le déduire de activeChat.participants
      else if (activeChat && activeChat.participants && activeChat.participants.length > 0) {
        const currentUserId = this.chatService.getCurrentUserId();
        const partner = activeChat.participants.find(p => String(p.id) !== String(currentUserId));
        if (partner && typeof partner.id !== 'undefined') {
          return this.websocketService.isUserOnline(partner.id);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(false);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.startWith)(false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef));
  }
  toggleAttachmentArea() {
    const wasVisible = this.isAttachmentAreaVisible();
    if (wasVisible) {
      // Si on ferme, on cache la zone et on réinitialise le formulaire
      this.isAttachmentAreaVisible.set(false);
      this.model.message = null;
      this.browseRequested = false; // Sécurité
    } else {
      this.browseRequested = true;
      this.isAttachmentAreaVisible.set(true);
    }
  }
  getChatMessageFormFields() {
    this.fields = (0,src_app_models_chat_model__WEBPACK_IMPORTED_MODULE_6__.getChatMessageFormFields)(this);
    this.translateService.onLangChange.subscribe(() => {
      this.fields = (0,src_app_models_chat_model__WEBPACK_IMPORTED_MODULE_6__.getChatMessageFormFields)(this);
    });
  }
  ngAfterViewInit() {
    this.scrollToBottom(true);
  }
  initChat() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(paramMap => paramMap.get('chatId')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(chatId => !!chatId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(chatId => this.chatService.initialChatsLoaded$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(loaded => loaded === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(() => {
      this.currentChatId = chatId;
      this.isLoadingConversation.set(true);
      this.chatService.setActiveChat(chatId);
    }))), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef)).subscribe();
    this.messages$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(() => {
      if (this.isLoadingConversation()) {
        this.isLoadingConversation.set(false);
      }
    })).subscribe(messages => {
      this.cd.markForCheck(); // ou detectChanges()
      this.scrollToBottom(true);
    });
  }
  send() {
    // Utiliser form.value pour obtenir les valeurs actuelles des contrôles
    const messageContent = this.model.message?.trim() || null;
    const fileToSend = this.model.attachment || null;
    if (!messageContent && !fileToSend) {
      return; // Ne rien envoyer si tout est vide
    }
    if (!this.currentChatId) {
      console.error('currentChatId is null, cannot send message.');
      return;
    }
    if (fileToSend) {
      this.isAttachmentAreaVisible.set(false);
    }
    this.isUploadingFile.set(true);
    this.cd.detectChanges();
    this.chatService.sendMessage(this.currentChatId, messageContent, fileToSend).subscribe({
      next: sentMessage => {
        this.model = {
          message: null,
          attachment: null
        };
        this.isUploadingFile.set(false);
        this.cd.detectChanges();
      },
      error: err => {
        console.error('Failed to send message/file:', err);
        this.isUploadingFile.set(false);
        this.cd.detectChanges();
      }
    });
  }
  scrollToBottom(force = false) {
    requestAnimationFrame(() => {
      if (this.scrollbar && this.scrollbar.scrollbarRef) {
        const scrollElement = this.scrollbar.scrollbarRef.getScrollElement();
        const contentElement = this.scrollbar.scrollbarRef.getContentElement();
        if (scrollElement && contentElement) {
          const scrollBuffer = 100; // Augmenter le buffer pour être plus tolérant
          const isEffectivelyAtBottom = scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight < scrollBuffer;
          if (force || isEffectivelyAtBottom) {
            scrollElement.scrollTo({
              top: contentElement.scrollHeight,
              behavior: force ? 'auto' : 'smooth' // 'auto' pour les ajouts rapides, 'smooth' si déjà en bas
            });
          } else {}
        } else {
          console.warn('Scrollbar elements not found for scrollToBottom');
        }
      } else {
        // console.warn('Scrollbar component/ref not found for scrollToBottom');
      }
    });
  }
  getFileIcon(mimeType) {
    if (!mimeType) return 'mat:insert_drive_file';
    if (mimeType.startsWith('image/')) return 'mat:image';
    if (mimeType === 'application/pdf') return 'mat:picture_as_pdf';
    if (mimeType.includes('word')) return 'mat:description';
    if (mimeType.includes('excel') || mimeType.includes('spreadsheet')) return 'mat:assessment';
    if (mimeType.includes('presentation')) return 'mat:slideshow';
    if (mimeType.includes('zip') || mimeType.includes('archive')) return 'mat:archive';
    return 'mat:insert_drive_file';
  }
  openImage(imageUrl) {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  }
  openDrawer() {
    this.chatService.setDrawerOpen(true);
  }
  initBlockStatusListener() {
    // Solution 1: Écouter les changements de statut de blocage depuis le WebSocket (utilisateur propre)
    this.websocketService.blockStatusUpdate$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef)).subscribe(blockStatusData => {
      this.handleBlockStatusUpdate(blockStatusData.is_blocked);
    });
    // Solution 2: Écouter les événements de blocage sur le canal du chat actif
    this.chat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(chat => !!chat), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(chat => {
      if (!chat.id || !this.currentUserId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(null);
      }
      // Écouter les événements de blocage spécifiques au chat
      return new rxjs__WEBPACK_IMPORTED_MODULE_24__.Observable(subscriber => {
        const channelName = `chat.${chat.id}`;
        const eventName = '.partner.block.status.updated';
        this.websocketService.listenPrivateWebsocket(eventName, channelName, eventData => {
          if (eventData && typeof eventData.is_blocked !== 'undefined') {
            subscriber.next({
              is_blocked: eventData.is_blocked
            });
          }
        });
        return () => {
          // Le cleanup sera géré par le système de WebSocket existant
        };
      });
    }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef)).subscribe(blockEvent => {
      if (blockEvent) {
        this.handleBlockStatusUpdate(blockEvent.is_blocked);
      }
    });
  }
  handleBlockStatusUpdate(isBlocked) {
    // Éviter les mises à jour inutiles si la valeur n'a pas changé
    if (this.isChatBlocked() === isBlocked) {
      return;
    }
    // Mettre à jour uniquement le signal local
    this.isChatBlocked.set(isBlocked);
    // Mettre à jour le chat actuel dans le service si nécessaire
    const currentChat = this.chatService._currentChat.getValue();
    if (currentChat && currentChat.is_blocked !== isBlocked) {
      const updatedChat = {
        ...currentChat,
        is_blocked: isBlocked
      };
      this.chatService._currentChat.next(updatedChat);
    }
  }
  ngOnDestroy() {
    if (this.currentChatId) {}
  }
  isImage(file) {
    return file.type.startsWith('image/');
  }
  static {
    this.ɵfac = function ChatConversationComponent_Factory(t) {
      return new (t || ChatConversationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_8__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_9__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: ChatConversationComponent,
      selectors: [["vex-chat-conversation"]],
      viewQuery: function ChatConversationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](src_app_formly_components__WEBPACK_IMPORTED_MODULE_7__.ChatFilePondTypeComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__.VexScrollbarComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.filePondComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.scrollbar = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 8,
      consts: [[1, "relative", "h-full", "flex", "flex-col", "overflow-hidden"], [1, "px-6", "bg-foreground", "border-b", "h-16", "flex-none", "flex", "items-center", "relative"], ["mat-icon-button", "", "type", "button", 1, "md:hidden", "sm:-ml-4", "mr-2", 3, "click"], ["svgIcon", "mat:menu"], [4, "ngIf", "ngIfElse"], ["headerPlaceholder", ""], [1, "flex-1"], [1, "flex-1", "relative", "overflow-hidden"], ["class", "absolute inset-0 flex flex-col items-center justify-center bg-background z-20", 4, "ngIf"], [4, "ngIf"], [1, "flex-none", "bg-foreground", "border-t", "p-2"], ["blockedForm", ""], [1, "flex", "items-center", "gap-3"], [1, "hidden", "sm:block", "flex-none", "w-9", "h-9", "rounded-full", "object-cover", 3, "src", "alt"], [1, "flex-1", "truncate"], [1, "font-semibold", "text-sm", "truncate"], [1, "flex", "items-center", "gap-1", "truncate"], [1, "h-1.5", "w-1.5", "rounded-full"], [1, "text-xs", "text-gray-600", "dark:text-gray-400", "truncate"], [1, "flex", "items-center", "gap-3", "opacity-50", "animate-pulse"], [1, "hidden", "sm:block", "flex-none", "w-9", "h-9", "rounded-full", "bg-gray-300", "dark:bg-gray-700"], [1, "h-4", "bg-gray-300", "dark:bg-gray-700", "rounded", "w-24", "mb-1"], [1, "h-3", "bg-gray-200", "dark:bg-gray-600", "rounded", "w-16"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "bg-background", "z-20"], ["rxTranslate", "global.chats.loading_conversation", 1, "mt-3", "text-gray-500", "dark:text-gray-400"], ["noMessagesTemplate", ""], [1, "h-full"], [1, "flex", "flex-col", "space-y-2", "p-4", "sm:p-8", "justify-end", "min-h-full"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "flex gap-2 w-full", 4, "ngIf"], ["class", "flex flex-col items-end w-full", 4, "ngIf"], [1, "flex", "gap-2", "w-full"], ["alt", "Partner avatar", 1, "w-8", "h-8", "rounded-full", "self-end", "object-cover", 3, "src"], [1, "flex", "flex-col", "space-y-1", "items-start"], [1, "px-4", "py-3", "rounded-xl", "bg-gray-200", "dark:bg-gray-800", "inline-flex", "items-center", "self-start", "max-w-[350px]", "gap-3", "cursor-pointer"], ["class", "px-4 py-3 rounded-xl rounded-bl-none bg-gray-200 dark:bg-gray-800 inline-flex self-start max-w-[350px]", 4, "ngIf"], [1, "flex", "items-center"], [1, "text-xs", "font-medium"], [1, "max-w-[200px]", "sm:max-w-xs", "max-h-64", "rounded", "mb-1", "cursor-pointer", "object-contain", 3, "src", "alt", "click"], ["target", "_blank", 1, "flex", "items-center", "p-3", "rounded-xl", "bg-primary-500", "hover:bg-primary-400", "gap-3", "cursor-pointer", "no-underline", "text-white", "mb-1", 3, "href", "download"], [1, "flex-none", "h-10", "w-10", "rounded-lg", "bg-white", "dark:bg-primary-700", "flex", "items-center", "justify-center", "shadow"], ["svgIcon", "mat:insert_drive_file", 1, "text-primary-600", "dark:text-white", "scale-125"], [1, "flex-1", "truncate", "min-w-0"], [1, "text-sm", "font-medium", "truncate"], [1, "text-xs", "text-primary-100", "dark:text-primary-200", "truncate"], ["svgIcon", "mat:download", 1, "flex-none"], [1, "px-4", "py-3", "rounded-xl", "rounded-bl-none", "bg-gray-200", "dark:bg-gray-800", "inline-flex", "self-start", "max-w-[350px]"], [1, "flex", "flex-col", "items-end", "w-full"], [1, "px-3", "py-2", "sm:px-4", "sm:py-3", "rounded-xl", "bg-primary-600", "text-white", "inline-block", "self-end", "max-w-xs", "sm:max-w-md", "md:max-w-lg"], ["class", "break-words text-sm", 4, "ngIf"], ["diameter", "16", "mode", "indeterminate", "class", "self-center mt-1 inline-block", 4, "ngIf"], [1, "self-end", "flex", "items-center", "gap-1", "mt-0.5"], ["svgIcon", "mat:done_all", 1, "icon-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "font-medium", "text-gray-500", "dark:text-gray-400"], ["target", "_blank", 1, "flex", "items-center", "p-2", "bg-primary-500", "hover:bg-primary-400", "rounded", "mb-1", "no-underline", "hover:no-underline", "text-white", 3, "href", "download"], ["svgIcon", "mat:insert_drive_file", 1, "mr-2", "flex-shrink-0"], [1, "truncate", "text-sm"], [1, "break-words", "text-sm"], ["diameter", "16", "mode", "indeterminate", 1, "self-center", "mt-1", "inline-block"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "text-gray-500", "dark:text-gray-400", "p-8"], ["svgIcon", "mat:chat_bubble_outline", 1, "w-16", "h-16", "mb-4", "opacity-50"], ["rxTranslate", "global.chats.not_message", 1, "text-lg"], ["rxTranslate", "global.chats.start_conversation", 1, "text-sm"], [1, "flex-auto", "h-full", 3, "form", "model", "fields"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "text-gray-500", "dark:text-gray-400", "p-4"], ["rxTranslate", "global.chats.block_message", 1, "text-sm"]],
      template: function ChatConversationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ChatConversationComponent_Template_button_click_2_listener() {
            return ctx.openDrawer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ChatConversationComponent_ng_container_4_Template, 14, 16, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ChatConversationComponent_ng_template_6_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ChatConversationComponent_div_10_Template, 4, 0, "div", 8)(11, ChatConversationComponent_ng_container_11_Template, 5, 3, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ChatConversationComponent_ng_container_13_Template, 2, 3, "ng-container", 4)(14, ChatConversationComponent_ng_template_14_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 6, ctx.chat$))("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoadingConversation());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isLoadingConversation());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isChatBlocked())("ngIfElse", _r7);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule, _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__.VexScrollbarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinner, _file_size_pipe__WEBPACK_IMPORTED_MODULE_3__.FileSizePipe, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_11__["default"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule, src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_34__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_34__.FormlyForm, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_35__.FormlyMaterialModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_37__.MatInputModule],
      styles: [".me[_ngcontent-%COMP%]    + .partner[_ngcontent-%COMP%], .partner[_ngcontent-%COMP%]    + .me[_ngcontent-%COMP%] {\n    margin-top: 1.5rem\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LWNvbnZlcnNhdGlvbi9jaGF0LWNvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLm1lICsgLnBhcnRuZXIsXHJcbi5wYXJ0bmVyICsgLm1lIHtcclxuICBAYXBwbHkgbXQtNjtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger20ms, slideInOutAnimation]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 98096:
/*!***************************************************************!*\
  !*** ./src/app/pages/chat/chat-empty/chat-empty.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatEmptyComponent: () => (/* binding */ ChatEmptyComponent)
/* harmony export */ });
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 24555);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ 47425);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 49524);









class ChatEmptyComponent {
  constructor(chatService, cd // cd est injecté mais pas utilisé dans ce template simple
  ) {
    this.chatService = chatService;
    this.cd = cd;
  }
  ngOnInit() {}
  openDrawer() {
    this.chatService.setDrawerOpen(true);
  }
  static {
    this.ɵfac = function ChatEmptyComponent_Factory(t) {
      return new (t || ChatEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ChatEmptyComponent,
      selectors: [["vex-chat-empty"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 121,
      vars: 1,
      consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "absolute", "top-0", "ltr:left-0", "ltr:ml-4", "rtl:right-0", "rtl:mr-4", "mt-4", "shadow", "block", "md:hidden", 3, "click"], ["svgIcon", "mat:menu"], [1, "w-full", "h-full", "p-12", "flex", "flex-col", "items-center", "justify-center"], ["viewBox", "0 0 432.68 384.05", "width", "100%", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["gradientUnits", "userSpaceOnUse", "id", "linear-gradient", "x1", "355.23", "x2", "378.79", "y1", "172.71", "y2", "172.71"], ["offset", "0", "stop-color", "#e5c5d5"], ["offset", "0.42", "stop-color", "#ead4d1"], ["offset", "1", "stop-color", "#f0e9cb"], ["gradientUnits", "userSpaceOnUse", "id", "linear-gradient-2", "x1", "374", "x2", "359.59", "y1", "164.44", "y2", "160.85"], ["offset", "0", "stop-opacity", "0"], ["offset", "0.99"], ["id", "linear-gradient-3", "x1", "311.63", "x2", "377.86", 0, "xlink", "href", "#linear-gradient-2", "y1", "217.67", "y2", "290.28"], ["id", "linear-gradient-4", "x1", "359.06", "x2", "281.46", 0, "xlink", "href", "#linear-gradient-2", "y1", "183.34", "y2", "220.85"], ["id", "linear-gradient-5", "x1", "329.39", "x2", "340.12", 0, "xlink", "href", "#linear-gradient", "y1", "134.53", "y2", "134.53"], ["id", "linear-gradient-6", "x1", "338.66", "x2", "297.66", 0, "xlink", "href", "#linear-gradient", "y1", "134.69", "y2", "129.1"], ["id", "linear-gradient-7", "x1", "159.94", "x2", "169.82", 0, "xlink", "href", "#linear-gradient-2", "y1", "257.05", "y2", "-24.82"], ["gradientUnits", "userSpaceOnUse", "id", "linear-gradient-8", "x1", "206.01", "x2", "202.42", "y1", "179.18", "y2", "74.65"], ["offset", "0.02", "stop-color", "#fff", "stop-opacity", "0"], ["offset", "0.58", "stop-color", "#fff", "stop-opacity", "0.39"], ["offset", "0.68", "stop-color", "#fff", "stop-opacity", "0.68"], ["offset", "1", "stop-color", "#fff"], ["id", "linear-gradient-9", "x1", "212.98", "x2", "168.69", 0, "xlink", "href", "#linear-gradient-2", "y1", "159.3", "y2", "346.02"], ["id", "linear-gradient-10", "x1", "193.71", "x2", "212.46", 0, "xlink", "href", "#linear-gradient-2", "y1", "259.62", "y2", "163.87"], ["id", "linear-gradient-11", "x1", "205.4", "x2", "210.48", 0, "xlink", "href", "#linear-gradient-2", "y1", "212.6", "y2", "314.94"], ["id", "linear-gradient-12", "x1", "195.06", "x2", "207.16", 0, "xlink", "href", "#linear-gradient", "y1", "266.51", "y2", "266.51"], ["id", "linear-gradient-13", "x1", "203.64", "x2", "215.42", 0, "xlink", "href", "#linear-gradient", "y1", "266.34", "y2", "266.34"], ["id", "linear-gradient-14", "x1", "207.62", "x2", "207.22", 0, "xlink", "href", "#linear-gradient-2", "y1", "170.06", "y2", "140.53"], ["id", "linear-gradient-15", "x1", "342.49", "x2", "340", 0, "xlink", "href", "#linear-gradient", "y1", "108.25", "y2", "131.59"], ["id", "linear-gradient-16", "x1", "340.04", "x2", "346.18", 0, "xlink", "href", "#linear-gradient-2", "y1", "102.97", "y2", "117.48"], ["id", "linear-gradient-17", "x1", "323.17", "x2", "371.17", 0, "xlink", "href", "#linear-gradient", "y1", "181.01", "y2", "181.01"], ["id", "linear-gradient-18", "x1", "201.47", "x2", "206.86", 0, "xlink", "href", "#linear-gradient-2", "y1", "263.23", "y2", "218.94"], ["id", "linear-gradient-19", "x1", "200.14", "x2", "208.3", 0, "xlink", "href", "#linear-gradient", "y1", "165.2", "y2", "165.2"], ["id", "linear-gradient-20", "x1", "198.55", "x2", "208.23", 0, "xlink", "href", "#linear-gradient-2", "y1", "160.2", "y2", "179.35"], ["id", "linear-gradient-21", "x1", "192.02", "x2", "216.6", 0, "xlink", "href", "#linear-gradient", "y1", "147.57", "y2", "147.57"], ["id", "linear-gradient-22", "x1", "203.73", "x2", "204.02", 0, "xlink", "href", "#linear-gradient-2", "y1", "131.16", "y2", "144.47"], ["id", "linear-gradient-23", "x1", "216.19", "x2", "220.16", 0, "xlink", "href", "#linear-gradient", "y1", "148.53", "y2", "148.53"], ["id", "linear-gradient-24", "x1", "188.68", "x2", "193.09", 0, "xlink", "href", "#linear-gradient", "y1", "147.92", "y2", "147.92"], ["id", "linear-gradient-25", "x1", "203.28", "x2", "229.27", 0, "xlink", "href", "#linear-gradient", "y1", "185.86", "y2", "185.86"], ["id", "linear-gradient-26", "x1", "183.58", "x2", "214.3", 0, "xlink", "href", "#linear-gradient-2", "y1", "207.1", "y2", "246.59"], ["id", "linear-gradient-27", "x1", "251.01", "x2", "457.48", 0, "xlink", "href", "#linear-gradient-2", "y1", "191.29", "y2", "184.11"], ["id", "linear-gradient-28", "x1", "242.87", "x2", "254.63", 0, "xlink", "href", "#linear-gradient-2", "y1", "341.17", "y2", "281.84"], ["id", "linear-gradient-29", "x1", "181.22", "x2", "205.05", 0, "xlink", "href", "#linear-gradient", "y1", "186.28", "y2", "186.28"], ["id", "linear-gradient-30", "x1", "333.43", "x2", "322.51", 0, "xlink", "href", "#linear-gradient", "y1", "122.82", "y2", "135.59"], ["id", "linear-gradient-31", "x1", "361.88", "x2", "342.16", 0, "xlink", "href", "#linear-gradient-2", "y1", "154.07", "y2", "160.5"], ["id", "linear-gradient-32", "x1", "330.75", "x2", "299.23", 0, "xlink", "href", "#linear-gradient-8", "y1", "163.51", "y2", "153.73"], ["id", "linear-gradient-33", "x1", "344.9", "x2", "300.42", 0, "xlink", "href", "#linear-gradient-2", "y1", "160.92", "y2", "182.86"], ["d", "M159.13,28c-11.33,13.37-18,30.64-31.27,42.05C115.8,80.37,99.77,84.6,85.9,92.37a91,91,0,0,0-28,134.39c5.59,7.37,12.46,14.15,15.29,23,5.38,16.71-5.38,35.19-1,52.18,2.42,9.34,9.09,16.9,15.56,24.06,13.51,15,28.14,30.69,47.62,36,24.17,6.59,50.45-4.37,74.74,1.8,11.5,2.92,21.69,9.49,32.6,14.15,39.71,17,89.74,5.58,118.19-26.92,5.92-6.75,11.07-14.39,18.47-19.48,17.85-12.29,42.67-6.18,62.87-14.05,23.34-9.1,36.16-38.81,26.75-62-5.71-14.09-17.86-24.77-23.85-38.74-17.29-40.3,22.16-88.77,4.49-128.91-13.11-29.78-51.05-39-83.58-38.17-18.33.46-37.21,2.8-54.6-3C259.94,29.28,211-33.25,159.13,28Z", "fill", "#5c77ff", "opacity", "0.18", "transform", "translate(-39.46 -1.67)", 2, "isolation", "isolate"], ["d", "M147.06,312c-7.48,0-16.09.54-20.58,6.52l29.24,6.94c1.76.41,3.68.93,4.74,2.4,1.79,2.49.11,6,.83,9,1.24,5.14,8.17,5.84,13.44,5.43l46.71-3.68c11.66-.92,24.18-1.64,34.21,4.36,4.71,2.82,8.54,7,13.37,9.58,10.36,5.58,23.26,3,34.06-1.65s20.83-11.4,32.26-14.2c9.46-2.32,19.41-1.85,28.93-3.9a55.85,55.85,0,0,0,26-13.51c-.58.54-25.67-5.42-28.76-5.54-7.23-.28-14.47.41-21.71.39-21.07-.06-42.16-.85-63.22-1.16Q211.85,312,147.06,312Z", "fill", "#5c77ff", "opacity", "0.18", "transform", "translate(-39.46 -1.67)", 2, "isolation", "isolate"], ["d", "M358.48,159.7a64.91,64.91,0,0,0,6.54,6.93.5.5,0,0,0,.26.15.45.45,0,0,0,.31-.09l.84-.45a29,29,0,0,0,9.72-1.41,2.29,2.29,0,0,1,1.83,0,1.59,1.59,0,0,1,.6.75,3.06,3.06,0,0,1-2.06,4,4,4,0,0,1-.75,4.43c-.87.85-2.09,1.26-3,2-2.25,1.88-2.27,5.26-3.47,7.94a3.16,3.16,0,0,1-1.09,1.43c-1.2.77-2.78,0-4-.82a45.18,45.18,0,0,1-5.13-4.15,7.48,7.48,0,0,1-1.89-2.37,8.36,8.36,0,0,1-.52-2.45l-1.44-13.19a1.47,1.47,0,0,1,.06-.78,1.32,1.32,0,0,1,.72-.54C357.05,160.69,357.37,159.61,358.48,159.7Z", "fill", "url(#linear-gradient)", "transform", "translate(-39.46 -1.67)"], ["d", "M365.79,164.49a20.33,20.33,0,0,1-1.3,2.14,9.45,9.45,0,0,0-1.09,1.58A6.39,6.39,0,0,0,363,171a2.72,2.72,0,0,0,.71,2.18,2.41,2.41,0,0,0,1.17.4,17.1,17.1,0,0,0,5.15,0,5.19,5.19,0,0,0,2.1-.71,5.67,5.67,0,0,0,1.57-1.83,118.67,118.67,0,0,0,8-14.7,1.26,1.26,0,0,0,.13-.43,1.1,1.1,0,0,0-.59-.92,5.62,5.62,0,0,0-2.55-.76,32.4,32.4,0,0,0-5-.22,4.42,4.42,0,0,0-1.62.28C371.22,154.67,366.9,162.49,365.79,164.49Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M365.79,164.49a20.33,20.33,0,0,1-1.3,2.14,9.45,9.45,0,0,0-1.09,1.58A6.39,6.39,0,0,0,363,171a2.72,2.72,0,0,0,.71,2.18,2.41,2.41,0,0,0,1.17.4,17.1,17.1,0,0,0,5.15,0,5.19,5.19,0,0,0,2.1-.71,5.67,5.67,0,0,0,1.57-1.83,118.67,118.67,0,0,0,8-14.7,1.26,1.26,0,0,0,.13-.43,1.1,1.1,0,0,0-.59-.92,5.62,5.62,0,0,0-2.55-.76,32.4,32.4,0,0,0-5-.22,4.42,4.42,0,0,0-1.62.28C371.22,154.67,366.9,162.49,365.79,164.49Z", "fill", "url(#linear-gradient-2)", "transform", "translate(-39.46 -1.67)"], ["d", "M367.08,165.43a17.87,17.87,0,0,1-1.29,2.14,9.53,9.53,0,0,0-1.09,1.59,6.37,6.37,0,0,0-.39,2.82,2.69,2.69,0,0,0,.71,2.18,2.48,2.48,0,0,0,1.17.4,17.36,17.36,0,0,0,5.14,0,5.18,5.18,0,0,0,2.11-.71A6,6,0,0,0,375,172a118.61,118.61,0,0,0,8-14.7,1.36,1.36,0,0,0,.14-.43,1.1,1.1,0,0,0-.59-.92,5.79,5.79,0,0,0-2.55-.77,32.52,32.52,0,0,0-5-.21,4.26,4.26,0,0,0-1.62.28C372.52,155.62,368.19,163.43,367.08,165.43Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M380.66,254.64a606.84,606.84,0,0,1-45.27,48.1,3,3,0,0,1-2.26,1.12,2.81,2.81,0,0,1-1.32-.74,35.61,35.61,0,0,1-8.48-10.54,1.22,1.22,0,0,1,.31-1.77Q341.51,272,358.73,252.5a3.27,3.27,0,0,0,.89-1.46,3.36,3.36,0,0,0-.8-2.36,155.83,155.83,0,0,1-15.08-29.2,3.12,3.12,0,0,1-.3-1.86,3,3,0,0,1,.9-1.32c3.64-3.59,14.8-11.88,19-5.63,2.59,3.87,4.1,9,5.88,13.28q2.94,7,5.62,14.18Q377.92,246.32,380.66,254.64Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M380.66,254.64a606.84,606.84,0,0,1-45.27,48.1,3,3,0,0,1-2.26,1.12,2.81,2.81,0,0,1-1.32-.74,35.61,35.61,0,0,1-8.48-10.54,1.22,1.22,0,0,1,.31-1.77Q341.51,272,358.73,252.5a3.27,3.27,0,0,0,.89-1.46,3.36,3.36,0,0,0-.8-2.36,155.83,155.83,0,0,1-15.08-29.2,3.12,3.12,0,0,1-.3-1.86,3,3,0,0,1,.9-1.32c3.64-3.59,14.8-11.88,19-5.63,2.59,3.87,4.1,9,5.88,13.28q2.94,7,5.62,14.18Q377.92,246.32,380.66,254.64Z", "fill", "url(#linear-gradient-3)", "transform", "translate(-39.46 -1.67)"], ["d", "M328.61,231.43c1.45,10.89,6.6,21,8.06,31.9.49,3.6.56,7.25,1.16,10.83.82,5,2.63,9.71,3.55,14.65,1.43,7.63.74,15.58,2.67,23.1a3.5,3.5,0,0,0,1,2,3.74,3.74,0,0,0,2.43.57l8.58.05a297.28,297.28,0,0,0-1.94-50.7c-.42-3.39-.9-6.79-1.12-10.2-.83-13,2.2-26.21.15-39.11a174,174,0,0,1-23.06.52c-1.71-.08-3.13-.69-3.56.89-.29,1,.9,4,1.06,5.17C328.07,224.51,328.15,228,328.61,231.43Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M364.16,211.33a4.55,4.55,0,0,1-1.62,1.49c-3.46,2.22-7,4.49-11.09,5.11-1.8.27-3.65.21-5.45.51-2.13.36-4.14,1.24-6.25,1.75a18.81,18.81,0,0,1-9.71-.26,17.29,17.29,0,0,1-3.52-1.42,11.18,11.18,0,0,1-1.66-1.07,5.55,5.55,0,0,1-1.8-2.3,8.14,8.14,0,0,1-.29-3.58v0c.72-10.23,2.21-21-2-30.34l-1.54.25a1.7,1.7,0,0,1-.22,0h0l-.16,0-.71.11A92.76,92.76,0,0,1,314.37,161c-.27-4.16-.22-8.56,1.85-12.18a16.62,16.62,0,0,1,7.52-6.4,18.88,18.88,0,0,1,5.32-1.5,56.13,56.13,0,0,1,10.61,0l7.09.45a6.71,6.71,0,0,1,2.39.45,5.33,5.33,0,0,1,1.66,1.33c3.68,4.06,4.77,10,8.28,14.12,0,0,0,0,0,0,.23.28.47.55.73.81.06.06.13.12.18.18l0,0a1,1,0,0,1,.37.86.19.19,0,0,1,0,.09v0a1.5,1.5,0,0,1-.42.59c-1.14,1.12-2.28,2.23-3.4,3.35.07.82.1,1.67.12,2.54.1,3.26,0,6.78.61,9.81q3.46,16.35,6.92,32.72A4.46,4.46,0,0,1,364.16,211.33Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M356.44,186.91a19.28,19.28,0,0,1-7,6c-3.22,1.59-6.8,2.24-10.29,3.08-2.12.51-4.42,1.23-5.63,3.06a9.26,9.26,0,0,0-1,4.95c-.07,4-.16,8-.23,12.06,0,1.23-.12,2.63-1.08,3.42a2.46,2.46,0,0,1-1.1.5,4.17,4.17,0,0,1-1.89-.14,6.79,6.79,0,0,1-3.29-2.35,9.92,9.92,0,0,1-1.82-4,12.71,12.71,0,0,1-.27-1.95c.72-10.23,2.21-21-2-30.34,5.27-7.66,7.7-3.33,13.61.53a22.83,22.83,0,0,0,4.14,2.06,18.2,18.2,0,0,0,8.06,1.61c3.16-.26,6-1.85,8.91-3.16C359.89,180.24,357.73,185.13,356.44,186.91Z", "fill", "url(#linear-gradient-4)", "transform", "translate(-39.46 -1.67)"], ["d", "M330.4,136c-.3,1.49-1,4.9-1,4.9a5.37,5.37,0,0,0,1.81,2,9.9,9.9,0,0,0,4.42,1.75c1.24.17,2.72,0,3.35-1.1a3.89,3.89,0,0,0,.4-1.52l.68-5.89a6.11,6.11,0,0,0,0-1.54,4.44,4.44,0,0,0-.6-1.48c-1.21-2-6.2-10.79-7.28-8.4S330.81,134,330.4,136Z", "fill", "url(#linear-gradient-5)", "transform", "translate(-39.46 -1.67)"], ["d", "M334.33,135.3a14.85,14.85,0,0,0,5.22,5.81,17.87,17.87,0,0,1,.59-4.77c.35-1.31.85-2.73.32-4a4.45,4.45,0,0,0-1-1.43c-1.44-1.44-4.57-3.77-6.81-3.08-.82.25-.63.38-.43,1.26.15.69.32,1.38.52,2.06A22.73,22.73,0,0,0,334.33,135.3Z", "fill", "url(#linear-gradient-6)", "transform", "translate(-39.46 -1.67)"], ["d", "M213.25,104.58a3.75,3.75,0,0,1-3.75-3.74V72.71a3.75,3.75,0,1,1,7.49,0v28.13A3.75,3.75,0,0,1,213.25,104.58Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["cx", "167.16", "cy", "195.4", "fill", "#5c77ff", "rx", "79.51", "ry", "95.74"], ["cx", "162.27", "cy", "190.69", "fill", "url(#linear-gradient-7)", "rx", "72.12", "ry", "80.79"], ["d", "M206.62,101.33c-43.91,0-79.5,42.87-79.5,95.75s35.59,95.74,79.5,95.74,79.51-42.87,79.51-95.74S250.54,101.33,206.62,101.33Zm-2.5,176.51c-41.14,0-74.5-37.47-74.5-83.67S163,110.5,204.12,110.5s74.51,37.46,74.51,83.67S245.27,277.84,204.12,277.84Z", "fill", "url(#linear-gradient-8)", "transform", "translate(-39.46 -1.67)"], ["d", "M172,205.71c1.82.1,1.42-3.36,1.58-5.18.52-5.92-.15-11.91.44-17.82s2.74-12.08,7.55-15.58c1.45-1,3.14-1.87,4.21-3.3,1.26-1.67,1.47-3.89,2.2-5.85,2-5.47,8.37-8.59,14.18-8s10.95,4.32,14.46,9c2,2.62,3.59,5.63,6.24,7.56,1.38,1,3,1.67,4.29,2.76a12.69,12.69,0,0,1,3.75,7c1.2,5.2.79,10.62,1.07,16s1.39,10.93,5,14.86c1.9,2.06,4.37,3.53,6.28,5.58s3.23,5.08,2.11,7.65-3.83,3.54-6.25,4.63c-9.71,4.34-17.93,12.09-28.28,14.5-9.28,2.16-19.13-.34-27.58-4.74S167.62,224,160,218.28C145.47,207.54,160,205,172,205.71Z", "fill", "url(#linear-gradient-9)", "transform", "translate(-39.46 -1.67)"], ["d", "M176.77,224.52c-3.4-6.55-9.06-13.48-16.42-12.82-1.86.17-3.67.85-5.54,1-3.74.23-7.22-1.75-10.84-2.73s-8.36-.42-9.86,3c-.93,2.14-.24,4.61.53,6.81,6,17,16.65,32.53,31.44,42.76s33.78,14.78,51.29,10.67c7.55-1.78,14.67-5.07,21.51-8.73,5.76-3.08,11.45-6.5,16-11.21,8.12-8.47,11.69-20.2,15-31.46,1-3.51,1.85-7.87-.83-10.36a7.34,7.34,0,0,0-4.82-1.66,14,14,0,0,0-10.2,4c-1.1,1.1-2.08,2.42-3.54,2.95-1.91.7-4-.18-6-.44-9.85-1.27-15.5,11.43-24.75,15.07-4.68,1.84-9.82,1.07-14.59,2.44-4.39,1.26-8.16,5.18-12.65,5.9C183.68,241.1,180.13,231,176.77,224.52Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M176.77,224.52c-3.4-6.55-9.06-13.48-16.42-12.82-1.86.17-3.67.85-5.54,1-3.74.23-7.22-1.75-10.84-2.73s-8.36-.42-9.86,3c-.93,2.14-.24,4.61.53,6.81,6,17,16.65,32.53,31.44,42.76s33.78,14.78,51.29,10.67c7.55-1.78,14.67-5.07,21.51-8.73,5.76-3.08,11.45-6.5,16-11.21,8.12-8.47,11.69-20.2,15-31.46,1-3.51,1.85-7.87-.83-10.36a7.34,7.34,0,0,0-4.82-1.66,14,14,0,0,0-10.2,4c-1.1,1.1-2.08,2.42-3.54,2.95-1.91.7-4-.18-6-.44-9.85-1.27-15.5,11.43-24.75,15.07-4.68,1.84-9.82,1.07-14.59,2.44-4.39,1.26-8.16,5.18-12.65,5.9C183.68,241.1,180.13,231,176.77,224.52Z", "fill", "url(#linear-gradient-10)", "transform", "translate(-39.46 -1.67)"], ["d", "M175.34,224.93c-1.44-.22-2.68,1.29-2.73,2.75a7.86,7.86,0,0,0,1.43,4.08l5.7,9.88c-6.36,1-11.93-3.8-17.31-7.33-1.86-1.21-4.7-2.16-6-.36-.92,1.27-.28,3.15.89,4.18a14.56,14.56,0,0,0,4.19,2.09c5.06,2.11,9,6.36,13.93,8.7,3.24,1.52,6.8,2.18,10.19,3.33,3.22,1.09,6.63,3,7.43,6.34.59,2.47-.45,5-.44,7.56s2.06,5.53,4.47,4.74c1.54-.51,2.23-2.25,2.73-3.79l3.66-11.3c4,2.65,3.61,9.49,7.91,11.55l1.05-7.21a5.3,5.3,0,0,1,.54-2,4.54,4.54,0,0,1,3.15-1.84c2.47-.5,5.07-.3,7.46-1.09,3.45-1.15,5.88-4.16,8.57-6.61,3.12-2.85,6.76-5.06,10.06-7.71a48,48,0,0,0,14.18-19c-2.33-.78-4.84.86-6.24,2.88s-2.12,4.46-3.53,6.49a11.62,11.62,0,0,1-10.64,4.8,6.32,6.32,0,0,1,1.85-6.9,8.8,8.8,0,0,0,1.44-1.21c1.71-2.06-.64-5.4-3.31-5.64s-5.1,1.36-7.37,2.8a81.28,81.28,0,0,1-14.37,7.24c-3.54,1.37-7.29,2.51-11.08,2.21-5.8-.45-10.74-4-16.43-4.91-2.2-.34-5.25.84-7.12-.1S177.74,225.29,175.34,224.93Z", "fill", "url(#linear-gradient-11)", "transform", "translate(-39.46 -1.67)"], ["d", "M196.66,268a10,10,0,0,0-1.58,3.74,7.49,7.49,0,0,0,1.1,4.14c.58,1.1,1.48,2.3,2.71,2.22a3.16,3.16,0,0,0,1.29-.48,7.91,7.91,0,0,0,2.06-1.55c1.4-1.58,1.64-3.86,1.58-6s-.35-4.27.23-6.29c.73-2.55,2.79-4.65,3.11-7.28-1.41-.39-4.17-1.79-5.59-1.54s-1.17,2.12-1.37,3.23A28.74,28.74,0,0,1,196.66,268Z", "fill", "url(#linear-gradient-12)", "transform", "translate(-39.46 -1.67)"], ["d", "M205.69,260.1a14.24,14.24,0,0,1,.82,2.38,14,14,0,0,1,.24,2.42l.49,10.47a6.07,6.07,0,0,0,.7,3.1c.91,1.4,2.8,1.81,4.45,1.61a2.71,2.71,0,0,0,1.47-.54,2.78,2.78,0,0,0,.68-1,8.7,8.7,0,0,0,.81-2.53c.33-2.31-.6-4.61-1.64-6.7s-2.22-4.19-2.45-6.52c-.19-1.84.25-3.71.06-5.55-.16-1.57-.78-3.11-.66-4.68a30.65,30.65,0,0,0-3.42.62c-.9.22-2.68.43-3.4,1C203,255,205.24,259,205.69,260.1Z", "fill", "url(#linear-gradient-13)", "transform", "translate(-39.46 -1.67)"], ["d", "M189.17,150.1a15.25,15.25,0,0,1-3.38-10.53,16.22,16.22,0,0,1,4.49-10.15c2-2.06,4.69-3.65,7.51-3.37,1.06-1.46,3.17-1.88,4.93-2.27a17.55,17.55,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.54,19.54,0,0,1,2.19,8.59,46,46,0,0,0,1,8.87c.79,2.88,2.48,5.67,5.16,7a2.57,2.57,0,0,1,1.11.76c.52.76,0,1.8-.72,2.42a6.56,6.56,0,0,1-5.5,1.54l.86,1.89a.45.45,0,0,1-.19.72,5.15,5.15,0,0,1-5.19.11,8,8,0,0,1-.11,2.24,13.45,13.45,0,0,1-5.77-2.06c0,1.21-1.32,2.07-2.52,2a8.44,8.44,0,0,1-3.35-1.31,2,2,0,0,0-1-.33c-.73,0-1.22.7-1.78,1.16a4.38,4.38,0,0,1-3.76.66,11.54,11.54,0,0,1-3.54-1.73c.18.72-.58,1.41-1.32,1.41a3.09,3.09,0,0,1-1.95-.95,7.76,7.76,0,0,1-2.59-4.28,4.81,4.81,0,0,1-1.6,1.38,1.64,1.64,0,0,1-1.94-.34c-.55-.71-.17-1.72.23-2.52l1.39-2.81C189,152.67,190.2,151.36,189.17,150.1Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M228,157.33a6.52,6.52,0,0,1-5.49,1.54l.87,1.89a.57.57,0,0,1,.07.44.63.63,0,0,1-.27.29,5.2,5.2,0,0,1-5.19.1,8.39,8.39,0,0,1-.11,2.24,13.45,13.45,0,0,1-5.77-2.06c.05,1.21-1.31,2.06-2.53,2a8,8,0,0,1-3.34-1.31,2.12,2.12,0,0,0-1-.33c-.73,0-1.22.71-1.78,1.17a4.38,4.38,0,0,1-3.76.66,11.65,11.65,0,0,1-3.54-1.73c.18.72-.57,1.4-1.32,1.41a3.09,3.09,0,0,1-1.95-.95,7.7,7.7,0,0,1-2.59-4.29,4.73,4.73,0,0,1-1.6,1.39,1.67,1.67,0,0,1-2-.34c-.54-.71-.15-1.73.24-2.52.47-.94.92-1.87,1.39-2.81.72-1.45,1.9-2.76.87-4a14.83,14.83,0,0,1-2.85-5.5,15.89,15.89,0,0,1-.53-5,16.27,16.27,0,0,1,4.49-10.15c2-2,4.68-3.64,7.51-3.36,1.05-1.46,3.17-1.88,4.93-2.27a17.56,17.56,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.53,19.53,0,0,1,2.18,8.59,52.45,52.45,0,0,0,.88,8.22c0,.23.1.44.16.65.8,2.88,2.49,5.68,5.17,7a2.93,2.93,0,0,1,1.12.76C229.21,155.67,228.64,156.71,228,157.33Z", "fill", "url(#linear-gradient-14)", "transform", "translate(-39.46 -1.67)"], ["d", "M352,128.59a14.52,14.52,0,0,1-3.65,7.2c-2,1.9-5,2.9-7.51,1.91a11,11,0,0,1-4.3-3.7,21.37,21.37,0,0,1-2.89-4.35,13.85,13.85,0,0,1-2.92-2.37,5.3,5.3,0,0,1-1.76-3.87c.12-1.45,1.66-2.8,3-2.24,1.32-1.89,1.55-4.34,2.6-6.4a9.8,9.8,0,0,1,7.68-5.1,12,12,0,0,1,8.87,3A5.46,5.46,0,0,1,353,115.2c.51,1.81.2,4.27,0,6.13A49.34,49.34,0,0,1,352,128.59Z", "fill", "url(#linear-gradient-15)", "transform", "translate(-39.46 -1.67)"], ["d", "M355.16,107.8c-3.29.34-6.26-1.81-9-3.71s-6.05-3.73-9.19-2.67a5.92,5.92,0,0,0-2.28,1.43,5.89,5.89,0,0,1-1.48,1.3,7.81,7.81,0,0,1-1.3.38c-2.61.78-3.59,4-3.81,6.68a33.31,33.31,0,0,0,0,5.19c.15,1.88.62,4,2.25,4.95.89.51,2.09.64,2.64,1.51.23.36.41.89.84.91a.78.78,0,0,0,.56-.25c1.68-1.47.83-4.2,1.24-6.4a1.76,1.76,0,0,1,.27-.7,2.5,2.5,0,0,1,1-.66,5.92,5.92,0,0,0,2.79-3.18,14.79,14.79,0,0,0,6.45,4.16,7.74,7.74,0,0,1,2.33,1,14.23,14.23,0,0,1,1.58,1.71c2.18,2.24,6.19,1.92,8.45-.24a9.18,9.18,0,0,0,2.12-8.7,2.89,2.89,0,0,1-2.82,0c.26.15,2.55-3.4,2-4S356,107.71,355.16,107.8Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M355.16,107.8c-3.29.34-6.26-1.81-9-3.71s-6.05-3.73-9.19-2.67a5.92,5.92,0,0,0-2.28,1.43,5.89,5.89,0,0,1-1.48,1.3,7.81,7.81,0,0,1-1.3.38c-2.61.78-3.59,4-3.81,6.68a33.31,33.31,0,0,0,0,5.19c.15,1.88.62,4,2.25,4.95.89.51,2.09.64,2.64,1.51.23.36.41.89.84.91a.78.78,0,0,0,.56-.25c1.68-1.47.83-4.2,1.24-6.4a1.76,1.76,0,0,1,.27-.7,2.5,2.5,0,0,1,1-.66,5.92,5.92,0,0,0,2.79-3.18,14.79,14.79,0,0,0,6.45,4.16,7.74,7.74,0,0,1,2.33,1,14.23,14.23,0,0,1,1.58,1.71c2.18,2.24,6.19,1.92,8.45-.24a9.18,9.18,0,0,0,2.12-8.7,2.89,2.89,0,0,1-2.82,0c.26.15,2.55-3.4,2-4S356,107.71,355.16,107.8Z", "fill", "url(#linear-gradient-16)", "transform", "translate(-39.46 -1.67)"], ["d", "M329.88,170.55a113.12,113.12,0,0,0,9.61,8.69,3,3,0,0,0,1.06.62,3,3,0,0,0,1.59-.19c1.15-.37,2.29-.75,3.43-1.14A65.93,65.93,0,0,0,355,174.8c3-1.57,5.51-6.65,8.37-6.59.06.58-.42,1.37-.36,1.95a.84.84,0,0,0,.18.52.77.77,0,0,0,.39.17c2,.41,3.93-.82,5.82-1.62a1.68,1.68,0,0,1,.95-.19c.8.15,1,1.3.58,2a11.18,11.18,0,0,1-1.7,1.74c-1.48,1.6-1.42,4.08-2.45,6a5.8,5.8,0,0,1-4.34,3,13,13,0,0,0-1.54.18,6.82,6.82,0,0,0-2.29,1.31,66.44,66.44,0,0,1-12.3,6.68,25.26,25.26,0,0,1-5.37,2,38.79,38.79,0,0,0-4.3.81c-1.28.42-2.5,1.18-3.85,1.1-1.93-.13-3.27-1.92-4.34-3.54-2-3.08-4.62-6.65-5.27-10.37-.31-1.76,1.32-3,2.4-4.24Z", "fill", "url(#linear-gradient-17)", "transform", "translate(-39.46 -1.67)"], ["d", "M346.08,321.55a2,2,0,0,0,.3,1.13,1.62,1.62,0,0,0,.67.45,9,9,0,0,0,3.06.51q10.25.48,20.5.16a16,16,0,0,0-9.34-5.27c-1.69-.29-3.43-.31-5.1-.73a1,1,0,0,1-.43-.2,1,1,0,0,1-.19-.52l-.42-2.68A.63.63,0,0,0,355,314a.65.65,0,0,0-.47-.13l-4.69-.08c-.92,0-2.22-.24-3,.34s-.72,1.9-.76,2.82Q346,319.27,346.08,321.55Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M317.43,298.65a2.08,2.08,0,0,0-.7,1,2,2,0,0,0,.18,1.14c1.77,4.66,5.27,8.41,8.7,12,2.76,2.92,5.58,5.89,9.11,7.81,1.68-4.94-.09-10.58-3.42-14.6a2.6,2.6,0,0,1-.78-1.55,6.15,6.15,0,0,1,.56-1.55,3.58,3.58,0,0,0-1-3,22.72,22.72,0,0,0-5.82-5.75c-1.64-1-2-.23-3.28,1Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M186.62,169.87a8,8,0,0,0-3.34,2.42,8.38,8.38,0,0,0-1.15,3.61c-1.95,13.2-.91,26.63.13,39.93l1.46,18.6c.27,3.52.6,7.2,2.51,10.17a14.46,14.46,0,0,0,5.42,4.69c7.21,3.84,15.86,3.24,24,2.55a15.78,15.78,0,0,0,5.25-1.05,11.45,11.45,0,0,0,5.36-6c1.94-4.29,2.27-9.12,2.38-13.84.29-12.55-.85-25.13-.07-37.67.44-7,1.29-14.69-2.84-20.34a17.86,17.86,0,0,0-10.57-6.39C206.1,164.52,195,166,186.62,169.87Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M179.81,229.27a32.43,32.43,0,0,0,.77,7.8,21.62,21.62,0,0,0,2.07,5.7A19.93,19.93,0,0,0,192.2,251a38.85,38.85,0,0,0,12.47,2.8,35.79,35.79,0,0,0,13.21-1,17.83,17.83,0,0,0,10.44-7.75c2.59-4.48,2.52-10,2.26-15.13-.29-5.54-.75-11.19-2.9-16.31a4.09,4.09,0,0,0-1-1.56,3,3,0,0,0-3.67.16,9,9,0,0,0-2.31,3.2L214,228.55a6.24,6.24,0,0,1-1.45,2.08c-1.36,1.12-3.4.88-5,.22a18.15,18.15,0,0,1-7.17-5.82c-1.93-2.44-3.52-5.13-5.37-7.63a11.84,11.84,0,0,0-2.5-2.64,11.16,11.16,0,0,0-6.05-1.65c-2.19-.09-2.7.24-3.55,2.3A39.18,39.18,0,0,0,179.81,229.27Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M179.81,229.27a32.43,32.43,0,0,0,.77,7.8,21.62,21.62,0,0,0,2.07,5.7A19.93,19.93,0,0,0,192.2,251a38.85,38.85,0,0,0,12.47,2.8,35.79,35.79,0,0,0,13.21-1,17.83,17.83,0,0,0,10.44-7.75c2.59-4.48,2.52-10,2.26-15.13-.29-5.54-.75-11.19-2.9-16.31a4.09,4.09,0,0,0-1-1.56,3,3,0,0,0-3.67.16,9,9,0,0,0-2.31,3.2L214,228.55a6.24,6.24,0,0,1-1.45,2.08c-1.36,1.12-3.4.88-5,.22a18.15,18.15,0,0,1-7.17-5.82c-1.93-2.44-3.52-5.13-5.37-7.63a11.84,11.84,0,0,0-2.5-2.64,11.16,11.16,0,0,0-6.05-1.65c-2.19-.09-2.7.24-3.55,2.3A39.18,39.18,0,0,0,179.81,229.27Z", "fill", "url(#linear-gradient-18)", "transform", "translate(-39.46 -1.67)"], ["d", "M183.75,171.82c-1.64.74-2.65,2.4-3.46,4a45.17,45.17,0,0,0-4.75,19.72c0,1.54.12,3.25,1.22,4.33,1.47,1.45,3.87,1.1,5.85.54,2.81-.79,5.92-2.21,6.65-5,.87-3.35-2.27-7.89-3.21-11.08C185.69,183.13,182.71,172.29,183.75,171.82Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M200.41,167.69a6.2,6.2,0,0,0,.55,2.14,4.21,4.21,0,0,0,2.51,1.95,2.29,2.29,0,0,0,.86.11,2.1,2.1,0,0,0,.69-.2,4.71,4.71,0,0,0,1.77-1.42,7.48,7.48,0,0,0,1.24-3.48,36.4,36.4,0,0,0,.24-6.35,1.86,1.86,0,0,0-.55-1.54,1.9,1.9,0,0,0-.78-.22,28.53,28.53,0,0,0-3.06-.17,13.47,13.47,0,0,0-3.11.15c-.48.11-.42.31-.47.79s-.08,1-.11,1.53c-.06,1.06-.07,2.12,0,3.17S200.27,166.52,200.41,167.69Z", "fill", "url(#linear-gradient-19)", "transform", "translate(-39.46 -1.67)"], ["d", "M200.34,167.38a3,3,0,0,1,.47-1.18,1.82,1.82,0,0,1,1.28-.56,27.58,27.58,0,0,1,7.7,0,2.26,2.26,0,0,1,1.74.88,3.94,3.94,0,0,1,.39,2.1,76.85,76.85,0,0,1-.76,11.76c-.29,1.84-.78,3.88-2.09,4.75s-2.58.35-3.85-.08l-3.43-1.19a3.67,3.67,0,0,1-1-.44c-1.55-1.14-1.71-4.49-1.67-6.51A44.91,44.91,0,0,1,200.34,167.38Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M200.34,167.38a3,3,0,0,1,.47-1.18,1.82,1.82,0,0,1,1.28-.56,27.58,27.58,0,0,1,7.7,0,2.26,2.26,0,0,1,1.74.88,3.94,3.94,0,0,1,.39,2.1,76.85,76.85,0,0,1-.76,11.76c-.29,1.84-.78,3.88-2.09,4.75s-2.58.35-3.85-.08l-3.43-1.19a3.67,3.67,0,0,1-1-.44c-1.55-1.14-1.71-4.49-1.67-6.51A44.91,44.91,0,0,1,200.34,167.38Z", "fill", "url(#linear-gradient-20)", "transform", "translate(-39.46 -1.67)"], ["d", "M201.24,168.65a2.87,2.87,0,0,1,.47-1.18,1.85,1.85,0,0,1,1.27-.56,27.66,27.66,0,0,1,7.71,0,2.31,2.31,0,0,1,1.74.88,4,4,0,0,1,.39,2.1,76.85,76.85,0,0,1-.77,11.76c-.28,1.85-.78,3.88-2.09,4.75-1.16.78-2.58.36-3.85-.08l-3.42-1.19a3.53,3.53,0,0,1-1-.44c-1.55-1.14-1.71-4.49-1.67-6.51A44.28,44.28,0,0,1,201.24,168.65Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M193.43,152.55a17.4,17.4,0,0,0,2.78,3.57c1.46,1.56,3,3.16,5.09,3.72a10.32,10.32,0,0,0,5.87-.57,15.06,15.06,0,0,0,2.43-1,15.7,15.7,0,0,0,4.9-4.77,10.47,10.47,0,0,0,1.36-2.24,9.71,9.71,0,0,0,.63-2.94,28.6,28.6,0,0,0,0-4.44,9.07,9.07,0,0,0-1.71-5.31,7.66,7.66,0,0,0-2.61-1.92c-3.95-1.91-8.55-1.77-12.92-1.33-2,.21-4.12.54-5.55,1.94-1.87,1.83-1.85,4.07-1.64,6.43C192.38,146.79,191.89,149.68,193.43,152.55Z", "fill", "url(#linear-gradient-21)", "transform", "translate(-39.46 -1.67)"], ["d", "M222.24,146.51c-1.53,0-3.13-.11-3.34.2a1.78,1.78,0,0,1-2.31.25c0-.78,0-1.56,0-2.35A1.7,1.7,0,0,1,214.4,143a9.46,9.46,0,0,1-5.38.81,20.55,20.55,0,0,1-4.75-.75,13.43,13.43,0,0,1-8.47-9.4c-.11,1.8-1.82,3.37-2.49,5a18.8,18.8,0,0,0-.71,3.2,7.17,7.17,0,0,1-1.2,2.89,4.1,4.1,0,0,1-2.58,1.68,4.34,4.34,0,0,0-2.5-1.83,15.89,15.89,0,0,1-.53-5,16.27,16.27,0,0,1,4.49-10.15c2-2,4.68-3.64,7.51-3.36,1.05-1.46,3.17-1.88,4.93-2.27a17.56,17.56,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.53,19.53,0,0,1,2.18,8.59A52.45,52.45,0,0,0,222.24,146.51Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M222.24,146.51c-1.53,0-3.13-.11-3.34.2a1.78,1.78,0,0,1-2.31.25c0-.78,0-1.56,0-2.35A1.7,1.7,0,0,1,214.4,143a9.46,9.46,0,0,1-5.38.81,20.55,20.55,0,0,1-4.75-.75,13.43,13.43,0,0,1-8.47-9.4c-.11,1.8-1.82,3.37-2.49,5a18.8,18.8,0,0,0-.71,3.2,7.17,7.17,0,0,1-1.2,2.89,4.1,4.1,0,0,1-2.58,1.68,4.34,4.34,0,0,0-2.5-1.83,15.89,15.89,0,0,1-.53-5,16.27,16.27,0,0,1,4.49-10.15c2-2,4.68-3.64,7.51-3.36,1.05-1.46,3.17-1.88,4.93-2.27a17.56,17.56,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.53,19.53,0,0,1,2.18,8.59A52.45,52.45,0,0,0,222.24,146.51Z", "fill", "url(#linear-gradient-22)", "transform", "translate(-39.46 -1.67)"], ["d", "M218.14,151a2.89,2.89,0,0,0,1.61-1.12,3,3,0,0,0,.41-1.67,2.61,2.61,0,0,0-.9-2.12,1.72,1.72,0,0,0-2.67,1,3.8,3.8,0,0,0-.06,1.12,11.92,11.92,0,0,1-.3,2.6c-.11.56,0,.51.57.46A5.62,5.62,0,0,0,218.14,151Z", "fill", "url(#linear-gradient-23)", "transform", "translate(-39.46 -1.67)"], ["d", "M189.8,150.2a4.24,4.24,0,0,1-1.12-2.86,3.23,3.23,0,0,1,.3-1.56,2.44,2.44,0,0,1,.86-1,1.78,1.78,0,0,1,2.3.19,2.12,2.12,0,0,1,.34.69,10.1,10.1,0,0,1,.36,2.32c.06.73.12,1.46.17,2.18.05.57.27,1-.29,1.13C191.59,151.59,190.66,150.63,189.8,150.2Z", "fill", "url(#linear-gradient-24)", "transform", "translate(-39.46 -1.67)"], ["d", "M230.66,193.24a13.27,13.27,0,0,1,3,4,6.51,6.51,0,0,1,.31,4.84,4.35,4.35,0,0,1-3.69,2.91A6.29,6.29,0,0,1,227,204a25.29,25.29,0,0,1-6.6-4.88,1.84,1.84,0,0,1-.59-1,1.91,1.91,0,0,1,.57-1.35c1.47-1.88,3.06-5,5-6.36,1.14-.85,1.11-.64,2.41.33A26.32,26.32,0,0,1,230.66,193.24Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M206.81,184.08a6.69,6.69,0,0,1-1.33-1.43c-1.17-1.87-.36-4.45-1.36-6.43-.37-.73-1-1.48-.79-2.27.27-1,1.69-1.19,2.74-1a13.14,13.14,0,0,1,4.75,1.88,5.41,5.41,0,0,0,1.81-2.51c1.25,1.34.63,3.5,1,5.3s2,3.31,3.42,4.59l10.46,9.16a3.15,3.15,0,0,1,.35,5.43c-1.14,1.35-2.38,3.2-4.12,2.37-2-.93-4-3.56-5.65-5Z", "fill", "url(#linear-gradient-25)", "transform", "translate(-39.46 -1.67)"], ["d", "M181.21,214.19l21.25,40.75,8.11-2.57s-10.53-52-16.44-54.88c-1.45-.7-4.87.44-8.6,2.49A10.63,10.63,0,0,0,181.21,214.19Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M181.21,214.19l21.25,40.75,8.11-2.57s-10.53-52-16.44-54.88c-1.45-.7-4.87.44-8.6,2.49A10.63,10.63,0,0,0,181.21,214.19Z", "fill", "url(#linear-gradient-26)", "transform", "translate(-39.46 -1.67)"], ["d", "M219.85,198.19s-5.22.42-6,3.75-14.26,52.58-14.26,52.58l10,2.5s19.15-41.63,20-47.46S219.85,198.19,219.85,198.19Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M191.78,279.55a6.16,6.16,0,0,0,1.61,4.33,5,5,0,0,0,5.43.74,7.56,7.56,0,0,0,3.75-4.27,16.11,16.11,0,0,0,.85-5.73,3.87,3.87,0,0,0-.3-1.79,3.48,3.48,0,0,0-1.42-1.29c-1.87-1.08-5.71-2.46-7.37-.78C192.49,272.62,191.7,277.06,191.78,279.55Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M208.72,282.62a7.55,7.55,0,0,0,6.64,3.88,4.23,4.23,0,0,0,2.73-1.09,5.36,5.36,0,0,0,1.15-4.31,10.62,10.62,0,0,0-.67-3.15,16.51,16.51,0,0,0-3.69-5.09.51.51,0,0,0-.31-.21.59.59,0,0,0-.34.14,16.16,16.16,0,0,1-3.37,2.09c-2.09.82-3.61-.66-3.59,2.18A11.15,11.15,0,0,0,208.72,282.62Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M191.78,279.55a6.16,6.16,0,0,0,1.61,4.33,5,5,0,0,0,5.43.74,7.56,7.56,0,0,0,3.75-4.27,16.11,16.11,0,0,0,.85-5.73,3.87,3.87,0,0,0-.3-1.79,3.48,3.48,0,0,0-1.42-1.29c-1.87-1.08-5.71-2.46-7.37-.78C192.49,272.62,191.7,277.06,191.78,279.55Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M208.72,282.62a7.55,7.55,0,0,0,6.64,3.88,4.23,4.23,0,0,0,2.73-1.09,5.36,5.36,0,0,0,1.15-4.31,10.62,10.62,0,0,0-.67-3.15,16.51,16.51,0,0,0-3.69-5.09.51.51,0,0,0-.31-.21.59.59,0,0,0-.34.14,16.16,16.16,0,0,1-3.37,2.09c-2.09.82-3.61-.66-3.59,2.18A11.15,11.15,0,0,0,208.72,282.62Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M302,265.4c-13.78,24.63-33.71,40.35-49.53,51.31a3.73,3.73,0,0,1-2.13.67,3.58,3.58,0,0,1-1.25-.22,3.74,3.74,0,0,1-.88-6.61c15.15-10.49,34.23-25.53,47.25-48.8,14.78-26.42,19.36-59.48,13.61-98.26-5.31-35.84-25.64-61.73-60.43-76.94A155,155,0,0,0,197,74.28a3.75,3.75,0,0,1,.19-7.5,160.31,160.31,0,0,1,54.27,12.8c36.92,16.07,59.41,44.71,65.07,82.81C322.47,202.85,317.59,237.52,302,265.4Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M298.4,266c-13.71,24.5-33.53,40.2-49.32,51.15a3.74,3.74,0,0,1-.88-6.61c15.15-10.49,34.23-25.53,47.25-48.8,14.78-26.42,19.36-59.48,13.61-98.26-5.31-35.84-25.64-61.73-60.43-76.94A155,155,0,0,0,197,74.28a3.75,3.75,0,0,1-2-6.84,161.68,161.68,0,0,1,52.88,12.75c36.92,16,59.42,44.7,65.08,82.81C318.88,203.45,314,238.11,298.4,266Z", "fill", "url(#linear-gradient-27)", "transform", "translate(-39.46 -1.67)"], ["d", "M296.56,351.75l-.05.06a3.74,3.74,0,0,1-2.89,1.36,3.68,3.68,0,0,1-2.39-.86l-41.6-34.39-57.89,22.51a3.74,3.74,0,0,1-2.71-7l62-24.1,45,37.19A3.75,3.75,0,0,1,296.56,351.75Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M296.56,351.75l-.05.06a3.74,3.74,0,0,1-2.89,1.36,3.68,3.68,0,0,1-2.39-.86l-41.6-34.39-57.89,22.51a3.72,3.72,0,0,1-4.29-1.17,3.77,3.77,0,0,1,1.58-1.18L251,314l45,37.2A3.29,3.29,0,0,1,296.56,351.75Z", "fill", "url(#linear-gradient-28)", "transform", "translate(-39.46 -1.67)"], ["d", "M201.81,175.78a1.9,1.9,0,0,1-1.76-1.14c-.12-.34-.09-.72-.22-1.07s-.49-.66-.83-.51a.72.72,0,0,0-.31.29c-.76,1.11-.51,2.6-.82,3.92a8.06,8.06,0,0,1-1.33,2.65,37.29,37.29,0,0,1-11.32,10.18,9.63,9.63,0,0,0-3.19,2.55,5.53,5.53,0,0,0-.26,5.31,2.47,2.47,0,0,0,2.65,1.59,12.64,12.64,0,0,0,6.64-2.27,32.93,32.93,0,0,0,9.4-8.78,14.5,14.5,0,0,1,1.68-2.12,12.85,12.85,0,0,0,2.41-2.3,5.58,5.58,0,0,0,.13-4.31,14.1,14.1,0,0,1-.71-3.34c0-.46.14-1-.43-1S202.4,175.81,201.81,175.78Z", "fill", "url(#linear-gradient-29)", "transform", "translate(-39.46 -1.67)"], ["d", "M331.86,123a.78.78,0,0,0-1,0,1.16,1.16,0,0,0-.34,1,2.31,2.31,0,0,0,.41,1c.28.42.91,1.36,1.47,1.42s.78-.28.63-.76-.7-.67-.85-1.14S332.27,123.35,331.86,123Z", "fill", "url(#linear-gradient-30)", "transform", "translate(-39.46 -1.67)"], ["d", "M360.4,159.3v0a1.5,1.5,0,0,1-.42.59c-1.14,1.12-2.28,2.23-3.4,3.35.07.82-3.36-8.38-4-13.67,1,.23,2.4,3.26,3.12,4.11,1.07,1.26,2.24,2.43,3.39,3.61,0,0,0,0,0,0l.39.39a6.05,6.05,0,0,1,.52.6l0,0a1.82,1.82,0,0,1,.33.83S360.4,159.26,360.4,159.3Z", "fill", "url(#linear-gradient-31)", "transform", "translate(-39.46 -1.67)"], ["d", "M319.25,181.43a1.7,1.7,0,0,1-.22,0A.18.18,0,0,1,319.25,181.43Z", "fill", "none", "transform", "translate(-39.46 -1.67)"], ["d", "M329.06,141a2.8,2.8,0,0,1-.9,1.73c-2.3,2.37-5.45,3.09-7.3,6.15a20.61,20.61,0,0,0-2,5.31,56,56,0,0,0-2,9.49,18.44,18.44,0,0,0,1.37,9.5c.92,2,2.31,3.78,2.47,5.92a2.37,2.37,0,0,1-.2,1.27,2.76,2.76,0,0,1-1.18,1l-.45.2-.71.11A92.76,92.76,0,0,1,314.37,161c-.27-4.16-.22-8.56,1.85-12.18a16.62,16.62,0,0,1,7.52-6.4A18.88,18.88,0,0,1,329.06,141Z", "fill", "url(#linear-gradient-32)", "transform", "translate(-39.46 -1.67)"], ["d", "M329.57,157.21l3.82,7.54a22.06,22.06,0,0,1,1.65,3.88c.71,2.53.5,5.28,1.47,7.71-.47-1.17-3.75-2.61-4.69-3.63-2.16-2.34-.2-1.66.12-4.06.19-1.4-1.41-3.73-1.78-5.17A19.78,19.78,0,0,1,329.57,157.21Z", "fill", "url(#linear-gradient-33)", "transform", "translate(-39.46 -1.67)"], ["fill", "#fff", "height", "29.86", "rx", "5.46", "width", "65.33", "x", "305.12", "y", "59.33"], ["fill", "#fff", "points", "305.39 68.9 305.39 100.05 312.81 72.88 305.39 68.9"], ["fill", "#fff", "height", "29.86", "rx", "5.46", "transform", "translate(268.39 198.87) rotate(-180)", "width", "65.33", "x", "121.26", "y", "85.34"], ["fill", "#fff", "points", "146.86 93.24 146.86 124.38 139.44 97.22 146.86 93.24"], ["fill", "#5c77ff", "font-family", "Arial-Black, Arial Black", "font-size", "12.75", "font-weight", "800", "transform", "translate(331.85 76.41)"], ["fill", "#5c77ff", "font-family", "Arial-Black, Arial Black", "font-size", "12.75", "font-weight", "800", "transform", "translate(103.69 99.89)"], ["rxTranslate", "global.chats.start_conversation", 1, "display-1"]],
      template: function ChatEmptyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatEmptyComponent_Template_button_click_0_listener() {
            return ctx.openDrawer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 3)(4, "defs")(5, "linearGradient", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "stop", 5)(7, "stop", 6)(8, "stop", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "linearGradient", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "stop", 9)(11, "stop", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "linearGradient", 11)(13, "linearGradient", 12)(14, "linearGradient", 13)(15, "linearGradient", 14)(16, "linearGradient", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "linearGradient", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "stop", 17)(19, "stop", 18)(20, "stop", 19)(21, "stop", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "linearGradient", 21)(23, "linearGradient", 22)(24, "linearGradient", 23)(25, "linearGradient", 24)(26, "linearGradient", 25)(27, "linearGradient", 26)(28, "linearGradient", 27)(29, "linearGradient", 28)(30, "linearGradient", 29)(31, "linearGradient", 30)(32, "linearGradient", 31)(33, "linearGradient", 32)(34, "linearGradient", 33)(35, "linearGradient", 34)(36, "linearGradient", 35)(37, "linearGradient", 36)(38, "linearGradient", 37)(39, "linearGradient", 38)(40, "linearGradient", 39)(41, "linearGradient", 40)(42, "linearGradient", 41)(43, "linearGradient", 42)(44, "linearGradient", 43)(45, "linearGradient", 44)(46, "linearGradient", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "path", 46)(48, "path", 47)(49, "path", 48)(50, "path", 49)(51, "path", 50)(52, "path", 51)(53, "path", 52)(54, "path", 53)(55, "path", 54)(56, "path", 55)(57, "path", 56)(58, "path", 57)(59, "path", 58)(60, "path", 59)(61, "ellipse", 60)(62, "ellipse", 61)(63, "path", 62)(64, "path", 63)(65, "path", 64)(66, "path", 65)(67, "path", 66)(68, "path", 67)(69, "path", 68)(70, "path", 69)(71, "path", 70)(72, "path", 71)(73, "path", 72)(74, "path", 73)(75, "path", 74)(76, "path", 75)(77, "path", 76)(78, "path", 77)(79, "path", 78)(80, "path", 79)(81, "path", 80)(82, "path", 81)(83, "path", 82)(84, "path", 83)(85, "path", 84)(86, "path", 85)(87, "path", 86)(88, "path", 87)(89, "path", 88)(90, "path", 89)(91, "path", 90)(92, "path", 91)(93, "path", 92)(94, "path", 93)(95, "path", 94)(96, "path", 94)(97, "path", 95)(98, "path", 96)(99, "path", 97)(100, "path", 98)(101, "path", 99)(102, "path", 100)(103, "path", 101)(104, "path", 102)(105, "path", 103)(106, "path", 104)(107, "path", 105)(108, "path", 106)(109, "path", 107)(110, "path", 108)(111, "rect", 109)(112, "polygon", 110)(113, "rect", 111)(114, "polygon", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "text", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, " . . . ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "text", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " . . . ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "h2", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "Start a conversation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scaleFadeIn", undefined);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["default"]],
      encapsulation: 2,
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_0__.scaleFadeIn400ms]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 15965:
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatComponent: () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/track-by */ 82087);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ 17049);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _apps_chat_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apps/chat/add-contact-modal/add-contact-modal.component */ 42043);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 24716);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat.service */ 47425);
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/language.service */ 48756);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 49524);










































function ChatComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "vex-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ChatComponent_div_33_ng_container_1_ng_container_1_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 41);
  }
}
function ChatComponent_div_33_ng_container_1_ng_container_1_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", chat_r8.unreadCount > 99 ? "99+" : chat_r8.unreadCount, " ");
  }
}
const _c0 = a0 => ({
  "text-primary-600 bg-primary-50 dark:text-primary-200 dark:bg-primary-700/20": a0
});
const _c1 = a1 => ["./", a1];
function ChatComponent_div_33_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ChatComponent_div_33_ng_container_1_ng_container_1_ng_container_1_div_3_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ChatComponent_div_33_ng_container_1_ng_container_1_ng_container_1_div_6_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 36)(8, "div", 37)(9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const chat_r8 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](8, _c0, _r9.isActive))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](10, _c1, chat_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _r9.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", chat_r8.imageUrl || "assets/img/avatars/noavatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", chat_r8.unreadCount && chat_r8.unreadCount > 0 && !_r9.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](chat_r8.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r6.languageService.formatDateByLang(chat_r8.timestamp), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", chat_r8.lastMessage, " ");
  }
}
function ChatComponent_div_33_ng_container_1_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ChatComponent_div_33_ng_container_1_ng_container_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.loadMoreChats());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ChatComponent_div_33_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChatComponent_div_33_ng_container_1_ng_container_1_ng_container_1_Template, 15, 12, "ng-container", 28)(2, ChatComponent_div_33_ng_container_1_ng_container_1_a_2_Template, 4, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r5.displayedChats)("ngForTrackBy", ctx_r5.trackByIdChat);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.hasMoreChats);
  }
}
function ChatComponent_div_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChatComponent_div_33_ng_container_1_ng_container_1_Template, 3, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.displayedChats.length > 0);
  }
}
function ChatComponent_div_33_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h2", 47)(4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Aucun resultat disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function ChatComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ChatComponent_div_33_ng_container_1_Template, 2, 1, "ng-container", 25)(2, ChatComponent_div_33_ng_container_2_Template, 6, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, ctx_r2.displayedChats$)) == null ? null : tmp_1_0.length) === 0 && !ctx_r2.isLoading());
  }
}
class ChatComponent {
  constructor(cd, router, layoutService, chatService, route, dialog, languageService, websocketService) {
    this.cd = cd;
    this.router = router;
    this.layoutService = layoutService;
    this.chatService = chatService;
    this.route = route;
    this.dialog = dialog;
    this.languageService = languageService;
    this.websocketService = websocketService;
    this.mobileQuery$ = this.layoutService.ltMd$;
    this.drawerOpen$ = this.chatService.drawerOpen$;
    this.allUsers = [];
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.signal)(false);
    this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.pageSize;
    this.displayedChats$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    this.displayedChats = []; // Propriété directe comme alternative
    this.totalChatsCount = 0;
    this.allFilteredChats = [];
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl();
    this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_1__.trackById;
  }
  ngOnInit() {
    this.searchChats();
    this.chatService.loadInitialChats();
    // Logique pour gérer l'ouverture/fermeture du drawer en fonction de la taille de l'écran
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_16__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(null),
    // Déclenche immédiatement avec la valeur actuelle
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => this.mobileQuery$), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe(isMobile => {
      if (isMobile) {
        this.closeDrawer();
      } else {
        this.openDrawer();
      }
    });
    // Logique pour marquer un chat comme lu lors de la navigation
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_16__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(null), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => {
      const urlSegments = this.router.url.split('/');
      const chatIdIndex = urlSegments.indexOf('chat') + 1;
      if (chatIdIndex > 0 && chatIdIndex < urlSegments.length) {
        const currentChatId = urlSegments[chatIdIndex];
        if (currentChatId && currentChatId !== 'empty') {
          // Utiliser la nouvelle méthode getter
          const chat = this.chatService.currentChatsValue.find(c => c.id === currentChatId);
          if (chat && chat.unreadCount > 0) {
            this.chatService.markMessagesAsRead(currentChatId);
            this.markAsReadchat(chat);
          }
        }
      }
    });
    // ChatComponent.ts - ngOnInit
    this.route.data.subscribe(routeData => {
      const resolvedObject = routeData['usersData']; // Exemple de clé
      if (resolvedObject && resolvedObject.data && Array.isArray(resolvedObject.data)) {
        this.allUsers = resolvedObject.data; // <<<< ACCÉDER À resolvedObject.data
      } else {
        console.warn('ChatComponent: Users data not found or not an array in resolved route data object.', resolvedObject);
        this.allUsers = []; // Assurer que allUsers est toujours un tableau
      }
    });
  }
  searchChats() {
    this.isLoading.set(true);
    // Créer un observable combiné qui écoute les changements de recherche ET les chats du service
    const searchChats$ = this.searchCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(() => {
      this.isLoading.set(true);
      this.limit = 5; // Reset limit on new search
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(searchTerm => {
      if (!searchTerm || searchTerm.trim() === '') {
        // Si pas de recherche, utiliser directement les chats du service
        return this.chatService.chats$;
      } else {
        // Si recherche, utiliser l'API de recherche
        return this.chatService.getChats(searchTerm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(error => {
          this.isLoading.set(false);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(() => this.isLoading.set(false)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_19__.takeUntilDestroyed)(this.destroyRef));
    this.chats$ = searchChats$;
    this.chats$.subscribe(chats => {
      this.allFilteredChats = chats;
      this.totalChatsCount = chats.length;
      this.updateDisplayedChats(chats);
      // Forcer la détection de changements car le composant utilise OnPush
      this.cd.markForCheck();
    });
  }
  markAsReadchat(chat) {
    this.chatService.markAsReadChat(chat).subscribe({
      next: response => {
        let notifications = [];
        this.websocketService.unreadCountNotificationSubject.next(response.unreadnotificationcount);
        notifications = response.recent_unread_list;
        this.websocketService.addNotificationToList(notifications);
      },
      error: err => {
        console.error('Erreur lors du marquage comme lue', err);
      }
    });
  }
  openAddContactModal() {
    // ... (ouverture de la modale) ...
    const dialogRef = this.dialog.open(_apps_chat_add_contact_modal_add_contact_modal_component__WEBPACK_IMPORTED_MODULE_3__.AddContactModalComponent, {
      width: '650px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(selectedUserId => {
      if (selectedUserId) {
        // selectedUserId ne doit pas être undefined, null, ou une chaîne vide
        this.chatService.findOrCreateConversationWithUser(selectedUserId).subscribe({
          next: newOrExistingChat => {
            if (newOrExistingChat && newOrExistingChat.id) {
              this.router.navigate(['/index/chat', newOrExistingChat.id]); // Adaptez le chemin
              this.closeDrawer();
              // Le chat est déjà ajouté à la liste dans ChatService.findOrCreateConversationWithUser
            } else {
              console.error('ChatComponent: Received invalid chat object from service.', newOrExistingChat);
            }
          },
          error: err => {
            console.error('ChatComponent: Error starting chat:', err);
          }
        });
      } else if (typeof selectedUserId !== 'undefined') {
        // Si c'est défini mais "falsy" (ex: 0 si ID est number)
        console.warn('ChatComponent: dialogRef.afterClosed() received a "falsy" but defined value:', selectedUserId);
      } else {
        console.log('ChatComponent: Dialog closed without selecting a user (received undefined).');
      }
    });
    // ... (reste de la méthode)
  }
  trackByIdChat(index, chat) {
    return chat.id;
  }
  drawerChange(drawerOpen) {
    this.chatService.setDrawerOpen(drawerOpen);
  }
  openDrawer() {
    this.chatService.setDrawerOpen(true);
    this.cd.markForCheck();
  }
  closeDrawer() {
    this.chatService.setDrawerOpen(false);
    this.cd.markForCheck();
  }
  updateDisplayedChats(allChats) {
    const displayedChats = allChats.slice(0, this.limit);
    // Mettre à jour les deux : l'observable ET la propriété directe
    this.displayedChats$.next(displayedChats);
    this.displayedChats = displayedChats;
    // Forcer la détection de changements après mise à jour des chats affichés
    this.cd.markForCheck();
  }
  loadMoreChats() {
    this.limit += 5;
    this.updateDisplayedChats(this.allFilteredChats);
  }
  get hasMoreChats() {
    return this.limit < this.totalChatsCount;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_7__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_8__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_10__.WebsocketService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["vex-chat"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 13,
      consts: [[1, "overflow-hidden", "h-full", "w-full"], ["position", "start", 1, "drawer", 3, "mode", "opened", "openedChange"], [1, "h-full", "flex", "flex-col"], [1, "flex-none", "py-4", "bg-gray-50", "dark:bg-gray-900", "space-y-4", "border-b"], [1, "flex", "items-center", "mx-4"], ["rxTranslate", "global.chats.title", 1, "flex-1", "text-3xl", "font-semibold"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "mat:add_circle"], ["rxTranslate", "global.chats.submit"], ["xPosition", "after", "yPosition", "below"], ["newChatMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["matMenuItemIcon", "", "svgIcon", "mat:add_circle"], ["rxTranslate", "global.chats.add_contact"], [1, "flex", "px-4"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "vex-mat-dense-xs", "flex-1", "bg-foreground"], ["matIconPrefix", "", "svgIcon", "mat:search", 1, "icon-sm"], ["matInput", "", "type", "text", 3, "formControl", "placeholder"], ["data-simplebar", "", 1, "flex-1", "min-h-0"], [1, "pt-2"], [1, "flex", "items-center", "px-4", "pb-2", "gap-2"], ["matRipple", "", "type", "button", 1, "text-primary-600", "bg-primary-100", "dark:text-primary-200", "dark:bg-primary-700/20", "font-semibold", "text-sm", "px-4", "py-2", "rounded-lg", "hover:bg-primary-200", "hover:dark:bg-primary-700/30", "transition", "flex-1", "text-center", "relative"], ["rxTranslate", "global.chats.all_conversation"], [1, "space-y-1"], ["class", "flex justify-center items-center h-64", 4, "ngIf"], [4, "ngIf"], [1, "relative"], [1, "flex", "justify-center", "items-center", "h-64"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "inline-block text-gray-600 dark:text-gray-300 font-medium text-xs mx-6 mt-3", "href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["matRipple", "", "routerLinkActive", "", 1, "relative", "text-sm", "mx-2", "px-3", "py-2", "rounded", "hover:bg-primary-100", "hover:dark:bg-primary-700/10", "flex", "items-center", "gap-3", "transition", "ease-out", 3, "ngClass", "routerLink"], ["rla", "routerLinkActive"], ["class", "w-1 bg-primary-600 absolute left-0 top-0 bottom-0 rounded-full my-1", 4, "ngIf"], [1, "relative", "flex-none"], [1, "h-10", "w-10", "rounded-full", "select-none", 3, "src"], ["class", "absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1.5 text-xs font-bold bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center leading-none shadow-md", 4, "ngIf"], [1, "flex-1", "select-none", "truncate"], [1, "truncate", "flex", "mb-0.5"], [1, "font-medium", "flex-1"], [1, "flex-none", "text-xs", "text-gray-500"], [1, "text-xs", "text-gray-500", "truncate"], [1, "w-1", "bg-primary-600", "absolute", "left-0", "top-0", "bottom-0", "rounded-full", "my-1"], [1, "absolute", "-top-1.5", "-right-1.5", "min-w-[20px]", "h-[20px]", "px-1.5", "text-xs", "font-bold", "bg-green-500", "hover:bg-green-600", "text-white", "rounded-full", "flex", "items-center", "justify-center", "leading-none", "shadow-md"], ["href", "javascript:void(0);", 1, "inline-block", "text-gray-600", "dark:text-gray-300", "font-medium", "text-xs", "mx-6", "mt-3", 3, "click"], ["svgIcon", "mat:expand_more", 1, "icon-xs", "align-middle", "select-none"], [1, "flex-auto", "flex", "flex-col", "items-center", "justify-center", "p-gutter"], ["src", "../../../../../../assets/img/illustrations/idea.svg", 1, "m-12", "max-h-36"], [1, "headline", "m-0", "text-center"], ["rxTranslate", "global.chats.no_chat_matching"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("openedChange", function ChatComponent_Template_mat_drawer_openedChange_1_listener($event) {
            return ctx.drawerChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Chats");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "New Chat");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "mat-menu", 9, 10)(15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_15_listener() {
            return ctx.openAddContactModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "mat-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Add Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 14)(21, "mat-form-field", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "mat-icon", 16)(23, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "button", 21)(29, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "All Conversation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, ChatComponent_div_32_Template, 2, 0, "div", 24)(33, ChatComponent_div_33_Template, 4, 4, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "mat-drawer-content", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 7, ctx.mobileQuery$) ? "over" : "side")("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 9, ctx.drawerOpen$));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.searchCtrl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 11, "global.chats.search"));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoading());
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchCtrl.value !== 0);
        }
      },
      dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatDrawerContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgFor, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDivider, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatPrefix, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_11__["default"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent],
      styles: [".drawer[_ngcontent-%COMP%] {\n  max-width: 90%;\n  width: 400px;\n}\n.drawer[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.chat-pattern[_ngcontent-%COMP%] {\n  background-color: var(--vex-background-background);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23eeeeee' fill-opacity='0.2' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLGtEQUFBO0VBQ0Esb3BCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyIHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jaGF0LXBhdHRlcm4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgODAgODAnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCclM0UlM0NwYXRoIGZpbGw9JyUyM2VlZWVlZScgZmlsbC1vcGFjaXR5PScwLjInIGQ9J00xNCAxNkg5di0yaDVWOS44N2E0IDQgMCAxIDEgMiAwVjE0aDV2MmgtNXYxNS45NUExMCAxMCAwIDAgMCAyMy42NiAyN2wtMy40Ni0yIDguMi0yLjItMi45IDVhMTIgMTIgMCAwIDEtMjEgMGwtMi44OS01IDguMiAyLjItMy40NyAyQTEwIDEwIDAgMCAwIDE0IDMxLjk1VjE2em00MCA0MGgtNXYtMmg1di00LjEzYTQgNCAwIDEgMSAyIDBWNTRoNXYyaC01djE1Ljk1QTEwIDEwIDAgMCAwIDYzLjY2IDY3bC0zLjQ3LTIgOC4yLTIuMi0yLjg4IDVhMTIgMTIgMCAwIDEtMjEuMDIgMGwtMi44OC01IDguMiAyLjItMy40NyAyQTEwIDEwIDAgMCAwIDU0IDcxLjk1VjU2em0tMzkgNmEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTQwLTQwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHpNMTUgOGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6bTQwIDQwYTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger80ms]
      },
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 55978:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component */ 15965);
/* harmony import */ var _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-conversation/chat-conversation.component */ 2946);
/* harmony import */ var _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-empty/chat-empty.component */ 98096);
/* harmony import */ var _users_users_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.resolver */ 20280);




const routes = [{
  path: '',
  component: _chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
  resolve: {
    usersData: _users_users_resolver__WEBPACK_IMPORTED_MODULE_3__.usersResolver
  },
  data: {
    scrollDisabled: true,
    toolbarShadowEnabled: false,
    footerVisible: false
  },
  children: [{
    path: '',
    pathMatch: 'full',
    component: _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_2__.ChatEmptyComponent
  }, {
    path: ':chatId',
    component: _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_1__.ChatConversationComponent
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 57920:
/*!**********************************************!*\
  !*** ./src/app/pages/chat/file-size.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSizePipe: () => (/* binding */ FileSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FileSizePipe {
  transform(sizeInBytes) {
    if (sizeInBytes === null || typeof sizeInBytes === 'undefined') {
      return '';
    }
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let size = sizeInBytes;
    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }
    return `${size.toFixed(1)} ${units[i]}`;
  }
  static {
    this.ɵfac = function FileSizePipe_Factory(t) {
      return new (t || FileSizePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "fileSize",
      type: FileSizePipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 97742:
/*!*************************************************!*\
  !*** ./src/app/services/CustomPaginatorIntl.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPaginatorIntl: () => (/* binding */ CustomPaginatorIntl)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
// Create a new file: custom-paginator-intl.ts



class CustomPaginatorIntl extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl {
  constructor(translate) {
    super();
    this.translate = translate;
    this.getTranslations();
    this.translate.onLangChange.subscribe(() => this.getTranslations());
  }
  getTranslations() {
    this.translate.get(['paginator.items_per_page', 'paginator.next_page', 'paginator.previous_page', 'paginator.first_page', 'paginator.last_page']).subscribe(translations => {
      this.itemsPerPageLabel = translations['paginator.items_per_page'];
      this.nextPageLabel = translations['paginator.next_page'];
      this.previousPageLabel = translations['paginator.previous_page'];
      this.firstPageLabel = translations['paginator.first_page'];
      this.lastPageLabel = translations['paginator.last_page'];
      this.changes.next(); // Important to trigger update
    });
    this.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return this.translate.instant('paginator.range', {
          start: 0,
          end: 0,
          length: 0
        });
      }
      const start = page * pageSize + 1;
      const end = Math.min((page + 1) * pageSize, length);
      return this.translate.instant('paginator.range', {
        start,
        end,
        length
      });
    };
  }
  static {
    this.ɵfac = function CustomPaginatorIntl_Factory(t) {
      return new (t || CustomPaginatorIntl)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CustomPaginatorIntl,
      factory: CustomPaginatorIntl.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat_chat_routes_ts.js.map