import { Routes } from '@angular/router';
import { TASKS_CONFIG } from './tasks.config';
import { TasksComponent } from './tasks.component';
import { TaskCreateUpdateComponent } from './pages/task-create-update/task-create-update.component';
import { TaskShowComponent } from './pages/task-show/task-show.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent
  },
  {
    path: 'create',
    component: TaskCreateUpdateComponent
  },
  {
    path: 'edit/:id',
    component: TaskCreateUpdateComponent
  },
  {
    path: 'show/:id',
    component: TaskShowComponent
  }
];

export default tasksRoutes;
