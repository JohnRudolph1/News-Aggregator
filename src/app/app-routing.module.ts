import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsnbcComponent } from './msnbc/msnbc.component';
import { FoxComponent } from './fox/fox.component';
import { GuardianComponent } from './guardian/guardian.component';
import { HomeComponent } from './home/home.component';
import { AbcComponent } from './abc/abc.component';
const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'fox', component: FoxComponent },
  { path: 'abc', component: AbcComponent },
  { path: 'msnbc', component: MsnbcComponent },
  { path: 'guardian', component: GuardianComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
