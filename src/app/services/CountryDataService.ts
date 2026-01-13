// country-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth-service';
import { Country } from '../models/country.model';

@Injectable({ providedIn: 'root' })
export class CountryDataService {
  private countriesSource = new BehaviorSubject<Country[]>([]) 
  countries$ = this.countriesSource.asObservable();

  constructor(private authService: AuthService) {
    this.loadCountries();
  }

  loadCountries(): void {
    this.authService.getAllCountry().subscribe({
      next: (response) => {
        this.countriesSource.next(response.data as Country[]);
      },
      error: (error) => console.error('Failed to load countries', error)
    });
  }
}