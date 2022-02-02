import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FetchData } from './fetch.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoxComponent } from './fox/fox.component';
import { MsnbcComponent } from './msnbc/msnbc.component';
import { GuardianComponent } from './guardian/guardian.component';
import { HomeComponent } from './home/home.component';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoxComponent,
    MsnbcComponent,
    GuardianComponent,
    HomeComponent,
    AbcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchData],
  bootstrap: [AppComponent]
})
export class AppModule {}
