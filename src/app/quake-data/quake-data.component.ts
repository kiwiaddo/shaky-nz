import { IQuakeData } from './../interfaces/quake-data';
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
      <input mdInput #description placeholder="Description" type="text">
    </md-input-container>
    <md-input-container>
      <input mdInput #severity placeholder="Severity" type="number">
    </md-input-container>
  </div>
  <button md-button (click)="done(description.value, severity.value)">Done</button>`,
  selector: 'app-quake-data'
})
export class QuakeDataComponent implements OnInit {
  public title: string;

  constructor (
      private dialogRef: MdDialogRef<QuakeDataComponent>,
      private eventDataService: EventDataService,
      private gs: GnsDataService
    ) {}

  ngOnInit () {
  }

  done (description: string, severity: number) {
    let quakedata = <IQuakeData> { description: description, severity: severity };
    this.dialogRef.close(quakedata);
  }
}
