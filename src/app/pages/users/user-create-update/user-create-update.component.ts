import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { FormlyMatInputModule } from '@ngx-formly/material/input';

import { userFormlyFields } from 'src/app/models/user.model';
import { Roles } from 'src/app/interfaces/Roles';
import { FormlyMatSelectModule } from '@ngx-formly/material/select';
import { Permissions } from 'src/app/interfaces/Permissions';
import { UpdateData, User, UserCreateModel, UserCreateUpdateModel, UserUpdateModel } from 'src/app/interfaces/User';
import { getUserFormlyFields } from 'src/app/models/user.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormUtilsService } from 'src/app/services/FormUtilsService';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import moment from 'moment';
import { DateAdapter } from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'vex-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.scss'],
  standalone: true,
  imports: [
    MatButtonToggleModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormlyModule,
    FormlyMatInputModule,
    FormlyMatCheckboxModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormlyMatSelectModule,
    SharedModule,
    TranslateModule,
    FormlyMatDatepickerModule,
    MatMomentDateModule,
  ]
})
export class UserCreateUpdateComponent implements OnInit {
  imageView: string | File | null = null;
  private _cachedImageUrl: string | null = null;
  private _lastPhotoRef: File | string | null = null;
  tempImageUrl: string | null = null;
  form = new FormGroup({});
  model: UserCreateUpdateModel = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    roles: [],
    available_countries: {},
    birthday: null,
    permissions: [],
    photo: null,
    is_blocked: false,
    otp_enabled: false
  };
  fields: FormlyFieldConfig[] = [];


  // fields: FormlyFieldConfig[] = getUserFormlyFields(this.translate);
  mode: 'create' | 'update' = 'create';
  
  // Map pour stocker les rôles par nom pour un accès rapide
  private rolesMap: Map<string, Roles> = new Map();
  private permissionsMap: Map<string, Permissions> = new Map();

  constructor(

    @Inject(MAT_DIALOG_DATA) public defaults: UpdateData,
    private dialogRef: MatDialogRef<UserCreateUpdateComponent>,
    private translate: TranslateService,
        private formUtils: FormUtilsService, // Service externe injecté
    private languageService: LanguageService,
    private genericApi: GenericApiService

  ) {}

  ngOnInit() {
    this.mode = this.init();
    
    // Enfin, initialiser le modèle après avoir configuré les champs
    forkJoin({
      roles: this.genericApi.getAll('roles', 1, 100),
      permissions: this.genericApi.getAll('permissions', 1, 100)
    }).subscribe(({ roles, permissions }) => {
      if (roles && permissions) {
        this.defaults.roles = roles.data as Roles[];
        this.defaults.permissions = permissions.data as Permissions[];
        this.formUtils.configureSelectFields(this.fields, this.defaults);
        if (this.mode === 'update') {
          this.updateMode();
        } else {
          this.mode = 'create';
          this.clearImageCache();
        }
      } else {
        console.error('Failed to load roles or permissions.');
      }
    });
  }

  init(): 'create' | 'update' {
         // Initialiser d'abord les champs de formulaire
    this.fields = [...getUserFormlyFields(this.translate)]; 
    if (this.defaults && this.defaults.roles) {
      this.formUtils.configureSelectFields(this.fields, this.defaults);
    }
    let mymode = this.defaults as UpdateData;
    return mymode.mode;
  }

  updateMode() {
    let myuser = this.defaults as UpdateData;
    let userRoles = myuser.roles as Roles[];
    let userPermissions= myuser.permissions as Permissions[];

    
    // Récupérer les rôles précédemment sélectionnés pour l'utilisateur
    let selectedRoles: Roles[] = [];
    
    // Si user.roles existe et contient des données
    if (this.defaults.user?.roles && Array.isArray(this.defaults.user.roles)) {
      // Filtrer pour trouver les objets Roles correspondants aux rôles de l'utilisateur
      selectedRoles = userRoles.filter(role => 
        this.defaults.user?.roles?.some(userRole => 
          typeof userRole === 'object' && 'name' in userRole && userRole.name === role.name
        )
      );
    }
    
    let selectedPermissions: Permissions[] = [];
    if (this.defaults.user?.permissions && Array.isArray(this.defaults.user.permissions)) {
      selectedPermissions = userPermissions.filter(role => 
        this.defaults.user?.permissions?.some(userPermissions => 
          typeof userPermissions === 'object' && 'name' in userPermissions && userPermissions.name === role.name
        )
      );
    }
    this.model = {
      first_name: this.defaults.user?.first_name ?? '',
      last_name: this.defaults.user?.last_name ?? '',
      email: this.defaults.user?.email ?? '',
      phone: this.defaults.user?.phone ?? '',
      available_countries: this.defaults.user?.available_countries,
      birthday: this.defaults.user?.birthday 
  ? this.languageService.parseDate(String(this.defaults.user.birthday))
  : null, 
      roles: selectedRoles, // Utiliser le tableau d'objets Roles
      permissions: selectedPermissions, // Utiliser le tableau d'objets Permissions
      photo: this.defaults.user?.photo ?? '',
      is_blocked: this.defaults.user?.is_blocked ?? false,
      otp_enabled: this.defaults.user?.otp_enabled ?? false
    };    
  }
 
  
  /**
   * Crée une URL temporaire pour afficher une image sélectionnée localement
   * @param fileInput - L'élément input de type file ou l'événement de changement
   * @returns Promise avec l'URL temporaire de l'image
   */
  getLocalImagePath(photo: File | string | null): string {
    // Si la photo est null ou undefined, retourner une image par défaut
    if (!photo) {
      return 'assets/img/avatars/default-user.png';
    }

    // Si c'est une instance de File, créer une URL temporaire
    if (photo instanceof File) {
      // Si une URL temporaire existe déjà pour ce fichier, la révoquer
      if (this.tempImageUrl) {
        URL.revokeObjectURL(this.tempImageUrl);
      }

      // Créer et stocker la nouvelle URL temporaire
      this.tempImageUrl = URL.createObjectURL(photo);

      return this.tempImageUrl;
    }

    // Si c'est déjà une chaîne (URL), la retourner directement
    return photo;
  }
  get imageUrl(): string {
    // Si la photo a changé, on nettoie l'ancien cache
    if (this._lastPhotoRef !== this.model.photo) {
      this.clearImageCache();
      this._lastPhotoRef = this.model.photo;
    }

    if (!this._cachedImageUrl) {
      if (this.model.photo instanceof File) {
        this._cachedImageUrl = URL.createObjectURL(this.model.photo);
      } else if (typeof this.model.photo === 'string' && this.model.photo) {
        this._cachedImageUrl = this.model.photo;
      } else {
        this._cachedImageUrl = 'assets/img/avatars/noavatar.png';
      }
    }

    return this._cachedImageUrl;
  }

  private clearImageCache() {
    if (this._cachedImageUrl && this._cachedImageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this._cachedImageUrl);
    }
    this._cachedImageUrl = null;
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }
  createCustomer() {
    // Si nécessaire, assurez-vous que la photo est bien traitée
    if (this.model.photo instanceof File) {
      this.getLocalImagePath(this.model.photo);
    }
    const user: UserCreateModel = {
      tempUrl: this.tempImageUrl ?? '',
      model: {
        ...this.model
      }
    };
    this.dialogRef.close(user);
  }

  updateCustomer() {
    if (!this.model) {
      console.error('Model is undefined!');
      return;
    }

    // Si nécessaire, assurez-vous que la photo est bien traitée
    if (this.model.photo instanceof File) {
      this.getLocalImagePath(this.model.photo);
    }
    let defaultsUser = this.defaults as UpdateData;

    if (defaultsUser.user) {
      const user: UserUpdateModel = {
        slug: defaultsUser.user.slug,
        model: this.model,
        tempUrl: this.tempImageUrl ?? ''
      };
      this.dialogRef.close(user);
    }
  }
  cancel() {
    this.dialogRef.close(null);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}