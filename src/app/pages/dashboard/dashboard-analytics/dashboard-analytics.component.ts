import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
  ViewChild
} from '@angular/core';
import { defaultChartOptions } from '@vex/utils/default-chart-options';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexSecondaryToolbarComponent } from '@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component';
import { WidgetAssistantComponent } from '../../components/widgets/widget-assistant/widget-assistant.component';
import { WidgetLargeChartComponent } from '../../components/widgets/widget-large-chart/widget-large-chart.component';
import { WidgetQuickLineChartComponent } from '../../components/widgets/widget-quick-line-chart/widget-quick-line-chart.component';
import { WidgetQuickValueCenterComponent } from '../../components/widgets/widget-quick-value-center/widget-quick-value-center.component';
import { Log } from 'src/app/models/logs.model';
import { MatTableDataSource } from '@angular/material/table';
import { UntypedFormControl } from '@angular/forms';
import {
  PaginationStandard,
  ResponseGlobalServer
} from 'src/app/interfaces/Response-globalServer';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { delay, forkJoin, Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import {
  UserHistoricalDataPoint,
  UserStatsWithHistory
} from 'src/app/interfaces/UserStats';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApexOptions } from 'src/@vex/components/vex-chart/vex-chart.component';
import { WebsocketService } from 'src/app/services/websocket.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  ChartConfigService,
  SNACKBAR_DURATION,
  CHART_UPDATE_DELAY,
  CHART_STABILITY_DELAY
} from 'src/app/config/chart-config.service';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss'],
  standalone: true,
  imports: [
    VexSecondaryToolbarComponent,
    VexBreadcrumbsComponent,
    MatButtonModule,
    MatIconModule,
    WidgetAssistantComponent,
    WidgetQuickLineChartComponent,
    WidgetQuickValueCenterComponent,
    WidgetLargeChartComponent,
    MatProgressSpinnerModule,
    NgIf,
    TranslateModule
  ]
})
export class DashboardAnalyticsComponent implements OnInit, AfterViewInit {
  logs: Log[] = [];
  dataSource: MatTableDataSource<Log> = new MatTableDataSource<Log>();
  searchCtrl = new UntypedFormControl();
  defaulPage: number = 1;
  logChartLabels: string[] = [];
  logChartData: number[] = [];

  // AJOUT : Propriétés pour le nouveau graphique des rôles et permissions
  rolesAndPermissionsSeries = signal<ApexNonAxisChartSeries>([]);
  rolesAndPermissionsOptions = signal<ApexOptions | null>(null);

  isRolesChartReady = computed(() => {
    return this.rolesAndPermissionsSeries() !== null && this.rolesAndPermissionsOptions() !== null;
  });
  // NOUVELLES PROPRIÉTÉS POUR LE CHART DES LOGS
  logActivitySeries: ApexAxisChartSeries = [];
  logActivityOptions: ApexOptions = defaultChartOptions({
    chart: {
      type: 'bar', // Ou 'line', 'bar', etc.
      height: 100
      // sparkline: {
      //   // Sparkline pour un petit chart simple
      //   enabled: true
      // }
    }
    // Pas besoin de xaxis.categories ici si on utilise le format [{x: date, y: valeur}] pour les données
  });

  logActivityValue: string = '0'; // Pour afficher une valeur principale sur le widget
  logActivityLabel: string = '';

  translatedUsersLabel: string = ''; // Pour stocker la traduction du label tooltip des utilisateurs
  translatedLogsLabel: string = ''; // Pour stocker la traduction du label tooltip des logs

  pagination = {
    current_page: PaginationStandard.current_page,
    per_page: PaginationStandard.pageSize,
    total: PaginationStandard.total
  };

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  private readonly destroyRef = inject(DestroyRef);
  private destroy$ = new Subject<void>();

  isLoading = signal(false);
  tableData = signal<Log[]>([]);
  onlineUsersCount = signal<string>('0');
  userStats = signal<UserStatsWithHistory>({
    // MODIFIÉ pour utiliser UserStatsWithHistory
    total_users: 0,
    recent_users: 0,
    change_percentage: 0, // Mettre une valeur par défaut sensée
    historical_data: [] // Initialiser avec un tableau vide
  });
  title: string | undefined = '';

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly websocketService: WebsocketService,
    private readonly snackbar: MatSnackBar,
    private readonly translate: TranslateService,
    private readonly chartConfig: ChartConfigService
  ) {}

  uniqueUsersSeries: ApexAxisChartSeries = [{ name: 'Unique Users', data: [] }];
  uniqueUsersOptions: ApexOptions = defaultChartOptions({
    chart: {
      type: 'line',
      height: 150, // Augmentez un peu la hauteur si vous avez des axes
      // sparkline: {
      //   enabled: true // COMMENTEZ OU SUPPRIMEZ CETTE LIGNE
      // },
      zoom: {
        // Optionnel: permet le zoom si vous avez beaucoup de données
        enabled: false // Mettez à true si désiré
      }
    },
    colors: ['#ff9800'],
    // DataLabels sont les petites étiquettes sur les points de données eux-mêmes
    dataLabels: {
      enabled: false // Généralement false pour les graphiques de type 'area' propres
    },
    stroke: {
      // Pour s'assurer que la ligne est visible et stylée
      curve: 'smooth', // 'straight' ou 'stepline'
      width: 2
    },
    markers: {
      // Gardez les marqueurs si vous le souhaitez, surtout pour peu de points
      size: 4 // Mettez à 0 si vous ne voulez pas de marqueurs visibles
    },
    xaxis: {
      type: 'datetime', // C'est correct
      // tickAmount: 6, // Optionnel: essayez de contrôler le nombre de ticks
      labels: {
        show: true, // Assurez-vous que les labels sont affichés
        datetimeUTC: false, // Si vos timestamps sont locaux ou si vous voulez un affichage local
        format: 'dd MMM' // Format que vous avez choisi, ex: '28 Avr'
        // rotate: -45, // Optionnel: si les labels se chevauchent
        // rotateAlways: true, // Optionnel
        // hideOverlappingLabels: true, // Optionnel
      },
      axisBorder: {
        // Optionnel: pour rendre la ligne de l'axe visible
        show: true
      },
      axisTicks: {
        // Optionnel: pour rendre les petits traits de l'axe visibles
        show: true
      },
      tooltip: {
        // Tooltip pour l'axe X lui-même, généralement pas nécessaire si vous avez le tooltip principal
        enabled: false
      }
    },
    yaxis: {
      show: true, // Assurez-vous que l'axe Y est affiché
      labels: {
        show: true,
        formatter: function (value) {
          // Formate les nombres sur l'axe Y
          return value.toFixed(0); // Nombres entiers
        }
      }
    },
    tooltip: {
      enabled: true, // Assurez-vous que le tooltip principal est activé
      x: {
        format: 'dd MMM yyyy' // Format de date complet pour le tooltip
      },
      y: {
        formatter: function (value) {
          return value.toFixed(0) + ' utilisateurs'; // Personnaliser le tooltip Y
        }
      }
    },
    grid: {
      // Optionnel: pour afficher une grille de fond
      show: true,
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false // Peut être true si vous voulez des lignes verticales pour chaque tick X
        }
      },
      yaxis: {
        lines: {
          show: true // Lignes horizontales
        }
      }
    }
    // ... autres options de base de defaultChartOptions
  });

  ngOnInit() {
    this.fetchData(this.defaulPage);
    this.fetchUserStats();
    this.getOnlineUsersCount();
    this.fetchRolesAndPermissionsCount();
    this.translateLabelTooltip();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  translateLabelTooltip(){
    this.translate.get('menu.users').subscribe((label) => {
      this.translatedUsersLabel = label;
    });
    this.translate.get('dashboard_analytic.log').subscribe((label) => {
      this.translatedLogsLabel = label;
    });
  }
  onPageChange(event: PageEvent) {
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.fetchData(this.pagination.current_page);
  }

  getOnlineUsersCount() {
    this.websocketService.onlineUsers$
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => {
        this.onlineUsersCount.set(users.length.toString());
      });
  }

  fetchData(page: number) {
    this.isLoading.set(true);
    this.dashboardService
      .getAllLogs(page, this.pagination.per_page)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ResponseGlobalServer) => {
          this.updateDataSource(response);
          this.isLoading.set(false);
          this.title = response.message;
        },
        error: (error: HttpErrorResponse) => {
          this.snackbar.open('Error loading logs', 'Close', {
            duration: SNACKBAR_DURATION
          });
          this.isLoading.set(false);
        }
      });
  }

  fetchUserStats() {
    this.isLoading.set(true);
    this.dashboardService
      .getUserStats()
      .pipe(
        takeUntil(this.destroy$),
        // Ajouter un petit délai pour stabiliser
        delay(100)
      )
      .subscribe({
        next: (statsResponse: UserStatsWithHistory) => {
          this.userStats.set(statsResponse);
          // Attendre que le DOM soit stable avant de mettre à jour le graphique
          setTimeout(() => {
            this.updateUniqueUsersChart(statsResponse.historical_data);
            this.isLoading.set(false);
          }, CHART_UPDATE_DELAY);
        },
        error: (_error) => {
          this.snackbar.open('Error loading user stats', 'Close', {
            duration: SNACKBAR_DURATION
          });
          this.userStats.set({
            total_users: 0,
            recent_users: 0,
            change_percentage: 0,
            historical_data: []
          });
          this.updateUniqueUsersChart([]);
          this.isLoading.set(false);
        }
      });
  }

  private fetchRolesAndPermissionsCount() {
    // Utiliser forkJoin pour lancer les deux appels en parallèle
    forkJoin({
      roles: this.dashboardService.getRolesCount(),
      permissions: this.dashboardService.getPermissionsCount()
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (responses) => {
          const rolesCount = responses.roles.count;
          const permissionsCount = responses.permissions.count;
          const translatedLabels = [
            this.translate.instant('dashboard_analytic.label_role'),
            this.translate.instant('dashboard_analytic.label_permission')
          ];
          // Mettre à jour les données du graphique
          this.rolesAndPermissionsSeries.set([rolesCount, permissionsCount]);
          // Configurer les options pour un graphique de type RadialBar
          this.rolesAndPermissionsOptions.set({
            chart: {
              height: 384,
              type: 'pie'
            },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    show: false
                  }
                }
              }
            },
            colors: ['#008ffb', '#00e396'], // Couleurs pour Rôles et Permissions
            labels: translatedLabels,
            legend: {
              show: true,
              floating: true,
              fontSize: '14px',
              position: 'left',
              offsetX: 50,
              offsetY: 15,
              labels: {
                useSeriesColors: true
              },
              formatter: function (seriesName, opts) {
                return (
                  seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
                );
              },
              itemMargin: {
                vertical: 3
              }
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  legend: {
                    show: false
                  }
                }
              }
            ]
          });
        },
        error: (_error) => {
          this.snackbar.open('Error loading roles/permissions data', 'Close', {
            duration: SNACKBAR_DURATION
          });
        }
      });
  }

  private updateUniqueUsersChart(historicalData?: UserHistoricalDataPoint[]) {
    if (!historicalData || historicalData.length === 0) {
      this.uniqueUsersSeries = [{ name: 'Unique Users', data: [] }];
      return;
    }

    const sortedData = [...historicalData].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const chartData: { x: any; y: number }[] = sortedData.map((point) => ({
      x: new Date(point.date).getTime(),
      y: point.uniqueUsers
    }));

    const translatedName = this.translate.instant('dashboard_analytic.unique_users');

    this.uniqueUsersSeries = [
      {
        name: translatedName,
        data: chartData
      }
    ];

    // Configuration plus robuste des options
    this.uniqueUsersOptions = {
      chart: {
        type: 'line',
        height: 400,
        // Désactiver les animations pour plus de stabilité
        animations: {
          enabled: true
        },
        // Forcer le re-render
        redrawOnParentResize: true,
        redrawOnWindowResize: true
      },
      colors: ['#ff9800'],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 2 },
      markers: { size: 4 },
      xaxis: {
        type: 'datetime',
        // Configuration plus détaillée pour éviter les problèmes d'affichage
        tickAmount: Math.min(6, chartData.length), // Limiter le nombre de ticks
        labels: {
          show: true,
          datetimeUTC: false,
          format: 'dd MMM',
          hideOverlappingLabels: false, // Ne pas cacher les labels qui se chevauchent
          rotate: -70, // Rotation pour éviter les chevauchements
          rotateAlways: true,
          trim: false,
          style: {
            fontSize: '9px'
          }
        },
        axisBorder: { show: true },
        axisTicks: { show: true },
        // Définir explicitement les limites si nécessaire
        min: Math.min(...chartData.map((d) => d.x)),
        max: Math.max(...chartData.map((d) => d.x))
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          formatter: function (value) {
            return value?.toFixed(0) || '0';
          }
        },
        // Assurer un minimum et maximum cohérents
        min: 0
      },
      tooltip: {
        enabled: true,
        x: {
          formatter: (value) => {
            return this.formatDateByLang(value);
          }
        },
        y: {
          formatter: (value) => {
            const label = this.translatedUsersLabel || 'utilisateurs';
            return `${value?.toFixed(0) || '0'} ${label}`;
          }
        }
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } }
      }
    };

    // Forcer une détection de changement après un délai
    setTimeout(() => {
      // Déclencher manuellement la détection si nécessaire
    }, CHART_UPDATE_DELAY);
  }

  formatNumber(value: number | undefined): string {
    if (value === undefined || value === null) {
      return '0';
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    } else {
      return value.toString();
    }
  }
  private updateDataSource(response: ResponseGlobalServer) {
    this.logs = (response.data as Log[]) || [];
    this.dataSource.data = this.logs;
    this.tableData.set(this.logs);
    if (response.pagination) {
      this.pagination = response.pagination;
    }
    this.updateLogActivityChartData(this.logs);
  }

  // NOUVELLE MÉTHODE POUR TRAITER LES LOGS POUR LE CHART
  private updateLogActivityChartData(logs: Log[]) {
    if (!logs || logs.length === 0) {
      this.logActivitySeries = [{ name: 'Logs', data: [] }];
      this.logActivityValue = '0';
      return;
    }

    const logsByDate: { [key: string]: number } = {};

    logs.forEach((log) => {
      try {
        const date = new Date(log.created_at);
        // Vérifier que la date est valide
        if (isNaN(date.getTime())) {
          return;
        }

        const dateKey = date.toISOString().split('T')[0];
        logsByDate[dateKey] = (logsByDate[dateKey] || 0) + 1;
      } catch (e) {
        // Invalid date, skip this log
      }
    });

    const sortedDates = Object.keys(logsByDate).sort();
    const chartData: { x: any; y: number }[] = sortedDates.map((dateKey) => ({
      x: new Date(dateKey + 'T00:00:00').getTime(), // Forcer l'heure à 00:00
      y: logsByDate[dateKey]
    }));

    const translatedName = this.translate.instant('dashboard_analytic.logs_label');

    this.logActivitySeries = [
      {
        name: translatedName,
        data: chartData
      }
    ];

    const totalLogsInChart = chartData.reduce((sum, item) => sum + item.y, 0);
    this.logActivityValue = totalLogsInChart.toString();

    // Configuration similaire avec gestion des cas limites
    this.logActivityOptions = {
      ...this.logActivityOptions,
      chart: {
        ...this.logActivityOptions.chart,
        animations: { enabled: false }, // Désactiver les animations
        redrawOnParentResize: true,
        redrawOnWindowResize: true
      },
      xaxis: {
        type: 'datetime',
        tickAmount: Math.min(5, chartData.length),
        labels: {
          show: true,
          datetimeUTC: false,
          format: 'dd MMM',
          hideOverlappingLabels: false,
          rotate: -45,
          style: { fontSize: '11px' }
        },
        // Définir des limites explicites
        min:
          chartData.length > 0
            ? Math.min(...chartData.map((d) => d.x))
            : undefined,
        max:
          chartData.length > 0
            ? Math.max(...chartData.map((d) => d.x))
            : undefined
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          formatter: (val) => val?.toFixed(0) || '0'
        },
        min: 0
      },
      tooltip: {
        x: {
          formatter: (value) => {
            return this.formatDateByLang(value);
          }
        },
        y: {
          formatter: (value) => {
            const label = this.translatedLogsLabel || 'logs';
            return `${value?.toFixed(0) || '0'} ${label}`;
          }
        }
      },
      markers: {
        size: chartData.length === 1 ? 6 : 4 // Plus gros marqueur s'il n'y a qu'un point
      }
    };
  }

  formatDateByLang(date: Date | number): string {
  const lang = this.translate.currentLang || 'fr';
  return new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
}


  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}
