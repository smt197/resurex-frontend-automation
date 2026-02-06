import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ordersFormlyFields } from 'src/app/interfaces/Orders';
import { Order } from 'src/app/models/order.model';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { FormDataBuilderService } from 'src/app/services/form-data-builder.service';
import { ORDERS_CONFIG } from '../../orders.config';

@Component({
  selector: 'vex-order-create-update',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    TranslateModule
  ],
  templateUrl: './order-create-update.component.html',
  styleUrls: ['./order-create-update.component.scss']
})
export class OrderCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  mode: 'create' | 'update' = 'create';
  id?: number | string;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genericApi: GenericApiService,
    private formDataBuilder: FormDataBuilderService,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Déterminer le mode (create ou update)
    this.id = this.route.snapshot.paramMap.get('id') || undefined;
    this.mode = this.id ? 'update' : 'create';

    // Charger les données si mode update
    if (this.mode === 'update' && this.id) {
      this.loadData();
    }

    // Translate field labels, placeholders and validation messages
    this.fields = ordersFormlyFields.map(field => {
      // Si le field a un fieldGroup, on doit traduire les fields à l'intérieur
      if (field.fieldGroup) {
        return {
          ...field,
          fieldGroup: field.fieldGroup.map(subField => ({
            ...subField,
            props: {
              ...subField.props,
              label: this.translate.instant(subField.props?.label || ''),
              placeholder: this.translate.instant(subField.props?.placeholder || '')
            },
            validation: subField.validation ? {
              messages: Object.keys(subField.validation.messages || {}).reduce((acc, key) => {
                const message = subField.validation!.messages![key];
                acc[key] = typeof message === 'string' ? this.translate.instant(message) : message;
                return acc;
              }, {} as any)
            } : undefined
          }))
        };
      }
      // Sinon, traduire le field normalement
      return {
        ...field,
        props: {
          ...field.props,
          label: this.translate.instant(field.props?.label || ''),
          placeholder: this.translate.instant(field.props?.placeholder || '')
        },
        validation: field.validation ? {
          messages: Object.keys(field.validation.messages || {}).reduce((acc, key) => {
            const message = field.validation!.messages![key];
            acc[key] = typeof message === 'string' ? this.translate.instant(message) : message;
            return acc;
          }, {} as any)
        } : undefined
      };
    });
  }

  loadData(): void {
    this.isLoading = true;
    this.genericApi.getOne<Order>('orders', this.id!.toString()).subscribe({
      next: (response) => {
        this.model = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading order:', error);
        this.snackBar.open('Error loading data', 'OK', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  save(): void {
    if (this.form.valid) {
      this.isLoading = true;

      const config = ORDERS_CONFIG;
      const useFormData = config.data.useFormData;

      if (this.mode === 'create') {
        const createObservable = useFormData
          ? this.genericApi.create<Order>('orders', this.formDataBuilder.createFormData(this.model))
          : this.genericApi.createJson<Order>('orders', this.model);

        createObservable.subscribe({
          next: (response) => {
            this.snackBar.open(
              response!.message || 'Commande created successfully!',
              'OK',
              { duration: 3000 }
            );
            this.router.navigate(['..'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error creating order:', error);
            this.snackBar.open('Error creating order', 'OK', { duration: 3000 });
            this.isLoading = false;
          }
        });
      } else {
        const updateObservable = useFormData
          ? this.genericApi.update<Order>('orders', this.id!.toString(), this.formDataBuilder.createFormData(this.model))
          : this.genericApi.updateJson<Order>('orders', this.id!.toString(), this.model);

        updateObservable.subscribe({
          next: (response) => {
            this.snackBar.open(
              response.message || 'Commande updated successfully!',
              'OK',
              { duration: 3000 }
            );
            this.router.navigate(['../..'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error updating order:', error);
            this.snackBar.open('Error updating order', 'OK', { duration: 3000 });
            this.isLoading = false;
          }
        });
      }
    }
  }

  cancel(): void {
    if (this.mode === 'create') {
      this.router.navigate(['..'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../..'], { relativeTo: this.route });
    }
  }
}
