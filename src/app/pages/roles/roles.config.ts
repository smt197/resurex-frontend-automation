import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { rolesFormlyFields } from 'src/app/interfaces/Roles';
import { Authority } from 'src/static-data/authority.constants';
import { Role } from 'src/app/models/role.model';
import { RoleCreateUpdateComponent } from './role-create-update/role-create-update.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';

/**
 * Configuration complète du module Roles
 *
 * Ce fichier dicte tout le comportement du module Roles.
 * Modifiez cette configuration pour changer le comportement du module
 * sans toucher au code du composant.
 */
export const ROLES_CONFIG: ModuleConfig<Role> = {
  // ========== IDENTITÉ ==========
  moduleName: 'roles',
  resourceType: 'roles',
  displayName: 'Roles',
  displayNameSingular: 'Role',

  // ========== IDENTIFIANTS ==========
  identifierField: 'id',
  identifierType: 'number',

  // ========== ROUTING ==========
  route: {
    path: 'role',
    permissions: [Authority.ADMIN], // Seuls les admins peuvent accéder
    resolver: true,
    resolverKey: 'rolesData',
    loadChildren: false
  },

  // ========== FORMULAIRE ==========
  form: {
    fields: rolesFormlyFields,
    width: '650px',
    disableClose: false
  },

  // ========== ACTIONS DISPONIBLES ==========
  actions: {
    create: {
      enabled: false, // ⚠️ Création désactivée pour les rôles
      label: 'Create Role',
      icon: 'mat:add'
    },
    edit: {
      enabled: true,
      label: 'Edit',
      icon: 'mat:edit'
    },
    delete: {
      enabled: true,
      label: 'Delete',
      icon: 'mat:delete',
      requiresConfirmation: true,
      confirmationMessage: 'Are you sure you want to delete this role?'
    },
    deleteAll: {
      enabled: true,
      label: 'Delete Selected',
      icon: 'mat:delete_sweep',
      requiresConfirmation: true,
      confirmationMessage: 'Are you sure you want to delete the selected roles?'
    },
    show: {
      enabled: false, // Pas de vue détaillée pour les rôles
      label: 'View Details',
      icon: 'mat:visibility'
    },
    search: {
      enabled: true,
      label: 'Search',
      icon: 'mat:search'
    },
    export: {
      enabled: false, // Export désactivé pour l'instant
      label: 'Export',
      icon: 'mat:download'
    },

    // Actions personnalisées (exemple pour le futur)
    custom: [
      // {
      //   name: 'assign-permissions',
      //   icon: 'mat:security',
      //   label: 'Assign Permissions',
      //   handler: 'openAssignPermissionsDialog',
      //   requiresConfirmation: false
      // }
    ]
  },

  // ========== GESTION DES DONNÉES ==========
  data: {
    useFormData: false, // Les rôles n'ont pas besoin de FormData (pas d'upload)
    optimisticUpdate: false, // Refresh après update (pas de mise à jour optimiste)
    optimisticDelete: true, // Suppression immédiate dans l'UI
    autoRefresh: true, // Rafraîchir automatiquement après create/update/deleteAll
    useGenericApi: true // Utiliser le GenericApiService
  },

  // ========== TABLE / LISTE ==========
  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: true,

    // Configuration des colonnes (optionnel, peut être géré par formlyFields)
    columns: [
      {
        key: 'id',
        label: 'ID',
        type: 'number',
        sortable: true
      },
      {
        key: 'name',
        label: 'Name',
        type: 'text',
        sortable: true,
        filterable: true
      },
      {
        key: 'display_name',
        label: 'Display Name',
        type: 'text',
        sortable: true
      },
      {
        key: 'guard_name',
        label: 'Guard Name',
        type: 'text',
        sortable: true
      }
    ],

    rowActions: ['edit', 'delete'] // Actions disponibles sur chaque ligne
  },

  // ========== NOTIFICATIONS ==========
  notifications: {
    duration: 3000, // 3 secondes
    messages: {
      createSuccess: 'Role created successfully!',
      updateSuccess: 'Role updated successfully!',
      deleteSuccess: 'Role deleted successfully!',
      deleteAllSuccess: 'Roles deleted successfully!',
      createError: 'Error creating role. Please try again.',
      updateError: 'Error updating role. Please try again.',
      deleteError: 'Error deleting role. Please try again.',
      deleteAllError: 'Error deleting roles. Please try again.'
    }
  },

  // ========== DIALOGS ==========
  dialogs: {
    createUpdate: RoleCreateUpdateComponent,
    delete: DeleteElementComponent
    // show n'est pas défini car show est désactivé
  }
};
