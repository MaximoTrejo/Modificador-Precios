import { Component, input, output } from '@angular/core';
import { Articulo } from '../../classes/articulo';

@Component({
  selector: 'app-listado-articulos',
  imports: [],
  templateUrl: './listado-articulos.html',
  styleUrl: './listado-articulos.css'
})
export class ListadoArticulos {


listadoHijo = input <Articulo[]>([]); 
 envioDeArticulo = output<Articulo>();

  verDetalle(alumno: Articulo) {
    this.envioDeArticulo.emit(alumno);
  }

}
