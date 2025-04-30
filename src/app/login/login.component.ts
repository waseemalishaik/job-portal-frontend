import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userLogin: any = {}; // Store user credentials

  constructor(
    private http: HttpClient,
    private Authservice: AuthService,
    private router: Router
  ) // private authService: AuthService
  {}

  handleLogin() {
    this.http
      .post('http://localhost:4000/login', this.userLogin)
      .subscribe((response: any) => {
        console.log(response, response.result[0]);
        alert('login succesfull');
        localStorage.setItem('user', JSON.stringify(response.result[0]));
        this.router.navigateByUrl('/employer-dashboard');
   
   });
  }
} 
