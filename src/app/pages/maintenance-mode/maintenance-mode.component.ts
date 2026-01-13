import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { Authority } from 'src/static-data/authority.constants';

@Component({
  selector: 'vex-maintenance-mode',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TranslateModule,
    LoadingSpinnerComponent
  ],
  templateUrl: './maintenance-mode.component.html',
  styleUrl: './maintenance-mode.component.scss'
})
export class MaintenanceModeComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly adminAuthService = inject(AdminAuthService);
  private readonly router = inject(Router);

  maintenanceMessage: string = 'Application en maintenance. Veuillez réessayer plus tard.';
  isCheckingAuth: boolean = true;

  ngOnInit(): void {
    // Vérification immédiate de l'authentification en mémoire
    const user = this.authService.user;
    if (user && user.roles?.some(role => role.name === Authority.ADMIN)) {
      // Admin déjà authentifié : redirection immédiate
      this.router.navigate(['/index']);
      return;
    }

    // Vérifier avec le serveur si l'admin est connecté
    this.authService.authenticate().subscribe({
      next: (response) => {
        const user = response.user;
        if (user && user.roles?.some(role => role.name === Authority.ADMIN)) {
          // Admin connecté : rediriger vers /index
          this.router.navigate(['/index']);
          return;
        }
        // Utilisateur normal : charger le message de maintenance
        this.isCheckingAuth = false;
        this.loadMaintenanceMessage();
      },
      error: () => {
        // En cas d'erreur, charger le message de maintenance
        this.isCheckingAuth = false;
        this.loadMaintenanceMessage();
      }
    });
  }

  private loadMaintenanceMessage(): void {
    this.adminAuthService.getMaintenanceStatus().subscribe({
      next: (response) => {
        if (response.message) {
          this.maintenanceMessage = response.message;
        }
      }
    });
  }

  goToAdminLogin(): void {
    this.router.navigate(['/login/admin']);
  }
}
