import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Simulation } from '../models/simulation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  public idSelected: Number;
  public simulationSelected: Simulation;

  constructor(private http: HttpClient) { }

  getAllSimulations(): Observable<any> {
    return this.http.get(environment.AUTH_API + 'simulation/listall');
  }

  findSelected(id: Number): Observable<any> {
    return this.http.get(environment.AUTH_API + 'simulation/find/' + id);
  }

  setIdSelected(id: Number){
    this.idSelected = id;
  }

  getIdSelected(){
    return this.idSelected;
  }

  setSimulationSelected(simulation: Simulation){
    this.simulationSelected = simulation;
  }

  getSimulationSelected(){
    return this.simulationSelected;
  }
}