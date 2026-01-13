import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShowCardInformation } from 'src/app/interfaces/ShowCardInformation'; // Ajustez le chemin
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationDisplayService {
  private notificationDetailsSource = new BehaviorSubject<ShowCardInformation[] | null>(null);
  notificationDetails$ = this.notificationDetailsSource.asObservable();

  constructor() { }

  private formatLabel(key: string): string {
    const result = key.replace(/_/g, ' ');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  // Fonction pour transformer model_type en ShowCardInformation[]
  private transformModelTypeToCardData(model: any): ShowCardInformation[] {
    if (!model) {
      return [];
    }

    const fields: FormlyFieldConfig[] = [];
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        fields.push({
          key: key,
          type: 'input',
          props: {
            label: this.formatLabel(key),
            readonly: true,
            // Vous pouvez ajouter des props.attributes si nécessaire pour le style/accessibilité
            // attributes: {
            //  'aria-label': this.formatLabel(key)
            // }
          },
          expressions: {
            hide: `!model.${key} && typeof model.${key} !== 'boolean' && typeof model.${key} !== 'number'`,
          },
        });
      }
    }

    const card: ShowCardInformation = {
      title: `Détails de la Notification`,
      icon: 'notifications_active', // Ou une autre icône
      form: fields,
      model: { ...model },
      description: '',
      isExpanded: true,
      editing: false,
      type: 'notificationDetailDisplay',
      isLoading: false,
    };
    return [card];
  }

  showNotificationDetails(modelTypeData: any) {
    const cardData = this.transformModelTypeToCardData(modelTypeData);
    this.notificationDetailsSource.next(cardData.length > 0 ? cardData : null);
  }

  clearNotificationDetails() {
    this.notificationDetailsSource.next(null);
  }
}