"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_shared_generic-resource-list_generic-resource-list_component_ts"],{

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

/***/ 76493:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/document/upload-status-indicator/upload-status-indicator.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadStatusIndicatorComponent: () => (/* binding */ UploadStatusIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/upload-status.service */ 37004);












function UploadStatusIndicatorComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "uploadStatus.initializing"));
  }
}
function UploadStatusIndicatorComponent_div_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r1.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "uploadStatus.waiting"));
  }
}
function UploadStatusIndicatorComponent_div_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r1.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", status_r1.progress.toFixed(0), "%");
  }
}
function UploadStatusIndicatorComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UploadStatusIndicatorComponent_div_0_ng_container_1_div_1_Template, 5, 3, "div", 5)(2, UploadStatusIndicatorComponent_div_0_ng_container_1_div_2_Template, 7, 4, "div", 5)(3, UploadStatusIndicatorComponent_div_0_ng_container_1_div_3_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const status_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", status_r1.progress < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", status_r1.progress >= 1 && status_r1.progress < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", status_r1.progress >= 5);
  }
}
function UploadStatusIndicatorComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "uploadStatus.completed"));
  }
}
function UploadStatusIndicatorComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "uploadStatus.failed"));
  }
}
function UploadStatusIndicatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UploadStatusIndicatorComponent_div_0_ng_container_1_Template, 4, 3, "ng-container", 2)(2, UploadStatusIndicatorComponent_div_0_div_2_Template, 6, 3, "div", 3)(3, UploadStatusIndicatorComponent_div_0_div_3_Template, 6, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", status_r1.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", status_r1.status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", status_r1.status === "failed");
  }
}
class UploadStatusIndicatorComponent {
  constructor(uploadStatusService) {
    this.uploadStatusService = uploadStatusService;
  }
  ngOnInit() {
    this.uploadStatus$ = this.uploadStatusService.getUploadStatus(`doc-${this.documentId}`);
    // Debug: Log status changes
    this.subscription = this.uploadStatus$.subscribe(status => {});
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function UploadStatusIndicatorComponent_Factory(t) {
      return new (t || UploadStatusIndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_0__.UploadStatusService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UploadStatusIndicatorComponent,
      selectors: [["app-upload-status-indicator"]],
      inputs: {
        documentId: "documentId"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "flex items-center space-x-2 min-h-[24px]", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "min-h-[24px]"], [4, "ngIf"], ["class", "flex items-center space-x-1 animate-bounce", 4, "ngIf"], ["class", "flex items-center space-x-1", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], ["diameter", "20", "strokeWidth", "3", 1, "text-blue-500"], [1, "text-xs", "text-blue-600", "font-medium", "animate-pulse"], ["diameter", "16", "strokeWidth", "2", 1, "text-orange-500"], [1, "w-16"], ["mode", "determinate", "color", "warn", 1, "h-1", 3, "value"], [1, "text-xs", "text-orange-600", "font-medium", "animate-pulse"], [1, "w-20"], ["mode", "determinate", 1, "h-2", 3, "value"], [1, "text-xs", "text-blue-600", "font-medium", "min-w-[35px]"], [1, "flex", "items-center", "space-x-1", "animate-bounce"], [1, "text-green-500", 2, "font-size", "18px", "width", "18px", "height", "18px"], [1, "text-xs", "text-green-600", "font-medium"], [1, "flex", "items-center", "space-x-1"], [1, "text-red-500", 2, "font-size", "18px", "width", "18px", "height", "18px"], [1, "text-xs", "text-red-600", "font-medium"]],
      template: function UploadStatusIndicatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UploadStatusIndicatorComponent_div_0_Template, 4, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.uploadStatus$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinner, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      encapsulation: 2
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

/***/ }),

/***/ 84788:
/*!***************************************************************************!*\
  !*** ./src/app/shared/dynamic-data-table/dynamic-data-table.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicDataTableComponent: () => (/* binding */ DynamicDataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var src_app_classes_format_document_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/format-document-icon */ 28666);
/* harmony import */ var src_app_pages_document_upload_status_indicator_upload_status_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/document/upload-status-indicator/upload-status-indicator.component */ 76493);
/* harmony import */ var src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload-status.service */ 37004);































function DynamicDataTableComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "vex-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DynamicDataTableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.noDataMessage);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17)(1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_th_1_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r17.masterToggle() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r15.selection.hasValue() && ctx_r15.isAllSelected())("indeterminate", ctx_r15.selection.hasValue() && !ctx_r15.isAllSelected());
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19)(1, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_td_2_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("change", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_td_2_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const row_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r21.selection.toggle(row_r19) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r16.selection.isSelected(row_r19));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_th_1_Template, 2, 2, "th", 15)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_td_2_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, column_r6.label));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", row_r26[column_r6.property], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_td_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_td_2_ng_container_1_Template, 2, 1, "ng-container", 23)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_td_2_ng_template_2_Template, 1, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r26[column_r6.property])("ngIfElse", _r29);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_th_1_Template, 3, 3, "th", 15)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_td_2_Template, 4, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !column_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, column_r6.label), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](column_r6.formatter ? column_r6.formatter(row_r36[column_r6.property], row_r36) : row_r36[column_r6.property]);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_3_th_1_Template, 3, 4, "th", 27)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_3_td_2_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !column_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, column_r6.label), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_4_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](column_r6.formatter ? column_r6.formatter(row_r41[column_r6.property], row_r41) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, row_r41[column_r6.property], "dd/MM/yyyy HH:mm"));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_4_th_1_Template, 3, 4, "th", 27)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_4_td_2_Template, 3, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_5_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !column_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, column_r6.label), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_5_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r46 = ctx.$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", row_r46[column_r6.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", row_r46[column_r6.property]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r46[column_r6.property]);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_5_th_1_Template, 3, 4, "th", 27)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_5_td_2_Template, 5, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !column_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, column_r6.label), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", ctx_r52.getFileIcon(row_r51[column_r6.property][0] == null ? null : row_r51[column_r6.property][0].mime_type))("matTooltip", (row_r51[column_r6.property][0] == null ? null : row_r51[column_r6.property][0].file_name) || (row_r51[column_r6.property][0] == null ? null : row_r51[column_r6.property][0].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((row_r51[column_r6.property][0] == null ? null : row_r51[column_r6.property][0].file_name) || (row_r51[column_r6.property][0] == null ? null : row_r51[column_r6.property][0].name));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_td_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "insert_drive_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_td_2_ng_container_2_Template, 4, 3, "ng-container", 23)(3, DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_td_2_ng_template_3_Template, 4, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r51 = ctx.$implicit;
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r51[column_r6.property] && row_r51[column_r6.property].length > 0)("ngIfElse", _r54);
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_th_1_Template, 3, 4, "th", 27)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_td_2_Template, 5, 2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !column_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, column_r6.label), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-slide-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_ng_container_2_Template_mat_slide_toggle_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.emitAction("toggle-block", row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", row_r61[column_r6.property])("disabled", ctx_r62.isLoading)("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, row_r61[column_r6.property] ? "menu_action.unblock" : "menu_action.block"))("color", row_r61[column_r6.property] ? "default" : "primary");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](row_r61[column_r6.property] ? "text-green-600" : "text-red-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgIcon", row_r61[column_r6.property] ? "mat:check_circle" : "mat:block");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_ng_container_2_Template, 3, 6, "ng-container", 14)(3, DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_ng_container_3_Template, 2, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r59.type === "users" && column_r6.property === "is_blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx_r59.type === "users" && column_r6.property === "is_blocked"));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_th_1_Template, 3, 4, "th", 27)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_td_2_Template, 4, 2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, column_r6.label));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", null, 48)(6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_2_ng_container_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r84);
      const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.emitAction("show", row_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_2_ng_container_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r84);
      const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.emitAction("delete", row_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r81)("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 6, "menu_action.action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r80.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 8, "menu_action.show"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r80.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 10, "menu_action.delete"), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-upload-status-indicator", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_2_ng_container_3_Template, 14, 12, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("documentId", row_r75.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r76.isDocumentUploading(row_r75.id));
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", null, 48)(6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91);
      const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.emitAction("edit", row_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r88)("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "menu_action.action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r77.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, "menu_action.edit"), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", null, 48)(6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r95);
      const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.emitAction("show", row_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_4_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r95);
      const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r96.emitAction("edit", row_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_4_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r95);
      const row_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r98.emitAction("delete", row_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r92)("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 8, "menu_action.action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r78.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 10, "menu_action.show"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r78.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 12, "menu_action.edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r78.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 14, "menu_action.delete"), " ");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_Template_td_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_2_Template, 4, 2, "ng-container", 14)(3, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_3_Template, 10, 8, "ng-container", 14)(4, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_ng_container_4_Template, 18, 16, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r73.type === "documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r73.type === "menus" || ctx_r73.type === "categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r73.type !== "documents" && ctx_r73.type !== "menus" && ctx_r73.type !== "categories");
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_th_1_Template, 3, 3, "th", 39)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_td_2_Template, 5, 3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function DynamicDataTableComponent_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DynamicDataTableComponent_div_2_ng_container_2_ng_container_1_Template, 3, 0, "ng-container", 14)(2, DynamicDataTableComponent_div_2_ng_container_2_ng_container_2_Template, 3, 0, "ng-container", 14)(3, DynamicDataTableComponent_div_2_ng_container_2_ng_container_3_Template, 3, 0, "ng-container", 14)(4, DynamicDataTableComponent_div_2_ng_container_2_ng_container_4_Template, 3, 0, "ng-container", 14)(5, DynamicDataTableComponent_div_2_ng_container_2_ng_container_5_Template, 3, 0, "ng-container", 14)(6, DynamicDataTableComponent_div_2_ng_container_2_ng_container_6_Template, 3, 0, "ng-container", 14)(7, DynamicDataTableComponent_div_2_ng_container_2_ng_container_7_Template, 3, 0, "ng-container", 14)(8, DynamicDataTableComponent_div_2_ng_container_2_ng_container_8_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matColumnDef", column_r6.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "checkbox" && ctx_r3.selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "file" || column_r6.type === "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r6.type === "button");
  }
}
function DynamicDataTableComponent_div_2_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 53);
  }
}
function DynamicDataTableComponent_div_2_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 54);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function DynamicDataTableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DynamicDataTableComponent_div_2_ng_container_2_Template, 9, 9, "ng-container", 9)(3, DynamicDataTableComponent_div_2_tr_3_Template, 1, 0, "tr", 10)(4, DynamicDataTableComponent_div_2_tr_4_Template, 1, 1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-paginator", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function DynamicDataTableComponent_div_2_Template_mat_paginator_page_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r102.pageChange.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.visibleColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r2.visibleColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r2.pagination.total)("pageIndex", ctx_r2.pagination.current_page - 1)("pageSize", ctx_r2.pagination.per_page);
  }
}
class DynamicDataTableComponent {
  // Le setter pour Paginator
  set paginator(paginator) {
    if (paginator) {
      this._paginator = paginator;
    }
  }
  set sort(sort) {
    if (sort) {
      this._sort = sort;
      if (!this.dataSource.sort) {
        this.dataSource.sort = this._sort;
        this._sort.sortChange.subscribe(s => this.sortChange.emit(s));
      }
    }
  }
  constructor(uploadStatusService) {
    this.uploadStatusService = uploadStatusService;
    // --- INPUTS ---
    this.type = '';
    this.data = [];
    this.columns = [];
    this.dynamicFormlyFields = [];
    this.externalFilters = {};
    this.isLoading = false;
    this.noDataMessage = 'Aucune donnée disponible.';
    // --- OUTPUTS ---
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    // --- INTERNALS ---
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.visibleColumns = [];
  }
  ngOnChanges(changes) {
    // Générer les colonnes depuis les champs Formly uniquement si aucune colonne n'est fournie explicitement
    if (this.dynamicFormlyFields && this.dynamicFormlyFields.length > 0 && (!this.columns || this.columns.length === 0)) {
      this.columns = this.generateColumnsFromFields(this.dynamicFormlyFields);
    }
    this.updateVisibleColumns();
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
    if (changes['externalFilters']) {
      this.updateVisibleColumns();
    }
  }
  updateVisibleColumns() {
    const hasRoleFilter = this.externalFilters && this.externalFilters['roles'];
    const hasCategoryFilter = this.externalFilters && this.externalFilters['category_id'];
    const properties = this.columns.filter(col => {
      // Cacher la colonne roles si un filtre de rôle est actif
      if (col.property === 'roles' && hasRoleFilter) {
        return false;
      }
      // Cacher la colonne category_id dans le tableau managemenu
      if ((col.property === 'category_id' || col.property === 'category') && this.type === 'menus') {
        return false;
      }
      return col.visible;
    }).map(col => col.property);
    this.visibleColumns = properties;
  }
  flattenFormlyFields(fields) {
    const flattened = [];
    fields.forEach(field => {
      if (field.fieldGroup) {
        flattened.push(...this.flattenFormlyFields(field.fieldGroup));
      } else if (field.key) {
        flattened.push(field);
      }
    });
    return flattened;
  }
  generateColumnsFromFields(fields) {
    const staticStartColumns = [{
      label: 'Checkbox',
      property: 'checkbox',
      type: 'checkbox',
      visible: this.type !== 'roles' && this.type !== 'permissions'
    }];
    const flattenedFields = this.flattenFormlyFields(fields);
    // Trouver le champ image (s'il existe) et l'enlever de flattenedFields
    const imageFieldIndex = flattenedFields.findIndex(f => f.type === 'fileimage');
    let imageField = null;
    if (imageFieldIndex !== -1) {
      imageField = flattenedFields.splice(imageFieldIndex, 1)[0]; // On enlève le champ image
    }
    const singularType = this.type.endsWith('s') ? this.type.slice(0, -1) : this.type;
    const imageColumn = imageField ? [{
      label: `${singularType}.label.${imageField.key}`,
      property: imageField.key,
      type: 'image',
      visible: true,
      sortable: false
    }] : [];
    // NOUVEAU: Vérifier si un filtre de rôle est actif
    const hasRoleFilter = this.externalFilters && this.externalFilters['roles'];
    // Génération des colonnes dynamiques
    const dynamicColumns = flattenedFields.map(field => {
      let columnType = 'text';
      let formatter;
      const key = field.key;
      let columnProperty = key; // Initialize columnProperty with the field key
      // NOUVEAU: Cacher la colonne roles si un filtre de rôle est actif
      if (key === 'roles' && hasRoleFilter) {
        return {
          label: `${singularType}.label.${key}`,
          property: columnProperty,
          type: columnType,
          visible: false,
          sortable: true,
          formatter: formatter
        };
      }
      // NOUVEAU: Traitement spécial pour les champs de type file-upload
      if (field.type === 'file-upload') {
        columnType = 'icon';
        columnProperty = 'media'; // Les fichiers sont stockés dans la propriété 'media' par Spatie Media Library
      } else if (key === 'color') {
        columnType = 'color';
        formatter = value => {
          return typeof value === 'string' ? value : '';
        };
      } else if (key === 'disable' || key === 'is_blocked' || field.type === 'slide-toggle') {
        columnType = 'disable';
        formatter = value => {
          return Boolean(value);
        };
        columnProperty = key; // Use the field key as the property name
      } else if (key === 'files') {
        columnType = 'icon';
        formatter = value => {
          if (Array.isArray(value) && value.length > 0) {
            const fileInfo = value[0];
            const mimeType = fileInfo?.mime_type || '';
            return src_app_classes_format_document_icon__WEBPACK_IMPORTED_MODULE_3__.FormatFileIcon.getIcon(mimeType);
          }
          return '';
        };
        columnProperty = 'files_info'; // Set the correct property for the data object
      } else if (key === 'size') {
        formatter = (value, row) => {
          if (!row) return '0 Bytes'; // Handle undefined row
          const documentRow = row;
          if (documentRow.files_info && documentRow.files_info.length > 0) {
            const totalSize = documentRow.files_info.reduce((sum, file) => sum + file.size, 0);
            return this._formatBytes(totalSize);
          }
          return '0 Bytes';
        };
        columnProperty = key; // Use the field key as the property name
      } else if (this.type === 'users') {
        if (key === 'roles') {
          formatter = value => {
            if (Array.isArray(value)) {
              return value.map(role => role.display_name || role.name).join(', ');
            }
            return '';
          };
        } else if (key === 'permissions') {
          formatter = value => {
            if (Array.isArray(value)) {
              return value.map(p => p.display_name || p.name).join(', ');
            }
            return '';
          };
        }
      } else if (this.type === 'menus') {
        if (key === 'category_id') {
          // Pour category_id, utiliser la relation category pour afficher le nom
          formatter = (value, row) => {
            const menuRow = row;
            return menuRow?.category?.display_name || menuRow?.category?.name || '';
          };
          columnProperty = 'category'; // Pointer vers la relation category
        }
      } else if (this.type === 'roles' || this.type === 'permissions') {
        formatter = value => {
          if (typeof value === 'string') return value;
          if (value && typeof value === 'object' && !Array.isArray(value)) {
            return value?.display_name || value?.name || '';
          }
          return '';
        };
      }
      const label = `${singularType}.label.${field.key}`;
      return {
        label: label,
        property: columnProperty,
        type: columnType,
        visible: true,
        sortable: true,
        formatter: formatter
      };
    });
    // Ajout de la colonne pour le nombre de fichiers si le type est 'documents'
    if (this.type === 'documents') {
      const fileCountColumn = {
        label: 'document.label.file_count',
        property: 'file_count',
        type: 'text',
        visible: true,
        sortable: true,
        formatter: (value, row) => {
          // Spécifier le type du 'row' ici est une bonne pratique
          const doc = row;
          return doc.files_info ? doc.files_info.length : 0;
        }
      };
      // Insère la nouvelle colonne après la colonne 'size' pour un agencement logique
      const sizeColumnIndex = dynamicColumns.findIndex(c => c.property === 'size');
      if (sizeColumnIndex > -1) {
        // On insère l'objet directement, sans assertion 'as ...'
        dynamicColumns.splice(sizeColumnIndex + 1, 0, fileCountColumn);
      } else {
        dynamicColumns.push(fileCountColumn);
      }
    }
    const staticEndColumns = [{
      label: 'table.actions',
      property: 'actions',
      type: 'button',
      visible: this.type !== 'roles' && this.type !== 'permissions',
      sortable: false
    }];
    return [...staticStartColumns, ...imageColumn, ...dynamicColumns, ...staticEndColumns];
  }
  trackByProperty(index, item) {
    return item;
  }
  isAllSelected() {
    if (!this.selection) return false;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (!this.selection) return;
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  emitAction(action, row) {
    this.action.emit({
      action,
      row
    });
  }
  getFileColor(mimeType) {
    if (!mimeType) return '';
    if (mimeType === 'application/pdf') {
      return 'red';
    } else if (mimeType === 'application/msword' || mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return 'blue';
    } else if (mimeType === 'application/vnd.ms-excel' || mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return 'green';
    }
    return ''; // Default no color
  }
  _formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  // Méthode pour vérifier si un document est en cours d'upload
  isDocumentUploading(documentId) {
    if (!documentId) return false;
    return this.uploadStatusService.isUploadInProgress(`doc-${documentId}`);
  }
  getFileIcon(mimeType) {
    return src_app_classes_format_document_icon__WEBPACK_IMPORTED_MODULE_3__.FormatFileIcon.getIconDocument(mimeType);
  }
  static {
    this.ɵfac = function DynamicDataTableComponent_Factory(t) {
      return new (t || DynamicDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_5__.UploadStatusService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DynamicDataTableComponent,
      selectors: [["vex-dynamic-data-table"]],
      viewQuery: function DynamicDataTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        type: "type",
        data: "data",
        columns: "columns",
        dynamicFormlyFields: "dynamicFormlyFields",
        externalFilters: "externalFilters",
        pagination: "pagination",
        isLoading: "isLoading",
        selection: "selection",
        noDataMessage: "noDataMessage"
      },
      outputs: {
        pageChange: "pageChange",
        sortChange: "sortChange",
        action: "action"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [["class", "flex items-center justify-center p-10", 4, "ngIf"], ["class", "flex flex-col items-center justify-center p-10", 4, "ngIf"], ["class", "overflow-auto", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-10"], [1, "flex", "flex-col", "items-center", "justify-center", "p-10"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"], [1, "overflow-auto"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "length", "pageIndex", "pageSize", "page"], [3, "matColumnDef"], [4, "ngIf"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "change"], ["mat-cell", ""], ["color", "primary", 3, "checked", "click", "change"], ["class", "w-8 min-w-8 p-0", "mat-cell", "", 4, "matCellDef"], ["mat-cell", "", 1, "w-8", "min-w-8", "p-0"], [4, "ngIf", "ngIfElse"], ["noPicture", ""], [1, "avatar", "h-8", "w-8", "align-middle", 3, "src"], ["src", "assets/img/avatars/noavatar.png", 1, "avatar", "h-8", "w-8", "align-middle"], ["mat-header-cell", "", "mat-sort-header", "", "class", "uppercase", 3, "disabled", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase", 3, "disabled"], [1, "flex", "items-center", "gap-2"], [1, "w-4", "h-4", "rounded-full", "flex-shrink-0", 3, "title"], ["noFile", ""], [1, "text-primary", 3, "svgIcon", "matTooltip"], [1, "text-sm", "text-gray-600"], [1, "text-gray-400"], [1, "text-sm", "text-gray-400"], [1, "flex", "items-center", "justify-center"], [3, "checked", "disabled", "matTooltip", "color", "change"], [3, "svgIcon"], ["mat-header-cell", "", "class", "uppercase text-right", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", "", 1, "uppercase", "text-right"], ["mat-cell", "", 3, "click"], [1, "flex", "items-center", "justify-end", "space-x-2", "min-w-[120px]"], [3, "documentId"], ["uploadIndicator", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor", "matTooltip"], ["svgIcon", "mat:more_vert"], ["menuActions", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"], ["svgIcon", "mat:remove_red_eye", 1, "mr-2"], ["svgIcon", "mat:delete", 1, "mr-2", "text-red-600"], ["svgIcon", "mat:edit", 1, "mr-2"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"]],
      template: function DynamicDataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, DynamicDataTableComponent_div_0_Template, 2, 0, "div", 0)(1, DynamicDataTableComponent_div_1_Template, 4, 1, "div", 1)(2, DynamicDataTableComponent_div_2_Template, 6, 8, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.data.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.data.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, src_app_pages_document_upload_status_indicator_upload_status_indicator_component__WEBPACK_IMPORTED_MODULE_4__.UploadStatusIndicatorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger40ms]
      }
    });
  }
}

/***/ }),

/***/ 40276:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/generic-resource-list/generic-resource-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericResourceListComponent: () => (/* binding */ GenericResourceListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 37989);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 5057);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_services_CustomPaginatorIntl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/CustomPaginatorIntl */ 97742);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 58713);
/* harmony import */ var src_app_shared_dynamic_data_table_dynamic_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dynamic-data-table/dynamic-data-table.component */ 84788);
/* harmony import */ var src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/Response-globalServer */ 77157);
/* harmony import */ var src_app_pages_components_shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/components/shared/page-header/page-header.component */ 76112);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-formly/material/input */ 1346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var src_app_pages_components_shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/components/shared/search-bar/search-bar.component */ 2202);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);








// Importez vos composants et interfaces partagés

















function GenericResourceListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = (a0, a1) => [a0, a1];
function GenericResourceListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "vex-page-header", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.title)("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, "menu.dashboards"), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 5, "menu." + ctx_r1.type)))("layoutControl", ctx_r1.layoutCtrl);
  }
}
function GenericResourceListComponent_h2_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "menu." + ctx_r7.type));
  }
}
function GenericResourceListComponent_h2_6_span_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function GenericResourceListComponent_h2_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, GenericResourceListComponent_h2_6_span_2_span_3_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r8.selection.selected.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, ctx_r8.type.slice(0, -1) + ".select"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.selection.selected.length > 1);
  }
}
function GenericResourceListComponent_h2_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GenericResourceListComponent_h2_6_span_1_Template, 3, 3, "span", 6)(2, GenericResourceListComponent_h2_6_span_2_Template, 4, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.selection.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.selection.hasValue());
  }
}
function GenericResourceListComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenericResourceListComponent_div_7_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.triggerDeletAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "menu_action.delete"));
  }
}
function GenericResourceListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GenericResourceListComponent_div_7_div_1_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.selection.hasValue() && !ctx_r4.isLoading());
  }
}
function GenericResourceListComponent_div_8_vex_search_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "vex-search-bar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("searchChange", function GenericResourceListComponent_div_8_vex_search_bar_1_Template_vex_search_bar_searchChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.onSearchChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "user.search"));
  }
}
function GenericResourceListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GenericResourceListComponent_div_8_vex_search_bar_1_Template, 2, 3, "vex-search-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r5.data.length > 0 || ctx_r5.searchCtrl) && !(ctx_r5.isLoading() && !ctx_r5.searchCtrl));
  }
}
function GenericResourceListComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenericResourceListComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.triggerCreateAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r6.disableCreateButton)("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r6.createButtonTranslationKey));
  }
}
const _c1 = () => [];
// ... autres imports nécessaires (MatInputModule, MatIconModule, etc.)
class GenericResourceListComponent {
  constructor(snackbar, translate, websocketService, cdr) {
    this.snackbar = snackbar;
    this.translate = translate;
    this.websocketService = websocketService;
    this.cdr = cdr;
    // --- INPUTS : Ce qui configure notre composant ---
    this.type = '';
    this.formlyFields = [];
    this.activeJobsCount = 0;
    this.disableCreateButton = false;
    this.externalFilters = {};
    this.createButtonTranslationKey = '';
    this.noDataMessage = '';
    // --- OUTPUT : Pour remonter les actions au parent ---
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    // --- Propriétés internes (logique copiée depuis Roles/Permissions) ---
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl();
    this.searchTerm = '';
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(true, []);
    this.data = [];
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.signal)(false);
    this.title = '';
    this.pagination = {
      current_page: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_3__.PaginationStandard.current_page,
      per_page: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_3__.PaginationStandard.pageSize,
      total: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_3__.PaginationStandard.total
    };
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.DestroyRef);
    this.refreshData$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
  }
  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.setNoDataMessage();
    });
    this.setNoDataMessage();
    if (this.type === 'roles' || this.type === 'permissions' || this.type === 'user-jobs') {
      this.disableCreateButton = true;
    }
    this.createButtonTranslationKey = this.type.slice(0, -1) + '.' + this.type.slice(0, -1) + '_create';
    this.fetchData();
    this.updateJobsFinished();
  }
  ngOnChanges(changes) {
    if (changes['externalFilters'] && !changes['externalFilters'].firstChange) {
      if (this.searchTerm) {
        this.searchTerm$.next(this.searchTerm);
      } else {
        this.refreshData$.next();
      }
    }
  }
  updateJobsFinished() {
    this.websocketService.activeJobs$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(jobs => jobs.length > 0),
    // Transforme en booléen : y a-t-il des jobs actifs ?
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.pairwise)(),
    // Compare la valeur actuelle avec la précédente [précédent, actuel]
    // On ne continue que si on passe de "il y avait des jobs" (true) à "il n'y en a plus" (true)
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.filter)(([wasProcessing, isNowIdle]) => wasProcessing && !isNowIdle)).subscribe(() => {
      this.refresh();
    });
  }
  onPageChange(event) {
    this.isLoading.set(true);
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.refreshData$.next();
  }
  triggerCreateAction() {
    this.handleAction({
      action: 'create'
    });
  }
  triggerDeletAction() {
    if (this.selection.selected.length > 0) {
      this.handleAction({
        action: 'deleteAll',
        rows: this.selection.selected
      });
      this.selection.clear();
    }
  }
  setNoDataMessage() {
    const translatedType = this.translate.instant('global.types.' + this.type);
    this.noDataMessage = this.translate.instant('global.no_data', {
      type: translatedType
    });
  }
  handleAction(event) {
    this.action.emit(event);
  }
  shouldShowSearchBar() {
    const hasDataOrSearchTerm = this.data.length > 0 || this.searchTerm !== '';
    const isLoadingWithoutSearch = this.isLoading() && this.searchTerm === '';
    return hasDataOrSearchTerm && !isLoadingWithoutSearch;
  }
  fetchData() {
    // Combiner les changements de terme de recherche et de filtres
    this.searchTerm$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.switchMap)(searchTerm => {
      this.isLoading.set(true);
      this.searchTerm = searchTerm;
      const term = searchTerm?.trim();
      if (term) {
        const combinedFilters = {
          ...this.externalFilters
        };
        return this.dataService.search(term, combinedFilters).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
          this.snackbar.open('Erreur lors de la recherche.', 'Fermer', {
            duration: 3000
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
        }));
      } else {
        return this.refreshData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(null),
        // Utilise le service injecté via l'interface
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.switchMap)(() => this.dataService.getAll(this.pagination.current_page, this.pagination.per_page, this.externalFilters).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
          this.snackbar.open('Erreur lors du chargement des données.', 'Fermer', {
            duration: 3000
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(null);
        }))));
      }
    }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_11__.takeUntilDestroyed)(this.destroyRef)).subscribe(response => {
      if (response) {
        this.data = response.data || [];
        this.title = response.message || this.type.charAt(0).toUpperCase() + this.type.slice(1);
        if (response.pagination) {
          this.pagination = response.pagination;
        } else {
          // Fallback pour la recherche qui ne pagine pas
          this.pagination.total = this.data.length;
          this.pagination.current_page = 1;
        }
      }
      this.isLoading.set(false);
      this.cdr.detectChanges();
    });
  }
  onSearchChange(term) {
    this.searchTerm$.next(term);
  }
  refresh() {
    this.isLoading.set(true);
    // Si on est en mode recherche, relancer la recherche avec le terme actuel
    if (this.searchTerm) {
      this.searchTerm$.next(this.searchTerm);
    } else {
      // Sinon, relancer le rafraîchissement normal
      this.refreshData$.next();
    }
  }
  clearSelection() {
    this.selection.clear();
  }
  resetSearch() {
    this.searchCtrl.setValue('');
    this.searchTerm = '';
  }
  static {
    this.ɵfac = function GenericResourceListComponent_Factory(t) {
      return new (t || GenericResourceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: GenericResourceListComponent,
      selectors: [["vex-generic-resource-list"]],
      inputs: {
        type: "type",
        formlyFields: "formlyFields",
        dataService: "dataService",
        columns: "columns",
        activeJobsCount: "activeJobsCount",
        disableCreateButton: "disableCreateButton",
        externalFilters: "externalFilters"
      },
      outputs: {
        action: "action"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorIntl,
        useClass: src_app_services_CustomPaginatorIntl__WEBPACK_IMPORTED_MODULE_0__.CustomPaginatorIntl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 22,
      consts: [[4, "ngIf", "ngIfElse"], ["NoMenu", ""], [1, "-mt-6"], [1, "card", "overflow-auto"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], ["class", "title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none", 4, "ngIf"], [4, "ngIf"], ["class", "mt-5", 4, "ngIf"], [1, "flex-1"], ["class", "ml-4 flex-none bg-blue-700 hover:bg-blue-800 w-8 h-8 text-white rounded-full", "type", "button", "mat-mini-fab", "", 3, "hidden", "matTooltip", "click", 4, "ngIf"], [3, "type", "data", "columns", "dynamicFormlyFields", "pagination", "isLoading", "selection", "noDataMessage", "externalFilters", "pageChange", "action"], [1, "p-4"], [3, "title", "breadcrumbs", "layoutControl"], [1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l", "hidden", "sm:block", "flex-none"], ["class", "mr-4 pr-4 border-r flex-none", 4, "ngIf"], [1, "mr-4", "pr-4", "border-r", "flex-none"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click"], ["svgIcon", "mat:delete"], [1, "mt-5"], [3, "placeholder", "searchChange", 4, "ngIf"], [3, "placeholder", "searchChange"], ["type", "button", "mat-mini-fab", "", 1, "ml-4", "flex-none", "bg-blue-700", "hover:bg-blue-800", "w-8", "h-8", "text-white", "rounded-full", 3, "hidden", "matTooltip", "click"], ["svgIcon", "mat:add", 1, "text-white", "w-6", "h-6"]],
      template: function GenericResourceListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, GenericResourceListComponent_ng_container_0_Template, 2, 0, "ng-container", 0)(1, GenericResourceListComponent_ng_template_1_Template, 3, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "vex-page-layout-content", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, GenericResourceListComponent_h2_6_Template, 3, 2, "h2", 5)(7, GenericResourceListComponent_div_7_Template, 2, 1, "div", 6)(8, GenericResourceListComponent_div_8_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, GenericResourceListComponent_button_10_Template, 3, 4, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "vex-dynamic-data-table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function GenericResourceListComponent_Template_vex_dynamic_data_table_pageChange_11_listener($event) {
            return ctx.onPageChange($event);
          })("action", function GenericResourceListComponent_Template_vex_dynamic_data_table_action_11_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type === "menus" || ctx.type === "categories")("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("-mt-16", ctx.activeJobsCount === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.type === "roles" || ctx.type === "permissions"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.shouldShowSearchBar());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.type)("data", ctx.data)("columns", ctx.columns || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c1))("dynamicFormlyFields", ctx.formlyFields)("pagination", ctx.pagination)("isLoading", ctx.isLoading())("selection", ctx.selection)("noDataMessage", ctx.noDataMessage)("externalFilters", ctx.externalFilters);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_1__.VexPageLayoutContentDirective, src_app_pages_components_shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, src_app_shared_dynamic_data_table_dynamic_data_table_component__WEBPACK_IMPORTED_MODULE_2__.DynamicDataTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _ngx_formly_material_input__WEBPACK_IMPORTED_MODULE_27__.FormlyMatInputModule, src_app_pages_components_shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__.SearchBarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_generic-resource-list_generic-resource-list_component_ts.js.map