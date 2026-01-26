import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { PRODUCTS_CONFIG } from './products.config';

export const productsResolver = createGenericResolver(PRODUCTS_CONFIG);
