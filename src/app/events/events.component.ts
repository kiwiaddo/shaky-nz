import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: FirebaseListObservable<any[]>;
 
  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
    this.events = this.af.database.list('/events');
  }
}
