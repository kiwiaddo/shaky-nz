import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(
        private af: AngularFire,
        private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let s = this.af.auth.subscribe(auth => {
                if(auth) {
                    console.log('logged in');
                    // logged in so return true
                    return true;
                } else {
                    console.log('not logged in');
                    // not logged in so redirect to login page with the return url and return false
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                }
            });

        return false;
    }
}