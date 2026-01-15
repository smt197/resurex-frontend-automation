import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface ModuleField {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'Date';
  required: boolean;
}

export interface ModuleDefinition {
  moduleName: string;
  displayName: string;
  displayNameSingular: string;
  resourceType: string;
  identifierField: string;
  identifierType: 'string' | 'number';
  requiresAuth: boolean;
  routePath: string;
  fields: ModuleField[];
  enabled: boolean;
  devMode: boolean;
  roles?: string[];
  actions?: {
    create?: { enabled: boolean };
    edit?: { enabled: boolean };
    delete?: { enabled: boolean };
    deleteAll?: { enabled: boolean };
    show?: { enabled: boolean };
    search?: { enabled: boolean };
    export?: { enabled: boolean };
  };
  translations?: {
    en: { [key: string]: any };
    fr: { [key: string]: any };
    pt: { [key: string]: any };
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ModuleListItem {
  slug: string;
  moduleName: string;
  displayName: string;
  enabled: boolean;
  devMode: boolean;
  fieldsCount: number;
  routePath: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GitConfig {
  createBranch: boolean;
  repositorySlug: string;
  branchName?: string;
  sourceBranch?: string;
  commitMessage?: string;
}

export interface GenerateModuleRequest {
  moduleName: string;
  displayName: string;
  displayNameSingular: string;
  resourceType?: string;
  identifierField?: string;
  identifierType?: 'string' | 'number';
  requiresAuth?: boolean;
  routePath?: string;
  fields: ModuleField[];
  devMode?: boolean;
  roles?: string[];
  gitConfig?: GitConfig;
  actions?: {
    create?: { enabled: boolean };
    edit?: { enabled: boolean };
    delete?: { enabled: boolean };
    deleteAll?: { enabled: boolean };
    show?: { enabled: boolean };
    search?: { enabled: boolean };
    export?: { enabled: boolean };
  };
  translations?: {
    en: { [key: string]: any };
    fr: { [key: string]: any };
    pt: { [key: string]: any };
  };
}

export interface UpdateModuleRequest extends Partial<GenerateModuleRequest> {
  moduleName: string;
}

export interface GenerateModuleResponse {
  success: boolean;
  message: string;
  data?: {
    module_slug: string;
    branch_name?: string;
    deployment_triggered?: boolean;
    deployment_id?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ModuleGeneratorService {
  private readonly apiUrl = `${environment.apiUrl}/admin/modules`;

  constructor(private http: HttpClient) {}

  /**
   * Convertir les clés camelCase en snake_case pour Laravel
   */
  private toSnakeCase(obj: any): any {
    if (!obj || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
      return obj.map(item => this.toSnakeCase(item));
    }

    const snakeCaseObj: any = {};
    Object.keys(obj).forEach(key => {
      const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
      snakeCaseObj[snakeKey] = this.toSnakeCase(obj[key]);
    });
    return snakeCaseObj;
  }

  /**
   * Convertir les clés snake_case en camelCase pour Angular
   */
  private toCamelCase(obj: any): any {
    if (!obj || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
      return obj.map(item => this.toCamelCase(item));
    }

    const camelCaseObj: any = {};
    Object.keys(obj).forEach(key => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      camelCaseObj[camelKey] = this.toCamelCase(obj[key]);
    });
    return camelCaseObj;
  }

  /**
   * Obtenir la liste de tous les modules
   */
  getAllModules(): Observable<ModuleListItem[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const data = response.data || response;
        return this.toCamelCase(data);
      })
    );
  }

  /**
   * Obtenir les détails d'un module
   */
  getModule(slug: string): Observable<ModuleDefinition> {
    return this.http.get<any>(`${this.apiUrl}/${slug}`).pipe(
      map(response => {
        const data = response.data || response;
        return this.toCamelCase(data);
      })
    );
  }

  /**
   * Créer un nouveau module
   * Note: La route /generate est une route custom qui attend les données en camelCase
   */
  generateModule(request: GenerateModuleRequest): Observable<GenerateModuleResponse> {
    return this.http.post<GenerateModuleResponse>(`${this.apiUrl}/generate`, request);
  }

  /**
   * Mettre à jour un module existant
   */
  updateModule(slug: string, request: UpdateModuleRequest): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(`${this.apiUrl}/${slug}`, this.toSnakeCase(request));
  }

  /**
   * Supprimer un module
   */
  deleteModule(slug: string): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.apiUrl}/${slug}`);
  }

  /**
   * Activer/Désactiver un module
   */
  toggleModule(slug: string, enabled: boolean): Observable<{ success: boolean; message: string }> {
    return this.http.patch<{ success: boolean; message: string }>(`${this.apiUrl}/${slug}/toggle`, { enabled });
  }

  /**
   * Régénérer les fichiers d'un module
   */
  regenerateModule(slug: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/${slug}/regenerate`, {});
  }

  /**
   * Obtenir les fichiers d'un module (pour prévisualisation)
   */
  getModuleFiles(slug: string): Observable<{ [filename: string]: string }> {
    return this.http.get<{ [filename: string]: string }>(`${this.apiUrl}/${slug}/files`);
  }
}
