import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { Menu } from 'src/app/interfaces/Menu';

@Component({
  selector: 'vex-menu-user',
  standalone: true,
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.scss',
    imports: [CommonModule, MatTooltipModule, MatIconModule,TranslateModule],
  animations: [fadeInUp400ms, stagger40ms],

})
export class MenuUserComponent {
  @Input() apps: Menu[] = [];
  @Input() openApps: string[] = [];
  @Output() appClick = new EventEmitter<Menu>(); // Émettre l'objet complet

  // Grouper les menus par blocs de 4
  get groupedMenus(): Menu[][] {
    const groups: Menu[][] = [];
    for (let i = 0; i < this.apps.length; i += 5) {
      groups.push(this.apps.slice(i, i + 5));
    }
    return groups;
  }

  onAppClick(app: Menu): void {
    // Ne pas permettre le clic si le menu est désactivé (disable === 0)
    if (app.disable === 1) {
      this.appClick.emit(app);
    }
  }
}
