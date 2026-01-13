"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["common"],{

/***/ 99955:
/*!**************************************************************************************!*\
  !*** ./src/@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSecondaryToolbarComponent: () => (/* binding */ VexSecondaryToolbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/vex-config.service */ 85298);




function VexSecondaryToolbarComponent_h1_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.current, " ");
  }
}
const _c0 = (a0, a1) => ({
  fixed: a0,
  "w-full": a1
});
const _c1 = ["*"];
class VexSecondaryToolbarComponent {
  constructor(configService) {
    this.configService = configService;
    this.fixed$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(config => config.toolbar.fixed));
    this.isVerticalLayout$ = this.configService.select(config => config.layout).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(layout => layout === 'vertical'));
  }
  static {
    this.ɵfac = function VexSecondaryToolbarComponent_Factory(t) {
      return new (t || VexSecondaryToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__.VexConfigService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VexSecondaryToolbarComponent,
      selectors: [["vex-secondary-toolbar"]],
      inputs: {
        current: "current"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 9,
      vars: 13,
      consts: [[1, "secondary-toolbar-placeholder"], [1, "secondary-toolbar", "py-1", "z-40", "border-t", "flex", 3, "ngClass"], [1, "px-6", "flex", "items-center", "flex-auto"], ["class", "subheading-2 font-medium m-0 ltr:pr-3 rtl:pl-3 ltr:border-r rtl:border-l ltr:mr-3 rtl:ml-3 flex-none", 4, "ngIf"], [1, "subheading-2", "font-medium", "m-0", "ltr:pr-3", "rtl:pl-3", "ltr:border-r", "rtl:border-l", "ltr:mr-3", "rtl:ml-3", "flex-none"]],
      template: function VexSecondaryToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VexSecondaryToolbarComponent_h1_7_Template, 2, 1, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.fixed$), !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.fixed$)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("container", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.isVerticalLayout$));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.current);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
      styles: [".secondary-toolbar[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  --tw-shadow: 0 10px 30px 0 rgba(82,63,104,.06);\n  --tw-shadow-colored: 0 10px 30px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  background: var(--vex-secondary-toolbar-background);\n  height: var(--vex-secondary-toolbar-height);\n  margin-top: calc(var(--vex-secondary-toolbar-height) * -1);\n}\n.secondary-toolbar.fixed[_ngcontent-%COMP%] {\n  width: var(--vex-toolbar-width);\n}\n\n.secondary-toolbar-placeholder[_ngcontent-%COMP%] {\n  height: var(--vex-secondary-toolbar-height);\n}\n\n  vex-breadcrumbs {\n  display: none;\n}\n@media (min-width: 600px) {\n    vex-breadcrumbs {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNlY29uZGFyeS10b29sYmFyL3ZleC1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLHdCQUFBO0VBQUEsOENBQUE7RUFBQSx5REFBQTtFQUFBLHVHQUFBO0VBQUEsNkJBQUE7RUFBQSwrUUFBQTtVQUFBLHVRQUFBO0VBQ0EsbURBQUE7RUFDQSwyQ0FBQTtFQUNBO0FBSEE7QUFLQTtFQUNFLCtCQUFBO0FBQ0o7O0FBR0E7RUFDRSwyQ0FBQTtBQUFGOztBQUtJO0VBQUE7QUFBQTtBQUdGO0VBRUk7SUFBQTtFQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25kYXJ5LXRvb2xiYXIge1xyXG4gIEBhcHBseSBiYWNrZHJvcC1ibHVyIGJvcmRlci1iIHNoYWRvdy1iO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zZWNvbmRhcnktdG9vbGJhci1iYWNrZ3JvdW5kKTtcclxuICBoZWlnaHQ6IHZhcigtLXZleC1zZWNvbmRhcnktdG9vbGJhci1oZWlnaHQpO1xyXG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdmV4LXNlY29uZGFyeS10b29sYmFyLWhlaWdodCkgKiAtMSk7XHJcblxyXG4gICYuZml4ZWQge1xyXG4gICAgd2lkdGg6IHZhcigtLXZleC10b29sYmFyLXdpZHRoKTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWNvbmRhcnktdG9vbGJhci1wbGFjZWhvbGRlciB7XHJcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtc2Vjb25kYXJ5LXRvb2xiYXItaGVpZ2h0KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICB2ZXgtYnJlYWRjcnVtYnMge1xyXG4gICAgQGFwcGx5IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIEBzY3JlZW4gc20ge1xyXG4gICAgdmV4LWJyZWFkY3J1bWJzIHtcclxuICAgICAgQGFwcGx5IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 66241:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-analytics/dashboard.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class DashboardService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl; // Base API URL from environment configuration
  }
  /**
   * Fetches the list of users from the server.
   * @returns An Observable containing the response from the server.
   */
  getUserStats() {
    // Changer le type de retour
    return this.http.get(`${this.apiUrl}/users/stats`);
  }
  getAllLogs(page = 1, perPage = 5, search = '', sortBy = 'created_at', sortOrder = 'desc', dateDebut, dateFin) {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      search,
      sort_by: sortBy,
      sort_order: sortOrder
    });
    if (dateDebut) params.append('date_debut', dateDebut);
    if (dateFin) params.append('date_fin', dateFin);
    return this.http.get(`${this.apiUrl}/activity-logs?${params.toString()}`);
  }
  getRolesCount() {
    return this.http.get(`${this.apiUrl}/roles/count`);
  }
  getPermissionsCount() {
    return this.http.get(`${this.apiUrl}/permissions/count`);
  }
  static {
    this.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root' // The service is provided in the root injector (app-wide singleton)
    });
  }
}

/***/ }),

/***/ 37071:
/*!****************************************************!*\
  !*** ./src/app/pages/document/document.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentService: () => (/* binding */ DocumentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);


class DocumentService {
  constructor() {
    this.activeJobsCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    this.activeJobsCount$ = this.activeJobsCountSubject.asObservable();
    this.jobFinishedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.jobFinished$ = this.jobFinishedSubject.asObservable();
    this.jobCreatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.jobCreated$ = this.jobCreatedSubject.asObservable();
    this.documentCreatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.documentCreated$ = this.documentCreatedSubject.asObservable();
  }
  updateActiveJobsCount(count) {
    this.activeJobsCountSubject.next(count);
  }
  notifyJobFinished() {
    this.jobFinishedSubject.next();
  }
  notifyJobCreated() {
    this.jobCreatedSubject.next();
  }
  notifyDocumentCreated(document) {
    this.documentCreatedSubject.next(document);
  }
  static {
    this.ɵfac = function DocumentService_Factory(t) {
      return new (t || DocumentService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DocumentService,
      factory: DocumentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 75946:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/ui/confirm-dialog-component/confirm-dialog-component.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);








class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["vex-confirm-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 1,
      consts: [[1, "dialog-container", "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-2xl", "overflow-hidden", "max-w-md", "w-full"], [1, "dialog-header", "p-6", "flex", "items-center", "gap-4", "border-b", "border-gray-200", "dark:border-gray-700"], [1, "icon-wrapper", "bg-primary-500/10", "dark:bg-primary-500/20", "text-primary-600", "dark:text-primary-400", "rounded-full", "p-3", "flex", "items-center", "justify-center"], [1, "text-2xl"], ["mat-dialog-title", "", 1, "headline", "m-0", "text-xl", "md:text-2xl", "font-semibold", "text-gray-800", "dark:text-gray-100"], [1, "dialog-content", "p-6", "text-gray-700", "dark:text-gray-300"], [1, "text-base", "md:text-lg", "leading-relaxed"], ["align", "end", 1, "dialog-actions", "p-6", "pt-4", "bg-gray-50", "dark:bg-gray-700/50", "border-t", "border-gray-200", "dark:border-gray-700"], ["mat-stroked-button", "", 1, "px-5", "py-2", "rounded-md", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors", "duration-150", 3, "click"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 1, "px-6", "py-2", "rounded-md", "text-sm", "font-medium", "ml-3", "transition-transform", "duration-150", "hover:scale-105", 3, "click"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "help_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Confirmation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 5)(8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions", 7)(11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_11_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_13_listener() {
            return ctx.onConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Confirm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message || "Are you sure you want to proceed with this action?", " ");
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 38613:
/*!**********************************************!*\
  !*** ./src/app/services/FormUtilsService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormUtilsService: () => (/* binding */ FormUtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FormUtilsService {
  constructor() {
    // Maps pour stocker les références
    this.rolesMap = new Map();
    this.permissionsMap = new Map();
  }
  // Autres méthodes existantes du service FormUtilsService...
  /**
   * Recherche un champ dans la configuration Formly par sa clé
   */
  findKeySelectField(fields, key) {
    for (const field of fields) {
      if (field.key === key) {
        return field;
      }
      if (field.fieldGroup) {
        for (const groupField of field.fieldGroup) {
          if (groupField.key === key) {
            return groupField;
          }
        }
      }
    }
    return null;
  }
  /**
   * Configure les champs select pour les rôles et permissions
   */
  configureSelectFields(fields, data) {
    const selectKeys = ['roles', 'permissions'];
    selectKeys.forEach(key => {
      const field = this.findKeySelectField(fields, key);
      if (field && field.props) {
        const values = data[key];
        if (Array.isArray(values)) {
          // Stocker les rôles/permissions par nom pour un accès facile
          if (key === 'roles') {
            this.rolesMap.clear(); // Nettoyer avant d'ajouter
            values.forEach(role => {
              if (role && role.name) {
                this.rolesMap.set(role.name, role);
              }
            });
          }
          if (key === 'permissions') {
            this.permissionsMap.clear(); // Nettoyer avant d'ajouter
            values.forEach(permission => {
              if (permission && permission.name) {
                this.permissionsMap.set(permission.name, permission);
              }
            });
          }
          // Configurer les options du select
          field.props.options = values.map(item => ({
            label: item.display_name,
            value: item // Stocker l'objet complet comme valeur
          }));
          // S'assurer que c'est un select multiple
          field.props['multiple'] = true;
          // Configuration pour afficher correctement les options sélectionnées
          field.props['compareWith'] = (option, value) => {
            return option && value && option.name === value.name;
          };
        } else {
          console.error(`${key} n'est pas un tableau`);
        }
        field.type = 'select';
      }
    });
  }
  /**
   * Récupère un rôle par son nom
   */
  getRoleByName(name) {
    return this.rolesMap.get(name);
  }
  /**
   * Récupère une permission par son nom
   */
  getPermissionByName(name) {
    return this.permissionsMap.get(name);
  }
  /**
   * Récupère tous les rôles stockés
   */
  getAllRoles() {
    return Array.from(this.rolesMap.values());
  }
  /**
   * Récupère toutes les permissions stockées
   */
  getAllPermissions() {
    return Array.from(this.permissionsMap.values());
  }
  static {
    this.ɵfac = function FormUtilsService_Factory(t) {
      return new (t || FormUtilsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormUtilsService,
      factory: FormUtilsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 34365:
/*!*******************************************************!*\
  !*** ./src/app/services/form-data-builder.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormDataBuilderService: () => (/* binding */ FormDataBuilderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

/**
 * Service responsible for building FormData objects for various entities
 */
class FormDataBuilderService {
  /**
   * Create FormData for any model (generic method)
   */
  createFormData(model) {
    const formData = new FormData();
    for (const key in model) {
      if (model.hasOwnProperty(key)) {
        const value = model[key];
        if (value === null || value === undefined) {
          continue;
        }
        // Handle File or FileList
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value instanceof FileList || Array.isArray(value) && value[0] instanceof File) {
          const files = Array.isArray(value) ? value : Array.from(value);
          files.forEach(file => {
            formData.append(`${key}[]`, file);
          });
        }
        // Handle Date
        else if (value instanceof Date) {
          const formattedDate = this.formatDateForLaravel(value);
          if (formattedDate) {
            formData.append(key, formattedDate);
          }
        }
        // Handle arrays
        else if (Array.isArray(value)) {
          value.forEach(item => {
            if (typeof item === 'object' && item !== null) {
              formData.append(`${key}[]`, JSON.stringify(item));
            } else {
              formData.append(`${key}[]`, item.toString());
            }
          });
        }
        // Handle booleans
        else if (typeof value === 'boolean') {
          formData.append(key, value ? '1' : '0');
        }
        // Handle objects
        else if (typeof value === 'object' && value !== null) {
          formData.append(key, JSON.stringify(value));
        }
        // Handle primitives (string, number)
        else {
          formData.append(key, value.toString());
        }
      }
    }
    return formData;
  }
  /**
   * Create FormData for user creation or update
   */
  createUserFormData(user) {
    const formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('phone', user.phone || '');
    formData.append('is_blocked', user.is_blocked ? '1' : '0');
    formData.append('otp_enabled', user.otp_enabled ? '1' : '0');
    if (user.birthday) {
      const formattedDate = this.formatDateForLaravel(user.birthday);
      if (formattedDate) {
        formData.append('birthday', formattedDate);
      }
    }
    this.appendCountryData(formData, user.available_countries);
    this.appendRolesData(formData, user.roles);
    this.appendPermissionsData(formData, user.permissions);
    if (user.photo instanceof File) {
      formData.append('photo', user.photo);
    }
    return formData;
  }
  /**
   * Append country data to FormData
   */
  appendCountryData(formData, availableCountries) {
    if (availableCountries) {
      if (Array.isArray(availableCountries) && availableCountries.length > 0) {
        const country = availableCountries[0];
        formData.append('country_id', country.id.toString());
      } else if (typeof availableCountries === 'object' && availableCountries.id) {
        formData.append('country_id', availableCountries.id.toString());
      }
    } else {
      formData.append('country_id', '');
    }
  }
  /**
   * Append roles data to FormData
   */
  appendRolesData(formData, roles) {
    if (roles && Array.isArray(roles)) {
      roles.forEach(role => {
        formData.append('roles[]', role.name);
      });
    }
  }
  /**
   * Append permissions data to FormData
   */
  appendPermissionsData(formData, permissions) {
    if (permissions && Array.isArray(permissions)) {
      permissions.forEach(permission => {
        formData.append('permissions[]', permission.name);
      });
    }
  }
  /**
   * Format date for Laravel backend (YYYY-MM-DD)
   */
  formatDateForLaravel(date) {
    if (!date) return null;
    // If already in correct format
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }
    // Convert from Date object or other string format
    const jsDate = new Date(date);
    if (isNaN(jsDate.getTime())) return null;
    return jsDate.toISOString().split('T')[0]; // Extract YYYY-MM-DD
  }
  static {
    this.ɵfac = function FormDataBuilderService_Factory(t) {
      return new (t || FormDataBuilderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormDataBuilderService,
      factory: FormDataBuilderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map