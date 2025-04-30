import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FindAJobComponent } from './find-a-job/find-a-job.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { JobseekerRegistrationComponent } from './jobseeker-registration/jobseeker-registration.component';
import { RecruitersRegistrationComponent } from './recruiters-registration/recruiters-registration.component';
import { PostsJobsComponent } from './posts-jobs/posts-jobs.component';
import { AuthService } from './services/auth.service';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { EditJobComponent } from './edit-job/edit-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    RegistrationComponent,
    FindAJobComponent,
    JobsDetailsComponent,
   RecruitersRegistrationComponent,
   JobseekerRegistrationComponent,
   PostsJobsComponent,
   EmployerDashboardComponent,
   EditJobComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
   HttpClientModule,
  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
