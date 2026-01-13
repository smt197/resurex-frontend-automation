import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UpdateData } from '../interfaces/User';
import { Roles } from '../interfaces/Roles';
import { Permissions } from '../interfaces/Permissions';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {
    // Maps pour stocker les références
    private rolesMap = new Map<string, Roles>();
    private permissionsMap = new Map<string, Permissions>();
  
    constructor() {}
  
    // Autres méthodes existantes du service FormUtilsService...
    
    /**
     * Recherche un champ dans la configuration Formly par sa clé
     */
    findKeySelectField(
      fields: FormlyFieldConfig[],
      key: string
    ): FormlyFieldConfig | null {
      for (const field of fields) {
        if (field.key === key) {
          return field;
        }
  
        if (field.fieldGroup) {
          for (const groupField of field.fieldGroup) {
            if (groupField.key === key) {
              return groupField;
            }
          }
        }
      }
      return null;
    }
  
    /**
     * Configure les champs select pour les rôles et permissions
     */
    configureSelectFields(fields: FormlyFieldConfig[], data: any): void {
      const selectKeys = ['roles', 'permissions'];
    
      selectKeys.forEach((key) => {
        const field = this.findKeySelectField(fields, key);
    
        if (field && field.props) {
          const values = data[key];
    
          if (Array.isArray(values)) {
            // Stocker les rôles/permissions par nom pour un accès facile
            if (key === 'roles') {
              this.rolesMap.clear(); // Nettoyer avant d'ajouter
              values.forEach((role: Roles) => {
                if (role && role.name) {
                  this.rolesMap.set(role.name, role);
                }
              });
            }
            
            if (key === 'permissions') {
              this.permissionsMap.clear(); // Nettoyer avant d'ajouter
              values.forEach((permission: Permissions) => {
                if (permission && permission.name) {
                  this.permissionsMap.set(permission.name, permission);
                }
              });
            }
            
            // Configurer les options du select
            field.props.options = values.map((item: any) => ({
              label: item.display_name,
              value: item // Stocker l'objet complet comme valeur
            }));
            
            // S'assurer que c'est un select multiple
            field.props['multiple'] = true;
            
            // Configuration pour afficher correctement les options sélectionnées
            field.props['compareWith'] = (option: any, value: any) => {
              return option && value && option.name === value.name;
            };
            
            
          } else {
            console.error(`${key} n'est pas un tableau`);
          }
    
          field.type = 'select';
        }
      });
    }
  
    /**
     * Récupère un rôle par son nom
     */
    getRoleByName(name: string): Roles | undefined {
      return this.rolesMap.get(name);
    }
  
    /**
     * Récupère une permission par son nom
     */
    getPermissionByName(name: string): Permissions | undefined {
      return this.permissionsMap.get(name);
    }
  
    /**
     * Récupère tous les rôles stockés
     */
    getAllRoles(): Roles[] {
      return Array.from(this.rolesMap.values());
    }
  
    /**
     * Récupère toutes les permissions stockées
     */
    getAllPermissions(): Permissions[] {
      return Array.from(this.permissionsMap.values());
    }
  
    /**
     * Ajoute les rôles et permissions à un FormData
     */
    
  }