// country.model.ts

import { Validators } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TranslateService } from "@ngx-translate/core";

export interface Country {
    id?: number;
    country_code?: string;
    country_name?: string;
    image_url?: string;
    dial_code?: string;
}

export interface CountryModel {
    id?: number;
    user_id?: number;
    country_code?: string;
    country_name?: string;
    image_url?: string;
    dial_code?: string;
}

export function getCountryFormlyFields(translate: TranslateService): FormlyFieldConfig[] {
    return [
        {
            fieldGroup: [
                {
                    key: 'country_name',
                    type: 'select',
                    props: {
                        label: translate.instant('global.country'),
                        required: true,
                        icon: 'location_on',
                        options: [], // Rempli dynamiquement
                        valueProp: 'country_code',
                        labelProp: 'country_name',
                        descriptionProp: 'dial_code',
                        imageProp: 'image_url'
                    },
                    validators: {
                        validation: [Validators.required]
                    },
                    validation: {
                        messages: {
                            required: 'Country is required'
                        }
                    }
                }
            ]
        }
    ];
}