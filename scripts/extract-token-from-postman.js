#!/usr/bin/env node

/**
 * Script pour extraire le token depuis une réponse Postman ou une requête curl
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

/**
 * Extrait le token depuis différents formats
 */
function extractToken(input) {
  try {
    // Essayer de parser comme JSON
    const json = JSON.parse(input);

    // Chercher le token dans différents emplacements communs
    const possiblePaths = [
      json.token,
      json.access_token,
      json.data?.token,
      json.data?.access_token,
      json.user?.token,
      json.auth?.token,
      json.authorization?.token
    ];

    for (const token of possiblePaths) {
      if (token && typeof token === 'string') {
        return token;
      }
    }

    throw new Error('Token not found in JSON');
  } catch (jsonError) {
    // Si ce n'est pas du JSON, essayer d'extraire le token directement
    // Patterns courants de tokens
    const patterns = [
      /token["\s:]+([A-Za-z0-9\-._~+/]+={0,2})/i,
      /access_token["\s:]+([A-Za-z0-9\-._~+/]+={0,2})/i,
      /bearer\s+([A-Za-z0-9\-._~+/]+={0,2})/i,
      /authorization["\s:]+bearer\s+([A-Za-z0-9\-._~+/]+={0,2})/i
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    throw new Error('Unable to extract token from input');
  }
}

async function main() {
  log('\n╔════════════════════════════════════════════════╗', 'bright');
  log('║   🔍 EXTRACT TOKEN - From Postman/API       ║', 'bright');
  log('╚════════════════════════════════════════════════╝\n', 'bright');

  log('Ce script extrait automatiquement le token depuis :', 'cyan');
  log('  • Réponse JSON d\'API', 'reset');
  log('  • Export Postman', 'reset');
  log('  • Réponse curl\n', 'reset');

  log('📝 Instructions :', 'yellow');
  log('  1. Dans Postman, faites une requête de login', 'reset');
  log('  2. Copiez toute la réponse JSON', 'reset');
  log('  3. Collez-la ci-dessous\n', 'reset');

  log('💡 Alternative avec curl :', 'yellow');
  log('  curl -X POST http://localhost:8000/api/login \\', 'cyan');
  log('       -H "Content-Type: application/json" \\', 'cyan');
  log('       -d \'{"email":"admin@example.com","password":"password"}\'', 'cyan');
  log('  Puis copiez toute la réponse\n', 'cyan');

  log('📋 Collez la réponse JSON ci-dessous (Ctrl+D ou tapez END sur une nouvelle ligne pour terminer) :', 'yellow');

  let input = '';
  let isReading = true;

  const readInput = () => {
    return new Promise((resolve) => {
      rl.on('line', (line) => {
        if (line.trim().toUpperCase() === 'END' || line.trim().toUpperCase() === 'EOF') {
          resolve();
        } else {
          input += line + '\n';
        }
      });

      rl.on('close', () => {
        resolve();
      });
    });
  };

  await readInput();

  if (!input || input.trim().length === 0) {
    log('\n❌ Aucune entrée fournie !', 'red');
    rl.close();
    return;
  }

  try {
    log('\n🔍 Extraction du token...', 'blue');
    const token = extractToken(input);

    if (!token) {
      log('\n❌ Aucun token trouvé dans l\'entrée !', 'red');
      log('💡 Assurez-vous que la réponse contient un champ "token" ou "access_token"', 'yellow');
      rl.close();
      return;
    }

    log('\n✅ Token extrait avec succès !', 'green');
    log(`📄 Token : ${token.substring(0, 20)}...`, 'cyan');

    // Sauvegarder le token
    const tokenPath = path.join(process.cwd(), '.temp-auth-token');
    fs.writeFileSync(tokenPath, token.trim());

    log(`\n✅ Token sauvegardé dans : ${tokenPath}`, 'green');

    // Vérifier et mettre à jour .gitignore
    const gitignorePath = path.join(process.cwd(), '.gitignore');

    if (fs.existsSync(gitignorePath)) {
      const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');

      if (!gitignoreContent.includes('.temp-auth-token')) {
        fs.appendFileSync(gitignorePath, '\n# Token temporaire pour les scripts\n.temp-auth-token\n');
        log('✅ .gitignore mis à jour !', 'green');
      }
    } else {
      fs.writeFileSync(gitignorePath, '# Token temporaire pour les scripts\n.temp-auth-token\n');
      log('✅ .gitignore créé !', 'green');
    }

    log('\n📌 Prochaines étapes :', 'yellow');
    log('  Vous pouvez maintenant utiliser les scripts de gestion de modules', 'cyan');
    log('  npm run module:generate', 'green');
    log('  npm run module:delete', 'green');

  } catch (error) {
    log(`\n❌ Erreur lors de l\'extraction : ${error.message}`, 'red');
    log('\n💡 Formats acceptés :', 'yellow');
    log('  {"token": "your-token-here"}', 'cyan');
    log('  {"data": {"token": "your-token-here"}}', 'cyan');
    log('  {"access_token": "your-token-here"}', 'cyan');
  }

  rl.close();
}

main().catch(error => {
  log(`\n❌ Erreur : ${error.message}`, 'red');
  rl.close();
  process.exit(1);
});
