import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatosComponent } from './platos/platos.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PlatosComponent],
  exports: [PlatosComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
