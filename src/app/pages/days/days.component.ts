import { Component, OnInit } from "@angular/core";
import { Simulation } from 'src/app/models/simulation';
import { SimulationService } from 'src/app/_services/simulation.service';
import { Agent } from 'src/app/models/agent';
import { Day } from 'src/app/models/day';

@Component({
  selector: "app-days",
  templateUrl: "days.component.html"
})
export class DaysComponent implements OnInit {
  public simulation: Simulation = new Simulation();
  public simulationAgents: Agent[];
  public simulationDays: Day[];
  public p2: number = 1
  constructor(private simulationService: SimulationService) {}

  ngOnInit() {
    this.simulationService.findSelected(this.simulationService.getIdSelected()).subscribe((data: Simulation) => {
      this.simulation = data;
      this.simulationAgents = this.simulation.agents;
      this.simulationDays = this.simulation.days;
      this.simulationService.setSimulationSelected(this.simulation);
      
    });

  }
}
