import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsService } from 'src/app/services/settings.service';
import { finalize } from 'rxjs';
import { githubSettingFormlyFields } from 'src/app/models/github-repository.model';

@Component({
  selector: 'vex-github-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="p-6">
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">
          {{ 'settings.github.title' | translate }}
        </h3>
        <p class="text-gray-600">
          {{ 'settings.github.description' | translate }}
        </p>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>

        <div class="flex gap-4 mt-6">
          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="isLoading || !form.valid"
          >
            <mat-icon *ngIf="!isLoading">save</mat-icon>
            <mat-spinner *ngIf="isLoading" diameter="20"></mat-spinner>
            <span *ngIf="!isLoading">{{ 'global.save' | translate }}</span>
          </button>

          <button
            mat-button
            type="button"
            (click)="onTest()"
            [disabled]="isLoading || !model.github_token || !model.id"
          >
            <mat-icon>check_circle</mat-icon>
            <span *ngIf="!isLoading">{{ 'settings.github.test_connection' | translate }}</span>
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class GithubSettingsComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  isLoading = false;

  constructor(
    private translate: TranslateService,
    private settingsService: SettingsService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initFields();
    this.loadSettings();
  }

  initFields() {
    this.fields = githubSettingFormlyFields(this.translate);
  }

  loadSettings() {
    this.isLoading = true;
    this.settingsService.getGithubSettings()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response: any) => {
          if (response.data && response.data.length > 0) {
            this.model = response.data[0];
          } else {
             this.model = {};
          }
        },
        error: (error) => {
          console.error('Error loading GitHub settings:', error);
          this.snackbar.open(
            this.translate.instant('settings.github.load_error'),
            this.translate.instant('glose.cancel'),
            { duration: 3000 }
          );
        }
      });
  }

  onSubmit() {
    if (!this.form.valid) return;

    this.isLoading = true;
    this.settingsService.updateGithubSettings(this.model)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response) => {
          this.snackbar.open(response.message ?? this.translate.instant('settings.github.save_success'), 'Fermer', {
            duration: 3000
          });
        },
        error: (error) => {
          console.error('Error saving GitHub settings:', error);
          this.snackbar.open(
            this.translate.instant('settings.github.save_error'),
            this.translate.instant('global.cancel'),
            { duration: 3000 }
          );
        }
      });
  }

  onTest() {
    if (!this.model.github_token || !this.model.id) return;

    this.isLoading = true;
    this.settingsService.testGithubConnection(this.model.id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response) => {
          this.snackbar.open(response.message ?? this.translate.instant('settings.github.test_success'), 'Fermer', {
            duration: 3000
          });
        },
        error: (error) => {
          this.snackbar.open(
            this.translate.instant('settings.github.test_error'),
            this.translate.instant('global.cancel'),
            { duration: 3000, panelClass: 'snackbar-error' }
          );
        }
      });
  }
}
