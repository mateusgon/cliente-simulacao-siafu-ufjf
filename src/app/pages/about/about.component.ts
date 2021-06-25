import { Component, OnInit } from "@angular/core";
import { SimulationService } from 'src/app/_services/simulation.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-about",
  templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {

  constructor(private simulationService: SimulationService, config: NgbCarouselConfig) {
    config.interval = 10000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true; 
  }

  ngOnInit() {
  }
}
