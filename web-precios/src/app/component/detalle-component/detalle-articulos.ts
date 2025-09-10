import { Component, input } from '@angular/core';
import { Articulo } from '../../classes/articulo';

@Component({
  selector: 'app-detalle-articulos',
  imports: [],
  templateUrl: './detalle-articulos.html',
  styleUrl: './detalle-articulos.css'
})
export class DetalleArticulos {

  articulo = input<Articulo | null>(null)
}
