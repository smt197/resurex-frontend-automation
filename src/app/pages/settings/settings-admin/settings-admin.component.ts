import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth-service';
import { Authority } from 'src/static-data/authority.constants';
import { BackupComponent } from '../../backup/backup.component';
import { MaintenanceSettingsComponent } from '../../ui/maintenance-settings/maintenance-settings.component';
import { GithubSettingsComponent } from '../github-settings/github-settings.component';

export interface AdminCard {
  icon: string;
  title: string;
  description: string;
  component: any;
}

@Component({
  selector: 'vex-settings-admin',
  standalone: true,
  imports: [TranslateModule],
  template: '',
  styleUrls: []
})
export class SettingsAdminComponent {
  @Input() allCards: AdminCard[] = [];

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {}

  /**
   * Filtre les cartes pour afficher uniquement celles accessibles aux admins
   * @returns Tableau des cartes filtrées pour les admins
   */
  getAdminCards(): AdminCard[] {
    if (!this.isAdmin()) {
      return [];
    }

    // Cartes spécifiques aux admins
    const adminOnlyCards = this.allCards.filter(card =>
      this.isAdminCard(card)
    );

    return adminOnlyCards;
  }

  /**
   * Vérifie si l'utilisateur actuel est un admin
   */
  private isAdmin(): boolean {
    const user = this.authService.user;
    if (!user || !user.roles) return false;
    return user.roles.some((role) => role.name === Authority.ADMIN);
  }

  /**
   * Vérifie si une carte est réservée aux admins
   * @param card La carte à vérifier
   */
  private isAdminCard(card: AdminCard): boolean {
    // Identifie les cartes réservées aux admins par leur composant
    const adminComponents = [
      BackupComponent,
      MaintenanceSettingsComponent,
      GithubSettingsComponent
    ];

    return adminComponents.includes(card.component);
  }

  /**
   * Retourne toutes les cartes admin disponibles
   */
  getAllAdminCards(): AdminCard[] {
    return [
      {
        icon: 'code',
        title: this.translate.instant('card.github.title'),
        description: this.translate.instant('card.github.description'),
        component: GithubSettingsComponent
      },
      {
        icon: 'build',
        title: this.translate.instant('card.maintenance.title'),
        description: this.translate.instant('card.maintenance.description'),
        component: MaintenanceSettingsComponent
      },
      {
        icon: 'backup',
        title: this.translate.instant('card.backup.title'),
        description: this.translate.instant('card.backup.description'),
        component: BackupComponent
      }
    ];
  }
}
