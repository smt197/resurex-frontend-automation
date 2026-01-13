import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { moduleManagersFormlyFields } from 'src/app/interfaces/Module-managers';
import { Authority } from 'src/static-data/authority.constants';
import { ModuleManager } from 'src/app/models/module-manager.model';
import { ModuleManagerCreateUpdateComponent } from './dialogs/module-manager-create-update/module-manager-create-update.component';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const MODULE_MANAGERS_CONFIG: ModuleConfig<ModuleManager> = {
  moduleName: 'module-managers',
  enabled: true,
  resourceType: 'module-managers',
  displayName: 'Module Generator',
  displayNameSingular: 'Module',

  identifierField: 'id',
  identifierType: 'string',

  route: {
    path: 'module-managers',
    permissions: [Authority.ADMIN],
    resolver: false,
    resolverKey: 'moduleManagersData'
  },

  form: {
    fields: moduleManagersFormlyFields,
    width: '900px'
  },

  actions: {
    create: { enabled: true },
    edit: { enabled: true },
    delete: { enabled: true },
    deleteAll: { enabled: false },
    show: { enabled: false },
    search: { enabled: true },
    export: { enabled: false }
  },

  data: {
    useFormData: false,
    optimisticUpdate: false,
    optimisticDelete: false,
    autoRefresh: true,
    useGenericApi: false // Nous utiliserons notre service personnalisé
  },

  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: false
  },

  notifications: {
    duration: 3000,
    messages: {
      createSuccess: 'Module generated successfully!',
      updateSuccess: 'Module updated successfully!',
      deleteSuccess: 'Module deleted successfully!',
      deleteAllSuccess: 'Modules deleted successfully!',
      createError: 'Error generating module.',
      updateError: 'Error updating module.',
      deleteError: 'Error deleting module.'
    }
  },

  dialogs: {
    createUpdate: ModuleManagerCreateUpdateComponent,
    delete: DeleteElementComponent
  }
};
