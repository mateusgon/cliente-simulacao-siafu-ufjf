import { Component, OnInit, Input } from "@angular/core";
import Chart from 'chart.js';
import { SimulationService } from 'src/app/_services/simulation.service';
import { Simulation } from 'src/app/models/simulation';
import { formatDate } from '@angular/common';
import { Day } from 'src/app/models/day';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthGuardService } from 'src/app/_services/authguard.service';
import { Credential } from 'src/app/models/credential';
import { Dataset } from 'src/app/models/dataset';

@Component({
  selector: "app-dashboard-firstpage",
  templateUrl: "dashboard-firstpage.component.html"
})

export class DashboardFirstPageComponent implements OnInit {
  public simulations: Simulation[];
  public isLoginFailed: boolean;
  public credential: Credential;  
  public errorMessage: string;

  public canvas : any;
  public canvas2 : any;
  public canvas3 : any;
  public ctx;
  public ctx2;
  public ctx3;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  constructor(private simulationService: SimulationService, 
    private router: Router, 
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private authGuard: AuthGuardService) {}

  async ngOnInit() {
    if (!this.authGuard.isLoggedIn()){
      await this.login();
    }

    if (!this.isLoginFailed) 
    {
      this.simulationService.getAllSimulations().subscribe((simulations: Simulation[]) => {
        this.simulations = simulations;
        let greatestSimulation = new Simulation();
        greatestSimulation.daysCount = 0;
        this.simulations.forEach(element => {
          if (greatestSimulation.daysCount < element.daysCount)
          {
            greatestSimulation = element;
          }
        });

        var chart_labels_aux:string[] = new Array(greatestSimulation.daysCount);
        var i = 0;
        greatestSimulation.simulationDays.forEach(element => {
          chart_labels_aux[i] = this.formatDateAux(element.date);
          i++
        });

        var gradientChartOptionsConfigurationWithTooltipRed: any = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top'
          },
    
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          scales: {
            yAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 100,
                suggestedMax: 200,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }],
    
            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(233,32,16,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }]
          }
        };

        let colors: Array<string> = ["","","",""];
        i = 0;
        this.simulations.forEach(element => {
          colors[i] = this.getRandomColor();
          i++;
        });

        i = 0;
        var datasets_auxInfected: Dataset[] = new Array(this.simulations.length);
        this.simulations.forEach(element => {
          let datasetsDays_aux: number[] = new Array(element.daysCount);
          let datasetAux = new Dataset();
          let contadorAux = 0;

          datasetAux.label = element.scenario;
          datasetAux.borderColor = colors[i],
          datasetAux.backgroundColor = gradientStroke,
          element.simulationDays.forEach(element2 => {
            datasetsDays_aux[contadorAux] = this.sumTheDaysInfected(element.simulationDays, contadorAux);
            contadorAux++;
          });
          datasetAux.data = datasetsDays_aux;
          datasets_auxInfected[i] = datasetAux;
          i++
        });

        i = 0;
        var datasets_auxCured: Dataset[] = new Array(this.simulations.length);
        this.simulations.forEach(element => {
          let datasetsDays_aux: number[] = new Array(element.daysCount);
          let datasetAux = new Dataset();
          let contadorAux = 0;

          datasetAux.label = element.scenario;
          datasetAux.borderColor = colors[i],
          datasetAux.backgroundColor = gradientStroke,
          element.simulationDays.forEach(element2 => {
            datasetsDays_aux[contadorAux] = this.sumTheDaysCured(element.simulationDays, contadorAux);
            contadorAux++;
          });
          datasetAux.data = datasetsDays_aux;
          datasets_auxCured[i] = datasetAux;
          i++
        });

        i = 0;
        var datasets_auxInDead: Dataset[] = new Array(this.simulations.length);
        this.simulations.forEach(element => {
          let datasetsDays_aux: number[] = new Array(element.daysCount);
          let datasetAux = new Dataset();
          let contadorAux = 0;

          datasetAux.label = element.scenario;
          datasetAux.borderColor = colors[i],
          datasetAux.backgroundColor = gradientStroke,
          element.simulationDays.forEach(element2 => {
            datasetsDays_aux[contadorAux] = this.sumTheDaysDead(element.simulationDays, contadorAux);
            contadorAux++;
          });
          datasetAux.data = datasetsDays_aux;
          datasets_auxInDead[i] = datasetAux;
          i++
        });
      
        this.canvas = document.getElementById("chartBig1");
        this.ctx = this.canvas.getContext("2d");
    
        const gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); 
    
        const labels = chart_labels_aux;
        const data = {
          labels: labels,
          datasets: datasets_auxInfected
        };
    
        var config = {
          type: 'line',
          data: data,
          options: gradientChartOptionsConfigurationWithTooltipRed
        };
        new Chart(this.ctx, config);

        this.canvas2 = document.getElementById("chartBig2");
        this.ctx2 = this.canvas2.getContext("2d");

        const data2 = {
          labels: labels,
          datasets: datasets_auxCured
        };
    
        var config2 = {
          type: 'line',
          data: data2,
          options: gradientChartOptionsConfigurationWithTooltipRed
        };
        new Chart(this.ctx2, config2);

        this.canvas3 = document.getElementById("chartBig3");
        this.ctx3 = this.canvas3.getContext("2d");

        const data3 = {
          labels: labels,
          datasets: datasets_auxInDead
        };
    
        var config3 = {
          type: 'line',
          data: data3,
          options: gradientChartOptionsConfigurationWithTooltipRed
        };
        new Chart(this.ctx3, config3);
      });  
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

  public formatDateAux(date: Date) {
    var myDate = new Date(date).toUTCString()
    var format = 'dd/MM/yyyy';
    var locale = 'pt-BR';
    return formatDate(myDate, format, locale);
  }

  public sumTheDaysInfected(days: Day[], daysSum: Number){
    
    let infected = 0;
    for (var i = 0; i <= daysSum; i++)
    { 
      infected = infected + days[i].infected;
    }
    return infected;
  }

  public sumTheDaysCured(days: Day[], daysSum: Number){
    
    let cured = 0;
    for (var i = 0; i <= daysSum; i++)
    { 
      cured = cured + days[i].cured;
    }
    return cured;
  }

  public sumTheDaysDead(days: Day[], daysSum: Number){
    
    let dead = 0;
    for (var i = 0; i <= daysSum; i++)
    { 
      dead = dead + days[i].dead;
    }
    return dead;
  }

  public getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
