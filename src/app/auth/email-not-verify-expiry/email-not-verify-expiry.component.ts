import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth-service';
import { credentialsFormForgot } from 'src/app/interfaces/Credentials-form-forgot';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'vex-email-not-verify-expiry',
  templateUrl: './email-not-verify-expiry.component.html',
  styleUrls: ['../auth.component.scss', './email-not-verify-expiry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    MatProgressSpinnerModule,
    LoadingSpinnerComponent,
    TranslateModule
  ]
})
export class EmailNotVerifyExpiryComponent {
  // Component state signals
  readonly isLoading = signal<boolean>(false);
  readonly isSuccess = signal<boolean>(false);
  readonly message = signal<string>('Your verification link has expired. Please enter your email to receive a new one.');

  // Form
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  // Services
  private readonly authService = inject(AuthService);
  private readonly snackbar = inject(MatSnackBar);
  private readonly router = inject(Router);

  get emailControl(): FormControl {
    return this.emailForm.get('email') as FormControl;
  }

  get emailError(): string {
    if (this.emailControl.hasError('required')) {
      return 'Email is required';
    }
    if (this.emailControl.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  resendVerification(): void {
    // Marquer tous les champs comme touchés pour afficher les erreurs
    this.emailForm.markAllAsTouched();

    if (this.emailForm.invalid) {
      return;
    }

    this.isLoading.set(true);

    const form: credentialsFormForgot = {
      email: this.emailControl.value || ''
    };

    this.authService.ResenderVerificationEmail(form).subscribe({
      next: (response) => {
        console.log('Response from resendVerification:', response);
        this.isLoading.set(false);
        this.isSuccess.set(true);
        this.message.set(response.message || 'A new verification link has been sent to your email address.');
        this.showMessage(response.message || 'Verification email sent successfully!');

        // Désactiver le formulaire après l'envoi réussi
        this.emailForm.disable();
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        const errorMessage = error.error?.message || 'Failed to send verification email. Please try again.';
        this.showMessage(errorMessage, true);
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  refresh(): void {
    window.location.reload();
  }

  private showMessage(message: string, isError: boolean = false): void {
    this.snackbar.open(message, 'Close', {
      duration: isError ? 10000 : 5000,
      panelClass: isError ? ['error-snackbar'] : []
    });
  }
}
