import { Component, Input } from '@angular/core';
import { VexBreadcrumbComponent } from './vex-breadcrumb/vex-breadcrumb.component';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface BreadcrumbItem {
  label: string;
  link?: string | null; // null or undefined means no link (just text)
}

@Component({
  selector: 'vex-breadcrumbs',
  template: `
    <div class="flex items-center gap-2">
      <vex-breadcrumb>
        <a [routerLink]="['/index']" class="cursor-pointer">
          <mat-icon svgIcon="mat:home" class="icon-sm"></mat-icon>
        </a>
      </vex-breadcrumb>
      <ng-container *ngFor="let crumb of normalizedCrumbs; trackBy: trackByLabel">
        <div class="w-1 h-1 bg-gray-600 rounded-full"></div>
        <vex-breadcrumb>
          <a *ngIf="crumb.link" [routerLink]="crumb.link" class="cursor-pointer">{{ crumb.label }}</a>
          <span *ngIf="!crumb.link" class="cursor-default">{{ crumb.label }}</span>
        </vex-breadcrumb>
      </ng-container>
    </div>
  `,
  standalone: true,
  imports: [VexBreadcrumbComponent, RouterLink, NgFor, NgIf, MatIconModule]
})
export class VexBreadcrumbsComponent {
  @Input() crumbs: (string | BreadcrumbItem)[] = [];

  get normalizedCrumbs(): BreadcrumbItem[] {
    return this.crumbs.map((crumb) => {
      if (typeof crumb === 'string') {
        // String breadcrumbs are non-clickable by default
        // Use BreadcrumbItem object with explicit link if clickable breadcrumb is needed
        return {
          label: crumb,
          link: null
        };
      }
      return crumb;
    });
  }

  trackByLabel(_index: number, item: BreadcrumbItem): string {
    return item.label;
  }
}