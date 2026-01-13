import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { ModuleConfig } from '../interfaces/module-config.interface';
import { createModuleRoutes } from './route-generator';

/**
 * Registry centralisé de tous les modules configurés
 *
 * IMPORTANT: Les développeurs doivent enregistrer leurs modules ici
 * pour qu'ils soient automatiquement détectés et enregistrés dans les routes
 */
class ModuleRegistry {
  private static instance: ModuleRegistry;
  private modules: Map<string, ModuleConfig> = new Map();

  private constructor() {}

  static getInstance(): ModuleRegistry {
    if (!ModuleRegistry.instance) {
      ModuleRegistry.instance = new ModuleRegistry();
    }
    return ModuleRegistry.instance;
  }

  /**
   * Enregistre un module dans le registry
   */
  register(config: ModuleConfig): void {
    if (this.modules.has(config.moduleName)) {
      console.warn(
        `Module ${config.moduleName} is already registered. It will be overwritten.`
      );
    }

    this.modules.set(config.moduleName, config);
    console.log(`✓ Module registered: ${config.moduleName} at route /${config.route.path}`);
  }

  /**
   * Enregistre plusieurs modules
   */
  registerMany(configs: ModuleConfig[]): void {
    configs.forEach((config) => this.register(config));
  }

  /**
   * Récupère un module par son nom
   */
  get(moduleName: string): ModuleConfig | undefined {
    return this.modules.get(moduleName);
  }

  /**
   * Récupère tous les modules enregistrés
   */
  getAll(): ModuleConfig[] {
    return Array.from(this.modules.values());
  }

  /**
   * Vérifie si un module est enregistré
   */
  has(moduleName: string): boolean {
    return this.modules.has(moduleName);
  }

  /**
   * Supprime un module du registry
   */
  unregister(moduleName: string): boolean {
    return this.modules.delete(moduleName);
  }

  /**
   * Vide le registry
   */
  clear(): void {
    this.modules.clear();
  }

  /**
   * Retourne le nombre de modules enregistrés
   */
  get count(): number {
    return this.modules.size;
  }

  /**
   * Liste tous les modules enregistrés (pour debug)
   */
  listAll(): void {
    console.log('\n=== Registered Modules ===');
    this.modules.forEach((config, name) => {
      console.log(`- ${name} (/${config.route.path})`);
    });
    console.log(`Total: ${this.count} modules\n`);
  }
}

/**
 * Instance singleton du registry
 */
export const moduleRegistry = ModuleRegistry.getInstance();

/**
 * Génère automatiquement les routes pour tous les modules enregistrés
 *
 * @returns Tableau de routes générées pour tous les modules
 *
 * @example
 * ```typescript
 * // Dans app.routes.ts
 * import { autoRegisterModules } from '@core/auto-generator/utils/module-scanner';
 * import { moduleRegistry } from '@core/auto-generator/utils/module-scanner';
 * import { ROLES_CONFIG } from './pages/roles/roles.config';
 * import { USERS_CONFIG } from './pages/users/users.config';
 *
 * // Enregistrer les modules
 * moduleRegistry.registerMany([ROLES_CONFIG, USERS_CONFIG]);
 *
 * // Générer les routes automatiquement
 * const autoRoutes = autoRegisterModules();
 *
 * export const appRoutes: VexRoutes = [
 *   {
 *     path: 'index',
 *     component: LayoutComponent,
 *     children: [
 *       ...autoRoutes,  // ✨ Routes auto-générées
 *       // autres routes manuelles...
 *     ]
 *   }
 * ];
 * ```
 */
export function autoRegisterModules(): VexRoutes {
  const configs = moduleRegistry.getAll();

  if (configs.length === 0) {
    console.warn(
      '⚠️  No modules registered in moduleRegistry. Did you forget to register your modules?'
    );
    return [];
  }

  console.log(`\n🚀 Auto-registering ${configs.length} module(s)...`);

  const routes = configs.flatMap((config) => {
    try {
      return createModuleRoutes(config);
    } catch (error) {
      console.error(`Error generating routes for module ${config.moduleName}:`, error);
      return [];
    }
  });

  console.log(`✓ Successfully generated ${routes.length} route(s)\n`);

  return routes;
}

/**
 * Génère les routes pour des modules spécifiques
 *
 * @param moduleNames Noms des modules à inclure
 * @returns Routes générées pour les modules spécifiés
 */
export function autoRegisterSpecificModules(moduleNames: string[]): VexRoutes {
  const configs = moduleNames
    .map((name) => moduleRegistry.get(name))
    .filter((config): config is ModuleConfig => config !== undefined);

  if (configs.length === 0) {
    console.warn('⚠️  No valid modules found for the specified names');
    return [];
  }

  return configs.flatMap((config) => createModuleRoutes(config));
}

/**
 * Génère les routes pour tous les modules sauf ceux spécifiés
 *
 * @param excludeModules Noms des modules à exclure
 * @returns Routes générées (modules exclus non inclus)
 */
export function autoRegisterModulesExcept(excludeModules: string[]): VexRoutes {
  const allConfigs = moduleRegistry.getAll();
  const configs = allConfigs.filter(
    (config) => !excludeModules.includes(config.moduleName)
  );

  return configs.flatMap((config) => createModuleRoutes(config));
}

/**
 * Filtre les modules par permissions
 *
 * @param requiredPermissions Permissions requises
 * @returns Routes des modules ayant les permissions spécifiées
 */
export function autoRegisterModulesByPermissions(
  requiredPermissions: string[]
): VexRoutes {
  const configs = moduleRegistry.getAll().filter((config) => {
    if (!config.route.permissions) return false;

    return config.route.permissions.some((permission) =>
      requiredPermissions.includes(permission)
    );
  });

  return configs.flatMap((config) => createModuleRoutes(config));
}

/**
 * Classe utilitaire pour grouper les modules
 */
export class ModuleGroup {
  constructor(
    public name: string,
    public modules: ModuleConfig[]
  ) {}

  /**
   * Génère les routes pour ce groupe
   */
  generateRoutes(): VexRoutes {
    return this.modules.flatMap((config) => createModuleRoutes(config));
  }

  /**
   * Ajoute un module au groupe
   */
  addModule(config: ModuleConfig): void {
    this.modules.push(config);
  }

  /**
   * Retire un module du groupe
   */
  removeModule(moduleName: string): void {
    this.modules = this.modules.filter((m) => m.moduleName !== moduleName);
  }
}

/**
 * Crée un groupe de modules
 *
 * @example
 * ```typescript
 * const adminModules = createModuleGroup('admin', [
 *   ROLES_CONFIG,
 *   USERS_CONFIG,
 *   PERMISSIONS_CONFIG
 * ]);
 *
 * const adminRoutes = adminModules.generateRoutes();
 * ```
 */
export function createModuleGroup(name: string, configs: ModuleConfig[]): ModuleGroup {
  return new ModuleGroup(name, configs);
}

/**
 * Helper pour importer et enregistrer automatiquement tous les fichiers .config.ts
 * (Nécessite un bundler comme Webpack avec support import.meta.glob ou similaire)
 *
 * Note: Cette fonction est un exemple conceptuel et nécessite une adaptation
 * selon le bundler utilisé (Webpack, Vite, etc.)
 */
export function autoDiscoverAndRegisterModules(): void {
  // Cette fonction nécessiterait un système de découverte automatique
  // spécifique au bundler utilisé (ex: Webpack context API, Vite glob import, etc.)

  console.warn(
    'autoDiscoverAndRegisterModules: Cette fonction nécessite une implémentation spécifique au bundler'
  );

  // Exemple avec Vite (à adapter selon votre bundler):
  // const configFiles = import.meta.glob('../../../pages/**/*.config.ts', { eager: true });
  // Object.values(configFiles).forEach((module: any) => {
  //   const config = module.default || Object.values(module)[0];
  //   if (config && config.moduleName) {
  //     moduleRegistry.register(config);
  //   }
  // });
}

/**
 * Valide tous les modules enregistrés
 * Utile pour détecter les erreurs de configuration au démarrage
 */
export function validateAllModules(): {
  valid: ModuleConfig[];
  invalid: { config: ModuleConfig; errors: string[] }[];
} {
  const allModules = moduleRegistry.getAll();
  const valid: ModuleConfig[] = [];
  const invalid: { config: ModuleConfig; errors: string[] }[] = [];

  allModules.forEach((config) => {
    const errors: string[] = [];

    // Validation basique
    if (!config.moduleName) errors.push('moduleName is required');
    if (!config.resourceType) errors.push('resourceType is required');
    if (!config.route?.path) errors.push('route.path is required');
    if (!config.form?.fields) errors.push('form.fields is required');

    if (errors.length > 0) {
      invalid.push({ config, errors });
    } else {
      valid.push(config);
    }
  });

  // Afficher les résultats
  if (invalid.length > 0) {
    console.error('\n❌ Invalid module configurations found:');
    invalid.forEach(({ config, errors }) => {
      console.error(`- ${config.moduleName || 'unknown'}:`);
      errors.forEach((error) => console.error(`  • ${error}`));
    });
  }

  if (valid.length > 0) {
    console.log(`\n✓ ${valid.length} valid module(s) found`);
  }

  return { valid, invalid };
}

/**
 * Exporte toutes les configurations de modules pour inspection
 */
export function exportModuleConfigs(): Record<string, ModuleConfig> {
  const configs: Record<string, ModuleConfig> = {};
  moduleRegistry.getAll().forEach((config) => {
    configs[config.moduleName] = config;
  });
  return configs;
}

/**
 * Importe des configurations de modules depuis un objet
 */
export function importModuleConfigs(configs: Record<string, ModuleConfig>): void {
  Object.values(configs).forEach((config) => {
    moduleRegistry.register(config);
  });
}
