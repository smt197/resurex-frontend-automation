import { Observable } from "rxjs";
import { Category } from 'src/app/interfaces/Category';

export type NavigationItem =
  | NavigationLink
  | NavigationDropdown
  | NavigationSubheading
  | NavigationCategory;


  export interface NavigationBadge {
    value: Observable<string | number>; // Le type d'union qui cause l'erreur
    bgClass: string;
    textClass: string;
  }
export interface NavigationLink {
  type: 'link';
  route: string | any;
  fragment?: string;
  label: string;
  icon?: string;
  routerLinkActiveOptions?: { exact: boolean };
   badge?: NavigationBadge;
   disable?: number;
}

export interface NavigationDropdown {
  type: 'dropdown';
  label: string;
  icon?: string;
  route?: string | any;
  children: Array<NavigationLink | NavigationDropdown>;
 badge?: NavigationBadge
}

export interface NavigationSubheading {
  type: 'subheading';
  route?: string | any;
  label: string;
  children: Array<NavigationLink | NavigationDropdown>;
}

export interface NavigationCategory {
  type: 'category';
  label: string;
  route?: string | any;
  category: Category;
  children: Array<NavigationLink | NavigationDropdown>;
}
