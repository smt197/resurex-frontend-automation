"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_document_document_component_ts"],{

/***/ 52733:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/document/delete-element-component/delete-element.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteElementComponent: () => (/* binding */ DeleteElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);










function DeleteElementComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DOCUMENT: ", ctx_r0.getSingleDocumentName(), " ");
  }
}
function DeleteElementComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure you want to delete all documents?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NUMBERS: ", ctx_r1.getSingleDocumentName(), " ");
  }
}
class DeleteElementComponent {
  constructor(defaults, dialogRef) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
  }
  send() {
    this.dialogRef.close(this.defaults);
  }
  isSingleDocument() {
    return !Array.isArray(this.defaults);
  }
  getSingleDocumentName() {
    if (this.isSingleDocument()) {
      const document = this.defaults;
      return `${document.name}`;
    }
    const documents = this.defaults;
    return documents.length + '';
  }
  static {
    this.ɵfac = function DeleteElementComponent_Factory(t) {
      return new (t || DeleteElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteElementComponent,
      selectors: [["vex-delete-element-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 2,
      consts: [[1, "container", "p-6"], ["mat-dialog-title", "", 1, "flex", "items-start", "justify-between"], [1, "flex", "items-start", "justify-start", "gap-2"], ["color", "warn", "svgIcon", "mat:delete"], [1, "headline", "m-0", "flex-auto"], [1, "text-border"], [1, "flex", "flex-col", "items-start", "justify-start", "space-y-2"], [4, "ngIf", "ngIfElse"], ["docList", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 3, "click"], [1, "text-lg", "text-red-500", "font-medium"], [1, "text-lg", "font-semibold"]],
      template: function DeleteElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Delete Object ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeleteElementComponent_ng_container_8_Template, 5, 1, "ng-container", 7)(9, DeleteElementComponent_ng_template_9_Template, 4, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteElementComponent_Template_button_click_14_listener() {
            return ctx.send();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delete ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSingleDocument())("ngIfElse", _r2);
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 27383:
/*!******************************************************!*\
  !*** ./src/app/pages/document/document.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentComponent: () => (/* binding */ DocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var src_app_models_document_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/document.model */ 46455);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _document_show_document_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-show/document-show.component */ 18497);
/* harmony import */ var _delete_element_component_delete_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-element-component/delete-element.component */ 52733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/Utils */ 18220);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);
/* harmony import */ var src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/upload-status.service */ 37004);
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./document.service */ 37071);
 // Added OnInit


















class DocumentComponent {
  constructor(genericApi, snackbar, translate, router, dialog, websocketService, uploadStatusService, documentService) {
    this.genericApi = genericApi;
    this.snackbar = snackbar;
    this.translate = translate;
    this.router = router;
    this.dialog = dialog;
    this.websocketService = websocketService;
    this.uploadStatusService = uploadStatusService;
    this.documentService = documentService;
    this.type = 'documents';
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(true);
    this.formlyFields = [];
    this.dataService = src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.createDataService(this.type, this.genericApi);
    this.activeJobsCount$ = this.websocketService.activeJobs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(jobs => jobs.length));
    // Synchroniser les jobs WebSocket avec le service d'upload
    this.websocketService.activeJobs$.subscribe(jobs => {
      const currentTime = Date.now();
      jobs.forEach(job => {
        if (job.input?.type === 'document' && job.input?.main_document_id) {
          const progress = job.progress_now / job.progress_max * 100;
          const docId = `doc-${job.input.main_document_id}`;
          // Si c'est un nouveau job, démarrer le tracking
          if (!this.uploadStatusService.isUploadInProgress(docId)) {
            this.uploadStatusService.startUpload(docId, job.input.main_document_id);
          }
          // Mettre à jour le progrès
          this.uploadStatusService.updateProgress(docId, progress, job.id);
        }
      });
    });
    // Écouter les jobs terminés
    this.websocketService.jobFinished$.subscribe(finishedJob => {
      if (finishedJob.input?.main_document_id) {
        this.uploadStatusService.completeUpload(`doc-${finishedJob.input.main_document_id}`);
      }
    });
    // Écouter les nouveaux documents créés pour actualiser la liste
    this.documentService.documentCreated$.subscribe(newDocument => {
      // Actualiser la liste après un petit délai pour voir le preloader
      setTimeout(() => {
        if (this.resourceList) {
          this.resourceList.refresh();
        }
      }, 500);
    });
  }
  ngOnInit() {
    this.formlyFields = (0,src_app_models_document_model__WEBPACK_IMPORTED_MODULE_1__.getDocumentFormlyFields)(this.translate);
  }
  handleAction(event) {
    switch (event.action) {
      case 'create':
        this.router.navigate(['index/document/create']);
        break;
      case 'edit':
        if (event.row) {
          this.router.navigate(['index/document/edit', event.row.id]);
        }
        break;
      case 'show':
        if (event.row?.name) {
          // On redirige vers la nouvelle page de grille média
          this.router.navigate(['index/media-grid', event.row.name]);
        }
        break;
      case 'delete':
        if (event.row) {
          this.openDeleteDocumentDialog(event.row);
        }
        break;
      case 'deleteAll':
        if (event.rows) {
          this.openDeleteAllDocumentDialog(event.rows);
        }
        break;
    }
  }
  openDeleteDocumentDialog(document) {
    this.dialog.open(_delete_element_component_delete_element_component__WEBPACK_IMPORTED_MODULE_3__.DeleteElementComponent, {
      data: document,
      width: '600px'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        const originalData = [...this.resourceList.data];
        this.resourceList.data = this.resourceList.data.filter(d => d.slug !== document.slug);
        if (document.slug) {
          this.resourceList.isLoading.set(true);
          this.genericApi.delete(this.type, document.slug).pipe(
          // 3. Utiliser finalize pour garantir l'exécution, que ce soit un succès ou une erreur
          (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => {
            // Le spinner est désactivé à la fin de l'opération, MAIS c'est le refresh qui s'en chargera
            // en mettant isLoading à false, donc cette ligne n'est pas nécessaire si on refresh toujours.
            // this.genericListComponent.isLoading.set(false);
          })).subscribe({
            next: res => {
              if (res) {
                this.showMessage(res.message);
                this.resourceList.refresh();
              }
            },
            error: err => {
              this.resourceList.data = originalData;
              this.showMessage(err.error.message);
              this.resourceList.refresh();
            }
          });
        }
      }
    });
  }
  openDeleteAllDocumentDialog(documents) {
    this.dialog.open(_delete_element_component_delete_element_component__WEBPACK_IMPORTED_MODULE_3__.DeleteElementComponent, {
      data: documents,
      width: '600px'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        const slugs = documents.map(document => document.slug);
        this.resourceList.isLoading.set(true);
        this.genericApi.deleteAll(this.type, slugs).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => this.resourceList.refresh())).subscribe(res => {
          if (res) {
            this.showMessage(res.message);
            this.isLoading.set(false);
            this.resourceList.refresh();
          }
        });
      }
    });
  }
  showMessage(params) {
    if (params) {
      this.snackbar.open(params, 'Fermer', {
        duration: 5000
      });
    }
  }
  getDocumentUploadStatus(document) {
    return this.uploadStatusService.getUploadStatus(`doc-${document.id}`);
  }
  isDocumentUploading(document) {
    return this.uploadStatusService.isUploadInProgress(`doc-${document.id}`);
  }
  openShowDocumentDialog(document) {
    this.dialog.open(_document_show_document_show_component__WEBPACK_IMPORTED_MODULE_2__.DocumentShowComponent, {
      data: document,
      width: '650px'
    });
  }
  static {
    this.ɵfac = function DocumentComponent_Factory(t) {
      return new (t || DocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_5__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_upload_status_service__WEBPACK_IMPORTED_MODULE_7__.UploadStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_8__.DocumentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: DocumentComponent,
      selectors: [["vex-document"]],
      viewQuery: function DocumentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 6,
      consts: [[3, "type", "formlyFields", "dataService", "activeJobsCount", "action"]],
      template: function DocumentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "vex-generic-resource-list", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("action", function DocumentComponent_Template_vex_generic_resource_list_action_0_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx.type)("formlyFields", ctx.formlyFields)("dataService", ctx.dataService)("activeJobsCount", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx.activeJobsCount$) || 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_document_document_component_ts.js.map