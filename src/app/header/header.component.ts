import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$ = this.authService.isLoggedIn$; // Observable variable

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status: boolean) => {
      console.log("Login Status Updated:", status); // Debugging
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/registration']);
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
