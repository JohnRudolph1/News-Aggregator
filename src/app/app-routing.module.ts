import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbcComponent } from './sources/nbc/nbc.component';
import { FoxComponent } from './sources/fox/fox.component';
import { GuardianComponent } from './sources/guardian/guardian.component';
import { HomeComponent } from './components/home/home.component';
import { AbcComponent } from './sources/abc/abc.component';
import { CnnComponent } from './sources/cnn/cnn.component';
import { NytComponent } from './sources/nyt/nyt.component';
import { WashingtonPostComponent } from './sources/washington-post/washington-post.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fox', component: FoxComponent },
  { path: 'abc', component: AbcComponent },
  { path: 'nbc', component: NbcComponent },
  { path: 'cnn', component: CnnComponent },
  { path: 'nyt', component: NytComponent },
  { path: 'guardian', component: GuardianComponent },
  { path: 'washingtonPost', component: WashingtonPostComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
