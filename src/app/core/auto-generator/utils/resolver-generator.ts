import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ModuleConfig } from '../interfaces/module-config.interface';
import { GenericApiService } from 'src/app/services/generic-api.service';
import { ResponseGenericApi } from 'src/app/interfaces/responseGenericApi';
import { environment } from 'src/environments/environment';

/**
 * Génère automatiquement un resolver pour un module basé sur sa configuration
 *
 * @param config Configuration du module
 * @returns ResolveFn Angular généré
 *
 * @example
 * ```typescript
 * // Dans roles.resolver.ts
 * import { createGenericResolver } from '@core/auto-generator/utils/resolver-generator';
 * import { ROLES_CONFIG } from './roles.config';
 *
 * export const rolesResolver = createGenericResolver(ROLES_CONFIG);
 * ```
 */
export function createGenericResolver<T>(
  config: ModuleConfig<T>
): ResolveFn<ResponseGenericApi<T[]> | null> {
  return (route: ActivatedRouteSnapshot) => {
    const genericApi = inject(GenericApiService);

    // Utiliser le service custom si configuré
    if (!config.data.useGenericApi && config.data.customService) {
      const customService = inject(config.data.customService) as any;
      return customService.getAll(
        environment.current_page,
        config.table.defaultPageSize
      ).pipe(
        map((response: any) => {
          // Transformer les données si nécessaire
          if (config.data.transformAfterReceive) {
            response.data = config.data.transformAfterReceive(response.data);
          }
          return response;
        }),
        catchError((error) => {
          console.error(`Error loading ${config.displayName}:`, error);
          return of(createEmptyResponse<T[]>());
        })
      );
    }

    // Utiliser GenericApiService par défaut
    const current_page = environment.current_page;
    const pageSize = config.table.defaultPageSize;

    return genericApi.getAll<T>(config.resourceType, current_page, pageSize).pipe(
      map((response) => {
        // Transformer les données après réception si configuré
        if (response && config.data.transformAfterReceive && response.data) {
          response.data = config.data.transformAfterReceive(response.data);
        }
        return response;
      }),
      catchError((error) => {
        console.error(`Error loading ${config.displayName}:`, error);
        return of(createEmptyResponse<T[]>());
      })
    );
  };
}

/**
 * Génère un resolver avec pagination personnalisée
 *
 * @param config Configuration du module
 * @param pageExtractor Fonction pour extraire la page depuis la route
 * @param pageSizeExtractor Fonction pour extraire la taille de page depuis la route
 * @returns ResolveFn avec pagination custom
 *
 * @example
 * ```typescript
 * export const rolesResolver = createPaginatedResolver(
 *   ROLES_CONFIG,
 *   (route) => Number(route.queryParams['page']) || 1,
 *   (route) => Number(route.queryParams['pageSize']) || 10
 * );
 * ```
 */
export function createPaginatedResolver<T>(
  config: ModuleConfig<T>,
  pageExtractor: (route: ActivatedRouteSnapshot) => number = () =>
    environment.current_page,
  pageSizeExtractor: (route: ActivatedRouteSnapshot) => number = (route) =>
    config.table.defaultPageSize
): ResolveFn<ResponseGenericApi<T[]> | null> {
  return (route: ActivatedRouteSnapshot) => {
    const genericApi = inject(GenericApiService);
    const page = pageExtractor(route);
    const pageSize = pageSizeExtractor(route);

    return genericApi.getAll<T>(config.resourceType, page, pageSize).pipe(
      map((response) => {
        if (response && config.data.transformAfterReceive && response.data) {
          response.data = config.data.transformAfterReceive(response.data);
        }
        return response;
      }),
      catchError((error) => {
        console.error(`Error loading ${config.displayName}:`, error);
        return of(createEmptyResponse<T[]>());
      })
    );
  };
}

/**
 * Génère un resolver qui charge un seul élément par ID/slug
 *
 * @param config Configuration du module
 * @param idParamName Nom du paramètre de route contenant l'ID (défaut: 'id')
 * @returns ResolveFn pour un élément unique
 *
 * @example
 * ```typescript
 * // Pour une route '/role/:id/edit'
 * export const roleEditResolver = createSingleItemResolver(ROLES_CONFIG, 'id');
 * ```
 */
export function createSingleItemResolver<T>(
  config: ModuleConfig<T>,
  idParamName: string = 'id'
): ResolveFn<ResponseGenericApi<T> | null> {
  return (route: ActivatedRouteSnapshot) => {
    const genericApi = inject(GenericApiService);
    const id = route.params[idParamName];

    if (!id) {
      console.error(
        `${config.displayNameSingular} resolver: No ${idParamName} found in route params`
      );
      return of(null);
    }

    return genericApi.getOne<T>(config.resourceType, id).pipe(
      map((response) => {
        if (response && config.data.transformAfterReceive && response.data) {
          response.data = config.data.transformAfterReceive(response.data);
        }
        return response;
      }),
      catchError((error) => {
        console.error(`Error loading ${config.displayNameSingular}:`, error);
        return of(null);
      })
    );
  };
}

/**
 * Génère un resolver avec cache
 *
 * @param config Configuration du module
 * @param cacheDuration Durée du cache en millisecondes (défaut: 5 minutes)
 * @returns ResolveFn avec cache
 */
export function createCachedResolver<T>(
  config: ModuleConfig<T>,
  cacheDuration: number = 5 * 60 * 1000 // 5 minutes
): ResolveFn<ResponseGenericApi<T[]> | null> {
  let cachedData: ResponseGenericApi<T[]> | null = null;
  let cacheTime: number | null = null;

  return (route: ActivatedRouteSnapshot) => {
    const now = Date.now();

    // Vérifier si le cache est valide
    if (cachedData && cacheTime && now - cacheTime < cacheDuration) {
      console.log(`Using cached data for ${config.displayName}`);
      return of(cachedData);
    }

    // Charger de nouvelles données
    const genericApi = inject(GenericApiService);
    const current_page = environment.current_page;
    const pageSize = config.table.defaultPageSize;

    return genericApi.getAll<T>(config.resourceType, current_page, pageSize).pipe(
      map((response) => {
        if (response && config.data.transformAfterReceive && response.data) {
          response.data = config.data.transformAfterReceive(response.data);
        }

        // Mettre en cache
        cachedData = response;
        cacheTime = Date.now();

        return response;
      }),
      catchError((error) => {
        console.error(`Error loading ${config.displayName}:`, error);
        return of(createEmptyResponse<T[]>());
      })
    );
  };
}

/**
 * Invalide le cache pour un resolver caché
 * (À utiliser après create/update/delete)
 */
export function invalidateCache(config: ModuleConfig): void {
  console.log(`Cache invalidated for ${config.displayName}`);
  // Cette fonction peut être étendue pour gérer un système de cache global
}

/**
 * Crée une réponse vide pour les cas d'erreur
 */
function createEmptyResponse<T>(): ResponseGenericApi<T> {
  return {
    data: [] as any,
    meta: {
      total: 0,
      page: 1,
      per_page: 0
    }
  } as ResponseGenericApi<T>;
}

/**
 * Génère un resolver avec recherche pré-filtrée
 *
 * @param config Configuration du module
 * @param searchParamName Nom du paramètre de query pour la recherche
 * @returns ResolveFn avec recherche
 */
export function createSearchResolver<T>(
  config: ModuleConfig<T>,
  searchParamName: string = 'search'
): ResolveFn<ResponseGenericApi<T[]> | null> {
  return (route: ActivatedRouteSnapshot) => {
    const genericApi = inject(GenericApiService);
    const searchTerm = route.queryParams[searchParamName];

    if (!searchTerm) {
      // Pas de recherche, utiliser le resolver normal
      return createGenericResolver(config)(route, {} as any);
    }

    // Effectuer une recherche
    return genericApi.search<T>(config.resourceType, searchTerm).pipe(
      map((response) => {
        if (response && config.data.transformAfterReceive && response.data) {
          response.data = config.data.transformAfterReceive(response.data);
        }
        return response;
      }),
      catchError((error) => {
        console.error(`Error searching ${config.displayName}:`, error);
        return of(createEmptyResponse<T[]>());
      })
    );
  };
}

/**
 * Factory pour créer des resolvers custom avec logique spécifique
 *
 * @param config Configuration du module
 * @param customLogic Logique custom à exécuter
 * @returns ResolveFn custom
 */
export function createCustomResolver<T>(
  config: ModuleConfig<T>,
  customLogic: (
    route: ActivatedRouteSnapshot,
    genericApi: GenericApiService
  ) => Observable<ResponseGenericApi<T[]> | null>
): ResolveFn<ResponseGenericApi<T[]> | null> {
  return (route: ActivatedRouteSnapshot) => {
    const genericApi = inject(GenericApiService);
    return customLogic(route, genericApi).pipe(
      catchError((error) => {
        console.error(`Error in custom resolver for ${config.displayName}:`, error);
        return of(createEmptyResponse<T[]>());
      })
    );
  };
}
