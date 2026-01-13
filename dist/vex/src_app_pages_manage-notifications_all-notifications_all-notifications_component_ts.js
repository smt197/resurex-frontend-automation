"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_manage-notifications_all-notifications_all-notifications_component_ts"],{

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

/***/ 73214:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/manage-notifications/all-notifications/all-notifications.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllNotificationsComponent: () => (/* binding */ AllNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-right.animation */ 95903);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/scale-fade-in.animation */ 24555);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/scale-in.animation */ 16962);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/utils/track-by */ 82087);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 20943);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _card_notification_card_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-notification/card-notification.component */ 3659);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/websocket.service */ 30765);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth-service */ 14023);





























function AllNotificationsComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("active", _r5.isActive)("disabled", link_r4.disabled || ctx_r0.isLoading)("routerLink", link_r4.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, link_r4.label), " ");
  }
}
function AllNotificationsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function AllNotificationsComponent_ng_container_16_div_3_vex_card_notification_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "vex-card-notification", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("markAsRead", function AllNotificationsComponent_ng_container_16_div_3_vex_card_notification_1_Template_vex_card_notification_markAsRead_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const notification_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.markAsRead(notification_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined)("notification", notification_r11);
  }
}
function AllNotificationsComponent_ng_container_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AllNotificationsComponent_ng_container_16_div_3_vex_card_notification_1_Template, 1, 2, "vex-card-notification", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notifications_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@stagger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", notifications_r6)("ngForTrackBy", ctx_r7.trackById);
  }
}
function AllNotificationsComponent_ng_container_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@scaleFadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "notifications.no_notifications"));
  }
}
function AllNotificationsComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AllNotificationsComponent_ng_container_16_div_3_Template, 2, 3, "div", 21)(4, AllNotificationsComponent_ng_container_16_ng_template_4_Template, 5, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 23)(7, "mat-paginator", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("page", function AllNotificationsComponent_ng_container_16_Template_mat_paginator_page_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const notifications_r6 = ctx.ngIf;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", notifications_r6.length > 0)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("length", ctx_r3.pagination.total)("pageIndex", ctx_r3.pagination.current_page - 1)("pageSize", ctx_r3.pagination.per_page);
  }
}
class AllNotificationsComponent {
  constructor(route, websocketService, authService, cd) {
    this.route = route;
    this.websocketService = websocketService;
    this.authService = authService;
    this.cd = cd;
    this.title = '';
    this.activeCategory = 'all';
    this.pagination = {
      current_page: 1,
      per_page: 10,
      total: 0
    };
    // Ce BehaviorSubject est le déclencheur pour charger les données
    this.paginationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject({
      page: 1,
      unreadOnly: true
    });
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.unreadCount = 0;
    this.isLoading = false;
    this.links = [{
      label: 'notification_onglet.non_lues',
      route: '../all'
    }, {
      label: 'notification_onglet.histories',
      route: '../histories'
    }];
    this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_5__.trackById;
    // On initialise l'observable dans le constructeur.
    this.notifications$ = this.paginationSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this.isLoading = true),
    // 1. Activer le spinner
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)(params =>
    // 2. Lancer l'appel API. switchMap annule les requêtes précédentes.
    this.websocketService.loadNotifications(params.page, params.unreadOnly).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.catchError)(error => {
      console.error('Erreur lors du chargement des notifications', error);
      // En cas d'erreur, on arrête le chargement et on retourne un tableau vide.
      this.isLoading = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
        data: [],
        meta: {
          total: 0,
          current_page: 1,
          per_page: 5,
          unreadnotificationcount: 0
        },
        message: 'Erreur de chargement'
      });
    }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(response => {
      // 3. Mettre à jour les "effets de bord" : pagination, titre, etc.
      this.pagination.total = response.meta.total;
      this.pagination.current_page = response.meta.current_page;
      this.pagination.per_page = response.meta.per_page;
      this.unreadCount = response.meta.unreadnotificationcount;
      this.title = response.message;
      this.isLoading = false; // 4. Arrêter le spinner
      this.cd.detectChanges(); // Forcer la détection de changement si nécessaire
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(response => response.data) // 5. Finalement, on ne retourne que le tableau de données pour le template.
    );
  }
  ngOnInit() {
    this.handleRouteChange();
    this.setupWebSocket(); // Assurez-vous que cette méthode est appelée
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPageChange(event) {
    // Pas besoin de mettre isLoading ici, le stream notifications$ le gère
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    const unreadOnly = this.activeCategory === 'all';
    // Déclencher le rechargement en publiant les nouveaux paramètres
    this.paginationSubject.next({
      page: this.pagination.current_page,
      unreadOnly
    });
  }
  handleRouteChange() {
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroy$)).subscribe(paramMap => {
      this.activeCategory = paramMap.get('activeCategory') || 'all';
      const unreadOnly = this.activeCategory === 'all';
      // Reset la pagination et déclenche le chargement initial pour cet onglet
      this.pagination.current_page = 1;
      this.paginationSubject.next({
        page: this.pagination.current_page,
        unreadOnly
      });
    });
  }
  setupWebSocket() {
    const userId = this.authService.user?.id;
    if (userId) {
      this.websocketService.listenPrivateWebsocket('.new.user.notification', `user.${userId}`, () => this.refreshData() // On rafraîchit les données actuelles
      );
      this.websocketService.unreadCountNotification$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroy$)).subscribe(count => {
        this.unreadCount = count;
        this.cd.detectChanges();
      });
    }
  }
  markAsRead(notification) {
    this.websocketService.markAsRead(notification.id).subscribe({
      next: () => {
        this.refreshData(); // On rafraîchit pour mettre à jour la liste et le compteur
      },
      error: err => console.error('Erreur lors du marquage comme lue', err)
    });
  }
  // Fonction utilitaire pour rafraîchir les données de la vue actuelle
  refreshData() {
    this.paginationSubject.next(this.paginationSubject.value);
  }
  getNotificationIcon(isRead) {
    return isRead ? 'mat:notifications_none' : 'mat:notifications_active';
  }
  getNotificationColor(isRead) {
    return isRead ? 'text-gray-400' : 'text-primary-600';
  }
  static {
    this.ɵfac = function AllNotificationsComponent_Factory(t) {
      return new (t || AllNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_8__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AllNotificationsComponent,
      selectors: [["vex-all-notifications"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 18,
      vars: 13,
      consts: [[1, "h-full", "flex", "flex-col", "min-h-0"], [1, "flex-shrink-0", "p-6", "pb-0", "bg-foreground", "shadow-b", "border-b"], [1, "container", "px-0"], [1, "display-1", "font-bold", "mt-0", "mb-4", "flex", "items-center"], [1, "w-12", "h-12", "rounded-full", "text-primary-600", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-600/10"], ["svgIcon", "mat:notifications"], [1, "block"], [1, "flex", "items-center"], ["mat-tab-nav-bar", "", 1, "border-0", "flex-auto", 3, "tabPanel"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], ["tabPanel", ""], [1, "relative", "flex-1", "min-h-0", "flex", "flex-col"], ["class", "absolute inset-0 flex items-center justify-center z-10 bg-white bg-opacity-75", 4, "ngIf"], [1, "flex-1", "min-h-0", "flex", "flex-col"], [4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "z-10", "bg-white", "bg-opacity-75"], ["diameter", "50"], [1, "flex-1", "min-h-0", "overflow-y-auto"], [1, "p-6"], ["class", "container px-0 mx-auto space-y-4", 4, "ngIf", "ngIfElse"], ["noNotifications", ""], [1, "flex-shrink-0", "border-t", "bg-white"], ["aria-label", "S\u00E9lectionner une page", 3, "length", "pageIndex", "pageSize", "page"], [1, "container", "px-0", "mx-auto", "space-y-4"], [3, "notification", "markAsRead", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "notification", "markAsRead"], [1, "min-h-[400px]", "flex", "flex-col", "items-center", "justify-center"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"]],
      template: function AllNotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 7)(9, "nav", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, AllNotificationsComponent_a_10_Template, 4, 6, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "mat-tab-nav-panel", null, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AllNotificationsComponent_div_14_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, AllNotificationsComponent_ng_container_16_Template, 8, 5, "ng-container", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@scaleIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInRight", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tabPanel", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.links);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-0", ctx.isLoading)("invisible", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 11, ctx.notifications$));
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabNavPanel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabLink, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinner, _card_notification_card_notification_component__WEBPACK_IMPORTED_MODULE_6__.CardNotificationComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__.scaleIn400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__.stagger40ms, _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInUp400ms, _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleFadeIn400ms]
      }
    });
  }
}

/***/ }),

/***/ 3659:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/manage-notifications/all-notifications/card-notification/card-notification.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardNotificationComponent: () => (/* binding */ CardNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 48503);









class CardNotificationComponent {
  constructor() {
    this.showMarkAsRead = true;
    this.markAsRead = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onMarkAsRead() {
    this.notification.is_read = true;
    this.markAsRead.emit();
  }
  getNotificationIcon(isRead) {
    return isRead ? 'mat:notifications_none' : 'mat:notifications_active';
  }
  getNotificationColor(isRead) {
    return isRead ? 'text-gray-400' : 'text-primary-600';
  }
  static {
    this.ɵfac = function CardNotificationComponent_Factory(t) {
      return new (t || CardNotificationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardNotificationComponent,
      selectors: [["vex-card-notification"]],
      inputs: {
        notification: "notification",
        showMarkAsRead: "showMarkAsRead"
      },
      outputs: {
        markAsRead: "markAsRead"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 11,
      consts: [[1, "cursor-pointer", 3, "click"], [1, "backdrop-blur-3xl", "bg-white/30", "card", "overflow-hidden", "mt-4", "shadow-2xl", "p-4", "rounded-lg", "border-[0.5px]", "border-transparent", "hover:border-primary-500", "transition-all", "duration-200", "w-full", "mb-2"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "sm:justify-between", "gap-3", "w-full"], [1, "flex-1", "min-w-0"], [1, "flex", "items-start", "gap-3"], [1, "mt-4", "flex-shrink-0", "w-5", "h-5", 3, "svgIcon"], [1, "capitalize", "font-semibold", "text-gray-900", "truncate", "mb-1"], [1, "text-gray-800", "text-sm", "font-light", "leading-relaxed", "break-words"], [1, "flex-shrink-0", "sm:ml-4"], [1, "font-light", "text-gray-800", "text-sm", "whitespace-nowrap", "sm:text-right"]],
      template: function CardNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardNotificationComponent_Template_a_click_0_listener($event) {
            ctx.onMarkAsRead();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getNotificationColor(ctx.notification.is_read));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.getNotificationIcon(ctx.notification.is_read));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "notifications.title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.notification.data.message, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, ctx.notification.created_at, "medium"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFuYWdlLW5vdGlmaWNhdGlvbnMvYWxsLW5vdGlmaWNhdGlvbnMvY2FyZC1ub3RpZmljYXRpb24vY2FyZC1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50cnVuY2F0ZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWluLXctMCB7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-notifications_all-notifications_all-notifications_component_ts.js.map