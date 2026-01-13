import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth-service';
import { credentialsFormForgot } from 'src/app/interfaces/Credentials-form-forgot';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'vex-email-not-verified',
  templateUrl: './email-not-verified.component.html',
  styleUrls: ['../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Changé à OnPush car nous utilisons des Signals
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    NgIf,
    NgClass,
    MatStepperModule,
    MatProgressSpinnerModule,
    LoadingSpinnerComponent
  ]
})
export class EmailNotVerifiedComponent implements OnInit {
  // Input signals
  @Input() set mailmessage(value: string | undefined) {
    this._mailmessage.set(value || '');
  }
  get mailmessage(): string | undefined {
    return this._mailmessage();
  }
  private readonly _mailmessage = signal<string>('');

  @Input() set email(value: string) {
    this._email.set(value);
  }
  get email(): string {
    return this._email();
  }
  private readonly _email = signal<string>('');

  @Input() set LoadingForm(value: boolean) {
    this._LoadingForm.set(value);
  }
  get LoadingForm(): boolean {
    return this._LoadingForm();
  }
  private readonly _LoadingForm = signal<boolean>(false);

  @Input() set isSuccess(value: boolean) {
    this._isSuccess.set(value);
  }
  get isSuccess(): boolean {
    return this._isSuccess();
  }
  private readonly _isSuccess = signal<boolean>(false);

  @Input() set sucess(value: boolean) {
    this._sucess.set(value);
  }
  get sucess(): boolean {
    return this._sucess();
  }
  private readonly _sucess = signal<boolean>(false);

  // Component state
  readonly isLoading = signal<boolean>(false);

  // Services
  private readonly authService = inject(AuthService);
  private readonly snackbar = inject(MatSnackBar);

  ngOnInit(): void {}

  resend(): void {
    this.isLoading.set(true);

    const form: credentialsFormForgot = {
      email: this._email()
    };

    this.authService.ResenderVerificationEmail(form).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this._isSuccess.set(true);
        this.showMessage(response.message);

        if (response.message) {
          this._mailmessage.set(response.message);
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.showMessage(error.error.message);
      }
    });
  }

  refresh(): void {
    this._sucess.set(false);
    this._LoadingForm.set(false);
    this._isSuccess.set(false);
    window.location.reload();
  }

  private showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }
}