import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxOtpInputComponent, NgxOtpInputComponentOptions } from 'ngx-otp-input';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth-service';
import { credentialsFormOtp } from 'src/app/interfaces/Credentials-form-otp';
import { ResponseGlobalServer } from 'src/app/interfaces/Response-globalServer';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'vex-otp',
  standalone: true,
  animations: [fadeInUp400ms],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    CommonModule,
    NgxOtpInputComponent,
    SharedModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './otp.component.html',
  styleUrl: '../auth.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OtpComponent implements OnInit, OnDestroy {
  private static readonly DEFAULT_TIME_LEFT = 300; // 5 minutes
  private static readonly RESEND_LOCK_TIME = 840; // 14 minutes
  private static readonly ATTEMPTS_LOCK_TIME = 120; // 2 minutes
  private static readonly TIME_LEFT_KEY = 'timeLeft';

  @ViewChild('otpInput') otpInput!: NgxOtpInputComponent;

  formOTP = this.fb.group({
    codeOtp: ['']
  });

  readonly otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 5,
    inputMode: 'numeric'
  };

  opt_id = '';
  timeLeft = OtpComponent.DEFAULT_TIME_LEFT;
  isInputDisabled = false;
  isloading = false;
  failedAttempts = 0;
  res = false;
  Errormessage: string | undefined = '';
  isOtpComplete = false;
  response: ResponseGlobalServer | null = null;

  private otpString = '';
  private interval: any;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly cd: ChangeDetectorRef,
    private readonly snackbar: MatSnackBar,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadSavedTimeLeft();
    this.getUserResponse();
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
    localStorage.removeItem(OtpComponent.TIME_LEFT_KEY);
  }

  get minutes(): number {
    return Math.floor(this.timeLeft / 60);
  }

  get seconds(): string {
    return (this.timeLeft % 60).toString().padStart(2, '0');
  }

  onOtpChange(otp: string[]): void {
    this.otpString = otp.join('');
    this.isOtpComplete =
      otp.length === this.otpOptions.otpLength &&
      otp.every((digit) => digit !== '');
  }

  resendOtp(event: Event): void {
    event.preventDefault();
    this.clearTimer();
    this.ResendOTP();
  }

  private loadSavedTimeLeft(): void {
    const savedTimeLeft = localStorage.getItem(OtpComponent.TIME_LEFT_KEY);
    this.timeLeft = savedTimeLeft
      ? parseInt(savedTimeLeft, 10)
      : OtpComponent.DEFAULT_TIME_LEFT;
  }

  private startTimer(): void {
    this.isInputDisabled = false;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        localStorage.setItem(OtpComponent.TIME_LEFT_KEY, this.timeLeft.toString());
        this.cd.detectChanges();
      } else {
        this.handleTimerExpired();
      }
    }, 1000);
  }

  private handleTimerExpired(): void {
    this.isInputDisabled = true;
    this.clearTimer();
    localStorage.removeItem(OtpComponent.TIME_LEFT_KEY);
  }

  private clearTimer(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private resetLock(): void {
    this.clearTimer();
    this.timeLeft = 0;
    localStorage.removeItem(OtpComponent.TIME_LEFT_KEY);
    this.isInputDisabled = true;
    this.failedAttempts = 0;
    this.cd.detectChanges();
  }

  private getUserResponse(): void {
    this.response = this.authService.response;
    if (this.response?.otp_id) {
      this.opt_id = this.response.otp_id;
    }
  }

  private resetForm(): void {
    this.otpInput.reset();
  }

  ResendOTP(): void {
    this.isloading = true;
    this.Errormessage = '';
    this.isInputDisabled = false;
    this.isOtpComplete = false;
    this.resetForm();
    this.cd.detectChanges();

    const form: credentialsFormOtp = {
      otp_id: this.opt_id
    };

    this.authService.ResenderOtp(form).subscribe({
      next: (response) => {
        this.isloading = false;

        if (response.otp_id) {
          this.opt_id = response.otp_id;
        }

        this.timeLeft = OtpComponent.DEFAULT_TIME_LEFT;
        this.isInputDisabled = false;
        this.startTimer();
        this.showMessage(response.message);
        this.cd.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        this.isloading = false;
        this.showMessage(error.error.message);
        this.Errormessage = error.error.message;

        if (error.error.throttle_error) {
          this.lockInputs(OtpComponent.RESEND_LOCK_TIME);
        }

        this.cd.detectChanges();
      }
    });
  }

  sendOTP(): void {
    this.isloading = true;

    const form: credentialsFormOtp = {
      code: this.otpString,
      otp_id: this.opt_id
    };

    this.authService.verificationOtp(form).subscribe({
      next: (response) => {
        this.cd.detectChanges();
        this.timeLeft = 0;
        this.isInputDisabled = true;
        this.router.navigate(['/index']);
        this.showMessage(response.message);
      },
      error: (error: HttpErrorResponse) => {
        this.isloading = false;
        this.Errormessage = error.error.message;

        if (error.error.attempts_exceeded) {
          this.lockInputs(OtpComponent.ATTEMPTS_LOCK_TIME);
        }

        this.showMessage(error.error.message);
      }
    });
  }

  private lockInputs(lockTime: number): void {
    this.res = true;
    this.isInputDisabled = true;
    this.timeLeft = lockTime;

    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.resetLock();
        this.res = false;
        this.cd.detectChanges();
      }
    }, 1000);
  }

  private showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }
}
