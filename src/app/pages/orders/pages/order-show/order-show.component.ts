import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '@vex/animations/scale-in.animation';
import { LoadingSpinnerComponent } from 'src/app/auth/components/loading-spinner/loading-spinner.component';
import { TranslationModule } from 'src/app/shared/language/translation.module';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'vex-order-show',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    LoadingSpinnerComponent,
    TranslationModule
  ],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  templateUrl: './order-show.component.html',
  styleUrls: ['./order-show.component.scss']
})
export class OrderShowComponent implements OnInit {
  data = signal<Order | null>(null);
  isLoading = signal(true);
  identifier: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private genericApi: GenericApiService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getParamsRouter();
  }

  getParamsRouter() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.identifier = params.get('id');
      if (this.identifier) {
        this.loadData(this.identifier);
      } else {
        this.back();
      }
    });
  }

  loadData(id: string): void {
    this.isLoading.set(true);
    this.genericApi.getOne<Order>('orders', id).subscribe({
      next: (res) => {
        const response = res.data as Order;
        if (response) {
          this.data.set(response);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        this.showMessage(err.error?.message || 'Error loading data');
        this.isLoading.set(false);
        this.back();
      }
    });
  }

  back(): void {
    this.router.navigate(['index/orders']);
  }

  edit(): void {
    if (this.identifier) {
      this.router.navigate(['index/orders/edit', this.identifier]);
    }
  }

  formatValue(value: any): string {
    if (value === null || value === undefined) return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (value instanceof Date) return value.toLocaleDateString();
    return value.toString();
  }

  showMessage(message: string | undefined): void {
    if (message) {
      this.snackbar.open(message, 'Close', { duration: 5000 });
    }
  }
}
