import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { outilsFormlyFields } from 'src/app/interfaces/Outils';
import { Authority } from 'src/static-data/authority.constants';
import { Outil } from 'src/app/models/outil.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const OUTILS_CONFIG: ModuleConfig<Outil> = {
  moduleName: 'outils',
  enabled: true,
  resourceType: 'outils',
  displayName: 'Outils',
  displayNameSingular: 'Outil',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: '/index/outils',
    permissions: [Authority.USER],
    resolver: true,
    resolverKey: 'outilsData'
  },

  form: {
    fields: outilsFormlyFields,
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
      createSuccess: 'Outil created successfully!',
      updateSuccess: 'Outil updated successfully!',
      deleteSuccess: 'Outil deleted successfully!',
      deleteAllSuccess: 'Outils deleted successfully!',
      createError: 'Error creating outil.',
      updateError: 'Error updating outil.',
      deleteError: 'Error deleting outil.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
