import { UserService } from './user.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class EventDataService {

  constructor(
      private af: AngularFire,
      private userService: UserService) {}

  public getEvents (): FirebaseListObservable<any[]> {
    return this.af.database.list('users/' + this.userService.userId() + '/events');
  }

  public addEvent (publicID: string): void {
    var events = this.af.database.list('users/' + this.userService.userId() + '/events');
    
    events.push({
        quakePublicId : publicID
    });
  }
}
