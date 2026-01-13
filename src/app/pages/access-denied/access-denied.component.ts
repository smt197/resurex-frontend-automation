import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth-service';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'vex-access-denied',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TranslateModule,
    LoadingSpinnerComponent
  ],
  styleUrl: './access-denied.component.scss',
  templateUrl: './access-denied.component.html'
})
export class AccessDeniedComponent {
  loading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  logout(): void {
    this.loading = true;

    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout error:', error);
        this.router.navigate(['/login']);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
