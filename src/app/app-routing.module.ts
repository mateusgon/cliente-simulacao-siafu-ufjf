import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { FirstPageLayoutComponent } from './layouts/firstpage-layout/firstpage-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuardService } from './_services/authguard.service';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: "",
    component: FirstPageLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "simulacoes/sobre",
        pathMatch: "full"
      },
      {
        path: "",
        loadChildren:
          "./layouts/firstpage-layout/firstpage-layout.module#FirstPageLayoutModule"
      }
    ]
  },
  {
    path: "simulacao",
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "simulacao/info",
        redirectTo: "info",
        pathMatch: "full"
      },
      {
        path: "",
        loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ]
  },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
