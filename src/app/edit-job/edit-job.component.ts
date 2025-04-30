import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  job: any = {};  // Job ka data store karne ke liye

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id'); // URL se job ID lena
    this.http.get(`http://localhost:4000/job/${jobId}`).subscribe((data: any) => {
      this.job = data;  // API se job details lana
    });
  }

  updateJob() {
    this.http.put(`http://localhost:4000/edit-job/${this.job.Id}`, this.job).subscribe(
      response => {
        console.log('Job updated successfully:', response);
      },
      error => {
        console.error('Error updating job:', error);
      }
    );
  }
}
