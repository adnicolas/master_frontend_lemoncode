import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  public onLogin() {
    if (this.authService.login(this.emailFormControl.value, this.passwordFormControl.value)) {
      this.router.navigate(['/dashboard']);
    };
  }
}
