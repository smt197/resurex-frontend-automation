/**
 * Script de validation des modules
 *
 * Utilisez ce script pour valider que tous vos modules sont correctement configurés
 *
 * Usage:
 * 1. Importez ce script dans votre AppComponent ou un service d'initialisation
 * 2. Appelez validateAndReportModules() au démarrage de l'application
 */

import { moduleRegistry, validateAllModules } from '../utils/module-scanner';

/**
 * Valide tous les modules et affiche un rapport détaillé
 */
export function validateAndReportModules(): void {
  console.log('\n🔍 ===== MODULE VALIDATION REPORT =====\n');

  const allModules = moduleRegistry.getAll();

  if (allModules.length === 0) {
    console.warn('⚠️  No modules registered!');
    console.log('Did you forget to call moduleRegistry.register() or registerMany()?');
    return;
  }

  console.log(`📦 Total modules registered: ${allModules.length}\n`);

  const { valid, invalid } = validateAllModules();

  // Rapport des modules valides
  if (valid.length > 0) {
    console.log('✅ VALID MODULES:\n');
    valid.forEach((config, index) => {
      console.log(`${index + 1}. ${config.moduleName}`);
      console.log(`   Route: /${config.route.path}`);
      console.log(`   Resource: ${config.resourceType}`);
      console.log(`   Identifier: ${config.identifierField} (${config.identifierType})`);
      console.log(`   Actions: ${getEnabledActions(config).join(', ')}`);
      console.log(`   Permissions: ${config.route.permissions?.join(', ') || 'None'}`);
      console.log('');
    });
  }

  // Rapport des modules invalides
  if (invalid.length > 0) {
    console.error('❌ INVALID MODULES:\n');
    invalid.forEach(({ config, errors }, index) => {
      console.error(`${index + 1}. ${config.moduleName || 'Unknown'}`);
      errors.forEach(error => {
        console.error(`   • ${error}`);
      });
      console.error('');
    });
  }

  // Résumé
  console.log('===== SUMMARY =====');
  console.log(`✅ Valid: ${valid.length}`);
  console.log(`❌ Invalid: ${invalid.length}`);
  console.log(`📊 Total: ${allModules.length}\n`);

  if (invalid.length > 0) {
    console.error('⚠️  Please fix the invalid modules before proceeding!\n');
  } else {
    console.log('🎉 All modules are valid!\n');
  }
}

/**
 * Obtient la liste des actions activées pour un module
 */
function getEnabledActions(config: any): string[] {
  const actions = [];

  if (config.actions.create?.enabled) actions.push('create');
  if (config.actions.edit?.enabled) actions.push('edit');
  if (config.actions.delete?.enabled) actions.push('delete');
  if (config.actions.deleteAll?.enabled) actions.push('deleteAll');
  if (config.actions.show?.enabled) actions.push('show');
  if (config.actions.search?.enabled) actions.push('search');
  if (config.actions.export?.enabled) actions.push('export');

  if (config.actions.custom && config.actions.custom.length > 0) {
    config.actions.custom.forEach((customAction: any) => {
      actions.push(customAction.name);
    });
  }

  return actions;
}

/**
 * Vérifie la cohérence entre les modules
 */
export function checkModuleConflicts(): void {
  console.log('\n🔍 ===== CHECKING MODULE CONFLICTS =====\n');

  const allModules = moduleRegistry.getAll();
  const conflicts: { type: string; details: string }[] = [];

  // Vérifier les doublons de paths
  const paths = new Map<string, string[]>();
  allModules.forEach(config => {
    const path = config.route.path;
    if (!paths.has(path)) {
      paths.set(path, []);
    }
    paths.get(path)!.push(config.moduleName);
  });

  paths.forEach((modules, path) => {
    if (modules.length > 1) {
      conflicts.push({
        type: 'Duplicate Path',
        details: `Path "/${path}" is used by: ${modules.join(', ')}`
      });
    }
  });

  // Vérifier les doublons de resourceType
  const resourceTypes = new Map<string, string[]>();
  allModules.forEach(config => {
    const type = config.resourceType;
    if (!resourceTypes.has(type)) {
      resourceTypes.set(type, []);
    }
    resourceTypes.get(type)!.push(config.moduleName);
  });

  resourceTypes.forEach((modules, type) => {
    if (modules.length > 1) {
      conflicts.push({
        type: 'Duplicate Resource Type',
        details: `Resource type "${type}" is used by: ${modules.join(', ')}`
      });
    }
  });

  // Afficher les conflits
  if (conflicts.length > 0) {
    console.error('⚠️  CONFLICTS FOUND:\n');
    conflicts.forEach(({ type, details }, index) => {
      console.error(`${index + 1}. ${type}`);
      console.error(`   ${details}\n`);
    });
  } else {
    console.log('✅ No conflicts found!\n');
  }
}

/**
 * Génère un rapport détaillé de tous les modules
 */
export function generateModuleReport(): string {
  const allModules = moduleRegistry.getAll();
  let report = '# Module Configuration Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `Total Modules: ${allModules.length}\n\n`;

  report += '## Modules\n\n';

  allModules.forEach((config, index) => {
    report += `### ${index + 1}. ${config.displayName} (${config.moduleName})\n\n`;
    report += `- **Route**: \`/${config.route.path}\`\n`;
    report += `- **Resource Type**: \`${config.resourceType}\`\n`;
    report += `- **Identifier**: \`${config.identifierField}\` (${config.identifierType})\n`;
    report += `- **Permissions**: ${config.route.permissions?.join(', ') || 'None'}\n`;
    report += `- **Resolver**: ${config.route.resolver ? 'Yes' : 'No'}\n`;
    report += `- **Form Width**: ${config.form.width || 'Default'}\n\n`;

    report += '**Actions**:\n';
    report += `- Create: ${config.actions.create.enabled ? '✅' : '❌'}\n`;
    report += `- Edit: ${config.actions.edit.enabled ? '✅' : '❌'}\n`;
    report += `- Delete: ${config.actions.delete.enabled ? '✅' : '❌'}\n`;
    report += `- Delete All: ${config.actions.deleteAll.enabled ? '✅' : '❌'}\n`;
    report += `- Show: ${config.actions.show.enabled ? '✅' : '❌'}\n`;
    report += `- Search: ${config.actions.search.enabled ? '✅' : '❌'}\n`;
    report += `- Export: ${config.actions.export.enabled ? '✅' : '❌'}\n`;

    if (config.actions.custom && config.actions.custom.length > 0) {
      report += `- Custom Actions: ${config.actions.custom.map(a => a.name).join(', ')}\n`;
    }

    report += '\n**Data Configuration**:\n';
    report += `- Use FormData: ${config.data.useFormData ? 'Yes' : 'No'}\n`;
    report += `- Optimistic Update: ${config.data.optimisticUpdate ? 'Yes' : 'No'}\n`;
    report += `- Optimistic Delete: ${config.data.optimisticDelete ? 'Yes' : 'No'}\n`;
    report += `- Auto Refresh: ${config.data.autoRefresh ? 'Yes' : 'No'}\n`;
    report += `- Generic API: ${config.data.useGenericApi ? 'Yes' : 'No'}\n\n`;

    report += '**Table Configuration**:\n';
    report += `- Default Page Size: ${config.table.defaultPageSize}\n`;
    report += `- Sortable: ${config.table.sortable ? 'Yes' : 'No'}\n`;
    report += `- Filterable: ${config.table.filterable ? 'Yes' : 'No'}\n`;
    report += `- Selectable: ${config.table.selectable ? 'Yes' : 'No'}\n\n`;

    report += '---\n\n';
  });

  return report;
}

/**
 * Sauvegarde le rapport dans le localStorage (pour debug)
 */
export function saveModuleReportToLocalStorage(): void {
  const report = generateModuleReport();
  localStorage.setItem('module-report', report);
  console.log('📝 Module report saved to localStorage');
  console.log('Access it with: localStorage.getItem("module-report")');
}

/**
 * Vérifie que tous les dialogs configurés existent
 */
export function validateDialogs(): void {
  console.log('\n🔍 ===== VALIDATING DIALOGS =====\n');

  const allModules = moduleRegistry.getAll();
  const issues: string[] = [];

  allModules.forEach(config => {
    if (config.dialogs) {
      // Vérifier createUpdate
      if (config.actions.create.enabled || config.actions.edit.enabled) {
        if (!config.dialogs.createUpdate) {
          issues.push(`${config.moduleName}: createUpdate dialog is missing but create/edit is enabled`);
        }
      }

      // Vérifier show
      if (config.actions.show.enabled) {
        if (!config.dialogs.show) {
          issues.push(`${config.moduleName}: show dialog is missing but show is enabled`);
        }
      }

      // Vérifier delete
      if (config.actions.delete.enabled || config.actions.deleteAll.enabled) {
        if (!config.dialogs.delete) {
          issues.push(`${config.moduleName}: delete dialog is missing but delete is enabled`);
        }
      }
    } else {
      issues.push(`${config.moduleName}: No dialogs configured`);
    }
  });

  if (issues.length > 0) {
    console.warn('⚠️  DIALOG ISSUES FOUND:\n');
    issues.forEach((issue, index) => {
      console.warn(`${index + 1}. ${issue}`);
    });
    console.log('');
  } else {
    console.log('✅ All dialogs are properly configured!\n');
  }
}

/**
 * Fonction principale qui exécute toutes les validations
 */
export function runFullValidation(): void {
  console.log('\n🚀 ===== RUNNING FULL MODULE VALIDATION =====\n');

  validateAndReportModules();
  checkModuleConflicts();
  validateDialogs();

  console.log('🏁 ===== VALIDATION COMPLETE =====\n');
}
