"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_manage-notifications_notifications_routes_ts"],{

/***/ 94502:
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-notifications/notifications.routes.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const routes = [{
  path: '',
  children: [{
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }, {
    path: ':activeCategory',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("src_app_pages_manage-notifications_all-notifications_all-notifications_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./all-notifications/all-notifications.component */ 73214)).then(m => m.AllNotificationsComponent),
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: false
    }
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-notifications_notifications_routes_ts.js.map