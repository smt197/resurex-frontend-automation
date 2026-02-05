# Dokploy Deployment Integration

Ce document décrit l'intégration complète du déploiement automatique avec Dokploy pour les modules générés dynamiquement.

## Architecture du flux

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          FLUX DE DÉPLOIEMENT                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Frontend: Création module                                               │
│        ↓                                                                    │
│  2. Backend: Génère fichiers + Crée branche "module/xxx" sur GitHub         │
│        ↓ (clone tout le projet main + nouveaux fichiers du module)          │
│  3. GitHub Actions: Détecte push sur branche "module/*"                     │
│        ↓                                                                    │
│  4. GitHub Actions: Build Docker + Push GHCR                                │
│        ↓                                                                    │
│  5. GitHub Actions: Webhook Dokploy (redéploie l'app)                       │
│        ↓                                                                    │
│  6. GitHub Actions: Webhook Backend Laravel (status: running → done)        │
│        ↓                                                                    │
│  7. Backend: Broadcast WebSocket (Pusher/Soketi)                            │
│        ↓                                                                    │
│  8. Frontend: Dialog affiche "Déploiement réussi! 🎉"                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Fichiers créés/modifiés

### Frontend (resurex-frontend-automation)

| Fichier | Type | Description |
|---------|------|-------------|
| `src/app/services/websocket.service.ts` | Modifié | Ajout `DeploymentStatus` interface et listeners |
| `src/app/services/deployment.service.ts` | **NOUVEAU** | Service de tracking des déploiements |
| `src/app/pages/module-managers/dialogs/deployment-status/deployment-status.component.ts` | **NOUVEAU** | Dialog affichant le statut en temps réel |
| `src/app/pages/module-managers/pages/module-managers/module-manager-create-update-page.component.ts` | Modifié | Intégration du dialog après création |
| `src/app/pages/module-managers/services/module-generator.service.ts` | Modifié | Interface `GenerateModuleResponse` |
| `.github/workflows/ci.yaml` | Modifié | Support branches `module/*` + notifications |

### Backend (ressurex-backend-automation)

| Fichier | Type | Description |
|---------|------|-------------|
| `app/Models/Deployment.php` | **NOUVEAU** | Model pour tracker les déploiements |
| `app/Events/DeploymentStatusUpdated.php` | **NOUVEAU** | Event WebSocket broadcast |
| `app/Http/Controllers/DokployWebhookController.php` | **NOUVEAU** | Réception webhooks GitHub Actions |
| `app/Http/Controllers/ModuleManagerController.php` | Modifié | Création Deployment après push Git |
| `database/migrations/2024_01_15_000001_create_deployments_table.php` | **NOUVEAU** | Table deployments |
| `routes/api.php` | Modifié | Routes webhook et API |
| `config/services.php` | Modifié | Config Dokploy |
| `.github/workflows/ci.yaml` | Modifié | Support branches `module/*` + notifications |

---

## Instructions d'installation

### 1. Backend - Exécuter la migration

```bash
cd ressurex-backend-automation
php artisan migrate
```

### 2. Backend - Variables .env

```env
# Dokploy Configuration
DOKPLOY_WEBHOOK_SECRET=votre-secret-genere-avec-openssl
```

Générer un secret sécurisé :
```bash
openssl rand -hex 32
```

### 3. GitHub - Configurer les Secrets

Dans **Settings → Secrets and variables → Actions** de chaque repo :

| Secret | Valeur | Requis |
|--------|--------|--------|
| `BACKEND_DEPLOYMENT_WEBHOOK_URL` | `http://server.192.168.1.10.sslip.io/api/webhooks/dokploy/deployment` | ✅ Oui |
| `DOKPLOY_WEBHOOK_SECRET` | Le même secret que dans `.env` backend | ✅ Oui |
| `DOKPLOY_WEBHOOK_URL` | Webhook Dokploy pour backend (main) | Déjà configuré |
| `DOKPLOY_WEBHOOK_URL_MODULE` | Webhook Dokploy pour backend (modules) | Optionnel |
| `DOKPLOY_WEBHOOK_URL_FRONTEND` | Webhook Dokploy pour frontend (main) | Déjà configuré |
| `DOKPLOY_WEBHOOK_URL_FRONTEND_MODULE` | Webhook Dokploy pour frontend (modules) | Optionnel |

### 4. Dokploy - Configuration (Optionnel)

Si vous voulez des webhooks séparés pour les branches de modules, créez une nouvelle application dans Dokploy et récupérez son webhook URL.

---

## GitHub Actions - Fonctionnement

### Branches supportées

```yaml
on:
  push:
    branches:
      - main           # Déploiement production
      - "module/*"     # Déploiement modules
```

### Tags Docker générés

| Branche | Tags Docker |
|---------|-------------|
| `main` | `latest`, `sha-xxx`, `main` |
| `module/products` | `sha-xxx`, `module-products` |

### Payload envoyé au backend

```json
{
  "deploymentId": "gh-123456789",
  "applicationId": "backend",
  "status": "running|done|error",
  "branch": "module/products",
  "commit": "abc123def456",
  "message": "Module 'products' deployed successfully! 🎉",
  "moduleName": "products",
  "isModuleBranch": true,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## Routes API

### Webhook (sans authentification)

```
POST /api/webhooks/dokploy/deployment
```

Reçoit les notifications de GitHub Actions avec signature HMAC-SHA256.

### API déploiements (avec authentification)

```
GET /api/admin/deployments/active          # Liste les déploiements actifs
GET /api/admin/deployments/{slug}/status   # Statut d'un déploiement spécifique
```

---

## Événement WebSocket

L'événement `deployment.status-updated` est envoyé sur le canal privé de l'utilisateur :

- **Channel**: `private-App.Models.User.{userId}`
- **Event**: `.deployment.status-updated`

### Payload

```json
{
  "deployment_id": "123",
  "module_slug": "products",
  "branch_name": "module/products",
  "status": "success",
  "message": "Module 'products' deployed successfully! 🎉",
  "progress": 100,
  "started_at": "2024-01-15T10:00:00Z",
  "finished_at": "2024-01-15T10:05:00Z",
  "logs": ["Building...", "Deploying...", "Done!"]
}
```

### Status possibles

| Status | Description |
|--------|-------------|
| `pending` | En attente de démarrage |
| `building` | Build Docker en cours |
| `deploying` | Déploiement sur Dokploy |
| `success` | Déploiement réussi ✅ |
| `failed` | Déploiement échoué ❌ |

---

## Test du flux complet

### 1. Créer un module

Dans l'interface frontend, créez un nouveau module avec :
- ✅ Git Config activé
- ✅ Create Branch activé
- Nom de branche : `module/test-module`

### 2. Vérifier GitHub Actions

Allez sur GitHub → Actions et vérifiez que le workflow se déclenche.

### 3. Test manuel du webhook

```bash
# Générer la signature
SECRET="votre-secret"
PAYLOAD='{"deploymentId":"test-123","status":"done","branch":"module/test","message":"Test deployment"}'
SIGNATURE=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$SECRET" | cut -d' ' -f2)

# Envoyer le webhook
curl -X POST http://server.192.168.1.10.sslip.io/api/webhooks/dokploy/deployment \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Signature: sha256=$SIGNATURE" \
  -d "$PAYLOAD"
```

---

## Debugging

### Logs Laravel

```php
// Dans DokployWebhookController
Log::channel('daily')->info('Dokploy webhook received', [
    'headers' => $request->headers->all(),
    'body' => $request->all(),
    'signature_valid' => $isValid,
]);
```

### Vérifier les déploiements en base

```sql
SELECT * FROM deployments ORDER BY created_at DESC LIMIT 10;
```

### WebSockets (Soketi)

```bash
soketi start --debug
```

### GitHub Actions Logs

1. Allez sur GitHub → Actions
2. Cliquez sur le workflow
3. Vérifiez les logs de chaque step

---

## Diagramme de séquence

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Frontend │    │ Backend  │    │  GitHub  │    │ Dokploy  │    │WebSocket │
└────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘
     │               │               │               │               │
     │ Create Module │               │               │               │
     │──────────────>│               │               │               │
     │               │               │               │               │
     │               │ Push branch   │               │               │
     │               │──────────────>│               │               │
     │               │               │               │               │
     │               │ Create        │               │               │
     │               │ Deployment    │               │               │
     │               │──────┐        │               │               │
     │               │      │        │               │               │
     │               │<─────┘        │               │               │
     │               │               │               │               │
     │               │ Broadcast     │               │               │
     │               │ "pending"     │               │               │
     │               │───────────────────────────────────────────────>│
     │               │               │               │               │
     │               │               │ Build Docker  │               │
     │               │               │───────────────>               │
     │               │               │               │               │
     │               │               │ Webhook       │               │
     │               │               │──────────────>│               │
     │               │               │               │ Redeploy      │
     │               │               │               │───────┐       │
     │               │               │               │       │       │
     │               │               │               │<──────┘       │
     │               │               │               │               │
     │               │ Webhook       │               │               │
     │               │ "running"     │               │               │
     │               │<──────────────│               │               │
     │               │               │               │               │
     │               │ Broadcast     │               │               │
     │               │ "running"     │               │               │
     │               │───────────────────────────────────────────────>│
     │               │               │               │               │
     │               │ Webhook       │               │               │
     │               │ "done"        │               │               │
     │               │<──────────────│               │               │
     │               │               │               │               │
     │               │ Broadcast     │               │               │
     │               │ "success"     │               │               │
     │               │───────────────────────────────────────────────>│
     │               │               │               │               │
     │ Update UI     │               │               │               │
     │<──────────────────────────────────────────────────────────────│
     │ "Deployed! 🎉"│               │               │               │
     │               │               │               │               │
```

---

## Résumé des URLs

| Service | URL |
|---------|-----|
| Frontend | `http://app.192.168.1.10.sslip.io` |
| Backend | `http://server.192.168.1.10.sslip.io` |
| Webhook endpoint | `http://server.192.168.1.10.sslip.io/api/webhooks/dokploy/deployment` |
| Dokploy | `http://192.168.1.10:3000` (ou via Cloudflare) |
