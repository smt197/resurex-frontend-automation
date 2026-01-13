import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import {
  getSettingFormlyFields,
  Setting,
  SettingModel
} from 'src/app/interfaces/setting';
import { SettingsService } from 'src/app/services/settings.service';
import { NgIf } from '@angular/common';
import {
  appSettingsCardInformation,
  createCardInfo,
  profileSettingsCardInformation,
  settingModelCard,
  ShowCardInformation,
  userModelCard
} from 'src/app/interfaces/ShowCardInformation';
import { ShowDynamicCardComponent } from '../../show-dynamic-card/show-dynamic-card.component';
import { FormlyModule } from '@ngx-formly/core';
import { AuthService } from 'src/app/services/auth-service';
import { getUserFormlyFields, UserModel } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, map, Observable, Subject } from 'rxjs';
import { UsersService } from '../../users/users.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutoTranslateService } from 'src/app/services/AutoTranslateService';
import { FormUtilsService } from 'src/app/services/FormUtilsService';
import { Roles } from 'src/app/interfaces/Roles';
import { Permissions } from 'src/app/interfaces/Permissions';
import { LanguageService } from 'src/app/services/language.service';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { CardWithIconActionComponent } from '../../ui/card-with-icon-action/card-with-icon-action.component';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexSecondaryToolbarComponent } from '@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component';
import { User } from '@ngneat/falso';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatExpansionModule } from '@angular/material/expansion';
import { Authority } from 'src/static-data/authority.constants';
import { SettingsAdminComponent } from '../settings-admin/settings-admin.component';
import { SettingsUserComponent } from '../settings-user/settings-user.component';

@Component({
  selector: 'vex-show-settings',
  templateUrl: './show-settings.component.html',
  styleUrls: ['./show-settings.component.scss'],
  animations: [fadeInUp400ms, fadeInRight400ms, scaleIn400ms, stagger40ms],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    VexPageLayoutContentDirective,
    NgIf,
    ShowDynamicCardComponent,
    FormlyModule,
    SharedModule,
    FormlyMatDatepickerModule,
    VexPageLayoutContentDirective,
    CardWithIconActionComponent,
    VexBreadcrumbsComponent,
    TranslateModule,
    MatExpansionModule,
    VexSecondaryToolbarComponent,
    SettingsAdminComponent,
    SettingsUserComponent
  ]
})
export class ShowSettingsComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('fullwidth');
  InformationCard: ShowCardInformation[] = [];
  userModel: UserModel = userModelCard;
  userAllRolesPermissions: UserModel = userModelCard;

  settingModel: SettingModel = settingModelCard;
  roles: Roles[] = [];
  permissions: Permissions[] = [];
  users: User[] = [];
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  // Composants de filtrage
  settingsAdminComponent = new SettingsAdminComponent(this.authService, this.translate);
  settingsUserComponent = new SettingsUserComponent(this.authService, this.translate);

  cards: Array<{
    icon: string;
    title: string;
    description: string;
    component: any;
  }> = [];

  // Cartes filtrées selon le rôle
  filteredCards: Array<{
    icon: string;
    title: string;
    description: string;
    component: any;
  }> = [];

  constructor(
    private setting_service: SettingsService,
    private authService: AuthService,
    private userService: UsersService,
    private snackbar: MatSnackBar,
    private translate: TranslateService,
    private autoTranslate: AutoTranslateService,
    private formUtils: FormUtilsService,
    private languaservice: LanguageService,
    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService
  ) {}
  initLang() {
    this.translate
      .get([
        'card.language.title',
        'card.language.description',
        'card.password.title',
        'card.password.description',
        'card.backup.title',
        'card.backup.description',
        'card.otp.title',
        'card.otp.description',
        'card.maintenance.title',
        'card.maintenance.description'
      ])
      .subscribe(() => {
        // Récupération des cartes utilisateur
        const userCards = this.settingsUserComponent.getAllUserCards();

        // Récupération des cartes admin
        const adminCards = this.settingsAdminComponent.getAllAdminCards();

        // Toutes les cartes disponibles
        this.cards = [...userCards, ...adminCards];

        // Filtrage des cartes selon le rôle
        this.filterCardsByRole();
      });
  }

  /**
   * Filtre les cartes selon le rôle de l'utilisateur connecté
   */
  filterCardsByRole() {
    this.filteredCards = [];

    // Passer toutes les cartes aux composants de filtrage
    this.settingsUserComponent.allCards = this.cards;
    this.settingsAdminComponent.allCards = this.cards;

    if (this.isAdmin()) {
      // L'admin voit les cartes utilisateur + les cartes admin
      const userCards = this.settingsUserComponent.getUserCards();
      const adminCards = this.settingsAdminComponent.getAdminCards();
      this.filteredCards = [...userCards, ...adminCards];
    } else if (this.isUser()) {
      // L'utilisateur voit uniquement les cartes utilisateur
      this.filteredCards = this.settingsUserComponent.getUserCards();
    }
  }

  isAdmin(): boolean {
    const user = this.authService.user;
    if (!user || !user.roles) return false;
    return user.roles.some((role) => role.name === Authority.ADMIN);
  }

   isUser(): boolean {
    const user = this.authService.user;
    if (!user || !user.roles) return false;
    return user.roles.some((role) => role.name === Authority.USER);
  }

  ngOnInit() {
    this.initLang();
    this.getData();
    this.initData();
    this.createCards();

    this.translate.onLangChange.subscribe(() => {
      this.InformationCard = [];
      this.createCards();
    });
  }

  getData() {
    this.getInitData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((users) => {
        // Traitement supplémentaire si nécessaire
      });
  }

  getInitData(): Observable<User[]> {
    return this.activatedRoute.data.pipe(
      map((response) => {
        if (response['usersData']) {
          this.roles = response['usersData'].roles || [];
          this.permissions = response['usersData'].permissions || [];

          // Ne pas mettre à jour directement l'utilisateur ici
          // Cela sera fait dans initData()
        }

        this.users = response['usersData']?.users || [];
        return this.users;
      })
    );
  }

  initData() {
    let user = this.authService.user;
    let settings = this.setting_service.setting;

    // Ne pas modifier les rôles et permissions ici
    // Conservez les rôles et permissions de l'utilisateur tels quels

    this.userModel = user ? user : this.userModel;
    this.userAllRolesPermissions.roles = this.roles;
    this.userAllRolesPermissions.permissions = this.permissions;

    this.settingModel = settings ? settings : this.settingModel;
  }

  createCards() {
    // Récupérer les champs Formly
    const userFields = getUserFormlyFields(this.translate).flatMap(
      (f) => f.fieldGroup ?? [f]
    );

    // Initialiser les champs si nécessaire

    if (this.userModel) {
      // Configure les champs select avec:
      // - Tous les rôles et permissions disponibles
      // - Les rôles et permissions de l'utilisateur
      this.formUtils.configureSelectFields(userFields, {
        ...this.userAllRolesPermissions
      });
    }

    // Crée les cartes avec les données mises à jour
    const profileSettings: ShowCardInformation = createCardInfo(
      this.autoTranslate,
      {
        ...profileSettingsCardInformation,
        model: this.userModel,
        form: userFields
      }
    );

    const appSettings: ShowCardInformation = createCardInfo(
      this.autoTranslate,
      {
        ...appSettingsCardInformation,
        model: this.settingModel,
        form: getSettingFormlyFields(this.translate).flatMap(
          (f) => f.fieldGroup ?? [f]
        )
      }
    );

    this.InformationCard = [];
    if (profileSettings.model) this.InformationCard.push(profileSettings);
    if (appSettings.model) this.InformationCard.push(appSettings);
  }

  /**
   * Gère le basculement du mode édition d'une carte
   * @param cardData - Les données de la carte à modifier
   */
  /**
   * Gère le basculement du mode édition d'une carte
   * @param cardData - Les données de la carte à modifier
   */
  onEditToggle(cardData: ShowCardInformation): void {
    // Basculer l'état d'édition
    const wasEditing = cardData.editing;
    cardData.editing = !wasEditing;

    if (cardData.editing) {
      // Passage en mode édition
      this.handleEditMode(cardData);
    } else {
      // Sortie du mode édition
      this.handleViewMode(cardData);
    }
  }

  private handleEditMode(cardData: ShowCardInformation): void {
    // Déployer la carte
    cardData.isExpanded = true;

    // Convertir la date pour l'édition si nécessaire
    this.convertBirthdayForEdit(cardData);
  }

  private handleViewMode(cardData: ShowCardInformation): void {
    // Convertir la date pour l'affichage si nécessaire
    this.convertBirthdayForView(cardData);
  }

  private convertBirthdayForEdit(cardData: ShowCardInformation): void {
    if (!cardData.model.birthday) return;

    cardData.model.birthday =
      typeof cardData.model.birthday === 'string'
        ? this.safeParseDate(cardData.model.birthday)
        : cardData.model.birthday;
  }

  private convertBirthdayForView(cardData: ShowCardInformation): void {
    if (!cardData.model.birthday) return;

    cardData.model.birthday =
      cardData.model.birthday instanceof Date
        ? this.languageService.formatDateLocal(cardData.model.birthday)
        : cardData.model.birthday;
  }

  private safeParseDate(dateString: string): Date | null {
    try {
      // Utilisation de la méthode parseDate du service LanguageService
      const parsedDate = this.languageService.parseDate(dateString);
      return parsedDate instanceof Date ? parsedDate : null;
    } catch (error) {
      console.error('Erreur lors du parsing de la date:', error);
      return null;
    }
  }

  onSubmitData(cardDataInfo: ShowCardInformation) {
    cardDataInfo.isLoading = true;
    switch (cardDataInfo.type) {
      case 'user':
        this.handleUserUpdate(cardDataInfo);
        break; // Ajout du break manquant

      case 'setting':
        this.handleSettingUpdate(cardDataInfo);
        break;

      // Ajoutez un cas par défaut si nécessaire
      default:
        console.warn(`Type non géré: ${cardDataInfo.type}`);
        cardDataInfo.isLoading = false;
        break;
    }
  }

  private handleSettingUpdate(cardData: ShowCardInformation) {
    const updateSetting = cardData.model;

    this.setting_service
      .updateSetting(updateSetting)
      .pipe(finalize(() => (cardData.isLoading = false)))
      .subscribe({
        next: (response) => {
          if (response?.data as Setting) {
            this.setting_service.setting = response.data as Setting;
            const index = this.InformationCard.indexOf(cardData);
            if (index !== -1) {
              this.InformationCard[index].model = this.setting_service.setting;
              this.InformationCard[index].editing = false;
            }
          }
          this.showResponse(response?.message);
        },
        error: (error) => {
          console.error('Error updating setting:', error);
          this.showResponse('Error updating setting');
        }
      });
  }
  private handleUserUpdate(cardData: ShowCardInformation) {
    const slug: string = cardData.model.slug;
    const updateUser = cardData.model;
    if (updateUser.country_name) {
      updateUser.available_countries = updateUser.country_name;
    }
    const userdata = this.createFormData(updateUser);

    this.userService
      .updateUser(slug, userdata)
      .pipe(finalize(() => (cardData.isLoading = false)))
      .subscribe({
        next: (response) => {
          if (response?.data) {
            const index = this.InformationCard.indexOf(cardData);
            if (index !== -1) {
              this.InformationCard[index].model = this.authService.user;
              this.convertBirthdayForView(this.InformationCard[index]);
              this.InformationCard[index].editing = false;

              // Reconfigurer les champs select après la mise à jour
              if (cardData.form) {
                this.formUtils.configureSelectFields(
                  cardData.form,
                  this.authService.user
                );
              }
            }
          }
          // window.location.reload();

          this.showResponse(response?.message);
        },
        error: (error) => {
          console.error('Error updating user:', error);
          this.showResponse('Error updating user');
        }
      });
  }
  private createFormData(user: any): FormData {
    const formData = new FormData();

    // Champs obligatoires
    formData.append('first_name', user.first_name || '');
    formData.append('last_name', user.last_name || '');
    formData.append('email', user.email || '');
    formData.append('phone', user.phone || '');

    // Gestion du pays
    if (user.available_countries) {
      if (
        Array.isArray(user.available_countries) &&
        user.available_countries.length > 0
      ) {
        const country = user.available_countries[0]; // Prend le premier pays
        formData.append('country_id', country.id.toString());
      } else if (
        typeof user.available_countries === 'object' &&
        user.available_countries.id
      ) {
        formData.append('country_id', user.available_countries.id.toString());
      }
    } else {
      // Si aucun pays n'est sélectionné, envoyez une chaîne vide
      formData.append('country_id', '');
    }

    // Autres champs...
    if (user.birthday) {
      const formattedDate = this.formatDateForLaravel(user.birthday);
      if (formattedDate) {
        formData.append('birthday', formattedDate);
      }
    }

    if (user.photo instanceof File) {
      formData.append('photo', user.photo);
    }
    //  Gestion des rôles et permissions si nécessaire
    if (user.roles && Array.isArray(user.roles)) {
      user.roles.forEach((role: Roles, index: number) => {
        formData.append(`roles[${index}]`, role.name);
      });
    }

    if (user.permissions && Array.isArray(user.permissions)) {
      user.permissions.forEach((permission: Permissions, index: number) => {
        formData.append(`permissions[${index}]`, permission.name);
      });
    }
    return formData;
  }
  // private createFormData(user: any): FormData {
  //   const formData = new FormData();
  //   formData.append('first_name', user.first_name);
  //   formData.append('last_name', user.last_name);
  //   formData.append('email', user.email);

  //   if (user.birthday) {
  //     const formattedDate = this.formatDateForLaravel(user.birthday);
  //     if (formattedDate) {
  //       formData.append('birthday', formattedDate);
  //     }
  //   }

  //   if (user.photo instanceof File) {
  //     formData.append('photo', user.photo);
  //   }

  //   // Gestion des rôles et permissions si nécessaire
  //   if (user.roles && Array.isArray(user.roles)) {
  //     user.roles.forEach((role: Roles, index: number) => {
  //       formData.append(`roles[${index}]`, role.name);
  //     });
  //   }

  //   if (user.permissions && Array.isArray(user.permissions)) {
  //     user.permissions.forEach((permission: Permissions, index: number) => {
  //       formData.append(`permissions[${index}]`, permission.name);
  //     });
  //   }

  //   return formData;
  // }
  private formatDateForLaravel(date: Date | string | null): string | null {
    if (!date) return null;

    // Si c'est déjà un string au bon format
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }

    // Conversion depuis un objet Date ou un autre format de string
    const jsDate = new Date(date);
    if (isNaN(jsDate.getTime())) return null;

    return jsDate.toISOString().split('T')[0]; // Extrait YYYY-MM-DD
  }

  private showResponse(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Fermer', {
        duration: 9000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: 'snackbar-success'
      });
    }
  }
}
