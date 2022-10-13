import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespPlatos } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  constructor(private http: HttpClient) {}

  getPlatos() {
    return this.http.get<RespPlatos>('http://localhost:8080/api/platos/platos');
  }
}
