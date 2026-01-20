import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { ORDERS_CONFIG } from './orders.config';

export const ordersResolver = createGenericResolver(ORDERS_CONFIG);
