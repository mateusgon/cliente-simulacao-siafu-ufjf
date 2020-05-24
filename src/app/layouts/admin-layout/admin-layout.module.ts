import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from 'ngx-pagination';
import { PeopleComponent } from 'src/app/pages/people/people.component';
import { DaysComponent } from 'src/app/pages/days/days.component';
import { InfoComponent } from 'src/app/pages/info/info.component';
import { VideoComponent } from 'src/app/pages/video/video.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    PeopleComponent,
    DaysComponent,    
    InfoComponent,
    MapComponent,
    VideoComponent
  ]
})
export class AdminLayoutModule {}
