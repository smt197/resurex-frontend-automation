import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth-service';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { SettingsService } from 'src/app/services/settings.service';
import { credentialsFormLogin } from 'src/app/interfaces/Credentials-form-login';
import { loginFormForlyFields } from 'src/app/interfaces/User';
import { Setting } from 'src/app/interfaces/setting';
import { EmailNotVerifiedComponent } from '../email-not-verified/email-not-verified.component';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { switchMap } from 'rxjs';
import { getAndClearRedirectUrl } from 'src/app/guards/auth.guard';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormlyModule,
    FormlyMatInputModule,
    FormlyMatCheckboxModule,
    FormlyMatToggleModule,
    EmailNotVerifiedComponent,
    LoadingSpinnerComponent,
    AsyncPipe,
    SharedModule
  ]
})
export class LoginComponent implements OnInit {
  // Services injectés
  private readonly router = inject(Router);
  private readonly snackbar = inject(MatSnackBar);
  private readonly settingsService = inject(SettingsService);
  public readonly authService = inject(AuthService);
  private readonly adminAuthService = inject(AdminAuthService);

  // Signals pour l'état du composant
  readonly inputType = signal<string>('password');
  readonly visible = signal<boolean>(false);
  readonly isLoading = signal<boolean>(false);
  readonly isSuccess = signal<boolean>(false);
  readonly errorMessage = signal<string[]>([]);
  readonly sucess = signal<boolean>(false);
  readonly LoadingForm = signal<boolean>(false);
  readonly mailmessage = signal<string | undefined>('');

  settings: Setting | null = null;
  isAdminLogin: boolean = false;

  // Formulaire
  loginFormGroup = new FormGroup({});
  loginModel: credentialsFormLogin = {
    email: '',
    password: '',
    remember_me: false
  };

  loginfields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    this.getSettingInfo();
    this.getAdminAuthority();
  }

  getAdminAuthority(): void {
    // Vérifier si c'est un login admin via les données de la route
      this.isAdminLogin = this.router.url.includes('/admin/login');
    console.log(this.isAdminLogin);
    
    this.loginfields = loginFormForlyFields.map((field) => {
      if (this.isAdminLogin && field.fieldGroupClassName) {
        const newField = { ...field };
        if (newField.fieldGroup) {
          newField.fieldGroup = newField.fieldGroup.filter(
            (innerField) => innerField.key !== 'forgotpasswordurl'
          );
        }
        return newField;
      }
      return field;
    });
  }

  getEmail(): string {
    return this.loginModel.email;
  }

  private getSettingInfo(): void {
    this.settings = this.settingsService.setting;
  }

  send(): void {
    this.isLoading.set(true);

    // Si c'est un login admin, utiliser le service admin
    if (this.isAdminLogin) {
      this.sendLoginWithAdmin();
      return;
    }

    // Sinon, utiliser le service d'authentification normal
    this.authService.login(this.loginModel).subscribe({
      next: (response) => {
        this.showMessage(response.message);

        if (response.otp_required) {
          this.router.navigate(['otp']);
        } else {
          // Charger les settings avant de rediriger
          this.settingsService.getSettings().subscribe({
            next: (settings) => {
              this.settingsService.setting = settings;
              this.redirectAfterLogin();
            },
            error: () => {
              // Même en cas d'erreur de chargement des settings, rediriger
              this.router.navigate(['index']).then(() => {
                window.location.reload();
              });
              this.redirectAfterLogin();
            }
          });
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.showMessage(error.error.message);
        this.mailmessage.set(error.error.message);
        console.error('Erreur de connexion:', error.error);

        if (error.error.email_verified !== undefined) {
          this.LoadingForm.set(true);
          this.sucess.set(true);
        }
      }
    });
  }

  // redirectAfterLogin(): void {
  //   this.isLoading.set(true);
  //   this.router.navigate(['index']);
  // }

  redirectAfterLogin(): void {
    this.isLoading.set(true);
    // Récupérer l'URL sauvegardée ou utiliser 'index' par défaut
    const redirectUrl = getAndClearRedirectUrl();
    const targetUrl = redirectUrl || 'index';
    this.router.navigateByUrl(targetUrl);
  }

  private sendLoginWithAdmin(): void {
    // Récupérer le token CSRF puis effectuer la connexion admin
    this.adminAuthService
      .getCsrfToken()
      .pipe(switchMap(() => this.adminAuthService.login(this.loginModel)))
      .subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.snackbar.open(response.message, 'Fermer', { duration: 3000 });
          this.redirectAfterLogin();
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading.set(false);
          this.snackbar.open(
            error.error.message || 'Erreur de connexion',
            'Fermer',
            { duration: 5000 }
          );
        }
      });
  }

  Refrech(): void {
    this.isLoading.set(false);
    this.sucess.set(false);
    this.LoadingForm.set(false);
    this.loginModel = {
      email: '',
      password: '',
      remember_me: false
    };

    this.router.navigate(['/login']);
  }

  Resend(): void {
    this.isLoading.set(true);
    this.LoadingForm.set(false);

    this.authService.ResenderVerificationEmail(this.loginModel).subscribe({
      next: (response) => {
        this.showMessage(response.message);
        this.mailmessage.set(response.message);
      },
      error: (error: HttpErrorResponse) => {
        this.showMessage(error.error.message);
        console.error("Erreur de renvoi d'email:", error.error);
      }
    });
  }

  toggleVisibility(): void {
    const currentVisible = this.visible();
    this.visible.set(!currentVisible);
    this.inputType.set(currentVisible ? 'password' : 'text');
  }

  private showMessage(params: string | undefined): void {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 10000 });
    }
  }
}
