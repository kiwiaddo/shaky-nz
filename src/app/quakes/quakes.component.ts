import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { MdSliderChange, MdDialog, MdDialogRef } from '@angular/material'

import { GnsDataService } from '../services/gns-data.service';
import { EventDataService } from '../services/event-data.service';
import { IGnsQuake } from '../interfaces/gns-quake';
import { QuakeDataComponent } from "app/quake-data/quake-data.component";
import { DialogsService } from "app/services/dialogs.service";

@Component({
  selector: 'app-quakes',
  templateUrl: './quakes.component.html',
  styleUrls: ['./quakes.component.css']
})
export class QuakesComponent implements OnInit {
  quakes: Observable<Array<any>>;
  // mmiValue = new FormControl();
  mmiValue: number = 3;
  dialogRef: MdDialogRef<string>;
  result: string;

  constructor (
      private eventDataService: EventDataService,
      private gs: GnsDataService,
      private dialogsService: DialogsService
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
    this.quakes = this.gs.getEarthquakes(event.value); 
  }

  feltIt (quake: IGnsQuake) {
    console.debug("felt it "+ quake.publicId);
    this.eventDataService.addEvent(quake);
  }

  shareIt () {
    console.debug("shared it");
  }

  openQuakeDataDialog(quake: IGnsQuake) {
     this.dialogsService
      .confirm('How bad was this earthquake?')
      .subscribe(res => this.result = res);
  }
}
