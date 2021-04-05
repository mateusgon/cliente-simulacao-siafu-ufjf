import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/simulacao/info",
    title: "Sobre a simulação",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/simulacao/graficos",
    title: "Gráficos",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/simulacao/personagens",
    title: "Personagens",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/simulacao/dias",
    title: "Dados por dia",
    icon: "icon-calendar-60",
    class: ""
  },
  {
    path: "/simulacao/maps",
    title: "Exemplo de infecções",
    icon: "icon-map-big",
    class: ""
  },
  {
    path: "/simulacao/video",
    title: "Simulação no campus",
    icon: "icon-video-66",
    class: ""
  },
  {
    path: "/simulacao/voltar",
    title: "Voltar para listar de simulações",
    icon: "",
    class: ""
  }
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
