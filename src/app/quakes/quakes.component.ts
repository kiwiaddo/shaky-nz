import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { MdSliderChange } from '@angular/material'

import { GnsDataService } from '../services/gns-data.service';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-quakes',
  templateUrl: './quakes.component.html',
  styleUrls: ['./quakes.component.css'],
  providers: [GnsDataService, EventDataService]
})
export class QuakesComponent implements OnInit {
  quakes: Observable<Array<any>>;
  // mmiValue = new FormControl();
  mmiValue: number = 3;

  constructor (
      private eventDataService: EventDataService,
      private gs: GnsDataService
    ) {}

  ngOnInit () {
    this.quakes = this.gs.getEarthquakes(this.mmiValue);        
  }

  mmiValueOnChange (event: MdSliderChange ) {
     // this.quakes = 
    //   this.mmiValue.valueChanges
    //     .debounceTime(400)        // wait for 400ms pause in events
    //     .distinctUntilChanged()   // ignore if next search term is same as previous
    //     .switchMap(mmiValue => this.gs.getEarthquakes(mmiValue));
    debugger;
    this.quakes = this.gs.getEarthquakes(event.value); 
  }

  feltIt (publicID: string) {
    console.debug("felt it "+ publicID);
    this.eventDataService.addEvent(publicID);
  }

  shareIt () {
    console.debug("shared it");
  }
}
