import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth-service';
import { credentialsFormForgot } from 'src/app/interfaces/Credentials-form-forgot';
import { forgotFormFomlyfields } from 'src/app/interfaces/User';
import { EmailNotVerifiedComponent } from '../email-not-verified/email-not-verified.component';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../auth.component.scss'],
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatProgressBarModule,
    EmailNotVerifiedComponent,
    MatProgressSpinnerModule,
    FormlyModule,
    FormlyMatInputModule,
    FormlyMatCheckboxModule,
    FormlyMatToggleModule,
    LoadingSpinnerComponent,
    SharedModule
  ]
})
export class ForgotPasswordComponent implements OnInit {
  forgotFormGroup = new FormGroup({});
  forgotModel: credentialsFormForgot = {
    email: ''
  };
  forgotfields: FormlyFieldConfig[] = forgotFormFomlyfields;

  sucess = false;
  LoadingForm = false;
  isSuccess = false;
  mailmessage: string | undefined = '';
  formMessage = false;
  isLoading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly snackbar: MatSnackBar,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  getEmail(): string {
    return this.forgotModel.email || '';
  }

  send(): void {
    this.isLoading = true;
    this.mailmessage = '';

    this.authService.forgotPassword(this.forgotModel).subscribe({
      next: (response) => {
        this.showMessage(response.message);
        this.formMessage = true;
        this.sucess = true;
        this.cd.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.mailmessage = error.error.message;
        this.showMessage(error.error.message);

        if (error.error.email_verified !== undefined) {
          this.LoadingForm = true;
        }

        this.cd.detectChanges();
      }
    });
  }

  refresh(): void {
    this.sucess = false;
    this.LoadingForm = false;
    this.isSuccess = false;
    window.location.reload();
  }

  private showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }
}