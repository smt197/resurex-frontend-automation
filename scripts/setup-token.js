#!/usr/bin/env node

/**
 * Script pour configurer le token d'authentification
 * Utilisé par les scripts de gestion automatique des menus
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

async function main() {
  log('\n╔═══════════════════════════════════════════════╗', 'bright');
  log('║   🔑 TOKEN SETUP - Menu API Authentication  ║', 'bright');
  log('╚═══════════════════════════════════════════════╝\n', 'bright');

  log('Ce script vous aide à configurer le token d\'authentification', 'cyan');
  log('pour les fonctionnalités de gestion automatique des menus.\n', 'cyan');

  log('📝 Instructions pour récupérer votre token :', 'yellow');
  log('  1. Ouvrez votre application dans un navigateur', 'reset');
  log('  2. Connectez-vous avec vos identifiants', 'reset');
  log('  3. Ouvrez les outils de développement (F12)', 'reset');
  log('  4. Allez dans l\'onglet "Application" ou "Storage"', 'reset');
  log('  5. Cherchez dans les Cookies ou le localStorage', 'reset');
  log('  6. Trouvez le cookie/token d\'authentification', 'reset');
  log('     (généralement nommé "token", "auth_token", "access_token", etc.)', 'reset');
  log('  7. Copiez la valeur du token\n', 'reset');

  log('💡 Alternative : Ouvrez la Console et tapez :', 'yellow');
  log('     document.cookie (pour voir tous les cookies)', 'cyan');
  log('     ou', 'reset');
  log('     localStorage (pour voir le localStorage)\n', 'cyan');

  const hasToken = await question('Avez-vous votre token ? (y/n) : ');

  if (hasToken.toLowerCase() !== 'y') {
    log('\n❌ Veuillez d\'abord récupérer votre token.', 'red');
    log('💡 Vous pouvez aussi utiliser Postman ou curl pour vous authentifier', 'cyan');
    log('   et récupérer le token de la réponse.\n', 'cyan');
    rl.close();
    return;
  }

  const token = await question('\n🔑 Collez votre token ici : ');

  if (!token || token.trim().length === 0) {
    log('\n❌ Token invalide !', 'red');
    rl.close();
    return;
  }

  // Sauvegarder le token
  const tokenPath = path.join(process.cwd(), '.temp-auth-token');
  fs.writeFileSync(tokenPath, token.trim());

  log('\n✅ Token sauvegardé avec succès !', 'green');
  log(`📁 Emplacement : ${tokenPath}`, 'cyan');

  // Vérifier si .gitignore existe et contient .temp-auth-token
  const gitignorePath = path.join(process.cwd(), '.gitignore');

  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');

    if (!gitignoreContent.includes('.temp-auth-token')) {
      log('\n⚠️  Ajout de .temp-auth-token au .gitignore...', 'yellow');
      fs.appendFileSync(gitignorePath, '\n# Token temporaire pour les scripts\n.temp-auth-token\n');
      log('✅ .gitignore mis à jour !', 'green');
    } else {
      log('✅ .temp-auth-token déjà dans .gitignore', 'green');
    }
  } else {
    log('\n⚠️  Pas de .gitignore trouvé. Création...', 'yellow');
    fs.writeFileSync(gitignorePath, '# Token temporaire pour les scripts\n.temp-auth-token\n');
    log('✅ .gitignore créé !', 'green');
  }

  log('\n📌 Prochaines étapes :', 'yellow');
  log('  1. Vous pouvez maintenant utiliser les scripts de génération/suppression de modules', 'cyan');
  log('  2. Les menus seront automatiquement créés/supprimés via l\'API', 'cyan');
  log('  3. Si le token expire, relancez ce script pour le mettre à jour', 'cyan');

  log('\n💡 Commandes disponibles :', 'yellow');
  log('  npm run module:generate  - Créer un nouveau module avec menu', 'cyan');
  log('  npm run module:delete    - Supprimer un module et son menu', 'cyan');

  log('\n🔒 Sécurité :', 'yellow');
  log('  Le token est stocké localement dans .temp-auth-token', 'reset');
  log('  Ce fichier est ignoré par git pour éviter de le commiter', 'reset');
  log('  Pensez à supprimer ce fichier si vous n\'en avez plus besoin', 'reset');

  log('\n✨ Configuration terminée avec succès !', 'green');

  rl.close();
}

main().catch(error => {
  log(`\n❌ Erreur : ${error.message}`, 'red');
  rl.close();
  process.exit(1);
});
