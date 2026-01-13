import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { map, Observable, shareReplay } from 'rxjs';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger80ms } from '@vex/animations/stagger.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { AuthService } from 'src/app/services/auth-service';
import {
  accountFormlyFields,
  AccountModel,
  confirmFormForlyFields,
  ConfirmModel,
  passwordFormlyFields,
  PasswordModel,
  User
} from 'src/app/interfaces/User';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss'],
  animations: [stagger80ms, fadeInUp400ms, scaleIn400ms, fadeInRight400ms],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyMatFormFieldModule,
    FormlyMatInputModule,
    MatButtonModule,
    MatTooltipModule,
    NgIf,
    NgFor,
    MatIconModule,
    FormlyMatCheckboxModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    FormlyModule,
    AsyncPipe,
    LoadingSpinnerComponent,
    SharedModule
  ]
})
export class RegisterComponent {
  accountFormGroup = new FormGroup({});
  accountModel: AccountModel = {
    first_name: '',
    last_name: '',
    email: ''
  };
  accountfields: FormlyFieldConfig[] = accountFormlyFields;

  PasswordFormGroup = new FormGroup({});
  passwordModel: PasswordModel = {
    password: '',
    password_confirmation: ''
  };
  passwordFields: FormlyFieldConfig[] = passwordFormlyFields;

  confirmFormGroup = new FormGroup({});
  confirmModel: ConfirmModel = {
    confirmed: false
  };
  confirmFormFields: FormlyFieldConfig[] = confirmFormForlyFields;

  user: User | null = null;
  isLoading = false;
  errorMessage: User[] = [];
  sucess = false;
  mailmessage: string | undefined = '';
  isSmallScreen$: Observable<boolean>;

  constructor(
    private readonly snackbar: MatSnackBar,
    public readonly authService: AuthService,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.isSmallScreen$ = this.breakpointObserver
      .observe(['(max-width: 767.98px)'])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }

  submit(): void {
    this.user = {
      first_name: this.accountModel.first_name,
      last_name: this.accountModel.last_name,
      email: this.accountModel.email,
      confirmed: this.confirmModel.confirmed,
      password: this.passwordModel.password,
      password_confirmation: this.passwordModel.password_confirmation
    };

    this.isLoading = true;
    this.authService.register(this.user).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.sucess = true;
        this.showMessage(response.message);
        this.mailmessage = response.mailmessage;
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorMessage = [];
        this.processError(error);
      }
    });
  }

  private processError(response: HttpErrorResponse): void {
    this.errorMessage = [];
    if (response.status === 400 || response.status === 422) {
      this.errorMessage.push(response.error.errors);
    }
  }

  private showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }
}
