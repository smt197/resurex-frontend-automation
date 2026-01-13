#!/usr/bin/env node

/**
 * Script de génération automatique de module appelé depuis l'API
 *
 * Usage: node scripts/generate-module-api.js <json-file-path>
 */

const fs = require('fs');
const path = require('path');

// Importation du module generate-module pour réutiliser ses fonctions
const {
  templates,
  capitalize,
  getDefaultValue,
  generateFormlyFields,
  createModuleStructure,
  addRouteToFile,
  addTranslations
} = require('./generate-module');

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

async function main() {
  try {
    // Vérifier les arguments
    if (process.argv.length < 3) {
      log('❌ Usage: node generate-module-api.js <json-file-path>', 'red');
      process.exit(1);
    }

    const jsonFilePath = process.argv[2];

    // Vérifier que le fichier existe
    if (!fs.existsSync(jsonFilePath)) {
      log(`❌ File not found: ${jsonFilePath}`, 'red');
      process.exit(1);
    }

    // Lire le fichier JSON
    const jsonContent = fs.readFileSync(jsonFilePath, 'utf8');
    const moduleData = JSON.parse(jsonContent);

    log('\n╔════════════════════════════════════════════╗', 'bright');
    log('║   🚀 AUTO-GENERATOR - API MODULE CREATOR   ║', 'bright');
    log('╚════════════════════════════════════════════╝\n', 'bright');

    // Valider les données
    const {
      moduleName,
      displayName,
      displayNameSingular,
      resourceType,
      identifierField = 'id',
      identifierType = 'number',
      requiresAuth = true,
      routePath,
      fields = [],
      devMode = false,
      translations = null,
      roles = ['user'],
      actions = {
        create: { enabled: true },
        edit: { enabled: true },
        delete: { enabled: true },
        deleteAll: { enabled: false },
        show: { enabled: true },
        search: { enabled: true },
        export: { enabled: false }
      }
    } = moduleData;

    if (!moduleName || !displayName || !displayNameSingular || !resourceType || !routePath) {
      log('❌ Missing required fields in JSON data', 'red');
      process.exit(1);
    }

    if (fields.length === 0) {
      log('❌ At least one field is required!', 'red');
      process.exit(1);
    }

    // Afficher le résumé
    log('📊 Summary:', 'yellow');
    log(`  Module: ${moduleName}`);
    log(`  Display: ${displayName} / ${displayNameSingular}`);
    log(`  Resource: ${resourceType}`);
    log(`  Route: /${routePath}`);
    log(`  Identifier: ${identifierField} (${identifierType})`);
    log(`  Authentication: ${requiresAuth ? 'Required (authenticated route)' : 'Not required (public route)'}`);
    log(`  Access Roles: ${roles.join(', ')}`);
    log(`  Development Mode: ${devMode ? '💻 Yes (Mock data)' : '🌐 No (API calls)'}`, devMode ? 'cyan' : 'reset');
    log(`  Fields: ${fields.map(f => `${f.name} (${f.type}${f.required ? ', required' : ''})`).join(', ')}`);

    // Créer le module
    await createModuleStructure(moduleName, {
      displayName,
      displayNameSingular,
      resourceType,
      routePath,
      identifierField,
      identifierType,
      fields,
      devMode,
      actions,
      roles
    });

    // Ajouter la route automatiquement
    log('\n🔗 Adding route to routing file...', 'blue');
    const routeAdded = addRouteToFile(moduleName, routePath, requiresAuth);

    // Ajouter les traductions automatiquement
    log('\n🌍 Adding translations to i18n files...', 'blue');
    const translationsAdded = addTranslations(moduleName, displayName, displayNameSingular, fields);

    // Instructions finales
    log('\n✨ Module generated successfully!', 'green');
    if (routeAdded) {
      log(`✨ Route automatically added to ${requiresAuth ? 'app.routes.ts (authenticated)' : 'auth-routes.ts (public)'}!`, 'green');
    }
    if (translationsAdded) {
      log('✨ Translations automatically added to en.json, fr.json, and pt.json!', 'green');
    }
    if (devMode) {
      log('✨ Development mode enabled: Mock service and data files created!', 'cyan');
      log('   📝 Check mock-data.json to customize the mock data', 'cyan');
      log('   🔧 The module will use local JSON data instead of API calls', 'cyan');
    }

    log('\n📌 Next steps:', 'yellow');
    log('  1. Restart your Angular development server (npm start)', 'cyan');
    log(`  2. Navigate to: ${requiresAuth ? '/index/' : '/'}${routePath}`, 'cyan');

    process.exit(0);
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Exécuter le script
main();
