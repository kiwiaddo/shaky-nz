import { UserService } from './../services/user.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdSliderChange } from '@angular/material'

import { GnsDataService } from '../services/gns-data.service';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-real-time-quakes',
  templateUrl: './real-time-quakes.component.html',
  styleUrls: ['./real-time-quakes.component.css']
})
export class RealTimeQuakesComponent implements OnInit {
  quakes: Observable<Array<any>>;
  mmiValue: number = 0;
  isLoading: boolean = true;

  constructor (
      private eventDataService: EventDataService,
      private gs: GnsDataService
    ) {}

  ngOnInit () {
    this.quakes = 
      Observable
        .interval(5000)
        .flatMap(() => {
          this.isLoading = false;
          return this.gs.getEarthquakes(this.mmiValue)
        });
  }
}
