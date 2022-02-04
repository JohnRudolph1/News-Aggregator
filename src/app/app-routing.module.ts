import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbcComponent } from './nbc/nbc.component';
import { FoxComponent } from './fox/fox.component';
import { GuardianComponent } from './guardian/guardian.component';
import { HomeComponent } from './home/home.component';
import { AbcComponent } from './abc/abc.component';
import { CnnComponent } from './cnn/cnn.component';
import { NytComponent } from './nyt/nyt.component';
import { WashingtonPostComponent } from './washington-post/washington-post.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
