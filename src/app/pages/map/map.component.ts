import { Component, OnInit } from "@angular/core";
import Map from 'ol/Map';
import HeatMap from 'ol/layer/Heatmap';
import Tile from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import XyzSource from 'ol/source/XYZ';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import { Agent } from 'src/app/models/agent';
import { Simulation } from 'src/app/models/simulation';
import { SimulationService } from 'src/app/_services/simulation.service';
import { PlaceMap } from 'src/app/models/placemap';

@Component({
  selector: "app-map",
  templateUrl: "map.component.html"
})
export class MapComponent implements OnInit {

  public simulation: Simulation = new Simulation();
  public simulationAgents: Agent[];

  map;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;
  xyzSource: XyzSource;
  tileLayer: Tile;
  view: View;
  marker: Feature;
  geometryAux: Feature[];

  constructor(private simulationService: SimulationService) {}

  async ngOnInit() {
    await this.simulationService.findSelected(this.simulationService.getIdSelected()).toPromise().then((data: Simulation) => {
      this.simulation = data;
      this.simulationAgents = this.simulation.agents;
      this.simulationService.setSimulationSelected(this.simulation);
    });

    this.initializeMap();
  }

  initializeMap(){
    this.geometryAux = new Array();
    this.simulationAgents.forEach(element => {
      if(element.placeOfInfection) {
        let place = new PlaceMap();
        let placeAUx = place.getValueAndInfo(element.placeOfInfection); 
        var add = new Feature({
          geometry: new Point(fromLonLat([placeAUx.long, placeAUx.lat])),
        });
        this.geometryAux.push(add);
      }      
    });


    this.vectorSource = new VectorSource({
      features: this.geometryAux,
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke({
          color: '#FF0000',
          width: 2
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#FF0000'
          })
        })
      })
    });

    this.xyzSource = new XyzSource({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.tileLayer = new Tile({
      source: this.xyzSource
    });

    this.view = new View({
      center: fromLonLat([-43.36905, -21.77748]),
      zoom: 15
    });

    /*var vector = new HeatMap({
      source: this.vectorSource,
      weight: "10",
      blur: parseInt("10", 10),
      radius: parseInt("10", 10),
    });*/

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view
    });
  }

}
