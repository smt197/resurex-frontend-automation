const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Couleurs pour la console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function hasAccents(str) {
  return /[àáâãäåèéêëìíîïòóôõöùúûüýÿñçÀÁÂÃÄÅÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝŸÑÇ]/.test(str);
}

// Liste des modules disponibles
function getAvailableModules() {
  const pagesPath = path.join(process.cwd(), 'src', 'app', 'pages');
  const folders = fs
    .readdirSync(pagesPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Filtrer les modules auto-générés (ceux qui ont un fichier .config.ts)
  return folders.filter((folder) => {
    const configPath = path.join(pagesPath, folder, `${folder}.config.ts`);
    return fs.existsSync(configPath);
  });
}

// Lire la configuration actuelle du module
function readModuleConfig(moduleName) {
  const configPath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName,
    `${moduleName}.config.ts`
  );
  const interfacePath = path.join(
    process.cwd(),
    'src',
    'app',
    'interfaces',
    `${capitalize(moduleName)}.ts`
  );

  const configContent = fs.readFileSync(configPath, 'utf8');
  const interfaceContent = fs.readFileSync(interfacePath, 'utf8');

  // Extraire les informations de la config
  const displayNameMatch = configContent.match(/displayName:\s*'([^']+)'/);
  const displayNameSingularMatch = configContent.match(
    /displayNameSingular:\s*'([^']+)'/
  );
  const resourceTypeMatch = configContent.match(/resourceType:\s*'([^']+)'/);
  const identifierFieldMatch = configContent.match(
    /identifierField:\s*'([^']+)'/
  );
  const identifierTypeMatch = configContent.match(
    /identifierType:\s*'([^']+)'/
  );
  const routePathMatch = configContent.match(/path:\s*'([^']+)'/);

  // Extraire les champs de l'interface
  const fieldsMatch = interfaceContent.match(
    /export interface \w+ \{([^}]+)\}/
  );
  const fields = [];

  if (fieldsMatch) {
    const fieldLines = fieldsMatch[1].trim().split('\n');
    fieldLines.forEach((line) => {
      const match = line.trim().match(/(\w+)(\?)?:\s*(\w+);/);
      if (match) {
        fields.push({
          name: match[1],
          type: match[3],
          required: !match[2]
        });
      }
    });
  }

  const identifierField = identifierFieldMatch ? identifierFieldMatch[1] : 'id';
  const identifierType = identifierTypeMatch
    ? identifierTypeMatch[1]
    : (identifierField === 'slug' ? 'string' : 'number');

  return {
    moduleName,
    displayName: displayNameMatch ? displayNameMatch[1] : '',
    displayNameSingular: displayNameSingularMatch
      ? displayNameSingularMatch[1]
      : '',
    resourceType: resourceTypeMatch ? resourceTypeMatch[1] : '',
    identifierField,
    identifierType,
    routePath: routePathMatch ? routePathMatch[1] : moduleName,
    fields
  };
}

// Créer l'interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function updateModuleName(currentName) {
  log('\n📝 Update module name', 'blue');
  log(`Current name: ${currentName}`, 'yellow');

  const newName = await question(
    'New module name (press Enter to keep current): '
  );

  if (!newName.trim()) {
    return currentName;
  }

  if (hasAccents(newName)) {
    log('⚠️  Module name cannot contain accents!', 'red');
    return currentName;
  }

  if (!/^[a-z]+s$/.test(newName)) {
    log('⚠️  Module name must be lowercase plural (e.g., "products")', 'red');
    return currentName;
  }

  return newName;
}

async function updateFields(currentFields) {
  log('\n📝 Update fields', 'blue');
  log('Current fields:', 'yellow');
  currentFields.forEach((field, index) => {
    log(
      `  ${index + 1}. ${field.name} (${field.type}) ${field.required ? '- required' : '- optional'}`,
      'yellow'
    );
  });

  const fields = [...currentFields];

  while (true) {
    log('\nOptions:', 'blue');
    log('  1. Add a field', 'blue');
    log('  2. Remove a field', 'blue');
    log('  3. Modify a field', 'blue');
    log('  4. Done', 'green');

    const choice = await question('\nChoose an option (1-4): ');

    if (choice === '1') {
      // Ajouter un champ
      const name = await question('Field name (no accents, lowercase): ');

      if (hasAccents(name)) {
        log('⚠️  Field name cannot contain accents!', 'red');
        continue;
      }

      if (!/^[a-z][a-zA-Z0-9]*$/.test(name)) {
        log(
          '⚠️  Field name must start with lowercase letter and contain only letters/numbers',
          'red'
        );
        continue;
      }

      const type = await question('Field type (string/number/boolean/Date): ');

      if (!['string', 'number', 'boolean', 'Date'].includes(type)) {
        log('⚠️  Invalid type! Use: string, number, boolean, or Date', 'red');
        continue;
      }

      const required = await question('Required? (y/n): ');

      fields.push({
        name,
        type,
        required: required.toLowerCase() === 'y'
      });

      log(`✓ Field "${name}" added`, 'green');
    } else if (choice === '2') {
      // Supprimer un champ
      const index = await question('Field number to remove: ');
      const idx = parseInt(index) - 1;

      if (idx >= 0 && idx < fields.length) {
        const removed = fields.splice(idx, 1);
        log(`✓ Field "${removed[0].name}" removed`, 'green');
      } else {
        log('⚠️  Invalid field number', 'red');
      }
    } else if (choice === '3') {
      // Modifier un champ
      const index = await question('Field number to modify: ');
      const idx = parseInt(index) - 1;

      if (idx >= 0 && idx < fields.length) {
        const field = fields[idx];
        log(
          `\nModifying: ${field.name} (${field.type}) ${field.required ? '- required' : '- optional'}`,
          'yellow'
        );

        const name = await question(
          `New name (press Enter to keep "${field.name}"): `
        );
        if (name.trim()) {
          if (hasAccents(name)) {
            log('⚠️  Field name cannot contain accents!', 'red');
            continue;
          }
          field.name = name;
        }

        const type = await question(
          `New type (press Enter to keep "${field.type}"): `
        );
        if (
          type.trim() &&
          ['string', 'number', 'boolean', 'Date'].includes(type)
        ) {
          field.type = type;
        }

        const required = await question(
          `Required? (y/n, press Enter to keep current): `
        );
        if (required.trim()) {
          field.required = required.toLowerCase() === 'y';
        }

        log(`✓ Field "${field.name}" updated`, 'green');
      } else {
        log('⚠️  Invalid field number', 'red');
      }
    } else if (choice === '4') {
      break;
    }
  }

  return fields;
}

async function updateTranslations(
  moduleName,
  displayName,
  displayNameSingular,
  fields
) {
  log('\n🌍 Update translations', 'blue');

  const i18nPath = path.join(process.cwd(), 'src', 'assets', 'i18n');
  const languages = ['en', 'fr', 'pt'];
  const singularName = moduleName.slice(0, -1);

  const updateLang = await question('Update translations? (y/n): ');
  if (updateLang.toLowerCase() !== 'y') {
    return;
  }

  for (const lang of languages) {
    log(`\nUpdating ${lang}.json...`, 'blue');

    const filePath = path.join(i18nPath, `${lang}.json`);
    const content = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(content);

    // Menu
    const menuTranslation = await question(
      `Translation for menu "${displayName}" (${lang}, press Enter to keep current): `
    );
    if (menuTranslation.trim()) {
      if (!jsonData.menu) jsonData.menu = {};
      jsonData.menu[moduleName] = menuTranslation;
    }

    // Type
    const typeTranslation = await question(
      `Translation for type "${displayNameSingular}" (${lang}, press Enter to keep current): `
    );
    if (typeTranslation.trim()) {
      if (!jsonData.global) jsonData.global = {};
      if (!jsonData.global.types) jsonData.global.types = {};
      jsonData.global.types[moduleName] = typeTranslation;
    }

    // Fields
    if (!jsonData[singularName]) {
      jsonData[singularName] = { label: {}, placeholder: {}, validation: {} };
    }

    // Ajouter la traduction pour le bouton "Add {type}" (ex: "Add Product")
    const createButtonTranslations = {
      en: `New ${displayNameSingular}`,
      fr: `Nouveau ${displayNameSingular}`,
      pt: `Novo ${displayNameSingular}`
    };
    if (!jsonData[singularName][`${singularName}_create`]) {
      jsonData[singularName][`${singularName}_create`] = createButtonTranslations[lang];
    }

    for (const field of fields) {
      log(`\n  Field: ${field.name}`, 'yellow');

      const labelTranslation = await question(
        `  Label (${lang}, press Enter to use default "${capitalize(field.name)}"): `
      );
      jsonData[singularName].label[field.name] =
        labelTranslation.trim() || capitalize(field.name);

      const placeholderTranslation = await question(
        `  Placeholder (${lang}, press Enter to use default "Enter ${field.name}"): `
      );
      jsonData[singularName].placeholder[field.name] =
        placeholderTranslation.trim() || `Enter ${field.name}`;

      if (field.required) {
        const validationTranslation = await question(
          `  Validation message (${lang}, press Enter to use default "${capitalize(field.name)} is required"): `
        );
        jsonData[singularName].validation[`${field.name}_required`] =
          validationTranslation.trim() ||
          `${capitalize(field.name)} is required`;
      }
    }

    // Sauvegarder
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    log(`✓ ${lang}.json updated`, 'green');
  }
}

// Supprimer l'ancien module complètement
function deleteOldModule(moduleName) {
  log('\n🗑️  Deleting old module files...', 'blue');

  const singularName = moduleName.slice(0, -1);
  const capitalizedName = capitalize(moduleName);

  // 1. Supprimer le dossier du module
  const modulePath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName
  );
  if (fs.existsSync(modulePath)) {
    fs.rmSync(modulePath, { recursive: true, force: true });
    log(`  ✓ Deleted: pages/${moduleName}/`, 'green');
  }

  // 2. Supprimer le model
  const modelPath = path.join(
    process.cwd(),
    'src',
    'app',
    'models',
    `${singularName}.model.ts`
  );
  if (fs.existsSync(modelPath)) {
    fs.unlinkSync(modelPath);
    log(`  ✓ Deleted: models/${singularName}.model.ts`, 'green');
  }

  // 3. Supprimer l'interface
  const interfacePath = path.join(
    process.cwd(),
    'src',
    'app',
    'interfaces',
    `${capitalizedName}.ts`
  );
  if (fs.existsSync(interfacePath)) {
    fs.unlinkSync(interfacePath);
    log(`  ✓ Deleted: interfaces/${capitalizedName}.ts`, 'green');
  }

  // 4. Supprimer le resolver s'il existe
  const resolverPath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName,
    `${moduleName}.resolver.ts`
  );
  if (fs.existsSync(resolverPath)) {
    fs.unlinkSync(resolverPath);
    log(`  ✓ Deleted: pages/${moduleName}/${moduleName}.resolver.ts`, 'green');
  }

  // 5. Supprimer les fichiers de routes
  const routesPath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName,
    `${moduleName}.routes.ts`
  );
  if (fs.existsSync(routesPath)) {
    fs.unlinkSync(routesPath);
    log(`  ✓ Deleted: pages/${moduleName}/${moduleName}.routes.ts`, 'green');
  }

  // 6. Supprimer le composant principal
  const componentPath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName,
    `${moduleName}.component.ts`
  );
  if (fs.existsSync(componentPath)) {
    fs.unlinkSync(componentPath);
    log(`  ✓ Deleted: pages/${moduleName}/${moduleName}.component.ts`, 'green');
  }

  // 7. Supprimer la config
  const configPath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName,
    `${moduleName}.config.ts`
  );
  if (fs.existsSync(configPath)) {
    fs.unlinkSync(configPath);
    log(`  ✓ Deleted: pages/${moduleName}/${moduleName}.config.ts`, 'green');
  }

  // 8. Supprimer le mock-data s'il existe
  const mockDataPath = path.join(
    process.cwd(),
    'src',
    'app',
    'pages',
    moduleName,
    'mock-data.json'
  );
  if (fs.existsSync(mockDataPath)) {
    fs.unlinkSync(mockDataPath);
    log(`  ✓ Deleted: pages/${moduleName}/mock-data.json`, 'green');
  }

  // 9. Supprimer la route
  deleteRoute(moduleName);

  // 10. Nettoyer les imports
  cleanupImports(moduleName);

  // 11. Nettoyer les traductions
  cleanupTranslations(moduleName);
}

function cleanupImports(moduleName) {
  log('\n🧹 Cleaning up imports...', 'blue');

  const menuManager = require('./menu-api-manager');
  const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
  const authRoutesPath = path.join(
    process.cwd(),
    'src',
    'app',
    'auth',
    'auth-routes.ts'
  );

  let cleanedCount = 0;

  // Nettoyer app.routes.ts
  if (fs.existsSync(appRoutesPath)) {
    if (menuManager.cleanupRouteImports(appRoutesPath, moduleName)) {
      cleanedCount++;
      log('  ✓ Cleaned imports from app.routes.ts', 'green');
    }
  }

  // Nettoyer auth-routes.ts
  if (fs.existsSync(authRoutesPath)) {
    if (menuManager.cleanupRouteImports(authRoutesPath, moduleName)) {
      cleanedCount++;
      log('  ✓ Cleaned imports from auth-routes.ts', 'green');
    }
  }

  // Nettoyer les imports supplémentaires manuellement
  const singularName = moduleName.slice(0, -1);
  const capitalizedName = capitalize(moduleName);

  // Patterns d'imports à nettoyer
  const filesToClean = [appRoutesPath, authRoutesPath];

  filesToClean.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Supprimer tous les imports liés au module
    const importPatterns = [
      // Import du resolver
      new RegExp(`import\\s+\\{[^}]*${moduleName}Resolver[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      // Import du composant
      new RegExp(`import\\s+\\{[^}]*${capitalizedName}Component[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      // Import de la config
      new RegExp(`import\\s+\\{[^}]*${moduleName.toUpperCase()}_CONFIG[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      // Import des routes
      new RegExp(`import\\s+\\{[^}]*${moduleName}Routes[^}]*\\}\\s+from\\s+['"][^'"]*${moduleName}[^'"]*['"];?\\s*\n?`, 'g'),
      // Import de l'interface
      new RegExp(`import\\s+\\{[^}]*${capitalizedName}[^}]*\\}\\s+from\\s+['"][^'"]*interfaces/${capitalizedName}['"];?\\s*\n?`, 'g'),
      // Import du model
      new RegExp(`import\\s+\\{[^}]*${capitalizedName}Model[^}]*\\}\\s+from\\s+['"][^'"]*models/${singularName}\\.model['"];?\\s*\n?`, 'g')
    ];

    importPatterns.forEach(pattern => {
      content = content.replace(pattern, '');
    });

    // Nettoyer les lignes vides multiples
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      cleanedCount++;
    }
  });

  if (cleanedCount > 0) {
    log(`  ✓ Cleaned ${cleanedCount} file(s)`, 'green');
  } else {
    log('  ℹ️  No unused imports found', 'blue');
  }
}

// Nouvelle fonction pour nettoyer les traductions
function cleanupTranslations(moduleName) {
  log('\n🌍 Cleaning up translations...', 'blue');

  const i18nPath = path.join(process.cwd(), 'src', 'assets', 'i18n');
  const languages = ['en', 'fr', 'pt'];
  const singularName = moduleName.slice(0, -1);
  let cleanedCount = 0;

  languages.forEach(lang => {
    const filePath = path.join(i18nPath, `${lang}.json`);

    if (!fs.existsSync(filePath)) {
      log(`  ⚠️  ${lang}.json not found`, 'yellow');
      return;
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(content);
      let modified = false;

      // Supprimer les traductions du menu
      if (jsonData.menu && jsonData.menu[moduleName]) {
        delete jsonData.menu[moduleName];
        modified = true;
      }

      // Supprimer les traductions du type
      if (jsonData.global && jsonData.global.types && jsonData.global.types[moduleName]) {
        delete jsonData.global.types[moduleName];
        modified = true;
      }

      // Supprimer les traductions des champs
      if (jsonData[singularName]) {
        delete jsonData[singularName];
        modified = true;
      }

      // Sauvegarder si modifié
      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        log(`  ✓ Cleaned ${lang}.json`, 'green');
        cleanedCount++;
      }
    } catch (error) {
      log(`  ⚠️  Error cleaning ${lang}.json: ${error.message}`, 'yellow');
    }
  });

  if (cleanedCount > 0) {
    log(`  ✓ Cleaned ${cleanedCount} translation file(s)`, 'green');
  } else {
    log('  ℹ️  No translations found to clean', 'blue');
  }
}

function deleteRoute(moduleName) {
  log('\n🗑️  Removing route from app.routes.ts...', 'blue');

  const appRoutesPath = path.join(process.cwd(), 'src', 'app', 'app.routes.ts');
  const routePath = moduleName;

  try {
    if (!fs.existsSync(appRoutesPath)) {
      log(`  ⚠️  Routing file not found: ${appRoutesPath}`, 'yellow');
      return;
    }

    let content = fs.readFileSync(appRoutesPath, 'utf8');
    const originalContent = content;
    const lines = content.split(/\r?\n/);

    // Chercher toutes les occurrences possibles de la route
    const pathPatterns = [
      `path: '${routePath}'`,
      `path: "${routePath}"`,
      `path:'${routePath}'`,
      `path:"${routePath}"`
    ];

    let pathLineIndex = -1;
    for (const pattern of pathPatterns) {
      pathLineIndex = lines.findIndex((line) => line.includes(pattern));
      if (pathLineIndex !== -1) break;
    }

    if (pathLineIndex === -1) {
      log(`  ℹ️  Route for '${routePath}' not found, no removal needed.`, 'blue');
      return;
    }

    // Trouver le début de l'objet route
    let routeStartIndex = -1;
    for (let i = pathLineIndex; i >= 0; i--) {
      if (lines[i].trim() === '{' || lines[i].includes('}, {') || lines[i].includes(',{')) {
        routeStartIndex = i;
        break;
      }
    }

    if (routeStartIndex === -1) {
      log('  ⚠️  Could not find starting brace for the route object.', 'yellow');
      return;
    }

    // Trouver la fin de l'objet route
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
      log('  ⚠️  Could not find ending brace for the route object.', 'yellow');
      return;
    }

    // Vérifier s'il y a une virgule avant ou après à supprimer
    let actualStartIndex = routeStartIndex;
    if (routeStartIndex > 0 && lines[routeStartIndex - 1].trim().endsWith(',')) {
      // Pas de changement, la virgule est déjà avant
    } else if (routeEndIndex + 1 < lines.length && lines[routeEndIndex].trim().endsWith(',')) {
      // La virgule est sur la ligne de fin
    } else if (routeEndIndex + 1 < lines.length && lines[routeEndIndex + 1].trim().startsWith(',')) {
      // La virgule est sur la ligne suivante
      routeEndIndex++;
    }

    // Supprimer les lignes de la route
    const finalLines = [
      ...lines.slice(0, actualStartIndex),
      ...lines.slice(routeEndIndex + 1)
    ];

    let newContent = finalLines.join('\n');

    // Nettoyer les virgules orphelines et les lignes vides multiples
    newContent = newContent.replace(/,(\s*[}\]])/g, '$1'); // Virgules avant } ou ]
    newContent = newContent.replace(/\n\n\n+/g, '\n\n'); // Lignes vides multiples

    if (newContent !== originalContent) {
      fs.writeFileSync(appRoutesPath, newContent);
      log('  ✓ Route removed successfully from app.routes.ts', 'green');
    } else {
      log('  ℹ️  No changes made to app.routes.ts', 'blue');
    }
  } catch (error) {
    log(`  ⚠️  Error removing route: ${error.message}`, 'yellow');
    log(`  Stack: ${error.stack}`, 'red');
  }
}

// Vérifier que tous les fichiers de l'ancien module ont été supprimés
function verifyCleanup(moduleName) {
  log('\n🔍 Verifying cleanup...', 'blue');

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
      log(`  ⚠️  Residual file found: ${filePath}`, 'yellow');
    }
  });

  if (residualFiles.length > 0) {
    log('\n⚠️  Warning: Some files were not cleaned up properly!', 'yellow');
    log('Attempting to force delete residual files...', 'blue');

    residualFiles.forEach(filePath => {
      try {
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          fs.rmSync(filePath, { recursive: true, force: true });
        } else {
          fs.unlinkSync(filePath);
        }
        log(`  ✓ Force deleted: ${filePath}`, 'green');
      } catch (error) {
        log(`  ✗ Failed to delete: ${filePath} - ${error.message}`, 'red');
      }
    });
  } else {
    log('  ✓ All files cleaned successfully', 'green');
  }

  return residualFiles.length === 0;
}

// Régénérer le module avec la nouvelle configuration
async function regenerateModule(config, devMode) {
  log('\n🔄 Regenerating module with new configuration...', 'blue');

  try {
    // Importer les fonctions de génération
    const generator = require('./generate-module.js');

    // Créer la structure du module
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

    // Ajouter la route
    log('\n🔗 Adding route to routing file...', 'blue');
    const routeAdded = generator.addRouteToFile(
      config.moduleName,
      config.routePath,
      config.requiresAuth
    );

    if (routeAdded) {
      log(`  ✓ Route added to ${config.requiresAuth ? 'app.routes.ts' : 'auth-routes.ts'}`, 'green');
    } else {
      log('  ⚠️  Could not add route automatically', 'yellow');
    }

    // Ajouter les traductions
    log('\n🌍 Adding translations to i18n files...', 'blue');
    const translationsAdded = generator.addTranslations(
      config.moduleName,
      config.displayName,
      config.displayNameSingular,
      config.fields
    );

    if (translationsAdded) {
      log('  ✓ Translations added successfully', 'green');
    }

    log('\n  ✓ Module regenerated successfully!', 'green');
  } catch (error) {
    log(`\n  ❌ Module generation failed: ${error.message}`, 'red');
    if (error.stack) {
      log(`  Stack: ${error.stack}`, 'red');
    }
    throw error;
  }
}

async function main() {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║   🔄 AUTO-GENERATOR - MODULE UPDATER    ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');

  // Liste des modules disponibles
  const modules = getAvailableModules();

  if (modules.length === 0) {
    log('⚠️  No auto-generated modules found', 'yellow');
    rl.close();
    return;
  }

  log('📋 Available modules:', 'yellow');
  modules.forEach((mod, index) => {
    log(`  ${index + 1}. ${mod}`, 'blue');
  });

  const moduleChoice = await question('\n📝 Enter module name to update: ');
  const moduleName = moduleChoice.toLowerCase();

  if (!modules.includes(moduleName)) {
    log('⚠️  Module not found', 'red');
    rl.close();
    return;
  }

  // Lire la configuration actuelle
  const config = readModuleConfig(moduleName);
  log(`\n✓ Module "${moduleName}" loaded`, 'green');
  log(`  Display name: ${config.displayName}`, 'blue');
  log(`  Display name (singular): ${config.displayNameSingular}`, 'blue');
  log(`  Fields: ${config.fields.length}`, 'blue');

  // Mise à jour du nom du module
  const confirmNameUpdate = await question('\nUpdate module name? (y/n): ');
  let newModuleName = moduleName;
  let newResourceType = config.resourceType;

  if (confirmNameUpdate.toLowerCase() === 'y') {
    newModuleName = await updateModuleName(moduleName);

    // Par défaut, resourceType = moduleName (sauf si l'utilisateur veut le personnaliser)
    const useCustomResourceType = await question(
      `\n📝 Use custom resource type for API? (y/n, default: n - will use "${newModuleName}"): `
    );

    if (useCustomResourceType.toLowerCase() === 'y') {
      const inputResourceType = await question(
        `Resource type for API (press Enter to use "${newModuleName}"): `
      );
      newResourceType = inputResourceType.trim() || newModuleName;
    } else {
      // Automatiquement synchroniser resourceType avec moduleName
      newResourceType = newModuleName;
    }

    log(`✓ Resource type: ${newResourceType}`, 'green');
  }

  // Mise à jour des noms d'affichage
  const confirmDisplayNameUpdate = await question('\nUpdate display names? (y/n): ');
  let newDisplayName = config.displayName;
  let newDisplayNameSingular = config.displayNameSingular;

  if (confirmDisplayNameUpdate.toLowerCase() === 'y') {
    log('\n📝 Update display names', 'blue');
    log(`Current display name (plural): ${config.displayName}`, 'yellow');
    const inputDisplayName = await question(`New display name (plural, press Enter to keep current): `);
    if (inputDisplayName.trim()) {
      newDisplayName = inputDisplayName;
    }

    log(`Current display name (singular): ${config.displayNameSingular}`, 'yellow');
    const inputDisplayNameSingular = await question(`New display name (singular, press Enter to keep current): `);
    if (inputDisplayNameSingular.trim()) {
      newDisplayNameSingular = inputDisplayNameSingular;
    }

    log(`✓ Display names: ${newDisplayName} / ${newDisplayNameSingular}`, 'green');
  }

  // Mise à jour des champs
  const confirmFieldsUpdate = await question('\nUpdate fields? (y/n): ');
  let newFields = config.fields;

  if (confirmFieldsUpdate.toLowerCase() === 'y') {
    newFields = await updateFields(config.fields);
  }

  // Mise à jour des traductions
  await updateTranslations(
    newModuleName,
    newDisplayName,
    newDisplayNameSingular,
    newFields
  );

  const confirmRequiresAuth = await question('\n🔐 Does this route require authentication? (y/n, default: y): ');
  const newRequiresAuth = confirmRequiresAuth.toLowerCase() !== 'n';

  // Résumé des changements
  log('\n📊 Summary of changes:', 'yellow');
  log(
    `  Module name: ${moduleName} → ${newModuleName}`,
    newModuleName !== moduleName ? 'green' : 'blue'
  );
  log(
    `  Resource type: ${config.resourceType} → ${newResourceType}`,
    newResourceType !== config.resourceType ? 'green' : 'blue'
  );
  log(
    `  Display name: ${config.displayName} → ${newDisplayName}`,
    newDisplayName !== config.displayName ? 'green' : 'blue'
  );
  log(
    `  Display name (singular): ${config.displayNameSingular} → ${newDisplayNameSingular}`,
    newDisplayNameSingular !== config.displayNameSingular ? 'green' : 'blue'
  );
  log(
    `  Fields: ${config.fields.length} → ${newFields.length}`,
    newFields.length !== config.fields.length ? 'green' : 'blue'
  );
  log(`  Translations updated`, 'blue');

  // Confirmer l'application automatique
  const applyChanges = await question(
    '\n✅ Apply changes automatically? (y/n): '
  );
  if (applyChanges.toLowerCase() !== 'y') {
    log('\n❌ Update cancelled. No changes were made.', 'red');
    rl.close();
    return;
  }

  // Demander le mode dev
  const devModeChoice = await question(
    '\n💻 Use development mode (mock data)? (y/n): '
  );
  const devMode = devModeChoice.toLowerCase() === 'y';

  log(
    '\n⚠️  IMPORTANT: The old module will be deleted and regenerated',
    'yellow'
  );
  log('   Make sure you have committed any manual changes!', 'yellow');

  const finalConfirm = await question(
    '\n⚠️  Continue with deletion and regeneration? (yes/no): '
  );

  if (finalConfirm.toLowerCase() !== 'yes') {
    log('\n❌ Update cancelled. No changes were made.', 'red');
    rl.close();
    return;
  }

  // Close readline APRÈS toutes les questions
  rl.close();

  // Supprimer l'ancien module
  deleteOldModule(moduleName);

  // Vérifier que le nettoyage est complet
  log('\n⏳ Waiting for file system to settle...', 'blue');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Vérification post-nettoyage
  const cleanupOk = verifyCleanup(moduleName);

  if (!cleanupOk) {
    log('\n⚠️  Warning: Cleanup verification failed. Continuing anyway...', 'yellow');
  }

  // Attendre encore un peu après la vérification
  log('\n⏳ Final wait before regeneration...', 'blue');
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Régénérer le module avec la nouvelle configuration
  try {
    log('\n🔄 Starting module regeneration...', 'blue');
    log(`  📝 Module: ${newModuleName}`, 'cyan');
    log(`  📝 Fields: ${newFields.length}`, 'cyan');
    log(`  📝 Dev mode: ${devMode ? 'Yes' : 'No'}`, 'cyan');

    await regenerateModule(
      {
        ...config,
        moduleName: newModuleName,
        resourceType: newResourceType,
        displayName: newDisplayName,
        displayNameSingular: newDisplayNameSingular,
        fields: newFields,
        requiresAuth: newRequiresAuth,
        routePath: newModuleName  // Utiliser le nouveau nom comme route
      },
      devMode
    );

    log('\n✅ Module update completed successfully!', 'green');
    log(
      '✨ All files have been regenerated with the new configuration!',
      'green'
    );
    log('\n📌 Next steps:', 'yellow');
    log(
      '  1. Restart your development server if running (Ctrl+C then npm start)',
      'blue'
    );
    log('  2. Navigate to /index/' + newModuleName, 'blue');
    log('  3. Test all CRUD operations', 'blue');

    if (devMode) {
      log('\n💻 Dev mode is enabled:', 'yellow');
      log('  - Module uses mock data from mock-data.json', 'blue');
      log('  - Remember to create the menu manually or via API', 'blue');
    }
  } catch (error) {
    log(`\n❌ Error during regeneration: ${error.message}`, 'red');
    log('\n💡 The old module was deleted but regeneration failed.', 'yellow');
    log('   This means the module files have been removed.', 'yellow');
    log('\n🔧 To fix this, run manually:', 'yellow');
    log('   npm run module:generate', 'blue');
    log(`   Then enter "${newModuleName}" as the module name`, 'blue');
    log('\n📝 Or restore from git if you have uncommitted changes:', 'yellow');
    log('   git checkout -- src/app/pages/' + moduleName, 'blue');
  }
}

main().catch((err) => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});
