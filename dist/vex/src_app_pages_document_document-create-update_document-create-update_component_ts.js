"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_document_document-create-update_document-create-update_component_ts"],{

/***/ 95903:
/*!********************************************************!*\
  !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeInRight400ms: () => (/* binding */ fadeInRight400ms),
/* harmony export */   fadeInRightAnimation: () => (/* binding */ fadeInRightAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 47172);

function fadeInRightAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateX(-20px)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateX(0)',
    opacity: 1
  }))])]);
}
const fadeInRight400ms = fadeInRightAnimation(400);

/***/ }),

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

/***/ 16962:
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaleIn400ms: () => (/* binding */ scaleIn400ms),
/* harmony export */   scaleInAnimation: () => (/* binding */ scaleInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 47172);

function scaleInAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'scale(1)'
  }))])]);
}
const scaleIn400ms = scaleInAnimation(400);

/***/ }),

/***/ 46455:
/*!******************************************!*\
  !*** ./src/app/models/document.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocumentCreationFormlyFields: () => (/* binding */ getDocumentCreationFormlyFields),
/* harmony export */   getDocumentFormlyFields: () => (/* binding */ getDocumentFormlyFields),
/* harmony export */   getFieldAddNewFile: () => (/* binding */ getFieldAddNewFile),
/* harmony export */   getFileFields: () => (/* binding */ getFileFields),
/* harmony export */   getJobStatusTableFields: () => (/* binding */ getJobStatusTableFields)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);

function getDocumentCreationFormlyFields(translate, component) {
  return [{
    type: 'button',
    className: 'flex justify-end mb-1',
    props: {
      text: translate.get('global.save'),
      color: 'primary',
      type: 'button',
      className: 'mat-flat-button',
      onClick: () => component.onSubmit()
    },
    expressionProperties: {
      'props.disabled': 'field.form.invalid || formState.isLoading'
    }
  }, {
    key: 'files',
    type: 'document-file-pond',
    props: {
      label: translate.instant('document.label.files'),
      required: true,
      multiple: true,
      maxWidth: '100%',
      acceptedFileTypes: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.extensions_files
    }
  }];
}
function getDocumentFormlyFields(translate) {
  const fields = [{
    key: 'name',
    type: 'input',
    props: {
      label: translate.instant('document.label.name'),
      placeholder: translate.instant('document.label.name'),
      required: true,
      minLength: 3
    },
    validation: {
      messages: {
        required: 'Le nom est requis.',
        minlength: 'Le nom doit contenir au moins 3 caractères.'
      }
    }
  }, {
    key: 'size',
    type: 'input',
    props: {
      label: translate.instant('document.label.size'),
      placeholder: translate.instant('document.label.size'),
      readonly: true
    }
  }];
  return fields;
}
function getFieldAddNewFile(translate, component) {
  return [{
    key: 'files',
    type: 'document-file-pond',
    props: {
      label: translate.instant('document.label.files'),
      placeholder: translate.instant('document.label.files'),
      required: true,
      multiple: true,
      allowReorder: true,
      acceptedFileTypes: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.extensions_files
    }
  }, {
    type: 'button',
    className: 'flex justify-end mb-1',
    props: {
      text: translate.get('global.save'),
      color: 'primary',
      type: 'button',
      className: 'mat-flat-button',
      onClick: () => component?.uploadNewFiles()
    },
    expressionProperties: {
      'props.disabled': 'field.form.invalid || formState.isLoading'
    }
  }];
}
function getFileFields(translate, Save, isDisabled, onFileChange) {
  return [{
    key: 'file',
    type: 'filepond',
    props: {
      labelIdle: translate.instant('global.filepond.label_idle'),
      acceptedFileTypes: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.extensions_files,
      required: true,
      onChange: file => {
        if (onFileChange) {
          onFileChange(file); // Utilisez le callback au lieu de this
        }
      }
    }
  }, {
    type: 'button',
    props: {
      text: translate.get('global.save'),
      color: 'primary',
      type: 'button',
      disabled: !isDisabled,
      className: 'mat-flat-button',
      onClick: () => Save()
    }
  }];
}
function getJobStatusTableFields(translate) {
  return [{
    key: 'id',
    type: 'input',
    props: {
      label: translate.instant('job_status.label.id'),
      readonly: true
    }
  }, {
    key: 'type',
    type: 'input',
    props: {
      label: translate.instant('job_status.label.type'),
      readonly: true
    }
  }, {
    key: 'status',
    type: 'select',
    props: {
      label: translate.instant('job_status.label.status'),
      readonly: true,
      options: [{
        label: translate.instant('job_status.status.queued'),
        value: 'queued'
      }, {
        label: translate.instant('job_status.status.executing'),
        value: 'executing'
      }, {
        label: translate.instant('job_status.status.finished'),
        value: 'finished'
      }, {
        label: translate.instant('job_status.status.failed'),
        value: 'failed'
      }, {
        label: translate.instant('job_status.status.retrying'),
        value: 'retrying'
      }]
    }
  }, {
    key: 'created_at',
    type: 'input',
    props: {
      label: translate.instant('job_status.label.created_at'),
      type: 'datetime-local',
      readonly: true
    }
  }];
}

/***/ }),

/***/ 61543:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/document/document-create-update/document-create-update.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentCreateUpdateComponent: () => (/* binding */ DocumentCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_models_document_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/document.model */ 46455);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/components/loading-spinner/loading-spinner.component */ 57524);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/fade-in-right.animation */ 95903);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 24555);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/animations/scale-in.animation */ 16962);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../document.service */ 37071);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/upload-status.service */ 37004);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 49524);




























function DocumentCreateUpdateComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentCreateUpdateComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function DocumentCreateUpdateComponent_vex_loading_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "vex-loading-spinner", 15);
  }
}
const _c0 = a0 => ({
  isLoading: a0
});
const _c1 = a0 => ({
  formState: a0
});
function DocumentCreateUpdateComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "formly-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("form", ctx_r2.form)("fields", ctx_r2.fields)("model", ctx_r2.model)("options", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c0, ctx_r2.isLoading)));
  }
}
class DocumentCreateUpdateComponent {
  constructor(translate, router, genericApiService, documentService, snackbar, uploadStatusService) {
    this.translate = translate;
    this.router = router;
    this.genericApiService = genericApiService;
    this.documentService = documentService;
    this.snackbar = snackbar;
    this.uploadStatusService = uploadStatusService;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
    this.model = {
      files: []
    };
    this.fields = [];
    this.documentId = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.fields = (0,src_app_models_document_model__WEBPACK_IMPORTED_MODULE_0__.getDocumentCreationFormlyFields)(this.translate, this);
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const filesToUpload = this.model.files || [];
    if (filesToUpload.length === 0) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    const firstFile = filesToUpload[0];
    const mainDocumentName = firstFile.name.split('.').slice(0, -1).join('.') || firstFile.name;
    formData.append('name', mainDocumentName);
    formData.append('description', mainDocumentName);
    filesToUpload.forEach(file => {
      formData.append('files[]', file, file.name);
    });
    this.genericApiService.create('documents', formData).subscribe({
      next: response => {
        this.isLoading = false;
        // Créer immédiatement le statut d'upload si on a un document ID
        if (response?.data?.id) {
          this.uploadStatusService.startUpload(`doc-${response.data.id}`, response.data.id);
          // Notifier qu'un nouveau document a été créé
          this.documentService.notifyDocumentCreated(response.data);
        }
        this.showMessage(response?.message);
        this.documentService.notifyJobCreated();
      },
      error: err => {
        this.isLoading = false;
        this.showMessage(err.error?.message);
      }
    });
  }
  back() {
    this.router.navigate(['index/document']);
  }
  showMessage(params) {
    if (params) {
      this.snackbar.open(params, 'Fermer', {
        duration: 5000
      });
    }
  }
  static {
    this.ɵfac = function DocumentCreateUpdateComponent_Factory(t) {
      return new (t || DocumentCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_8__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_9__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_10__.UploadStatusService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: DocumentCreateUpdateComponent,
      selectors: [["vex-document-create-update"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [[1, "h-full", "flex", "flex-col"], [1, "p-6", "bg-foreground", "shadow-b", "flex-none", "border-b"], [1, "container", "px-0"], [1, "flex", "items-center", "justify-between"], [1, "display-1", "font-bold", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary-600", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-600/10"], ["svgIcon", "mat:attach_file"], ["rxTranslate", "document.create.title", 1, "block"], ["class", "flex-none hidden sm:inline-block", "color", "primary", "mat-flat-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "card", "overflow-y-auto", "flex-auto", "shadow-lg", "mt-4", "border", "hover:border-solid", "hover:border-primary-500"], [1, "p-6"], ["mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "flex-none", "hidden", "sm:inline-block", 3, "click"], ["svgIcon", "mat:arrow_back", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", "icon-sm"], ["mode", "indeterminate"], [3, "form", "fields", "model", "options"]],
      template: function DocumentCreateUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "TITLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, DocumentCreateUpdateComponent_button_9_Template, 4, 0, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, DocumentCreateUpdateComponent_vex_loading_spinner_12_Template, 1, 0, "vex-loading-spinner", 11)(13, DocumentCreateUpdateComponent_div_13_Template, 2, 8, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@scaleIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInRight", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_20__.FormlyMaterialModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_21__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_21__.FormlyForm, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_11__["default"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule, src_app_auth_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_6__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInRight400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__.stagger40ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms, _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_5__.scaleFadeIn400ms]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_document_document-create-update_document-create-update_component_ts.js.map