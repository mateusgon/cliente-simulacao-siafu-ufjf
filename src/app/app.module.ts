import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthGuardService } from './_services/authguard.service';
import { SimulationComponent } from './simulation/simulation.component';
import { registerLocaleData } from '@angular/common';
import localeBr from "@angular/common/locales/pt";
import {NgxPaginationModule} from 'ngx-pagination';
registerLocaleData(localeBr, "pt");

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, SimulationComponent],
  providers: [authInterceptorProviders, AuthGuardService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
