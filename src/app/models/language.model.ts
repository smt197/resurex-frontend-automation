import { Validators } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TranslateService } from "@ngx-translate/core";

export interface Language {
    id?: number;
    code?: string;
    name?: string;
    flag?: string;
  }

  export interface LanguageModel {
    id?: number;
    user_id?: number;
    code?: string;
    name?: string;
   
  }



  export function getLangFormlyFields(translate: TranslateService): FormlyFieldConfig[] {
    return [
      // Première ligne - Prénom et Nom
      {
      fieldGroup: [
        {
          key: 'name',
          type: 'selecte',
          props: {
            label: translate.instant('global.languages'), // Traduction dynamique
            required: false,
            icon: 'language',
            options: [
            
            ],
            // Optionnel: Affichage personnalisé
          
          },
          validators: {
            validation: [Validators.required]
          },
          validation: {
            messages: {
              required: 'langues is required'
            }
          },
          // Pré-sélection basée sur les valeurs existantes
         
        }
      ]
    }
    // Deuxième ligne - Email et Date de naissance

   
  ];
}