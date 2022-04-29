import { Component, OnInit } from '@angular/core';

import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css'],
})
export class ListaPlantasComponent implements OnInit {
  plantas!: Planta[];

  constructor(private plantasService: PlantasService) {}

  ngOnInit() {
    console.log('Iniciando lista plantas');
    this.plantasService.getPlantas().subscribe((plantas: Planta[]) => {
      this.plantas = plantas;
    });
  }
}
