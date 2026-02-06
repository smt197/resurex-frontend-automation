import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { OUTILS_CONFIG } from './outils.config';

export const outilsResolver = createGenericResolver(OUTILS_CONFIG);
