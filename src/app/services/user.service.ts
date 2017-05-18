import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  redirectUrl: string;
  userId: string;
  isLoggedIn: boolean;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { 
    this.afAuth.authState.subscribe(authData => { 
        this.userId = authData != null ? authData.uid : null;
        this.isLoggedIn = authData != null;
    });
  }

  /**
   * Logs in the user
   */
  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.afAuth.auth.signOut();
  }

  // isLoggedIn(): boolean {
  //     let authState = this.afAuth.authState;

  //     if (authState !== null) { return true; }

  //     return false;
  // }

  //  userId(): string {
  //     let authState = this.afAuth.authState;

  //     if (authState !== null && authState.) { return authState.uid; }

  //     return null;
  // }
}
