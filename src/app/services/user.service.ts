import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class UserService {
  redirectUrl: string;

  constructor(
    private af: AngularFire
  ) { }

  /**
   * Logs in the user
   */
  login() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }

  isLoggedIn(): boolean {
      let authState = this.af.auth.getAuth();

      if (authState !== null && authState.uid) { return true; }

      return false;
  }

   userId(): string {
      let authState = this.af.auth.getAuth();

      if (authState !== null && authState.uid) { return authState.uid; }

      return null;
  }
}
