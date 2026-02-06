import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { tasksFormlyFields } from 'src/app/interfaces/Tasks';
import { Authority } from 'src/static-data/authority.constants';
import { Task } from 'src/app/models/task.model';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const TASKS_CONFIG: ModuleConfig<Task> = {
  moduleName: 'tasks',
  enabled: true,
  resourceType: 'tasks',
  displayName: 'Tâches',
  displayNameSingular: 'Tâche',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: '/index/tasks',
    permissions: [Authority.USER],
    resolver: true,
    resolverKey: 'tasksData'
  },

  form: {
    fields: tasksFormlyFields,
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
      createSuccess: 'Tâche created successfully!',
      updateSuccess: 'Tâche updated successfully!',
      deleteSuccess: 'Tâche deleted successfully!',
      deleteAllSuccess: 'Tâches deleted successfully!',
      createError: 'Error creating tâche.',
      updateError: 'Error updating tâche.',
      deleteError: 'Error deleting tâche.'
    }
  },

  dialogs: {
    delete: DeleteElementComponent
  }
};
