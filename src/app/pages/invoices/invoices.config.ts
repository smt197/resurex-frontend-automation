import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { invoicesFormlyFields } from 'src/app/interfaces/Invoices';
import { Authority } from 'src/static-data/authority.constants';
import { Invoice } from 'src/app/models/invoice.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const INVOICES_CONFIG: ModuleConfig<Invoice> = {
  moduleName: 'invoices',
  enabled: true,
  resourceType: 'invoices',
  displayName: 'Factures',
  displayNameSingular: 'Facture',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: '/index/invoices',
    permissions: [Authority.USER],
    resolver: true,
    resolverKey: 'invoicesData'
  },

  form: {
    fields: invoicesFormlyFields,
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
      createSuccess: 'Facture created successfully!',
      updateSuccess: 'Facture updated successfully!',
      deleteSuccess: 'Facture deleted successfully!',
      deleteAllSuccess: 'Factures deleted successfully!',
      createError: 'Error creating facture.',
      updateError: 'Error updating facture.',
      deleteError: 'Error deleting facture.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
