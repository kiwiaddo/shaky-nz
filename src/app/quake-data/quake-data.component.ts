import { UserService } from './../services/user.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MdSliderChange, MdDialogRef } from '@angular/material'

import { GnsDataService } from '../services/gns-data.service';
import { EventDataService } from '../services/event-data.service';

@Component({
  template: `
  <div>
    <h1>{{ title }}</h1>
    <md-input-container>
      <input mdInput #description placeholder="Description">
    </md-input-container>
  </div>
  <button md-button (click)="done(description.value)">Done</button>`,
  selector: 'app-quake-data'
})
export class QuakeDataComponent implements OnInit {
  quakes: Observable<Array<any>>;
  mmiValue: number = 0;

  public title: string;

  constructor (
      private dialogRef: MdDialogRef<QuakeDataComponent>,
      private eventDataService: EventDataService,
      private gs: GnsDataService
    ) {}

  ngOnInit () {
    this.quakes = 
      Observable
        .interval(5000)
        .flatMap(() => {
          return this.gs.getEarthquakes(this.mmiValue)
        });
    }

  done (description: string) {
    this.dialogRef.close(description);
  }
}
