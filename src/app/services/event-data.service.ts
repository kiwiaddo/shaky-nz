import { IEventView } from './../interfaces/event-view';
import { IQuakeData } from './../interfaces/quake-data';
import { IGnsQuake } from './../interfaces/gns-quake';
import { UserService } from './user.service';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class EventDataService {

  constructor(
      private db: AngularFireDatabase,
      private userService: UserService) {}

  public getEvents (): FirebaseListObservable<any[]> {
    return this.db.list('users/' + this.userService.userId + '/events');
  }

  public addEvent (quake: IGnsQuake, userData: IQuakeData): void {
    var events = this.db.list('users/' + this.userService.userId + '/events');
    
    events.push({
        quake : quake,
        userData: userData
    });
  }
}
