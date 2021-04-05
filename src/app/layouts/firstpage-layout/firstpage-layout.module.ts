import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FirstPageLayoutRoutes } from "./firstpage-layout.routing";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { SimulationComponent } from 'src/app/pages/simulations/simulation.component';
import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { PeopleComponent } from 'src/app/pages/people/people.component';
import { DaysComponent } from 'src/app/pages/days/days.component';
import { InfoComponent } from 'src/app/pages/info/info.component';
import { MapComponent } from 'src/app/pages/map/map.component';
import { VideoComponent } from 'src/app/pages/video/video.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FirstPageLayoutRoutes),
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
  ],
  declarations: [
    SimulationComponent,
    AboutComponent,
    DashboardComponent,
    PeopleComponent,
    DaysComponent,    
    InfoComponent,
    MapComponent,
    VideoComponent
  ]
})
export class FirstPageLayoutModule {}
