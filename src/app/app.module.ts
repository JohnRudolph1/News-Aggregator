import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FetchData } from './fetch.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoxComponent } from './fox/fox.component';
import { NbcComponent } from './nbc/nbc.component';
import { GuardianComponent } from './guardian/guardian.component';
import { HomeComponent } from './home/home.component';
import { AbcComponent } from './abc/abc.component';
import { CnnComponent } from './cnn/cnn.component';
import { NytComponent } from './nyt/nyt.component';
import { WashingtonPostComponent } from './washington-post/washington-post.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoxComponent,
    NbcComponent,
    GuardianComponent,
    HomeComponent,
    AbcComponent,
    CnnComponent,
    NytComponent,
    WashingtonPostComponent,
    FooterComponent,
    
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
