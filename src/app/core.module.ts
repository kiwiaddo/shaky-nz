import { EventDataService } from './services/event-data.service';
import { GnsDataService } from './services/gns-data.service';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { QuakesComponent } from './quakes/quakes.component';
import { RealTimeQuakesComponent } from './real-time-quakes/real-time-quakes.component';
import { appRoutes } from './app.routes';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { QuakeDataComponent } from "app/quake-data/quake-data.component";
import { DialogsService } from "app/services/dialogs.service";

export const firebaseConfig = {
    apiKey: "AIzaSyAi92B0dUz7QJzKkvhpELAvHNS4S2mtVXM",
    authDomain: "shaky-nz.firebaseapp.com",
    databaseURL: "https://shaky-nz.firebaseio.com",
    storageBucket: "shaky-nz.appspot.com",
    messagingSenderId: "790142800054"
};

// const firebaseAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// };

@NgModule({
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(firebaseConfig, 'shaky-nz'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ // components that we want to make available
    ],
    declarations: [ // components for use in THIS module
        AppComponent,
        EventsComponent,
        QuakesComponent,
        RealTimeQuakesComponent,
        LoginComponent,
        QuakeDataComponent
    ],
    providers: [ // singleton services
        AuthGuard, 
        UserService,
        GnsDataService,
        EventDataService,
        DialogsService
    ],
    entryComponents: [ 
        QuakeDataComponent 
    ]
})
export class CoreModule { }