import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-jobs',
  templateUrl: './posts-jobs.component.html',
  styleUrls: ['./posts-jobs.component.css']
})
export class PostsJobsComponent {

  
    job = {
      JobTitle: '',       
      CompanyName: '',    
      Location: '',
      JobType: 'Full-Time',  
      SalaryRange: null,  
      JobDescription: '',
      RequiredSkills:'',
      ContactEmail:''
  };
  

  constructor(public http: HttpClient) {}
  ngOnInit(): void {
  
  }
 


  postJob() {
    console.log(this.job);
    this.http.post('http://localhost:4000/job-post', this.job)
 .subscribe(
      result => {
        console.log('Job posted successfully:', result);
      },
      error => {
        console.error('Error posting job:', error);
        
      }
    );
  }
  
    
    
    } 






