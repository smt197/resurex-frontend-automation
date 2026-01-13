import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  NavigationDropdown,
  NavigationItem,
  NavigationLink
} from '../../../../core/navigation/navigation-item.interface';
import { dropdownAnimation } from '@vex/animations/dropdown.animation';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationService } from '../../../../core/navigation/navigation.service';

import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vex-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [dropdownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    MatRippleModule,
    RouterLinkActive,
    RouterLink,
    MatIconModule,
    NgClass,
    NgFor,
    AsyncPipe
  ]
})
export class SidenavItemComponent implements OnInit, OnChanges {
  @Input({ required: true }) item!: NavigationItem;
  @Input({ required: true }) level!: number;
  isOpen: boolean = false;
  isActive: boolean = false;
  unreadCountChat = 0;

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;
  isCategory = this.navigationService.isCategory;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  public unreadnotificationcount$ =
    this.websocketService.unreadCountNotificationSubject;

  @Input() notificationCount$!: Observable<number>;
  @Input() chatUnreadCount$!: Observable<number>;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private navigationService: NavigationService,
    private websocketService: WebsocketService,
  ) {}

  @HostBinding('class')
  get levelClass() {
    return `item-level-${this.level}`;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        filter(() => this.isDropdown(this.item)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.onRouteChange());

    this.navigationService.openChange$
      .pipe(
        filter(() => this.isDropdown(this.item)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((item) => this.onOpenChange(item));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      changes.hasOwnProperty('item') &&
      this.isDropdown(this.item)
    ) {
      this.onRouteChange();
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
    this.cd.markForCheck();
  }

  onOpenChange(item: NavigationDropdown) {
    if (this.isChildrenOf(this.item as NavigationDropdown, item)) {
      return;
    }

    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      return;
    }

    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }

  onRouteChange() {
    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    }
  }

  isChildrenOf(parent: NavigationDropdown, item: NavigationDropdown): boolean {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    return parent.children
      .filter((child) => this.isDropdown(child))
      .some((child) => this.isChildrenOf(child as NavigationDropdown, item));
  }

  hasActiveChilds(parent: NavigationDropdown): boolean {
    return parent.children.some((child) => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }

      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route as string, false);
      }
      return false; // Added for clarity
    });
  }

  isFunction(prop: NavigationLink['route']): boolean {
    return prop instanceof Function;
  }

  getBadgeValue(item: NavigationItem): Observable<number> | undefined {
    // D'abord, vérifier si l'item a son propre badge
    if (this.isLink(item) && item.badge) {
      return item.badge.value as Observable<number>;
    }

    // Sinon, utiliser les observables spécifiques basés sur la route
    if ('route' in item && item.route === '/index/notifications/all') {
      return this.notificationCount$;
    }
    if ('route' in item && item.route === '/index/chat') {
      return this.chatUnreadCount$;
    }
    return undefined;
  }
}
