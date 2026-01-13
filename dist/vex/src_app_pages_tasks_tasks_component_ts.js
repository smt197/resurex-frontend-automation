"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_tasks_tasks_component_ts"],{

/***/ 35370:
/*!****************************************************************************!*\
  !*** ./src/app/core/auto-generator/components/generic-module.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericModuleComponent: () => (/* binding */ GenericModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/generic-resource-list/generic-resource-list.component */ 40276);
/* harmony import */ var src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/Utils */ 18220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/generic-api.service */ 60334);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_services_form_data_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/form-data-builder.service */ 34365);








/**
 * Composant générique qui s'adapte à n'importe quel module basé sur sa configuration
 *
 * Ce composant centralise toute la logique CRUD standard et permet une personnalisation
 * complète via la configuration du module.
 *
 * @example
 * ```typescript
 * // Dans roles.component.ts
 * @Component({
 *   selector: 'vex-roles',
 *   standalone: true,
 *   imports: [GenericModuleComponent],
 *   template: `<vex-generic-module [config]="config"></vex-generic-module>`
 * })
 * export class RolesComponent {
 *   config = ROLES_CONFIG;
 * }
 * ```
 */
class GenericModuleComponent {
  /**
   * Convertit les colonnes de configuration en colonnes de table
   */
  get tableColumns() {
    return this.config.table?.columns;
  }
  constructor(genericApi, dialog, snackbar, formDataBuilder) {
    this.genericApi = genericApi;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.formDataBuilder = formDataBuilder;
  }
  ngOnInit() {
    this.validateConfig();
    this.initializeDataService();
  }
  /**
   * Valide que la configuration est complète
   */
  validateConfig() {
    if (!this.config) {
      throw new Error('GenericModuleComponent: config is required');
    }
    const requiredFields = ['moduleName', 'resourceType', 'identifierField', 'actions', 'data', 'notifications'];
    for (const field of requiredFields) {
      if (!(field in this.config)) {
        throw new Error(`GenericModuleComponent: config.${field} is required for module ${this.config.moduleName || 'unknown'}`);
      }
    }
  }
  /**
   * Initialise le service de données selon la configuration
   */
  initializeDataService() {
    if (this.config.data.useGenericApi) {
      this.dataService = src_app_classes_Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createDataService(this.config.resourceType, this.genericApi);
    } else if (this.config.data.customService) {
      this.dataService = this.config.data.customService;
    } else {
      throw new Error(`GenericModuleComponent: Either useGenericApi must be true or customService must be provided for module ${this.config.moduleName}`);
    }
  }
  /**
   * Gestionnaire central de toutes les actions
   */
  handleAction(event) {
    const actionConfig = this.config.actions[event.action];
    // Vérifier si l'action est activée
    if (actionConfig && 'enabled' in actionConfig && !actionConfig.enabled) {
      console.warn(`Action ${event.action} is disabled for module ${this.config.moduleName}`);
      return;
    }
    // Router vers la bonne méthode selon le type d'action
    switch (event.action) {
      case 'create':
        this.handleCreate();
        break;
      case 'edit':
        if (event.row) this.handleEdit(event.row);
        break;
      case 'delete':
        if (event.row) this.handleDelete(event.row);
        break;
      case 'deleteAll':
        if (event.rows) this.handleDeleteAll(event.rows);
        break;
      case 'show':
        if (event.row) this.handleShow(event.row);
        break;
      default:
        this.handleCustomAction(event);
    }
  }
  /**
   * Gère la création d'un élément
   */
  handleCreate() {
    const dialogComponent = this.getDialogComponent('createUpdate');
    if (!dialogComponent) {
      console.error(`No dialog component found for create action in module ${this.config.moduleName}`);
      return;
    }
    const dialogRef = this.dialog.open(dialogComponent, {
      data: {
        mode: 'create'
      },
      width: this.config.form.width || '650px',
      disableClose: this.config.form.disableClose || false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.model) {
        this.performCreate(result.model);
      }
    });
  }
  /**
   * Effectue la création via l'API ou custom service
   */
  performCreate(model) {
    // Transformer les données avant envoi si configuré
    if (this.config.data.transformBeforeSend) {
      model = this.config.data.transformBeforeSend(model);
    }
    // Préparer les données et appeler la bonne méthode selon le format
    let createObservable;
    if (this.config.data.customService && !this.config.data.useGenericApi) {
      const data = this.config.data.useFormData ? this.formDataBuilder.createFormData(model) : model;
      createObservable = this.config.data.customService.create(data);
    } else {
      // Utiliser la méthode appropriée selon useFormData
      if (this.config.data.useFormData) {
        const formData = this.formDataBuilder.createFormData(model);
        createObservable = this.genericApi.create(this.config.resourceType, formData);
      } else {
        createObservable = this.genericApi.createJson(this.config.resourceType, model);
      }
    }
    createObservable.subscribe({
      next: res => {
        this.showNotification(res?.message || this.config.notifications.messages.createSuccess, 'success');
        if (this.config.data.autoRefresh) {
          this.refresh();
        } else if (res?.data && !Array.isArray(res.data)) {
          // Ajouter le nouvel élément au début de la liste
          const currentData = [...this.resourceList.data];
          currentData.unshift(res.data);
          this.resourceList.data = currentData;
        }
      },
      error: error => {
        this.showNotification(this.config.notifications.messages.createError, 'error');
        console.error(`Error creating ${this.config.displayNameSingular}:`, error);
      }
    });
  }
  /**
   * Gère l'édition d'un élément
   */
  handleEdit(item) {
    const dialogComponent = this.getDialogComponent('createUpdate');
    if (!dialogComponent) {
      console.error(`No dialog component found for edit action in module ${this.config.moduleName}`);
      return;
    }
    const dialogRef = this.dialog.open(dialogComponent, {
      data: {
        mode: 'update',
        [this.config.moduleName.slice(0, -1)]: item // Ex: 'role' pour 'roles'
      },
      width: this.config.form.width || '650px',
      disableClose: this.config.form.disableClose || false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.model) {
        this.performUpdate(item, result.model);
      }
    });
  }
  /**
   * Effectue la mise à jour via l'API
   */
  performUpdate(original, updated) {
    const identifier = this.getIdentifier(original);
    const itemIndex = this.resourceList.data.findIndex(item => this.getIdentifier(item) === identifier);
    if (itemIndex === -1) {
      console.error(`Item not found for update in module ${this.config.moduleName}`);
      return;
    }
    // Transformer les données avant envoi si configuré
    if (this.config.data.transformBeforeSend) {
      updated = this.config.data.transformBeforeSend(updated);
    }
    // Mise à jour optimiste si configuré
    if (this.config.data.optimisticUpdate) {
      const optimisticItem = {
        ...original,
        ...updated
      };
      const currentData = [...this.resourceList.data];
      currentData[itemIndex] = optimisticItem;
      this.resourceList.data = currentData;
    }
    // Préparer les données et appeler la bonne méthode selon le format
    let updateObservable;
    if (this.config.data.customService && !this.config.data.useGenericApi) {
      const data = this.config.data.useFormData ? this.formDataBuilder.createFormData(updated) : updated;
      updateObservable = this.config.data.customService.update(identifier, data);
    } else {
      // Utiliser la méthode appropriée selon useFormData
      if (this.config.data.useFormData) {
        const formData = this.formDataBuilder.createFormData(updated);
        updateObservable = this.genericApi.update(this.config.resourceType, identifier.toString(), formData);
      } else {
        updateObservable = this.genericApi.updateJson(this.config.resourceType, identifier.toString(), updated);
      }
    }
    updateObservable.subscribe({
      next: res => {
        this.showNotification(res?.message || this.config.notifications.messages.updateSuccess, 'success');
        if (this.config.data.autoRefresh) {
          this.refresh();
        } else if (res?.data && !Array.isArray(res.data)) {
          // Mettre à jour avec les données du serveur
          const currentData = [...this.resourceList.data];
          currentData[itemIndex] = res.data;
          this.resourceList.data = currentData;
        }
      },
      error: error => {
        // Rollback en cas d'erreur
        if (this.config.data.optimisticUpdate) {
          const currentData = [...this.resourceList.data];
          currentData[itemIndex] = original;
          this.resourceList.data = currentData;
        }
        this.showNotification(this.config.notifications.messages.updateError, 'error');
        console.error(`Error updating ${this.config.displayNameSingular}:`, error);
      }
    });
  }
  /**
   * Gère la suppression d'un élément
   */
  handleDelete(item) {
    const dialogComponent = this.getDialogComponent('delete');
    if (!dialogComponent) {
      console.error(`No dialog component found for delete action in module ${this.config.moduleName}`);
      return;
    }
    const dialogRef = this.dialog.open(dialogComponent, {
      data: item,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.performDelete(item);
      }
    });
  }
  /**
   * Effectue la suppression via l'API ou custom service
   */
  performDelete(item) {
    const identifier = this.getIdentifier(item);
    const originalData = [...this.resourceList.data];
    // Suppression optimiste si configuré
    if (this.config.data.optimisticDelete) {
      this.resourceList.data = this.resourceList.data.filter(i => this.getIdentifier(i) !== identifier);
    }
    // Utiliser le custom service ou le generic API
    const deleteObservable = this.config.data.customService && !this.config.data.useGenericApi ? this.config.data.customService.delete(identifier) : this.genericApi.delete(this.config.resourceType, identifier.toString());
    deleteObservable.subscribe({
      next: res => {
        this.showNotification(res?.message || this.config.notifications.messages.deleteSuccess, 'success');
        if (this.config.data.autoRefresh) {
          this.refresh();
        }
      },
      error: error => {
        // Rollback en cas d'erreur
        if (this.config.data.optimisticDelete) {
          this.resourceList.data = originalData;
        }
        this.showNotification(this.config.notifications.messages.deleteError, 'error');
        console.error(`Error deleting ${this.config.displayNameSingular}:`, error);
      }
    });
  }
  /**
   * Gère la suppression multiple
   */
  handleDeleteAll(items) {
    const dialogComponent = this.getDialogComponent('delete');
    if (!dialogComponent) {
      console.error(`No dialog component found for deleteAll action in module ${this.config.moduleName}`);
      return;
    }
    const dialogRef = this.dialog.open(dialogComponent, {
      data: items,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.performDeleteAll(items);
      }
    });
  }
  /**
   * Effectue la suppression multiple via l'API ou custom service
   */
  performDeleteAll(items) {
    const identifiers = items.map(item => this.getIdentifier(item));
    // Utiliser le custom service ou le generic API
    const deleteAllObservable = this.config.data.customService && !this.config.data.useGenericApi ? this.config.data.customService.deleteMultiple(identifiers) : this.genericApi.deleteAll(this.config.resourceType, identifiers.map(id => id.toString()));
    deleteAllObservable.subscribe({
      next: res => {
        this.showNotification(res?.message || this.config.notifications.messages.deleteAllSuccess, 'success');
        this.refresh();
      },
      error: error => {
        this.showNotification(this.config.notifications.messages.deleteAllError || this.config.notifications.messages.deleteError, 'error');
        console.error(`Error deleting multiple ${this.config.displayName}:`, error);
      }
    });
  }
  /**
   * Gère l'affichage des détails
   */
  handleShow(item) {
    const dialogComponent = this.getDialogComponent('show');
    if (!dialogComponent) {
      console.warn(`No dialog component found for show action in module ${this.config.moduleName}`);
      return;
    }
    this.dialog.open(dialogComponent, {
      data: item,
      width: this.config.form.width || '650px'
    });
  }
  /**
   * Gère les actions personnalisées
   */
  handleCustomAction(event) {
    const customAction = this.config.actions.custom?.find(action => action.name === event.action);
    if (!customAction) {
      console.error(`Custom action ${event.action} not found in module ${this.config.moduleName}`);
      return;
    }
    // TODO: Implémenter un système de handler dynamique
    console.warn(`Custom action ${event.action} needs to be handled manually`);
  }
  /**
   * Récupère le composant dialog selon le type
   */
  getDialogComponent(type) {
    if (!this.config.dialogs) {
      // Import dynamique par défaut
      return this.loadDefaultDialogComponent(type);
    }
    return this.config.dialogs[type];
  }
  /**
   * Charge dynamiquement le composant dialog par défaut
   */
  loadDefaultDialogComponent(type) {
    // Cette méthode peut être étendue pour charger les dialogs dynamiquement
    // Pour l'instant, elle retourne undefined et nécessite que les dialogs soient configurés
    return undefined;
  }
  /**
   * Récupère l'identifiant d'un élément
   */
  getIdentifier(item) {
    return item[this.config.identifierField];
  }
  /**
   * Affiche une notification
   */
  showNotification(message, type = 'success') {
    this.snackbar.open(message, 'OK', {
      duration: this.config.notifications.duration,
      panelClass: type === 'error' ? 'error-snackbar' : undefined
    });
  }
  /**
   * Rafraîchit la liste
   */
  refresh() {
    if (this.resourceList) {
      this.resourceList.refresh();
    }
  }
  static {
    this.ɵfac = function GenericModuleComponent_Factory(t) {
      return new (t || GenericModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_generic_api_service__WEBPACK_IMPORTED_MODULE_2__.GenericApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_form_data_builder_service__WEBPACK_IMPORTED_MODULE_3__.FormDataBuilderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GenericModuleComponent,
      selectors: [["vex-generic-module"]],
      viewQuery: function GenericModuleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.resourceList = _t.first);
        }
      },
      inputs: {
        config: "config"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 5,
      consts: [[3, "type", "formlyFields", "columns", "dataService", "disableCreateButton", "action"]],
      template: function GenericModuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "vex-generic-resource-list", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("action", function GenericModuleComponent_Template_vex_generic_resource_list_action_0_listener($event) {
            return ctx.handleAction($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.config.resourceType)("formlyFields", ctx.config.form.fields)("columns", ctx.tableColumns)("dataService", ctx.dataService)("disableCreateButton", !ctx.config.actions.create.enabled);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_app_shared_generic_resource_list_generic_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.GenericResourceListComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 22271:
/*!************************************************!*\
  !*** ./src/app/pages/tasks/tasks.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksComponent: () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_auto_generator_components_generic_module_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auto-generator/components/generic-module.component */ 35370);
/* harmony import */ var _tasks_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.config */ 44880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



class TasksComponent {
  constructor() {
    this.config = _tasks_config__WEBPACK_IMPORTED_MODULE_1__.TASKS_CONFIG;
  }
  static {
    this.ɵfac = function TasksComponent_Factory(t) {
      return new (t || TasksComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TasksComponent,
      selectors: [["vex-tasks"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "config"]],
      template: function TasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-generic-module", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config);
        }
      },
      dependencies: [src_app_core_auto_generator_components_generic_module_component__WEBPACK_IMPORTED_MODULE_0__.GenericModuleComponent],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tasks_tasks_component_ts.js.map