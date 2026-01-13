import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexSecondaryToolbarComponent } from '@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component';
import { VexConfigService } from '@vex/config/vex-config.service';
import { map } from 'rxjs';
import { Setting } from 'src/app/interfaces/setting';
import { ShowCardInformation } from 'src/app/interfaces/ShowCardInformation';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'vex-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss',
   animations: [fadeInUp400ms, fadeInRight400ms, scaleIn400ms, stagger40ms],
    standalone: true,
    imports: [
      MatButtonModule,
      MatIconModule,
      AsyncPipe,
      NgIf,
    ]
})
export class ProfileSettingsComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('fullwidth');
  @Input() data : ShowCardInformation| null = null;
  
  settings: Setting | null = null;
  image$ = this.configService.config$.pipe(
    map((config) => config.sidenav.imageUrl)
  );
  photoUrl: string | undefined = '';

  constructor(
    private dialog: MatDialog,
    private setting_service: SettingsService,
    private snackbar: MatSnackBar,
    private configService: VexConfigService
  ) { 
  }

  getSettingInfo() {
    this.settings = this.setting_service.setting;
  }
  ngOnInit(): void {
    this.getSettingInfo()
  }
}
