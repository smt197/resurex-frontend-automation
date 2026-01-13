import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VexConfigService } from '@vex/config/vex-config.service';
import { SharedModule } from '../shared/shared.module';
import { ChangeLanguagueComponent } from '../shared/change-languague/change-languague.component';
import { CdkTableModule } from "@angular/cdk/table";

@Component({
  selector: 'vex-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    ChangeLanguagueComponent,
    CdkTableModule
  ]
})
export class AuthComponent implements OnInit {
  readonly title$: Observable<string>;
  readonly imageUrl$: Observable<string | File | null>;
  isAdminLogin: boolean = false;
  redirectUrl: string = '/login';

  constructor(
    private readonly router: Router,
    private readonly configService: VexConfigService
  ) {
    this.title$ = this.configService.select((config) => config.sidenav.title);
    this.imageUrl$ = this.configService.config$.pipe(
      map((config) => config.sidenav.imageUrl)
    );
  }

  ngOnInit(): void {
    this.getAdminAuthority();
  }

  register(): void {
    this.router.navigate(['/preview-register']);
  }

  login(): void {
    this.router.navigate([this.redirectUrl]);
  }

  getAdminAuthority(): void {
    // Vérifier si c'est un login admin via les données de la route
    this.isAdminLogin = this.router.url.includes('/admin/login');
    this.isAdminLogin = this.isAdminLogin ?? false;
    this.redirectUrl = this.isAdminLogin ? '/admin/login' : this.redirectUrl;
  }
}
