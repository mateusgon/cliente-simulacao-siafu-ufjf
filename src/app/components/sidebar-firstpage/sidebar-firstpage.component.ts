import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/simulacoes/sobre",
    title: "Sobre o projeto",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/simulacoes/lista",
    title: "Lista de simulações",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/simulacoes/comparacao",
    title: "Comparações",
    icon: "icon-chart-pie-36",
    class: ""
  }
];

@Component({
  selector: "app-sidebar-firstpage",
  templateUrl: "./sidebar-firstpage.component.html",
  styleUrls: ["./sidebar-firstpage.component.css"]
})
export class SidebarFirstPageComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
