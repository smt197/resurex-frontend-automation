import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseGlobalServer } from '../interfaces/Response-globalServer';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Setting, SettingModel, UpdateSettingModel } from '../interfaces/setting';
import { Auth } from '../classes/Auth';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = environment.apiUrl;
  private _settings$ = new BehaviorSubject<Setting | null>(null);

  constructor(private http: HttpClient) {}

  getSettings(): Observable<Setting> {
    return this.http.get<Setting>(`${this.apiUrl}/settings`);
  }
  get settings$(): Observable<Setting | null> {
    return this._settings$.asObservable();
  }

  get setting(): Setting | null {
    return this._settings$.value;
  }

  set setting(value: Setting | null) {
    try {
      if (value !== null) {
        Auth.responseServerSettings.emit(value);
        Auth.setting = value;
      }
      this._settings$.next(value); // <-- Notifie tous les abonnés
    } catch (error) {
      console.error('Error setting response:', error);
    }
  }

  updateSetting(setting: SettingModel): Observable<ResponseGlobalServer> {
    const formData = this.buildFormData(setting);
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/settings`,
      formData
    );
  }

  /** Récupère les settings depuis le backend et met à jour le cache local */
  // getSettings(): Observable<Setting> {
  //   return this.http.get<Setting>(`${this.apiUrl}/settings`).pipe(
  //     tap((setting) => {
  //       this.setting = setting;
  //     })
  //   );
  // }
  getGithubSettings(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/github-settings`);
  }

  updateGithubSettings(settings: any): Observable<ResponseGlobalServer> {
    if (settings.id) {
      return this.http.put<ResponseGlobalServer>(
        `${this.apiUrl}/github-settings/${settings.id}`,
        settings
      );
    }
    return this.http.post<ResponseGlobalServer>(
      `${this.apiUrl}/github-settings`,
      settings
    );
  }

  testGithubConnection(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/github-settings/test?id=${id}`);
  }



  private buildFormData(setting: SettingModel): FormData {
    const formData = new FormData();

    // Ajoutez les champs texte
    formData.append('site_name', setting.site_name);
    formData.append('site_description', setting.site_description);
    formData.append('site_active', setting.site_active ? '1' : '0');
    formData.append('site_web', setting.site_web);
     formData.append('site_subtitle', setting.site_subtitle);

    // Ajoutez le fichier image si présent
    if (setting.site_logo instanceof File) {
      formData.append(
        'site_logo',
        setting.site_logo,
        setting.site_logo.name
      );
    } else if (
      typeof setting.site_logo === 'string' &&
      setting.site_logo.trim() !== ''
    ) {
      formData.append('site_logo_url', setting.site_logo);
    }

    return formData;
  }
}
