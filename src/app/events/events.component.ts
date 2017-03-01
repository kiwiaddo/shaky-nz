import { IGnsQuake } from './../interfaces/gns-quake';
import { EventDataService } from './../services/event-data.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: FirebaseListObservable<IGnsQuake[]>;
 
  constructor(
      private eventDataService: EventDataService,
  ) { }

  ngOnInit() {
    this.events = this.eventDataService.getEvents();
  }
}
