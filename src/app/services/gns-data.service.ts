import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GnsDataService {

  constructor(
    private http: Http
  ) { 
    console.debug('GnsDataService instance')
  }

  public getEarthquakes (mmiValue: number): Observable<any> {
    return this.http
            .get(`https://api.geonet.org.nz/quake?MMI=${mmiValue}`)
            .map((res: Response) => res.json().features)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getVolcanoData (): Observable<any> {
    return this.http
            .get("https://api.geonet.org.nz/volcano/val")
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
