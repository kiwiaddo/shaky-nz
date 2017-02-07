import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.debug('logging in '+  this.userService.redirectUrl);
    this.userService.login();

    let redirectUrl = this.userService.redirectUrl;

    if (!!redirectUrl) {
      // this.userService.redirectUrl = null;
      this.router.navigate([redirectUrl]);
    }
  }
}
