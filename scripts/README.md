# 🚀 Auto-Generator Scripts - Documentation Complète

Ce dossier contient les scripts d'auto-génération de modules avec gestion automatique des menus via l'API.

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Fonctionnalités](#fonctionnalités)
- [Scripts disponibles](#scripts-disponibles)
- [Configuration requise](#configuration-requise)
- [Utilisation](#utilisation)
- [Gestion automatique des menus](#gestion-automatique-des-menus)
- [Exemples](#exemples)
- [Dépannage](#dépannage)

## 🎯 Vue d'ensemble

Le système d'auto-génération permet de créer et supprimer des modules complets automatiquement, incluant :
- ✅ Structure de fichiers (composants, services, models, interfaces)
- ✅ Routes Angular avec guards
- ✅ Dialogs (create/update/delete)
- ✅ Traductions (i18n)
- ✅ **Menus dans la base de données via API**
- ✅ **Nettoyage automatique des imports**

## ✨ Fonctionnalités

### Génération de module (`generate-module.js`)
- Création complète de la structure du module
- Ajout automatique des routes
- Génération des traductions multilingues
- **Création automatique du menu via l'API**
- Support du mode développement avec mock data
- Configuration des permissions et guards

### Suppression de module (`delete-module.js`)
- Suppression de tous les fichiers du module
- Nettoyage des routes
- **Nettoyage automatique des imports inutiles**
- Suppression des traductions
- **Suppression automatique du menu de la base de données**

### Gestion des menus (`menu-api-manager.js`)
- Création de menus via l'API REST
- Mise à jour de menus existants
- Suppression de menus
- Recherche de menus par route
- Nettoyage des imports de routes

## 📦 Scripts disponibles

| Script | Commande | Description |
|--------|----------|-------------|
| `generate-module.js` | `npm run module:generate` | Génère un nouveau module complet |
| `delete-module.js` | `npm run module:delete` | Supprime un module existant |
| `update-module.js` | `npm run module:update` | Met à jour un module existant |
| `toggle-module.js` | `npm run module:toggle` | Active/désactive un module |
| `list-modules.js` | `npm run module:list` | Liste tous les modules générés |

## ⚙️ Configuration requise

### 1. Token d'authentification (optionnel)

Pour utiliser les fonctionnalités de gestion automatique des menus, vous devez avoir un token d'authentification valide.

**Option 1 : Fichier temporaire (recommandé pour développement)**
```bash
# Créer un fichier .temp-auth-token à la racine du projet
echo "votre-token-jwt" > .temp-auth-token

# Ajouter à .gitignore si ce n'est pas déjà fait
echo ".temp-auth-token" >> .gitignore
```

**Option 2 : Connexion via l'application**
1. Connectez-vous à l'application
2. Le token sera automatiquement stocké dans le localStorage
3. Les scripts utiliseront ce token pour les appels API

**Note :** Si aucun token n'est disponible, les scripts continueront à fonctionner mais sauteront les étapes de gestion de menu automatique.

### 2. API Backend

Assurez-vous que votre API backend est :
- ✅ Démarrée et accessible
- ✅ Configurée dans `src/environments/environment.ts`
- ✅ Prête à accepter les requêtes d'authentification

```typescript
// src/environments/environment.ts
export const environment = {
  apiUrl: 'http://localhost:8000/api' // URL de votre API
};
```

## 🎮 Utilisation

### Générer un nouveau module

```bash
npm run module:generate
```

Le script vous guidera à travers les étapes suivantes :

1. **Informations de base**
   - Nom du module (pluriel, ex: "products")
   - Nom d'affichage (ex: "Products")
   - Type de ressource pour l'API
   - Chemin de la route

2. **Configuration**
   - Champ identifiant (id ou slug)
   - Authentification requise ? (oui/non)
   - Mode développement avec mock data ? (oui/non)

3. **Définition des champs**
   - Nom du champ
   - Type (string/number/boolean/Date)
   - Requis ? (oui/non)

4. **Création du menu (nouveau!)**
   - Créer le menu via l'API ? (oui/non)
   - Icône du menu (ex: "mat:dashboard")
   - Classe de couleur (ex: "bg-blue-600")
   - ID de catégorie
   - Rôles autorisés (ex: "admin,manager")

### Supprimer un module existant

```bash
npm run module:delete
```

Le script vous demandera :

1. **Sélection du module**
   - Liste des modules disponibles
   - Nom du module à supprimer

2. **Confirmation**
   - Affichage des fichiers qui seront supprimés
   - Confirmation de suppression (taper "yes")

3. **Suppression du menu (nouveau!)**
   - Supprimer le menu de la base de données ? (oui/non)
   - Recherche automatique du menu par route
   - Confirmation finale de suppression

## 🍔 Gestion automatique des menus

### Création de menu

Lors de la génération d'un module, vous pouvez créer automatiquement le menu dans la base de données :

```
🍔 Creating menu via API...
  Create menu in database via API? (y/n, default: n): y
  📝 Menu icon (default: "mat:dashboard"): mat:settings
  📝 Menu color class (default: "bg-blue-600"): bg-green-600
  📝 Category ID (default: 1): 2
  📝 Allowed roles (comma-separated, default: "admin"): admin,manager

📤 Creating menu via API...
  Name: Products
  Route: /index/products
  ✓ Menu created successfully!
  Menu ID: 42
  Menu Slug: products-xyz123
```

### Suppression de menu

Lors de la suppression d'un module, vous pouvez supprimer automatiquement le menu :

```
🗑️  Removing menu from database...
  Delete menu from database via API? (y/n, default: n): y
  🔍 Searching for menu in database...
  ✓ Found menu: "Products" (slug: products-xyz123)
  ❗ Confirm deletion of menu "Products"? (yes/no): yes
  ✅ Menu deleted successfully from database!
```

### Nettoyage des imports

Le système nettoie automatiquement les imports inutiles dans les fichiers de routes :

```
🧹 Cleaning up route imports...
  ✓ Unused imports cleaned successfully
```

**Imports nettoyés :**
- `import { PRODUCTS_CONFIG } from './pages/products/products.config';`
- `import { ProductsComponent } from './pages/products/products.component';`
- `import { productsResolver } from './pages/products/products.resolver';`

## 📝 Exemples

### Exemple 1 : Créer un module "Orders" avec menu

```bash
$ npm run module:generate

📝 Module name: orders
📝 Display name: Orders
📝 Display name (singular): Order
📝 Resource type for API: orders
📝 Route path: orders
📝 Identifier field: id
🔐 Authentication required? y
💻 Development mode? n

📋 Define model fields:
  Field 1 name: orderNumber
  Field "orderNumber" type: string
  Field "orderNumber" required? y

  Field 2 name: totalAmount
  Field "totalAmount" type: number
  Field "totalAmount" required? y

  Field 3 name: status
  Field "status" type: string
  Field "status" required? y

  Field 4 name: done

✅ Create this module? y

📁 Creating module structure...
  ✓ Created: orders.config.ts
  ✓ Created: orders.component.ts
  ...

🔗 Adding route to routing file...
  ✓ Route added to app.routes.ts

🌍 Adding translations...
  ✓ Translations added to en.json

🍔 Creating menu via API...
  Create menu in database via API? y
  📝 Menu icon: mat:shopping_cart
  📝 Menu color class: bg-orange-600
  📝 Category ID: 3
  📝 Allowed roles: admin,manager

📤 Creating menu via API...
  ✓ Menu created successfully!
  Menu ID: 15
  Menu Slug: orders-abc456

✨ Everything is ready!
✨ Route automatically added!
✨ Translations automatically added!
✨ Menu automatically created in database via API!
```

### Exemple 2 : Supprimer le module "Orders"

```bash
$ npm run module:delete

📋 Available modules:
  1. orders
  2. products
  3. users

📝 Enter module name to delete: orders

⚠️  WARNING: This will delete all files related to the "orders" module:
  - pages/orders/
  - models/order.model.ts
  - interfaces/Orders.ts
  - Routes in app.routes.ts
  - Translations in i18n files

❗ Are you sure? (type "yes"): yes

📝 Route path: orders

🗑️  Starting module deletion...
  ✓ Deleted: pages/orders/
  ✓ Deleted: models/order.model.ts
  ✓ Deleted: interfaces/Orders.ts

🔗 Removing route from routing files...
  ✓ Route removed from app.routes.ts

🧹 Cleaning up route imports...
  ✓ Unused imports cleaned successfully

🌍 Removing translations...
  ✓ Translations removed from en.json
  ✓ Translations removed from fr.json
  ✓ Translations removed from pt.json

🗑️  Removing menu from database...
  Delete menu from database via API? y
  🔍 Searching for menu in database...
  ✓ Found menu: "Orders" (slug: orders-abc456)
  ❗ Confirm deletion? (yes/no): yes
  ✅ Menu deleted successfully from database!

✅ Module deletion completed!
📊 Summary:
  ✓ Module files deleted
  ✓ Routes removed from routing files
  ✓ Unused imports cleaned from routing files
  ✓ Translations removed from i18n files
  ✓ Menu deleted from database
```

## 🔧 Dépannage

### Problème : Token d'authentification non trouvé

**Symptôme :**
```
⚠️  No auth token found. Menu will need to be created manually.
```

**Solution :**
1. Créez le fichier `.temp-auth-token` à la racine du projet
2. Ajoutez votre token JWT valide
3. Relancez le script

### Problème : API non accessible

**Symptôme :**
```
✗ Error creating menu: ECONNREFUSED
```

**Solution :**
1. Vérifiez que votre API backend est démarrée
2. Vérifiez l'URL dans `src/environments/environment.ts`
3. Vérifiez les CORS si nécessaire

### Problème : Menu non trouvé lors de la suppression

**Symptôme :**
```
⚠️  Menu not found in database
```

**Raisons possibles :**
- Le menu n'a jamais été créé via l'API
- Le menu a été supprimé manuellement
- La route ne correspond pas exactement

**Solution :**
- Vérifiez dans l'interface de gestion des menus
- Supprimez le menu manuellement si nécessaire

### Problème : Imports non nettoyés

**Symptôme :**
Les imports restent dans les fichiers de routes après suppression.

**Solution :**
1. Vérifiez que le script a bien exécuté le nettoyage
2. Nettoyez manuellement si nécessaire
3. Utilisez l'outil de formatage de code (Prettier/ESLint)

## 📚 Structure des fichiers générés

```
src/app/pages/[module-name]/
├── [module-name].config.ts          # Configuration du module
├── [module-name].component.ts       # Composant principal
├── [module-name].resolver.ts        # Resolver pour les données
├── [module-name].routes.ts          # Routes du module
├── dialogs/
│   ├── [singular]-create-update/
│   │   ├── [singular]-create-update.component.ts
│   │   ├── [singular]-create-update.component.html
│   │   └── [singular]-create-update.component.scss
│   └── delete-element/
│       ├── delete-element.component.ts
│       ├── delete-element.component.html
│       └── delete-element.component.scss

src/app/models/
└── [singular].model.ts               # Model TypeScript

src/app/interfaces/
└── [ModuleName].ts                   # Interface et Formly fields

src/assets/i18n/
├── en.json                           # Traductions anglais
├── fr.json                           # Traductions français
└── pt.json                           # Traductions portugais
```

## 🎨 Personnalisation

### Icônes disponibles

Utilisez les icônes Material Design avec le préfixe `mat:` :
- `mat:dashboard`
- `mat:shopping_cart`
- `mat:settings`
- `mat:people`
- `mat:inventory`
- etc.

### Classes de couleur disponibles

Utilisez les classes Tailwind CSS :
- `bg-blue-600`
- `bg-green-600`
- `bg-red-600`
- `bg-orange-600`
- `bg-purple-600`
- `bg-indigo-600`
- etc.

## 🤝 Contribution

Pour contribuer à l'amélioration de ces scripts :
1. Testez les modifications localement
2. Documentez les nouvelles fonctionnalités
3. Mettez à jour ce README si nécessaire

## 📞 Support

Pour toute question ou problème :
1. Consultez d'abord ce README
2. Vérifiez la section Dépannage
3. Contactez l'équipe de développement

---

**Version:** 2.0.0
**Dernière mise à jour:** 2025
**Auteur:** Équipe Resurex
