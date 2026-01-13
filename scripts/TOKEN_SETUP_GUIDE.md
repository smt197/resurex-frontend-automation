# 🔑 Guide de configuration du Token d'authentification

Ce guide vous aide à configurer le token d'authentification nécessaire pour les fonctionnalités de gestion automatique des menus via l'API.

## 📋 Table des matières

- [Pourquoi un token ?](#pourquoi-un-token-)
- [Méthode 1 : Script automatique](#méthode-1--script-automatique-recommandé)
- [Méthode 2 : Extraction depuis Postman](#méthode-2--extraction-depuis-postman)
- [Méthode 3 : Extraction depuis le navigateur](#méthode-3--extraction-depuis-le-navigateur)
- [Méthode 4 : Manuel](#méthode-4--manuel)
- [Vérification](#vérification)
- [Dépannage](#dépannage)

## ❓ Pourquoi un token ?

Les scripts de génération et suppression de modules peuvent créer/supprimer automatiquement les menus dans la base de données via l'API. Pour cela, ils ont besoin d'un token d'authentification valide.

**Sans token :** Les modules seront créés mais les menus devront être ajoutés manuellement.
**Avec token :** Tout est automatique ! 🚀

## 🎯 Méthode 1 : Script automatique (Recommandé)

La méthode la plus simple est d'utiliser le script interactif :

```bash
npm run token:setup
```

Le script vous guidera étape par étape pour :
1. Récupérer votre token
2. Le sauvegarder correctement
3. Configurer le .gitignore

### Étapes détaillées :

1. **Ouvrez votre application** dans un navigateur
2. **Connectez-vous** avec vos identifiants
3. **Ouvrez les DevTools** (F12)
4. **Allez dans l'onglet "Application"** ou "Storage"
5. **Cherchez dans "Cookies"** :
   - Cherchez un cookie nommé `token`, `auth_token`, `access_token`, etc.
   - Copiez sa valeur

6. **Lancez le script** et collez le token quand demandé

## 📮 Méthode 2 : Extraction depuis Postman

Si vous utilisez Postman pour tester l'API :

```bash
npm run token:extract
```

### Étapes :

1. **Dans Postman**, faites une requête de login :
   ```
   POST http://localhost:8000/api/login
   Content-Type: application/json

   {
     "email": "admin@example.com",
     "password": "your-password"
   }
   ```

2. **Copiez toute la réponse JSON**

3. **Lancez le script** et collez la réponse

Le script extraira automatiquement le token, même s'il est imbriqué dans l'objet JSON !

### Formats supportés :

```json
// Format 1
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

// Format 2
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}

// Format 3
{
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}

// Format 4
{
  "user": {...},
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

## 🌐 Méthode 3 : Extraction depuis le navigateur

### Option A : Via les Cookies

1. **Ouvrez votre application** et connectez-vous
2. **Ouvrez la Console** (F12 → Console)
3. **Tapez** :
   ```javascript
   document.cookie
   ```
4. **Cherchez le token** dans la liste des cookies
5. **Copiez la valeur**

### Option B : Via le localStorage (si applicable)

1. **Console** (F12 → Console)
2. **Tapez** :
   ```javascript
   localStorage.getItem('token')
   // ou
   localStorage.getItem('access_token')
   // ou
   localStorage
   ```
3. **Copiez la valeur du token**

### Option C : Via Network Inspector

1. **Ouvrez DevTools** → Onglet **Network**
2. **Faites une requête de login** dans l'application
3. **Cliquez sur la requête** `/login` dans la liste
4. **Allez dans l'onglet "Response"**
5. **Cherchez le token** dans la réponse JSON
6. **Copiez-le**

## ✏️ Méthode 4 : Manuel

Si vous avez déjà le token, créez simplement le fichier :

```bash
# Windows (PowerShell)
echo "votre-token-ici" | Out-File -FilePath .temp-auth-token -NoNewline

# Linux/Mac
echo "votre-token-ici" > .temp-auth-token
```

Puis ajoutez au `.gitignore` :

```bash
echo ".temp-auth-token" >> .gitignore
```

## ✅ Vérification

Pour vérifier que le token est bien configuré :

```bash
# Windows
type .temp-auth-token

# Linux/Mac
cat .temp-auth-token
```

Vous devriez voir votre token (généralement commence par `eyJ...` pour un JWT).

**Testez-le** en générant un module :

```bash
npm run module:generate
```

Si tout est bon, vous verrez :
```
� Creating menu via API...
  � Menu created successfully!
  Menu ID: 42
```

Au lieu de :
```
  ⚠️  No auth token found
```

## 🔧 Dépannage

### Problème : "No auth token found"

**Causes possibles :**
- Le fichier `.temp-auth-token` n'existe pas
- Le fichier est vide
- Le fichier contient des espaces ou des retours à la ligne

**Solutions :**
```bash
# Vérifier l'existence du fichier
dir .temp-auth-token   # Windows
ls -la .temp-auth-token  # Linux/Mac

# Vérifier le contenu
type .temp-auth-token   # Windows
cat .temp-auth-token    # Linux/Mac

# Recréer le fichier
npm run token:setup
```

### Problème : "Unauthorized" ou "401 Error"

**Causes possibles :**
- Le token a expiré
- Le token est invalide
- L'API n'accepte pas le token

**Solutions :**
1. **Reconnectez-vous** à l'application
2. **Récupérez un nouveau token**
3. **Relancez** `npm run token:setup`

### Problème : "Cannot connect to API"

**Causes possibles :**
- L'API n'est pas démarrée
- L'URL de l'API est incorrecte

**Solutions :**
1. **Vérifiez** que votre API backend est démarrée
2. **Vérifiez** l'URL dans `src/environments/environment.ts`
3. **Testez** l'API avec Postman ou curl

### Problème : Le token contient des caractères bizarres

**Cause :**
- Problème d'encodage lors de la copie

**Solution :**
- Utilisez `npm run token:extract` avec Postman
- Copiez directement depuis la réponse JSON

## 🔒 Sécurité

### ⚠️ Important :

1. **Ne commitez JAMAIS le fichier `.temp-auth-token`**
   - Il contient un token d'authentification valide
   - Il doit être dans `.gitignore`

2. **Supprimez le token** quand vous n'en avez plus besoin :
   ```bash
   # Windows
   del .temp-auth-token

   # Linux/Mac
   rm .temp-auth-token
   ```

3. **Le token expire** généralement après un certain temps
   - Récupérez un nouveau token si nécessaire

4. **Utilisez un token de développement**
   - Ne pas utiliser un token de production
   - Créer un compte de test si nécessaire

## 💡 Astuces

### Token permanent pour développement

Pour éviter de reconfigurer le token à chaque fois, créez un utilisateur de test dédié :

1. Créez un compte `dev@example.com`
2. Récupérez son token
3. Sauvegardez-le dans `.temp-auth-token`
4. Utilisez ce token pour tous vos tests

### Automatisation avec curl

Créez un alias dans votre shell :

```bash
# Linux/Mac (.bashrc ou .zshrc)
alias get-token='curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"admin@example.com\",\"password\":\"password\"}" | \
  jq -r ".token" > .temp-auth-token'

# Ensuite, utilisez simplement :
get-token
```

### Extension navigateur

Vous pouvez créer un bookmarklet pour extraire automatiquement le token :

```javascript
javascript:(function(){
  const token = localStorage.getItem('token') ||
                localStorage.getItem('access_token') ||
                document.cookie.match(/token=([^;]+)/)?.[1];
  if(token) {
    prompt('Copiez le token:', token);
  } else {
    alert('Token non trouvé!');
  }
})();
```

## 📚 Voir aussi

- [README.md](README.md) - Documentation complète
- [QUICK_START.md](QUICK_START.md) - Guide de démarrage rapide
- [generate-module.js](generate-module.js) - Script de génération
- [delete-module.js](delete-module.js) - Script de suppression

---

**Besoin d'aide ?** Si aucune de ces méthodes ne fonctionne, contactez l'équipe de développement.
