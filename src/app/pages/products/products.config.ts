import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { productsFormlyFields } from 'src/app/interfaces/Products';
import { Authority } from 'src/static-data/authority.constants';
import { Product } from 'src/app/models/product.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const PRODUCTS_CONFIG: ModuleConfig<Product> = {
  moduleName: 'products',
  enabled: true,
  resourceType: 'products',
  displayName: 'Products',
  displayNameSingular: 'Product',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: '/index/products',
    permissions: [Authority.ADMIN, Authority.USER],
    resolver: true,
    resolverKey: 'productsData'
  },

  form: {
    fields: productsFormlyFields,
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
      createSuccess: 'Product created successfully!',
      updateSuccess: 'Product updated successfully!',
      deleteSuccess: 'Product deleted successfully!',
      deleteAllSuccess: 'Products deleted successfully!',
      createError: 'Error creating product.',
      updateError: 'Error updating product.',
      deleteError: 'Error deleting product.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
