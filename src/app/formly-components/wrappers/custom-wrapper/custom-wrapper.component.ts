import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'formly-wrapper-custom',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="flex items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg">
      <div class="flex-1">
        <h3 *ngIf="shouldShowLabel()" class="text-lg sm:text-xl font-semibold">
          <ng-container *ngIf="props['translate'] && props['label']">
            {{ props['label']! | translate }}
          </ng-container>
          <ng-container *ngIf="!props['translate'] && props['label']">
            {{ props['label'] }}
          </ng-container>
        </h3>
        <p class="text-sm text-gray-600 mt-1">
          <ng-container *ngIf="props['translate']">
            {{ getDescriptionKey() | translate }}
          </ng-container>
          <ng-container *ngIf="!props['translate']">
            {{ getDescriptionKey() }}
          </ng-container>
        </p>
      </div>
      <div>
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
  styles: []
})
export class CustomWrapperComponent extends FieldWrapper {
  getDescriptionKey(): string {
    const isActive = this.formControl?.value;
    if (this.props['description'] && this.props['descriptionInactive']) {
      return isActive ? this.props['description'] : this.props['descriptionInactive'];
    }
    return '';
  }

  shouldShowLabel(): boolean {
    const label = this.props['label'];
    if (!label) return false;
    return !this.isTranslationNotFound(label);
  }

  isTranslationNotFound(text: string | undefined): boolean {
    if (!text) return false;
    return text.includes('translation-not-found');
  }
}
