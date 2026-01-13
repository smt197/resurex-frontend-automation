import { FormlyFieldConfig } from '@ngx-formly/core';
import { Authority } from 'src/static-data/authority.constants';

/**
 * Configuration complète d'un module
 * Ce fichier dicte tout le comportement automatique du module
 */
export interface ModuleConfig<T = any> {
  // ========== IDENTITÉ ==========
  /** Nom du module (ex: 'roles', 'users') */
  moduleName: string;

  /** Si le module est activé ou non */
  enabled?: boolean;

  /** Type de ressource pour l'API (ex: 'roles', 'users') */
  resourceType: string;

  /** Nom d'affichage pluriel (ex: 'Roles', 'Users') */
  displayName: string;

  /** Nom d'affichage singulier (ex: 'Role', 'User') */
  displayNameSingular: string;

  // ========== IDENTIFIANTS ==========
  /** Champ utilisé comme identifiant unique ('id' ou 'slug') */
  identifierField: 'id' | 'slug';

  /** Type de l'identifiant ('number' ou 'string') */
  identifierType: 'number' | 'string';

  // ========== ROUTING ==========
  route: RouteConfig;

  // ========== FORMULAIRE ==========
  form: FormConfig;

  // ========== ACTIONS DISPONIBLES ==========
  actions: ActionsConfig;

  // ========== GESTION DES DONNÉES ==========
  data: DataConfig;

  // ========== TABLE / LISTE ==========
  table: TableConfig;

  // ========== NOTIFICATIONS ==========
  notifications: NotificationsConfig;

  // ========== DIALOGS CUSTOM ==========
  dialogs?: DialogsConfig;
}

/**
 * Configuration du routing
 */
export interface RouteConfig {
  /** Chemin de la route (ex: 'role', 'user') */
  path: string;

  /** Permissions requises pour accéder à la route */
  permissions?: Authority[];

  /** Si le module a des sous-routes (loadChildren) */
  loadChildren?: boolean;

  /** Si un resolver doit être utilisé */
  resolver?: boolean;

  /** Clé du resolver dans la route (ex: 'rolesData') */
  resolverKey?: string;

  /** Données additionnelles pour la route */
  routeData?: any;
}

/**
 * Configuration du formulaire
 */
export interface FormConfig {
  /** Champs Formly pour le formulaire */
  fields: FormlyFieldConfig[];

  /** Largeur du dialog (ex: '650px', '800px') */
  width?: string;

  /** Hauteur du dialog (optionnel) */
  height?: string;

  /** Désactiver la fermeture en cliquant à l'extérieur */
  disableClose?: boolean;
}

/**
 * Configuration de toutes les actions disponibles
 */
export interface ActionsConfig {
  create: ActionConfig;
  edit: ActionConfig;
  delete: ActionConfig;
  deleteAll: ActionConfig;
  show: ActionConfig;
  search: ActionConfig;
  export: ActionConfig;

  /** Actions personnalisées */
  custom?: CustomAction[];
}

/**
 * Configuration d'une action simple
 */
export interface ActionConfig {
  /** Si l'action est activée */
  enabled: boolean;

  /** Texte du bouton (optionnel, par défaut auto-généré) */
  label?: string;

  /** Icône Material (ex: 'mat:add', 'mat:edit') */
  icon?: string;

  /** Confirmation requise avant l'action */
  requiresConfirmation?: boolean;

  /** Message de confirmation */
  confirmationMessage?: string;
}

/**
 * Action personnalisée
 */
export interface CustomAction {
  /** Nom unique de l'action (ex: 'block', 'toggle-block') */
  name: string;

  /** Icône Material */
  icon: string;

  /** Label affiché */
  label: string;

  /** Nom de la méthode handler dans le composant */
  handler: string;

  /** Si l'action nécessite une confirmation */
  requiresConfirmation?: boolean;

  /** Message de confirmation */
  confirmationMessage?: string;

  /** Condition pour afficher l'action (fonction) */
  condition?: (row: any) => boolean;
}

/**
 * Configuration de la gestion des données
 */
export interface DataConfig {
  /** Utiliser FormData pour l'envoi (pour upload de fichiers) */
  useFormData: boolean;

  /** Mise à jour optimiste de l'UI (update instantané) */
  optimisticUpdate: boolean;

  /** Suppression optimiste de l'UI (delete instantané) */
  optimisticDelete: boolean;

  /** Auto-refresh après create/update/delete */
  autoRefresh: boolean;

  /** Utiliser GenericApiService (false si service custom) */
  useGenericApi: boolean;

  /** Service custom à utiliser si useGenericApi = false */
  customService?: any;

  /** Transformation des données avant envoi */
  transformBeforeSend?: (data: any) => any;

  /** Transformation des données après réception */
  transformAfterReceive?: (data: any) => any;
}

/**
 * Configuration de la table/liste
 */
export interface TableConfig {
  /** Taille de page par défaut */
  defaultPageSize: number;

  /** Colonnes triables */
  sortable: boolean;

  /** Colonnes filtrables */
  filterable: boolean;

  /** Lignes sélectionnables */
  selectable: boolean;

  /** Colonnes à afficher (optionnel) */
  columns?: ColumnConfig[];

  /** Actions de ligne disponibles */
  rowActions?: string[];
}

/**
 * Configuration d'une colonne
 */
export interface ColumnConfig {
  /** Clé du champ (obsolète, utiliser property à la place) */
  key?: string;

  /** Propriété du champ (compatible avec TableColumn) */
  property: string;

  /** Label de la colonne */
  label: string;

  /** Type de colonne */
  type?: 'text' | 'number' | 'date' | 'boolean' | 'image' | 'badge' | 'icon' | 'file' | 'color' | 'disable' | 'checkbox' | 'button' | 'custom';

  /** Visible */
  visible?: boolean;

  /** Triable */
  sortable?: boolean;

  /** Filtrable */
  filterable?: boolean;

  /** Fonction de formatage de la valeur */
  formatter?: (value: any, row?: any) => any;

  /** Icône (optionnel) */
  icon?: string;

  /** Classes CSS (optionnel) */
  cssClasses?: string[];

  /** Template custom */
  customTemplate?: any;
}

/**
 * Configuration des notifications
 */
export interface NotificationsConfig {
  /** Durée d'affichage en ms */
  duration: number;

  /** Messages personnalisés */
  messages: NotificationMessages;
}

/**
 * Messages de notification
 */
export interface NotificationMessages {
  createSuccess: string;
  updateSuccess: string;
  deleteSuccess: string;
  deleteAllSuccess: string;
  createError: string;
  updateError: string;
  deleteError: string;
  deleteAllError?: string;

  /** Messages custom pour actions custom */
  custom?: { [actionName: string]: { success: string; error: string } };
}

/**
 * Configuration des dialogs
 */
export interface DialogsConfig {
  /** Composant pour create/update */
  createUpdate?: any;

  /** Composant pour show */
  show?: any;

  /** Composant pour delete */
  delete?: any;

  /** Dialogs custom */
  custom?: { [actionName: string]: any };
}

/**
 * Type helper pour l'identifiant
 */
export type IdentifierValue<T extends ModuleConfig> =
  T['identifierType'] extends 'number' ? number : string;
