import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SidebarFirstPageComponent } from './sidebar-firstpage/sidebar-firstpage.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SidebarFirstPageComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, SidebarFirstPageComponent]
})
export class ComponentsModule {}
