import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import {
  getMaintenanceSettingsFormlyFields,
  MaintenanceStatus
} from 'src/app/interfaces/Maintenance';
import { ConfirmMaintenanceDialogComponent } from './confirm-maintenance-dialog/confirm-maintenance-dialog.component';

@Component({
  selector: 'vex-maintenance-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    TranslateModule,
    FormlyModule,
    FormlyMaterialModule
  ],
  animations: [
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ])
  ],
  templateUrl: './maintenance-settings.component.html',
  styleUrl: './maintenance-settings.component.scss'
})
export class MaintenanceSettingsComponent implements OnInit {
  private readonly adminAuthService = inject(AdminAuthService);
  private readonly snackbar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  private readonly translate = inject(TranslateService);

  form = new FormGroup({});
  model: MaintenanceStatus = { is_active: false, message: '' };
  fields: FormlyFieldConfig[] = [];

  previousState: boolean = false;
  readonly isLoading = signal<boolean>(false);
  private isDialogOpen = false;

  ngOnInit(): void {
    this.initializeFormlyFields();
    this.loadMaintenanceStatus();
  }

  initializeFormlyFields(): void {
    this.fields = getMaintenanceSettingsFormlyFields(
      this.translate,
      (field: FormlyFieldConfig) => {
        this.onToggleChange(field);
      },
      () => {
        this.toggleMaintenance();
      }
    );
  }

  disableFormFields(): void {
    // Désactiver tous les contrôles du formulaire
    this.form.get('is_active')?.disable({ emitEvent: false });
    this.form.get('message')?.disable({ emitEvent: false });
  }

  enableFormFields(): void {
    // Réactiver tous les contrôles du formulaire
    this.form.get('is_active')?.enable({ emitEvent: false });
    this.form.get('message')?.enable({ emitEvent: false });
  }

  loadMaintenanceStatus(): void {
    this.adminAuthService.getMaintenanceStatus().subscribe({
      next: (response) => {
        this.model = {
          ...this.model,
          is_active: response.is_active,
          message: response.message || ''
        };
        this.previousState = response.is_active;
      },
      error: (error) => {
        console.error('Error loading maintenance status:', error);
        this.snackbar.open('Erreur lors du chargement du statut', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }

  onToggleChange(field: FormlyFieldConfig): void {
    // Éviter d'ouvrir plusieurs dialogs en même temps
    if (this.isDialogOpen) {
      return;
    }

    const willBeActive = field.formControl?.value;

    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(ConfirmMaintenanceDialogComponent, {
      data: { isActive: willBeActive },
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      this.isDialogOpen = false;

      if (confirmed) {
        // Appliquer le changement immédiatement
        this.toggleMaintenance();
      } else {
        // Annuler le changement et revenir à l'état précédent
        if (field.formControl) {
          field.formControl.setValue(this.previousState, { emitEvent: false });
        }
        this.model.is_active = this.previousState;
      }
    });
  }

  toggleMaintenance(): void {
    this.isLoading.set(true);
    this.disableFormFields();

    this.adminAuthService
      .toggleMaintenance({
        is_active: this.model.is_active,
        message: this.model.message || ''
      })
      .subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.enableFormFields();
          this.previousState = this.model.is_active;
          this.snackbar.open(response.message, 'Fermer', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'snackbar-success'
          });
        },
        error: (error) => {
          this.isLoading.set(false);
          this.enableFormFields();
          // Remettre le toggle à l'état précédent
          this.model.is_active = this.previousState;
          this.snackbar.open(error.error?.message || 'Erreur', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'snackbar-error'
          });
        }
      });
  }
}
