#!/usr/bin/env node

/**
 * Service de gestion automatique des menus via l'API
 * Utilisé par les scripts de génération et suppression de modules
 */

const https = require('https');
const http = require('http');
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Charge la configuration de l'environnement
 */
function loadEnvironmentConfig() {
  try {
    const envPath = path.join(process.cwd(), 'src', 'environments', 'environment.ts');

    if (!fs.existsSync(envPath)) {
      throw new Error('Environment file not found');
    }

    const envContent = fs.readFileSync(envPath, 'utf8');

    // Extraire l'URL de l'API
    const apiUrlMatch = envContent.match(/apiUrl:\s*['"]([^'"]+)['"]/);

    if (!apiUrlMatch) {
      throw new Error('API URL not found in environment file');
    }

    return {
      apiUrl: apiUrlMatch[1]
    };
  } catch (error) {
    log(`⚠️  Could not load environment config: ${error.message}`, 'yellow');
    log('  Using default API URL: http://localhost:8000/api', 'cyan');
    return {
      apiUrl: 'http://localhost:8000/api'
    };
  }
}

/**
 * Effectue une requête HTTP vers l'API
 */
function makeApiRequest(method, endpoint, data = null, token = null) {
  return new Promise((resolve, reject) => {
    const config = loadEnvironmentConfig();
    const url = new URL(endpoint, config.apiUrl);
    const isHttps = url.protocol === 'https:';
    const httpModule = isHttps ? https : http;

    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    // Ajouter le token d'authentification si fourni
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = httpModule.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);

          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ success: true, data: parsedData, statusCode: res.statusCode });
          } else {
            resolve({
              success: false,
              error: parsedData.message || 'Request failed',
              statusCode: res.statusCode,
              data: parsedData
            });
          }
        } catch (error) {
          resolve({
            success: false,
            error: 'Invalid JSON response',
            statusCode: res.statusCode,
            raw: responseData
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

/**
 * Récupère le token d'authentification depuis le localStorage
 * Note: Cette fonction suppose que vous avez un token valide stocké
 */
function getAuthToken() {
  try {
    // En environnement Node.js, nous devons lire le token depuis un fichier temporaire
    // ou le demander à l'utilisateur
    const tokenPath = path.join(process.cwd(), '.temp-auth-token');

    if (fs.existsSync(tokenPath)) {
      return fs.readFileSync(tokenPath, 'utf8').trim();
    }

    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Crée un nouveau menu via l'API
 *
 * @param {Object} menuData - Données du menu à créer
 * @param {string} menuData.name - Nom du menu
 * @param {string} menuData.icon - Icône du menu
 * @param {string} menuData.color - Couleur du menu
 * @param {string} menuData.route - Route du menu
 * @param {string[]} menuData.roles - Rôles autorisés
 * @param {number} menuData.category_id - ID de la catégorie
 * @param {number} [menuData.disable=1] - État d'activation (1=enabled, 0=disabled)
 * @returns {Promise<Object>} Résultat de la création
 */
async function createMenu(menuData) {
  try {
    log('\n📤 Creating menu via API...', 'blue');
    log(`  Name: ${menuData.name}`, 'cyan');
    log(`  Route: ${menuData.route}`, 'cyan');

    const token = getAuthToken();

    if (!token) {
      log('  ⚠️  No auth token found. Menu will need to be created manually.', 'yellow');
      return { success: false, error: 'No auth token' };
    }

    const result = await makeApiRequest('POST', '/menus', menuData, token);

    if (result.success) {
      log('  ✓ Menu created successfully!', 'green');
      if (result.data && result.data.data) {
        log(`  Menu ID: ${result.data.data.id}`, 'cyan');
        log(`  Menu Slug: ${result.data.data.slug}`, 'cyan');
      }
      return { success: true, data: result.data };
    } else {
      log(`  ✗ Failed to create menu: ${result.error}`, 'red');
      return { success: false, error: result.error, statusCode: result.statusCode };
    }
  } catch (error) {
    log(`  ✗ Error creating menu: ${error.message}`, 'red');
    return { success: false, error: error.message };
  }
}

/**
 * Met à jour un menu existant via l'API
 *
 * @param {string} slug - Slug du menu à mettre à jour
 * @param {Object} menuData - Nouvelles données du menu
 * @returns {Promise<Object>} Résultat de la mise à jour
 */
async function updateMenu(slug, menuData) {
  try {
    log('\n📝 Updating menu via API...', 'blue');
    log(`  Slug: ${slug}`, 'cyan');

    const token = getAuthToken();

    if (!token) {
      log('  ⚠️  No auth token found. Menu will need to be updated manually.', 'yellow');
      return { success: false, error: 'No auth token' };
    }

    const result = await makeApiRequest('PUT', `/menus/${slug}`, menuData, token);

    if (result.success) {
      log('  ✓ Menu updated successfully!', 'green');
      return { success: true, data: result.data };
    } else {
      log(`  ✗ Failed to update menu: ${result.error}`, 'red');
      return { success: false, error: result.error, statusCode: result.statusCode };
    }
  } catch (error) {
    log(`  ✗ Error updating menu: ${error.message}`, 'red');
    return { success: false, error: error.message };
  }
}

/**
 * Supprime un menu via l'API
 *
 * @param {string} slug - Slug du menu à supprimer
 * @returns {Promise<Object>} Résultat de la suppression
 */
async function deleteMenu(slug) {
  try {
    log('\n🗑️  Deleting menu via API...', 'blue');
    log(`  Slug: ${slug}`, 'cyan');

    const token = getAuthToken();

    if (!token) {
      log('  ⚠️  No auth token found. Menu will need to be deleted manually.', 'yellow');
      return { success: false, error: 'No auth token' };
    }

    const result = await makeApiRequest('DELETE', `/menus/${slug}`, null, token);

    if (result.success) {
      log('  ✓ Menu deleted successfully!', 'green');
      return { success: true, data: result.data };
    } else {
      log(`  ✗ Failed to delete menu: ${result.error}`, 'red');
      return { success: false, error: result.error, statusCode: result.statusCode };
    }
  } catch (error) {
    log(`  ✗ Error deleting menu: ${error.message}`, 'red');
    return { success: false, error: error.message };
  }
}

/**
 * Recherche un menu par sa route
 *
 * @param {string} route - Route du menu
 * @returns {Promise<Object>} Menu trouvé ou null
 */
async function findMenuByRoute(route) {
  try {
    const token = getAuthToken();

    if (!token) {
      return { success: false, error: 'No auth token' };
    }

    const result = await makeApiRequest('GET', `/menus?filter[route]=${encodeURIComponent(route)}`, null, token);

    if (result.success && result.data && result.data.data) {
      const menus = result.data.data;
      if (menus.length > 0) {
        return { success: true, menu: menus[0] };
      }
    }

    return { success: false, error: 'Menu not found' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Génère les données de menu par défaut pour un module
 *
 * @param {string} moduleName - Nom du module
 * @param {string} displayName - Nom d'affichage
 * @param {string} routePath - Chemin de la route
 * @param {number} categoryId - ID de la catégorie
 * @returns {Object} Données du menu
 */
function generateDefaultMenuData(moduleName, displayName, routePath, categoryId = 1) {
  return {
    name: displayName || capitalize(moduleName),
    icon: 'mat:dashboard', // Icône par défaut
    color: 'bg-blue-600', // Couleur par défaut
    route: routePath.startsWith('/index/') ? routePath : `/index/${routePath}`,
    roles: ['admin'], // Rôle par défaut
    category_id: categoryId,
    disable: 1 // Activé par défaut
  };
}

/**
 * Nettoie les imports inutiles dans un fichier de routes
 *
 * @param {string} filePath - Chemin du fichier de routes
 * @param {string} moduleName - Nom du module à nettoyer
 * @returns {boolean} Succès du nettoyage
 */
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
    log(`  ⚠️  Error cleaning imports: ${error.message}`, 'yellow');
    return false;
  }
}

module.exports = {
  createMenu,
  updateMenu,
  deleteMenu,
  findMenuByRoute,
  generateDefaultMenuData,
  cleanupRouteImports,
  log,
  colors
};
