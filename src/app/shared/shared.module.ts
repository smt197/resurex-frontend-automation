import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective } from './language';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationModule } from './language/translation.module';
import { GenericApiService } from '../services/generic-api.service';

/**
 * Application wide Module
 */
@NgModule({
  declarations: [],
  imports: [TranslateDirective, TranslateModule],
  exports: [
    CommonModule,
    TranslationModule,
    TranslateDirective,
    TranslateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        GenericApiService,
        // Services globaux
        { provide: TranslateService, useClass: TranslateService }
      ]
    };
  }
}
