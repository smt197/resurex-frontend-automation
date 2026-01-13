import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '@vex/utils/track-by';
import { VexPopoverRef } from '@vex/components/vex-popover/vex-popover-ref';
import { Router, RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth-service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { WebsocketService } from 'src/app/services/websocket.service';
import { User } from 'src/app/interfaces/User';
import { Authority } from 'src/static-data/authority.constants';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: string;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    NgFor,
    MatRippleModule,
    RouterLink,
    NgClass,
    NgIf,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    SharedModule,
    TranslateModule
  ]
})
export class ToolbarUserDropdownComponent implements OnInit {
  isPartnerOnline$: Observable<boolean> = of(false);
  items: MenuItem[] = [
    {
      id: '1',
      icon: 'mat:chat',
      label: 'profile.my_inbox',
      description: 'profile.my_inbox_description',
      colorClass: 'text-teal-600',
      route: '/index/chat'
    },
    {
      id: '2',
      icon: 'mat:settings',
      label: 'profile.parameters',
      description: 'profile.parameters_description',
      colorClass: 'text-primary-600',
      route: '/index/settings'
    },
    {
      id: '3',
      icon: 'mat:notifications',
      label: 'profile.notifications',
      description: 'profile.notifications_description',
      colorClass: 'text-amber-600',
      route: '/index/notifications'
    },
  ];

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: 'mat:check_circle',
      colorClass: 'text-green-600'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: 'mat:offline_bolt',
      colorClass: 'text-gray-600'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];
  user: User | null = null;

  trackById = trackById;

  constructor(
    private cd: ChangeDetectorRef,
    private popoverRef: VexPopoverRef<ToolbarUserDropdownComponent>,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    private websocketService: WebsocketService
  ) {
    if (authService.user) {
      this.isPartnerOnline$ = this.websocketService.isUserOnline(
        authService.user.id
      );
    }
  }

  ngOnInit() {
    this.getUserInfo();
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  close() {
    this.popoverRef.close();

    // Vérifier si l'utilisateur est admin avant la déconnexion
    const isAdmin = this.authService.user?.roles?.some(role => role.name === Authority.ADMIN);

    this.authService.logout().subscribe({
      next: (response) => {
        this.showMessage(response.message);

        // Rediriger vers /login/admin si c'est un admin, sinon vers /login
        const redirectUrl = isAdmin ? '/admin/login' : '/login';
        this.router.navigate([redirectUrl]);
      },
      error: (error: HttpErrorResponse) => {
        this.showMessage(error.error.message);
      }
    });
  }

  showMessage(params: string | undefined) {
    if (params) {
      this.snackbar.open(params, 'Fermer', { duration: 10000 });
    }
  }

  getUserInfo() {
    this.user = this.authService.user;
  }

  navigateAndClose() {
    this.popoverRef.close();
  }
}
