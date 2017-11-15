import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersCreateComponent } from './users-create/users-create.component';

import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersShowComponent,
    UsersCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
