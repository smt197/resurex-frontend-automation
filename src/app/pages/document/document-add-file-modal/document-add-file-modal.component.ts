import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { getFieldAddNewFile } from 'src/app/models/document.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-document-add-file-modal',
  templateUrl: './document-add-file-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatMenuModule,
    SharedModule
  ]
})
export class DocumentAddFileModalComponent implements OnInit {
  form = new FormGroup({});
  model: { files?: File[] } = {};
  fields: FormlyFieldConfig[] = [];

  constructor(
    public dialogRef: MatDialogRef<DocumentAddFileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { slug: string },
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.fields = getFieldAddNewFile(this.translate, this);
  }

  uploadNewFiles(): void {
    this.dialogRef.close(this.model);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
