export enum TiposPlanta {
  INTERIOR = 'Interior',
  EXTERIOR = 'Exterior',
}

export class Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: TiposPlanta;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;

  constructor(
    id: number,
    nombre_comun: string,
    nombre_cientifico: string,
    tipo: TiposPlanta,
    altura_maxima: number,
    clima: string,
    sustrato_siembra: string
  ) {
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.altura_maxima = altura_maxima;
    this.clima = clima;
    this.sustrato_siembra = sustrato_siembra;
  }
}
