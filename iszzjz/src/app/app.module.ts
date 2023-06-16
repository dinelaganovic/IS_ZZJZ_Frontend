import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { LoginaComponent } from './pages/logina/logina.component';
import { AdminrhomeComponent } from './pages/adminrprofile/adminrhome/adminrhome.component';
import { UserhomeComponent } from './pages/userprofile/userhome/userhome.component' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { AdminhomeComponent } from './pages/adminprofile/adminhome/adminhome.component';
import { DashnavbarComponent } from './pages/adminprofile/dashnavbar/dashnavbar.component';
import { UsersComponent } from './pages/adminprofile/users/users.component';
import { RegisteruserComponent } from './pages/adminprofile/registeruser/registeruser.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminpanelComponent } from './pages/adminprofile/adminpanel/adminpanel.component';
import { HealthcdComponent } from './pages/adminprofile/healthcd/healthcd.component';
import { AdministrativeworkersComponent } from './pages/adminprofile/administrativeworkers/administrativeworkers.component';
import { DashnavuComponent } from './pages/userprofile/dashnavu/dashnavu.component';
import { UserpanelComponent } from './pages/userprofile/userpanel/userpanel.component';
import { RequestspageComponent } from './pages/userprofile/requestspage/requestspage.component';
import { DashnavaComponent } from './pages/adminrprofile/dashnava/dashnava.component';
import { AdminrpanelComponent } from './pages/adminrprofile/adminrpanel/adminrpanel.component';
import { UserrequestsComponent } from './pages/adminrprofile/userrequests/userrequests.component';
import { ShowHcComponent } from './pages/adminprofile/healthcd/show-hc/show-hc.component';
import { AddEditHceComponent } from './pages/adminprofile/healthcd/add-edit-hce/add-edit-hce.component';
import { AuthService } from './services/auth.service';
import { ServiceDetailsService } from './services/service-details.service';
import { ApiService } from './services/api.service';
import { hceApiService } from './services/hce-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    LoginComponent,
    RegisterComponent,
    LoginaComponent,
    AdminrhomeComponent,
    UserhomeComponent,
    LoginadminComponent,
    AdminhomeComponent,
    DashnavbarComponent,
    UsersComponent,
    RegisteruserComponent,
    AdminpanelComponent,
    HealthcdComponent,
    AdministrativeworkersComponent,
    DashnavuComponent,
    UserpanelComponent,
    RequestspageComponent,
    DashnavaComponent,
    AdminrpanelComponent,
    UserrequestsComponent,
    ShowHcComponent,
    AddEditHceComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [
    AuthService,
    ServiceDetailsService,
    ApiService,
    hceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
