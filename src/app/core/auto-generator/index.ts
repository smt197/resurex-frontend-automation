/**
 * AUTO-GENERATOR - Index principal
 *
 * Ce fichier centralise tous les exports pour faciliter les imports
 *
 * Usage:
 * import { ModuleConfig, createModuleRoutes, moduleRegistry } from '@core/auto-generator';
 */

// ========== INTERFACES ==========
export * from './interfaces/module-config.interface';

// ========== UTILS ==========
export * from './utils/route-generator';
export * from './utils/resolver-generator';
export * from './utils/module-scanner';

// ========== COMPONENTS ==========
export { GenericModuleComponent } from './components/generic-module.component';

// ========== SCRIPTS (pour usage programmatique) ==========
export * from './scripts/validate-modules';
