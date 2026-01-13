# Guide d'utilisation du type File avec FilePond et Spatie Media

Ce guide explique comment utiliser le système de génération de modules pour créer des modules avec upload de fichiers.

## Frontend - Angular avec FilePond

### 1. Génération automatique

Lors de la génération d'un module, vous pouvez maintenant utiliser le type `File` pour les champs :

```bash
npm run module:generate
```

Quand le script vous demande le type d'un champ, entrez `File` :

```
Field 1 name (or "done"): attachment
Field "attachment" type (string/number/boolean/Date/File): File
Field "attachment" required? (y/n): y
```

### 2. Ce qui est généré automatiquement

Le script génère automatiquement :

- **Formly Field** avec le type `file-upload` (composant FilePond)
- **Configuration** avec `useFormData: true` (nécessaire pour les fichiers)
- **Options FilePond** :
  - `multiple: true` (plusieurs fichiers autorisés)
  - `acceptedFileTypes: null` (tous les types acceptés par défaut)

### 3. Personnalisation des options FilePond

Dans le fichier `interfaces/YourModule.ts`, vous pouvez personnaliser les options :

```typescript
{
  key: 'attachment',
  type: 'file-upload',
  props: {
    label: 'module.label.attachment',
    placeholder: 'module.placeholder.attachment',
    required: true,
    multiple: true,  // Modifier à false pour un seul fichier
    maxFiles: 5,     // Limiter le nombre de fichiers
    acceptedFileTypes: ['image/*', 'application/pdf'],  // Types acceptés
    allowReorder: true  // Permettre la réorganisation
  }
}
```

### 4. Options disponibles

| Option | Type | Description | Défaut |
|--------|------|-------------|--------|
| `multiple` | boolean | Autoriser plusieurs fichiers | `true` |
| `maxFiles` | number | Nombre maximum de fichiers | `null` (illimité) |
| `acceptedFileTypes` | string[] | Types MIME acceptés | `null` (tous) |
| `allowReorder` | boolean | Permettre la réorganisation | `false` |

## Backend - Laravel avec Spatie Media Library

### 1. Prérequis

Assurez-vous que Spatie Media Library est installé :

```bash
composer require spatie/laravel-medialibrary
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider"
php artisan migrate
```

### 2. Modèle

Votre modèle doit implémenter `HasMedia` :

```php
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class YourModel extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = ['name', 'description', 'user_id'];

    /**
     * Register media collections
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('attachments')
            ->useDisk('public'); // ou 's3', 'sftp', etc.
    }
}
```

### 3. Contrôleur

Utilisez le template fourni dans `scripts/controller-template-spatie.php` :

**Remplacements à faire :**
- `{{ModelName}}` → Nom du modèle (ex: `Product`)
- `{{modelLowerName}}` → Nom en minuscule (ex: `product`)
- `{{keyName}}` → Clé d'identification (`id`, `slug`, etc.)
- `{{searchableFields}}` → Champs recherchables (`'name', 'description'`)
- `{{fileFieldName}}` → Nom du champ fichier (ex: `attachment`)
- `{{mediaCollectionName}}` → Nom de la collection (ex: `attachments`)
- `{{translationKey}}` → Clé de traduction (ex: `products`)

### 4. Request

Créez une Form Request pour valider les fichiers :

```php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class YourModelRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'attachment' => 'nullable|array',
            'attachment.*' => 'file|max:10240', // 10MB max par fichier
            // Pour limiter les types :
            // 'attachment.*' => 'file|mimes:pdf,jpg,png|max:10240',
        ];
    }
}
```

### 5. Resource

Incluez les médias dans votre Resource :

```php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class YourModelResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

            // Inclure les médias
            'media' => $this->getMedia('attachments')->map(function ($media) {
                return [
                    'id' => $media->id,
                    'name' => $media->name,
                    'file_name' => $media->file_name,
                    'mime_type' => $media->mime_type,
                    'size' => $media->size,
                    'url' => $media->getUrl(),
                    'thumb' => $media->hasGeneratedConversion('thumb')
                        ? $media->getUrl('thumb')
                        : null,
                ];
            }),
        ];
    }
}
```

### 6. Routes

Ajoutez des routes supplémentaires si nécessaire dans `routes/api.php` :

```php
// Route pour supprimer un média spécifique
Route::delete('your-models/media/{media}', [YourModelController::class, 'deleteMedia'])
    ->middleware('auth:sanctum');
```

## Exemple complet

### Génération du module

```bash
npm run module:generate
```

```
Module name: products
Display name: Products
Display name (singular): Product
Resource type: products
Route path: products
Identifier field: id

Field 1 name: name
Field "name" type: string
Field "name" required? y

Field 2 name: description
Field "description" type: string
Field "description" required? n

Field 3 name: images
Field "images" type: File
Field "images" required? y

Field 4 name: done
```

### Résultat généré

**Frontend** (`products.interface.ts`):
```typescript
export const productsFormlyFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: { label: 'product.label.name', required: true }
  },
  {
    key: 'description',
    type: 'input',
    props: { label: 'product.label.description', required: false }
  },
  {
    key: 'images',
    type: 'file-upload',
    props: {
      label: 'product.label.images',
      required: true,
      multiple: true,
      acceptedFileTypes: null
    }
  }
];
```

**Backend** - Utiliser le template et remplacer les placeholders.

## Conseils

1. **Types de fichiers** : Spécifiez toujours les types acceptés en production pour la sécurité
2. **Taille des fichiers** : Configurez les limites dans `php.ini` et `nginx.conf`
3. **Stockage** : Utilisez S3 ou SFTP pour la production, pas le disque local
4. **Optimisation** : Générez des conversions d'images (thumbnails) pour les performances
5. **Nettoyage** : Implémentez un job pour nettoyer les fichiers orphelins

## Documentation

- [FilePond Documentation](https://pqina.nl/filepond/)
- [Spatie Media Library Documentation](https://spatie.be/docs/laravel-medialibrary)
- [Laravel File Storage](https://laravel.com/docs/filesystem)
