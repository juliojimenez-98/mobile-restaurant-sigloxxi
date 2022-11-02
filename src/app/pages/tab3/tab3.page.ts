import { Component } from '@angular/core';
import { Reserva } from 'src/app/interfaces/interfaces';
import { CartaService } from 'src/app/services/carta.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  showTable: boolean = false;
  email = '';
  reservas: Reserva[] = [];
  constructor(private service: CartaService) {}

  form() {
    console.log(this.email);
    this.obtenerReservaPorClientes();
  }

  obtenerReservaPorClientes() {
    this.service.getReservasPorEmail(this.email).subscribe((res) => {
      if (res.reservas) {
        this.showTable = true;
        this.reservas = res.reservas;
        console.log(this.reservas);
      }
    });
  }
}
