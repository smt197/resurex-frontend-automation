import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import {
  provideRouter,
  withDebugTracing,
  withInMemoryScrolling,
  withRouterConfig
} from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { provideIcons } from './core/icons/icons.provider';
import { provideLuxon } from './core/luxon/luxon.provider';
import { provideVex } from '@vex/vex.provider';
import { provideNavigation } from './core/navigation/navigation.provider';
import { vexConfigs } from '@vex/config/vex-configs';
import { provideQuillConfig } from 'ngx-quill';
import { httpInterceptorProviders } from './interceptors';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
import { ValidationFormly } from './interfaces/ValidationFormly';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { TranslationModule } from './shared/language/translation.module';
import { registerTranslateExtension } from './config/translate.extension';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localeFr);
registerLocaleData(localeEn);
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatDialogModule,
      MatBottomSheetModule,
      MatNativeDateModule,
      HttpClientModule,
      NgxPermissionsModule.forRoot(),
      FormlyModule.forChild(ValidationFormly),
      MatFormFieldModule,
      MatInputModule,
      TranslationModule,
      SharedModule.forRoot(),
      MatMomentDateModule
    ),

    provideRouter(
      appRoutes,

      // TODO: Add preloading withPreloading(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload' // Options: 'reload' ou 'ignore' (défaut)
      })
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    httpInterceptorProviders,
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: registerTranslateExtension,
      deps: [TranslateService]
    },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },

    {
      provide: LOCALE_ID,
      deps: [TranslateService],
      useFactory: (translateService: TranslateService) => {
        const currentLang =
          translateService.currentLang ||
          translateService.getDefaultLang() ||
          'en';
        switch (currentLang) {
          case 'fr':
            return 'fr-FR';
          case 'pt':
            return 'pt-PT';
          case 'en':
          default:
            return 'en-US';
        }
      }
    },

    provideVex({
      /**
       * The config that will be used by default.
       * This can be changed at runtime via the config panel or using the VexConfigService.
       */
      config: vexConfigs.ares,
      /**
       * Only themes that are available in the config in tailwind.config.ts should be listed here.
       * Any theme not listed here will not be available in the config panel.
       */
      availableThemes: [
        {
          name: 'Default',
          className: 'vex-theme-default'
        },
        {
          name: 'Teal',
          className: 'vex-theme-teal'
        },
        {
          name: 'Green',
          className: 'vex-theme-green'
        },
        {
          name: 'Purple',
          className: 'vex-theme-purple'
        },
        {
          name: 'Red',
          className: 'vex-theme-red'
        },
        {
          name: 'Orange',
          className: 'vex-theme-orange'
        }
      ]
    }),
    provideNavigation(),
    provideIcons(),
    provideLuxon(),
    provideQuillConfig({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['clean'],
          ['link', 'image']
        ]
      }
    })
  ]
};