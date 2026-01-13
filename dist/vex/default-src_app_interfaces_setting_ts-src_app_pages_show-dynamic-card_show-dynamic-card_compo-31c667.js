"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_interfaces_setting_ts-src_app_pages_show-dynamic-card_show-dynamic-card_compo-31c667"],{

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

/***/ 63431:
/*!***************************************!*\
  !*** ./src/app/interfaces/setting.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSettingFormlyFields: () => (/* binding */ getSettingFormlyFields)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);

function getSettingFormlyFields(translate) {
  return [
  // Première ligne - Nom du site et URL
  {
    fieldGroupClassName: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    fieldGroup: [{
      key: 'site_name',
      type: 'input',
      props: {
        label: translate.instant('form.site_name.label'),
        required: true,
        icon: 'title'
      },
      validators: {
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(100)]
      },
      validation: {
        messages: {
          required: translate.instant('form.site_name.validation.required'),
          maxlength: translate.instant('form.site_name.validation.maxlength')
        }
      }
    }, {
      key: 'site_subtitle',
      type: 'input',
      props: {
        label: translate.instant('form.site_subtitle.label'),
        required: true,
        icon: 'title'
      },
      validators: {
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(100)]
      },
      validation: {
        messages: {
          required: translate.instant('form.site_subtitle.validation.required'),
          maxlength: translate.instant('form.site_subtitle.validation.maxlength')
        }
      }
    }, {
      key: 'site_web',
      type: 'input',
      props: {
        label: translate.instant('form.site_web.label'),
        placeholder: translate.instant('form.site_web.placeholder'),
        required: true,
        icon: 'language'
      },
      validators: {
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
      },
      validation: {
        messages: {
          required: translate.instant('form.site_web.validation.required'),
          pattern: translate.instant('form.site_web.validation.pattern')
        }
      }
    }]
  },
  // Description (pleine largeur)
  {
    className: 'w-full',
    fieldGroup: [{
      key: 'site_description',
      type: 'textarea',
      props: {
        label: translate.instant('form.site_description.label'),
        placeholder: translate.instant('form.site_description.placeholder'),
        required: false,
        rows: 3,
        icon: 'description'
      },
      validators: {
        validation: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(500)]
      },
      validation: {
        messages: {
          maxlength: translate.instant('form.site_description.validation.maxlength')
        }
      }
    }]
  },
  // Statut (pleine largeur)
  {
    className: 'w-full',
    fieldGroup: [{
      key: 'site_active',
      type: 'checkbox',
      props: {
        label: translate.instant('form.site_active.label'),
        icon: 'power_settings_new'
      },
      defaultValue: true
    }]
  },
  // Logo du site
  {
    className: 'w-full',
    fieldGroup: [{
      key: 'site_logo',
      type: 'fileimage',
      props: {
        label: translate.instant('form.site_logo.label'),
        required: false,
        accept: 'image/*'
      }
    }]
  }];
}

/***/ }),

/***/ 51735:
/*!************************************************************************!*\
  !*** ./src/app/pages/show-dynamic-card/show-dynamic-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowDynamicCardComponent: () => (/* binding */ ShowDynamicCardComponent)
/* harmony export */ });
/* harmony import */ var C_laragon_www_resurex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-formly/core */ 74385);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-formly/material */ 82417);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 10444);
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/animations/fade-in-right.animation */ 95903);
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/animations/scale-in.animation */ 16962);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 42465);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ 28604);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 49524);





























function ShowDynamicCardComponent_mat_expansion_panel_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cardData_r1.description, " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.toggleEditMode(cardData_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cardData_r1.editing ? "close" : "edit");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r14.getImageUrl(cardData_r1), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r14.getPhotoFieldKey(cardData_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r14.getPhotoFieldKey(cardData_r1), " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_3_div_2_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "formly-form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 25)(5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_3_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.toggleEditMode(cardData_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_3_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.submitForm($event, cardData_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.hasPhotoField(cardData_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx_r8.form)("fields", cardData_r1.form)("model", cardData_r1.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r8.form.invalid);
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r22.getImageUrl(cardData_r1), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r22.getPhotoFieldKey(cardData_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r22.getPhotoFieldKey(cardData_r1), " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r27.getRolesNames(cardData_r1.model[field_r25.key]) || "-", " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r28.getPermissionsNames(cardData_r1.model[field_r25.key]) || "-", " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 51);
  }
  if (rf & 2) {
    const country_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", country_r38.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", country_r38.country_name || "Drapeau du pays");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", country_r38.country_code, ") ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", country_r38.dial_code, " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_img_2_Template, 1, 2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_span_5_Template, 2, 1, "span", 50)(6, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_span_6_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const country_r38 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", country_r38.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](country_r38.country_name || "Non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", country_r38.country_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", country_r38.dial_code);
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Aucun pays s\u00E9lectionn\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_container_1_Template, 7, 4, "ng-container", 13)(2, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_ng_template_2_Template, 2, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r29.getDisplayCountry(cardData_r1.model.available_countries))("ngIfElse", _r37);
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r30.getValue(cardData_r1.model, ctx_r30.getSafeKey(field_r25.key)) || "-", " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 43)(5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_6_Template, 2, 1, "ng-container", 45)(7, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_7_Template, 2, 1, "ng-container", 45)(8, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_8_Template, 4, 2, "ng-container", 45)(9, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_ng_container_9_Template, 2, 1, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const field_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((field_r25.props == null ? null : field_r25.props["icon"]) || "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", field_r25.key === "roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", field_r25.key === "permissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", field_r25.key === "available_countries");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", field_r25.key !== "roles" && field_r25.key !== "permissions" && field_r25.key !== "preferred_language" && field_r25.key !== "available_countries");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (field_r25.props == null ? null : field_r25.props.label) || field_r25.key, " ");
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_div_1_Template, 12, 6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const field_r25 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r23.isPhotoField(field_r25));
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_div_1_Template, 5, 3, "div", 33)(2, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_ng_container_2_Template, 2, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.hasPhotoField(cardData_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", cardData_r1.form);
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_button_2_Template, 3, 1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_3_Template, 9, 5, "div", 18)(4, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_div_4_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cardData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.showEditButton && !cardData_r1.isLoading && cardData_r1.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", cardData_r1.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !cardData_r1.editing);
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54)(1, "div", 55)(2, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Chargement en cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-progress-spinner", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ShowDynamicCardComponent_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-expansion-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("opened", function ShowDynamicCardComponent_mat_expansion_panel_1_Template_mat_expansion_panel_opened_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);
      const cardData_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](cardData_r1.isExpanded = true);
    })("closed", function ShowDynamicCardComponent_mat_expansion_panel_1_Template_mat_expansion_panel_closed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);
      const cardData_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](cardData_r1.isExpanded = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-expansion-panel-header", 3)(2, "div", 4)(3, "div", 5)(4, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 7)(7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ShowDynamicCardComponent_mat_expansion_panel_1_p_9_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ShowDynamicCardComponent_mat_expansion_panel_1_ng_container_16_Template, 5, 3, "ng-container", 13)(17, ShowDynamicCardComponent_mat_expansion_panel_1_ng_template_17_Template, 5, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cardData_r1 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", cardData_r1.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cardData_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cardData_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", cardData_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 9, cardData_r1.isExpanded ? "global.expansion.Unfolded" : "global.expansion.Folded"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("rotate-0", cardData_r1.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !cardData_r1.isLoading)("ngIfElse", _r5);
  }
}
class ShowDynamicCardComponent {
  constructor(fb, cd, translate, cdRef) {
    this.fb = fb;
    this.cd = cd;
    this.translate = translate;
    this.cdRef = cdRef;
    this.title = '';
    this.breadcrumbs = ['Dashboard', 'Settings'];
    this.showLayoutToggle = true;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('fullwidth');
    this.data = [];
    this.showEditButton = true;
    this.editToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.submitData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this._cachedImageUrls = {};
    this._lastPhotoRefs = {};
    this.form = this.fb.group({});
  }
  // Initialisation de l'état ouvert/fermé pour chaque carte
  ngOnInit() {
    // Initialiser l'état isExpanded si non défini
    this.data.forEach(card => {
      if (card.isExpanded === undefined) {
        card.isExpanded = false; // Par défaut, les cartes sont fermées
      }
    });
  }
  getTranslatedLabel(key) {
    return this.translate.instant(key);
  }
  trackByFn(index, item) {
    if (!item) return index.toString();
    return item.title ? `${item.title}-${index}` : index.toString();
  }
  getPhotoFieldKey(cardData) {
    const photoField = cardData?.form?.find(field => this.isPhotoField(field));
    return photoField?.props?.label || this.getSafeKey(photoField?.key) || '';
  }
  hasPhotoField(cardData) {
    return cardData?.form?.some(field => this.isPhotoField(field));
  }
  isPhotoField(field) {
    return field.type === 'fileimage' || field.key === 'photo' || field.key === 'site_logo';
  }
  getPhotoValue(cardData) {
    const photoField = cardData?.form?.find(field => this.isPhotoField(field));
    const key = this.getSafeKey(photoField?.key);
    const photoValue = photoField ? this.getValue(cardData.model, key) : '';
    return photoValue || 'assets/img/logo/logo.svg';
  }
  getSafeKey(key) {
    if (key === undefined) return '';
    if (Array.isArray(key)) return key.join('.');
    return key.toString();
  }
  getValue(obj, key) {
    if (!obj || !key) return '';
    return key.split('.').reduce((o, i) => o?.[i], obj) ?? '';
  }
  // Ajoutez cette méthode pour gérer le toggle de manière asynchrone
  toggleEditMode(cardData, event) {
    var _this = this;
    return (0,C_laragon_www_resurex_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      _this.editToggle.emit(cardData);
    })();
  }
  // Méthode utilitaire pour formater la date en YYYY-MM-DD
  isAnyCardEditing() {
    return this.data.some(card => card.editing === true);
  }
  submitForm(event, cardData) {
    event.stopPropagation(); // Empêche la propagation
    this.submitData.emit(cardData);
  }
  getRolesNames(roles) {
    if (!roles) return '-';
    return roles.map(role => typeof role === 'string' ? role : role.display_name).join(', ');
  }
  getPermissionsNames(permissions) {
    if (!permissions) return '-';
    return permissions.map(permission => typeof permission === 'string' ? permission : permission.display_name).join(', ');
  }
  getImageUrl(cardData) {
    const photoField = cardData?.form?.find(field => this.isPhotoField(field));
    if (!photoField) return 'assets/img/logo/logo.svg';
    const key = this.getSafeKey(photoField.key);
    const photoValue = this.form.get(key)?.value || this.getValue(cardData.model, key);
    const cardId = this.getCardId(cardData);
    // Si la photo a changé, on nettoie le cache
    if (this._lastPhotoRefs[cardId] !== photoValue) {
      this.clearImageCache(cardId);
      this._lastPhotoRefs[cardId] = photoValue;
    }
    if (!this._cachedImageUrls[cardId]) {
      if (photoValue instanceof File) {
        this._cachedImageUrls[cardId] = URL.createObjectURL(photoValue);
      } else if (typeof photoValue === 'string' && photoValue) {
        this._cachedImageUrls[cardId] = photoValue;
      } else {
        this._cachedImageUrls[cardId] = 'assets/img/logo/logo.svg';
      }
    }
    return this._cachedImageUrls[cardId];
  }
  clearImageCache(cardId) {
    const url = this._cachedImageUrls[cardId];
    if (url && url.startsWith('blob:')) {
      URL.revokeObjectURL(url);
    }
    delete this._cachedImageUrls[cardId];
    delete this._lastPhotoRefs[cardId];
  }
  ngOnDestroy() {
    Object.values(this._cachedImageUrls).forEach(url => {
      if (url?.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    });
    this._cachedImageUrls = {};
    this._lastPhotoRefs = {};
  }
  getCardId(cardData) {
    return `${cardData.type}-${cardData.title}-${cardData.model?.id || ''}`;
  }
  // Modifiez les méthodes panelOpened et panelClosed comme suit :
  panelOpened(cardData) {
    setTimeout(() => {
      cardData.isExpanded = true;
      this.cdRef.detectChanges();
    });
  }
  getDisplayCountry(countryData) {
    if (!countryData) return null;
    // Si c'est un tableau non vide, retourne le premier élément
    if (Array.isArray(countryData) && countryData.length > 0) {
      return countryData[0];
    }
    // Si c'est un objet valide (avec au moins une propriété)
    if (typeof countryData === 'object' && !Array.isArray(countryData)) {
      if (countryData.country_code || countryData.country_name) {
        return countryData;
      }
    }
    return null;
  }
  panelClosed(cardData) {
    setTimeout(() => {
      cardData.isExpanded = false;
      this.cdRef.detectChanges();
    });
  }
  static {
    this.ɵfac = function ShowDynamicCardComponent_Factory(t) {
      return new (t || ShowDynamicCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ShowDynamicCardComponent,
      selectors: [["vex-show-dynamic-card"]],
      inputs: {
        title: "title",
        breadcrumbs: "breadcrumbs",
        showLayoutToggle: "showLayoutToggle",
        layoutControl: "layoutControl",
        data: "data",
        showEditButton: "showEditButton"
      },
      outputs: {
        editToggle: "editToggle",
        submitData: "submitData"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [[1, "w-full"], ["class", "bg-white rounded-lg shadow-sm hover:shadow-none border border-transparent hover:border-primary-500 transition-all duration-300 ease-in-out overflow-hidden border-2 hover:border-2 my-6 p-2", 3, "expanded", "opened", "closed", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bg-white", "rounded-lg", "shadow-sm", "hover:shadow-none", "border", "border-transparent", "hover:border-primary-500", "transition-all", "duration-300", "ease-in-out", "overflow-hidden", "border-2", "hover:border-2", "my-6", "p-2", 3, "expanded", "opened", "closed"], [1, "px-2", "py-2", "sm:px-10", "sm:py-8", "hover:bg-gray-50", "transition-colors", "duration-200"], [1, "flex", "flex-wrap", "items-center", "w-full", "min-w-0"], [1, "flex", "gap-4", "sm:gap-6", "flex-grow"], [1, "icon-lg", "text-primary-600", "flex-shrink-0"], [1, "flex", "flex-col", "min-w-0"], [1, "title", "m-0", "text-lg", "font-semibold", "text-gray-700", "truncate"], ["class", "text-gray-600 text-sm mt-2 mb-0 truncate", 4, "ngIf"], [1, "flex", "items-center", "ml-auto", "flex-shrink-0"], [1, "text-sm", "text-gray-500", "mr-3"], [1, "transition-transform", "duration-200", "transform", "-rotate-90", "text-gray-600"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "text-gray-600", "text-sm", "mt-2", "mb-0", "truncate"], [1, "px-10", "pt-6", "pb-3", "flex", "justify-end", "border-b", "border-gray-100"], ["mat-icon-button", "", "class", "text-gray-500 hover:text-primary-600 hover:bg-gray-100 rounded-full p-1 transition-colors duration-200", 3, "click", 4, "ngIf"], ["class", "px-10 pb-10", 4, "ngIf"], ["class", "px-4 pb-4 pt-4 sm:px-10 sm:pb-10 sm:pt-8 flex flex-wrap gap-8", 4, "ngIf"], ["mat-icon-button", "", 1, "text-gray-500", "hover:text-primary-600", "hover:bg-gray-100", "rounded-full", "p-1", "transition-colors", "duration-200", 3, "click"], [1, "px-10", "pb-10"], [1, "space-y-6", "pt-6"], ["class", "flex justify-center mb-6", 4, "ngIf"], [3, "form", "fields", "model"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-end", "gap-4", "pt-6", "mt-8", "border-t", "border-gray-100"], ["type", "button", "color", "basic", "mat-button", "", "rxTranslate", "global.show_dynamic_cancel", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", "rxTranslate", "global.show_dynamic_submit", 3, "disabled", "click"], [1, "flex", "justify-center", "mb-6"], [1, "flex", "flex-col", "items-center"], [1, "w-24", "h-24", "sm:w-32", "sm:h-32", "rounded-full", "object-cover", "border-2", "border-gray-200", 3, "src", "alt"], [1, "mt-3", "text-sm", "text-gray-500"], [1, "px-4", "pb-4", "pt-4", "sm:px-10", "sm:pb-10", "sm:pt-8", "flex", "flex-wrap", "gap-8"], ["class", "py-4 flex items-center w-full justify-center", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "py-4", "flex", "items-center", "w-full", "justify-center"], [1, "flex", "flex-col", "items-center", "space-y-3"], [1, "w-32", "h-32", "rounded-full", "object-cover", "border-2", "border-gray-200", 3, "src", "alt"], [1, "m-0", "text-sm", "text-gray-500"], ["class", "py-4 flex items-start flex-1 min-w-[calc(50%-1rem)]", 4, "ngIf"], [1, "py-4", "flex", "items-start", "flex-1", "min-w-[calc(50%-1rem)]"], [1, "flex-shrink-0", "w-12", "h-12", "rounded-full", "bg-primary-50", "text-primary-600", "flex", "items-center", "justify-center", "mt-1"], [1, "icon-sm"], [1, "ml-3", "sm:ml-5"], [1, "m-0", "text-base", "font-medium", "text-gray-800"], [4, "ngIf"], [1, "m-0", "text-sm", "text-gray-500", "mt-2"], ["noCountry", ""], [1, "flex", "items-center", "gap-2"], ["class", "w-8 h-5 rounded-sm", 3, "src", "alt", 4, "ngIf"], ["class", "text-sm text-gray-500", 4, "ngIf"], [1, "w-8", "h-5", "rounded-sm", 3, "src", "alt"], [1, "text-sm", "text-gray-500"], [1, "text-gray-500"], [1, "p-10"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-6"], ["rxTranslate", "global.loading", 1, "text-lg", "text-gray-600"], ["mode", "indeterminate", "color", "primary", "diameter", "35", 1, "icon-2xl"]],
      template: function ShowDynamicCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-accordion", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ShowDynamicCardComponent_mat_expansion_panel_1_Template, 19, 11, "mat-expansion-panel", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFn);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_11__.FormlyForm, _ngx_formly_material__WEBPACK_IMPORTED_MODULE_12__.FormlyMaterialModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__["default"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.FormlyMatDatepickerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
      styles: ["[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e0e0e0;\n  background-color: #f9f9f9;\n  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #c0c0c0;\n}\n[_nghost-%COMP%]   .mat-expansion-panel.mat-expanded[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #a0a0a0;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto !important;\n  padding: 16px 24px;\n  border-radius: 8px 8px 0 0;\n  transition: background-color 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 16px;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #606060;\n}\n[_nghost-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #0078d4;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   button.mat-raised-button[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n[_nghost-%COMP%]   button.mat-raised-button[_ngcontent-%COMP%]:hover {\n  background-color: #005a9e;\n}\n[_nghost-%COMP%]   button.mat-button[_ngcontent-%COMP%] {\n  color: #0078d4;\n}\n[_nghost-%COMP%]   button.mat-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 120, 212, 0.1);\n}\n[_nghost-%COMP%]   formly-form[_ngcontent-%COMP%]   .mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #e8e8e8;\n}\n[_nghost-%COMP%]   formly-form[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .photo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #e0e0e0;\n}\n[_nghost-%COMP%]   .dynamic-field-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 120, 212, 0.1);\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .dynamic-field-item[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n[_nghost-%COMP%]   .dynamic-field-item[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hvdy1keW5hbWljLWNhcmQvc2hvdy1keW5hbWljLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNFQUFBO0FBREo7QUFHSTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7QUFETjtBQUlJO0VBQ0Usd0NBQUE7RUFDQSxxQkFBQTtBQUZOO0FBS0k7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2Q0FBQTtBQUhOO0FBS007RUFDRSx5QkFBQTtBQUhSO0FBTU07O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBSlI7QUFPTTtFQUNFLGNBQUE7QUFMUjtBQVNJO0VBQ0Usb0JBQUE7QUFQTjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtBQVhKO0FBZUU7RUFDRSxjQUFBO0FBYko7QUFpQkU7RUFDRSxrQkFBQTtBQWZKO0FBZ0JJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBZE47QUFlTTtFQUNFLHlCQUFBO0FBYlI7QUFnQkk7RUFDRSxjQUFBO0FBZE47QUFlTTtFQUNFLHdDQUFBO0FBYlI7QUFvQkk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBbEJOO0FBb0JJO0VBQ0UsaUJBQUE7QUFsQk47QUF3Qkk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBdEJOO0FBNEJJO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtBQTFCTjtBQTRCSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQTFCTjtBQTRCSTtFQUNFLFdBQUE7QUExQk4iLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAvLyBCYXNlIGNhcmQgc3R5bGluZ1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLy8gTW9yZSByb3VuZGVkIGNvcm5lcnNcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgLy8gU3VidGxlIHNoYWRvd1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7IC8vIExpZ2h0IGJvcmRlclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7IC8vIFNsaWdodGx5IG9mZi13aGl0ZSBiYWNrZ3JvdW5kXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLy8gU2xpZ2h0bHkgbW9yZSBwcm9taW5lbnQgc2hhZG93IG9uIGhvdmVyXG4gICAgICBib3JkZXItY29sb3I6ICNjMGMwYzA7IC8vIFNsaWdodGx5IGRhcmtlciBib3JkZXIgb24gaG92ZXJcbiAgICB9XG5cbiAgICAmLm1hdC1leHBhbmRlZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvLyBTbGlnaHRseSBtb3JlIHByb21pbmVudCBzaGFkb3cgd2hlbiBleHBhbmRlZFxuICAgICAgYm9yZGVyLWNvbG9yOiAjYTBhMGEwOyAvLyBEYXJrZXIgYm9yZGVyIHdoZW4gZXhwYW5kZWRcbiAgICB9XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IC8vIEFsbG93IGhlaWdodCB0byBhZGp1c3QgYmFzZWQgb24gY29udGVudFxuICAgICAgcGFkZGluZzogMTZweCAyNHB4OyAvLyBJbmNyZWFzZWQgcGFkZGluZ1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7IC8vIFJvdW5kZWQgdG9wIGNvcm5lcnNcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8vIExpZ2h0IGhvdmVyIGVmZmVjdFxuICAgICAgfVxuXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7IC8vIEFsbG93IHRleHQgdG8gdGFrZSBhdmFpbGFibGUgc3BhY2VcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4OyAvLyBTcGFjZSBiZXR3ZWVuIHRleHQgYW5kIGNvbnRyb2xzXG4gICAgICB9XG5cbiAgICAgIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogIzYwNjA2MDsgLy8gRGFya2VyIGFycm93IGNvbG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwIDI0cHggMjRweDsgLy8gUGFkZGluZyBmb3IgY29udGVudCBhcmVhXG4gICAgfVxuICB9XG5cbiAgLy8gU3BlY2lmaWMgYWRqdXN0bWVudHMgZm9yIGVsZW1lbnRzIHdpdGhpbiB0aGUgY2FyZFxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAvLyBTbGlnaHRseSBsYXJnZXIgdGl0bGVcbiAgICBmb250LXdlaWdodDogNjAwOyAvLyBTZW1pLWJvbGRcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG5cbiAgLy8gSWNvbiBzdHlsaW5nXG4gIG1hdC1pY29uIHtcbiAgICBjb2xvcjogIzAwNzhkNDsgLy8gV2luZG93cyAxMSBhY2NlbnQgYmx1ZSBmb3IgcHJpbWFyeSBpY29uc1xuICB9XG5cbiAgLy8gQnV0dG9uIHN0eWxpbmdcbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8vIFNsaWdodGx5IHJvdW5kZWQgYnV0dG9uc1xuICAgICYubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzhkNDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YTllO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm1hdC1idXR0b24ge1xuICAgICAgY29sb3I6ICMwMDc4ZDQ7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjAsIDIxMiwgMC4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGb3JtbHkgZm9ybSBhZGp1c3RtZW50cyAoYXNzdW1pbmcgRm9ybWx5IE1hdGVyaWFsIGlzIHVzZWQpXG4gIGZvcm1seS1mb3JtIHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgLy8gUm91bmRlZCBpbnB1dCBmaWVsZHNcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7IC8vIExpZ2h0IGJhY2tncm91bmQgZm9yIGlucHV0c1xuICAgIH1cbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDsgLy8gUmVtb3ZlIGV4dHJhIHBhZGRpbmdcbiAgICB9XG4gIH1cblxuICAvLyBQaG90byBzZWN0aW9uXG4gIC5waG90by1zZWN0aW9uIHtcbiAgICBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyAvLyBFbnN1cmUgY2lyY3VsYXJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7IC8vIExpZ2h0IGJvcmRlclxuICAgIH1cbiAgfVxuXG4gIC8vIER5bmFtaWMgZmllbGRzIGluIHZpZXcgbW9kZVxuICAuZHluYW1pYy1maWVsZC1pdGVtIHtcbiAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjAsIDIxMiwgMC4xKTsgLy8gTGlnaHQgYmx1ZSBiYWNrZ3JvdW5kIGZvciBpY29uc1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyAvLyBDaXJjdWxhciBiYWNrZ3JvdW5kXG4gICAgfVxuICAgIC5maWVsZC12YWx1ZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwOyAvLyBNZWRpdW0gd2VpZ2h0IGZvciB2YWx1ZXNcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cbiAgICAuZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInUp400ms, _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms, _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_3__.scaleIn400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__.stagger40ms, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.style)({
          opacity: 0,
          transform: 'translateX(20px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.style)({
          opacity: 1,
          transform: 'translateX(0)'
        }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.trigger)('scaleIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.style)({
          opacity: 0,
          transform: 'scale(0.5)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.style)({
          opacity: 1,
          transform: 'scale(1)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 9180:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/accordion.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_ACCORDION: () => (/* binding */ CDK_ACCORDION),
/* harmony export */   CdkAccordion: () => (/* binding */ CdkAccordion),
/* harmony export */   CdkAccordionItem: () => (/* binding */ CdkAccordionItem),
/* harmony export */   CdkAccordionModule: () => (/* binding */ CdkAccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 37989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);





/** Used to generate unique ID for each accordion. */
let nextId$1 = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
  constructor() {
    /** Emits when the state of the accordion changes */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A readonly id value to use for unique selection coordination. */
    this.id = `cdk-accordion-${nextId$1++}`;
    /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
    this.multi = false;
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static {
    this.ɵfac = function CdkAccordion_Factory(t) {
      return new (t || CdkAccordion)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAccordion,
      selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
      inputs: {
        multi: ["multi", "multi", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["cdkAccordion"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion, [cdkAccordion]',
      exportAs: 'cdkAccordion',
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/** Used to generate unique ID for each accordion item. */
let nextId = 0;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    // Only emit events and update the internal value if the value changes.
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        /**
         * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
         * the name value is the id of the accordion.
         */
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      // Ensures that the animation will run when the value is set outside of an `@Input`.
      // This includes cases like the open, close and toggle methods.
      this._changeDetectorRef.markForCheck();
    }
  }
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    /** Subscription to openAll/closeAll events. */
    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Event emitted every time the AccordionItem is closed. */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted every time the AccordionItem is opened. */
    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the AccordionItem is destroyed. */
    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */
    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The unique AccordionItem id. */
    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    /** Whether the AccordionItem is disabled. */
    this.disabled = false;
    /** Unregister function for _expansionDispatcher. */
    this._removeUniqueSelectionListener = () => {};
    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    // When an accordion item is hosted in an accordion, subscribe to open/close events.
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe(expanded => {
      // Only change expanded state if item is enabled
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static {
    this.ɵfac = function CdkAccordionItem_Factory(t) {
      return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.UniqueSelectionDispatcher));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAccordionItem,
      selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
      inputs: {
        expanded: ["expanded", "expanded", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        disabled: ["disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        closed: "closed",
        opened: "opened",
        destroyed: "destroyed",
        expandedChange: "expandedChange"
      },
      exportAs: ["cdkAccordionItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: undefined
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion-item, [cdkAccordionItem]',
      exportAs: 'cdkAccordionItem',
      providers: [
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: undefined
      }]
    }]
  }], () => [{
    type: CdkAccordion,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [CDK_ACCORDION]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.UniqueSelectionDispatcher
  }], {
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expandedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
class CdkAccordionModule {
  static {
    this.ɵfac = function CdkAccordionModule_Factory(t) {
      return new (t || CdkAccordionModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CdkAccordionModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkAccordion, CdkAccordionItem],
      declarations: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 19322:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/expansion.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPANSION_PANEL_ANIMATION_TIMING: () => (/* binding */ EXPANSION_PANEL_ANIMATION_TIMING),
/* harmony export */   MAT_ACCORDION: () => (/* binding */ MAT_ACCORDION),
/* harmony export */   MAT_EXPANSION_PANEL: () => (/* binding */ MAT_EXPANSION_PANEL),
/* harmony export */   MAT_EXPANSION_PANEL_DEFAULT_OPTIONS: () => (/* binding */ MAT_EXPANSION_PANEL_DEFAULT_OPTIONS),
/* harmony export */   MatAccordion: () => (/* binding */ MatAccordion),
/* harmony export */   MatExpansionModule: () => (/* binding */ MatExpansionModule),
/* harmony export */   MatExpansionPanel: () => (/* binding */ MatExpansionPanel),
/* harmony export */   MatExpansionPanelActionRow: () => (/* binding */ MatExpansionPanelActionRow),
/* harmony export */   MatExpansionPanelContent: () => (/* binding */ MatExpansionPanelContent),
/* harmony export */   MatExpansionPanelDescription: () => (/* binding */ MatExpansionPanelDescription),
/* harmony export */   MatExpansionPanelHeader: () => (/* binding */ MatExpansionPanelHeader),
/* harmony export */   MatExpansionPanelTitle: () => (/* binding */ MatExpansionPanelTitle),
/* harmony export */   matExpansionAnimations: () => (/* binding */ matExpansionAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 9180);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 59400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ 37989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);

















/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */
const _c0 = ["body"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
  }
}
const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');

/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */
const matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(0deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(180deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '0px',
    visibility: 'hidden'
  })),
  // Clear the `visibility` while open, otherwise the content will be visible when placed in
  // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
  // that have a `visibility` of their own (see #27436).
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '*',
    visibility: ''
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))])
};

/**
 * Token used to provide a `MatExpansionPanel` to `MatExpansionPanelContent`.
 * Used to avoid circular imports between `MatExpansionPanel` and `MatExpansionPanelContent`.
 */
const MAT_EXPANSION_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL');

/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
  constructor(_template, _expansionPanel) {
    this._template = _template;
    this._expansionPanel = _expansionPanel;
  }
  static {
    this.ɵfac = function MatExpansionPanelContent_Factory(t) {
      return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatExpansionPanelContent,
      selectors: [["ng-template", "matExpansionPanelContent", ""]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matExpansionPanelContent]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_EXPANSION_PANEL]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();

/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the default
 * options for the expansion panel component.
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem {
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this._viewContainerRef = _viewContainerRef;
    this._animationMode = _animationMode;
    this._hideToggle = false;
    /** An event emitted after the body's expansion animation happens. */
    this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** An event emitted after the body's collapse animation happens. */
    this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Stream that emits for changes in `@Input` properties. */
    this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** ID for the associated header element. Used for a11y labelling. */
    this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
    /** Stream of body animation done events. */
    this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.accordion = accordion;
    this._document = _document;
    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._bodyAnimationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      if (event.fromState !== 'void') {
        if (event.toState === 'expanded') {
          this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          this.afterCollapse.emit();
        }
      }
    });
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === 'default';
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? 'expanded' : 'collapsed';
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      // Render the content as soon as the panel becomes open.
      this.opened.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this.expanded && !this._portal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._bodyAnimationDone.complete();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  static {
    this.ɵfac = function MatExpansionPanel_Factory(t) {
      return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatExpansionPanel,
      selectors: [["mat-expansion-panel"]],
      contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
        }
      },
      viewQuery: function MatExpansionPanel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
        }
      },
      hostAttrs: [1, "mat-expansion-panel"],
      hostVars: 6,
      hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
        }
      },
      inputs: {
        hideToggle: "hideToggle",
        togglePosition: "togglePosition"
      },
      outputs: {
        afterExpand: "afterExpand",
        afterCollapse: "afterCollapse"
      },
      exportAs: ["matExpansionPanel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: undefined
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: MatExpansionPanel
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
      template: function MatExpansionPanel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
            return ctx._bodyAnimationDone.next($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.CdkPortalOutlet],
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.bodyExpansion]
      },
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel',
      exportAs: 'matExpansionPanel',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [matExpansionAnimations.bodyExpansion],
      providers: [
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: undefined
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: MatExpansionPanel
      }],
      host: {
        'class': 'mat-expansion-panel',
        '[class.mat-expanded]': 'expanded',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
      },
      template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_ACCORDION]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    afterExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    afterCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['body']
    }]
  });
})();
/**
 * Actions of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelActionRow {
  static {
    this.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
      return new (t || MatExpansionPanelActionRow)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatExpansionPanelActionRow,
      selectors: [["mat-action-row"]],
      hostAttrs: [1, "mat-action-row"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-action-row',
      host: {
        class: 'mat-action-row'
      }
    }]
  }], null, null);
})();

// Boilerplate for applying mixins to MatExpansionPanelHeader.
/** @docs-private */
class MatExpansionPanelHeaderBase {}
const _MatExpansionPanelHeaderMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinTabIndex)(MatExpansionPanelHeaderBase);
/**
 * Header element of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader extends _MatExpansionPanelHeaderMixinBase {
  constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
    super();
    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => !!(changes['hideToggle'] || changes['togglePosition']))) : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
    this.tabIndex = parseInt(tabIndex || '') || 0;
    // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.
    this._parentChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => {
      return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    // Avoids focus being lost if the panel contained the focused element and was closed.
    panel.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, 'program'));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER:
        if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe(origin => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static {
    this.ɵfac = function MatExpansionPanelHeader_Factory(t) {
      return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatExpansionPanelHeader,
      selectors: [["mat-expansion-panel-header"]],
      hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
      hostVars: 15,
      hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
            return ctx._toggle();
          })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        tabIndex: "tabIndex",
        expandedHeight: "expandedHeight",
        collapsedHeight: "collapsedHeight"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 5,
      vars: 3,
      consts: [[1, "mat-content"], ["class", "mat-expansion-indicator"], [1, "mat-expansion-indicator"]],
      template: function MatExpansionPanelHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_Conditional_4_Template, 1, 1, "span", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-content-hide-toggle", !ctx._showToggle());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx._showToggle() ? 4 : -1);
        }
      },
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.indicatorRotate]
      },
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['tabIndex'],
      animations: [matExpansionAnimations.indicatorRotate],
      host: {
        'class': 'mat-expansion-panel-header mat-focus-indicator',
        'role': 'button',
        '[attr.id]': 'panel._headerId',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': '_getPanelId()',
        '[attr.aria-expanded]': '_isExpanded()',
        '[attr.aria-disabled]': 'panel.disabled',
        '[class.mat-expanded]': '_isExpanded()',
        '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
        '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[style.height]': '_getHeaderHeight()',
        '(click)': '_toggle()',
        '(keydown)': '_keydown($event)'
      },
      template: "<span class=\"mat-content\" [class.mat-content-hide-toggle]=\"!_showToggle()\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span [@indicatorRotate]=\"_getExpandedState()\" class=\"mat-expansion-indicator\"></span>\n}\n",
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"]
    }]
  }], () => [{
    type: MatExpansionPanel,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['tabindex']
    }]
  }], {
    expandedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelDescription {
  static {
    this.ɵfac = function MatExpansionPanelDescription_Factory(t) {
      return new (t || MatExpansionPanelDescription)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatExpansionPanelDescription,
      selectors: [["mat-panel-description"]],
      hostAttrs: [1, "mat-expansion-panel-header-description"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-description',
      host: {
        class: 'mat-expansion-panel-header-description'
      }
    }]
  }], null, null);
})();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelTitle {
  static {
    this.ɵfac = function MatExpansionPanelTitle_Factory(t) {
      return new (t || MatExpansionPanelTitle)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatExpansionPanelTitle,
      selectors: [["mat-panel-title"]],
      hostAttrs: [1, "mat-expansion-panel-header-title"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-title',
      host: {
        class: 'mat-expansion-panel-header-title'
      }
    }]
  }], null, null);
})();

/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion {
  constructor() {
    super(...arguments);
    /** Headers belonging to this accordion. */
    this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this._hideToggle = false;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */
    this.displayMode = 'default';
    /** The position of the expansion indicator. */
    this.togglePosition = 'after';
  }
  /** Whether the expansion indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle;
  }
  set hideToggle(show) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(show);
  }
  ngAfterContentInit() {
    this._headers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this._headers)).subscribe(headers => {
      this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatAccordion_BaseFactory;
      return function MatAccordion_Factory(t) {
        return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAccordion)))(t || MatAccordion);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatAccordion,
      selectors: [["mat-accordion"]],
      contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
        }
      },
      hostAttrs: [1, "mat-accordion"],
      hostVars: 2,
      hostBindings: function MatAccordion_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
        }
      },
      inputs: {
        hideToggle: "hideToggle",
        displayMode: "displayMode",
        togglePosition: "togglePosition"
      },
      exportAs: ["matAccordion"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-accordion',
      exportAs: 'matAccordion',
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: 'mat-accordion',
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        '[class.mat-accordion-multi]': 'this.multi'
      }
    }]
  }], null, {
    _headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatExpansionModule {
  static {
    this.ɵfac = function MatExpansionModule_Factory(t) {
      return new (t || MatExpansionModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatExpansionModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_interfaces_setting_ts-src_app_pages_show-dynamic-card_show-dynamic-card_compo-31c667.js.map