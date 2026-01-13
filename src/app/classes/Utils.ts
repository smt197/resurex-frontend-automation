import { User } from '@ngneat/falso';
import { Logs } from '../interfaces/Activity-logs';
import { Role } from '../models/role.model';
import { GenericApiService } from '../services/generic-api.service';
import { Document } from '../interfaces/Document';
import { Menu } from '../interfaces/Menu';
import { map } from 'rxjs/operators';

export class Utils {
  constructor() {}
  static formatFileSize(octets: number, decimals: number = 2): string {
    if (octets === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(octets) / Math.log(k));

    return parseFloat((octets / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  static createDataService<
    Tmodel = User | Role | Logs | Permissions | Document | Menu
  >(type: string, genericApi: GenericApiService) {
    return {
      getAll: (page = 1, perPage = 5, filters = {}) =>
        genericApi.getAll<Tmodel>(type, page, perPage, filters),
      search: (term: string, filters = {}) =>
        genericApi.search<Tmodel>(type, term, filters)
    };
  }

  /**
   * Create a data service from a mock service
   * Used for development mode with local JSON data
   */
  static createDataServiceFromMock<Tmodel = any>(mockService: any) {
    return {
      getAll: (page = 1, perPage = 5, filters = {}) => {
        // Transform mock getAll() to match the expected API response format
        return mockService.getAll().pipe(
          map((data: Tmodel[]) => ({
            data,
            message: 'Mock data loaded',
            pagination: {
              current_page: page,
              per_page: perPage,
              total: data.length
            }
          }))
        );
      },
      search: (term: string, filters = {}) => {
        // Transform mock getAll() to match the expected API response format
        return mockService.getAll().pipe(
          map((data: Tmodel[]) => {
            // Filter data by search term
            const filteredData = data.filter((item: any) =>
              Object.values(item).some(value =>
                String(value).toLowerCase().includes(term.toLowerCase())
              )
            );
            return {
              data: filteredData,
              message: 'Mock search results',
              pagination: {
                current_page: 1,
                per_page: filteredData.length,
                total: filteredData.length
              }
            };
          })
        );
      },
      create: (data: Partial<Tmodel>) => {
        return mockService.create(data).pipe(
          map((item: Tmodel) => ({
            data: item,
            message: 'Item created successfully'
          }))
        );
      },
      update: (id: any, data: Partial<Tmodel>) => {
        return mockService.update(id, data).pipe(
          map((item: Tmodel) => ({
            data: item,
            message: 'Item updated successfully'
          }))
        );
      },
      delete: (id: any) => {
        return mockService.delete(id).pipe(
          map(() => ({
            message: 'Item deleted successfully'
          }))
        );
      },
      deleteMultiple: (ids: any[]) => {
        return mockService.deleteMultiple(ids).pipe(
          map(() => ({
            message: 'Items deleted successfully'
          }))
        );
      }
    };
  }
}
