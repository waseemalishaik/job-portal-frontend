import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-registration',
  templateUrl: './jobseeker-registration.component.html',
  styleUrls: ['./jobseeker-registration.component.css'],
})
export class JobseekerRegistrationComponent {
  // Define the User model
  User = {
    name: '',
    phone: '',
    email: '',
    password: '',
    education: '',
  };

  constructor(public http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  register() {
    console.log('Form Submitted:', this.User);
    this.http
      .post('http://localhost:4000/JobSeeker_Register', this.User)
      .subscribe((result) => {
        console.log(result);

        this.router.navigate(['/find-a-job']);
      });
  }
}
