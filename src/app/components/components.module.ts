import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatosComponent } from './platos/platos.component';
import { IonicModule } from '@ionic/angular';
import { ReservasClientesComponent } from './reservas-clientes/reservas-clientes.component';

@NgModule({
  declarations: [PlatosComponent, ReservasClientesComponent],
  exports: [PlatosComponent, ReservasClientesComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
