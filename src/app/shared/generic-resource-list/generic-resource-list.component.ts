import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  inject,
  DestroyRef,
  signal,
  TemplateRef,
  OnChanges,
  ChangeDetectorRef,
  SimpleChanges
} from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Subject,
  switchMap,
  catchError,
  of,
  startWith,
  debounceTime,
  filter,
  map,
  pairwise
} from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { CustomPaginatorIntl } from 'src/app/services/CustomPaginatorIntl';
// Importez vos composants et interfaces partagés
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { DynamicDataTableComponent } from 'src/app/shared/dynamic-data-table/dynamic-data-table.component';
import {
  PaginationConfig,
  ActionEvent
} from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { PaginationStandard } from 'src/app/interfaces/Response-globalServer';
import { PageHeaderComponent } from 'src/app/pages/components/shared/page-header/page-header.component';
import { ResourceService } from './generic-method-interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DocumentService } from 'src/app/pages/document/document.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { SearchBarComponent } from 'src/app/pages/components/shared/search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbItem } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
// ... autres imports nécessaires (MatInputModule, MatIconModule, etc.)

@Component({
  selector: 'vex-generic-resource-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VexPageLayoutContentDirective,
    PageHeaderComponent,
    DynamicDataTableComponent,
    TranslateModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    FormlyMatInputModule,
    SearchBarComponent
  ],
  templateUrl: './generic-resource-list.component.html', // Le template unifié
  styleUrls: ['./generic-resource-list.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }]
})
export class GenericResourceListComponent<T> implements OnInit, OnChanges {
  // --- INPUTS : Ce qui configure notre composant ---
  @Input({ required: true }) type: string = '';
  @Input({ required: false }) formlyFields: FormlyFieldConfig[] = [];
  @Input({ required: true }) dataService!: ResourceService<T>;
  @Input() columns?: TableColumn<T>[];
  @Input() activeJobsCount: number = 0;
  @Input() customTitle?: string; // Titre personnalisé optionnel
  @Input() disableCreateButton: boolean = false;
  @Input() externalFilters: {
    [key: string]: string | number | boolean | null;
  } = {};
  createButtonTranslationKey: string = '';
  noDataMessage: string = '';

  // --- OUTPUT : Pour remonter les actions au parent ---
  @Output() action = new EventEmitter<ActionEvent<T>>();

  // --- Propriétés internes (logique copiée depuis Roles/Permissions) ---
  layoutCtrl = new UntypedFormControl('fullwidth');
  searchCtrl = new UntypedFormControl();
  searchTerm: string = '';
  selection = new SelectionModel<T>(true, []);

  data: T[] = [];
  isLoading = signal(false);
  title: string = '';

  pagination: PaginationConfig = {
    current_page: PaginationStandard.current_page,
    per_page: PaginationStandard.pageSize,
    total: PaginationStandard.total
  };

  private readonly destroyRef = inject(DestroyRef);
  private refreshData$ = new Subject<void>();
  private searchTerm$ = new Subject<string>();

  constructor(
    private snackbar: MatSnackBar,
    private translate: TranslateService,
    private websocketService: WebsocketService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.setNoDataMessage();
    });
    this.setNoDataMessage();
    if (
      this.type === 'roles' ||
      this.type === 'permissions' ||
      this.type === 'user-jobs'
    ) {
      this.disableCreateButton = true;
    }
    this.createButtonTranslationKey =
      this.type.slice(0, -1) + '.' + this.type.slice(0, -1) + '_create';
    this.fetchData();
    this.updateJobsFinished();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['externalFilters'] && !changes['externalFilters'].firstChange) {
      if (this.searchTerm) {
        this.searchTerm$.next(this.searchTerm);
      } else {
        this.refreshData$.next();
      }
    }
  }

  updateJobsFinished() {
    this.websocketService.activeJobs$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((jobs) => jobs.length > 0), // Transforme en booléen : y a-t-il des jobs actifs ?
        pairwise(), // Compare la valeur actuelle avec la précédente [précédent, actuel]
        // On ne continue que si on passe de "il y avait des jobs" (true) à "il n'y en a plus" (true)
        filter(([wasProcessing, isNowIdle]) => wasProcessing && !isNowIdle)
      )
      .subscribe(() => {
        this.refresh();
      });
  }

  onPageChange(event: PageEvent) {
    this.isLoading.set(true);
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.refreshData$.next();
  }

  triggerCreateAction(): void {
    this.handleAction({ action: 'create' });
  }

  triggerDeletAction(): void {
    if (this.selection.selected.length > 0) {
      this.handleAction({ action: 'deleteAll', rows: this.selection.selected });
      this.selection.clear();
    }
  }

  setNoDataMessage() {
    const translatedType = this.translate.instant('global.types.' + this.type);
    this.noDataMessage = this.translate.instant('global.no_data', {
      type: translatedType
    });
  }

  handleAction(event: ActionEvent<T>) {
    this.action.emit(event);
  }
  shouldShowSearchBar(): boolean {
    const hasDataOrSearchTerm = this.data.length > 0 || this.searchTerm !== '';
    const isLoadingWithoutSearch = this.isLoading() && this.searchTerm === '';
    return hasDataOrSearchTerm && !isLoadingWithoutSearch;
  }

  fetchData() {
    // Combiner les changements de terme de recherche et de filtres
    this.searchTerm$
      .pipe(
        startWith(''),
        debounceTime(300),
        switchMap((searchTerm) => {
          this.isLoading.set(true);
          this.searchTerm = searchTerm;
          const term = searchTerm?.trim();

          if (term) {
            const combinedFilters = { ...this.externalFilters };
            return this.dataService.search(term, combinedFilters).pipe(
              catchError(() => {
                this.snackbar.open('Erreur lors de la recherche.', 'Fermer', {
                  duration: 3000
                });
                return of(null);
              })
            );
          } else {
            return this.refreshData$.pipe(
              startWith(null),
              // Utilise le service injecté via l'interface
              switchMap(() =>
                this.dataService
                  .getAll(
                    this.pagination.current_page,
                    this.pagination.per_page,
                    this.externalFilters
                  )
                  .pipe(
                    catchError(() => {
                      this.snackbar.open(
                        'Erreur lors du chargement des données.',
                        'Fermer',
                        { duration: 3000 }
                      );
                      return of(null);
                    })
                  )
              )
            );
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        if (response) {
          this.data = (response.data as T[]) || [];
          this.title =
            response.message ||
            this.type.charAt(0).toUpperCase() + this.type.slice(1);

          if (response.pagination) {
            this.pagination = response.pagination;
          } else {
            // Fallback pour la recherche qui ne pagine pas
            this.pagination.total = this.data.length;
            this.pagination.current_page = 1;
          }
        }
        this.isLoading.set(false);
        this.cdr.detectChanges();
      });
  }
  onSearchChange(term: string): void {
    this.searchTerm$.next(term);
  }

  public refresh() {
    this.isLoading.set(true);
    // Si on est en mode recherche, relancer la recherche avec le terme actuel
    if (this.searchTerm) {
      this.searchTerm$.next(this.searchTerm);
    } else {
      // Sinon, relancer le rafraîchissement normal
      this.refreshData$.next();
    }
  }

  public clearSelection() {
    this.selection.clear();
  }

  public resetSearch() {
    this.searchCtrl.setValue('');
    this.searchTerm = '';
  }

  public getBreadcrumbs(): (string | BreadcrumbItem)[] {
    const dashboardLabel = this.translate.instant('menu.dashboards');
    const currentPageLabel = this.customTitle
      ? this.translate.instant(this.customTitle)
      : this.translate.instant('menu.' + this.type);

    return [
      // First breadcrumb: Dashboard with link
      {
        label: dashboardLabel,
        link: '/index'
      },
      // Second breadcrumb: Current page without link (just text)
      {
        label: currentPageLabel,
        link: null
      }
    ];
  }
}
