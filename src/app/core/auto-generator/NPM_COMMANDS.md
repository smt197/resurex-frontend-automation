# 🚀 Commandes NPM - Auto-Generator

Guide complet des commandes NPM pour l'Auto-Generator.

---

## 📋 Liste des Commandes

| Commande | Description | Usage |
|----------|-------------|-------|
| `npm run module:generate` | Créer un nouveau module | Interactif |
| `npm run module:delete` | Supprimer un module existant | Interactif |
| `npm run module:update` | Mettre à jour un module existant | Interactif |
| `npm run module:list` | Lister tous les modules | Direct |
| `npm run module:migrate` | Migrer un module existant | `npm run module:migrate <module-name>` |
| `npm run module:validate` | Valider tous les modules | Direct |

---

## 🎯 Commande 1 : Générer un Nouveau Module

### Usage

```bash
npm run module:generate
```

### Ou directement

**Windows:**
```cmd
scripts\generate-module.bat
```

**Linux/Mac:**
```bash
./scripts/generate-module.sh
```

### Processus Interactif

La commande vous pose des questions:

1. **Nom du module** (pluriel, ex: "products")
2. **Nom d'affichage** (pluriel, ex: "Products")
3. **Nom d'affichage** (singulier, ex: "Product")
4. **Type de ressource API** (ex: "products")
5. **Chemin de route** (ex: "products")
6. **Champ identifiant** (id ou slug)
7. **Authentification requise** (y/n)
8. **💻 Mode développement** (y/n) - **NOUVEAU !**
9. **Champs du modèle** (nom, type, obligatoire)

### Exemple Complet

```bash
$ npm run module:generate

╔════════════════════════════════════════════╗
║   🚀 AUTO-GENERATOR - MODULE CREATOR    ║
╚════════════════════════════════════════════╝

📝 Module name (plural, e.g., "products"): products
📝 Display name (plural, default: "Products"): Products
📝 Display name (singular, default: "Product"): Product
📝 Resource type for API (default: "products"): products
📝 Route path (default: "products"): products
📝 Identifier field (id or slug, default: "id"): id

📋 Define model fields (type "done" when finished):
  Field 1 name (or "done"): name
  Field "name" type (string/number/boolean/Date): string
  Field "name" required? (y/n): y

  Field 2 name (or "done"): price
  Field "price" type (string/number/boolean/Date): number
  Field "price" required? (y/n): y

  Field 3 name (or "done"): done

📊 Summary:
  Module: products
  Display: Products / Product
  Resource: products
  Route: /products
  Identifier: id (number)
  Fields: name (string, required), price (number, required)

✅ Create this module? (y/n): y

📁 Creating module structure...
  ✓ Created: src/app/pages/products
  ✓ Created: products.config.ts
  ✓ Created: products.component.ts
  ✓ Created: products.resolver.ts
  ✓ Created: products.routes.ts
  ✓ Created: models/product.model.ts
  ✓ Created: interfaces/Products.ts

✅ Module structure created successfully!

📌 Next steps:
  1. Add dialogs components (create-update, delete)
  2. Register module in app.routes.ts:
     import { PRODUCTS_CONFIG } from './pages/products/products.config';
     moduleRegistry.register(PRODUCTS_CONFIG);
  3. Run: npm start
  4. Navigate to: /index/products
```

### Fichiers Créés

```
src/app/pages/products/
├── products.config.ts          ← Configuration complète
├── products.component.ts       ← Composant (3 lignes)
├── products.resolver.ts        ← Resolver (1 ligne)
├── products.routes.ts          ← Routes (1 ligne)
└── dialogs/                    ← ✨ Créés automatiquement !
    ├── product-create-update/
    │   ├── product-create-update.component.ts
    │   ├── product-create-update.component.html
    │   └── product-create-update.component.scss
    └── delete-element/
        ├── delete-element.component.ts
        ├── delete-element.component.html
        └── delete-element.component.scss

src/app/models/
└── product.model.ts            ← Modèle TypeScript

src/app/interfaces/
└── Products.ts                 ← Interface + FormlyFields

TOTAL: 13 fichiers créés automatiquement ! 🚀
```

### 💻 Mode Développement (Mock Data)

Le mode développement vous permet de travailler avec des données fictives locales **sans avoir besoin d'une API backend**.

#### Quand utiliser le mode développement ?

- ✅ Développement frontend sans API prête
- ✅ Tests et prototypage rapides
- ✅ Développement hors ligne
- ✅ Présentation/démo sans dépendance serveur

#### Fichiers supplémentaires créés en mode dev

```
src/app/pages/products/
├── product-mock.service.ts     ← Service mock avec données JSON
├── mock-data.json              ← Données fictives (10 items par défaut)
├── products.config.ts          ← Config avec useGenericApi: false
└── products.component.ts       ← Inject et utilise le mock service
```

#### Comment ça fonctionne ?

**1. Le mock service simule une API :**
```typescript
// product-mock.service.ts
@Injectable({ providedIn: 'root' })
export class ProductMockService {
  private data: Product[] = mockData as Product[];

  getAll(): Observable<Product[]> {
    return of([...this.data]).pipe(delay(500)); // Simule délai réseau
  }

  create(item: Partial<Product>): Observable<Product> {
    const newItem = { ...item, id: this.nextId++ } as Product;
    this.data.push(newItem);
    return of(newItem).pipe(delay(500));
  }

  // ... update, delete, etc.
}
```

**2. Les données JSON sont modifiables :**
```json
// mock-data.json
[
  {
    "id": 1,
    "name": "Name 1",
    "price": 543
  },
  {
    "id": 2,
    "name": "Name 2",
    "price": 789
  }
]
```

**3. Le composant injecte le service mock :**
```typescript
// products.component.ts
export class ProductsComponent {
  private mockService = inject(ProductMockService);

  config = {
    ...PRODUCTS_CONFIG,
    data: {
      ...PRODUCTS_CONFIG.data,
      customService: Utils.createDataServiceFromMock(this.mockService)
    }
  };
}
```

#### Passer en mode production

Pour passer d'un module en mode dev vers production :

**Option 1 : Modifier la configuration**
```typescript
// products.config.ts
export const PRODUCTS_CONFIG: ModuleConfig<Product> = {
  // ...
  data: {
    useFormData: false,
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: false,
    useGenericApi: true, // ✅ Mettre à true
    // customService sera ignoré
  },
  // ...
};
```

**Option 2 : Utiliser le template normal**
```typescript
// products.component.ts
@Component({
  selector: 'vex-products',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
export class ProductsComponent {
  config = PRODUCTS_CONFIG; // Sans injection mock
}
```

#### Avantages du mode dev

| Avantage | Description |
|----------|-------------|
| **🚀 Rapidité** | Pas besoin d'attendre le backend |
| **🎨 Prototypage** | Testez l'UI immédiatement |
| **✈️ Hors ligne** | Travaillez sans connexion |
| **🧪 Tests** | Données prévisibles pour tests |
| **📝 Personnalisable** | Modifiez mock-data.json à volonté |

#### Notes importantes

- ⚠️ Les données sont **en mémoire** : elles disparaissent au rechargement
- 📝 Les messages de console indiquent le mode dev : `🔧 [DEV MODE] Using mock data`
- 🔄 Le service simule un délai réseau (500ms) pour être réaliste
- 💾 Parfait pour démonstrations et présentations

---

## 🎯 Commande 2 : Supprimer un Module

### Usage

```bash
npm run module:delete
```

### Processus Interactif

La commande vous guide à travers le processus de suppression:

1. **Affiche la liste des modules disponibles**
2. **Demande le nom du module à supprimer**
3. **Affiche un avertissement avec tous les fichiers qui seront supprimés**
4. **Demande confirmation (vous devez taper "yes")**
5. **Demande le chemin de route pour suppression**
6. **Supprime tous les fichiers et références**

### Exemple Complet

```bash
$ npm run module:delete

╔════════════════════════════════════════════╗
║   🗑️  AUTO-GENERATOR - MODULE DELETER    ║
╚════════════════════════════════════════════╝

📋 Available modules:
  1. products
  2. roles
  3. users

📝 Enter module name to delete: products

⚠️  WARNING: This will delete all files related to the "products" module:
  - pages/products/
  - models/product.model.ts
  - interfaces/Products.ts
  - Routes in app.routes.ts or auth-routes.ts
  - Translations in i18n files

❗ Are you sure you want to delete this module? (type "yes" to confirm): yes

📝 Route path for this module (default: "products"): products

🗑️  Starting module deletion...
  ✓ Deleted: pages/products/
  ✓ Deleted: models/product.model.ts
  ✓ Deleted: interfaces/Products.ts

🔗 Removing route from routing files...
  ✓ Route removed from app.routes.ts

🌍 Removing translations from i18n files...
  ✓ Translations removed from en.json
  ✓ Translations removed from fr.json
  ✓ Translations removed from pt.json

✅ Module deletion completed!

📊 Summary:
  ✓ Module files deleted
  ✓ Routes removed from routing files
  ✓ Translations removed from i18n files

📌 Next steps:
  1. Restart your development server if running
  2. Check for any remaining references to the deleted module
```

### Ce qui est supprimé

#### Fichiers
```
src/app/pages/products/           ← Tout le dossier avec dialogs
src/app/models/product.model.ts   ← Le modèle
src/app/interfaces/Products.ts    ← L'interface
```

#### Routes
- Suppression automatique de la route dans `app.routes.ts` (si authentifiée)
- Suppression automatique de la route dans `auth-routes.ts` (si publique)

#### Traductions
Suppression des entrées dans les 3 fichiers i18n:
- `en.json` : `menu.products` et `global.types.products`
- `fr.json` : `menu.products` et `global.types.products`
- `pt.json` : `menu.products` et `global.types.products`

### ⚠️ Important

1. **Confirmation requise** : Vous devez taper "yes" (pas "y" ou "Y")
2. **Pas de retour en arrière** : La suppression est définitive
3. **Redémarrage nécessaire** : Si votre serveur de développement tourne, redémarrez-le
4. **Vérification manuelle** : Vérifiez qu'il ne reste pas de références au module supprimé

---

## 🎯 Commande 3 : Mettre à Jour un Module

### Usage

```bash
npm run module:update
```

### Processus Interactif

La commande vous guide à travers le processus de mise à jour:

1. **Affiche la liste des modules auto-générés disponibles**
2. **Demande le nom du module à mettre à jour**
3. **Charge la configuration actuelle du module**
4. **Permet de modifier le nom du module (sans accents)**
5. **Permet d'ajouter/supprimer/modifier les champs (sans accents)**
6. **Permet de mettre à jour les traductions (en, fr, pt)**

### Exemple Complet

```bash
$ npm run module:update

╔════════════════════════════════════════════╗
║   🔄 AUTO-GENERATOR - MODULE UPDATER    ║
╚════════════════════════════════════════════╝

📋 Available modules:
  1. products
  2. roles

📝 Enter module name to update: products

✓ Module "products" loaded
  Display name: Products
  Display name (singular): Product
  Fields: 3

Update module name? (y/n): n

Update fields? (y/n): y

📝 Update fields
Current fields:
  1. name (string) - required
  2. price (number) - required
  3. description (string) - optional

Options:
  1. Add a field
  2. Remove a field
  3. Modify a field
  4. Done

Choose an option (1-4): 1

Field name (no accents, lowercase): stock
Field type (string/number/boolean/Date): number
Required? (y/n): y
✓ Field "stock" added

Choose an option (1-4): 4

🌍 Update translations
Update translations? (y/n): y

Updating en.json...
Translation for menu "Products" (en, press Enter to keep current):
Translation for type "Product" (en, press Enter to keep current):

  Field: name
  Label (en, press Enter to use default "Name"): Product Name
  Placeholder (en, press Enter to use default "Enter name"): Enter product name
  Validation message (en, press Enter to use default "Name is required"):

  Field: price
  Label (en, press Enter to use default "Price"):
  Placeholder (en, press Enter to use default "Enter price"):
  Validation message (en, press Enter to use default "Price is required"):

  Field: description
  Label (en, press Enter to use default "Description"):
  Placeholder (en, press Enter to use default "Enter description"):

  Field: stock
  Label (en, press Enter to use default "Stock"): Stock Quantity
  Placeholder (en, press Enter to use default "Enter stock"): Enter stock quantity
  Validation message (en, press Enter to use default "Stock is required"): Stock quantity is required

✓ en.json updated

[... répète pour fr.json et pt.json ...]

✅ Module update completed!

📌 Note: You need to regenerate the module for changes to take effect
   Run: npm run module:delete (to delete old module)
   Then: npm run module:generate (to create with new configuration)
```

### Fonctionnalités

#### 1. Mise à jour du nom du module

- ✅ Validation : pas d'accents autorisés
- ✅ Validation : doit être au pluriel (se terminer par 's')
- ✅ Validation : doit être en minuscules
- ⚠️ Nécessite de régénérer le module après modification

**Exemples valides :**
- `products` ✅
- `orders` ✅
- `categories` ✅

**Exemples invalides :**
- `produits` ❌ (accents)
- `Product` ❌ (majuscule)
- `product` ❌ (singulier)

#### 2. Gestion des champs

##### Ajouter un champ
```bash
Options:
  1. Add a field

Field name (no accents, lowercase): category
Field type (string/number/boolean/Date): string
Required? (y/n): n
✓ Field "category" added
```

##### Supprimer un champ
```bash
Options:
  2. Remove a field

Field number to remove: 3
✓ Field "description" removed
```

##### Modifier un champ
```bash
Options:
  3. Modify a field

Field number to modify: 2

Modifying: price (number) - required

New name (press Enter to keep "price"): unitPrice
New type (press Enter to keep "number"):
Required? (y/n, press Enter to keep current): y
✓ Field "unitPrice" updated
```

**Validations sur les champs :**
- ❌ Pas d'accents dans le nom
- ✅ Nom doit commencer par une minuscule
- ✅ Types autorisés: `string`, `number`, `boolean`, `Date`
- ✅ Champs peuvent être required ou optional

#### 3. Mise à jour des traductions

Pour chaque langue (en, fr, pt), vous pouvez mettre à jour:

##### Menu et Type
```bash
Translation for menu "Products" (en, press Enter to keep current): Products
Translation for type "Product" (en, press Enter to keep current): Product
```

##### Champs (Label, Placeholder, Validation)
```bash
  Field: name
  Label (en, press Enter to use default "Name"): Product Name
  Placeholder (en, press Enter to use default "Enter name"): Enter product name
  Validation message (en, press Enter to use default "Name is required"): Product name is required
```

**Structure des traductions créées :**
```json
{
  "menu": {
    "products": "Products"
  },
  "global": {
    "types": {
      "products": "Product"
    }
  },
  "product": {
    "label": {
      "name": "Product Name",
      "price": "Price",
      "description": "Description"
    },
    "placeholder": {
      "name": "Enter product name",
      "price": "Enter price",
      "description": "Enter description"
    },
    "validation": {
      "name_required": "Product name is required",
      "price_required": "Price is required"
    }
  }
}
```

### Workflow de Mise à Jour

```bash
# 1. Mettre à jour la configuration
npm run module:update

# 2. Supprimer l'ancien module
npm run module:delete

# 3. Régénérer le module avec la nouvelle configuration
npm run module:generate

# 4. Vérifier que tout fonctionne
npm start
```

### ⚠️ Important

1. **Pas d'accents** : Ni dans les noms de modules, ni dans les noms de champs
2. **Traductions manuelles** : Les traductions sont mises à jour dans les fichiers JSON uniquement
3. **Régénération requise** : Les modifications ne sont pas appliquées automatiquement aux fichiers TypeScript
4. **Backup recommandé** : Faites une sauvegarde avant de supprimer l'ancien module

### Cas d'Usage

#### Ajouter un nouveau champ à un module existant
```bash
npm run module:update
# Sélectionner le module
# Update fields? (y/n): y
# Ajouter le nouveau champ
# Mettre à jour les traductions
```

#### Renommer un champ
```bash
npm run module:update
# Sélectionner le module
# Update fields? (y/n): y
# Option 3: Modify a field
# Modifier le nom du champ
```

#### Modifier les traductions seulement
```bash
npm run module:update
# Sélectionner le module
# Update module name? (y/n): n
# Update fields? (y/n): n
# Update translations? (y/n): y
```

---

## 🎯 Commande 4 : Lister les Modules

### Usage

```bash
npm run module:list
```

### Ou directement

**Windows:**
```cmd
scripts\list-modules.bat
```

**Linux/Mac:**
```bash
./scripts/list-modules.sh
```

### Sortie

```bash
╔════════════════════════════════════════════╗
║     📦 MODULE REGISTRY - STATUS       ║
╚════════════════════════════════════════════╝

📊 Total modules: 3
   ✅ Auto-generated: 2
   ⚠️  Legacy: 1

✨ AUTO-GENERATED MODULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. roles
   Status: ✓ Component | ✓ Resolver | ✓ Routes | ✓ Dialogs
   Path: src/app/pages/roles/

2. products
   Status: ✓ Component | ✓ Resolver | ✓ Routes | ✓ Dialogs
   Path: src/app/pages/products/

⚠️  LEGACY MODULES (need migration):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. users
   Path: src/app/pages/users/
   💡 Run: npm run module:migrate users

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Commands:
   npm run module:generate     - Create a new module
   npm run module:delete       - Delete an existing module
   npm run module:migrate      - Migrate existing module
   npm run module:validate     - Validate all modules
```

---

## 🎯 Commande 4 : Migrer un Module Existant

### Usage

```bash
npm run module:migrate <module-name>
```

### Ou directement

**Windows:**
```cmd
scripts\migrate-module.bat users
```

**Linux/Mac:**
```bash
./scripts/migrate-module.sh users
```

### Exemple

```bash
$ npm run module:migrate users

╔════════════════════════════════════════════╗
║  🔄 AUTO-GENERATOR - MODULE MIGRATION  ║
╚════════════════════════════════════════════╝

🔍 Analyzing existing module...

📋 Current structure:
  ✓ hasComponent
  ✓ hasResolver
  ✓ hasRoutes
  ✓ hasService
  ✓ hasModel
  ✓ hasInterface
  ✓ hasDialogs

📦 Starting migration...

💾 Backing up existing files...
  ✓ Backed up: users.component.ts → users.component.old.ts
  ✓ Backed up: users.resolver.ts → users.resolver.old.ts
  ✓ Backed up: users.routes.ts → users.routes.old.ts

📝 Creating configuration file...
  ✓ Created: users.config.ts

🔨 Creating new component...
  ✓ Created: users.component.ts

🔨 Creating new resolver...
  ✓ Created: users.resolver.ts

🔨 Creating new routes...
  ✓ Created: users.routes.ts

✅ Migration completed!

📌 Next steps:
  1. Open and review the generated config file:
     src/app/pages/users/users.config.ts
  2. Adjust the TODO comments in the config
  3. Uncomment and fix the dialog imports
  4. Register the module in app.routes.ts:
     import { USERS_CONFIG } from './pages/users/users.config';
     moduleRegistry.register(USERS_CONFIG);
  5. Test the module: npm start
  6. If everything works, delete the .old.ts files

⚠️  Old files are backed up as .old.ts
   You can compare them to see what changed.
```

### Fichiers Générés

```
src/app/pages/users/
├── users.config.ts             ← ✨ NOUVEAU: Configuration
├── users.component.ts          ← ✨ REMPLACÉ: Nouvelle version
├── users.component.old.ts      ← 💾 BACKUP: Ancienne version
├── users.resolver.ts           ← ✨ REMPLACÉ: Nouvelle version
├── users.resolver.old.ts       ← 💾 BACKUP: Ancienne version
├── users.routes.ts             ← ✨ REMPLACÉ: Nouvelle version
└── users.routes.old.ts         ← 💾 BACKUP: Ancienne version
```

---

## 🎯 Commande 5 : Valider les Modules

### Usage

```bash
npm run module:validate
```

### Sortie

```bash
🔍 ===== MODULE VALIDATION REPORT =====

📦 Total modules registered: 3

✅ VALID MODULES:

1. roles
   Route: /role
   Resource: roles
   Identifier: id (number)
   Actions: edit, delete, deleteAll, search
   Permissions: ADMIN

2. products
   Route: /products
   Resource: products
   Identifier: id (number)
   Actions: create, edit, delete, deleteAll, search
   Permissions: ADMIN

3. users
   Route: /user
   Resource: users
   Identifier: slug (string)
   Actions: create, edit, delete, deleteAll, show, search, block, unblock
   Permissions: ADMIN, MANAGER

===== SUMMARY =====
✅ Valid: 3
❌ Invalid: 0
📊 Total: 3

🎉 All modules are valid!

🔍 ===== CHECKING MODULE CONFLICTS =====

✅ No conflicts found!

🔍 ===== VALIDATING DIALOGS =====

✅ All dialogs are properly configured!

🏁 ===== VALIDATION COMPLETE =====
```

---

## 📚 Workflow Complet

### 1️⃣ Créer un nouveau module

```bash
# Générer le module
npm run module:generate

# Vérifier qu'il apparaît dans la liste
npm run module:list

# Enregistrer dans app.routes.ts
# (suivre les instructions affichées)

# Démarrer le serveur
npm start
```

### 2️⃣ Supprimer un module

```bash
# Lister les modules disponibles
npm run module:list

# Supprimer un module (interactif avec confirmation)
npm run module:delete

# Vérifier qu'il a été supprimé
npm run module:list

# Redémarrer le serveur si nécessaire
npm start
```

### 3️⃣ Migrer un module existant

```bash
# Lister pour voir les modules legacy
npm run module:list

# Migrer un module
npm run module:migrate users

# Vérifier la configuration générée
# Ajuster les TODO dans users.config.ts

# Valider
npm run module:validate

# Tester
npm start
```

### 4️⃣ Maintenance continue

```bash
# Valider régulièrement
npm run module:validate

# Lister l'état des modules
npm run module:list
```

---

## 🛠️ Scripts Bash/Batch Directs

### Windows

```cmd
REM Créer un module
scripts\generate-module.bat

REM Lister les modules
scripts\list-modules.bat

REM Migrer un module
scripts\migrate-module.bat users
```

### Linux/Mac

```bash
# Créer un module
./scripts/generate-module.sh

# Lister les modules
./scripts/list-modules.sh

# Migrer un module
./scripts/migrate-module.sh users
```

---

## 🔧 Troubleshooting

### Erreur : "Module not found"

**Cause :** Le module n'existe pas dans `src/app/pages/`

**Solution :**
```bash
# Vérifier l'orthographe
npm run module:list

# Créer le module s'il n'existe pas
npm run module:generate
```

### Erreur : "Cannot read property of undefined"

**Cause :** Configuration incomplète

**Solution :**
```bash
# Valider la configuration
npm run module:validate

# Vérifier le fichier .config.ts
# Compléter les champs manquants
```

### Erreur : "ENOENT: no such file or directory"

**Cause :** Le dossier `scripts/` n'existe pas ou les scripts ne sont pas exécutables

**Solution :**
```bash
# Créer le dossier
mkdir scripts

# Rendre les scripts exécutables (Linux/Mac)
chmod +x scripts/*.sh
```

---

## 💡 Bonnes Pratiques

1. **Toujours lister** avant de créer ou migrer
   ```bash
   npm run module:list
   ```

2. **Valider après chaque modification**
   ```bash
   npm run module:validate
   ```

3. **Garder les backups** jusqu'à ce que tout fonctionne
   - Les fichiers `.old.ts` sont là pour comparer

4. **Tester immédiatement** après migration
   ```bash
   npm start
   ```

5. **Documenter les customisations** dans le fichier `.config.ts`

---

## 📞 Support

Pour toute question :
- Consultez le [README.md](README.md)
- Consultez le [QUICK_START.md](QUICK_START.md)
- Lancez `npm run module:list` pour voir l'état actuel

---

**Fait avec ❤️ pour simplifier le développement !**
