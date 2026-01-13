// auto-translate.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class AutoTranslateService {
  private translations: Record<string, Record<string, string>> = {};

  constructor(private translate: TranslateService) {
    this.initDefaultTranslations();
  }

  private initDefaultTranslations() {
    this.translations = {
      // Titres
      Profil: {
        en: 'Profile',
        fr: 'Profil',
        pt: 'Perfil'
      },
      Settings: {
        en: 'Settings',
        fr: 'Paramètres',
        pt: 'Configurações'
      },
      Language: {
        en: 'Language',
        fr: 'Langue',
        pt: 'Idioma'
      },
      Country: {
        en: 'Country',
        fr: 'Pays',
        pt: 'País',
        es: 'País'
      },
      
      // Descriptions
      'Gérez vos informations personnelles, votre avatar et vos préférences de compte': {
        en: 'Manage your personal information, avatar and account preferences',
        fr: 'Gérez vos informations personnelles, votre avatar et vos préférences de compte',
        pt: 'Gerencie suas informações pessoais, avatar e preferências de conta'
      },
      'Configurez les paramètres de l\'application et personnalisez votre expérience': {
        en: 'Configure application settings and customize your experience',
        fr: 'Configurez les paramètres de l\'application et personnalisez votre expérience',
        pt: 'Configure as definições do aplicativo e personalize sua experiência'
      },
      'Choisissez votre langue préférée pour l\'interface de l\'application': {
        en: 'Choose your preferred language for the application interface',
        fr: 'a pour l\'interface de l\'application',
        pt: 'Escolha seu idioma preferido para a interface do aplicativo'
      },
      'Select your country for regional settings and phone number formatting': {
        en: 'Select your country for regional settings and phone number formatting',
        fr: 'Sélectionnez votre pays pour les paramètres régionaux et le format des numéros de téléphone',
        pt: 'Selecione seu país para configurações regionais e formatação de números de telefone',
        es: 'Seleccione su país para configuraciones regionales y formato de números telefónicos'
      },
    };
  }

  translateText(text: string): string {
    const currentLang = this.translate.currentLang || 'en';
    const translation = this.translations[text]?.[currentLang];

    if (!translation) {
      console.warn(`Missing translation for "${text}" in ${currentLang}`);
      return text;
    }

    return translation;
  }
}