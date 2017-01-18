import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
// import { firebaseConfig } from './firebase.conf';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { QuakesComponent } from './quakes/quakes.component';
import { appRoutes } from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyAi92B0dUz7QJzKkvhpELAvHNS4S2mtVXM",
    authDomain: "shaky-nz.firebaseapp.com",
    databaseURL: "https://shaky-nz.firebaseio.com",
    storageBucket: "shaky-nz.appspot.com",
    messagingSenderId: "790142800054"
};

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    QuakesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
