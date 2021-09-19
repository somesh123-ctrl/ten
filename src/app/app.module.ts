import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './app-routing.module';
import { HiringComponent } from './hiring/hiring.component';
import { AlearnComponent } from './alearn/alearn.component';
import { JtvcComponent } from './jtvc/jtvc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CdetailComponent } from './cdetail/cdetail.component';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificationComponent } from './certification/certification.component';
import { AlumniComponent } from './alumni/alumni.component';
import { ForumComponent } from './forum/forum.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursesComponent,
    HiringComponent,
    AlearnComponent,
    JtvcComponent,
    CdetailComponent,
    CertificationComponent,
    AlumniComponent,
    ForumComponent,
    HackathonComponent,
    TestimonialsComponent,
    ContactComponent,
    ComplaintsComponent,
    SocialComponent,
  

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
