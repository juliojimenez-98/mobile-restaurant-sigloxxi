import { Component, Input, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/interfaces';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss'],
})
export class PlatosComponent implements OnInit {
  @Input() platos: Plato[] = [];
  constructor() {}

  ngOnInit() {
    this.platos;
  }
}
