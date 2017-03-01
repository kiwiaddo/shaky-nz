import { IGnsQuake } from './../interfaces/gns-quake';
import { UserService } from './user.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class EventDataService {

  constructor(
      private af: AngularFire,
      private userService: UserService) {}

  public getEvents (): FirebaseListObservable<IGnsQuake[]> {
    return this.af.database.list('users/' + this.userService.userId() + '/events');
  }

  public addEvent (quake: IGnsQuake): void {
    var events = this.af.database.list('users/' + this.userService.userId() + '/events');
    
    events.push({
        quake : quake
    });
  }
}
