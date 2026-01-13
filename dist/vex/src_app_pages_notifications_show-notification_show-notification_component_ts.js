"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_notifications_show-notification_show-notification_component_ts"],{

/***/ 56836:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/notifications/show-notification/show-notification.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowNotificationComponent: () => (/* binding */ ShowNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 72354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _show_dynamic_card_show_dynamic_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../show-dynamic-card/show-dynamic-card.component */ 51735);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/user.model */ 43873);
/* harmony import */ var src_app_interfaces_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/setting */ 63431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 48503);




 // Ajustez le chemin



 // Ajustez le chemin
 // Ajustez le chemin







function ShowNotificationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement des d\u00E9tails...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ShowNotificationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Erreur !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function ShowNotificationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "vex-show-dynamic-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.notificationCardData)("showEditButton", false);
  }
}
function ShowNotificationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Aucun d\u00E9tail de notification \u00E0 afficher.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ShowNotificationComponent {
  constructor(router, cdRef, translate) {
    this.router = router;
    this.cdRef = cdRef;
    this.translate = translate;
    this.notificationCardData = null;
    this.isLoading = true;
    this.errorMessage = null;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.currentModelData = null;
    this.currentEntityType = null;
    this.translationProcessingSubscription = null;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => {
      this.loadDataForCurrentNavigation();
    });
    // Déclencher pour la navigation initiale
    setTimeout(() => {
      this.loadDataForCurrentNavigation();
    }, 0);
  }
  loadDataForCurrentNavigation() {
    if (this.translationProcessingSubscription && !this.translationProcessingSubscription.closed) {
      this.translationProcessingSubscription.unsubscribe();
    }
    this.isLoading = true;
    this.notificationCardData = null;
    this.errorMessage = null;
    this.cdRef.detectChanges();
    const navigation = this.router.getCurrentNavigation();
    if (history.state && (history.state.modelTypeData !== undefined || history.state.modelData !== undefined)) {
      this.currentModelData = history.state.modelTypeData || history.state.modelData;
      this.currentEntityType = history.state.entityType;
    } else if (navigation?.extras?.state && (navigation.extras.state['modelData'] !== undefined || navigation.extras.state['modelTypeData'] !== undefined)) {
      this.currentModelData = navigation.extras.state['modelData'] || navigation.extras.state['modelTypeData'];
      this.currentEntityType = navigation.extras.state['entityType'];
    } else {
      this.currentModelData = null;
      this.currentEntityType = null;
    }
    if (!this.currentModelData) {
      this.showError("Données de notification non disponibles");
      return;
    }
    if (!this.currentEntityType) {
      this.showError("Type d'entité de notification non disponible");
      return;
    }
    this.initTranslationsAndProcess();
  }
  initTranslationsAndProcess() {
    const currentLang = this.translate.currentLang || this.translate.defaultLang;
    if (!currentLang) {
      this.showError("Erreur de configuration de la langue.");
      return;
    }
    const langAndTranslationsReady$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.translate.getTranslation(currentLang).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
      this.showError(`Erreur chargement traductions initiales (${currentLang})`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null); // Permet à combineLatest de continuer, mais sera filtré
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(translations => !!translations)), this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(event => {
      const langToLoad = event ? event.lang : currentLang;
      return this.translate.getTranslation(langToLoad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
        this.showError(`Erreur chargement traductions (${langToLoad})`);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(translations => !!translations));
    }))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1),
    // Se complète après la première émission valide des deux sources
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.timeout)(10000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
      this.showError("Timeout lors du chargement des traductions ou des données.");
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null); // Pour que le subscribe soit atteint
    }));
    this.translationProcessingSubscription = langAndTranslationsReady$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: result => {
        if (!this.isLoading) return; // Si une erreur a déjà mis isLoading à false
        if (!result || !result[0] || !result[1]) {
          // Si l'un des flux de traduction a émis null (erreur)
          if (!this.errorMessage) {
            // Ne pas écraser un message d'erreur déjà défini par catchError
            this.showError("Problème de chargement des traductions.");
          }
          return;
        }
        setTimeout(() => {
          if (this.currentModelData && this.currentEntityType) {
            const formlyConfig = this.getAdaptedFormlyConfig(this.currentEntityType);
            if (formlyConfig) {
              this.processReceivedData(this.currentModelData, formlyConfig);
            } else {
              this.showError(`Configuration Formly non trouvée pour le type: ${this.currentEntityType}`);
            }
          } else {
            this.showError("Données ou type d'entité perdus avant le traitement.");
          }
        }, 0);
      },
      error: err => {
        this.showError("Erreur critique lors de la préparation des données.");
      }
    });
  }
  getAdaptedFormlyConfig(entityType) {
    let rawFields = [];
    switch (entityType?.toLowerCase()) {
      case 'user':
        rawFields = (0,src_app_models_user_model__WEBPACK_IMPORTED_MODULE_1__.getUserFormlyFields)(this.translate).flatMap(f => f.fieldGroup ?? [f]);
        break;
      case 'setting':
      case 'settings':
        rawFields = (0,src_app_interfaces_setting__WEBPACK_IMPORTED_MODULE_2__.getSettingFormlyFields)(this.translate).flatMap(f => f.fieldGroup ?? [f]);
        break;
      default:
        // Si le type est inconnu, on retourne null pour que processReceivedData puisse afficher une erreur
        return null;
    }
    // Si le type est connu mais qu'il n'y a pas de champs, retourner un tableau vide est acceptable
    if (rawFields.length === 0) {
      return [];
    }
    // Adapter les champs pour l'affichage (readonly, hide, etc.)
    return rawFields.map(field => ({
      ...field,
      props: {
        ...field.props,
        readonly: true
      },
      expressions: {
        ...field.expressions,
        hide: fld => {
          const modelValue = fld.model?.[fld.key];
          const isHiddenByDefault = typeof field.expressions?.hide === 'function' ? field.expressions.hide(fld) : field.expressions?.hide;
          if (isHiddenByDefault) return true;
          return (modelValue === null || modelValue === undefined || modelValue === '') && typeof modelValue !== 'boolean' && typeof modelValue !== 'number';
        }
      }
    }));
  }
  processReceivedData(modelData, formlyConfig) {
    try {
      this.notificationCardData = this.transformModelToCardData(modelData, formlyConfig);
      this.errorMessage = null;
    } catch (error) {
      this.showError("Erreur lors de la transformation des données pour l'affichage");
      return;
    }
    if (!this.notificationCardData || this.notificationCardData.length === 0) {
      // Géré par le template si pas d'erreur
    }
    this.isLoading = false;
    this.cdRef.detectChanges();
  }
  showError(message) {
    const needsUpdate = this.isLoading || this.errorMessage !== message || this.notificationCardData !== null;
    this.errorMessage = message;
    this.isLoading = false;
    this.notificationCardData = null;
    if (needsUpdate) {
      this.cdRef.detectChanges();
    }
  }
  transformModelToCardData(model, formlyFields) {
    let titleKey = 'NOTIFICATION_DETAIL.GENERIC_TITLE';
    let descriptionKey = 'NOTIFICATION_DETAIL.GENERIC_DESCRIPTION';
    let icon = 'notifications_active';
    if (this.currentEntityType) {
      switch (this.currentEntityType.toLowerCase()) {
        case 'user':
          titleKey = 'NOTIFICATION_DETAIL.USER_TITLE';
          descriptionKey = 'NOTIFICATION_DETAIL.USER_DESCRIPTION';
          icon = 'account_circle';
          break;
        case 'setting':
        case 'settings':
          titleKey = 'NOTIFICATION_DETAIL.SETTINGS_TITLE';
          descriptionKey = 'NOTIFICATION_DETAIL.SETTINGS_DESCRIPTION';
          icon = 'settings';
          break;
      }
    }
    return [{
      title: this.translate.instant(titleKey),
      description: this.translate.instant(descriptionKey),
      icon: icon,
      form: formlyFields,
      model: {
        ...model
      },
      isExpanded: true,
      editing: false,
      type: `${this.currentEntityType || 'unknown'}NotificationDetailView`,
      isLoading: false
    }];
  }
  goBack() {
    this.router.navigate(['/index/notifications']);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function ShowNotificationComponent_Factory(t) {
      return new (t || ShowNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ShowNotificationComponent,
      selectors: [["app-show-notification"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 4,
      consts: [[1, "page-container", "p-4", "md:p-6"], [1, "flex", "items-center", "mb-6"], ["mat-icon-button", "", "aria-label", "Retour \u00E0 la liste des notifications", 1, "mr-2", 3, "click"], [1, "text-2xl", "font-semibold"], ["class", "flex justify-center items-center py-10", 4, "ngIf"], ["class", "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "text-center py-10", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "py-10"], ["diameter", "50"], [1, "ml-4"], ["role", "alert", 1, "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative"], [1, "font-bold"], [1, "block", "sm:inline"], [3, "data", "showEditButton"], [1, "text-center", "py-10"]],
      template: function ShowNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowNotificationComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Autres Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ShowNotificationComponent_div_7_Template, 4, 0, "div", 4)(8, ShowNotificationComponent_div_8_Template, 5, 1, "div", 5)(9, ShowNotificationComponent_div_9_Template, 2, 2, "div", 6)(10, ShowNotificationComponent_div_10_Template, 3, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.notificationCardData && ctx.notificationCardData.length > 0 && !ctx.isLoading && !ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.notificationCardData && !ctx.isLoading && !ctx.errorMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _show_dynamic_card_show_dynamic_card_component__WEBPACK_IMPORTED_MODULE_0__.ShowDynamicCardComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 72354:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/timeout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isDate */ 15602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/innerFrom */ 82645);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/createErrorClass */ 32384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/executeSchedule */ 20310);







const TimeoutError = (0,_util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function TimeoutErrorImpl(info = null) {
  _super(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  this.info = info;
});
function timeout(config, schedulerArg) {
  const {
    first,
    each,
    with: _with = timeoutErrorFactory,
    scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler,
    meta = null
  } = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config;
  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    let originalSourceSubscription;
    let timerSubscription;
    let lastValue = null;
    let seen = 0;
    const startTimer = delay => {
      timerSubscription = (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__.executeSchedule)(subscriber, scheduler, () => {
        try {
          originalSourceSubscription.unsubscribe();
          (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.innerFrom)(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__.createOperatorSubscriber)(subscriber, value => {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, () => {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_show-notification_show-notification_component_ts.js.map