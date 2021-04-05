import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";
import { PeopleComponent } from 'src/app/pages/people/people.component';
import { DaysComponent } from 'src/app/pages/days/days.component';
import { VideoComponent } from 'src/app/pages/video/video.component';
import { InfoComponent } from 'src/app/pages/info/info.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { VoltarComponent } from 'src/app/pages/voltar/voltar.component';

export const AdminLayoutRoutes: Routes = [
  { path: "simulacao/graficos", component: DashboardComponent },
  { path: "simulacao/personagens", component: PeopleComponent },
  { path: "simulacao/dias", component: DaysComponent },
  { path: "simulacao/maps", component: MapComponent },
  { path: "simulacao/video", component: VideoComponent},
  { path: "simulacao/info", component: InfoComponent},
  { path: "simulacao/voltar", component: VoltarComponent},
  { path: "**", component: NotfoundComponent}
];
