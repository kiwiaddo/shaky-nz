import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { QuakesComponent } from './quakes/quakes.component';
import { RealTimeQuakesComponent } from './real-time-quakes/real-time-quakes.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'quakes', component: QuakesComponent },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'real-time-quakes', component: RealTimeQuakesComponent },
];
