import { Routes } from "@angular/router";

import { AboutComponent } from 'src/app/pages/about/about.component';
import { SimulationComponent } from 'src/app/pages/simulations/simulation.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { PeopleComponent } from 'src/app/pages/people/people.component';
import { DaysComponent } from 'src/app/pages/days/days.component';
import { MapComponent } from 'src/app/pages/map/map.component';
import { VideoComponent } from 'src/app/pages/video/video.component';
import { InfoComponent } from 'src/app/pages/info/info.component';

export const FirstPageLayoutRoutes: Routes = [
  { path: "simulacoes/lista", component: SimulationComponent },
  { path: "simulacoes/sobre", component: AboutComponent}
];
