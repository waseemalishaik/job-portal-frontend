import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContentComponent } from './content/content.component';
import { FindAJobComponent } from './find-a-job/find-a-job.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { JobseekerRegistrationComponent } from "./jobseeker-registration/jobseeker-registration.component";
import { RecruitersRegistrationComponent } from './recruiters-registration/recruiters-registration.component'; 
import { PostsJobsComponent } from './posts-jobs/posts-jobs.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'find-a-job', component:FindAJobComponent},
  {path:'jobs-details',component:JobsDetailsComponent},
  { path: 'recruiters', component:RecruitersRegistrationComponent },
  { path: 'jobseeker-registration', component: JobseekerRegistrationComponent },
  { path: 'recruiter-registration', component: RecruitersRegistrationComponent },
  {path:'posts-jobs', component:PostsJobsComponent},
  {path:'employer-dashboard',component:EmployerDashboardComponent},
  {path:'Edit-job',component:EditJobComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
