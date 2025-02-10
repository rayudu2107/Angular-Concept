import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authStatus$.subscribe(status => {
      console.log("🔄 Auth Status Updated:", status);
      this.isLoggedIn = status;
    });
  }

  toggleLogin() {
    if (this.isLoggedIn) {
      console.log(" Logging Out...");
      this.authService.logout();
    } else {
      console.log(" Logging In...");
      this.authService.login();
    }
  }
}