# 💻 Guide du mode développement avec Mock Data

## 🤔 Qu'est-ce que le mode développement ?

Le mode développement avec mock data permet de développer et tester votre module **sans avoir besoin d'une API backend fonctionnelle**. Les données sont simulées localement dans un fichier JSON.

## ⚠️ IMPORTANT : Différence entre données du module et menu de la sidebar

C'est ici que la confusion arrive souvent :

### 📊 Les données du module (Mock)
- ✅ Stockées localement dans `mock-data.json`
- ✅ Utilisées par le module pour afficher, créer, modifier, supprimer des éléments
- ✅ Simulation complète du CRUD sans API
- ✅ Parfait pour développer l'interface

### 🍔 Le menu de la sidebar (Base de données réelle)
- ⚠️ **TOUJOURS** récupéré depuis la base de données via l'API
- ⚠️ **PAS** affecté par le mode mock
- ⚠️ **DOIT** être créé via l'API même en mode dev

## 🔄 Workflow en mode développement

```
Mode Développement (Mock = Yes)
│
├─ Données du module
│  └─ 💾 Fichier mock-data.json (local)
│     ✅ CRUD fonctionne sans API
│     ✅ Parfait pour développer
│
└─ Menu de la sidebar
   └─ 🌐 Base de données (via API)
      ❌ Nécessite une API fonctionnelle
      ❌ Doit être créé manuellement si pas d'API
```

## 📋 Scénarios

### Scénario 1 : Développement pur (pas d'API disponible)

**Configuration :**
```
💻 Development mode with mock data? y
🍔 Create menu in database via API? n
```

**Résultat :**
- ✅ Le module fonctionne avec les données mock
- ❌ Le menu n'apparaît PAS dans la sidebar
- 💡 **Solution :** Créer le menu manuellement plus tard via l'interface de gestion des menus

**Utilisation :**
```
1. Développez votre interface
2. Testez le CRUD avec les données mock
3. Plus tard, quand l'API est prête :
   - Allez dans /index/managemenu
   - Créez le menu manuellement
   - OU changez useGenericApi: true dans la config
```

### Scénario 2 : API disponible + Mock pour les données

**Configuration :**
```
💻 Development mode with mock data? y
🍔 Create menu in database via API? y
🔑 Token configuré
```

**Résultat :**
- ✅ Le module fonctionne avec les données mock
- ✅ Le menu apparaît dans la sidebar (créé via API)
- ✅ Meilleur des deux mondes !

**Utilisation :**
```
1. Le menu s'affiche dans la sidebar
2. Cliquez dessus → Vous voyez les données mock
3. Développez tranquillement
4. Plus tard, activez l'API réelle
```

### Scénario 3 : Production (API complète)

**Configuration :**
```
💻 Development mode with mock data? n
🍔 Create menu in database via API? y
🔑 Token configuré
```

**Résultat :**
- ✅ Le module utilise l'API réelle
- ✅ Le menu est créé dans la BDD
- ✅ Tout est connecté

## 🛠️ Comment passer du mode Dev au mode Production ?

### Étape 1 : Modifier la config du module

```typescript
// src/app/pages/products/products.config.ts

export const PRODUCTS_CONFIG: ModuleConfig<Product> = {
  // ... autres configs ...

  data: {
    useFormData: false,
    optimisticUpdate: true,
    optimisticDelete: true,
    autoRefresh: false,
    useGenericApi: true  // ← Changez de false à true
  },

  // ... reste de la config ...
};
```

### Étape 2 : Modifier le composant (si en mode mock)

Si vous avez un fichier comme `products.component.ts` en mode mock :

**Avant (Mode Mock) :**
```typescript
import { Component, inject } from '@angular/core';
import { GenericModuleComponent } from 'src/app/core/auto-generator/components/generic-module.component';
import { PRODUCTS_CONFIG } from './products.config';
import { ProductMockService } from './product-mock.service';
import { Utils } from 'src/app/classes/Utils';

@Component({
  selector: 'vex-products',
  standalone: true,
  imports: [GenericModuleComponent],
  template: `<vex-generic-module [config]="config"></vex-generic-module>`
})
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

**Après (Mode Production) :**
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

### Étape 3 : Vérifier que le menu existe

Si vous n'avez pas créé le menu via l'API au début :
1. Allez sur `/index/managemenu`
2. Cliquez sur "Create Menu"
3. Remplissez les informations du menu

## 💡 Bonnes pratiques

### ✅ À FAIRE

1. **Développer en mode mock** quand l'API n'est pas prête
2. **Créer le menu via l'API** même en mode mock (si l'API fonctionne)
3. **Tester avec des données mock** avant de connecter l'API
4. **Documenter** les champs nécessaires pendant le développement

### ❌ À NE PAS FAIRE

1. **Ne pas oublier** que le menu doit être créé séparément
2. **Ne pas s'attendre** à voir le menu sans l'avoir créé via l'API
3. **Ne pas confondre** données mock et menu de la sidebar
4. **Ne pas oublier** de passer en mode production ensuite

## 🐛 Problèmes courants

### "Le module fonctionne mais le menu n'apparaît pas"

**Cause :** Le menu n'a pas été créé dans la base de données.

**Solution :**
```bash
# Option 1 : Relancer le script et créer le menu
npm run module:generate  # Répondre 'y' à la création du menu

# Option 2 : Créer le menu manuellement
# Allez sur /index/managemenu et créez-le

# Option 3 : Utiliser l'API directement (Postman/curl)
POST /api/menus
{
  "name": "Products",
  "icon": "mat:inventory",
  "color": "bg-blue-600",
  "route": "/index/products",
  "roles": ["admin"],
  "category_id": 1,
  "disable": 1
}
```

### "Le menu apparaît mais les données sont vides"

**Cause :** Vous êtes en mode production mais l'API ne retourne rien.

**Solution :**
1. Vérifiez que l'API backend est démarrée
2. Vérifiez que l'endpoint `/api/products` existe
3. Vérifiez les logs du backend
4. Ou repassez en mode mock temporairement

### "J'ai modifié les données mock mais rien ne change"

**Cause :** Le cache du navigateur ou du module.

**Solution :**
```bash
# Hard refresh
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# Ou redémarrer le serveur
npm start
```

## 📊 Tableau récapitulatif

| Mode | Données module | Menu sidebar | Besoin API | Besoin token |
|------|----------------|--------------|------------|--------------|
| **Dev pur** | Mock (local) | ❌ Inexistant | ❌ Non | ❌ Non |
| **Dev + Menu API** | Mock (local) | ✅ Via API | ✅ Oui | ✅ Oui |
| **Production** | API réelle | ✅ Via API | ✅ Oui | ✅ Oui |

## 🎯 Recommandations par situation

### Je développe l'interface (pas d'API)
```
💻 Mock data: Yes
🍔 Create menu: No
→ Développez tranquillement
→ Créez le menu plus tard
```

### Je développe avec une API partielle
```
💻 Mock data: Yes (pour les données)
🍔 Create menu: Yes (pour la sidebar)
→ Interface réactive + menu visible
```

### Je suis prêt pour la production
```
💻 Mock data: No
🍔 Create menu: Yes
→ Tout est connecté à l'API
```

## 🔗 Voir aussi

- [README.md](README.md) - Documentation complète
- [QUICK_START.md](QUICK_START.md) - Démarrage rapide
- [TOKEN_SETUP_GUIDE.md](TOKEN_SETUP_GUIDE.md) - Configuration du token

---

**Résumé :** Le mode mock concerne **uniquement les données du module**, pas le menu de la sidebar qui vient toujours de la base de données !
