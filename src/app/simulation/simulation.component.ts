import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../_services/simulation.service';
import { Simulation } from '../models/simulation';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Credential } from '../models/credential';
import { AuthGuardService } from '../_services/authguard.service';
import { Day } from '../models/day';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
  public simulationDays: Day[];
  public sidebarColor: string = "blue";
  public format: string = "dd/MM/yyyy HH:mm:ss";
  public items: Simulation[];
  public isLoginFailed: boolean;
  public errorMessage: string;
  public credential: Credential;
  public p: number = 1;
  public p2: number = 1;
  public tableSelected: number = 0;

  constructor(private simulationService: SimulationService,
    private router: Router, 
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private authGuard: AuthGuardService) { }

  async ngOnInit() {
    if (!this.authGuard.isLoggedIn()){
      await this.login();
    }

    if (!this.isLoginFailed) 
    {
      this.simulationService.getAllSimulations().subscribe((data: Simulation[]) => {
        this.items = data;
        this.items.forEach(element => {
          this.sumData(element);
        });
      })  
    }
    this.changeDashboardColor(this.sidebarColor);
  }

  async login() {
    this.credential = new Credential();
    this.credential.setCredential("mod", "12345678");
    const data = await this.authService.login(this.credential).toPromise().then(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
    }).catch(error => {
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
      //Navegar para a página de erro 
    });
  }

  sumData(element: Simulation){
    element.infected = this.sumTheDaysInfected(element.simulationDays);
    element.cured = this.sumTheDaysCured(element.simulationDays);
    element.dead = this.sumTheDaysDead(element.simulationDays);
  }
  
  public sumTheDaysInfected(days: Day[]){
    let infected = 0;
    for (var i = 0; i < days.length; i++)
    { 
      infected = infected + days[i].infected;
    }
    return infected;
  }

  public sumTheDaysCured(days: Day[]){
    
    let cured = 0;
    for (var i = 0; i < days.length; i++)
    { 
      cured = cured + days[i].cured;
    }
    return cured;
  }

  public sumTheDaysDead(days: Day[]){
    
    let dead = 0;
    for (var i = 0; i < days.length; i++)
    { 
      dead = dead + days[i].dead;
    }
    return dead;
  }

  selected(id: number){
    this.simulationService.setIdSelected(id);
    this.router.navigate(["/"]);
  }

  compare(nmbr){
    this.tableSelected = nmbr;
  }

  isSelected() {
    return this.tableSelected;
  }

  getLength(){
    if (this.items != null && this.items.length > 10){
      return true;
    }
    else {
      return false;
    }
  }

  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];
    var navbarDistance = document.getElementsByClassName('navbar-distance')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
    if(navbarDistance != undefined){
        navbarDistance.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
}
