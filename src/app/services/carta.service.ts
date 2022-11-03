import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get<RespPlatos>(
      'http://192.168.1.85:8080/api/platos/platos'
    );
  }

  getReservasPorEmail(email: string) {
    return this.http.get<ReservasResponse>(
      `http://192.168.1.85:8080/api/reserva/reserva/${email}`
    );
  }

  cancelarReserva(id: number, estado: number) {
    return this.http.put<CancelarReservaResponse>(
      `http://192.168.1.85:8080/api/reserva/cancelar/${id}`,
      { estado }
    );
  }

  confirmarReserva(id: number, estado: number) {
    return this.http.put<CancelarReservaResponse>(
      `http://192.168.1.85:8080/api/reserva/confirmar/${id}`,
      { estado }
    );
  }

  getClientePorEmail(email: string) {
    return this.http.get<any>(
      `http://192.168.1.85:8080/api/clientes/cliente/${email}`
    );
  }

  crearCliente(cliente: Cliente) {
    return this.http.post<Cliente>(
      `http://192.168.1.85:8080/api/clientes/cliente`,
      cliente
    );
  }

  crearReserva(reserva: Reserva) {
    return this.http.post<Reserva>(
      `http://192.168.1.85:8080/api/reserva/reserva`,
      reserva
    );
  }
}
