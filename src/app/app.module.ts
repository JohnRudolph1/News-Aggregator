import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FetchData } from './fetch.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoxComponent } from './sources/fox/fox.component';
import { NbcComponent } from './sources/nbc/nbc.component';
import { GuardianComponent } from './sources/guardian/guardian.component';
import { HomeComponent } from './components/home/home.component';
import { AbcComponent } from './sources/abc/abc.component';
import { CnnComponent } from './sources/cnn/cnn.component';
import { NytComponent } from './sources/nyt/nyt.component';
import { WashingtonPostComponent } from './sources/washington-post/washington-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';




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
    AboutComponent,
    
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    BrowserAnimationsModule,
    
    
    
   
    
  ],
  providers: [FetchData],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    
  }
}
