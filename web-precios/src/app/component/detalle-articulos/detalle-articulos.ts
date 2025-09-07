import { Component, input } from '@angular/core';
import { Articulos } from '../../classes/articulos';

@Component({
  selector: 'app-detalle-articulos',
  imports: [],
  templateUrl: './detalle-articulos.html',
  styleUrl: './detalle-articulos.css'
})
export class DetalleArticulos {

  articulo = input<Articulos | null>(null)
}
