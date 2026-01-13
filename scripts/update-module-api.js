#!/usr/bin/env node

/**
 * Script de mise à jour automatique de module appelé depuis l'API backend
 * Basé sur update-module.js
 *
 * Usage: node scripts/update-module-api.js <json-file-path>
 */

const fs = require('fs');
const path = require('path');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Supprimer complètement un répertoire
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

// Supprimer l'ancien module complètement (comme dans update-module.js)
function deleteOldModule(moduleName) {
  console.log('\n🗑️  Deleting old module files...');

  const singularName = moduleName.slice(0, -1);
  const capitalizedName = capitalize(moduleName);

  let filesDeleted = 0;

  // 1. Supprimer le dossier du module
  const modulePath = path.join(process.cwd(), 'src', 'app', 'pages', moduleName);
  if (fs.existsSync(modulePath)) {
    fs.rmSync(modulePath, { recursive: true, force: true });
    console.log(`  ✓ Deleted: pages/${moduleName}/`);
    filesDeleted++;
  }

  // 2. Supprimer le model
  const modelPath = path.join(process.cwd(), 'src', 'app', 'models', `${singularName}.model.ts`);
  if (fs.existsSync(modelPath)) {
    fs.unlinkSync(modelPath);
    console.log(`  ✓ Deleted: models/${singularName}.model.ts`);
    filesDeleted++;
  }

  // 3. Supprimer l'interface
  const interfacePath = path.join(process.cwd(), 'src', 'app', 'interfaces', `${capitalizedName}.ts`);
  if (fs.existsSync(interfacePath)) {
    fs.unlinkSync(interfacePath);
    console.log(`  ✓ Deleted: interfaces/${capitalizedName}.ts`);
    filesDeleted++;
  }

  console.log(`  ✓ Deleted ${filesDeleted} file(s)`);
  return filesDeleted;
}

// Nettoyer les imports (comme dans update-module.js)
function cleanupImports(moduleName) {
  console.log('\n🧹 Cleaning up imports...');

  const menuManager = require('./menu-api-manager');
  const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
  const authRoutesPath = path.join(process.cwd(), 'src', 'app', 'auth', 'auth-routes.ts');

  let cleanedCount = 0;

  // Nettoyer app.routes.ts
  if (fs.existsSync(appRoutesPath)) {
    if (menuManager.cleanupRouteImports(appRoutesPath, moduleName)) {
      cleanedCount++;
      console.log('  ✓ Cleaned imports from app.routes.ts');
    }
  }

  // Nettoyer auth-routes.ts
  if (fs.existsSync(authRoutesPath)) {
    if (menuManager.cleanupRouteImports(authRoutesPath, moduleName)) {
      cleanedCount++;
      console.log('  ✓ Cleaned imports from auth-routes.ts');
    }
  }

  // Nettoyer les imports supplémentaires manuellement
  const singularName = moduleName.slice(0, -1);
  const capitalizedName = capitalize(moduleName);
  const filesToClean = [appRoutesPath, authRoutesPath];

  filesToClean.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Supprimer tous les imports liés au module
    const importPatterns = [
      new RegExp(`import\\s+\\{[^}]*${moduleName}Resolver[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      new RegExp(`import\\s+\\{[^}]*${capitalizedName}Component[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      new RegExp(`import\\s+\\{[^}]*${moduleName.toUpperCase()}_CONFIG[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      new RegExp(`import\\s+\\{[^}]*${moduleName}Routes[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      new RegExp(`import\\s+\\{[^}]*${capitalizedName}[^}]*\\}\\s+from\\s+['"][^'"]*interfaces/${capitalizedName}['"];?\\s*\n?`, 'g'),
      new RegExp(`import\\s+\\{[^}]*${capitalizedName}Model[^}]*\\}\\s+from\\s+['"][^'"]*models/${singularName}\\.model['"];?\\s*\n?`, 'g')
    ];

    importPatterns.forEach(pattern => {
      content = content.replace(pattern, '');
    });

    content = content.replace(/\n\n\n+/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      cleanedCount++;
    }
  });

  if (cleanedCount > 0) {
    console.log(`  ✓ Cleaned ${cleanedCount} file(s)`);
  }
}

// Nettoyer les traductions (comme dans update-module.js)
function cleanupTranslations(moduleName) {
  console.log('\n🌍 Cleaning up translations...');

  const i18nPath = path.join(process.cwd(), 'src', 'assets', 'i18n');
  const languages = ['en', 'fr', 'pt'];
  const singularName = moduleName.slice(0, -1);
  let cleanedCount = 0;

  languages.forEach(lang => {
    const filePath = path.join(i18nPath, `${lang}.json`);

    if (!fs.existsSync(filePath)) {
      return;
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(content);
      let modified = false;

      if (jsonData.menu && jsonData.menu[moduleName]) {
        delete jsonData.menu[moduleName];
        modified = true;
      }

      if (jsonData.global && jsonData.global.types && jsonData.global.types[moduleName]) {
        delete jsonData.global.types[moduleName];
        modified = true;
      }

      if (jsonData[singularName]) {
        delete jsonData[singularName];
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        console.log(`  ✓ Cleaned ${lang}.json`);
        cleanedCount++;
      }
    } catch (error) {
      console.log(`  ⚠️  Error cleaning ${lang}.json: ${error.message}`);
    }
  });

  if (cleanedCount > 0) {
    console.log(`  ✓ Cleaned ${cleanedCount} translation file(s)`);
  }
}

// Supprimer la route (comme dans update-module.js)
function deleteRoute(moduleName, oldRoutePath = null) {
  console.log('\n🗑️  Removing route from routing files...');

  const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
  const authRoutesPath = path.join(process.cwd(), 'src', 'app', 'auth', 'auth-routes.ts');

  // Try both the old route path and the module name
  const routePathsToTry = [
    oldRoutePath || moduleName,
    moduleName
  ].filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates

  console.log(`  🔍 Will search for routes with paths: ${routePathsToTry.join(', ')}`);

  // Try both app.routes.ts and auth-routes.ts
  const filesToCheck = [appRoutesPath, authRoutesPath];

  let routeRemoved = false;

  filesToCheck.forEach(targetFile => {
    if (!fs.existsSync(targetFile)) {
      return;
    }

    routePathsToTry.forEach(routePath => {
      try {
        let content = fs.readFileSync(targetFile, 'utf8');
        const originalContent = content;
        const lines = content.split(/\r?\n/);

        const pathPatterns = [
          `path: '${routePath}'`,
          `path: "${routePath}"`,
          `path:'${routePath}'`,
          `path:"${routePath}"`
        ];

        console.log(`  🔍 Searching in ${path.basename(targetFile)} for path: ${routePath}`);

        let pathLineIndex = -1;
        for (const pattern of pathPatterns) {
          pathLineIndex = lines.findIndex((line) => line.includes(pattern));
          if (pathLineIndex !== -1) {
            console.log(`    ✓ Found pattern "${pattern}" at line ${pathLineIndex + 1}`);
            break;
          }
        }

        if (pathLineIndex === -1) {
          console.log(`    ℹ️ Pattern not found for path: ${routePath}`);
          return; // Continue to next routePath
        }

        let routeStartIndex = -1;
        for (let i = pathLineIndex; i >= 0; i--) {
          if (lines[i].trim() === '{' || lines[i].includes('}, {') || lines[i].includes(',{')) {
            routeStartIndex = i;
            break;
          }
        }

        if (routeStartIndex === -1) {
          console.log('  ⚠️  Could not find starting brace for the route object.');
          return;
        }

        let braceCount = 0;
        let routeEndIndex = -1;
        for (let i = routeStartIndex; i < lines.length; i++) {
          for (const char of lines[i]) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
          if (braceCount === 0 && i > routeStartIndex) {
            routeEndIndex = i;
            break;
          }
        }

        if (routeEndIndex === -1) {
          console.log('  ⚠️  Could not find ending brace for the route object.');
          return;
        }

        let actualStartIndex = routeStartIndex;
        if (routeEndIndex + 1 < lines.length && lines[routeEndIndex + 1].trim().startsWith(',')) {
          routeEndIndex++;
        }

        const finalLines = [
          ...lines.slice(0, actualStartIndex),
          ...lines.slice(routeEndIndex + 1)
        ];

        let newContent = finalLines.join('\n');
        newContent = newContent.replace(/,(\s*[}\]])/g, '$1');
        newContent = newContent.replace(/\n\n\n+/g, '\n\n');

        if (newContent !== originalContent) {
          fs.writeFileSync(targetFile, newContent);
          console.log(`  ✓ Route '${routePath}' removed successfully from ${path.basename(targetFile)}`);
          routeRemoved = true;
        }
      } catch (error) {
        console.log(`  ⚠️  Error removing route '${routePath}': ${error.message}`);
      }
    });
  });

  if (!routeRemoved) {
    console.log(`  ℹ️  No routes found to remove`);
  }
}

// Vérifier que tous les fichiers ont été supprimés
function verifyCleanup(moduleName) {
  console.log('\n🔍 Verifying cleanup...');

  const singularName = moduleName.slice(0, -1);
  const capitalizedName = capitalize(moduleName);

  const filesToCheck = [
    path.join(process.cwd(), 'src', 'app', 'pages', moduleName),
    path.join(process.cwd(), 'src', 'app', 'models', `${singularName}.model.ts`),
    path.join(process.cwd(), 'src', 'app', 'interfaces', `${capitalizedName}.ts`)
  ];

  let residualFiles = [];

  filesToCheck.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      residualFiles.push(filePath);
      console.log(`  ⚠️  Residual file found: ${filePath}`);
    }
  });

  if (residualFiles.length > 0) {
    console.log('\n⚠️  Warning: Some files were not cleaned up properly!');
    console.log('Attempting to force delete residual files...');

    residualFiles.forEach(filePath => {
      try {
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          fs.rmSync(filePath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(filePath);
        }
        console.log(`  ✓ Force deleted: ${filePath}`);
      } catch (error) {
        console.log(`  ✗ Failed to delete: ${filePath} - ${error.message}`);
      }
    });
  } else {
    console.log('  ✓ All files cleaned successfully');
  }

  return residualFiles.length === 0;
}

// Régénérer le module (comme dans update-module.js)
async function regenerateModule(config, devMode) {
  console.log('\n🔄 Regenerating module with new configuration...');

  try {
    const generator = require('./generate-module.js');

    await generator.createModuleStructure(config.moduleName, {
      displayName: config.displayName,
      displayNameSingular: config.displayNameSingular,
      resourceType: config.resourceType,
      routePath: config.routePath,
      identifierField: config.identifierField,
      identifierType: config.identifierType,
      fields: config.fields,
      devMode: devMode
    });

    console.log('\n🔗 Adding route to routing file...');
    const routeAdded = generator.addRouteToFile(
      config.moduleName,
      config.routePath,
      config.requiresAuth
    );

    if (routeAdded) {
      console.log(`  ✓ Route added to ${config.requiresAuth ? 'app.routes.ts' : 'auth-routes.ts'}`);
    }

    console.log('\n🌍 Adding translations to i18n files...');
    const translationsAdded = generator.addTranslations(
      config.moduleName,
      config.displayName,
      config.displayNameSingular,
      config.fields
    );

    if (translationsAdded) {
      console.log('  ✓ Translations added successfully');
    }

    console.log('\n  ✓ Module regenerated successfully!');
  } catch (error) {
    console.log(`\n  ❌ Module generation failed: ${error.message}`);
    if (error.stack) {
      console.log(`  Stack: ${error.stack}`);
    }
    throw error;
  }
}

async function main() {
  try {
    const jsonFilePath = process.argv[2];

    if (!jsonFilePath) {
      throw new Error('JSON file path is required');
    }

    if (!fs.existsSync(jsonFilePath)) {
      throw new Error(`JSON file not found: ${jsonFilePath}`);
    }

    const moduleData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    const {
      oldModuleName,
      moduleName,
      displayName,
      displayNameSingular,
      resourceType,
      identifierField,
      identifierType,
      requiresAuth,
      routePath,
      oldRoutePath,
      fields,
      devMode
    } = moduleData;

    if (!moduleName) {
      throw new Error('moduleName is required in JSON data');
    }

    console.log('\n╔════════════════════════════════════════════╗');
    console.log('║   🔄 AUTO-GENERATOR - MODULE UPDATER    ║');
    console.log('╚════════════════════════════════════════════╝\n');

    console.log(`Old Module: ${oldModuleName}`);
    console.log(`New Module: ${moduleName}`);
    console.log(`Old Route Path: ${oldRoutePath || oldModuleName || 'N/A'}`);
    console.log(`New Route Path: ${routePath || moduleName}`);

    // IMPORTANT: Supprimer d'abord la route avec l'ancien path avant de supprimer les fichiers
    // Cela évite les problèmes si oldRoutePath est différent de oldModuleName
    console.log('\n🔍 Attempting to remove old route first...');
    deleteRoute(oldModuleName || moduleName, oldRoutePath);

    // Supprimer l'ancien module (que ce soit un rename ou pas)
    deleteOldModule(oldModuleName || moduleName);

    // Nettoyer les imports
    cleanupImports(oldModuleName || moduleName);

    // Nettoyer les traductions
    cleanupTranslations(oldModuleName || moduleName);

    // Attendre que le système de fichiers se stabilise
    console.log('\n⏳ Waiting for file system to settle...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Vérifier le nettoyage
    const cleanupOk = verifyCleanup(oldModuleName || moduleName);
    if (!cleanupOk) {
      console.log('\n⚠️  Warning: Cleanup verification failed. Continuing anyway...');
    }

    // Attendre encore un peu
    console.log('\n⏳ Final wait before regeneration...');
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Régénérer le module
    await regenerateModule(
      {
        moduleName,
        resourceType: resourceType || moduleName,
        displayName,
        displayNameSingular,
        fields,
        requiresAuth,
        routePath: routePath || moduleName,
        identifierField: identifierField || 'id',
        identifierType: identifierType || 'number'
      },
      devMode
    );

    console.log('\n✅ Module update completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
