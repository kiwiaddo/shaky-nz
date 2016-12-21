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
  title = 'Shaky NZ';
  quakes: Observable<Array<any>>;
  mmiValue = new FormControl();

  constructor (private http: Http) {}

  ngOnInit () {
    // let operation = this.getVolcanoData();

    // operation.subscribe(quakes => {
    //   this.quakes = quakes;
    // })

    this.quakes = 
      this.mmiValue.valueChanges
        .debounceTime(400)        // wait for 400ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(mmiValue => this.getEarthquakes(mmiValue));
  }

 private getEarthquakes (mmiValue: string): Observable<any> {
    return this.http
            .get(`https://api.geonet.org.nz/quake?MMI=${mmiValue}`)
            .map((res: Response) => res.json().features)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private getVolcanoData (): Observable<any> {
    return this.http
            .get("https://api.geonet.org.nz/volcano/val")
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
