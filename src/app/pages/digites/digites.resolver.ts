import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { DIGITES_CONFIG } from './digites.config';

export const digitesResolver = createGenericResolver(DIGITES_CONFIG);
