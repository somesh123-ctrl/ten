import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { CdetailComponent } from './cdetail/cdetail.component';
import { AlearnComponent } from './alearn/alearn.component';
import { HiringComponent } from './hiring/hiring.component';
import { JtvcComponent } from './jtvc/jtvc.component';
import { AlumniComponent } from './alumni/alumni.component';
import { BlogComponent } from './blog/blog.component';
import { CertificationComponent } from './certification/certification.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SocialComponent } from './social/social.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'courses', component: CoursesComponent },
  {path: 'cdetail' , component:CdetailComponent},

{path: 'alearn' , component:AlearnComponent},
{path: 'hiring' , component:HiringComponent},
{path: 'jtvc' , component:JtvcComponent},
{path: 'alumni' , component:AlumniComponent},
{path: 'blog' , component:BlogComponent},

{path: 'certification' , component:CertificationComponent},

{path: 'complaints' , component:ComplaintsComponent},

{path: 'contact' , component:ContactComponent},

{path: 'forum' , component:ForumComponent},
{path: 'hackathon' , component:HackathonComponent},

{path: 'testimonials' , component:TestimonialsComponent},
{path: 'social' , component:SocialComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }