# Système d'Upload de Fichiers - FilePond & Spatie Media

Ce document décrit le système complet de gestion de fichiers intégré dans le générateur de modules.

## Vue d'ensemble

Le système supporte automatiquement l'upload de fichiers via **FilePond** (frontend) et **Spatie Media Library** (backend) lors de la génération de modules.

## Utilisation via l'interface de gestion de modules

### 1. Créer un module avec fichiers

Depuis l'interface backend de gestion des modules, définissez un champ avec le type `File` :

```json
{
  "moduleName": "products",
  "displayName": "Products",
  "displayNameSingular": "Product",
  "fields": [
    {
      "name": "name",
      "type": "string",
      "required": true
    },
    {
      "name": "description",
      "type": "string",
      "required": false
    },
    {
      "name": "images",
      "type": "File",
      "required": true
    }
  ]
}
```

### 2. Génération automatique

Le système génère automatiquement :

#### Frontend (Angular)
- ✅ Champ **FilePond** dans le formulaire
- ✅ Configuration `useFormData: true` (pour envoyer les fichiers)
- ✅ Validation des fichiers
- ✅ Champs File exclus des colonnes du tableau
- ✅ Props FilePond par défaut : multiple, types acceptés configurable

#### Backend (Laravel)
- ✅ Modèle avec trait `InteractsWithMedia`
- ✅ Interface `HasMedia` implémentée
- ✅ Collection média "attachments" configurée
- ✅ Migration SANS colonne fichier (médias gérés par Spatie)
- ✅ Contrôleur avec méthodes `afterStore` et `afterUpdate`
- ✅ Validation des fichiers (array, max 10MB par défaut)
- ✅ Resource incluant les médias
- ✅ Factory sans génération de fichiers fake

## Fichiers générés

### Frontend

**Interface** (`src/app/interfaces/Products.ts`) :
```typescript
{
  key: 'images',
  type: 'file-upload',
  props: {
    label: 'product.label.images',
    placeholder: 'product.placeholder.images',
    required: true,
    multiple: true,
    acceptedFileTypes: null  // Tous types acceptés
  }
}
```

**Configuration** (`src/app/pages/products/products.config.ts`) :
```typescript
data: {
  useFormData: true,  // Activé automatiquement si champ File existe
  optimisticUpdate: true,
  optimisticDelete: true,
  autoRefresh: true,
  useGenericApi: true
}
```

### Backend

**Modèle** (`app/Models/Product.php`) :
```php
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['name', 'description'];
    // 'images' n'est PAS dans fillable (géré par Spatie)

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('attachments')
            ->useDisk(config('filesystems.default'));
    }
}
```

**Contrôleur** (`app/Http/Controllers/ProductController.php`) :
```php
protected function afterStore($request, $product)
{
    if ($request->hasFile('images')) {
        $files = is_array($request->file('images'))
            ? $request->file('images')
            : [$request->file('images')];

        foreach ($files as $file) {
            $product->addMedia($file)
                ->withCustomProperties([
                    'product_id' => $product->id,
                ])
                ->toMediaCollection('attachments');
        }

        $product->refresh();
    }
}

protected function afterUpdate($request, $product)
{
    // Même logique pour la mise à jour
}
```

**Migration** (`database/migrations/xxxx_create_products_table.php`) :
```php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('description')->nullable();
    // PAS de colonne 'images' (géré par table 'media' de Spatie)
    $table->timestamps();
});
```

**Request** (`app/Http/Requests/ProductRequest.php`) :
```php
public function rules(): array
{
    return [
        'name' => ['required', 'string', 'max:255'],
        'description' => ['nullable', 'string', 'max:255'],
        'images' => ['required', 'array'],
        'images.*' => ['file', 'max:10240'], // 10MB max par fichier
    ];
}
```

**Resource** (`app/Http/Resources/ProductResource.php`) :
```php
public function toArray($request)
{
    return [
        'id' => $this->id,
        'name' => $this->name,
        'description' => $this->description,
        'media' => $this->getMedia('attachments')->map(function ($media) {
            return [
                'id' => $media->id,
                'name' => $media->name,
                'file_name' => $media->file_name,
                'mime_type' => $media->mime_type,
                'size' => $media->size,
                'url' => $media->getUrl(),
            ];
        }),
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
    ];
}
```

## Personnalisation

### Frontend - Options FilePond

Modifiez le fichier d'interface généré pour personnaliser :

```typescript
{
  key: 'images',
  type: 'file-upload',
  props: {
    label: 'product.label.images',
    required: true,
    multiple: false,              // Un seul fichier
    maxFiles: 5,                  // Max 5 fichiers
    acceptedFileTypes: [          // Types acceptés
      'image/*',
      'application/pdf'
    ],
    allowReorder: true            // Réorganisation
  }
}
```

### Backend - Validation des fichiers

Modifiez la Request générée :

```php
'images' => ['required', 'array'],
'images.*' => [
    'file',
    'mimes:jpg,jpeg,png,pdf',    // Types MIME acceptés
    'max:20480'                  // 20MB max
],
```

### Backend - Collection média personnalisée

Modifiez le modèle :

```php
public function registerMediaCollections(): void
{
    $this->addMediaCollection('images')  // Nom personnalisé
        ->useDisk('s3')                  // Stockage S3
        ->acceptsMimeTypes(['image/jpeg', 'image/png'])
        ->registerMediaConversions(function (Media $media) {
            $this->addMediaConversion('thumb')
                ->width(200)
                ->height(200);
        });
}
```

## Prérequis Backend

### Installation Spatie Media Library

```bash
composer require spatie/laravel-medialibrary
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider"
php artisan migrate
```

### Configuration stockage

**`.env`** :
```env
FILESYSTEM_DISK=public
# ou pour S3:
# FILESYSTEM_DISK=s3
# AWS_ACCESS_KEY_ID=
# AWS_SECRET_ACCESS_KEY=
# AWS_DEFAULT_REGION=
# AWS_BUCKET=
```

## API Frontend

### Créer avec fichiers

```typescript
const formData = new FormData();
formData.append('name', 'Mon Produit');
formData.append('description', 'Description');

// Ajouter les fichiers
files.forEach(file => {
  formData.append('images[]', file);
});

this.http.post('/api/products', formData).subscribe();
```

### Récupérer avec médias

```typescript
this.http.get('/api/products/1').subscribe((response: any) => {
  console.log(response.data.media);
  // [
  //   {
  //     id: 1,
  //     file_name: 'image.jpg',
  //     url: 'http://example.com/storage/1/image.jpg'
  //   }
  // ]
});
```

## Suppression des fichiers

Les fichiers sont automatiquement supprimés lors de la suppression du modèle grâce à Spatie Media Library.

Pour supprimer manuellement :

```php
// Supprimer tous les médias
$product->clearMediaCollection('attachments');

// Supprimer un média spécifique
$media = $product->getFirstMedia('attachments');
$media->delete();
```

## Stockage

### Disques supportés
- `public` : Stockage local dans `storage/app/public`
- `s3` : Amazon S3
- `sftp` : Serveur SFTP distant

Configurez dans `config/filesystems.php` et `.env`

## Limitations

- Taille max par fichier : 10MB (configurable dans Request)
- Types par défaut : Tous (configurable via `acceptedFileTypes`)
- Collection : `attachments` (modifiable dans le modèle)

## Support

Pour plus d'informations :
- [FilePond Documentation](https://pqina.nl/filepond/)
- [Spatie Media Library](https://spatie.be/docs/laravel-medialibrary)
