import { NgModule, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { missingTranslationHandler, translatePartialLoader } from 'src/app/config/translation-config';
import { StateStorageService } from 'src/app/services/stateStorage.service';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useFactory: missingTranslationHandler,
      },
    }),
  ],
  exports: [TranslateModule]
})
export class TranslationModule {
  private readonly translateService = inject(TranslateService);
  private readonly stateStorageService = inject(StateStorageService);

  constructor() {
    // if user have changed language and navigates away from the application and back to the application then use previously chosen language
    const langKey = this.stateStorageService.getLocale() ?? '';
    this.translateService.setDefaultLang(langKey);
    this.translateService.use(langKey);
  }
}
