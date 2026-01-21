import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { digitesFormlyFields } from 'src/app/interfaces/Digites';
import { Authority } from 'src/static-data/authority.constants';
import { Digite } from 'src/app/models/digite.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const DIGITES_CONFIG: ModuleConfig<Digite> = {
  moduleName: 'digites',
  enabled: true,
  resourceType: 'digites',
  displayName: 'Digites',
  displayNameSingular: 'Digite',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: '/index/digites',
    permissions: [Authority.ADMIN, Authority.USER],
    resolver: true,
    resolverKey: 'digitesData'
  },

  form: {
    fields: digitesFormlyFields,
    width: '650px'
  },

  actions: {
    create: { enabled: true },
    edit: { enabled: true },
    delete: { enabled: true },
    deleteAll: { enabled: false },
    show: { enabled: true },
    search: { enabled: true },
    export: { enabled: false }
  },

  data: {
    useFormData: false,
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: true,
    useGenericApi: true
  },

  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: true
    // Les colonnes seront générées automatiquement depuis les champs Formly
  },

  notifications: {
    duration: 3000,
    messages: {
      createSuccess: 'Digite created successfully!',
      updateSuccess: 'Digite updated successfully!',
      deleteSuccess: 'Digite deleted successfully!',
      deleteAllSuccess: 'Digites deleted successfully!',
      createError: 'Error creating digite.',
      updateError: 'Error updating digite.',
      deleteError: 'Error deleting digite.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
