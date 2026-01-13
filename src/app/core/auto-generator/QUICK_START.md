# 🚀 Quick Start - Auto-Generator

## Guide de Lancement Rapide

Ce guide vous montre comment **lancer et tester** l'architecture Auto-Generator étape par étape.

---

## 📋 Prérequis

Avant de commencer, assurez-vous que votre projet Angular fonctionne correctement :

```bash
# Installer les dépendances
npm install

# Vérifier que le projet compile
ng build

# Démarrer le serveur de développement
ng serve
```

---

## 🎯 Étape 1 : Tester avec le Module Roles (Existant)

### Option A : Migration Progressive (Recommandée)

Nous allons migrer progressivement le module Roles existant vers la nouvelle architecture.

#### 1.1 - Renommer les fichiers existants (backup)

```bash
# Dans le terminal, naviguez vers le dossier roles
cd src/app/pages/roles

# Renommez les anciens fichiers pour les garder en backup
mv roles.component.ts roles.component.old.ts
mv roles.resolver.ts roles.resolver.old.ts
```

#### 1.2 - Utiliser les nouveaux fichiers

```bash
# Renommez les nouveaux fichiers créés
mv roles.component.new.ts roles.component.ts
mv roles.resolver.new.ts roles.resolver.ts
mv roles.routes.new.ts roles.routes.ts
```

#### 1.3 - Mettre à jour app.routes.ts

Ouvrez `src/app/app.routes.ts` et ajoutez en haut du fichier :

```typescript
// Importez le registry et la fonction d'auto-registration
import { moduleRegistry, autoRegisterModules } from './core/auto-generator/utils/module-scanner';
import { ROLES_CONFIG } from './pages/roles/roles.config';

// Enregistrez le module Roles
moduleRegistry.register(ROLES_CONFIG);

// Générez les routes automatiquement
const autoRoutes = autoRegisterModules();
```

Ensuite, dans la section `children` du layout, **remplacez** :

```typescript
// ANCIEN CODE (à supprimer ou commenter)
{
  path: 'role',
  loadComponent: () =>
    import('./pages/roles/roles.component').then((m) => m.RolesComponent)
},
```

Par :

```typescript
// NOUVEAU CODE
...autoRoutes,  // ✨ Routes auto-générées !
```

Le résultat final devrait ressembler à :

```typescript
export const appRoutes: VexRoutes = [
  // ... autres routes (login, maintenance, etc.)

  {
    path: 'index',
    component: LayoutComponent,
    canActivate: [authGuard, maintenanceGuard],
    resolve: {
      settingsData: settingsResolver
    },
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        canActivate: [permissionGuard],
        data: {
          permissions: [Authority.ADMIN, Authority.MANAGER, Authority.USER]
        },
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        resolve: {
          menusData: menusResolver
        }
      },

      // ✨ AJOUTEZ ICI LES ROUTES AUTO-GÉNÉRÉES
      ...autoRoutes,

      // Autres routes existantes...
      {
        path: 'user',
        canActivate: [permissionGuard],
        data: {
          permissions: [Authority.ADMIN, Authority.MANAGER]
        },
        loadComponent: () =>
          import('./pages/users/users.component').then((m) => m.UsersComponent),
        resolve: {
          usersData: usersResolver
        }
      },
      // ... reste des routes
    ]
  }
];
```

#### 1.4 - Compiler et tester

```bash
# Revenez à la racine du projet
cd ../../../..

# Compilez le projet pour vérifier qu'il n'y a pas d'erreurs
ng build

# Si compilation OK, lancez le serveur
ng serve

# Ouvrez votre navigateur sur http://localhost:4200
# Connectez-vous et naviguez vers /index/role
```

---

## 🎯 Étape 2 : Vérifier que tout fonctionne

### Checklist de Vérification

✅ **Navigation** - Vous pouvez accéder à `/index/role`
✅ **Liste** - La liste des rôles s'affiche correctement
✅ **Édition** - Le bouton Edit ouvre le dialog
✅ **Suppression** - Le bouton Delete fonctionne
✅ **Suppression multiple** - La sélection multiple fonctionne
✅ **Recherche** - La recherche fonctionne
✅ **Pagination** - La pagination fonctionne
✅ **Permissions** - Seuls les admins peuvent accéder

### Debugging

Si vous rencontrez des erreurs :

#### Erreur : "Cannot find module"

```bash
# Vérifiez que tous les imports sont corrects
# Ouvrez la console du navigateur (F12) pour voir les erreurs détaillées
```

Solution : Vérifiez les chemins d'import dans :
- `roles.config.ts`
- `roles.component.ts`
- `roles.resolver.ts`

#### Erreur : "Module not registered"

```bash
# Vérifiez que vous avez bien enregistré le module
```

Solution : Dans `app.routes.ts`, assurez-vous d'avoir :
```typescript
moduleRegistry.register(ROLES_CONFIG);
```

#### Erreur : "GenericModuleComponent not found"

Solution : Ajoutez l'import dans `roles.component.ts` :
```typescript
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
```

---

## 🎯 Étape 3 : Créer un Nouveau Module (Exemple: Products)

Maintenant que Roles fonctionne, créons un module complètement nouveau !

### 3.1 - Créer la structure

```bash
# Créez le dossier du module
mkdir -p src/app/pages/products/dialogs/product-create-update
mkdir -p src/app/pages/products/dialogs/delete-element

# Créez les fichiers principaux
touch src/app/pages/products/products.config.ts
touch src/app/pages/products/products.component.ts
touch src/app/pages/products/products.resolver.ts
touch src/app/pages/products/products.routes.ts
```

### 3.2 - Créer le modèle

Créez `src/app/models/product.model.ts` :

```typescript
export class Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;

  constructor(product: Product) {
    this.id = product.id ?? 0;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.stock = product.stock;
  }
}
```

### 3.3 - Créer l'interface et formlyFields

Créez `src/app/interfaces/Products.ts` :

```typescript
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Products {
  id?: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
}

export const productsFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Product Name',
      placeholder: 'Enter product name',
      required: true,
      minLength: 3,
      maxLength: 100
    },
    validation: {
      messages: {
        required: 'Product name is required',
        minlength: 'Product name must be at least 3 characters',
        maxlength: 'Product name cannot exceed 100 characters'
      }
    }
  },
  {
    key: 'description',
    type: 'textarea',
    props: {
      label: 'Description',
      placeholder: 'Enter product description',
      rows: 4
    }
  },
  {
    key: 'price',
    type: 'input',
    props: {
      label: 'Price',
      placeholder: 'Enter price',
      required: true,
      type: 'number',
      min: 0
    },
    validation: {
      messages: {
        required: 'Price is required',
        min: 'Price must be greater than 0'
      }
    }
  },
  {
    key: 'stock',
    type: 'input',
    props: {
      label: 'Stock',
      placeholder: 'Enter stock quantity',
      required: true,
      type: 'number',
      min: 0
    },
    validation: {
      messages: {
        required: 'Stock is required',
        min: 'Stock cannot be negative'
      }
    }
  }
];
```

### 3.4 - Créer la configuration

Créez `src/app/pages/products/products.config.ts` :

```typescript
import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
import { productsFormlyFields } from 'src/app/interfaces/Products';
import { Authority } from 'src/static-data/authority.constants';
import { Product } from 'src/app/models/product.model';
import { ProductCreateUpdateComponent } from './dialogs/product-create-update/product-create-update.component';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';

export const PRODUCTS_CONFIG: ModuleConfig<Product> = {
  moduleName: 'products',
  resourceType: 'products',
  displayName: 'Products',
  displayNameSingular: 'Product',

  identifierField: 'id',
  identifierType: 'number',

  route: {
    path: 'products',
    permissions: [Authority.ADMIN, Authority.MANAGER],
    resolver: true,
    resolverKey: 'productsData'
  },

  form: {
    fields: productsFormlyFields,
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
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: false,
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
      createSuccess: 'Product created successfully!',
      updateSuccess: 'Product updated successfully!',
      deleteSuccess: 'Product deleted successfully!',
      deleteAllSuccess: 'Products deleted successfully!',
      createError: 'Error creating product.',
      updateError: 'Error updating product.',
      deleteError: 'Error deleting product.'
    }
  },

  dialogs: {
    createUpdate: ProductCreateUpdateComponent,
    delete: DeleteElementComponent
  }
};
```

### 3.5 - Créer le composant

Créez `src/app/pages/products/products.component.ts` :

```typescript
import { Component } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { PRODUCTS_CONFIG } from './products.config';

@Component({
  selector: 'vex-products',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class ProductsComponent {
  config = PRODUCTS_CONFIG;
}
```

### 3.6 - Créer le resolver

Créez `src/app/pages/products/products.resolver.ts` :

```typescript
import { createGenericResolver } from 'src/app/core/auto-generator/utils/resolver-generator';
import { PRODUCTS_CONFIG } from './products.config';

export const productsResolver = createGenericResolver(PRODUCTS_CONFIG);
```

### 3.7 - Créer les routes

Créez `src/app/pages/products/products.routes.ts` :

```typescript
import { createModuleRoutes } from 'src/app/core/auto-generator/utils/route-generator';
import { PRODUCTS_CONFIG } from './products.config';

export const productsRoutes = createModuleRoutes(PRODUCTS_CONFIG);
export default productsRoutes;
```

### 3.8 - Enregistrer dans app.routes.ts

Ajoutez dans `src/app/app.routes.ts` :

```typescript
import { PRODUCTS_CONFIG } from './pages/products/products.config';

moduleRegistry.registerMany([
  ROLES_CONFIG,
  PRODUCTS_CONFIG  // ✨ Nouveau module !
]);
```

### 3.9 - Compiler et tester

```bash
ng serve

# Naviguez vers http://localhost:4200/index/products
```

---

## 🎯 Étape 4 : Utilitaires de Debug

### Lister tous les modules enregistrés

Ajoutez dans la console du navigateur (F12) :

```typescript
// Dans app.routes.ts, après l'enregistrement des modules
moduleRegistry.listAll();
```

Ou dans le constructeur de votre AppComponent :

```typescript
import { moduleRegistry } from './core/auto-generator/utils/module-scanner';

constructor() {
  moduleRegistry.listAll();
}
```

### Valider tous les modules

```typescript
import { validateAllModules } from './core/auto-generator/utils/module-scanner';

const validation = validateAllModules();
console.log('Valid modules:', validation.valid);
console.log('Invalid modules:', validation.invalid);
```

### Exporter la configuration

```typescript
import { exportModuleConfigs } from './core/auto-generator/utils/module-scanner';

const configs = exportModuleConfigs();
console.log('All configs:', configs);
```

---

## 🎯 Étape 5 : Migration des Modules Existants

Pour migrer un module existant (comme Users) :

### Script de Migration

Créez un fichier `migrate-module.sh` :

```bash
#!/bin/bash

MODULE_NAME=$1

if [ -z "$MODULE_NAME" ]; then
  echo "Usage: ./migrate-module.sh <module-name>"
  exit 1
fi

cd "src/app/pages/$MODULE_NAME"

# Backup des anciens fichiers
echo "📦 Backing up old files..."
mv "${MODULE_NAME}.component.ts" "${MODULE_NAME}.component.old.ts"
mv "${MODULE_NAME}.resolver.ts" "${MODULE_NAME}.resolver.old.ts" 2>/dev/null

# Créer le fichier de config
echo "📝 Creating config file..."
cat > "${MODULE_NAME}.config.ts" << 'EOF'
import { ModuleConfig } from 'src/app/core/auto-generator/interfaces/module-config.interface';
// TODO: Import your formlyFields and other dependencies

export const ${MODULE_NAME^^}_CONFIG: ModuleConfig = {
  moduleName: '${MODULE_NAME}',
  resourceType: '${MODULE_NAME}',
  displayName: 'TODO',
  displayNameSingular: 'TODO',

  // TODO: Complete the configuration
};
EOF

echo "✅ Migration prepared! Please complete the config file."
```

Rendez-le exécutable :

```bash
chmod +x migrate-module.sh
./migrate-module.sh users
```

---

## 📊 Checklist Complète de Migration

- [ ] Architecture installée et compilée
- [ ] Module Roles migré et testé
- [ ] Nouveau module créé (Products ou autre)
- [ ] Routes auto-générées fonctionnelles
- [ ] Tous les modules enregistrés dans moduleRegistry
- [ ] Validation des modules OK
- [ ] Tests E2E passent
- [ ] Documentation lue et comprise

---

## 🆘 Support et Dépannage

### Problème : Le module ne s'affiche pas

**Solution :**
1. Vérifiez la console (F12)
2. Vérifiez que le module est enregistré : `moduleRegistry.listAll()`
3. Vérifiez les permissions dans la config
4. Vérifiez que l'utilisateur a les bonnes permissions

### Problème : Erreurs de compilation

**Solution :**
1. Vérifiez tous les imports
2. Vérifiez que les interfaces sont bien définies
3. Relancez `npm install`
4. Supprimez `node_modules/.cache` et recompilez

### Problème : Le dialog ne s'ouvre pas

**Solution :**
1. Vérifiez que le composant dialog existe
2. Vérifiez qu'il est bien importé dans la config
3. Vérifiez les exports du composant dialog

---

## 🎉 Félicitations !

Vous avez maintenant une architecture modulaire automatisée fonctionnelle !

**Prochaines étapes :**
- Migrez tous vos modules existants
- Créez de nouveaux modules en 5 minutes
- Personnalisez l'architecture selon vos besoins
- Partagez avec votre équipe

---

**Besoin d'aide ?** Consultez le [README.md](README.md) pour plus de détails !
