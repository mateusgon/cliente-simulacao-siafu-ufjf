import { Component, OnInit } from "@angular/core";
import { Simulation } from 'src/app/models/simulation';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SimulationService } from 'src/app/_services/simulation.service';

@Component({
  selector: "app-voltar",
  templateUrl: "voltar.component.html"
})
export class VoltarComponent implements OnInit {
  constructor(private sanitizer:DomSanitizer, private router: Router, private simulationService: SimulationService) {}

  ngOnInit() {
    this.simulationService.renewId();
    this.router.navigate(["/"]);    
  }
}
