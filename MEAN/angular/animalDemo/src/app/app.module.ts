import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AddAnimalsComponent } from './add-animals/add-animals.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAnimalsComponent,
    AddAnimalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
