import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { BnNgIdleService } from 'bn-ng-idle';
import { catchError, map, Observable, of, Subscription } from 'rxjs';
import {
  VexColorScheme,
  VexConfigName
} from '@vex/config/vex-config.interface';
import { VexConfigService } from '@vex/config/vex-config.service';
import { SettingsService } from './services/settings.service';
import { AuthService } from './services/auth-service';
import { JobProgressMonitorComponent } from './pages/components/shared/job-progress-monitor/job-progress-monitor.component';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, JobProgressMonitorComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly configService: VexConfigService,
    private readonly settingsService: SettingsService,
    private readonly bnIdle: BnNgIdleService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar
  ) {
    this.configureTheme();
  }

  ngOnInit(): void {
    this.getSettings();
    this.manageSession();
    this.authService.initBlockStatusCheck();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private manageSession(): void {
    const sessionSub = this.getUserSessionTimeout().subscribe((seconds) => {
      if (seconds) {
        const idleSub = this.bnIdle
          .startWatching(seconds)
          .subscribe((isTimedOut: boolean) => {
            if (isTimedOut) {
              this.logout();
              idleSub.unsubscribe();
              sessionSub.unsubscribe();
            }
          });

        this.subscriptions.push(sessionSub, idleSub);
      }
    });
  }

  private configureTheme(): void {
    this.configService.updateConfig({
      id: VexConfigName.ares,
      name: 'Ares',
      bodyClass: 'vex-layout-ares',
      imgSrc: '/vex-landing.visurel.com/assets/img/layouts/ares.png',
      direction: 'ltr',
      showSettingTheme: {
        visible: false
      },
      style: {
        colorScheme: VexColorScheme.LIGHT,
        button: {
          borderRadius: undefined
        }
      },
      layout: 'horizontal',
      boxed: false,
      sidenav: {
        title: this.settingsService.setting?.site_name,
        site_subtitle:
          this.settingsService.setting?.site_subtitle || 'site description',
        description:
          this.settingsService.setting?.site_description || 'site description',
        imageUrl:
          this.settingsService.setting?.site_logo || 'assets/img/logo/logo.svg',
        showCollapsePin: true,
        user: {
          visible: false
        },
        search: {
          visible: false
        },
        state: 'expanded'
      },
      toolbar: {
        fixed: true,
        user: {
          visible: true
        },
        search: {
          visible: false
        },
        panel: {
          visible: false
        }
      },
      footer: {
        visible: false,
        fixed: true
      }
    });
  }

  private getUserSessionTimeout(): Observable<number> {
    return this.authService.getuserItemsinfos().pipe(
      map((user) => user?.session_user_second || 0)
    );
  }

  private showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', { duration: 10000 });
    }
  }

  private logout(): void {
    this.authService.logout().subscribe({
      next: (response) => {
        this.showMessage(response.message);
        this.router.navigate(['/login']);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erreur de déconnexion:', error.error.message);
        window.location.reload();
      }
    });
  }

  private getSettings(): void {
    this.settingsService
      .getSettings()
      .pipe(
        map((response) => {
          if (response) {
            this.settingsService.setting = response;
            this.configureTheme();
          }
          return response;
        }),
        catchError(() => of(null))
      )
      .subscribe();
  }
}
