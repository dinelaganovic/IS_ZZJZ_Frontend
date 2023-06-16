import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginaComponent } from './pages/logina/logina.component';
import { AdminrhomeComponent } from './pages/adminrprofile/adminrhome/adminrhome.component';
import { AdminhomeComponent } from './pages/adminprofile/adminhome/adminhome.component';
import { UserhomeComponent } from './pages/userprofile/userhome/userhome.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { RegisteruserComponent } from './pages/adminprofile/registeruser/registeruser.component';
import { UsersComponent } from './pages/adminprofile/users/users.component';
import { HealthcdComponent } from './pages/adminprofile/healthcd/healthcd.component';
import { AdministrativeworkersComponent } from './pages/adminprofile/administrativeworkers/administrativeworkers.component';
import { RequestspageComponent } from './pages/userprofile/requestspage/requestspage.component';
import { UserrequestsComponent } from './pages/adminrprofile/userrequests/userrequests.component';

const routes: Routes = [
  {path: '**', component: HomeComponent},
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'logina', component: LoginaComponent},
  {path:'loginadmin', component: LoginadminComponent},
  {path:'adminrhome',component: AdminrhomeComponent,canActivate: [AuthGuard],children:[
    {path:'userrequests',component: UserrequestsComponent},
  ]},
  {path:'adminhome',component: AdminhomeComponent,canActivate: [AuthGuard], children:[
    { path:'registeruser', component: RegisteruserComponent },
    { path:'users', component: UsersComponent },
    { path:'healthcd', component: HealthcdComponent },
    { path:'administrativeworkers', component: AdministrativeworkersComponent }
  ]},
  {path:'userprofile', component: UserhomeComponent,canActivate: [AuthGuard], children:[
    { path:'requestspage', component: RequestspageComponent },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }