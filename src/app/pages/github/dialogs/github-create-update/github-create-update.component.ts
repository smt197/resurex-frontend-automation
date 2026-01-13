import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GithubRepository } from 'src/app/interfaces/GithubRepository';
import { getGithubRepositoryFormlyFields } from 'src/app/models/github-repository.model';

@Component({
  selector: 'vex-github-create-update',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    TranslateModule
  ],
  templateUrl: './github-create-update.component.html',
  styleUrls: ['./github-create-update.component.scss']
})
export class GithubCreateUpdateComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { mode: 'create' | 'update'; repository?: GithubRepository },
    private dialogRef: MatDialogRef<GithubCreateUpdateComponent>,
    private translate: TranslateService
  ) {
    this.mode = data.mode;

    if (this.mode === 'update' && data.repository) {
      this.model = { ...data.repository };
    } else {
      // Default values for create mode
      this.model = {
        private: false,
        visibility: 'public',
        default_branch: 'main'
      };
    }
  }

  ngOnInit(): void {
    this.fields = getGithubRepositoryFormlyFields(this.translate);
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close({ model: this.model });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
