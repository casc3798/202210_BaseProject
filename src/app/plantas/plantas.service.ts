import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planta } from './planta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantasService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
