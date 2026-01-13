import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'formly-info-box-type',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div [class]="props['className'] || 'bg-blue-50 rounded-lg p-4 sm:p-6'">
      <h4 *ngIf="props['title']" class="font-semibold mb-3 text-base sm:text-lg">
        <ng-container *ngIf="props['translate']">
          {{ props['title'] | translate }}
        </ng-container>
        <ng-container *ngIf="!props['translate']">
          {{ props['title'] }}
        </ng-container>
      </h4>
      <ul *ngIf="props['items'] && props['items'].length > 0" class="list-disc list-inside text-sm sm:text-base space-y-2">
        <li *ngFor="let item of props['items']">
          <ng-container *ngIf="props['translate']">
            {{ item | translate }}
          </ng-container>
          <ng-container *ngIf="!props['translate']">
            {{ item }}
          </ng-container>
        </li>
      </ul>
      <div *ngIf="props['content']">
        <ng-container *ngIf="props['translate']">
          {{ props['content'] | translate }}
        </ng-container>
        <ng-container *ngIf="!props['translate']">
          {{ props['content'] }}
        </ng-container>
      </div>
    </div>
  `,
  styles: []
})
export class InfoBoxTypeComponent extends FieldType<FieldTypeConfig> {
  // Ce composant est utilisé uniquement pour l'affichage, pas de logique FormControl nécessaire
}
