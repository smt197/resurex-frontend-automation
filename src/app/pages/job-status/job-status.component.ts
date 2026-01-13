import { Component, OnInit, ViewChild, signal } from '@angular/core'; // Added OnInit
import { CommonModule } from '@angular/common';
import { GenericResourceListComponent } from 'src/app/shared/generic-resource-list/generic-resource-list.component';
import { ActionEvent } from 'src/app/shared/dynamic-data-table/Dynamic-Table-Interface';
import { getJobStatusTableFields } from 'src/app/models/document.model';
import { ResourceService } from 'src/app/shared/generic-resource-list/generic-method-interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DocumentService } from '../document/document.service';
import { JobStatus } from 'src/app/interfaces/JobStatus';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';

@Component({
  selector: 'vex-job-status',
  standalone: true,
  imports: [CommonModule, GenericResourceListComponent, TranslateModule],
  templateUrl: './job-status.component.html',
  styleUrl: './job-status.component.scss'
})
export class JobStatusComponent implements OnInit {
  type = 'user-jobs';
  isLoading = signal(true);
  dataService: ResourceService<JobStatus>;
  activeJobsCount$: Observable<number>;
  @ViewChild(GenericResourceListComponent)
  resourceList!: GenericResourceListComponent<JobStatus>;
  formlyFields: FormlyFieldConfig[] = [];

  constructor(
    private genericApi: GenericApiService,
    private translate: TranslateService,
    private documentService: DocumentService
  ) {
   this.dataService = {
     getAll: (page: number, perPage: number) =>
        this.genericApi.getAll<JobStatus>(this.type, page, perPage),
     getAllSimple: (ressource = this.type) =>
        this.genericApi.getAllSimple<ResponseGenericApi<JobStatus[]>>(ressource),
      search: (term) => this.genericApi.search<JobStatus>(this.type, term)
    };
    this.activeJobsCount$ = this.documentService.activeJobsCount$;
  }

  ngOnInit(): void {
    this.formlyFields = getJobStatusTableFields(this.translate);
  }

  handleAction(event: ActionEvent<JobStatus>) {}
}
