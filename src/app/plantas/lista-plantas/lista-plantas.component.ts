import { Component, OnInit } from '@angular/core';

import { Planta, TiposPlanta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css'],
})
export class ListaPlantasComponent implements OnInit {
  plantas!: Planta[];
  numPlantasInterior: number = 0;
  numPlantasExterior: number = 0;

  constructor(private plantasService: PlantasService) {}

  ngOnInit() {
    this.plantasService.getPlantas().subscribe((plantas: Planta[]) => {
      this.plantas = plantas;
      this.calcularTiposPlanta(this.plantas);
    });
  }

  calcularTiposPlanta(plantas: Planta[]): void {
    let interior = 0;
    let exterior = 0;
    plantas.forEach((planta: Planta) => {
      if (planta.tipo === TiposPlanta.INTERIOR) {
        interior++;
      } else {
        exterior++;
      }
    });
    this.numPlantasInterior = interior;
    this.numPlantasExterior = exterior;
  }
}
