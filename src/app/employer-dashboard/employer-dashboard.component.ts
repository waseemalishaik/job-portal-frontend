import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css'],
})
export class EmployerDashboardComponent implements OnInit {
  user = {
    FullName: '',
    Email: '',
    Password: '',
    confirmpassword: '',
    CompanyName: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  consolecheck() {
    console.log('Register button clicked');
  }
}
