import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';
// import { firebaseConfig } from './firebase.conf';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { QuakesComponent } from './quakes/quakes.component';
import { RealTimeQuakesComponent } from './real-time-quakes/real-time-quakes.component';
import { appRoutes } from './app.routes';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAi92B0dUz7QJzKkvhpELAvHNS4S2mtVXM",
    authDomain: "shaky-nz.firebaseapp.com",
    databaseURL: "https://shaky-nz.firebaseio.com",
    storageBucket: "shaky-nz.appspot.com",
    messagingSenderId: "790142800054"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    QuakesComponent,
    RealTimeQuakesComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthGuard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
