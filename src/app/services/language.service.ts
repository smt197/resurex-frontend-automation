import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import localeFrench from '@angular/common/locales/fr';
import localeEnglish from '@angular/common/locales/en';
import { environment } from 'src/environments/environment';
import { StateStorageService } from './stateStorage.service';
import { Language } from '../models/language.model';
import { ResponseGlobalServer } from '../interfaces/Response-globalServer';
import { DateAdapter } from '@angular/material/core';
import moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // share data language and other component
  private shareLangues = new BehaviorSubject<string>('');

  private baseUrl = environment.apiUrl + '';

  constructor(
    private translateService: TranslateService,
    private stateStorageService: StateStorageService,
    private http: HttpClient,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {
    this.dateAdapter.setLocale(this.getDateLocale());
  }

  changeLanguageUser(languageKey: string): void {
    this.stateStorageService.storeLocale(languageKey);
    this.translateService.use(languageKey);
    this.getDateLocale();
    this.getLocale();

    this.setLangues(languageKey);
    moment.locale(languageKey);
    this.dateAdapter.setLocale(this.getDateLocale());
  }

  updateLangUser(data: string) {
    this.getLocale();
    return this.http.post(`${this.baseUrl}/langues`, data);
  }

  getLangueCode(): string {
    let lang = this.getLocale();
    return lang;
  }

  getDateLocale(): string {
    let lang = this.getLocale();
    switch (lang) {
      case 'fr':
        return 'fr-FR';
      case 'en':
        return 'en-US';
      case 'pt':
        return 'pt-PT';
      default:
        return 'en-US';
    }
  }
  setRegisterLocaleData() {
    let lang = this.getLocale();
    switch (lang) {
      case 'fr': {
        registerLocaleData(localeFrench);
        return 'fr';
        break;
      }
      case 'en': {
        registerLocaleData(localeEnglish);
        return 'en';
        break;
      }
      case 'pt': {
        registerLocaleData(localeEnglish);
        return 'pt';
        break;
      }
    }
  }

  setLangues(data: any) {
    this.shareLangues.next(data);
  }
  watchStorage(): Observable<any> {
    return this.shareLangues.asObservable();
  }
  getLocale(): string {
    return this.stateStorageService.getLocale();
  }

  getFlagslanguages(languages: Language[], locale: string) {
    let flag = languages.find((langKey) => langKey.code === locale);
    return flag?.flag;
  }

  getLangId(languages: Language[], languageKey: string): number | undefined {
    const lang = languages.find((langkey) => langkey.code === languageKey);
    return lang?.id;
  }

  getAllLanguages() {
    return this.http.get<ResponseGlobalServer>(`${this.baseUrl}/languages`);
  }
  updateLanguages(userID: number, langID: number) {
    return this.http.post<ResponseGlobalServer>(
      `${this.baseUrl}/users/` + userID + `/languages/associate`,
      { related_key: langID }
    );
  }
  parseDate(dateStr: string): Date | null {
    if (!dateStr) return null;

    const locale = this.getLocale(); // 'fr', 'en', 'pt'
    const dateFormat = this.getDateFormatForLocale(locale);

    try {
      // Solution avec Moment.js (recommandé)
      moment.locale(locale);
      const date = moment(dateStr, dateFormat);
      return date.isValid() ? date.toDate() : null;

      // Alternative avec Date native (moins fiable)
      // return new Date(dateStr);
    } catch (e) {
      console.error('Erreur de parsing de date', e);
      return null;
    }
  }
  formatDateLocal(date: Date): string {
    if (!date || !(date instanceof Date)) return '';

    const locale = this.getLocale();
    const format = this.getDateFormatForLocale(locale);

    return moment(date).locale(locale).format(format);
  }
  // language.service.ts
  parseAndFormatDate(dateStr: string, includeTime: boolean = true): string {
    if (!dateStr) return '';

    try {
      const locale = this.getLocale(); // 'fr', 'en', 'pt'
      const systemLocale = this.getDateLocale(); // 'fr-FR', 'en-US', etc.

      // 1. Parsing avec Moment.js
      moment.locale(locale);
      const dateMoment = moment(dateStr, this.getMomentFormatForLocale(locale));
      const date = dateMoment.isValid()
        ? dateMoment.toDate()
        : new Date(dateStr);

      if (isNaN(date.getTime())) return dateStr; // Fallback si parsing échoue

      // 2. Formatage selon la locale
      const formatOptions: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };

      if (includeTime) {
        formatOptions.hour = '2-digit';
        formatOptions.minute = '2-digit';
        formatOptions.hour12 = false; // Format 24h
      }

      return new Intl.DateTimeFormat(systemLocale, formatOptions).format(date);
    } catch (e) {
      console.error('Erreur de formatage de date', e);
      return dateStr;
    }
  }

  //   formatDateByLang(date: string | number | Date): string {
  //   const lang = this.translate.currentLang || 'fr';

  //   const parsedDate = typeof date === 'string' ? new Date(date) : date;

  //   return new Intl.DateTimeFormat(lang, {
  //     year: 'numeric',
  //     month: 'short',
  //     day: '2-digit',
  //     hour: '2-digit',
  //     minute: '2-digit'
  //   }).format(parsedDate);
  // }

  formatDateByLang(date: string | number | Date): string {
    const lang = this.translate.currentLang || 'fr';

    // Conversion fiable de la date en objet Date
    const inputDate = new Date(date);

    if (isNaN(inputDate.getTime())) return '—';

    const now = new Date();

    const diffInMs = now.getTime() - inputDate.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);

    // Option : on peut aussi utiliser Math.floor(diffInMs / 86400000)
    const isSameDay =
      now.getFullYear() === inputDate.getFullYear() &&
      now.getMonth() === inputDate.getMonth() &&
      now.getDate() === inputDate.getDate();

    if (!isSameDay && diffInHours <= 48) {
      return this.translate.instant('common.yesterday'); // "Hier"
    }

    return new Intl.DateTimeFormat(lang, {
      hour: '2-digit',
      minute: '2-digit'
    }).format(inputDate);
  }

  /**
   * Retourne le format Moment.js approprié pour la locale
   */
  private getMomentFormatForLocale(locale: string): string {
    switch (locale) {
      case 'fr':
        return 'DD/MM/YYYY HH:mm';
      case 'en':
        return 'MM/DD/YYYY hh:mm A';
      case 'pt':
        return 'DD/MM/YYYY HH:mm';
      default:
        return 'YYYY-MM-DD HH:mm';
    }
  }

  private getDateFormatForLocale(locale: string): string {
    switch (locale) {
      case 'fr':
        return 'DD/MM/YYYY';
      case 'en':
        return 'MM/DD/YYYY';
      case 'pt':
        return 'DD/MM/YYYY';
      default:
        return 'YYYY-MM-DD';
    }
  }
}
