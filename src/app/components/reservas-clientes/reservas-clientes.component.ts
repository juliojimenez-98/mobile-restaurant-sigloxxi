import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from 'src/app/interfaces/interfaces';
import { CartaService } from 'src/app/services/carta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas-clientes',
  templateUrl: './reservas-clientes.component.html',
  styleUrls: ['./reservas-clientes.component.scss'],
})
export class ReservasClientesComponent implements OnInit {
  @Input() reservas: Reserva[] = [];
  constructor(private servicio: CartaService) {}

  ngOnInit() {
    this.reservas;
  }

  cancelar(idReserva: number) {
    Swal.fire({
      title: 'Estás segur@?',
      text: 'Cancelarás esta reserva',
      icon: 'warning',
      showCancelButton: true,
      heightAuto: false,
      confirmButtonColor: '#2dd36f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar reserva',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.cancelarReserva(idReserva, 0).subscribe((res) => {
          console.log(res);
          if (res.msg === 'ok') {
            Swal.fire({
              title: 'Reserva cancelada',
              text: 'Su reserva fue cancelada',
              icon: 'success',
              heightAuto: false,
            });
          }
        });
      }
    });
  }

  confirmar(idReserva: number) {
    Swal.fire({
      title: 'Estás segur@?',
      text: 'Confirmarás esta reserva',
      icon: 'warning',
      showCancelButton: true,
      heightAuto: false,
      confirmButtonColor: '#2dd36f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, confirmar reserva',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.confirmarReserva(idReserva, 1).subscribe((res) => {
          console.log(res);
          if (res.msg === 'ok') {
            Swal.fire({
              title: 'Reserva confirmada',
              text: 'Su reserva fue confirmada exitosamente',
              icon: 'success',
              heightAuto: false,
            });
          }
        });
      }
    });
  }
}
