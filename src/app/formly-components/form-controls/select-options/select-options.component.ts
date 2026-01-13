import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger60ms } from '@vex/animations/stagger.animation';
import { MatSelectSearchModule } from 'mat-select-search';
import { Country } from 'src/app/models/country.model';
import { AuthService } from 'src/app/services/auth-service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { CountryDataService } from 'src/app/services/CountryDataService';
import { filter } from 'rxjs';

interface ValidationMessages {
  phone?: string;
}

@Component({
  selector: 'vex-select-options',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
  imports: [ 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule,
    MatButtonModule,
    NgIf,
    MatSelectModule, 
    MatOptionModule,
    NgFor,
    MatDatepickerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    AsyncPipe,
    MatSelectSearchModule,
    NgxMatIntlTelInputComponent
  ],
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.scss'
})
export class SelectOptionsComponent extends FieldType<FieldTypeConfig> implements OnInit {
  @ViewChild('phoneInput') phoneInput?: NgxMatIntlTelInputComponent;
   phoneControl = new FormControl(''); 
  
  countryCtrl = new FormControl();
  filteredCountries: Country[] = [];
  userCountry: Country | null = null;
  countriesAsRecords: Record<string, string>[] = [];
  preferredCountries: string[] = ['fr', 'us', 'gb'];
  onlyCountries: string[] = [];
  allCountries: Country[] = [];

  constructor(
    private authservice: AuthService,
    private cdr: ChangeDetectorRef,
    private countryDataService: CountryDataService,
  ) {
    super();
  }

ngOnInit() {
 this.countryDataService.countries$.pipe(
      filter(countries => !!countries)
    ).subscribe(countries => {
      this.allCountries = countries;
      this.filteredCountries = [...countries];
      this.countriesAsRecords = this.getCountriesAsRecords();
      this.initializeCountries();
      this.initializePhoneField();
      this.cdr.markForCheck();
    });

    // Initialisation séparée pour le champ téléphone
    if (this.isPhoneField()) {
      this.initializePhoneControl();
    }
}
 private initializePhoneControl() {
    // Si vous avez une valeur initiale pour le téléphone
    if (this.field.model?.phone) {
      this.phoneControl.setValue(this.field.model.phone);
    }

    // Synchronisation avec le formControl parent
    this.phoneControl.valueChanges.subscribe(value => {
      this.formControl.setValue(value);
    });
  }


  initializeCountries() {
    if (!this.allCountries.length) return;

    // 1. Vérifier la valeur existante du formControl
    if (this.formControl.value) {
      const found = this.findMatchingCountry(this.formControl.value);
      if (found) {
        this.setCountry(found);
        return;
      }
    }

    // 2. Vérifier available_countries dans le modèle
    if (this.field.model?.available_countries?.length) {
      const available = this.field.model.available_countries[0];
      const found = this.findMatchingCountry(available);
      if (found) {
        this.setCountry(found);
        return;
      }
    }

    // 3. Fallback: premier pays seulement si nécessaire
    if (!this.formControl.value) {
      this.setCountry(this.allCountries[0]);
    }
  }

  private findMatchingCountry(countryData: any): Country | undefined {
    if (!countryData || !this.allCountries.length) return undefined;

    return this.allCountries.find(country => 
      (country.id && countryData.id && country.id === countryData.id) ||
      (country.country_code && countryData.country_code && 
       country.country_code.toLowerCase() === countryData.country_code.toLowerCase())
    );
  }

  private setCountry(country: Country) {
    this.userCountry = country;
    this.countryCtrl.setValue(country, { emitEvent: false });
    if (!this.formControl.value) {
      this.formControl.setValue(country, { emitEvent: false });
    }
  }

  initializePhoneField() {
    if (this.allCountries.length > 0) {
      this.onlyCountries = this.allCountries
        .filter(c => c.country_code)
        .map(c => c.country_code!.toLowerCase());
    }
  }

  getCountriesAsRecords(): Record<string, string>[] {
    return this.allCountries.map(country => ({
      id: country.id?.toString() || '',
      country_name: country.country_name || '',
      country_code: country.country_code || '',
      dial_code: country.dial_code || '',
      image_url: country.image_url || ''
    }));
  }

  onCountriesFiltered(filteredRecords: Record<string, string>[]) {
    const filteredIds = new Set(filteredRecords.map(record => record['id']));
    this.filteredCountries = this.allCountries.filter(c => 
      filteredIds.has(c.id?.toString() as string)
    );
    this.cdr.markForCheck();
  }

  onCountrySelected(selectedCountry: Country) {
    if (selectedCountry) {
      this.formControl.setValue(selectedCountry);
      this.userCountry = selectedCountry;
      this.cdr.markForCheck();
    }
  }

  get phoneErrorMessage(): string {
    return (this.field.validation?.messages as ValidationMessages)?.phone || 'Numéro invalide';
  }

  isCountryField(): boolean {
    return this.field.key === 'available_countries';
  }

  isPhoneField(): boolean {
    return this.field.key === 'phone';
  }

  compareCountries(a: Country, b: Country): boolean {
    return a?.id === b?.id;
  }

  get showError() {
    return this.formControl?.invalid && (this.formControl.dirty || this.formControl.touched);
  }
}