import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule, MatPaginator, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  GithubRepository,
  GithubBranch
} from 'src/app/interfaces/GithubRepository';
import { GithubService } from '../../github.service';
import { finalize } from 'rxjs';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { getGithubBranchFormlyFields } from 'src/app/models/github-repository.model';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { CustomPaginatorIntl } from 'src/app/services/CustomPaginatorIntl';

@Component({
  selector: 'vex-github-branches-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatPaginatorModule,
    TranslateModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './github-branches-page.component.html',
  styleUrls: ['./github-branches-page.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }]
})
export class GithubBranchesPageComponent implements OnInit, AfterViewInit {
  repository: GithubRepository | null = null;
  branches: MatTableDataSource<GithubBranch> = new MatTableDataSource<GithubBranch>([]);
  isLoading = false;
  displayedColumns: string[] = ['name', 'protected', 'commit', 'actions'];

  // Pagination serveur
  totalBranches = 0;
  pageSize = 5;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Formly form for creating branches
  showCreateForm = false;
  branchForm = new FormGroup({});
  branchModel: any = {};
  branchFields: FormlyFieldConfig[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private githubService: GithubService,
    private snackbar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.branchFields = getGithubBranchFormlyFields(this.translate);

    // Get repository data from route state or query params
    const navigation = this.location.getState() as any;
    if (navigation && navigation.repository) {
      this.repository = navigation.repository;
      this.loadBranches();
    } else {
      // Alternative: get repository slug from route params
      this.route.paramMap.subscribe(params => {
        const slug = params.get('slug');
        if (slug) {
          // Load repository info if needed
          this.loadRepositoryAndBranches(slug);
        }
      });
    }
  }

  ngAfterViewInit(): void {
    // La gestion de la pagination est faite via l'événement (page) dans le template
  }

  onPageChange(event: PageEvent): void {
    console.log('Page change:', event);
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadBranches();
  }

  loadRepositoryAndBranches(slug: string): void {
    // If you have a method to get repository by slug
    // Otherwise, just load branches with the slug
    this.repository = { slug } as GithubRepository;
    this.loadBranches();
  }

  loadBranches(): void {
    if (!this.repository?.slug) return;

    this.isLoading = true;
    // Page index starts at 0 in Angular Material, but at 1 in the backend
    const backendPage = this.currentPage + 1;

    this.githubService
      .getBranches(this.repository.slug, backendPage, this.pageSize)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.branches.data = response.data;
          // Mettre à jour les informations de pagination
          if (response.pagination) {
            this.totalBranches = response.pagination.total;
          }
        },
        error: (error) => {
          this.showMessage(error.error.message);
        }
      });
  }

  toggleProtection(branch: GithubBranch): void {
    if (!this.repository?.slug) return;

    this.isLoading = true;
    const operation = branch.protected
      ? this.githubService.unprotectBranch(this.repository.slug, branch.name)
      : this.githubService.protectBranch(this.repository.slug, branch.name);

    operation.pipe(finalize(() => (this.isLoading = false))).subscribe({
      next: (updated) => {
        const index = this.branches.data.findIndex((b) => b.name === branch.name);
        if (index !== -1) {
          this.branches.data[index] = updated;
          this.branches.data = [...this.branches.data]; // Trigger change detection
        }
        this.snackbar.open(
          this.translate.instant(
            branch.protected
              ? 'GITHUB.BRANCH.MESSAGES.UNPROTECTED_SUCCESS'
              : 'GITHUB.BRANCH.MESSAGES.PROTECTED_SUCCESS'
          ),
          this.translate.instant('global.cancel'),
          { duration: 3000 }
        );
      },
      error: (error) => {
        this.showMessage(error.error.message);
      }
    });
  }

  deleteBranch(branch: GithubBranch): void {
    if (!this.repository?.slug) return;

    if (
      !confirm(
        this.translate.instant('GITHUB.BRANCH.MESSAGES.DELETE_CONFIRM', {
          name: branch.name
        })
      )
    ) {
      return;
    }

    this.isLoading = true;
    this.githubService
      .deleteBranch(this.repository.slug, branch.name)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.branches.data = this.branches.data.filter((b) => b.name !== branch.name);
          this.snackbar.open(
            this.translate.instant('GITHUB.BRANCH.MESSAGES.DELETED_SUCCESS'),
            this.translate.instant('global.cancel'),
            { duration: 3000 }
          );
        },
        error: (error) => {
          this.snackbar.open(
            error.error?.message ||
              this.translate.instant('GITHUB.BRANCH.MESSAGES.DELETED_ERROR'),
            this.translate.instant('global.cancel'),
            { duration: 5000 }
          );
        }
      });
  }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.branchForm.reset();
      this.branchModel = {};
    }
  }

  createBranch(): void {
    if (!this.branchForm.valid || !this.repository?.slug) return;

    this.isLoading = true;
    this.githubService
      .createBranch(this.repository.slug, this.branchModel)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (branch) => {
          this.branches.data = [...this.branches.data, branch];
          this.showCreateForm = false;
          this.branchForm.reset();
          this.branchModel = {};
          this.snackbar.open(
            this.translate.instant('GITHUB.BRANCH.MESSAGES.CREATED_SUCCESS'),
            this.translate.instant('global.cancel'),
            { duration: 3000 }
          );
        },
        error: (error) => {
          this.snackbar.open(
            error.error?.message ||
              this.translate.instant('GITHUB.BRANCH.MESSAGES.CREATED_ERROR'),
            this.translate.instant('global.cancel'),
            { duration: 5000 }
          );
        }
      });
  }

  viewCommits(branch: GithubBranch): void {
    if (!this.repository?.owner || !this.repository?.name || !branch.name) {
      this.snackbar.open(
        this.translate.instant('GITHUB.MESSAGES.INVALID_REPOSITORY'),
        this.translate.instant('global.cancel'),
        { duration: 3000 }
      );
      return;
    }

    // Open GitHub commits page for this branch in a new tab
    const githubUrl = `https://github.com/${this.repository.owner}/${this.repository.name}/commits/${branch.name}`;
    window.open(githubUrl, '_blank');
  }

  goBack(): void {
    this.location.back();
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 5000 });
    }
  }
}
