import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recruiter-registration',
  templateUrl: './recruiters-registration.component.html',
  styleUrls: ['./recruiters-registration.component.css']
})
export class RecruitersRegistrationComponent implements OnInit {

User: any ={}

constructor(public http: HttpClient , private router: Router) {}
ngOnInit(): void {
  
}

register (){
console.log(this.User)
this.http.post('http://localhost:4000/Recruiter_Register',this.User).subscribe(result => { 
  console.log(result)
  this.router.navigate(['/posts-jobs']);
})


} 


}
