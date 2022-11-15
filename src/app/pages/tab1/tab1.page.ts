import { Component, OnInit } from '@angular/core';
import { CartaService } from 'src/app/services/carta.service';
import { Plato, Bebestible } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  platos: Plato[] = [];
  bebestibles: Bebestible[] = [];

  constructor(private cartaService: CartaService) {}
  ngOnInit(): void {
    this.cartaService.getPlatos().subscribe((res) => {
      this.platos.push(...res.platos);
    });

    this.cartaService.getBebestibles().subscribe((res) => {
      this.bebestibles.push(...res.bebestibles);
      console.log(this.bebestibles);
    });
  }
}
