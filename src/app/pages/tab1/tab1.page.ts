import { Component, OnInit } from '@angular/core';
import { CartaService } from 'src/app/services/carta.service';
import { Plato } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  platos: Plato[] = [];

  constructor(private cartaService: CartaService) {}
  ngOnInit(): void {
    this.cartaService.getPlatos().subscribe((res) => {
      this.platos.push(...res.platos);
      console.log(this.platos);
    });
  }
}
