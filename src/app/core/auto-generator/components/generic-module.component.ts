import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ModuleConfig } from '../interfaces/module-config.interface';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { Utils } from 'src/app/classes/Utils';

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
@Component({
  selector: 'vex-generic-module',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent],
  template: `
    <vex-generic-resource-list
      [type]="config.resourceType"
      [formlyFields]="config.form.fields"
      [columns]="tableColumns"
      [dataService]="dataService"
      [disableCreateButton]="!config.actions.create.enabled"
      (action)="handleAction($event)">
    </vex-generic-resource-list>
  `
})
export class GenericModuleComponent<T = any> implements OnInit {
  /**
   * Configuration du module (OBLIGATOIRE)
   */
  @Input() config!: ModuleConfig<T>;

  /**
   * Convertit les colonnes de configuration en colonnes de table
   */
  get tableColumns(): any[] | undefined {
    return this.config.table?.columns as any[];
  }

  /**
   * Service de données pour la liste
   */
  dataService!: ResourceService<T>;

  /**
   * Référence au composant de liste pour le rafraîchir
   */
  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<T>;

  constructor(
    private readonly genericApi: GenericApiService,
    private readonly dialog: MatDialog,
    private readonly snackbar: MatSnackBar,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.validateConfig();
    this.initializeDataService();
  }

  /**
   * Valide que la configuration est complète
   */
  private validateConfig(): void {
    if (!this.config) {
      throw new Error('GenericModuleComponent: config is required');
    }

    const requiredFields = [
      'moduleName',
      'resourceType',
      'identifierField',
      'actions',
      'data',
      'notifications'
    ];

    for (const field of requiredFields) {
      if (!(field in this.config)) {
        throw new Error(
          `GenericModuleComponent: config.${field} is required for module ${this.config.moduleName || 'unknown'}`
        );
      }
    }
  }

  /**
   * Initialise le service de données selon la configuration
   */
  private initializeDataService(): void {
    if (this.config.data.useGenericApi) {
      this.dataService = Utils.createDataService<T>(
        this.config.resourceType,
        this.genericApi
      );
    } else if (this.config.data.customService) {
      this.dataService = this.config.data.customService;
    } else {
      throw new Error(
        `GenericModuleComponent: Either useGenericApi must be true or customService must be provided for module ${this.config.moduleName}`
      );
    }
  }

  /**
   * Gestionnaire central de toutes les actions
   */
  handleAction(event: ActionEvent<T>): void {
    const actionConfig = this.config.actions[event.action as keyof typeof this.config.actions];

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
  private handleCreate(): void {
    // Vérifier si on utilise une page route ou un dialogue
    const dialogComponent = this.config.dialogs?.createUpdate;

    if (dialogComponent) {
      // Ancien système : ouvrir un dialogue
      const dialogRef = this.dialog.open(dialogComponent, {
        width: this.config.form.width || '650px'
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.performCreate(result);
        }
      });
    } else {
      // Nouveau système : navigation vers la page create
      this.router.navigate([this.config.route.path, 'create']);
    }
  }

  /**
   * Gère l'édition d'un élément
   */
  private handleEdit(item: T): void {
    // Vérifier si on utilise une page route ou un dialogue
    const dialogComponent = this.config.dialogs?.createUpdate;

    if (dialogComponent) {
      // Ancien système : ouvrir un dialogue
      const dialogRef = this.dialog.open(dialogComponent, {
        data: item,
        width: this.config.form.width || '650px'
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.performUpdate(item, result);
        }
      });
    } else {
      // Nouveau système : navigation vers la page edit
      const identifier = this.getIdentifier(item);
      this.router.navigate([this.config.route.path, 'edit', identifier]);
    }
  }

  /**
   * Effectue la création via l'API ou custom service (pour les anciens modules avec dialogues)
   */
  private performCreate(data: Partial<T>): void {
    this.showNotification('Creating...', 'success');

    // Utiliser le custom service ou le generic API
    const createObservable = this.config.data.customService && !this.config.data.useGenericApi
      ? this.config.data.customService.create(data)
      : this.config.data.useFormData
      ? this.genericApi.create(this.config.resourceType, this.buildFormData(data))
      : this.genericApi.createJson(this.config.resourceType, data);

    createObservable.subscribe({
      next: (res: any) => {
        this.showNotification(
          res?.message || this.config.notifications.messages.createSuccess,
          'success'
        );

        if (this.config.data.autoRefresh) {
          this.refresh();
        }
      },
      error: (error: any) => {
        this.showNotification(
          this.config.notifications.messages.createError,
          'error'
        );
        console.error(`Error creating ${this.config.displayNameSingular}:`, error);
      }
    });
  }

  /**
   * Effectue la mise à jour via l'API ou custom service (pour les anciens modules avec dialogues)
   */
  private performUpdate(originalItem: T, updatedData: Partial<T>): void {
    const identifier = this.getIdentifier(originalItem);
    const originalDataList = [...this.resourceList.data];

    // Mise à jour optimiste si configuré
    if (this.config.data.optimisticUpdate) {
      const index = this.resourceList.data.findIndex(
        (i) => this.getIdentifier(i) === identifier
      );
      if (index !== -1) {
        this.resourceList.data[index] = { ...originalItem, ...updatedData } as T;
      }
    }

    // Utiliser le custom service ou le generic API
    const updateObservable = this.config.data.customService && !this.config.data.useGenericApi
      ? this.config.data.customService.update(identifier, updatedData)
      : this.config.data.useFormData
      ? this.genericApi.update(this.config.resourceType, identifier.toString(), this.buildFormData(updatedData))
      : this.genericApi.updateJson(this.config.resourceType, identifier.toString(), updatedData);

    updateObservable.subscribe({
      next: (res: any) => {
        this.showNotification(
          res?.message || this.config.notifications.messages.updateSuccess,
          'success'
        );

        if (this.config.data.autoRefresh) {
          this.refresh();
        }
      },
      error: (error: any) => {
        // Rollback en cas d'erreur
        if (this.config.data.optimisticUpdate) {
          this.resourceList.data = originalDataList;
        }

        this.showNotification(
          this.config.notifications.messages.updateError,
          'error'
        );
        console.error(`Error updating ${this.config.displayNameSingular}:`, error);
      }
    });
  }

  /**
   * Construit un FormData à partir d'un objet (pour les uploads de fichiers)
   */
  private buildFormData(data: Partial<T>): FormData {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const value = (data as any)[key];
      if (value !== null && value !== undefined) {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (item instanceof File) {
              formData.append(`${key}[${index}]`, item);
            } else {
              formData.append(`${key}[${index}]`, item.toString());
            }
          });
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    return formData;
  }

  /**
   * Gère la suppression d'un élément
   */
  private handleDelete(item: T): void {
    const dialogComponent = this.getDialogComponent('delete');

    if (!dialogComponent) {
      console.error(`No dialog component found for delete action in module ${this.config.moduleName}`);
      return;
    }

    const dialogRef = this.dialog.open(dialogComponent, {
      data: item,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.performDelete(item);
      }
    });
  }

  /**
   * Effectue la suppression via l'API ou custom service
   */
  private performDelete(item: T): void {
    const identifier = this.getIdentifier(item);
    const originalData = [...this.resourceList.data];

    // Suppression optimiste si configuré
    if (this.config.data.optimisticDelete) {
      this.resourceList.data = this.resourceList.data.filter(
        (i) => this.getIdentifier(i) !== identifier
      );
    }

    // Utiliser le custom service ou le generic API
    const deleteObservable = this.config.data.customService && !this.config.data.useGenericApi
      ? this.config.data.customService.delete(identifier)
      : this.genericApi.delete(this.config.resourceType, identifier.toString());

    deleteObservable.subscribe({
      next: (res: any) => {
        this.showNotification(
          res?.message || this.config.notifications.messages.deleteSuccess,
          'success'
        );

        if (this.config.data.autoRefresh) {
          this.refresh();
        }
      },
      error: (error: any) => {
        // Rollback en cas d'erreur
        if (this.config.data.optimisticDelete) {
          this.resourceList.data = originalData;
        }

        this.showNotification(
          this.config.notifications.messages.deleteError,
          'error'
        );
        console.error(`Error deleting ${this.config.displayNameSingular}:`, error);
      }
    });
  }

  /**
   * Gère la suppression multiple
   */
  private handleDeleteAll(items: T[]): void {
    const dialogComponent = this.getDialogComponent('delete');

    if (!dialogComponent) {
      console.error(`No dialog component found for deleteAll action in module ${this.config.moduleName}`);
      return;
    }

    const dialogRef = this.dialog.open(dialogComponent, {
      data: items,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.performDeleteAll(items);
      }
    });
  }

  /**
   * Effectue la suppression multiple via l'API ou custom service
   */
  private performDeleteAll(items: T[]): void {
    const identifiers = items.map((item) => this.getIdentifier(item));

    // Utiliser le custom service ou le generic API
    const deleteAllObservable = this.config.data.customService && !this.config.data.useGenericApi
      ? this.config.data.customService.deleteMultiple(identifiers)
      : this.genericApi.deleteAll(this.config.resourceType, identifiers.map(id => id.toString()));

    deleteAllObservable.subscribe({
      next: (res: any) => {
        this.showNotification(
          res?.message || this.config.notifications.messages.deleteAllSuccess,
          'success'
        );
        this.refresh();
      },
      error: (error: any) => {
        this.showNotification(
          this.config.notifications.messages.deleteAllError ||
            this.config.notifications.messages.deleteError,
          'error'
        );
        console.error(`Error deleting multiple ${this.config.displayName}:`, error);
      }
    });
  }

  /**
   * Gère l'affichage des détails
   */
  private handleShow(item: T): void {
    // Navigation vers la page show avec l'identifiant de l'élément
    const identifier = this.getIdentifier(item);
    this.router.navigate([this.config.route.path, 'show', identifier]);
  }

  /**
   * Gère les actions personnalisées
   */
  private handleCustomAction(event: ActionEvent<T>): void {
    const customAction = this.config.actions.custom?.find(
      (action) => action.name === event.action
    );

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
  private getDialogComponent(type: 'createUpdate' | 'show' | 'delete'): any {
    if (!this.config.dialogs) {
      // Import dynamique par défaut
      return this.loadDefaultDialogComponent(type);
    }

    return this.config.dialogs[type];
  }

  /**
   * Charge dynamiquement le composant dialog par défaut
   */
  private loadDefaultDialogComponent(type: string): any {
    // Cette méthode peut être étendue pour charger les dialogs dynamiquement
    // Pour l'instant, elle retourne undefined et nécessite que les dialogs soient configurés
    return undefined;
  }

  /**
   * Récupère l'identifiant d'un élément
   */
  private getIdentifier(item: T): string | number {
    return (item as any)[this.config.identifierField];
  }

  /**
   * Affiche une notification
   */
  private showNotification(message: string, type: 'success' | 'error' = 'success'): void {
    this.snackbar.open(message, 'OK', {
      duration: this.config.notifications.duration,
      panelClass: type === 'error' ? 'error-snackbar' : undefined
    });
  }

  /**
   * Rafraîchit la liste
   */
  private refresh(): void {
    if (this.resourceList) {
      this.resourceList.refresh();
    }
  }
}
