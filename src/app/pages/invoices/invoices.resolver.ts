import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { INVOICES_CONFIG } from './invoices.config';

export const invoicesResolver = createGenericResolver(INVOICES_CONFIG);
