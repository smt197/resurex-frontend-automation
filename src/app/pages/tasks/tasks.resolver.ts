import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { TASKS_CONFIG } from './tasks.config';

export const tasksResolver = createGenericResolver(TASKS_CONFIG);
