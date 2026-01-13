// src/app/services/form-data-builder.service.ts
import { Injectable } from '@angular/core';
import { UserCreateUpdateModel } from 'src/app/interfaces/User';

/**
 * Service responsible for building FormData objects for various entities
 */
@Injectable({
  providedIn: 'root'
})
export class FormDataBuilderService {
  /**
   * Create FormData for any model (generic method)
   */
  createFormData(model: any): FormData {
    const formData = new FormData();

    for (const key in model) {
      if (model.hasOwnProperty(key)) {
        const value = model[key];

        if (value === null || value === undefined) {
          continue;
        }

        // Handle File or FileList
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value instanceof FileList || (Array.isArray(value) && value[0] instanceof File)) {
          const files = Array.isArray(value) ? value : Array.from(value);
          files.forEach((file: File) => {
            formData.append(`${key}[]`, file);
          });
        }
        // Handle Date
        else if (value instanceof Date) {
          const formattedDate = this.formatDateForLaravel(value);
          if (formattedDate) {
            formData.append(key, formattedDate);
          }
        }
        // Handle arrays
        else if (Array.isArray(value)) {
          value.forEach((item) => {
            if (typeof item === 'object' && item !== null) {
              formData.append(`${key}[]`, JSON.stringify(item));
            } else {
              formData.append(`${key}[]`, item.toString());
            }
          });
        }
        // Handle booleans
        else if (typeof value === 'boolean') {
          formData.append(key, value ? '1' : '0');
        }
        // Handle objects
        else if (typeof value === 'object' && value !== null) {
          formData.append(key, JSON.stringify(value));
        }
        // Handle primitives (string, number)
        else {
          formData.append(key, value.toString());
        }
      }
    }

    return formData;
  }

  /**
   * Create FormData for user creation or update
   */
  createUserFormData(user: UserCreateUpdateModel): FormData {
    const formData = new FormData();

    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('phone', user.phone || '');
    formData.append('is_blocked', user.is_blocked ? '1' : '0');
    formData.append('otp_enabled', user.otp_enabled ? '1' : '0');

    if (user.birthday) {
      const formattedDate = this.formatDateForLaravel(user.birthday);
      if (formattedDate) {
        formData.append('birthday', formattedDate);
      }
    }

    this.appendCountryData(formData, user.available_countries);
    this.appendRolesData(formData, user.roles);
    this.appendPermissionsData(formData, user.permissions);

    if (user.photo instanceof File) {
      formData.append('photo', user.photo);
    }

    return formData;
  }

  /**
   * Append country data to FormData
   */
  private appendCountryData(formData: FormData, availableCountries: any): void {
    if (availableCountries) {
      if (Array.isArray(availableCountries) && availableCountries.length > 0) {
        const country = availableCountries[0];
        formData.append('country_id', country.id.toString());
      } else if (typeof availableCountries === 'object' && availableCountries.id) {
        formData.append('country_id', availableCountries.id.toString());
      }
    } else {
      formData.append('country_id', '');
    }
  }

  /**
   * Append roles data to FormData
   */
  private appendRolesData(formData: FormData, roles: any[]): void {
    if (roles && Array.isArray(roles)) {
      roles.forEach((role) => {
        formData.append('roles[]', role.name);
      });
    }
  }

  /**
   * Append permissions data to FormData
   */
  private appendPermissionsData(formData: FormData, permissions: any[]): void {
    if (permissions && Array.isArray(permissions)) {
      permissions.forEach((permission) => {
        formData.append('permissions[]', permission.name);
      });
    }
  }

  /**
   * Format date for Laravel backend (YYYY-MM-DD)
   */
  formatDateForLaravel(date: Date | string | null): string | null {
    if (!date) return null;

    // If already in correct format
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }

    // Convert from Date object or other string format
    const jsDate = new Date(date);
    if (isNaN(jsDate.getTime())) return null;

    return jsDate.toISOString().split('T')[0]; // Extract YYYY-MM-DD
  }
}
