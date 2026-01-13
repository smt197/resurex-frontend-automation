import { FormlyFieldConfig } from '@ngx-formly/core';
import { UserModel } from '../models/user.model';
import { SettingModel } from './setting';
import { AutoTranslateService } from '../services/AutoTranslateService';
import { UserCreateUpdateModel } from './User';
import { LanguageModel } from '../models/language.model';
import { CountryModel } from '../models/country.model';

export interface ShowCardInformation {
  title: string;
  icon: string;
  description: string;
  model: any;
  type?: string
  form: FormlyFieldConfig[];
  editing?: boolean; // Ajoutez cette ligne
  isLoading?: boolean;
  isExpanded?: boolean; 
}
  export const userModelCard: UserCreateUpdateModel = {
    first_name: '',
    last_name: '',
    email: '',
    roles: [],
    birthday: '',
    phone: '',
    permissions: [],
    photo: '',
    languages: [],
    
  };

  export const  settingModelCard: SettingModel = {
    site_name: '',
    site_logo: '',
    site_description: '',
    site_subtitle: '',
    site_active: false,
    site_web: ''
  };



  export const profileSettingsCardInformation: ShowCardInformation = {
    title: 'Profil',
    icon: 'person',
    description: 'Gérez vos informations personnelles, votre avatar et vos préférences de compte',
    type: 'user',
    model: userModelCard,
    form: [],
};

export const appSettingsCardInformation: ShowCardInformation = {
    title: 'Settings',
    icon: 'settings',
    description: 'Configurez les paramètres de l\'application et personnalisez votre expérience',
    type: 'setting',
    model: settingModelCard,
    form: []
};



// Dans votre fichier d'interface
export function createCardInfo(
  autoTranslate: AutoTranslateService,
  config: ShowCardInformation
): ShowCardInformation {
  return {
    ...config,
    title: autoTranslate.translateText(config.title),
    description: autoTranslate.translateText(config.description)
  };
}


