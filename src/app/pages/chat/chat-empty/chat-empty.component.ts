// src/app/pages/apps/chat/chat-empty/chat-empty.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';
import { ChatService } from '../chat.service'; // Correct
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-chat-empty',
  templateUrl: './chat-empty.component.html',
  // Pas de styleUrls ici, les styles sont probablement globaux ou dans le template
  animations: [scaleFadeIn400ms],
  changeDetection: ChangeDetectionStrategy.OnPush, // Ajouté pour la cohérence
  standalone: true,
  imports: [MatButtonModule, MatIconModule, SharedModule]
})
export class ChatEmptyComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private cd: ChangeDetectorRef // cd est injecté mais pas utilisé dans ce template simple
  ) {}

  ngOnInit() {}

  openDrawer() {
    this.chatService.setDrawerOpen(true);
  }

  // closeDrawer() n'est pas pertinent ici car ce composant n'a pas de drawer à fermer lui-même.
}