#!/usr/bin/env node

/**
 * Script to enable or disable an auto-generated module
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console colors
const colors = {
  reset: '[0m',
  bright: '[1m',
  green: '[32m',
  yellow: '[33m',
  blue: '[34m',
  red: '[31m',
  cyan: '[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function question(query) {
  return new Promise(resolve => rl.question(`${colors.cyan}${query}${colors.reset}`, resolve));
}

// Function to get all available auto-generated modules
function getAvailableModules() {
  const pagesPath = path.join(process.cwd(), 'src', 'app', 'pages');
  try {
    const folders = fs.readdirSync(pagesPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    // Filter for modules that have a .config.ts file
    return folders.filter(folder => {
      const configPath = path.join(pagesPath, folder, `${folder}.config.ts`);
      return fs.existsSync(configPath);
    });
  } catch (error) {
    log('Error reading module directories. Make sure you are in the project root.', 'red');
    return [];
  }
}

// Function to toggle the 'enabled' status in a config file
function toggleModuleStatus(moduleName) {
  const configPath = path.join(process.cwd(), 'src', 'app', 'pages', moduleName, `${moduleName}.config.ts`);

  try {
    let content = fs.readFileSync(configPath, 'utf8');
    const enabledRegex = /enabled:\s*(true|false)/;
    const match = content.match(enabledRegex);

    if (!match) {
      log(`  ⚠️  'enabled' flag not found in ${moduleName}.config.ts. Adding it.`, 'yellow');
      // Add the flag if it doesn't exist, defaulting to enabled
      content = content.replace(/moduleName:\s*'${moduleName}',/, `moduleName: '${moduleName}',\n  enabled: true,`);
    } else {
      const currentStatus = match[1];
      const newStatus = currentStatus === 'true' ? 'false' : 'true';
      content = content.replace(enabledRegex, `enabled: ${newStatus}`);
      log(`  ✓ Module '${moduleName}' has been ${newStatus === 'true' ? 'ENABLED' : 'DISABLED'}.`, 'green');
    }

    fs.writeFileSync(configPath, content);
    return true;

  } catch (error) {
    log(`  ❌ Error updating ${configPath}: ${error.message}`, 'red');
    return false;
  }
}

async function main() {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║  🔄 AUTO-GENERATOR - MODULE STATUS TOGGLER  ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');

  const modules = getAvailableModules();

  if (modules.length === 0) {
    log('⚠️  No auto-generated modules found.', 'yellow');
    rl.close();
    return;
  }

  log('📋 Available modules:', 'yellow');
  modules.forEach((mod, index) => {
    log(`  ${index + 1}. ${mod}`, 'blue');
  });

  const moduleChoice = await question('\n📝 Enter the name of the module to enable/disable: ');
  const moduleName = moduleChoice.trim().toLowerCase();

  if (!modules.includes(moduleName)) {
    log('❌ Module not found.', 'red');
    rl.close();
    return;
  }

  if (toggleModuleStatus(moduleName)) {
    log('\n✨ Status toggled successfully!', 'green');
    log('\n📌 Next steps:', 'yellow');
    log('  1. Restart your development server for the change to take effect.', 'cyan');
  } else {
    log('\n❌ Failed to toggle module status.', 'red');
  }

  rl.close();
}

main().catch(err => {
  console.error('An unexpected error occurred:', err);
  rl.close();
  process.exit(1);
});
