// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Import serivces
import { AuthService } from './services/auth.service';
import { WindowService } from './services/window.service';
import { ApiService } from './services/api.service';
import { GlobalService } from './global.service';


// Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderStaticComponent } from './partials/nav/header-static/header-static.component';
import { ContactComponent } from './contact/contact.component';
import { InputComponent } from './input/input.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderStaticComponent,
    InputComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    WindowService,
    ApiService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
