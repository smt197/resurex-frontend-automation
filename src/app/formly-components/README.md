# Formly Components

Ce répertoire contient tous les composants Formly personnalisés de l'application, organisés par catégorie.

## Structure

```
formly-components/
├── auth/                           # Composants d'authentification
│   ├── emailformly-type/          # Champ email personnalisé
│   ├── passwordformly-type/       # Champ mot de passe personnalisé
│   └── forgot-password-formly-type/ # Champ URL pour mot de passe oublié
│
├── file-upload/                   # Composants de téléchargement de fichiers
│   ├── file-upload-type-image/    # Upload d'images
│   ├── file-upload-type-pdf/      # Upload de PDFs
│   ├── formly-field/              # Composants FilePond
│   │   ├── chat-file-pond-type.component.ts
│   │   └── document-file-pond-type.component.ts
│   └── formly-field-filepond.ts   # Composant FilePond de base
│
├── form-controls/                 # Contrôles de formulaire
│   ├── button-type/               # Bouton personnalisé
│   ├── chat-input-type/           # Champ de saisie pour chat
│   ├── date-range-picker-formly/  # Sélecteur de plage de dates
│   ├── formly-icon-select/        # Sélecteur d'icônes Material
│   ├── formly-slide-toggle/       # Toggle switch
│   ├── formly-tailwind-color-select/ # Sélecteur de couleurs Tailwind
│   └── select-options/            # Sélecteur d'options personnalisé
│
├── repeaters/                     # Composants répétables
│   ├── formly-repeat-custom-field/ # Répéteur de champs personnalisés
│   └── formly-repeat-document/    # Répéteur de documents
│
├── index.ts                       # Export centralisé de tous les composants
└── README.md                      # Ce fichier

```

## Utilisation

### Import direct depuis l'index

```typescript
import {
  EmailformlyTypeComponent,
  PasswordformlyTypeComponent,
  FileUploadTypeImageComponent,
  // ... autres composants
} from '@app/formly-components';
```

### Configuration Formly

Tous ces composants sont automatiquement enregistrés dans `ValidationFormly`
(fichier: `src/app/interfaces/ValidationFormly.ts`).

### Ajouter un nouveau composant Formly

1. Créer le composant dans la catégorie appropriée
2. Exporter le composant dans `index.ts`
3. L'enregistrer dans `ValidationFormly.ts`

## Types Formly disponibles

| Type | Composant | Description |
|------|-----------|-------------|
| `email` | EmailformlyTypeComponent | Champ email avec validation |
| `password` | PasswordformlyTypeComponent | Champ mot de passe avec validation |
| `url` | ForgotPasswordFormlyTypeComponent | Champ URL |
| `fileimage` | FileUploadTypeImageComponent | Upload d'images |
| `file` | FileUploadTypePDFComponent | Upload de PDFs |
| `chat-file-pond` | ChatFilePondTypeComponent | Upload de fichiers pour chat |
| `document-file-pond` | DocumentFilePondTypeComponent | Upload de documents |
| `filepond` | FormlyFieldFilepondComponent | FilePond générique |
| `button` | FormlyButtonTypeComponent | Bouton dans le formulaire |
| `chat-input-type` | ChatInputTypeComponent | Saisie pour chat |
| `daterange` | DateRangePickerFormlyComponent | Plage de dates |
| `material-icon-select` | MaterialIconSelectComponent | Sélecteur d'icônes |
| `slide-toggle` | FormlySlideToggleComponent | Toggle switch |
| `tailwind-color-select` | TailwindColorSelectComponent | Sélecteur de couleurs |
| `selecte` | SelectOptionsComponent | Sélecteur d'options |
| `repeat` | FormlyRepeatDocumentComponent | Répéteur de documents |
| `custom-field` | FormlyRepeatCustomFieldComponent | Répéteur de champs personnalisés |

## Conventions de nommage

- **Composants d'auth** : `{nom}formly-type`
- **Composants de contrôle** : `formly-{nom}` ou `{nom}-formly`
- **Composants de fichiers** : `file-upload-type-{type}` ou `{context}-file-pond-type`
- **Composants répétables** : `formly-repeat-{nom}`



partie 1: continue ✅

losrsque le systeme supprime un module pour la route il doit nettoyer correctement en enlevant l'importation

partie 2: 
le systeme doit permettre de faire des mises a jour :

1- nom module ( ne permet pas d'accents)

2- les champs( ne permet pas d'accents)

3 - la traduction dans les fichier en,fr,pt json 

4- du menu en s'appuyant sur le l'API du menu managment avec le service generic-api-service->createJson() pour la creation et la mise a jour;

partie 2.1

1 - toutes les fonctionnalites du modules doit etre presenter dans le menu du profil admin de la plateforme ansi que sur le backend ressurex-backend en utilisant orion (inspire toi de rolesController)

partie 3:

1- le systeme doit permettre desactiver un module  la route du composant cible ne doit plus etre accessible et doit etre redirriger vers la route /not-found ✅

Partie de menu management

4- Dans menu-management  lorsque le menu d'un composant est disable la route du composant cible ne doit plus etre accessible et doit etre rediriger vers la route /not-found

