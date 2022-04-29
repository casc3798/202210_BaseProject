import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPlantasComponent } from './lista-plantas/lista-plantas.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListaPlantasComponent],
  exports: [ListaPlantasComponent],
})
export class PlantasModule {}
