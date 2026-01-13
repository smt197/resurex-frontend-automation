import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth-service';
import { Authority } from 'src/static-data/authority.constants';
import { ChangePasswordComponent } from 'src/app/auth/change-password/change-password.component';
import { ChangeLanguagueComponent } from 'src/app/shared/change-languague/change-languague.component';
import { OtpStatusComponent } from '../../ui/otp-status/otp-status.component';

export interface UserCard {
  icon: string;
  title: string;
  description: string;
  component: any;
}

@Component({
  selector: 'vex-settings-user',
  standalone: true,
  imports: [TranslateModule],
  template: '',
  styleUrls: []
})
export class SettingsUserComponent {
  @Input() allCards: UserCard[] = [];

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {}

  /**
   * Filtre les cartes pour afficher uniquement celles accessibles aux utilisateurs
   * @returns Tableau des cartes filtrées pour les utilisateurs
   */
  getUserCards(): UserCard[] {
    if (!this.isUser() && !this.isAdmin()) {
      return [];
    }

    // Cartes accessibles à tous les utilisateurs (y compris admins)
    const userCards = this.allCards.filter(card =>
      this.isUserCard(card)
    );

    return userCards;
  }

  /**
   * Vérifie si l'utilisateur actuel est un utilisateur standard
   */
  private isUser(): boolean {
    const user = this.authService.user;
    if (!user || !user.roles) return false;
    return user.roles.some((role) => role.name === Authority.USER);
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
   * Vérifie si une carte est accessible aux utilisateurs standards
   * @param card La carte à vérifier
   */
  private isUserCard(card: UserCard): boolean {
    // Identifie les cartes accessibles à tous les utilisateurs
    const userComponents = [
      ChangeLanguagueComponent,
      ChangePasswordComponent,
      OtpStatusComponent
    ];

    return userComponents.includes(card.component);
  }

  /**
   * Retourne toutes les cartes utilisateur disponibles
   */
  getAllUserCards(): UserCard[] {
    return [
      {
        icon: 'language',
        title: this.translate.instant('card.language.title'),
        description: this.translate.instant('card.language.description'),
        component: ChangeLanguagueComponent
      },
      {
        icon: 'lock',
        title: this.translate.instant('card.password.title'),
        description: this.translate.instant('card.password.description'),
        component: ChangePasswordComponent
      },
      {
        icon: 'phonelink_lock',
        title: this.translate.instant('card.otp.title'),
        description: this.translate.instant('card.otp.description'),
        component: OtpStatusComponent
      }
    ];
  }
}
