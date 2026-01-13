import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
import { FormGroup, FormBuilder, UntypedFormControl } from '@angular/forms';
import { ShowCardInformation } from 'src/app/interfaces/ShowCardInformation';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatIconModule } from '@angular/material/icon';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Roles } from 'src/app/interfaces/Roles';
import { Permissions } from 'src/app/interfaces/Permissions';
import { MatExpansionModule } from '@angular/material/expansion';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

@Component({
  selector: 'vex-show-dynamic-card',
  standalone: true,
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms,
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ],
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    MatIconModule,
    NgIf,
    NgFor,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule,
    SharedModule,
    MatExpansionModule,
    FormlyMatDatepickerModule,
    TranslateModule
  ],
  templateUrl: './show-dynamic-card.component.html',
  styleUrls: ['./show-dynamic-card.component.scss']
})
export class ShowDynamicCardComponent implements OnDestroy {
  @Input() title: string | undefined = '';
  @Input() breadcrumbs: string[] = ['Dashboard', 'Settings'];
  @Input() showLayoutToggle: boolean = true;
  @Input() layoutControl: any;
  layoutCtrl = new UntypedFormControl('fullwidth');

  @Input() data: ShowCardInformation[] = [];
  @Input() showEditButton: boolean = true;
  @Output() editToggle = new EventEmitter<ShowCardInformation>();
  @Output() submitData = new EventEmitter<ShowCardInformation>();

  form: FormGroup;
  private _cachedImageUrls: { [key: string]: string } = {};
  private _lastPhotoRefs: { [key: string]: any } = {};

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private translate: TranslateService,
    private cdRef: ChangeDetectorRef,
  ) {
    this.form = this.fb.group({});
  }

  // Initialisation de l'état ouvert/fermé pour chaque carte
  ngOnInit() {
    // Initialiser l'état isExpanded si non défini
    this.data.forEach((card) => {
      if (card.isExpanded === undefined) {
        card.isExpanded = false; // Par défaut, les cartes sont fermées
      }
    });
  }

  getTranslatedLabel(key: string): string {
    return this.translate.instant(key);
  }

  trackByFn(index: number, item: ShowCardInformation | undefined): string {
    if (!item) return index.toString();
    return item.title ? `${item.title}-${index}` : index.toString();
  }

  getPhotoFieldKey(cardData: ShowCardInformation): string {
    const photoField = cardData?.form?.find((field: any) =>
      this.isPhotoField(field)
    );
    return photoField?.props?.label || this.getSafeKey(photoField?.key) || '';
  }

  hasPhotoField(cardData: ShowCardInformation): boolean {
    return cardData?.form?.some((field: any) => this.isPhotoField(field));
  }

  isPhotoField(field: any): boolean {
    return (
      field.type === 'fileimage' ||
      field.key === 'photo' ||
      field.key === 'site_logo'
    );
  }

  getPhotoValue(cardData: ShowCardInformation): string {
    const photoField = cardData?.form?.find((field: any) =>
      this.isPhotoField(field)
    );
    const key = this.getSafeKey(photoField?.key);
    const photoValue = photoField ? this.getValue(cardData.model, key) : '';
    return photoValue || 'assets/img/logo/logo.svg';
  }

  getSafeKey(key: string | number | (string | number)[] | undefined): string {
    if (key === undefined) return '';
    if (Array.isArray(key)) return key.join('.');
    return key.toString();
  }

  getValue(obj: any, key: string): any {
    if (!obj || !key) return '';
    return key.split('.').reduce((o, i) => o?.[i], obj) ?? '';
  }

  // Ajoutez cette méthode pour gérer le toggle de manière asynchrone
  async toggleEditMode(
    cardData: ShowCardInformation,
    event?: Event
  ): Promise<void> {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    this.editToggle.emit(cardData);
  }

  // Méthode utilitaire pour formater la date en YYYY-MM-DD

  isAnyCardEditing(): boolean {
    return this.data.some((card) => card.editing === true);
  }

  submitForm(event: MouseEvent, cardData: ShowCardInformation): void {
    event.stopPropagation(); // Empêche la propagation
    this.submitData.emit(cardData);
  }

  getRolesNames(roles: Roles[] | undefined | null): string {
    if (!roles) return '-';
    return roles
      .map((role) => (typeof role === 'string' ? role : role.display_name))
      .join(', ');
  }

  getPermissionsNames(permissions: Permissions[] | undefined | null): string {
    if (!permissions) return '-';
    return permissions
      .map((permission) =>
        typeof permission === 'string' ? permission : permission.display_name
      )
      .join(', ');
  }

  getImageUrl(cardData: ShowCardInformation): string {
    const photoField = cardData?.form?.find((field) =>
      this.isPhotoField(field)
    );
    if (!photoField) return 'assets/img/logo/logo.svg';

    const key = this.getSafeKey(photoField.key);
    const photoValue =
      this.form.get(key)?.value || this.getValue(cardData.model, key);
    const cardId = this.getCardId(cardData);

    // Si la photo a changé, on nettoie le cache
    if (this._lastPhotoRefs[cardId] !== photoValue) {
      this.clearImageCache(cardId);
      this._lastPhotoRefs[cardId] = photoValue;
    }

    if (!this._cachedImageUrls[cardId]) {
      if (photoValue instanceof File) {
        this._cachedImageUrls[cardId] = URL.createObjectURL(photoValue);
      } else if (typeof photoValue === 'string' && photoValue) {
        this._cachedImageUrls[cardId] = photoValue;
      } else {
        this._cachedImageUrls[cardId] = 'assets/img/logo/logo.svg';
      }
    }

    return this._cachedImageUrls[cardId];
  }

  private clearImageCache(cardId: string): void {
    const url = this._cachedImageUrls[cardId];
    if (url && url.startsWith('blob:')) {
      URL.revokeObjectURL(url);
    }
    delete this._cachedImageUrls[cardId];
    delete this._lastPhotoRefs[cardId];
  }

  ngOnDestroy() {
    Object.values(this._cachedImageUrls).forEach((url) => {
      if (url?.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    });
    this._cachedImageUrls = {};
    this._lastPhotoRefs = {};
  }

  private getCardId(cardData: ShowCardInformation): string {
    return `${cardData.type}-${cardData.title}-${cardData.model?.id || ''}`;
  }

  // Modifiez les méthodes panelOpened et panelClosed comme suit :
  panelOpened(cardData: ShowCardInformation) {
    setTimeout(() => {
      cardData.isExpanded = true;
      this.cdRef.detectChanges();
    });
  }
  getDisplayCountry(countryData: any): any {
    if (!countryData) return null;

    // Si c'est un tableau non vide, retourne le premier élément
    if (Array.isArray(countryData) && countryData.length > 0) {
      return countryData[0];
    }

    // Si c'est un objet valide (avec au moins une propriété)
    if (typeof countryData === 'object' && !Array.isArray(countryData)) {
      if (countryData.country_code || countryData.country_name) {
        return countryData;
      }
    }

    return null;
  }

  panelClosed(cardData: ShowCardInformation) {
    setTimeout(() => {
      cardData.isExpanded = false;
      this.cdRef.detectChanges();
    });
  }
}
