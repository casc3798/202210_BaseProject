/* tslint:disable:no-unused-variable */
import * as fakerLib from '@faker-js/faker';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Planta, TiposPlanta } from '../planta';
import { ListaPlantasComponent } from './lista-plantas.component';

describe('ListaPlantasComponent', () => {
  const faker = fakerLib.default;
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPlantasComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;

    const getRandomType = (): TiposPlanta => {
      const number = Math.random();
      if (number <= 0.5) {
        return TiposPlanta.EXTERIOR;
      }
      return TiposPlanta.INTERIOR;
    };

    let plantas = [
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        getRandomType(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      ),
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        getRandomType(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      ),
      new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        getRandomType(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      ),
    ];

    fixture.componentInstance.plantas = plantas;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería crear la tabla correctamente con sus encabezados y filas', () => {
    const rows = debug.queryAll(By.css('tr'));
    expect(rows.length).toEqual(4);

    const header = debug.queryAll(By.css('.app-table-header'));
    expect(header.length).toEqual(1);

    const dataCells = debug.queryAll(By.css('.app-table-td'));
    expect(dataCells.length).toEqual(3);
  });
});
