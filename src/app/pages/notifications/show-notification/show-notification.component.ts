import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { ShowCardInformation } from 'src/app/interfaces/ShowCardInformation';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subscription, combineLatest, of, Subject } from 'rxjs';
import { switchMap, take, filter, startWith, takeUntil, timeout, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ShowDynamicCardComponent } from '../../show-dynamic-card/show-dynamic-card.component'; // Ajustez le chemin
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { getUserFormlyFields } from 'src/app/models/user.model'; // Ajustez le chemin
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { getSettingFormlyFields } from 'src/app/interfaces/setting'; // Ajustez le chemin

@Component({
  selector: 'app-show-notification',
  templateUrl: './show-notification.component.html',
  styleUrls: ['./show-notification.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ShowDynamicCardComponent,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ShowNotificationComponent implements OnInit, OnDestroy {
  notificationCardData: ShowCardInformation[] | null = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  private destroy$ = new Subject<void>();
  private currentModelData: any = null;
  private currentEntityType: string | null = null;
  private translationProcessingSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.loadDataForCurrentNavigation();
    });

    // Déclencher pour la navigation initiale
    setTimeout(() => {
        this.loadDataForCurrentNavigation();
    }, 0);
  }

  private loadDataForCurrentNavigation(): void {
    if (this.translationProcessingSubscription && !this.translationProcessingSubscription.closed) {
        this.translationProcessingSubscription.unsubscribe();
    }

    this.isLoading = true;
    this.notificationCardData = null;
    this.errorMessage = null;
    this.cdRef.detectChanges();

    const navigation = this.router.getCurrentNavigation();
    if (history.state && (history.state.modelTypeData !== undefined || history.state.modelData !== undefined)) {
      this.currentModelData = history.state.modelTypeData || history.state.modelData;
      this.currentEntityType = history.state.entityType;
    } else if (navigation?.extras?.state && (navigation.extras.state['modelData'] !== undefined || navigation.extras.state['modelTypeData'] !== undefined)) {
      this.currentModelData = navigation.extras.state['modelData'] || navigation.extras.state['modelTypeData'];
      this.currentEntityType = navigation.extras.state['entityType'];
    } else {
      this.currentModelData = null;
      this.currentEntityType = null;
    }

    if (!this.currentModelData) {
      this.showError("Données de notification non disponibles");
      return;
    }
    if (!this.currentEntityType) {
      this.showError("Type d'entité de notification non disponible");
      return;
    }

    this.initTranslationsAndProcess();
  }

  private initTranslationsAndProcess(): void {
    const currentLang = this.translate.currentLang || this.translate.defaultLang;
    if (!currentLang) {
        this.showError("Erreur de configuration de la langue.");
        return;
    }

    const langAndTranslationsReady$ = combineLatest([
      this.translate.getTranslation(currentLang).pipe(
        take(1),
        catchError(() => {
          this.showError(`Erreur chargement traductions initiales (${currentLang})`);
          return of(null); // Permet à combineLatest de continuer, mais sera filtré
        }),
        filter(translations => !!translations)
      ),
      this.translate.onLangChange.pipe(
        startWith(null as unknown as LangChangeEvent),
        switchMap((event: LangChangeEvent | null) => {
          const langToLoad = event ? event.lang : currentLang;
          return this.translate.getTranslation(langToLoad).pipe(
            catchError(() => {
              this.showError(`Erreur chargement traductions (${langToLoad})`);
              return of(null);
            }),
            filter(translations => !!translations)
          );
        })
      )
    ]).pipe(
      take(1), // Se complète après la première émission valide des deux sources
      timeout(10000),
      catchError(() => {
          this.showError("Timeout lors du chargement des traductions ou des données.");
          return of(null); // Pour que le subscribe soit atteint
      })
    );

    this.translationProcessingSubscription = langAndTranslationsReady$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          if (!this.isLoading) return; // Si une erreur a déjà mis isLoading à false

          if (!result || !result[0] || !result[1]) { // Si l'un des flux de traduction a émis null (erreur)
              if (!this.errorMessage) { // Ne pas écraser un message d'erreur déjà défini par catchError
                  this.showError("Problème de chargement des traductions.");
              }
              return;
          }

          setTimeout(() => { // Pour le cycle de détection de changement
              if (this.currentModelData && this.currentEntityType) {
                const formlyConfig = this.getAdaptedFormlyConfig(this.currentEntityType);
                if (formlyConfig) {
                  this.processReceivedData(this.currentModelData, formlyConfig);
                } else {
                  this.showError(`Configuration Formly non trouvée pour le type: ${this.currentEntityType}`);
                }
              } else {
                  this.showError("Données ou type d'entité perdus avant le traitement.");
              }
          }, 0);
        },
        error: (err) => { // Devrait être attrapé par le catchError du pipe, mais par sécurité
          this.showError("Erreur critique lors de la préparation des données.");
        }
    });
  }

  private getAdaptedFormlyConfig(entityType: string): FormlyFieldConfig[] | null {
    let rawFields: FormlyFieldConfig[] = [];
    switch (entityType?.toLowerCase()) {
      case 'user':
        rawFields = getUserFormlyFields(this.translate).flatMap(f => f.fieldGroup ?? [f]);
        break;
      case 'setting':
      case 'settings':
        rawFields = getSettingFormlyFields(this.translate).flatMap(f => f.fieldGroup ?? [f]);
        break;
      default:
        // Si le type est inconnu, on retourne null pour que processReceivedData puisse afficher une erreur
        return null;
    }

    // Si le type est connu mais qu'il n'y a pas de champs, retourner un tableau vide est acceptable
    if (rawFields.length === 0) {
      return [];
    }

    // Adapter les champs pour l'affichage (readonly, hide, etc.)
    return rawFields.map(field => ({
        ...field,
        props: { ...field.props, readonly: true },
        expressions: {
            ...field.expressions,
            hide: (fld: FormlyFieldConfig) => {
                const modelValue = fld.model?.[fld.key as string];
                const isHiddenByDefault = typeof field.expressions?.hide === 'function'
                    ? field.expressions.hide(fld)
                    : field.expressions?.hide;
                if (isHiddenByDefault) return true;
                return (modelValue === null || modelValue === undefined || modelValue === '') &&
                       (typeof modelValue !== 'boolean' && typeof modelValue !== 'number');
            }
        }
    }));
  }

  private processReceivedData(modelData: any, formlyConfig: FormlyFieldConfig[]): void {
    try {
      this.notificationCardData = this.transformModelToCardData(modelData, formlyConfig);
      this.errorMessage = null;
    } catch (error) {
      this.showError("Erreur lors de la transformation des données pour l'affichage");
      return;
    }

    if (!this.notificationCardData || this.notificationCardData.length === 0) {
      // Géré par le template si pas d'erreur
    }
    
    this.isLoading = false;
    this.cdRef.detectChanges();
  }

  private showError(message: string): void {
    const needsUpdate = this.isLoading || this.errorMessage !== message || this.notificationCardData !== null;
    this.errorMessage = message;
    this.isLoading = false;
    this.notificationCardData = null;
    if (needsUpdate) {
        this.cdRef.detectChanges();
    }
  }

  private transformModelToCardData(model: any, formlyFields: FormlyFieldConfig[]): ShowCardInformation[] {
    let titleKey = 'NOTIFICATION_DETAIL.GENERIC_TITLE';
    let descriptionKey = 'NOTIFICATION_DETAIL.GENERIC_DESCRIPTION';
    let icon = 'notifications_active';

    if (this.currentEntityType) {
      switch (this.currentEntityType.toLowerCase()) {
        case 'user':
          titleKey = 'NOTIFICATION_DETAIL.USER_TITLE';
          descriptionKey = 'NOTIFICATION_DETAIL.USER_DESCRIPTION';
          icon = 'account_circle';
          break;
        case 'setting':
        case 'settings':
          titleKey = 'NOTIFICATION_DETAIL.SETTINGS_TITLE';
          descriptionKey = 'NOTIFICATION_DETAIL.SETTINGS_DESCRIPTION';
          icon = 'settings';
          break;
      }
    }

    return [{
      title: this.translate.instant(titleKey),
      description: this.translate.instant(descriptionKey),
      icon: icon,
      form: formlyFields,
      model: { ...model },
      isExpanded: true,
      editing: false,
      type: `${this.currentEntityType || 'unknown'}NotificationDetailView`,
      isLoading: false,
    }];
  }

  goBack(): void {
    this.router.navigate(['/index/notifications']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}