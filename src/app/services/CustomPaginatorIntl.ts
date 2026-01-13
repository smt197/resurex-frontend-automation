// Create a new file: custom-paginator-intl.ts
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
  constructor(private translate: TranslateService) {
    super();
    
    this.getTranslations();
    this.translate.onLangChange.subscribe(() => this.getTranslations());
  }

  private getTranslations() {
    this.translate.get([
      'paginator.items_per_page',
      'paginator.next_page',
      'paginator.previous_page',
      'paginator.first_page',
      'paginator.last_page'
    ]).subscribe(translations => {
      this.itemsPerPageLabel = translations['paginator.items_per_page'];
      this.nextPageLabel = translations['paginator.next_page'];
      this.previousPageLabel = translations['paginator.previous_page'];
      this.firstPageLabel = translations['paginator.first_page'];
      this.lastPageLabel = translations['paginator.last_page'];
      this.changes.next(); // Important to trigger update
    });

    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return this.translate.instant('paginator.range', { start: 0, end: 0, length: 0 });
      }
      const start = page * pageSize + 1;
      const end = Math.min((page + 1) * pageSize, length);
      return this.translate.instant('paginator.range', { start, end, length });
    };
  }
}