import { NgFor, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger80ms } from '@vex/animations/stagger.animation';
import { ParamsPassword } from 'src/app/interfaces/Params-password';
import { passwordMatchValidator } from 'src/app/interfaces/passwordValidators';
import { passwordChangeFormlyFields, passwordFormlyFields, PasswordModel, User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth-service';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { credentialsFormForgot } from 'src/app/interfaces/Credentials-form-forgot';
import { SharedModule } from 'src/app/shared/shared.module';
import { trigger, style, animate, transition } from '@angular/animations';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/pages/ui/confirm-dialog-component/confirm-dialog-component.component';



// Ajoutez cette animation si fadeInUp400ms n'est pas disponible
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
  ])
]);

@Component({
  selector: 'vex-change-password',
  standalone: true,
  templateUrl: './change-password.component.html',
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
    SharedModule
  ]
})
export class ChangePasswordComponent implements OnInit {
  passwordFormGroup: UntypedFormGroup = this.fb.group(
    {
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    },
    { validators: [passwordMatchValidator()] }
  );

  passwordInputType = 'password';
  RestPasswordModel: ParamsPassword | null = null;
  ResendeModel: credentialsFormForgot | null = null;
  params: ParamsPassword | null = null;
  token: string = '';
  email: string = '';
  expires: string = '';
  isTokenValid: boolean = false;
  isLoading: boolean = false;
  isLoading2: boolean = false;
  LoadingFormReset: boolean = true;
  mailmessage: string | undefined = '';
  mailmessagError: string | undefined = '';
  showPasswordForm = false;
  errorMessage = false;
  @Output() onCancel = new EventEmitter<void>();
  constructor(
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService,
    private dialog: MatDialog
  ) {
    // Récupère les paramètres de l'URL (id, email, token)

    // Récupérer le token et l'email depuis l'URL
  }
  togglePasswordForm() {
    this.showPasswordForm = !this.showPasswordForm;
    this.cd.detectChanges(); // Force la détection des changements si nécessaire
  }
  passwordModel: PasswordModel = {
    password: '',
    current_password: '',
    password_confirmation: '',

  };
  PasswordFormGroup = new FormGroup({});
  passwordFields: FormlyFieldConfig[] = passwordChangeFormlyFields;
  ngOnInit() {
  }


  cancel() {
    this.onCancel.emit();
  }

  showPassword() {
    this.passwordInputType = 'text';
    this.cd.markForCheck();
  }

  hidePassword() {
    this.passwordInputType = 'password';
    this.cd.markForCheck();
  }

  async submit() {
    // Vérifiez d'abord que le formulaire est valide
    if (this.PasswordFormGroup.invalid) {
      this.showMessage('Veuillez corriger les erreurs dans le formulaire');
      return;
    }
  
    // Ouvrez la boîte de dialogue de confirmation
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 
        message: 'Êtes-vous sûr de vouloir modifier votre mot de passe ?' 
      }
    });
  
    // Attendez la réponse de l'utilisateur
    const result = await dialogRef.afterClosed().toPromise();
  
    if (result) {
      // Si l'utilisateur a confirmé
      this.isLoading = true;
      this.mailmessage = '';
      this.errorMessage = false;
  
      this.authService.resetPassword(this.passwordModel).subscribe({
        next: (response) => {
          this.mailmessage = response.message;
          this.showMessage(response.message);
          this.isLoading = false;
          this.resetForm();
          setTimeout(() => this.showPasswordForm = false, 2000);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorMessage = true;
          this.mailmessagError = error.error.message;
          this.showMessage(error.error.message);
        }
      });
    }
  }


  showMessage(message: string | undefined) {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }
  resetForm() {
    // Réinitialisation du modèle
    this.passwordModel = {
      password: '',
      current_password: '',
      password_confirmation: ''
    };
  
    // Réinitialisation du formulaire réactif
    this.passwordFormGroup.reset();
    
    // Réinitialisation des états
    this.errorMessage = false;
    this.mailmessagError = '';
    
    
    // Si vous utilisez Formly, réinitialisez aussi son modèle
    this.PasswordFormGroup.reset();
    
    // Force la détection des changements
    this.cd.detectChanges();
  }


}