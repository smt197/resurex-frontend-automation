import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { ordersFormlyFields } from 'src/app/interfaces/Orders';
import { Authority } from 'src/static-data/authority.constants';
import { Order } from 'src/app/models/order.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const ORDERS_CONFIG: ModuleConfig<Order> = {
  moduleName: 'orders',
  enabled: true,
  resourceType: 'orders',
  displayName: 'Orders',
  displayNameSingular: 'Order',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: '/index/orders',
    permissions: [Authority.ADMIN, Authority.USER],
    resolver: true,
    resolverKey: 'ordersData'
  },

  form: {
    fields: ordersFormlyFields,
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
      createSuccess: 'Order created successfully!',
      updateSuccess: 'Order updated successfully!',
      deleteSuccess: 'Order deleted successfully!',
      deleteAllSuccess: 'Orders deleted successfully!',
      createError: 'Error creating order.',
      updateError: 'Error updating order.',
      deleteError: 'Error deleting order.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
