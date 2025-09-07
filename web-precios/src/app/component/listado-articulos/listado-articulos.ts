import { Component, input, output } from '@angular/core';
import { Articulos } from '../../classes/articulos';

@Component({
  selector: 'app-listado-articulos',
  imports: [],
  templateUrl: './listado-articulos.html',
  styleUrl: './listado-articulos.css'
})
export class ListadoArticulos {


listadoHijo = input <Articulos[]>([]); 
 envioDeArticulo = output<Articulos>();

  verDetalle(alumno: Articulos) {
    this.envioDeArticulo.emit(alumno);
  }

}
