"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_settings_settings-routes_ts"],{

/***/ 37161:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings-routes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _users_users_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users/users.resolver */ 20280);

const settingsRoute = [{
  path: '',
  redirectTo: 'show',
  pathMatch: 'full'
}, {
  path: 'show',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_interfaces_User_ts-node_modules_angular_material_fesm2022_stepper_mjs"), __webpack_require__.e("default-src_app_models_user_model_ts-node_modules_ngx-formly_material_fesm2020_ngx-formly-mat-dc889a"), __webpack_require__.e("default-src_app_interfaces_setting_ts-src_app_pages_show-dynamic-card_show-dynamic-card_compo-31c667"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_settings_show-settings_show-settings_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./show-settings/show-settings.component */ 90305)).then(m => m.ShowSettingsComponent),
  resolve: {
    usersData: _users_users_resolver__WEBPACK_IMPORTED_MODULE_0__.usersResolver
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsRoute);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings-routes_ts.js.map