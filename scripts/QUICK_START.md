# ⚡ Guide de démarrage rapide - Auto-Generator

## 🚀 Commencer en 2 minutes

### 1. Générer un nouveau module

```bash
npm run module:generate
```

**Répondez aux questions :**
- Nom du module : `products` (pluriel)
- Route : `products` (ou laissez vide pour utiliser le nom)
- Champs : définissez vos champs de données
- Menu API : `y` pour créer automatiquement le menu

**C'est tout !** Votre module est prêt à l'emploi. 🎉

### 2. Supprimer un module

```bash
npm run module:delete
```

**Suivez les instructions :**
- Sélectionnez le module à supprimer
- Confirmez avec `yes`
- Choisissez si vous voulez supprimer le menu de la BDD

**Terminé !** Tout est nettoyé automatiquement. ✨

## 🔑 Configuration du token (première utilisation)

Pour utiliser les fonctionnalités API automatiques :

### Option 1 : Script automatique (Recommandé)

```bash
npm run token:setup
```

### Option 2 : Extraction depuis Postman

```bash
npm run token:extract
```

Puis collez votre réponse JSON de login.

### Option 3 : Manuel

```bash
echo "votre-token-jwt-ici" > .temp-auth-token
```

**📚 Guide complet :** Consultez [TOKEN_SETUP_GUIDE.md](TOKEN_SETUP_GUIDE.md) pour plus de détails.

## 📦 Ce qui est créé automatiquement

✅ **Fichiers du module**
- Composant principal
- Dialogs (create/update/delete)
- Routes et guards
- Models et interfaces

✅ **Configuration**
- Routes Angular
- Traductions (en, fr, pt)
- **Menu dans la base de données**

✅ **Nettoyage automatique**
- Suppression complète des fichiers
- **Nettoyage des imports**
- **Suppression du menu de la BDD**

## 🎯 Exemples rapides

### Module basique

```bash
$ npm run module:generate
Module name: tasks
Route: tasks
Field 1: title (string, required)
Field 2: done (boolean, not required)
Field 3: done
Create menu via API? y
Icon: mat:task
Color: bg-purple-600
```

### Module avec authentification

```bash
$ npm run module:generate
Module name: orders
Authentication required? y
Field 1: orderNumber (string, required)
Field 2: totalAmount (number, required)
Field 3: done
Create menu via API? y
Roles: admin,manager
```

## 🔧 Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run module:generate` | Créer un nouveau module |
| `npm run module:delete` | Supprimer un module |
| `npm run module:list` | Lister les modules |
| `npm run module:toggle` | Activer/désactiver un module |

## ⚠️ Points importants

1. **Token requis** : Pour la gestion automatique des menus via API
2. **API démarrée** : Votre backend doit être accessible
3. **Confirmation** : Toujours confirmer avec `yes` (pas juste `y`)
4. **Noms en pluriel** : Les modules doivent avoir des noms au pluriel

## 📚 Documentation complète

Pour plus de détails, consultez [README.md](./README.md)

## 🆘 Problèmes courants

### ❌ "No auth token found"
**Solution :** Créez le fichier `.temp-auth-token` avec votre token JWT

### ❌ "ECONNREFUSED"
**Solution :** Vérifiez que votre API backend est démarrée

### ❌ "Menu not found"
**Solution :** Le menu n'existe pas en BDD, passez cette étape avec `n`

---

**Besoin d'aide ?** Consultez la documentation complète ou contactez l'équipe dev !
