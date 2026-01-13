import { Injectable, Inject, forwardRef } from '@angular/core';
import {
  NavigationDropdown,
  NavigationItem,
  NavigationLink,
  NavigationSubheading,
  NavigationCategory
} from './navigation-item.interface';
import { BehaviorSubject, Observable, of, map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Menu } from 'src/app/interfaces/Menu';
import { Category } from 'src/app/interfaces/Category';
import { GenericApiService } from 'src/app/services/generic-api.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationLoaderService {
  private readonly _items: BehaviorSubject<NavigationItem[]> =
    new BehaviorSubject<NavigationItem[]>([]);

  private authorizationDropdown: NavigationDropdown | null = null;

  get items$(): Observable<NavigationItem[]> {
    return this._items.asObservable();
  }

  /**
   * Force le rechargement de la navigation
   */
  public forceReload(
    rolesNames: string[],
    unreadCount$?: Observable<number>,
    chatUnreadCount$?: Observable<number>,
    resolverData?: Menu[]
  ): void {
    this.loadNavigation(
      rolesNames,
      unreadCount$,
      chatUnreadCount$,
      resolverData
    );
  }

  /**
   * Recharge seulement les menus sans affecter les badges existants
   */
  public reloadMenusOnly(rolesNames: string[], unreadCount$?: Observable<number>, chatUnreadCount$?: Observable<number>): void {
    const currentItems = this._items.getValue();

    this.genericApi.getAlls<Menu>('user-menus').subscribe({
      next: (response) => {
        if (response && response.data && Array.isArray(response.data)) {
          const allMenus = response.data as Menu[];
          const filteredMenus = this.filterMenusByRole(allMenus, rolesNames);

          const existingBadges = this.extractBadgesFromNavigation(currentItems);
          
          // Extract existing badge observables for notifications and chat
          const existingNotificationObservable = this.extractBadgeObservable(currentItems, '/notifications');
          const existingChatObservable = this.extractBadgeObservable(currentItems, '/chat');
          
          const navigationItems = this.convertMenusToNavigation(
            filteredMenus,
            unreadCount$ || existingNotificationObservable || of(0),
            chatUnreadCount$ || existingChatObservable || of(0)
          );

          const finalItems = this.restoreBadgesToNavigation(navigationItems, existingBadges);
          this._items.next(finalItems);
        }
      },
      error: (error) => {
        console.error('Error reloading menus:', error);
      }
    });
  }

  private extractBadgeObservable(items: NavigationItem[], routePattern: string): Observable<number> | null {
    const findBadgeObservable = (navItems: NavigationItem[]): Observable<number> | null => {
      for (const item of navItems) {
        if (item.type === 'link' && item.route.includes(routePattern) && item.badge) {
          return item.badge.value.pipe(
            map(value => typeof value === 'string' ? parseInt(value, 10) || 0 : value)
          ) as Observable<number>;
        }
        if (item.type === 'dropdown' && item.children) {
          const childResult = findBadgeObservable(item.children);
          if (childResult) return childResult;
        }
        if (item.type === 'category' && item.children) {
          const childResult = findBadgeObservable(item.children);
          if (childResult) return childResult;
        }
      }
      return null;
    };

    return findBadgeObservable(items);
  }

  private extractBadgesFromNavigation(
    items: NavigationItem[]
  ): Map<string, any> {
    const badges = new Map();

    const extractFromItem = (item: NavigationItem) => {
      if (item.type === 'link' && item.badge) {
        badges.set(item.route, item.badge);
      }
      if (item.type === 'dropdown' && item.children) {
        item.children.forEach(extractFromItem);
      }
      if (item.type === 'category' && item.children) {
        item.children.forEach(extractFromItem);
      }
    };

    items.forEach(extractFromItem);
    return badges;
  }

  private restoreBadgesToNavigation(
    items: NavigationItem[],
    badges: Map<string, any>
  ): NavigationItem[] {
    return items.map((item) => {
      if (item.type === 'link' && badges.has(item.route)) {
        return { ...item, badge: badges.get(item.route) } as NavigationLink;
      }
      if (item.type === 'dropdown' && item.children) {
        return {
          ...item,
          children: this.restoreBadgesToNavigation(item.children, badges) as (
            | NavigationLink
            | NavigationDropdown
          )[]
        } as NavigationDropdown;
      }
      return item;
    });
  }

  constructor(
    private translate: TranslateService,
    private genericApi: GenericApiService
  ) {}

  loadNavigation(
    rolesNames: string[],
    unreadCount$?: Observable<number>,
    chatUnreadCount$?: Observable<number>,
    resolverData?: Menu[]
  ): void {
    const defaultUnreadCount$ = unreadCount$ || of(0);
    const defaultChatUnreadCount$ = chatUnreadCount$ || of(0);

    if (resolverData) {
      this.loadMenusFromResolverData(
        rolesNames,
        defaultUnreadCount$,
        defaultChatUnreadCount$,
        resolverData
      );
    } else {
      this.loadMenusFromApi(
        rolesNames,
        defaultUnreadCount$,
        defaultChatUnreadCount$
      );
    }
  }

  private loadMenusFromResolverData(
    rolesNames: string[],
    unreadCount$: Observable<number>,
    chatUnreadCount$: Observable<number>,
    resolverData: Menu[]
  ): void {
    // Filtrer les menus par rôle (sécurité supplémentaire côté frontend)
    const filteredMenus = this.filterMenusByRole(resolverData, rolesNames);

    // Convertir les menus en format de navigation
    const navigationItems = this.convertMenusToNavigation(
      filteredMenus,
      unreadCount$,
      chatUnreadCount$
    );

    this._items.next(navigationItems);
  }

  private loadMenusFromApi(
    rolesNames: string[],
    unreadCount$?: Observable<number>,
    chatUnreadCount$?: Observable<number>
  ): void {
    // Utiliser l'endpoint user-menus qui retourne tous les menus filtrés avec cache backend
    this.genericApi.getAlls<Menu>('user-menus').subscribe({
      next: (response) => {
        if (response && response.data && Array.isArray(response.data)) {
          const allMenus = response.data as Menu[];

          // Filtrer les menus par rôle (sécurité supplémentaire côté frontend)
          const filteredMenus = this.filterMenusByRole(allMenus, rolesNames);

          // Convertir les menus en format de navigation
          const navigationItems = this.convertMenusToNavigation(
            filteredMenus,
            unreadCount$,
            chatUnreadCount$
          );

          this._items.next(navigationItems);
        } else {
          console.warn('Navigation - Format de réponse inattendu:', response);
          this._items.next([]);
        }
      },
      error: (error) => {
        console.error(
          'Navigation - Erreur lors du chargement des menus:',
          error
        );
        this._items.next([]);
      }
    });
  }

  private filterMenusByRole(menus: Menu[], rolesNames: string[]): Menu[] {
    if (!rolesNames || rolesNames.length === 0) {
      return [];
    }

    return menus.filter((menu) =>
      menu.roles.some((role: string) => rolesNames.includes(role))
    );
  }

  private convertMenusToNavigation(
    menus: Menu[],
    unreadCount$?: Observable<number>,
    chatUnreadCount$?: Observable<number>
  ): NavigationItem[] {
    // Grouper les menus par catégorie
    const categories = this.groupMenusByCategory(menus);

    const navigationItems: NavigationItem[] = [];

    // Ajouter les menus par catégorie
    for (const categoryGroup of categories) {
      const category = categoryGroup.category;
      const categoryDisplayName = category.name;

      // Utiliser le navigation_type de la catégorie pour déterminer le type
      if (category.navigation_type === 'dropdown') {
        const dropdownItem: NavigationDropdown = {
          type: 'dropdown',
          label: categoryDisplayName,
          icon: category.icon
            ? category.icon.startsWith('mat:')
              ? category.icon
              : 'mat:' + category.icon
            : 'mat:security',
          children: []
        };

        for (const menu of categoryGroup.menus) {
          const translationKey = `menu.${menu.slug || menu.name.toLowerCase()}`;
          const translatedLabel = this.translate.instant(translationKey);
          const finalLabel =
            translatedLabel !== translationKey ? translatedLabel : menu.name;

          const menuItem: NavigationLink = {
            type: 'link',
            label: finalLabel,
            route: menu.route,
            icon: menu.icon.startsWith('mat:') ? menu.icon : 'mat:' + menu.icon,
            routerLinkActiveOptions: { exact: false },
            disable: menu.disable
          };

          dropdownItem.children.push(menuItem);
        }

        // Ajouter le dropdown à la section Administration (sera créé plus tard)
        this.authorizationDropdown = dropdownItem;
      } else {
        // Pour les autres catégories, créer des NavigationCategory
        const categoryItem: NavigationCategory = {
          type: 'category',
          label: categoryDisplayName,
          category: category,
          children: []
        };

        for (const menu of categoryGroup.menus) {
          const translationKey = `menu.${menu.slug || menu.name.toLowerCase()}`;
          const translatedLabel = this.translate.instant(translationKey);
          const finalLabel =
            translatedLabel !== translationKey ? translatedLabel : menu.name;

          let menuItem: NavigationLink = {
            type: 'link',
            label: finalLabel,
            route: menu.route,
            icon: menu.icon.startsWith('mat:') ? menu.icon : 'mat:' + menu.icon,
            routerLinkActiveOptions: {
              exact: menu.route === '/index' ? true : false
            },
            disable: menu.disable
          };

          // Ajouter les badges pour les notifications et chat
          if (
            menu.route === '/index/notifications/all' ||
            menu.route.includes('/notifications')
          ) {
            menuItem = {
              ...menuItem,
              badge: {
                value: unreadCount$ || of(0),
                bgClass: 'bg-red-500',
                textClass: 'text-white'
              }
            };
          }

          if (menu.route === '/index/chat' || menu.route.includes('/chat')) {
            menuItem = {
              ...menuItem,
              badge: {
                value: chatUnreadCount$ || of(0),
                bgClass: 'bg-green-500',
                textClass: 'text-white'
              }
            };
          }

          categoryItem.children.push(menuItem);
        }

        // Si c'est la section Administration et qu'on a un dropdown d'autorisation, l'ajouter
        if (
          category.name.toLowerCase().includes('administration') &&
          this.authorizationDropdown
        ) {
          categoryItem.children.push(this.authorizationDropdown);
          this.authorizationDropdown = null; // Reset pour éviter la duplication
        }

        navigationItems.push(categoryItem);
      }
    }

    return navigationItems;
  }

  private translateNavigationItems(items: NavigationItem[]): NavigationItem[] {
    return items.map((item) => {
      const translatedLabel = item.label.startsWith('menu.')
        ? this.translate.instant(item.label)
        : item.label;

      switch (item.type) {
        case 'link':
          const linkItem = item as NavigationLink;
          return {
            type: 'link',
            label: translatedLabel,
            route: linkItem.route,
            icon: linkItem.icon,
            routerLinkActiveOptions: linkItem.routerLinkActiveOptions,
            badge: linkItem.badge,
            disable: linkItem.disable
          } as NavigationLink;

        case 'dropdown':
          const dropdownItem = item as NavigationDropdown;
          return {
            type: 'dropdown',
            label: translatedLabel,
            icon: dropdownItem.icon,
            route: dropdownItem.route,
            children: this.translateNavigationItems(dropdownItem.children),
            badge: dropdownItem.badge
          } as NavigationDropdown;

        case 'subheading':
          const subheadingItem = item as NavigationSubheading;
          return {
            type: 'subheading',
            label: translatedLabel,
            route: subheadingItem.route,
            children: this.translateNavigationItems(subheadingItem.children)
          } as NavigationSubheading;

        case 'category':
          const categoryItem = item as NavigationCategory;
          return {
            type: 'category',
            label: translatedLabel,
            route: categoryItem.route,
            category: categoryItem.category,
            children: this.translateNavigationItems(categoryItem.children)
          } as NavigationCategory;

        default:
          return item;
      }
    });
  }

  private groupMenusByCategory(
    menus: Menu[]
  ): { category: Category; menus: Menu[] }[] {
    // Grouper les menus par leur catégorie dynamiquement
    const categoryGroups = new Map<
      number,
      { category: Category; menus: Menu[] }
    >();

    for (const menu of menus) {
      if (menu.category) {
        const categoryId = menu.category.id;

        if (!categoryGroups.has(categoryId)) {
          categoryGroups.set(categoryId, {
            category: menu.category,
            menus: []
          });
        }

        categoryGroups.get(categoryId)!.menus.push(menu);
      }
    }

    // Convertir la Map en array et trier par order puis par ID
    const categories: { category: Category; menus: Menu[] }[] = [];

    const sortedCategories = Array.from(categoryGroups.values()).sort(
      (a, b) => {
        // Trier d'abord par order, puis par ID si order est identique
        const orderA = a.category.order || 0;
        const orderB = b.category.order || 0;

        if (orderA !== orderB) {
          return orderA - orderB;
        }

        return a.category.id - b.category.id;
      }
    );

    return sortedCategories;
  }
}
