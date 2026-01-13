import { NgClass, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth-service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmDialogComponent } from '../confirm-dialog-component/confirm-dialog-component.component';


@Component({
  selector: 'vex-otp-status',
  standalone: true,
  imports: [ 
    NgClass,
      NgIf,
      MatSnackBarModule,
      MatSlideToggleModule,
      MatProgressSpinnerModule,
      SharedModule,
      TranslateModule],
  templateUrl: './otp-status.component.html',
  styleUrl: './otp-status.component.scss'
})
export class OtpStatusComponent implements OnInit {
  status: boolean | undefined = false;
  isLoading: boolean = false;
  private dialog = inject(MatDialog);
    constructor(
  
      private authService: AuthService,
     private snackbar: MatSnackBar,
      private router: Router,
      
      
    ) {}

    getResponseInfo() {
    this.status = this.authService.response?.otp_required;
  }
   ngOnInit() {
    this.getResponseInfo();
  }

  async onToggleChange(event: MatSlideToggleChange) {
    // Annule le changement immédiat du toggle
    event.source.checked = !event.checked;

    // Ouvre la boîte de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { 
        message: event.checked 
          ? 'Voulez-vous activer la vérification en deux étapes ?' 
          : 'Voulez-vous désactiver la vérification en deux étapes ?'
      }
    });

    // Attend la réponse
    const result = await dialogRef.afterClosed().toPromise();

    if (result) {
      this.processToggleChange(event.checked);
    }
  }

  private processToggleChange(newStatus: boolean) {
    this.isLoading = true;
    
    this.authService.UpdateOtp({ otp_enabled: newStatus }).subscribe({
      next: (response) => {
        this.status = newStatus;
        this.isLoading = false;
        this.showMessage(response.message);
        
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.showMessage(error.error.message);
      }
    });
  }
    
      showMessage(params: string | undefined) {
        if (params) {
          this.snackbar.open(params, 'Fermer', { duration: 10000 });
        }
      }
}