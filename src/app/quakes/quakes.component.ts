import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-quakes',
  templateUrl: './quakes.component.html',
  styleUrls: ['./quakes.component.css']
})
export class QuakesComponent implements OnInit {
  quakes: Observable<Array<any>>;
  mmiValue = new FormControl();

  constructor (
      private af: AngularFire,
      private http: Http
    ) {}

  ngOnInit () {
    this.quakes = 
      this.mmiValue.valueChanges
        .debounceTime(400)        // wait for 400ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(mmiValue => this.getEarthquakes(mmiValue));
        
  }

feltIt (publicID: string) {
  console.debug("felt it "+ publicID);
  this.addEvent(publicID);
}

shareIt () {
  console.debug("shared it");
}

private addEvent (publicID: string) {
  var events = this.af.database.list('/events');
  
  events.push({
      quakePublicId : publicID
  });
}

 private getEarthquakes (mmiValue: string): Observable<any> {
    return this.http
            .get(`https://api.geonet.org.nz/quake?MMI=${mmiValue}`)
            .map((res: Response) => res.json().features)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // private getVolcanoData (): Observable<any> {
  //   return this.http
  //           .get("https://api.geonet.org.nz/volcano/val")
  //           .map((res: Response) => res.json())
  //           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  // }

}
