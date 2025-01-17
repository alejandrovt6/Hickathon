import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AbscencesComponent } from './abscences/abscences.component';
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AbscencesComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
