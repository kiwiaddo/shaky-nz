
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { QuakesComponent } from './quakes/quakes.component';
import { RealTimeQuakesComponent } from './real-time-quakes/real-time-quakes.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'quakes', component: QuakesComponent },
  { path: 'real-time-quakes', component: RealTimeQuakesComponent },
];
