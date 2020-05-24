import { Component, OnInit } from "@angular/core";
import { Simulation } from 'src/app/models/simulation';
import { SimulationService } from 'src/app/_services/simulation.service';
import { Agent } from 'src/app/models/agent';
import { Day } from 'src/app/models/day';
import { PlaceMap } from 'src/app/models/placemap';
import { Place } from 'src/app/models/place';

@Component({
  selector: "app-people",
  templateUrl: "people.component.html"
})
export class PeopleComponent implements OnInit {
  public simulation: Simulation = new Simulation();
  public simulationAgents: Agent[];
  public agentsLoaded: boolean = false;
  public p: number = 1
  constructor(private simulationService: SimulationService) {}

  async ngOnInit() {
    console.log(this.simulationService.getIdSelected());
    await this.simulationService.findSelected(this.simulationService.getIdSelected()).toPromise().then((data: Simulation) => {
      this.simulation = data;
      this.simulationAgents = this.simulation.agents;
      this.simulationService.setSimulationSelected(this.simulation);
    });
    this.agentsLoaded = true;
  }

  getPlaceOfInfection(name: string) {
    if (name)
    {
      let placemap = new PlaceMap();
      return placemap.getValue(name);  
    }
    return "";
  }
}
