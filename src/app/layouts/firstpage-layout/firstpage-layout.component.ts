import { Component, OnInit } from "@angular/core";
import { SimulationService } from 'src/app/_services/simulation.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AuthGuardService } from 'src/app/_services/authguard.service';
import { Credential } from 'src/app/models/credential';

@Component({
  selector: "app-firstpage-layout",
  templateUrl: "./firstpage-layout.component.html",
  styleUrls: ["./firstpage-layout.component.scss"]
})

export class FirstPageLayoutComponent implements OnInit {
  public sidebarColor: string = "red";
  public isLoginFailed: boolean;
  public errorMessage: string;
  public credential: Credential;

  constructor(
    private simulationService: SimulationService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private authGuard: AuthGuardService) {}

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

  async ngOnInit() {
    this.changeSidebarColor("red");
    if (!this.authGuard.isLoggedIn()){
      await this.login();
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

  isSelected()
  {
    if (!this.simulationService.getIdSelected() || this.simulationService.getIdSelected() == 0)
    {
      return false;
    }
    return true;
  }
 }
