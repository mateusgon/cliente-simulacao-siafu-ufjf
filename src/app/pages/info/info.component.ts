import { Component, OnInit } from "@angular/core";
import { SimulationService } from 'src/app/_services/simulation.service';
import { Simulation } from 'src/app/models/simulation';

@Component({
  selector: "app-info",
  templateUrl: "info.component.html"
})
export class InfoComponent implements OnInit {
  public description: string;
  public simulation: Simulation = new Simulation();

  constructor(private simulationService: SimulationService) {}

  ngOnInit() {
    this.simulationService.findSelected(this.simulationService.getIdSelected()).subscribe((data: Simulation) => {
      this.simulation = data;
      this.simulationService.setSimulationSelected(this.simulation);
      this.description = this.simulation.description != null ? this.simulation.description : "  O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.";
    });
  }
}
