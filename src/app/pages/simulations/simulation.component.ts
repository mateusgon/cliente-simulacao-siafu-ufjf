import { Component, OnInit } from "@angular/core";
import { Simulation } from 'src/app/models/simulation';
import { SimulationService } from 'src/app/_services/simulation.service';
import { Day } from 'src/app/models/day';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthGuardService } from 'src/app/_services/authguard.service';
import { Credential } from 'src/app/models/credential';

@Component({
  selector: "app-simulation",
  templateUrl: "simulation.component.html",
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
    this.router.navigate(["/simulacao/info"]);
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
}
