import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(
        private userService: UserService,
        private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
      if(this.userService.isLoggedIn()) {
          return true;
      }

      // Store the attempted URL for redirecting
      // this.authService.redirectUrl = url;

      // Navigate to the login page with extras
      this.router.navigate(['/login']);
      return false;
  }
}