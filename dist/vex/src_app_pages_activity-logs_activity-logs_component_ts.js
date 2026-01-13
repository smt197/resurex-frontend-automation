"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_activity-logs_activity-logs_component_ts"],{

/***/ 34687:
/*!****************************************************************!*\
  !*** ./src/app/pages/activity-logs/activity-logs.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityLogsComponent: () => (/* binding */ ActivityLogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _components_shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared/page-header/page-header.component */ 76112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/Response-globalServer */ 77157);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _components_widgets_widget_table_widget_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/widgets/widget-table/widget-table.component */ 35894);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var src_app_services_CustomPaginatorIntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/CustomPaginatorIntl */ 97742);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _dashboard_dashboard_analytics_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/dashboard-analytics/dashboard.service */ 66241);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);



























function ActivityLogsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ActivityLogsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ["Dashboard", "Activity-Logs"];
class ActivityLogsComponent {
  constructor(dashboardService, snackbar) {
    this.dashboardService = dashboardService;
    this.snackbar = snackbar;
    this.logs = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl();
    this.defaulPage = 1;
    this.pagination = {
      current_page: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_1__.PaginationStandard.current_page,
      per_page: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_1__.PaginationStandard.pageSize,
      total: src_app_interfaces_Response_globalServer__WEBPACK_IMPORTED_MODULE_1__.PaginationStandard.total
    };
    this.title = '';
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_6__.DestroyRef);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.rangeGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
    });
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(false);
    this.tableData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)([]);
    this.columns = [{
      label: 'log.description',
      property: 'description',
      type: 'text',
      icon: 'description',
      visible: true
    }, {
      label: 'log.event',
      property: 'event',
      type: 'text',
      icon: 'event_note',
      visible: true
    }, {
      label: 'log.causer',
      property: 'causer_type',
      type: 'text',
      icon: 'person_outline',
      visible: true
    }, {
      label: 'log.created_at',
      property: 'created_at',
      type: 'text',
      icon: 'calendar_today',
      visible: true
    }];
    this.visibleColumns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => this.columns.filter(column => column.visible).map(column => column.property));
  }
  ngOnInit() {
    this.fetchData(this.defaulPage);
    this.search();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPageChange(event) {
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.fetchData(this.pagination.current_page);
  }
  search() {
    this.searchCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(search => {
      this.fetchData(1, search);
    });
    this.rangeGroup.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      this.fetchData(1, this.searchCtrl.value);
    });
  }
  fetchData(page = 1, search = '') {
    const sort = this.sort?.active;
    const order = this.sort?.direction;
    const start = this.rangeGroup.get('start')?.value;
    const end = this.rangeGroup.get('end')?.value;
    const dateDebut = start ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(start, 'yyyy-MM-dd 00:00:00', 'en-US') : undefined;
    const dateFin = end ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatDate)(end, 'yyyy-MM-dd 23:59:59', 'en-US') : undefined;
    this.dashboardService.getAllLogs(page, this.pagination.per_page, search, sort || 'created_at',
    // par défaut trié par 'created_at'
    order || 'desc',
    // ordre décroissant par défaut
    dateDebut, dateFin).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.updateDataSource(response);
        this.isLoading.set(false);
        this.title = response.message;
      },
      error: () => {
        this.snackbar.open('Error loading logs', 'Close', {
          duration: 3000
        });
        this.isLoading.set(false);
      }
    });
  }
  updateDataSource(response) {
    this.logs = response.data || [];
    this.dataSource.data = this.logs;
    this.tableData.set(this.logs);
    if (response.pagination) {
      this.pagination = response.pagination;
    }
  }
  ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) {
      this.dataSource.sort = this.sort;
      this.sort.sortChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
        this.fetchData(1, this.searchCtrl.value); // Recharger au tri
      });
    }
  }
  static {
    this.ɵfac = function ActivityLogsComponent_Factory(t) {
      return new (t || ActivityLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dashboard_dashboard_analytics_dashboard_service__WEBPACK_IMPORTED_MODULE_5__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ActivityLogsComponent,
      selectors: [["vex-activity-logs"]],
      viewQuery: function ActivityLogsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        columns: "columns"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorIntl,
        useClass: src_app_services_CustomPaginatorIntl__WEBPACK_IMPORTED_MODULE_3__.CustomPaginatorIntl
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 30,
      consts: [[3, "title", "breadcrumbs", "layoutControl"], [1, "border-1", "-mt-14", "px-6", "py-1", "flex", "items-center"], [1, "m-0", "title", "flex-auto"], [1, "mt-8", "ml-2", "flex", "justify-between", "items-center"], ["appearance", "outline", 1, "w-1/3", "mr-2"], ["matInput", "", 3, "formControl", "placeholder"], [1, "mr-2"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", 3, "placeholder"], ["matEndDate", "", "formControlName", "end", 3, "placeholder"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-button", "", "matDateRangePickerCancel", "", 1, "flex", "mr-4"], ["mat-raised-button", "", "matDateRangePickerApply", ""], [1, "sm:col-span-2", 3, "columns", "data"]],
      template: function ActivityLogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "vex-page-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "mat-form-field", 4)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-date-range-input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "mat-datepicker-toggle", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-date-range-picker", null, 11)(24, "mat-date-range-picker-actions")(25, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Apply");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ActivityLogsComponent_Conditional_29_Template, 2, 0, "mat-error")(30, ActivityLogsComponent_Conditional_30_Template, 2, 0, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "vex-widget-table", 14);
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.title)("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](29, _c0))("layoutControl", ctx.layoutCtrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 17, "log.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 19, "user.search"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.searchCtrl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 21, "user.mot_cle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 23, "user.filter_date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.rangeGroup)("rangePicker", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 25, "user.mot_cle_date_debut"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 27, "user.mot_cle_date_fin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](29, ctx.rangeGroup.controls.start.hasError("matStartDateInvalid") ? 29 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](30, ctx.rangeGroup.controls.end.hasError("matEndDateInvalid") ? 30 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columns", ctx.columns)("data", ctx.tableData());
        }
      },
      dependencies: [_components_shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _components_widgets_widget_table_widget_table_component__WEBPACK_IMPORTED_MODULE_2__.WidgetTableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangePicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerApply, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 35894:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/components/widgets/widget-table/widget-table.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetTableComponent: () => (/* binding */ WidgetTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);

















function WidgetTableComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, column_r3.label), " ");
  }
}
function WidgetTableComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", column_r3.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r9[column_r3.property], " ");
  }
}
function WidgetTableComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WidgetTableComponent_ng_container_3_ng_container_1_th_1_Template, 3, 3, "th", 9)(2, WidgetTableComponent_ng_container_3_ng_container_1_td_2_Template, 2, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matColumnDef", column_r3.property);
  }
}
function WidgetTableComponent_ng_container_3_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, column_r3.label), " ");
  }
}
function WidgetTableComponent_ng_container_3_ng_container_2_td_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);
  }
}
function WidgetTableComponent_ng_container_3_ng_container_2_td_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 17);
  }
}
function WidgetTableComponent_ng_container_3_ng_container_2_td_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 18);
  }
}
function WidgetTableComponent_ng_container_3_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WidgetTableComponent_ng_container_3_ng_container_2_td_2_div_1_Template, 1, 0, "div", 13)(2, WidgetTableComponent_ng_container_3_ng_container_2_td_2_div_2_Template, 1, 0, "div", 14)(3, WidgetTableComponent_ng_container_3_ng_container_2_td_2_div_3_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", column_r3.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r15[column_r3.property] === "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r15[column_r3.property] === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r15[column_r3.property] === "warn");
  }
}
function WidgetTableComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WidgetTableComponent_ng_container_3_ng_container_2_th_1_Template, 3, 3, "th", 9)(2, WidgetTableComponent_ng_container_3_ng_container_2_td_2_Template, 4, 4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matColumnDef", column_r3.property);
  }
}
function WidgetTableComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WidgetTableComponent_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 7)(2, WidgetTableComponent_ng_container_3_ng_container_2_Template, 3, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", column_r3.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", column_r3.type === "badge");
  }
}
function WidgetTableComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 19);
  }
}
function WidgetTableComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
class WidgetTableComponent {
  constructor() {
    this.pageSize = 6;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    if (changes['columns']) {
      this.visibleColumns = this.columns.map(column => column.property);
    }
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
  static {
    this.ɵfac = function WidgetTableComponent_Factory(t) {
      return new (t || WidgetTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: WidgetTableComponent,
      selectors: [["vex-widget-table"]],
      viewQuery: function WidgetTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        data: "data",
        columns: "columns",
        pageSize: "pageSize"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 5,
      consts: [[1, "card", "overflow-hidden", "w-full", "flex", "flex-col"], [1, "overflow-auto"], ["stagger40ms", "", "mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover transition duration-400 ease-out-swift cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngClass"], ["class", "w-3 h-3 rounded-full bg-green-600 cursor-pointer", "matTooltip", "Ready to ship", 4, "ngIf"], ["class", "w-3 h-3 rounded-full bg-orange-600 cursor-pointer", "matTooltip", "Pending Payment", 4, "ngIf"], ["class", "w-3 h-3 rounded-full bg-red-600 cursor-pointer", "matTooltip", "Missing Payment", 4, "ngIf"], ["matTooltip", "Ready to ship", 1, "w-3", "h-3", "rounded-full", "bg-green-600", "cursor-pointer"], ["matTooltip", "Pending Payment", 1, "w-3", "h-3", "rounded-full", "bg-orange-600", "cursor-pointer"], ["matTooltip", "Missing Payment", 1, "w-3", "h-3", "rounded-full", "bg-red-600", "cursor-pointer"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "transition", "duration-400", "ease-out-swift", "cursor-pointer"]],
      template: function WidgetTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WidgetTableComponent_ng_container_3_Template, 3, 2, "ng-container", 3)(4, WidgetTableComponent_tr_4_Template, 1, 0, "tr", 4)(5, WidgetTableComponent_tr_5_Template, 1, 1, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-paginator", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSize", ctx.pageSize);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule],
      encapsulation: 2,
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__.stagger40ms]
      }
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
//# sourceMappingURL=src_app_pages_activity-logs_activity-logs_component_ts.js.map