import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  OnInit,
  signal,
  ViewChild
} from '@angular/core';
import { PageHeaderComponent } from '../components/shared/page-header/page-header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Log } from 'src/app/models/logs.model';
import { MatTableDataSource } from '@angular/material/table';
import {
  PaginationStandard,
  ResponseGlobalServer
} from 'src/app/interfaces/Response-globalServer';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent
} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DashboardService } from '../dashboard/dashboard-analytics/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { WidgetTableComponent } from '../components/widgets/widget-table/widget-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  CommonModule,
  formatDate,
  NgFor,
  NgIf,
  NgSwitch
} from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CustomPaginatorIntl } from 'src/app/services/CustomPaginatorIntl';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

@Component({
  selector: 'vex-activity-logs',
  standalone: true,
  imports: [
    PageHeaderComponent,
    WidgetTableComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    NgIf,
    NgFor,
    CommonModule,
    NgSwitch,
    MatIconModule,
    SharedModule,
    TranslateModule
  ],
  templateUrl: './activity-logs.component.html',
  styleUrl: './activity-logs.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }]
})
export class ActivityLogsComponent implements OnInit, AfterViewInit {
  logs: Log[] = [];
  dataSource: MatTableDataSource<Log> = new MatTableDataSource<Log>();
  searchCtrl = new UntypedFormControl();
  defaulPage: number = 1;

  pagination = {
    current_page: PaginationStandard.current_page,
    per_page: PaginationStandard.pageSize,
    total: PaginationStandard.total
  };

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  title: string | undefined = '';
  layoutCtrl = new UntypedFormControl('fullwidth');
  private readonly destroyRef = inject(DestroyRef);
  private destroy$ = new Subject<void>();

  rangeGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  isLoading = signal(false);
  tableData = signal<Log[]>([]);

  @Input()
  columns: TableColumn<Log>[] = [
    {
      label: 'log.description',
      property: 'description',
      type: 'text',
      icon: 'description',
      visible: true
    },
    {
      label: 'log.event',
      property: 'event',
      type: 'text',
      icon: 'event_note',
      visible: true
    },
    {
      label: 'log.causer',
      property: 'causer_type',
      type: 'text',
      icon: 'person_outline',
      visible: true
    },
    {
      label: 'log.created_at',
      property: 'created_at',
      type: 'text',
      icon: 'calendar_today',
      visible: true
    }
  ];

  visibleColumns = computed(() =>
    this.columns
      .filter((column) => column.visible)
      .map((column) => column.property)
  );

  constructor(
    private dashboardService: DashboardService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchData(this.defaulPage);
    this.search();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onPageChange(event: PageEvent) {
    this.pagination.current_page = event.pageIndex + 1;
    this.pagination.per_page = event.pageSize;
    this.fetchData(this.pagination.current_page);
  }

  search() {
    this.searchCtrl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((search: string) => {
        this.fetchData(1, search);
      });

    this.rangeGroup.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.fetchData(1, this.searchCtrl.value);
      });
  }

  fetchData(page: number = 1, search: string = '') {
    const sort = this.sort?.active;
    const order = this.sort?.direction;
    const start = this.rangeGroup.get('start')?.value;
    const end = this.rangeGroup.get('end')?.value;

    const dateDebut = start
      ? formatDate(start, 'yyyy-MM-dd 00:00:00', 'en-US')
      : undefined;

    const dateFin = end
      ? formatDate(end, 'yyyy-MM-dd 23:59:59', 'en-US')
      : undefined;

    this.dashboardService
      .getAllLogs(
        page,
        this.pagination.per_page,
        search,
        sort || 'created_at', // par défaut trié par 'created_at'
        order || 'desc', // ordre décroissant par défaut
        dateDebut,
        dateFin
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ResponseGlobalServer) => {
          this.updateDataSource(response);
          this.isLoading.set(false);
          this.title = response.message;
        },
        error: () => {
          this.snackbar.open('Error loading logs', 'Close', { duration: 3000 });
          this.isLoading.set(false);
        }
      });
  }

  private updateDataSource(response: ResponseGlobalServer) {
    this.logs = (response.data as Log[]) || [];
    this.dataSource.data = this.logs;
    this.tableData.set(this.logs);
    if (response.pagination) {
      this.pagination = response.pagination;
    }
  }

  ngAfterViewInit() {
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) {
      this.dataSource.sort = this.sort;

      this.sort.sortChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.fetchData(1, this.searchCtrl.value); // Recharger au tri
      });
    }
  }
}
