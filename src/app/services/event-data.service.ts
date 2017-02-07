import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class EventDataService {

  constructor(
      private af: AngularFire) {
        console.debug('EventDataService instance')
      }

  public addEvent (publicID: string): void {
    var events = this.af.database.list('/events');
    
    events.push({
        quakePublicId : publicID
    });
  }
}
