import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/graficos",
    title: "Gráficos",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/personagens",
    title: "Personagens",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/dias",
    title: "Dados por dia",
    icon: "icon-calendar-60",
    class: ""
  },
  {
    path: "/maps",
    title: "Mapa de infecções",
    icon: "icon-map-big",
    class: ""
  },
  {
    path: "/video",
    title: "Simulação no campus",
    icon: "icon-video-66",
    class: ""
  },
  {
    path: "/info",
    title: "Sobre a simulação",
    icon: "icon-notes",
    class: ""
  },
  /*{
    path: "/icons",
    title: "Icons",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },
  {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
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
