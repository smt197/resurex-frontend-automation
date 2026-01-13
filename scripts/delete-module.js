#!/usr/bin/env node

/**
 * Script de suppression automatique de module
 *
 * Usage: npm run module:delete
 * ou: node scripts/delete-module.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function question(query) {
  return new Promise(resolve => rl.question(`${colors.cyan}${query}${colors.reset}`, resolve));
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectory(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
    return true;
  }
  return false;
}

function removeRouteFromFile(moduleName, routePath) {
  const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
  const authRoutesPath = path.join(process.cwd(), 'src', 'app', 'auth', 'auth-routes.ts');

  let removed = false;

  // Essayer de supprimer de app.routes.ts
  try {
    if (fs.existsSync(appRoutesPath)) {
      let content = fs.readFileSync(appRoutesPath, 'utf8');
      const lines = content.split('\n');

      let inRoute = false;
      let routeStartIndex = -1;
      let routeEndIndex = -1;
      let braceCount = 0;

      // Parcourir ligne par ligne pour trouver la route
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Détecter le début de la route (supporte loadComponent et loadChildren)
        if (!inRoute && line.includes(`path: '${routePath}'`)) {
          const nextLines = lines.slice(i, Math.min(i + 10, lines.length)).join('\n');
          const hasModuleReference = nextLines.includes(`${capitalize(moduleName)}Component`) ||
                                      nextLines.includes(`${moduleName}Routes`) ||
                                      nextLines.includes(`${moduleName}.routes`);

          if (hasModuleReference) {
            // Trouver le début de l'objet (ligne avec {)
            for (let j = i; j >= 0; j--) {
              if (lines[j].trim().endsWith('{') || lines[j].trim() === '{') {
                routeStartIndex = j;
                inRoute = true;
                braceCount = 1;
                break;
              }
            }
          }
        }

        // Compter les accolades pour trouver la fin de l'objet
        if (inRoute) {
          for (let char of line) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }

          if (braceCount === 0) {
            routeEndIndex = i;
            break;
          }
        }
      }

      // Si la route a été trouvée, la supprimer
      if (routeStartIndex !== -1 && routeEndIndex !== -1) {
        // Supprimer les lignes de la route
        const newLines = [
          ...lines.slice(0, routeStartIndex),
          ...lines.slice(routeEndIndex + 1)
        ];

        // Nettoyer les virgules doubles ou virgules avant accolade fermante
        const cleanedContent = newLines.join('\n')
          .replace(/,(\s*),/g, ',') // Virgules doubles
          .replace(/,(\s*)\]/g, ']') // Virgule avant ]
          .replace(/,(\s*)\}/g, '}'); // Virgule avant }

        fs.writeFileSync(appRoutesPath, cleanedContent);
        log('  ✓ Route removed from app.routes.ts', 'green');
        removed = true;
      }
    }
  } catch (error) {
    log(`  ⚠️  Could not remove route from app.routes.ts: ${error.message}`, 'yellow');
  }

  // Essayer de supprimer de auth-routes.ts
  try {
    if (fs.existsSync(authRoutesPath)) {
      let content = fs.readFileSync(authRoutesPath, 'utf8');
      const lines = content.split('\n');

      let inRoute = false;
      let routeStartIndex = -1;
      let routeEndIndex = -1;
      let braceCount = 0;

      // Parcourir ligne par ligne pour trouver la route
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Détecter le début de la route (supporte loadComponent et loadChildren)
        if (!inRoute && line.includes(`path: '${routePath}'`)) {
          const nextLines = lines.slice(i, Math.min(i + 10, lines.length)).join('\n');
          const hasModuleReference = nextLines.includes(`${capitalize(moduleName)}Component`) ||
                                      nextLines.includes(`${moduleName}Routes`) ||
                                      nextLines.includes(`${moduleName}.routes`);

          if (hasModuleReference) {
            // Trouver le début de l'objet (ligne avec {)
            for (let j = i; j >= 0; j--) {
              if (lines[j].trim().endsWith('{') || lines[j].trim() === '{') {
                routeStartIndex = j;
                inRoute = true;
                braceCount = 1;
                break;
              }
            }
          }
        }

        // Compter les accolades pour trouver la fin de l'objet
        if (inRoute) {
          for (let char of line) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }

          if (braceCount === 0) {
            routeEndIndex = i;
            break;
          }
        }
      }

      // Si la route a été trouvée, la supprimer
      if (routeStartIndex !== -1 && routeEndIndex !== -1) {
        // Supprimer les lignes de la route
        const newLines = [
          ...lines.slice(0, routeStartIndex),
          ...lines.slice(routeEndIndex + 1)
        ];

        // Nettoyer les virgules doubles ou virgules avant accolade fermante
        const cleanedContent = newLines.join('\n')
          .replace(/,(\s*),/g, ',') // Virgules doubles
          .replace(/,(\s*)\]/g, ']') // Virgule avant ]
          .replace(/,(\s*)\}/g, '}'); // Virgule avant }

        fs.writeFileSync(authRoutesPath, cleanedContent);
        log('  ✓ Route removed from auth-routes.ts', 'green');
        removed = true;
      }
    }
  } catch (error) {
    log(`  ⚠️  Could not remove route from auth-routes.ts: ${error.message}`, 'yellow');
  }

  return removed;
}

function removeTranslations(moduleName) {
  const i18nPath = path.join(process.cwd(), 'src', 'assets', 'i18n');
  const languages = ['en', 'fr', 'pt'];
  const singularName = moduleName.slice(0, -1); // Ex: 'products' -> 'product'

  let allSuccess = true;
  let translationsRemoved = 0;

  languages.forEach(lang => {
    try {
      const filePath = path.join(i18nPath, `${lang}.json`);

      if (fs.existsSync(filePath)) {
        // Lire le fichier JSON
        const content = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(content);
        let modified = false;

        // 1. Supprimer de menu
        if (jsonData.menu && jsonData.menu[moduleName]) {
          delete jsonData.menu[moduleName];
          modified = true;
          log(`    - Removed menu.${moduleName}`, 'cyan');
        }

        // 2. Supprimer de global.types
        if (jsonData.global && jsonData.global.types && jsonData.global.types[moduleName]) {
          delete jsonData.global.types[moduleName];
          modified = true;
          log(`    - Removed global.types.${moduleName}`, 'cyan');
        }

        // 3. Supprimer les traductions des champs du module (label, placeholder, validation)
        if (jsonData[singularName]) {
          delete jsonData[singularName];
          modified = true;
          log(`    - Removed ${singularName}.* (label, placeholder, validation)`, 'cyan');
        }

        // Écrire le fichier avec formatage (2 espaces) seulement si modifié
        if (modified) {
          fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
          log(`  ✓ Translations removed from ${lang}.json`, 'green');
          translationsRemoved++;
        } else {
          log(`  ℹ️  No translations found in ${lang}.json`, 'blue');
        }
      } else {
        log(`  ⚠️  File not found: ${lang}.json`, 'yellow');
      }
    } catch (error) {
      log(`  ⚠️  Could not remove translations from ${lang}.json: ${error.message}`, 'yellow');
      log(`     ${error.stack}`, 'red');
      allSuccess = false;
    }
  });

  return allSuccess && translationsRemoved > 0;
}


async function deleteModule(moduleName) {
  log('\n🗑️  Starting module deletion...', 'blue');

  const basePath = path.join(process.cwd(), 'src', 'app', 'pages', moduleName);
  const modelPath = path.join(process.cwd(), 'src', 'app', 'models', `${moduleName.slice(0, -1)}.model.ts`);
  const interfacePath = path.join(process.cwd(), 'src', 'app', 'interfaces', `${capitalize(moduleName)}.ts`);

  let filesDeleted = 0;

  // Supprimer le répertoire du module
  if (deleteDirectory(basePath)) {
    log(`  ✓ Deleted: pages/${moduleName}/`, 'green');
    filesDeleted++;
  } else {
    log(`  ⚠️  Directory not found: pages/${moduleName}/`, 'yellow');
  }

  // Supprimer le model
  if (fs.existsSync(modelPath)) {
    fs.unlinkSync(modelPath);
    log(`  ✓ Deleted: models/${moduleName.slice(0, -1)}.model.ts`, 'green');
    filesDeleted++;
  } else {
    log(`  ⚠️  File not found: models/${moduleName.slice(0, -1)}.model.ts`, 'yellow');
  }

  // Supprimer l'interface
  if (fs.existsSync(interfacePath)) {
    fs.unlinkSync(interfacePath);
    log(`  ✓ Deleted: interfaces/${capitalize(moduleName)}.ts`, 'green');
    filesDeleted++;
  } else {
    log(`  ⚠️  File not found: interfaces/${capitalize(moduleName)}.ts`, 'yellow');
  }

  return filesDeleted > 0;
}

async function main() {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║   🗑️  AUTO-GENERATOR - MODULE DELETER    ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');

  try {
    // Lister les modules disponibles
    const pagesPath = path.join(process.cwd(), 'src', 'app', 'pages');
    const modules = fs.readdirSync(pagesPath)
      .filter(file => {
        const fullPath = path.join(pagesPath, file);
        return fs.statSync(fullPath).isDirectory();
      })
      .filter(module => {
        // Vérifier si c'est un module généré (a un fichier .config.ts)
        const configPath = path.join(pagesPath, module, `${module}.config.ts`);
        return fs.existsSync(configPath);
      });

    if (modules.length === 0) {
      log('❌ No generated modules found!', 'red');
      rl.close();
      return;
    }

    log('📋 Available modules:', 'yellow');
    modules.forEach((module, index) => {
      log(`  ${index + 1}. ${module}`, 'cyan');
    });

    // Question
    const moduleName = await question('\n📝 Enter module name to delete: ');
    if (!moduleName) {
      log('❌ Module name is required!', 'red');
      rl.close();
      return;
    }

    // Vérifier si le module existe
    const modulePath = path.join(pagesPath, moduleName);
    if (!fs.existsSync(modulePath)) {
      log(`❌ Module "${moduleName}" not found!`, 'red');
      rl.close();
      return;
    }

    // Confirmer la suppression
    log(`\n⚠️  WARNING: This will delete all files related to the "${moduleName}" module:`, 'yellow');
    log(`  - pages/${moduleName}/`, 'red');
    log(`  - models/${moduleName.slice(0, -1)}.model.ts`, 'red');
    log(`  - interfaces/${capitalize(moduleName)}.ts`, 'red');
    log(`  - Routes in app.routes.ts or auth-routes.ts`, 'red');
    log(`  - Translations in i18n files`, 'red');

    const confirm = await question('\n❗ Are you sure you want to delete this module? (type "yes" to confirm): ');
    if (confirm.toLowerCase() !== 'yes') {
      log('❌ Deletion cancelled.', 'red');
      rl.close();
      return;
    }

    // Demander le chemin de la route pour la suppression
    const routePath = await question(`📝 Route path for this module (default: "${moduleName}"): `) || moduleName;

    // Supprimer le module
    const moduleDeleted = await deleteModule(moduleName);

    if (!moduleDeleted) {
      log('\n❌ No files were deleted. Module might not exist.', 'red');
      rl.close();
      return;
    }

    // Supprimer la route
    log('\n🔗 Removing route from routing files...', 'blue');
    const routeRemoved = removeRouteFromFile(moduleName, routePath);

    if (!routeRemoved) {
      log('  ⚠️  Route not found in routing files (might need manual removal)', 'yellow');
    }

    // Nettoyer les imports inutiles
    log('\n🧹 Cleaning up route imports...', 'blue');
    const menuManager = require('./menu-api-manager');
    const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
    const authRoutesPath = path.join(process.cwd(), 'src', 'app', 'auth', 'auth-routes.ts');

    const appRoutesCleanup = menuManager.cleanupRouteImports(appRoutesPath, moduleName);
    const authRoutesCleanup = menuManager.cleanupRouteImports(authRoutesPath, moduleName);

    if (appRoutesCleanup || authRoutesCleanup) {
      log('  ✓ Unused imports cleaned successfully', 'green');
    } else {
      log('  ⚠️  No unused imports found to clean', 'yellow');
    }

    // Supprimer les traductions
    log('\n🌍 Removing translations from i18n files...', 'blue');
    const translationsRemoved = removeTranslations(moduleName);

    // Résumé final
    log('\n✅ Module deletion completed!', 'green');
    log(`\n📊 Summary:`, 'yellow');
    log(`  ✓ Module files deleted`, 'green');
    if (routeRemoved) {
      log(`  ✓ Routes removed from routing files`, 'green');
    }
    if (appRoutesCleanup || authRoutesCleanup) {
      log(`  ✓ Unused imports cleaned from routing files`, 'green');
    }
    if (translationsRemoved) {
      log(`  ✓ Translations removed from i18n files`, 'green');
    }

    log('\n📌 Next steps:', 'yellow');
    log('  1. Restart your development server if running', 'cyan');
    log('  2. Check for any remaining references to the deleted module', 'cyan');

  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    console.error(error);
  } finally {
    rl.close();
  }
}

main();
