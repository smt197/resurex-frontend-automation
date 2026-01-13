import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { languagesData } from 'src/app/config/languages-data';
import { LanguageService } from 'src/app/services/language.service';
import { SharedModule } from '../shared.module';
import { Language } from 'src/app/models/language.model';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth-service';
import { StateStorageService } from 'src/app/services/stateStorage.service';

type MessageType = 'error-snackbar' | 'success-snackbar';

@Component({
  selector: 'vex-change-languague',
  templateUrl: './change-languague.component.html',
  styleUrls: ['./change-languague.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    SharedModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class ChangeLanguagueComponent {
  languageKey: string = '';
  flag: string | undefined;
  languages: Language[] = [];
  languagesFormGroup: UntypedFormGroup = this.fb.group({
    preferred_language: ['']
  });
  user: User | null = null;
  preferred_lang: Language = {};
  usingDefaultLanguages: boolean = false;

  constructor(
    private languageService: LanguageService,
    private snackBar: MatSnackBar,
    private fb: UntypedFormBuilder,
    private authservice: AuthService,
    private languaservice: LanguageService,
    private stateStorageService: StateStorageService
  ) {
    // Vérifie si l'utilisateur a des langues définies
    const userLanguages = this.authservice.user?.languages as Language[];
    if (userLanguages && userLanguages.length > 0) {
      this.languages = userLanguages;
      this.usingDefaultLanguages = false;
    } else {
      this.languages = languagesData;
      this.usingDefaultLanguages = true;
    }

    // Initialiser la langue de l'utilisateur
    this.initLanguageUser();
  }

  initLanguageUser() {
    if (this.authservice.user?.preferred_language) {
      // Utilisateur connecté avec langue préférée
      this.preferred_lang = this.authservice.user.preferred_language as Language;
      let initlanguageKey: string = this.preferred_lang.code as string;
      this.flag = this.preferred_lang.flag;
      this.languageKey = initlanguageKey;
      this.setLanguage(initlanguageKey);
    } else {
      // Utilisateur non connecté ou sans langue préférée : utiliser le localStorage
      const storedLocale = this.languageService.getLocale();
      if (storedLocale) {
        // Trouver la langue correspondante dans la liste
        const storedLanguage = this.languages.find(lang => lang.code === storedLocale);
        if (storedLanguage) {
          this.preferred_lang = storedLanguage;
          this.flag = storedLanguage.flag;
          this.languageKey = storedLocale;
          this.setLanguage(storedLocale);
        } else {
          // Fallback si la langue stockée n'existe pas dans la liste - utiliser FR par défaut
          const frLanguage = this.languages.find(lang => lang.code === 'en');
          this.preferred_lang = frLanguage || this.languages[0];
          this.flag = this.preferred_lang.flag;
          this.languageKey = this.preferred_lang.code as string;
          this.setLanguage(this.preferred_lang.code as string);
        }
      } else {
        // Aucune langue stockée, utiliser FR par défaut
        const frLanguage = this.languages.find(lang => lang.code === 'en');
        this.preferred_lang = frLanguage || this.languages[0];
        this.flag = this.preferred_lang.flag;
        this.languageKey = this.preferred_lang.code as string;
        this.setLanguage(this.preferred_lang.code as string);
        // Sauvegarder FR comme langue par défaut dans le localStorage
        this.stateStorageService.storeLocale(this.preferred_lang.code as string);
      }
    }
  }

  switchLanguage(language: Language | undefined): void {
    if (!language) {
      return;
    }

    // Mettre à jour le flag et la langue immédiatement
    this.flag = language.flag;
    this.languageKey = language.code as string;

    // Si l'utilisateur n'est pas connecté, on change la langue et on recharge la page
    if (!this.authservice.user) {
      this.stateStorageService.storeLocale(language.code as string);
      setTimeout(() => {
        window.location.reload();
      }, 300);
      return;
    }

    // Pour les utilisateurs connectés, appeler setLanguage
    this.setLanguage(language.code as string);

    // Si l'utilisateur n'a pas de langue préférée définie, on recharge la page
    if (!this.authservice.user?.preferred_language) {
      this.updateLanguage(language);
      return;
    }

    // Sinon, on met à jour seulement si on utilise les langues de l'utilisateur
    if (!this.usingDefaultLanguages) {
      this.updateLanguage(language);
    }
  }

  setLanguage(languageKey: string) {
    this.languageService.changeLanguageUser(languageKey);
  }

  getFlagForSelectedLanguage(languageKey: string): string | undefined {
    const language = this.languages.find((lang) => lang.code === languageKey);
    return language ? language.flag : '';
  }

  updateLanguage(language: Language) {
    let user_id: number | undefined = undefined;
    if (this.authservice.user) {
      user_id = this.authservice.user.id;
    }
    this.languaservice
      .updateLanguages(user_id as number, language.id as number)
      .subscribe({
        next: (response) => {
          if (this.authservice.user) {
            this.authservice.user.preferred_language = language;
          }

          this.showMessage(response.message as string, 'success-snackbar');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
  }

  private showMessage(message: string, panelClass: MessageType) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [panelClass]
    });
  }
}
