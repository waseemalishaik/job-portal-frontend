import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

User: any ={}

constructor(public http: HttpClient , private router:Router) {}
ngOnInit(): void {
  
}
navigateTo(path: string) {
  this.router.navigate([path]);  // Navigates to the given path
}
register() {
  console.log(this.User);

  this.http.post('https://job-portal-backend-04kh.onrender.com/waseem_users', this.User).subscribe(result => {
    console.log(result);
    
    // Assuming registration is successful
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to home page
    this.router.navigate(['/']);
  });
}
}
