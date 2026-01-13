# 🚀 Auto-Generator - Architecture Modulaire Automatisée

## 📋 Table des Matières

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Installation](#installation)
- [Création d'un Nouveau Module](#création-dun-nouveau-module)
- [Configuration Détaillée](#configuration-détaillée)
- [Exemples](#exemples)
- [API Reference](#api-reference)
- [FAQ](#faq)

---

## Introduction

Le système **Auto-Generator** est une architecture stricte qui permet de créer des modules CRUD complets en quelques lignes de configuration. Plus besoin de copier-coller du code boilerplate !

### ✨ Avantages

- ✅ **Zero boilerplate** - Créez un module en 5 minutes
- ✅ **Configuration centralisée** - Tout est dans un seul fichier `.config.ts`
- ✅ **Type-safe** - TypeScript garantit la cohérence
- ✅ **Auto-discovery** - Les modules sont détectés automatiquement
- ✅ **Maintenabilité** - Modifier le comportement = modifier la config
- ✅ **Testabilité** - La logique est centralisée et testable
- ✅ **Évolutivité** - Ajouter des features = étendre l'interface

---

## Architecture

```
src/app/core/auto-generator/
├── interfaces/
│   └── module-config.interface.ts    # Interfaces TypeScript
├── utils/
│   ├── route-generator.ts            # Génération automatique des routes
│   ├── resolver-generator.ts         # Génération automatique des resolvers
│   └── module-scanner.ts             # Registry et auto-discovery
└── components/
    └── generic-module.component.ts   # Composant générique adaptatif
```

### Flux de Données

```
1. Développeur crée {module}.config.ts
2. Enregistre le module dans moduleRegistry
3. Auto-generator génère routes/resolver/component
4. Le module est automatiquement disponible !
```

---

## Installation

### 1. Aucune installation requise

Le système est déjà intégré dans votre projet sous `src/app/core/auto-generator/`.

### 2. Enregistrer les modules dans app.routes.ts

```typescript
// src/app/app.routes.ts
import { moduleRegistry, autoRegisterModules } from './core/auto-generator/utils/module-scanner';
import { ROLES_CONFIG } from './pages/roles/roles.config';
// Importez d'autres configs...

// Enregistrer les modules
moduleRegistry.registerMany([
  ROLES_CONFIG,
  // Ajoutez d'autres configs ici
]);

// Générer les routes automatiquement
const autoRoutes = autoRegisterModules();

export const appRoutes: VexRoutes = [
  {
    path: 'index',
    component: LayoutComponent,
    canActivate: [authGuard, maintenanceGuard],
    children: [
      ...autoRoutes,  // ✨ Routes auto-générées !
      // Autres routes manuelles...
    ]
  }
];
```

---

## Création d'un Nouveau Module

### Étape 1: Créer la structure de dossiers

```bash
src/app/pages/roles/
├── roles.config.ts                    # ⭐ Fichier de configuration (obligatoire)
├── roles.component.ts                 # Composant (3 lignes!)
├── roles.resolver.ts                  # Resolver (1 ligne!)
├── roles.routes.ts                    # Routes (1 ligne!)
├── dialogs/
│   ├── role-create-update/
│   │   ├── role-create-update.component.ts
│   │   └── role-create-update.component.html
│   └── delete-element/
│       ├── delete-element.component.ts
│       └── delete-element.component.html
└── models/
    └── role.model.ts
```

### Étape 2: Créer le fichier de configuration

```typescript
// src/app/pages/roles/roles.config.ts
import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { rolesFormlyFields } from 'src/app/interfaces/Roles';
import { Authority } from 'src/static-data/authority.constants';

export const ROLES_CONFIG: ModuleConfig = {
  moduleName: 'roles',
  resourceType: 'roles',
  displayName: 'Roles',
  displayNameSingular: 'Role',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: 'role',
    permissions: [Authority.ADMIN],
    resolver: true,
    resolverKey: 'rolesData'
  },

  form: {
    fields: rolesFormlyFields,
    width: '650px'
  },

  actions: {
    create: { enabled: true },
    edit: { enabled: true },
    delete: { enabled: true },
    deleteAll: { enabled: true },
    show: { enabled: false },
    search: { enabled: true },
    export: { enabled: false }
  },

  data: {
    useFormData: false,
    optimisticUpdate: false,
    optimisticDelete: true,
    autoRefresh: true,
    useGenericApi: true
  },

  table: {
    defaultPageSize: 10,
    sortable: true,
    filterable: true,
    selectable: true
  },

  notifications: {
    duration: 3000,
    messages: {
      createSuccess: 'Role created successfully!',
      updateSuccess: 'Role updated successfully!',
      deleteSuccess: 'Role deleted successfully!',
      deleteAllSuccess: 'Roles deleted successfully!',
      createError: 'Error creating role.',
      updateError: 'Error updating role.',
      deleteError: 'Error deleting role.'
    }
  },

  dialogs: {
    createUpdate: RoleCreateUpdateComponent,
    delete: DeleteElementComponent
  }
};
```

### Étape 3: Créer le composant (3 lignes!)

```typescript
// src/app/pages/roles/roles.component.ts
import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { ROLES_CONFIG } from './roles.config';

@Component({
  selector: 'vex-roles',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class RolesComponent {
  config = ROLES_CONFIG;
}
```

### Étape 4: Créer le resolver (1 ligne!)

```typescript
// src/app/pages/roles/roles.resolver.ts
import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { ROLES_CONFIG } from './roles.config';

export const rolesResolver = createGenericResolver(ROLES_CONFIG);
```

### Étape 5: Créer les routes (1 ligne!)

```typescript
// src/app/pages/roles/roles.routes.ts
import { createModuleRoutes } from 'src/app/core/auto-generator/utils/route-generator';
import { ROLES_CONFIG } from './roles.config';

export const rolesRoutes = createModuleRoutes(ROLES_CONFIG);
export default rolesRoutes;
```

### Étape 6: Enregistrer dans app.routes.ts

```typescript
// src/app/app.routes.ts
import { ROLES_CONFIG } from './pages/roles/roles.config';

moduleRegistry.register(ROLES_CONFIG);
```

### 🎉 C'est tout ! Votre module est prêt !

---

## Configuration Détaillée

### Identité du Module

```typescript
moduleName: 'roles',              // Nom unique du module
resourceType: 'roles',            // Type de ressource pour l'API
displayName: 'Roles',             // Nom pluriel affiché
displayNameSingular: 'Role',      // Nom singulier affiché
```

### Identifiants

```typescript
identifierField: 'id' | 'slug',   // Champ utilisé comme identifiant
identifierType: 'number' | 'string' // Type de l'identifiant
```

### Route Configuration

```typescript
route: {
  path: 'role',                    // Chemin de la route
  permissions: [Authority.ADMIN],  // Permissions requises
  resolver: true,                  // Utiliser un resolver
  resolverKey: 'rolesData',        // Clé du resolver
  loadChildren: false,             // Si module avec sous-routes
  routeData: { /* custom data */ } // Données custom
}
```

### Formulaire

```typescript
form: {
  fields: rolesFormlyFields,       // Champs Formly
  width: '650px',                  // Largeur du dialog
  height: '400px',                 // Hauteur (optionnel)
  disableClose: false              // Empêcher fermeture
}
```

### Actions

```typescript
actions: {
  create: {
    enabled: true,
    label: 'Create Role',          // Optionnel
    icon: 'mat:add',               // Optionnel
    requiresConfirmation: false
  },
  edit: { enabled: true },
  delete: {
    enabled: true,
    requiresConfirmation: true,
    confirmationMessage: 'Delete this role?'
  },
  deleteAll: { enabled: true },
  show: { enabled: false },
  search: { enabled: true },
  export: { enabled: false },

  // Actions personnalisées
  custom: [
    {
      name: 'block',
      icon: 'mat:block',
      label: 'Block User',
      handler: 'blockUser',
      requiresConfirmation: true,
      condition: (row) => !row.is_blocked
    }
  ]
}
```

### Gestion des Données

```typescript
data: {
  useFormData: false,              // Pour upload de fichiers
  optimisticUpdate: false,         // Update instantané UI
  optimisticDelete: true,          // Delete instantané UI
  autoRefresh: true,               // Refresh auto après action
  useGenericApi: true,             // Utiliser GenericApiService
  customService: MyService,        // Service custom (optionnel)

  // Transformations
  transformBeforeSend: (data) => {
    return { ...data, processed: true };
  },
  transformAfterReceive: (data) => {
    return data.map(item => new Role(item));
  }
}
```

### Table

```typescript
table: {
  defaultPageSize: 10,
  sortable: true,
  filterable: true,
  selectable: true,

  columns: [
    {
      key: 'name',
      label: 'Name',
      type: 'text',
      sortable: true,
      filterable: true
    }
  ],

  rowActions: ['edit', 'delete']
}
```

### Notifications

```typescript
notifications: {
  duration: 3000,                  // Durée en ms
  messages: {
    createSuccess: 'Created!',
    updateSuccess: 'Updated!',
    deleteSuccess: 'Deleted!',
    deleteAllSuccess: 'All deleted!',
    createError: 'Error creating.',
    updateError: 'Error updating.',
    deleteError: 'Error deleting.',
    deleteAllError: 'Error deleting all.',

    // Messages custom
    custom: {
      block: {
        success: 'User blocked!',
        error: 'Error blocking user.'
      }
    }
  }
}
```

### Dialogs

```typescript
dialogs: {
  createUpdate: RoleCreateUpdateComponent,
  show: RoleShowComponent,
  delete: DeleteElementComponent,

  // Dialogs custom
  custom: {
    assignPermissions: AssignPermissionsComponent
  }
}
```

---

## Exemples

### Module Simple (Roles)

Voir les fichiers générés:
- `src/app/pages/roles/roles.config.ts`
- `src/app/pages/roles/roles.component.new.ts`
- `src/app/pages/roles/roles.resolver.new.ts`
- `src/app/pages/roles/roles.routes.new.ts`

### Module Complexe (Users) avec Upload

```typescript
export const USERS_CONFIG: ModuleConfig = {
  moduleName: 'users',
  resourceType: 'users',
  identifierField: 'slug',
  identifierType: 'string',

  data: {
    useFormData: true,              // ✅ Upload activé
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: false,
    useGenericApi: true,

    transformBeforeSend: (data) => {
      // Traiter l'image avant envoi
      if (data.photo instanceof File) {
        // Logic...
      }
      return data;
    }
  },

  actions: {
    create: { enabled: true },
    edit: { enabled: true },
    delete: { enabled: true },
    deleteAll: { enabled: true },
    show: { enabled: true },
    search: { enabled: true },
    export: { enabled: true },

    custom: [
      {
        name: 'block',
        icon: 'mat:block',
        label: 'Block',
        handler: 'blockUser',
        condition: (row) => !row.is_blocked
      },
      {
        name: 'unblock',
        icon: 'mat:check_circle',
        label: 'Unblock',
        handler: 'unblockUser',
        condition: (row) => row.is_blocked
      }
    ]
  },

  // ... reste de la config
};
```

### Resolver avec Cache

```typescript
import { createCachedResolver } from 'src/app/core/auto-generator/utils/resolver-generator';

export const usersResolver = createCachedResolver(
  USERS_CONFIG,
  5 * 60 * 1000 // Cache pendant 5 minutes
);
```

### Resolver avec Pagination Custom

```typescript
import { createPaginatedResolver } from 'src/app/core/auto-generator/utils/resolver-generator';

export const usersResolver = createPaginatedResolver(
  USERS_CONFIG,
  (route) => Number(route.queryParams['page']) || 1,
  (route) => Number(route.queryParams['pageSize']) || 10
);
```

### Enregistrement Groupé

```typescript
// src/app/core/auto-generator/module-configs.ts
import { ROLES_CONFIG } from '../pages/roles/roles.config';
import { USERS_CONFIG } from '../pages/users/users.config';
import { PERMISSIONS_CONFIG } from '../pages/permissions/permissions.config';

export const ADMIN_MODULES = [
  ROLES_CONFIG,
  USERS_CONFIG,
  PERMISSIONS_CONFIG
];

// Dans app.routes.ts
moduleRegistry.registerMany(ADMIN_MODULES);
```

---

## API Reference

### `createModuleRoutes(config: ModuleConfig): VexRoutes`

Génère les routes pour un module.

### `createGenericResolver<T>(config: ModuleConfig<T>): ResolveFn`

Génère un resolver standard.

### `createPaginatedResolver<T>(...): ResolveFn`

Génère un resolver avec pagination custom.

### `createCachedResolver<T>(...): ResolveFn`

Génère un resolver avec cache.

### `moduleRegistry.register(config: ModuleConfig): void`

Enregistre un module dans le registry.

### `moduleRegistry.registerMany(configs: ModuleConfig[]): void`

Enregistre plusieurs modules.

### `autoRegisterModules(): VexRoutes`

Génère les routes pour tous les modules enregistrés.

### `validateAllModules(): { valid, invalid }`

Valide tous les modules enregistrés.

---

## FAQ

### Q: Puis-je personnaliser le comportement d'une action ?

**R:** Oui, vous pouvez:
1. Étendre `GenericModuleComponent`
2. Surcharger les méthodes dans votre composant
3. Utiliser des actions custom avec handlers

### Q: Comment gérer l'upload de fichiers ?

**R:** Configurez `data.useFormData: true` et le système utilisera FormData automatiquement.

### Q: Puis-je utiliser mon propre service au lieu de GenericApiService ?

**R:** Oui, configurez:
```typescript
data: {
  useGenericApi: false,
  customService: MyCustomService
}
```

### Q: Comment ajouter des colonnes personnalisées dans la table ?

**R:** Configurez `table.columns` dans la config.

### Q: Les modules sont-ils chargés en lazy loading ?

**R:** Oui, les composants sont chargés dynamiquement via `loadComponent`.

### Q: Comment désactiver une action ?

**R:** Mettez `enabled: false` dans la config de l'action.

### Q: Puis-je avoir des sous-routes dans un module ?

**R:** Oui, configurez `route.loadChildren: true` et créez un fichier de routes.

---

## 🎯 Prochaines Étapes

1. ✅ Créez votre premier module en suivant ce guide
2. ✅ Testez les différentes configurations
3. ✅ Partagez cette architecture avec votre équipe
4. ✅ Contribuez en ajoutant des features !

---

## 📞 Support

Pour toute question ou problème:
- Consultez cette documentation
- Examinez les exemples dans `src/app/pages/roles/`
- Contactez l'équipe de développement

---

**Fait avec ❤️ pour simplifier le développement Angular**
