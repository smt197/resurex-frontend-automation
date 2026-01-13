import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {
  ModuleGeneratorService,
  ModuleListItem
} from './services/module-generator.service';
import { DeleteElementComponent } from './dialogs/delete-element/delete-element.component';
import { ConfirmDialogComponent } from '../ui/confirm-dialog-component/confirm-dialog-component.component';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { PageHeaderComponent } from '../components/shared/page-header/page-header.component';
import { FormsModule, UntypedFormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchBarComponent } from '../components/shared/search-bar/search-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'vex-module-managers',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    LoadingSpinnerComponent,
    PageHeaderComponent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    SearchBarComponent,
    TranslateModule
  ],
  templateUrl: './module-managers.component.html',
  styleUrls: ['./module-managers.component.scss'],
  animations: [fadeInUp400ms, stagger40ms]
})
export class ModuleManagersComponent implements OnInit {
  modules: ModuleListItem[] = [];
  loading = false;
  title = 'Module Managers';
  noDataMessage = 'No Modules found.';
  displayedColumns: string[] = [
    'moduleName',
    'displayName',
    'fieldsCount',
    'enabled',
    'devMode',
    'actions'
  ];
  layoutCtrl = new UntypedFormControl('fullwidth');
  searchTerm: string = '';
  private searchTerm$ = new Subject<string>();
  searchCtrl = new UntypedFormControl();

  constructor(
    private moduleService: ModuleGeneratorService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.loading = true;
    this.moduleService.getAllModules().subscribe({
      next: (modules) => {
        this.modules = modules;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading modules:', error);
        this.snackBar.open('Error loading modules', 'Close', {
          duration: 3000
        });
        this.loading = false;
      }
    });
  }

  createModule(): void {
    this.router.navigate(['/index/module-managers/create']);
  }

  editModule(module: ModuleListItem): void {
    this.router.navigate(['/index/module-managers/edit', module.slug]);
  }

  deleteModule(module: ModuleListItem): void {
    const dialogRef = this.dialog.open(DeleteElementComponent, {
      width: '500px',
      data: {
        title: 'Delete Module',
        message: `Are you sure you want to delete the module "${module.displayName}"? This will remove all generated files.`,
        element: module
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.loading = true;
        this.moduleService.deleteModule(module.slug).subscribe({
          next: (response) => {
            this.snackBar.open(
              response.message || 'Module deleted successfully!',
              'Close',
              { duration: 3000 }
            );
            this.loadModules();
          },
          error: (error) => {
            console.error('Error deleting module:', error);
            this.snackBar.open(
              error.error?.message || 'Error deleting module',
              'Close',
              { duration: 5000 }
            );
            this.loading = false;
          }
        });
      }
    });
  }

  toggleModule(module: ModuleListItem): void {
    this.moduleService.toggleModule(module.slug, !module.enabled).subscribe({
      next: (response) => {
        this.snackBar.open(
          response.message || 'Module toggled successfully!',
          'Close',
          { duration: 2000 }
        );
        this.loadModules();
      },
      error: (error) => {
        console.error('Error toggling module:', error);
        this.snackBar.open(
          error.error?.message || 'Error toggling module',
          'Close',
          { duration: 3000 }
        );
      }
    });
  }

  regenerateModule(module: ModuleListItem): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        message: `Are you sure you want to regenerate all files for module "${module.displayName}"? This will overwrite existing files.`
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.loading = true;
        this.moduleService.regenerateModule(module.slug).subscribe({
          next: (response) => {
            this.snackBar.open(
              response.message || 'Module regenerated successfully!',
              'Close',
              { duration: 3000 }
            );
            this.loading = false;
          },
          error: (error) => {
            console.error('Error regenerating module:', error);
            this.snackBar.open(
              error.error?.message || 'Error regenerating module',
              'Close',
              { duration: 5000 }
            );
            this.loading = false;
          }
        });
      }
    });
  }

  onSearchChange(term: string): void {
    this.searchTerm$.next(term);
  }
  
  shouldShowSearchBar(): boolean {
    const hasDataOrSearchTerm =
      this.modules.length > 0 || this.searchTerm !== '';
    const isLoadingWithoutSearch = this.loading && this.searchTerm === '';
    return hasDataOrSearchTerm && !isLoadingWithoutSearch;
  }
}
