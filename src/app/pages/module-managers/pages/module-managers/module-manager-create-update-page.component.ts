import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  ReactiveFormsModule,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import {
  moduleManagersFormlyFields,
  ModuleField,
  getGitConfigFormlyFields
} from 'src/app/interfaces/Module-managers';
import {
  ModuleGeneratorService,
  GenerateModuleRequest,
  GenerateModuleResponse
} from '../../services/module-generator.service';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { GithubService } from '../../../github/github.service';
import { GithubRepository, GithubBranch } from 'src/app/interfaces/GithubRepository';
import { DeploymentService } from 'src/app/services/deployment.service';
import { DeploymentStatusComponent, DeploymentDialogData } from '../../dialogs/deployment-status/deployment-status.component';

@Component({
  selector: 'vex-module-manager-create-update-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    TranslateModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './module-manager-create-update-page.component.html',
  styleUrls: ['./module-manager-create-update-page.component.scss']
})
export class ModuleManagerCreateUpdatePageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  mode: 'create' | 'update' = 'create';
  slug: string | null = null;
  loading = false;
  saving = false;

  // Form for managing fields
  fieldsForm = new FormGroup({
    fields: new FormArray([])
  });

  // Current step index
  currentStep = 0;
  totalSteps = 4;

  // Git configuration with Formly
  gitForm = new FormGroup({});
  gitModel: any = {
    createBranch: true,
    repositorySlug: '',
    sourceBranch: '',
    branchName: '',
    commitMessage: ''
  };
  gitFields: FormlyFieldConfig[] = [];

  // GitHub data
  githubRepositories: GithubRepository[] = [];
  githubBranches: GithubBranch[] = [];
  loadingRepositories = false;
  loadingBranches = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moduleService: ModuleGeneratorService,
    private githubService: GithubService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private deploymentService: DeploymentService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    // Clone fields to avoid mutation
    this.fields = JSON.parse(JSON.stringify(moduleManagersFormlyFields));

    // Check if we're in edit mode
    this.slug = this.route.snapshot.paramMap.get('slug');

    if (this.slug) {
      this.mode = 'update';
      this.loadModule();
    } else {
      this.mode = 'create';
      // Default values for create mode
      this.model = {
        identifierField: 'id',
        requiresAuth: true,
        devMode: false,
        enabled: true,
        roles: ['user']
      };

      // Load GitHub repositories from resolver or fetch if not available
      const resolvedData = this.route.snapshot.data['githubRepositories'];
      if (resolvedData) {
        this.githubRepositories = resolvedData.data || [];
        this.updateGitFields();
      } else {
        this.loadGithubRepositories();
      }

      this.setupGitForm();
    }
  }

  loadGithubRepositories(): void {
    this.loadingRepositories = true;
    this.githubService.getAllRepositories().subscribe({
      next: (response: any) => {
        this.githubRepositories = response.data || [];
        this.loadingRepositories = false;

        // Update Git fields with repositories
        this.updateGitFields();
      },
      error: (error: any) => {
        console.error('Error loading GitHub repositories:', error);
        this.loadingRepositories = false;
        this.updateGitFields();
      }
    });
  }

  updateGitFields(): void {
    // Generate Git configuration fields dynamically
    this.gitFields = getGitConfigFormlyFields(
      this.githubRepositories,
      this.githubBranches,
      this.loadingRepositories,
      this.loadingBranches
    );
  }

  setupGitForm(): void {
    // Watch for repositorySlug changes to load branches
    this.gitForm.valueChanges.subscribe(() => {
      const repositorySlug = this.gitModel.repositorySlug;

      // Load branches when repository changes
      if (repositorySlug && repositorySlug !== this.gitModel._lastRepositorySlug) {
        this.gitModel._lastRepositorySlug = repositorySlug;
        this.onRepositoryChange(repositorySlug);
      }
    });

    // Watch for module name changes to auto-generate branch name
    this.form.valueChanges.subscribe(() => {
      const moduleName = this.model.moduleName;
      if (moduleName && !this.gitModel._branchNameTouched) {
        this.gitModel.branchName = `module/${moduleName}`;
        this.gitModel.commitMessage = `feat: Initialize ${moduleName} module

Generated files:
- Model, Controller, Request, Resource, Collection
- Migration, Factory, Seeder
- Translations and Menu configuration

Co-Authored-By: Resurex Module Generator <noreply@resurex.com>`;
      }
    });
  }

  onRepositoryChange(repositorySlug: string): void {
    if (!repositorySlug) {
      this.githubBranches = [];
      this.updateGitFields();
      return;
    }

    this.loadingBranches = true;
    this.updateGitFields();

    this.githubService.getBranches(repositorySlug).subscribe({
      next: (response) => {
        this.githubBranches = response.data || [];
        this.loadingBranches = false;

        // Auto-select default branch as source
        const defaultBranch = this.githubBranches.find(b => b.name === 'main' || b.name === 'master');
        if (defaultBranch && !this.gitModel.sourceBranch) {
          this.gitModel.sourceBranch = defaultBranch.name;
        }

        this.updateGitFields();
      },
      error: (error) => {
        console.error('Error loading branches:', error);
        this.githubBranches = [];
        this.loadingBranches = false;
        this.updateGitFields();
      }
    });
  }

  loadModule(): void {
    if (!this.slug) return;

    this.loading = true;
    this.moduleService.getModule(this.slug).subscribe({
      next: (module) => {
        this.model = { ...module };

        // Initialize fields array if exists
        if (this.model.fields && Array.isArray(this.model.fields)) {
          this.model.fields.forEach((field: ModuleField) => {
            this.addFieldWithData(field);
          });
        }

        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading module:', error);
        this.snackBar.open('Error loading module details', 'Close', {
          duration: 3000
        });
        this.loading = false;
        this.router.navigate(['/index/module-managers']);
      }
    });
  }

  get fieldsArray(): FormArray {
    return this.fieldsForm.get('fields') as FormArray;
  }

  addField(): void {
    const fieldGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]*$/)
      ]),
      type: new FormControl('string'),
      required: new FormControl(false)
    });
    this.fieldsArray.push(fieldGroup);
  }

  addFieldWithData(field: ModuleField): void {
    const fieldGroup = new FormGroup({
      name: new FormControl(field.name || '', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]*$/)
      ]),
      type: new FormControl(field.type || 'string'),
      required: new FormControl(field.required || false)
    });
    this.fieldsArray.push(fieldGroup);
  }

  removeField(index: number): void {
    this.fieldsArray.removeAt(index);
  }

  save(): void {
    // Mark all fields as touched to show validation errors
    this.form.markAllAsTouched();
    this.fieldsForm.markAllAsTouched();

    if (this.form.valid && this.fieldsForm.valid) {
      this.saving = true;

      // Add fields from fieldsForm to model
      const fields = this.fieldsArray.value as ModuleField[];
      const moduleData = {
        ...this.model,
        fields: fields.filter((f: ModuleField) => f.name && f.name.trim())
      };

      if (this.mode === 'create') {
        this.createModule(moduleData);
      } else {
        this.updateModule(moduleData);
      }
    }
  }

  createModule(moduleData: any): void {
    const request: GenerateModuleRequest = {
      moduleName: moduleData.moduleName,
      displayName: moduleData.displayName,
      displayNameSingular: moduleData.displayNameSingular,
      resourceType: moduleData.resourceType || moduleData.moduleName,
      identifierField: moduleData.identifierField || 'id',
      identifierType:
        moduleData.identifierField === 'slug' ? 'string' : 'number',
      requiresAuth: moduleData.requiresAuth !== false,
      routePath: moduleData.moduleName,
      fields: moduleData.fields || [],
      devMode: moduleData.devMode || false,
      roles: moduleData.roles || ['user'],
      actions: moduleData.actions,
      gitConfig: this.gitModel.createBranch ? {
        createBranch: true,
        repositorySlug: this.gitModel.repositorySlug || '',
        sourceBranch: this.gitModel.sourceBranch || undefined,
        branchName: this.gitModel.branchName || undefined,
        commitMessage: this.gitModel.commitMessage || undefined
      } : undefined
    };

    this.moduleService.generateModule(request).subscribe({
      next: (response) => {
        this.snackBar.open(
          response.message || 'Module generated successfully!',
          'Close',
          { duration: 3000 }
        );
        this.saving = false;

        // If deployment was triggered, show the deployment status dialog
        if (response.data?.deployment_triggered && this.gitModel.createBranch) {
          this.openDeploymentDialog(
            response.data.module_slug || moduleData.moduleName,
            moduleData.displayName,
            this.gitModel.branchName
          );
        } else {
          this.router.navigate(['/index/module-managers']);
        }
      },
      error: (error) => {
        console.error('Error generating module:', error);
        this.snackBar.open(
          error.error?.message || 'Error generating module',
          'Close',
          { duration: 5000 }
        );
        this.saving = false;
      }
    });
  }

  private openDeploymentDialog(moduleSlug: string, moduleName: string, branchName: string): void {
    const dialogData: DeploymentDialogData = {
      moduleSlug,
      moduleName,
      branchName
    };

    const dialogRef = this.dialog.open(DeploymentStatusComponent, {
      width: '500px',
      disableClose: true,
      data: dialogData
    });

    // Subscribe to deployment completion
    this.deploymentService.deploymentCompleted$
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        if (status.module_slug === moduleSlug) {
          if (status.status === 'success') {
            this.snackBar.open('Deployment completed successfully!', 'Close', {
              duration: 5000,
              panelClass: 'success-snackbar'
            });
          } else if (status.status === 'failed') {
            this.snackBar.open(
              `Deployment failed: ${status.message || 'Unknown error'}`,
              'Close',
              { duration: 8000, panelClass: 'error-snackbar' }
            );
          }
        }
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.continueInBackground) {
        this.snackBar.open(
          'Deployment continues in background. You will be notified when complete.',
          'Close',
          { duration: 5000 }
        );
      }
      this.router.navigate(['/index/module-managers']);
    });
  }

  updateModule(moduleData: any): void {
    if (!this.slug) return;

    this.moduleService.updateModule(this.slug, moduleData).subscribe({
      next: (response) => {
        this.snackBar.open(
          response.message || 'Module updated successfully!',
          'Close',
          { duration: 3000 }
        );
        this.saving = false;
        this.router.navigate(['/index/module-managers']);
      },
      error: (error) => {
        console.error('Error updating module:', error);
        this.snackBar.open(
          error.error?.message || 'Error updating module',
          'Close',
          { duration: 5000 }
        );
        this.saving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/index/module-managers']);
  }

  getFieldIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      string: 'text_fields',
      email: 'email',
      password: 'lock',
      number: 'numbers',
      boolean: 'toggle_on',
      Date: 'calendar_today',
      File: 'upload_file',
      textarea: 'notes',
      'quill-editor': 'article'
    };
    return iconMap[type] || 'label';
  }

  getSelectedRepoName(): string {
    const repoSlug = this.gitModel.repositorySlug;
    if (!repoSlug) return '';
    const repo = this.githubRepositories.find(r => r.slug === repoSlug);
    return repo?.full_name || repoSlug;
  }

  // Navigation methods
  nextStep(): void {
    if (this.canProceedToNextStep()) {
      this.currentStep++;
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = this.currentStep;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = this.currentStep;
      }
    }
  }

  onTabChange(index: number): void {
    this.currentStep = index;
  }

  canProceedToNextStep(): boolean {
    switch (this.currentStep) {
      case 0: // Git Configuration step (only in create mode)
        if (this.mode === 'update') return true;
        // If not pushing to GitHub, can proceed
        if (!this.gitModel.createBranch) return true;
        // Otherwise validate required Git fields
        return this.gitForm.valid &&
               !!this.gitModel.repositorySlug &&
               !!this.gitModel.branchName &&
               !!this.gitModel.commitMessage;
      case 1: // Basic Info step
        return this.form.valid;
      case 2: // Fields step
        return this.fieldsForm.valid && this.fieldsArray.length > 0;
      case 3: // Summary step
        return true;
      default:
        return false;
    }
  }

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  isLastStep(): boolean {
    return this.currentStep === this.totalSteps - 1;
  }

  getStepValidationMessage(): string {
    switch (this.currentStep) {
      case 0:
        return 'Please configure Git branch settings';
      case 1:
        return 'Please fill in all required fields in Basic Info';
      case 2:
        return 'Please add at least one field with valid information';
      default:
        return '';
    }
  }
}
