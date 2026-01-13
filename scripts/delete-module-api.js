#!/usr/bin/env node

/**
 * Script de suppression automatique de module appelé depuis l'API backend
 *
 * Usage: node scripts/delete-module-api.js <json-file-path>
 */

const fs = require('fs');
const path = require('path');

// Réutiliser les fonctions du script de suppression principal
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
        console.log('✓ Route removed from app.routes.ts');
        removed = true;
      }
    }
  } catch (error) {
    console.error(`⚠️ Could not remove route from app.routes.ts: ${error.message}`);
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
        console.log('✓ Route removed from auth-routes.ts');
        removed = true;
      }
    }
  } catch (error) {
    console.error(`⚠️ Could not remove route from auth-routes.ts: ${error.message}`);
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
          console.log(`  - Removed menu.${moduleName} from ${lang}.json`);
        }

        // 2. Supprimer de global.types
        if (jsonData.global && jsonData.global.types && jsonData.global.types[moduleName]) {
          delete jsonData.global.types[moduleName];
          modified = true;
          console.log(`  - Removed global.types.${moduleName} from ${lang}.json`);
        }

        // 3. Supprimer les traductions des champs du module (label, placeholder, validation)
        if (jsonData[singularName]) {
          delete jsonData[singularName];
          modified = true;
          console.log(`  - Removed ${singularName}.* from ${lang}.json`);
        }

        // Écrire le fichier avec formatage (2 espaces) seulement si modifié
        if (modified) {
          fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
          console.log(`✓ Translations removed from ${lang}.json`);
          translationsRemoved++;
        }
      }
    } catch (error) {
      console.error(`⚠️ Could not remove translations from ${lang}.json: ${error.message}`);
      allSuccess = false;
    }
  });

  return allSuccess && translationsRemoved > 0;
}

function cleanupRouteImports(filePath, moduleName) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Patterns à supprimer
    const patterns = [
      // Import de la config
      new RegExp(`import\\s+\\{[^}]*${moduleName.toUpperCase()}_CONFIG[^}]*\\}\\s+from\\s+['"][^'"]+${moduleName}/${moduleName}\\.config['"];?\\s*`, 'g'),
      // Import du composant
      new RegExp(`import\\s+\\{[^}]*${capitalize(moduleName)}Component[^}]*\\}\\s+from\\s+['"][^'"]+${moduleName}/${moduleName}\\.component['"];?\\s*`, 'g'),
      // Import des routes (loadChildren)
      new RegExp(`import\\s+\\{[^}]*${moduleName}Routes[^}]*\\}\\s+from\\s+['"][^'"]+${moduleName}/${moduleName}\\.routes['"];?\\s*`, 'g'),
      // Import du resolver
      new RegExp(`import\\s+\\{[^}]*${moduleName}Resolver[^}]*\\}\\s+from\\s+['"][^'"]+${moduleName}/${moduleName}\\.resolver['"];?\\s*`, 'g')
    ];

    patterns.forEach(pattern => {
      content = content.replace(pattern, '');
    });

    // Nettoyer les lignes vides multiples
    content = content.replace(/\n\n\n+/g, '\n\n');

    // Si le contenu a changé, écrire le fichier
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`⚠️ Error cleaning imports: ${error.message}`);
    return false;
  }
}

function deleteModule(moduleName) {
  const basePath = path.join(process.cwd(), 'src', 'app', 'pages', moduleName);
  const modelPath = path.join(process.cwd(), 'src', 'app', 'models', `${moduleName.slice(0, -1)}.model.ts`);
  const interfacePath = path.join(process.cwd(), 'src', 'app', 'interfaces', `${capitalize(moduleName)}.ts`);

  let filesDeleted = 0;

  // Supprimer le répertoire du module
  if (deleteDirectory(basePath)) {
    console.log(`✓ Deleted: pages/${moduleName}/`);
    filesDeleted++;
  } else {
    console.log(`⚠️ Directory not found: pages/${moduleName}/`);
  }

  // Supprimer le model
  if (fs.existsSync(modelPath)) {
    fs.unlinkSync(modelPath);
    console.log(`✓ Deleted: models/${moduleName.slice(0, -1)}.model.ts`);
    filesDeleted++;
  } else {
    console.log(`⚠️ File not found: models/${moduleName.slice(0, -1)}.model.ts`);
  }

  // Supprimer l'interface
  if (fs.existsSync(interfacePath)) {
    fs.unlinkSync(interfacePath);
    console.log(`✓ Deleted: interfaces/${capitalize(moduleName)}.ts`);
    filesDeleted++;
  } else {
    console.log(`⚠️ File not found: interfaces/${capitalize(moduleName)}.ts`);
  }

  return filesDeleted > 0;
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

    // Lire les données du module depuis le fichier JSON
    const moduleData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    const { moduleName, routePath } = moduleData;

    if (!moduleName) {
      throw new Error('moduleName is required in JSON data');
    }

    console.log('🗑️ Starting module deletion...');
    console.log(`Module: ${moduleName}`);

    // Supprimer le module
    const moduleDeleted = deleteModule(moduleName);

    if (!moduleDeleted) {
      console.error('❌ No files were deleted. Module might not exist.');
      process.exit(1);
    }

    // Supprimer la route
    console.log('🔗 Removing route from routing files...');
    const routeRemoved = removeRouteFromFile(moduleName, routePath || moduleName);

    if (!routeRemoved) {
      console.log('⚠️ Route not found in routing files');
    }

    // Nettoyer les imports inutiles
    console.log('🧹 Cleaning up route imports...');
    const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
    const authRoutesPath = path.join(process.cwd(), 'src', 'app', 'auth', 'auth-routes.ts');

    const appRoutesCleanup = cleanupRouteImports(appRoutesPath, moduleName);
    const authRoutesCleanup = cleanupRouteImports(authRoutesPath, moduleName);

    if (appRoutesCleanup || authRoutesCleanup) {
      console.log('✓ Unused imports cleaned successfully');
    }

    // Supprimer les traductions
    console.log('🌍 Removing translations from i18n files...');
    const translationsRemoved = removeTranslations(moduleName);

    if (translationsRemoved) {
      console.log('✓ Translations removed successfully');
    }

    console.log('\n✅ Module deletion completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
