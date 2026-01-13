"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_job-status_job-status_component_ts"],{

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

/***/ 51377:
/*!**********************************************************!*\
  !*** ./src/app/pages/job-status/job-status.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobStatusComponent: () => (/* binding */ JobStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var src_app_models_document_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/document.model */ 46455);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _document_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../document/document.service */ 37071);
 // Added OnInit









class JobStatusComponent {
  constructor(genericApi, translate, documentService) {
    this.genericApi = genericApi;
    this.translate = translate;
    this.documentService = documentService;
    this.type = 'user-jobs';
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(true);
    this.formlyFields = [];
    this.dataService = {
      getAll: (page, perPage) => this.genericApi.getAll(this.type, page, perPage),
      getAllSimple: (ressource = this.type) => this.genericApi.getAllSimple(ressource),
      search: term => this.genericApi.search(this.type, term)
    };
    this.activeJobsCount$ = this.documentService.activeJobsCount$;
  }
  ngOnInit() {
    this.formlyFields = (0,src_app_models_document_model__WEBPACK_IMPORTED_MODULE_1__.getJobStatusTableFields)(this.translate);
  }
  handleAction(event) {}
  static {
    this.ɵfac = function JobStatusComponent_Factory(t) {
      return new (t || JobStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_2__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_document_document_service__WEBPACK_IMPORTED_MODULE_3__.DocumentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: JobStatusComponent,
      selectors: [["vex-job-status"]],
      viewQuery: function JobStatusComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 6,
      consts: [[3, "type", "formlyFields", "dataService", "activeJobsCount", "action"]],
      template: function JobStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "vex-generic-resource-list", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("action", function JobStatusComponent_Template_vex_generic_resource_list_action_0_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.type)("formlyFields", ctx.formlyFields)("dataService", ctx.dataService)("activeJobsCount", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, ctx.activeJobsCount$) || 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_job-status_job-status_component_ts.js.map