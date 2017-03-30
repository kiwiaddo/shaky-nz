import { UserService } from './services/user.service';
import { AngularFire } from 'angularfire2';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mmiValue = new FormControl();
  loggedIn = false;
  navLinks = [ '/quakes', '/events'];

  constructor (
    private userService: UserService,
    public af: AngularFire,
    private http: Http
    ) {}

  ngOnInit () {
    this.af.auth.subscribe(user => {
        this.loggedIn = !!user;
    }); 
  }

  logout() {
     this.userService.logout();
  }
}
