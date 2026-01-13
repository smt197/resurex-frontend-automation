#!/usr/bin/env node

/**
 * Script pour lister tous les modules enregistrés
 *
 * Usage: npm run module:list
 * ou: node scripts/list-modules.js
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
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function scanModules() {
  const pagesPath = path.join(process.cwd(), 'src', 'app', 'pages');

  if (!fs.existsSync(pagesPath)) {
    log('❌ Pages directory not found!', 'red');
    return [];
  }

  const modules = [];
  const dirs = fs.readdirSync(pagesPath);

  dirs.forEach(dir => {
    const modulePath = path.join(pagesPath, dir);
    const configPath = path.join(modulePath, `${dir}.config.ts`);

    if (fs.existsSync(configPath)) {
      const stats = fs.statSync(modulePath);
      if (stats.isDirectory()) {
        // Lire le fichier de config pour extraire des infos
        const configContent = fs.readFileSync(configPath, 'utf8');

        const moduleInfo = {
          name: dir,
          hasConfig: true,
          hasComponent: fs.existsSync(path.join(modulePath, `${dir}.component.ts`)),
          hasResolver: fs.existsSync(path.join(modulePath, `${dir}.resolver.ts`)),
          hasRoutes: fs.existsSync(path.join(modulePath, `${dir}.routes.ts`)),
          hasDialogs: fs.existsSync(path.join(modulePath, 'dialogs')),
          configPath: configPath,
          usesAutoGen: configContent.includes('auto-generator')
        };

        modules.push(moduleInfo);
      }
    }
  });

  return modules;
}

function displayModules(modules) {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║     📦 MODULE REGISTRY - STATUS       ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');

  if (modules.length === 0) {
    log('❌ No modules with .config.ts found!', 'red');
    log('   Run: npm run module:generate to create your first module\n', 'yellow');
    return;
  }

  const autoGenModules = modules.filter(m => m.usesAutoGen);
  const legacyModules = modules.filter(m => !m.usesAutoGen);

  log(`📊 Total modules: ${modules.length}`, 'cyan');
  log(`   ✅ Auto-generated: ${autoGenModules.length}`, 'green');
  log(`   ⚠️  Legacy: ${legacyModules.length}\n`, 'yellow');

  if (autoGenModules.length > 0) {
    log('✨ AUTO-GENERATED MODULES:', 'green');
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'green');

    autoGenModules.forEach((module, index) => {
      const status = [];
      if (module.hasComponent) status.push('✓ Component');
      if (module.hasResolver) status.push('✓ Resolver');
      if (module.hasRoutes) status.push('✓ Routes');
      if (module.hasDialogs) status.push('✓ Dialogs');

      log(`${index + 1}. ${module.name}`, 'bright');
      log(`   Status: ${status.join(' | ')}`, 'cyan');
      log(`   Path: src/app/pages/${module.name}/\n`, 'blue');
    });
  }

  if (legacyModules.length > 0) {
    log('⚠️  LEGACY MODULES (need migration):', 'yellow');
    log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'yellow');

    legacyModules.forEach((module, index) => {
      log(`${index + 1}. ${module.name}`, 'bright');
      log(`   Path: src/app/pages/${module.name}/`, 'blue');
      log(`   💡 Run: npm run module:migrate ${module.name}\n`, 'cyan');
    });
  }

  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');
  log('📚 Commands:', 'yellow');
  log('   npm run module:generate     - Create a new module', 'cyan');
  log('   npm run module:migrate      - Migrate existing module', 'cyan');
  log('   npm run module:validate     - Validate all modules\n', 'cyan');
}

function main() {
  try {
    const modules = scanModules();
    displayModules(modules);
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    console.error(error);
  }
}

main();
