import { Component, OnInit } from "@angular/core";
import { SimulationService } from 'src/app/_services/simulation.service';
import { Simulation } from 'src/app/models/simulation';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: "app-video",
  templateUrl: "video.component.html"
})
export class VideoComponent implements OnInit {
  public videoUrl: string;
  public simulation: Simulation = new Simulation();

  constructor(private simulationService: SimulationService, private sanitizer:DomSanitizer) {}

  ngOnInit() {
    this.simulationService.findSelected(this.simulationService.getIdSelected()).subscribe((data: Simulation) => {
      this.simulation = data;
      this.simulationService.setSimulationSelected(this.simulation);
      this.videoUrl = this.simulation.videoUrl != null ? this.simulation.videoUrl : null;
    });

  }

  getVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
