import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  auth = new FirebaseTSAuth();
  constructor(private loginSheet: MatBottomSheet,
    private router: Router) {
    this.auth.listenToSignInStateChanges((user) => {
      this.auth.checkSignInState({
        whenSignedIn: (user) => {
         
        },
        whenSignedOut: (user) => {
          
        },

        whenSignedInAndEmailNotVerified: (user) => {
          this.router.navigate(["emailVerification"]);
        },
        whenSignedInAndEmailVerified: (user) => {},
        
        whenChanged: (user) => {},
      });
    });
  }

  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent)
  }
  loggedIn() {
    return this.auth.isSignedIn();
  }
  onLogoutClick(){
    this.auth.signOut();
  }
}