import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Reserva } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';
import { CartaService } from 'src/app/services/carta.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  nextStep: boolean = false;
  email: string = '';
  idCliente: number = 0;

  cantidadPersonas: any[] = [
    { numero: 2, nombre: '2 Personas' },
    { numero: 4, nombre: '4 Personas' },
    { numero: 6, nombre: '6 Personas' },
    { numero: 8, nombre: '8 Personas' },
    { numero: 10, nombre: '10 Personas' },
    { numero: 12, nombre: '12 Personas' },
  ];

  horasDisponibles: any[] = [
    { hora: '13:00' },
    { hora: '14:00' },
    { hora: '15:00' },
    { hora: '16:00' },
    { hora: '17:00' },
    { hora: '18:00' },
    { hora: '19:00' },
    { hora: '20:00' },
    { hora: '21:00' },
    { hora: '22:00' },
    { hora: '23:00' },
  ];

  cliente: Cliente = {
    nombre: '',
    appa: '',
    email: '',
    cel: 0,
  };

  reserva: Reserva = {
    cant_personas: 0,
    fecha_reserva: '',
    hora_reserva: '',
    id_cliente: 0,
  };

  constructor(private service: CartaService, private router: Router) {}

  crearCliente() {
    console.log(this.cliente);
    this.service.crearCliente(this.cliente).subscribe((res: any) => {
      console.log(res);
      if (res.update && res.msg === 'ok') {
        this.nextStep = true;
        this.email = res.email;
        this.idCliente = res.id_cliente;
        this.reserva.id_cliente = this.idCliente;
        console.log(this.idCliente);
        this.obtenerClientePorEmail();
      }
      if (res.msg === 'ok' && !res.update) {
        this.idCliente = res.cliente.id_cliente;
        this.nextStep = true;
        this.email = this.cliente.email;
        this.reserva.id_cliente = this.idCliente;

        this.obtenerClientePorEmail();
      }
    });
  }

  obtenerClientePorEmail() {
    if (this.nextStep) {
      this.service.getClientePorEmail(this.email).subscribe((res: any) => {
        console.log(res);
      });
    }
  }

  crearReserva() {
    if (this.nextStep) {
      this.service.crearReserva(this.reserva).subscribe((res: any) => {
        console.log(res);
        if (res.msg === 'ok') {
          Swal.fire({
            title: 'Reserva registrada',
            text: 'Su reserva fue registrada exitosamente, recibiras un correo con la información de la reserva',
            icon: 'success',
            heightAuto: false,
          });
          this.router.navigateByUrl('/tabs/tab3');
          this.nextStep = false;
        }
      });
    }
  }
}
