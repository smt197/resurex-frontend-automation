import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, ReactiveFormsModule, FormArray, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { moduleManagersFormlyFields, ModuleField } from 'src/app/interfaces/Module-managers';
import { ModuleManager } from 'src/app/models/module-manager.model';

@Component({
  selector: 'vex-module-manager-create-update',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    TranslateModule
  ],
  templateUrl: './module-manager-create-update.component.html',
  styleUrls: ['./module-manager-create-update.component.scss']
})
export class ModuleManagerCreateUpdateComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  mode: 'create' | 'update' = 'create';

  // Form for managing fields
  fieldsForm = new FormGroup({
    fields: new FormArray([])
  });

  // Current step index
  currentStep = 0;
  totalSteps = 3;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'create' | 'update'; moduleManager?: ModuleManager },
    private dialogRef: MatDialogRef<ModuleManagerCreateUpdateComponent>
  ) {
    this.mode = data.mode;

    if (this.mode === 'update' && data.moduleManager) {
      this.model = { ...data.moduleManager };
    } else {
      // Default values for create mode
      this.model = {
        identifierField: 'id',
        requiresAuth: true,
        devMode: false,
        enabled: true,
        roles: ['user']
      };
    }
  }

  ngOnInit(): void {
    // Clone fields to avoid mutation
    this.fields = JSON.parse(JSON.stringify(moduleManagersFormlyFields));

    // Initialize fields array if in update mode
    if (this.mode === 'update' && this.model.fields && Array.isArray(this.model.fields)) {
      this.model.fields.forEach((field: ModuleField) => {
        this.addFieldWithData(field);
      });
    }
  }

  get fieldsArray(): FormArray {
    return this.fieldsForm.get('fields') as FormArray;
  }

  addField(): void {
    const fieldGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]*$/)  // Only letters, numbers, underscores, must start with letter or underscore
      ]),
      type: new FormControl('string'),
      required: new FormControl(false)
    });
    this.fieldsArray.push(fieldGroup);
  }

  addFieldWithData(field: ModuleField): void {
    const fieldGroup = new FormGroup({
      name: new FormControl(field.name || '', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z_][a-zA-Z0-9_]*$/)
      ]),
      type: new FormControl(field.type || 'string'),
      required: new FormControl(field.required || false)
    });
    this.fieldsArray.push(fieldGroup);
  }

  removeField(index: number): void {
    this.fieldsArray.removeAt(index);
  }

  save(): void {
    // Mark all fields as touched to show validation errors
    this.form.markAllAsTouched();
    this.fieldsForm.markAllAsTouched();

    if (this.form.valid && this.fieldsForm.valid) {
      // Add fields from fieldsForm to model
      const fields = this.fieldsArray.value as ModuleField[];
      const result = {
        ...this.model,
        fields: fields.filter((f: ModuleField) => f.name && f.name.trim())
      };

      this.dialogRef.close({ model: result });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  getFieldIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      'string': 'text_fields',
      'email': 'email',
      'password': 'lock',
      'number': 'numbers',
      'boolean': 'toggle_on',
      'Date': 'calendar_today',
      'File': 'upload_file'
    };
    return iconMap[type] || 'label';
  }

  // Navigation methods
  nextStep(): void {
    if (this.canProceedToNextStep()) {
      this.currentStep++;
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = this.currentStep;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = this.currentStep;
      }
    }
  }

  onTabChange(index: number): void {
    // Les onglets sont désactivés, donc cette méthode ne devrait pas être appelée
    // par un clic utilisateur. Elle est appelée uniquement par la navigation Next/Previous
    this.currentStep = index;
  }

  canProceedToNextStep(): boolean {
    switch (this.currentStep) {
      case 0: // Basic Info step
        return this.form.valid;
      case 1: // Fields step
        return this.fieldsForm.valid && this.fieldsArray.length > 0;
      case 2: // Summary step
        return true;
      default:
        return false;
    }
  }

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  isLastStep(): boolean {
    return this.currentStep === this.totalSteps - 1;
  }

  getStepValidationMessage(): string {
    switch (this.currentStep) {
      case 0:
        return 'Please fill in all required fields in Basic Info';
      case 1:
        return 'Please add at least one field with valid information';
      default:
        return '';
    }
  }
}
