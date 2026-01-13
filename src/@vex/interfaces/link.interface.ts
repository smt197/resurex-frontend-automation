import { Params } from "@angular/router";

export interface Link {
  label: string;
  route: string | string[];
    queryParams?: Params; // More specific type from Angular
  routerLinkActiveOptions?: { exact: boolean };
  disabled?: boolean;
}
