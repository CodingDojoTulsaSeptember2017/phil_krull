import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BikeOfTheDayComponent } from './landing-page/bike-of-the-day/bike-of-the-day.component';
import { UserLoginComponent } from './landing-page/user-login/user-login.component';
import { UserRegisterComponent } from './landing-page/user-register/user-register.component';
import { UsersAndBikesService } from './users-and-bikes.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BikeOfTheDayComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersAndBikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
