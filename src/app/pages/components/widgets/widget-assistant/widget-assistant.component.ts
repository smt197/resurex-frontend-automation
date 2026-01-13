import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'vex-widget-assistant',
  templateUrl: './widget-assistant.component.html',
  styleUrls: ['./widget-assistant.component.scss'],
  standalone: true,
  imports: [MatIconModule, TranslateModule]
})
export class WidgetAssistantComponent implements OnInit {

    user: User | null = null;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.user = this.authService.user;                
  }

}
