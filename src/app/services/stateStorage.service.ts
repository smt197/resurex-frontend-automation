import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateStorageService {
  private localeKey = 'locale';

  storeLocale(locale: string): void {
    localStorage.setItem(this.localeKey, locale);
  }

  getLocale(): string {
    return localStorage.getItem(this.localeKey) ?? 'en';
  }

  clearLocale(): void {
    localStorage.removeItem(this.localeKey);
  }
}