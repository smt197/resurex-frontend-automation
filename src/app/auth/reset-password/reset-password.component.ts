import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger80ms } from '@vex/animations/stagger.animation';
import { AuthService } from 'src/app/services/auth-service';
import { ParamsPassword } from 'src/app/interfaces/Params-password';
import { passwordMatchValidator } from 'src/app/interfaces/passwordValidators';
import { passwordFormlyFields, PasswordModel } from 'src/app/interfaces/User';
import { credentialsFormForgot } from 'src/app/interfaces/Credentials-form-forgot';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-reset-password',
  standalone: true,
  templateUrl: './reset-password.component.html',
  animations: [stagger80ms, fadeInUp400ms, scaleIn400ms, fadeInRight400ms],
  styleUrl: '../auth.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    NgIf,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatProgressSpinnerModule,
    FormlyMatCheckboxModule,
    FormlyModule,
    LoadingSpinnerComponent,
    SharedModule
  ]
})
export class ResetPasswordComponent implements OnInit {
  PasswordFormGroup = new FormGroup({});
  passwordModel: PasswordModel = {
    password: '',
    password_confirmation: '',
    email: ''
  };
  passwordFields: FormlyFieldConfig[] = passwordFormlyFields;

  passwordFormGroup: UntypedFormGroup;
  params: ParamsPassword | null = null;

  isTokenValid = false;
  isLoading = false;
  isLoading2 = false;
  LoadingFormReset = true;
  mailmessage: string | undefined = '';

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly snackbar: MatSnackBar,
    private readonly authService: AuthService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.passwordFormGroup = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        password_confirmation: ['', [Validators.required]]
      },
      { validators: [passwordMatchValidator()] }
    );

    this.params = this.getParametersFromUrl();
  }

  ngOnInit(): void {}

  submit(): void {
    this.isLoading = true;
    this.mailmessage = '';

    if (this.passwordFormGroup.invalid || !this.params) {
      this.snackbar.open(
        'Veuillez remplir tous les champs correctement.',
        'Fermer',
        { duration: 5000 }
      );
      this.isLoading = false;
      return;
    }

    const resetPasswordData: ParamsPassword = {
      id: this.params.id,
      email: this.params.email,
      token: this.params.token,
      expires: this.params.expires,
      password: this.passwordModel.password,
      password_confirmation: this.passwordModel.password_confirmation
    };

    this.authService.resetPassword(resetPasswordData).subscribe({
      next: (response) => {
        this.mailmessage = response.message;
        this.showMessage(response.message);
        this.LoadingFormReset = false;
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;

        if (error.error.success === false) {
          this.LoadingFormReset = false;
          this.isTokenValid = true;
          this.mailmessage = error.error.message;
        }

        this.showMessage(error.error.message);
      }
    });
  }

  Resend(): void {
    if (!this.params) return;

    this.isLoading2 = true;
    this.isLoading = true;

    const resendData: credentialsFormForgot = {
      email: this.params.email
    };

    this.authService.forgotPassword(resendData).subscribe({
      next: (response) => {
        this.isLoading2 = false;
        this.isTokenValid = false;
        this.showMessage(response.message);
        this.mailmessage = response.message;
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading2 = false;
        this.isLoading = false;
        this.mailmessage = error.error.message;
        this.showMessage(error.error.message);
      }
    });
  }

  private showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }

  private getParametersFromUrl(): ParamsPassword {
    const snapshot = this.activatedRoute.snapshot.queryParamMap;
    return {
      id: snapshot.get('id') || '',
      email: snapshot.get('email') || '',
      token: snapshot.get('token') || '',
      expires: snapshot.get('expires') || ''
    };
  }
}