import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";
import { PeopleComponent } from 'src/app/pages/people/people.component';
import { DaysComponent } from 'src/app/pages/days/days.component';
import { VideoComponent } from 'src/app/pages/video/video.component';
import { InfoComponent } from 'src/app/pages/info/info.component';

export const AdminLayoutRoutes: Routes = [
  { path: "graficos", component: DashboardComponent },
  { path: "personagens", component: PeopleComponent },
  { path: "dias", component: DaysComponent },
  { path: "maps", component: MapComponent },
  { path: "video", component: VideoComponent},
  { path: "info", component: InfoComponent}
];
