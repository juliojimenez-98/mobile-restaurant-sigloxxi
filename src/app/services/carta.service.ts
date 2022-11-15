import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespBebestibles } from '../interfaces/interfaces';
import {
  CancelarReservaResponse,
  Cliente,
  Reserva,
  ReservasResponse,
  RespPlatos,
} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  constructor(private http: HttpClient) {}

  getPlatos() {
    return this.http.get<RespPlatos>('http://localhost:8080/api/platos/platos');
  }

  getBebestibles() {
    return this.http.get<RespBebestibles>(
      'http://localhost:8080/api/bebestibles/bebestibles'
    );
  }

  getReservasPorEmail(email: string) {
    return this.http.get<ReservasResponse>(
      `http://localhost:8080/api/reserva/reserva/${email}`
    );
  }

  cancelarReserva(id: number, estado: number) {
    return this.http.put<CancelarReservaResponse>(
      `http://localhost:8080/api/reserva/cancelar/${id}`,
      { estado }
    );
  }

  confirmarReserva(id: number, estado: number) {
    return this.http.put<CancelarReservaResponse>(
      `http://localhost:8080/api/reserva/confirmar/${id}`,
      { estado }
    );
  }

  getClientePorEmail(email: string) {
    return this.http.get<any>(
      `http://localhost:8080/api/clientes/cliente/${email}`
    );
  }

  crearCliente(cliente: Cliente) {
    return this.http.post<Cliente>(
      `http://localhost:8080/api/clientes/cliente`,
      cliente
    );
  }

  crearReserva(reserva: Reserva) {
    return this.http.post<Reserva>(
      `http://localhost:8080/api/reserva/reserva`,
      reserva
    );
  }
}
