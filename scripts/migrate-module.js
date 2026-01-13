#!/usr/bin/env node

/**
 * Script de migration d'un module existant vers l'architecture auto-generator
 *
 * Usage: npm run module:migrate <module-name>
 * ou: node scripts/migrate-module.js <module-name>
 */

const fs = require('fs');
const path = require('path');

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function backupFile(filepath) {
  if (fs.existsSync(filepath)) {
    const backupPath = filepath.replace(/\.ts$/, '.old.ts');
    fs.copyFileSync(filepath, backupPath);
    log(`  ✓ Backed up: ${path.basename(filepath)} → ${path.basename(backupPath)}`, 'yellow');
    return true;
  }
  return false;
}

function analyzeModule(modulePath, moduleName) {
  log('\n🔍 Analyzing existing module...', 'blue');

  const analysis = {
    hasComponent: fs.existsSync(path.join(modulePath, `${moduleName}.component.ts`)),
    hasResolver: fs.existsSync(path.join(modulePath, `${moduleName}.resolver.ts`)),
    hasRoutes: fs.existsSync(path.join(modulePath, `${moduleName}.routes.ts`)),
    hasService: fs.existsSync(path.join(modulePath, `${moduleName}.service.ts`)),
    hasModel: fs.existsSync(path.join(process.cwd(), 'src', 'app', 'models', `${moduleName.slice(0, -1)}.model.ts`)),
    hasInterface: fs.existsSync(path.join(process.cwd(), 'src', 'app', 'interfaces', `${capitalize(moduleName)}.ts`)),
    hasDialogs: fs.existsSync(path.join(modulePath, 'dialogs'))
  };

  log('\n📋 Current structure:', 'cyan');
  Object.entries(analysis).forEach(([key, value]) => {
    const icon = value ? '✓' : '✗';
    const color = value ? 'green' : 'red';
    log(`  ${icon} ${key}`, color);
  });

  return analysis;
}

function extractConfigFromComponent(componentPath) {
  if (!fs.existsSync(componentPath)) {
    return null;
  }

  const content = fs.readFileSync(componentPath, 'utf8');

  // Essayer d'extraire des informations basiques
  const config = {
    identifierField: 'id',
    identifierType: 'number',
    useFormData: false,
    optimisticUpdate: false,
    optimisticDelete: false
  };

  // Détecter le type d'identifiant
  if (content.includes('.slug')) {
    config.identifierField = 'slug';
    config.identifierType = 'string';
  }

  // Détecter l'utilisation de FormData
  if (content.includes('FormData') || content.includes('formDataBuilder')) {
    config.useFormData = true;
  }

  // Détecter les mises à jour optimistes
  if (content.includes('optimistic')) {
    config.optimisticUpdate = true;
    config.optimisticDelete = true;
  }

  return config;
}

function createConfigTemplate(moduleName, detectedConfig) {
  return `import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { ${moduleName}FormlyFields } from 'src/app/interfaces/${capitalize(moduleName)}';
import { Authority } from 'src/static-data/authority.constants';
import { ${capitalize(moduleName.slice(0, -1))} } from 'src/app/models/${moduleName.slice(0, -1)}.model';

// TODO: Import your dialog components
// import { ${capitalize(moduleName.slice(0, -1))}CreateUpdateComponent } from './dialogs/${moduleName.slice(0, -1)}-create-update/${moduleName.slice(0, -1)}-create-update.component';
// import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

/**
 * Configuration du module ${capitalize(moduleName)}
 *
 * ⚠️  IMPORTANT: Cette configuration a été générée automatiquement.
 * Veuillez vérifier et ajuster les valeurs selon vos besoins.
 */
export const ${moduleName.toUpperCase()}_CONFIG: ModuleConfig<${capitalize(moduleName.slice(0, -1))}> = {
  // ========== IDENTITÉ ==========
  moduleName: '${moduleName}',
  resourceType: '${moduleName}', // TODO: Vérifier que c'est correct
  displayName: '${capitalize(moduleName)}', // TODO: Ajuster si nécessaire
  displayNameSingular: '${capitalize(moduleName.slice(0, -1))}', // TODO: Ajuster si nécessaire

  // ========== IDENTIFIANTS ==========
  identifierField: '${detectedConfig.identifierField}',
  identifierType: '${detectedConfig.identifierType}',

  // ========== ROUTING ==========
  route: {
    path: '${moduleName}', // TODO: Vérifier le chemin actuel dans app.routes.ts
    permissions: [Authority.ADMIN], // TODO: Ajuster les permissions
    resolver: true,
    resolverKey: '${moduleName}Data'
  },

  // ========== FORMULAIRE ==========
  form: {
    fields: ${moduleName}FormlyFields,
    width: '650px' // TODO: Ajuster si nécessaire
  },

  // ========== ACTIONS DISPONIBLES ==========
  actions: {
    create: { enabled: true }, // TODO: Désactiver si non utilisé
    edit: { enabled: true },
    delete: { enabled: true },
    deleteAll: { enabled: true },
    show: { enabled: false }, // TODO: Activer si vous avez un dialog de détails
    search: { enabled: true },
    export: { enabled: false } // TODO: Activer si nécessaire
  },

  // ========== GESTION DES DONNÉES ==========
  data: {
    useFormData: ${detectedConfig.useFormData}, // ${detectedConfig.useFormData ? 'Détecté: upload de fichiers' : 'Pas d\'upload'}
    optimisticUpdate: ${detectedConfig.optimisticUpdate},
    optimisticDelete: ${detectedConfig.optimisticDelete},
    autoRefresh: true,
    useGenericApi: true // TODO: Changer en false si vous utilisez un service custom
  },

  // ========== TABLE / LISTE ==========
  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: true
  },

  // ========== NOTIFICATIONS ==========
  notifications: {
    duration: 3000,
    messages: {
      createSuccess: '${capitalize(moduleName.slice(0, -1))} created successfully!',
      updateSuccess: '${capitalize(moduleName.slice(0, -1))} updated successfully!',
      deleteSuccess: '${capitalize(moduleName.slice(0, -1))} deleted successfully!',
      deleteAllSuccess: '${capitalize(moduleName)} deleted successfully!',
      createError: 'Error creating ${moduleName.slice(0, -1)}.',
      updateError: 'Error updating ${moduleName.slice(0, -1)}.',
      deleteError: 'Error deleting ${moduleName.slice(0, -1)}.'
    }
  },

  // ========== DIALOGS ==========
  // TODO: Décommenter et ajuster les imports ci-dessus
  // dialogs: {
  //   createUpdate: ${capitalize(moduleName.slice(0, -1))}CreateUpdateComponent,
  //   delete: DeleteElementComponent
  // }
};
`;
}

function createNewComponent(moduleName) {
  return `import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';

/**
 * Composant ${capitalize(moduleName)} - Nouvelle architecture
 *
 * ✨ Ce composant utilise maintenant l'architecture auto-generator.
 * Toute la logique est dans ${moduleName}.config.ts
 */
@Component({
  selector: 'vex-${moduleName}',
  standalone: true,
  imports: [GenericModuleComponent],
  template: \`<vex-generic-module [config]="config"></vex-generic-module>\`
})
export class ${capitalize(moduleName)}Component {
  config = ${moduleName.toUpperCase()}_CONFIG;
}
`;
}

function createNewResolver(moduleName) {
  return `import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';

/**
 * Resolver ${capitalize(moduleName)} - Nouvelle architecture
 *
 * ✨ Ce resolver est auto-généré à partir de la configuration.
 */
export const ${moduleName}Resolver = createGenericResolver(${moduleName.toUpperCase()}_CONFIG);
`;
}

function createNewRoutes(moduleName) {
  return `import { createModuleRoutes } from 'src/app/core/auto-generator/utils/route-generator';
import { ${moduleName.toUpperCase()}_CONFIG } from './${moduleName}.config';

/**
 * Routes ${capitalize(moduleName)} - Nouvelle architecture
 *
 * ✨ Ces routes sont auto-générées à partir de la configuration.
 */
export const ${moduleName}Routes = createModuleRoutes(${moduleName.toUpperCase()}_CONFIG);
export default ${moduleName}Routes;
`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function migrateModule(moduleName) {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║  🔄 AUTO-GENERATOR - MODULE MIGRATION  ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');

  const modulePath = path.join(process.cwd(), 'src', 'app', 'pages', moduleName);

  // Vérifier que le module existe
  if (!fs.existsSync(modulePath)) {
    log(`❌ Module "${moduleName}" not found!`, 'red');
    log(`   Path: ${modulePath}`, 'red');
    return;
  }

  // Analyser le module existant
  const analysis = analyzeModule(modulePath, moduleName);

  if (!analysis.hasComponent) {
    log('\n❌ No component found! Cannot migrate.', 'red');
    return;
  }

  log('\n📦 Starting migration...', 'blue');

  // Backup des fichiers existants
  log('\n💾 Backing up existing files...', 'yellow');
  backupFile(path.join(modulePath, `${moduleName}.component.ts`));
  backupFile(path.join(modulePath, `${moduleName}.resolver.ts`));
  backupFile(path.join(modulePath, `${moduleName}.routes.ts`));

  // Extraire la configuration depuis le composant existant
  const componentPath = path.join(modulePath, `${moduleName}.component.old.ts`) ||
                        path.join(modulePath, `${moduleName}.component.ts`);
  const detectedConfig = extractConfigFromComponent(componentPath) || {
    identifierField: 'id',
    identifierType: 'number',
    useFormData: false,
    optimisticUpdate: false,
    optimisticDelete: false
  };

  // Créer le nouveau fichier de configuration
  log('\n📝 Creating configuration file...', 'blue');
  const configPath = path.join(modulePath, `${moduleName}.config.ts`);
  const configContent = createConfigTemplate(moduleName, detectedConfig);
  fs.writeFileSync(configPath, configContent);
  log(`  ✓ Created: ${moduleName}.config.ts`, 'green');

  // Créer le nouveau composant
  log('\n🔨 Creating new component...', 'blue');
  const newComponentPath = path.join(modulePath, `${moduleName}.component.ts`);
  const newComponentContent = createNewComponent(moduleName);
  fs.writeFileSync(newComponentPath, newComponentContent);
  log(`  ✓ Created: ${moduleName}.component.ts`, 'green');

  // Créer le nouveau resolver
  log('\n🔨 Creating new resolver...', 'blue');
  const newResolverPath = path.join(modulePath, `${moduleName}.resolver.ts`);
  const newResolverContent = createNewResolver(moduleName);
  fs.writeFileSync(newResolverPath, newResolverContent);
  log(`  ✓ Created: ${moduleName}.resolver.ts`, 'green');

  // Créer les nouvelles routes
  if (analysis.hasRoutes) {
    log('\n🔨 Creating new routes...', 'blue');
    const newRoutesPath = path.join(modulePath, `${moduleName}.routes.ts`);
    const newRoutesContent = createNewRoutes(moduleName);
    fs.writeFileSync(newRoutesPath, newRoutesContent);
    log(`  ✓ Created: ${moduleName}.routes.ts`, 'green');
  }

  // Instructions finales
  log('\n✅ Migration completed!', 'green');
  log('\n📌 Next steps:', 'yellow');
  log('  1. Open and review the generated config file:', 'cyan');
  log(`     src/app/pages/${moduleName}/${moduleName}.config.ts`, 'green');
  log('  2. Adjust the TODO comments in the config', 'cyan');
  log('  3. Uncomment and fix the dialog imports', 'cyan');
  log('  4. Register the module in app.routes.ts:', 'cyan');
  log(`     import { ${moduleName.toUpperCase()}_CONFIG } from './pages/${moduleName}/${moduleName}.config';`, 'green');
  log(`     moduleRegistry.register(${moduleName.toUpperCase()}_CONFIG);`, 'green');
  log('  5. Test the module: npm start', 'cyan');
  log('  6. If everything works, delete the .old.ts files\n', 'cyan');

  log('⚠️  Old files are backed up as .old.ts', 'yellow');
  log('   You can compare them to see what changed.\n', 'yellow');
}

function main() {
  const moduleName = process.argv[2];

  if (!moduleName) {
    log('\n❌ Module name is required!', 'red');
    log('\nUsage: npm run module:migrate <module-name>', 'yellow');
    log('Example: npm run module:migrate users\n', 'cyan');
    return;
  }

  try {
    migrateModule(moduleName);
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    console.error(error);
  }
}

main();
