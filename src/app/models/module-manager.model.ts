export class ModuleManager {
  moduleName: string;
  displayName: string;
  displayNameSingular: string;
  resourceType: string;
  identifierField?: string;
  identifierType?: 'string' | 'number';
  requiresAuth?: boolean;
  routePath?: string;
  enabled?: boolean;
  devMode?: boolean;
  fieldsCount?: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(moduleManager: ModuleManager) {
    this.moduleName = moduleManager.moduleName;
    this.displayName = moduleManager.displayName;
    this.displayNameSingular = moduleManager.displayNameSingular;
    this.resourceType = moduleManager.resourceType || moduleManager.moduleName;
    this.identifierField = moduleManager.identifierField || 'id';
    this.identifierType = moduleManager.identifierType || 'number';
    this.requiresAuth = moduleManager.requiresAuth !== undefined ? moduleManager.requiresAuth : true;
    this.routePath = moduleManager.routePath || moduleManager.moduleName;
    this.enabled = moduleManager.enabled !== undefined ? moduleManager.enabled : true;
    this.devMode = moduleManager.devMode || false;
    this.fieldsCount = moduleManager.fieldsCount || 0;
    this.createdAt = moduleManager.createdAt;
    this.updatedAt = moduleManager.updatedAt;
  }
}
