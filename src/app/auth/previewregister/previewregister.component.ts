import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth-service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'vex-previewregister',
  templateUrl: './previewregister.component.html',
  styleUrls: ['../auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    AsyncPipe,
    SharedModule
  ]
})
export class PreviewregisterComponent implements OnInit {
  private readonly router = inject(Router);
  public readonly authService = inject(AuthService);

  ngOnInit(): void {
    // Initialization logic if needed
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
