import { Component, Input, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BreadcrumbItem, VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-page-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonToggleModule,
    VexBreadcrumbsComponent,
    VexPageLayoutHeaderDirective,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() title: string | undefined = '';
  @Input() breadcrumbs: (string | BreadcrumbItem)[] = ['Dashboard'];
  @Input() showLayoutToggle: boolean = true;
  @Input() layoutControl: any;
}
