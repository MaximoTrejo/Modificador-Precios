import { Component } from '@angular/core';
import { ListadoArticulos } from "../../component/listado-articulos/listado-articulos";
import { Articulos } from '../../classes/articulos';
import { AgregarArticulos } from '../../component/agregar-articulos/agregar-articulos';
import { DetalleArticulos } from '../../component/detalle-articulos/detalle-articulos';

@Component({
  selector: 'app-home',
  imports: [ListadoArticulos,AgregarArticulos,DetalleArticulos],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  listado: Articulos[]=[ 
  {
    nombre:"A",
    apellido:"B",
    legajo: 123,
  },
  {
    nombre:'B',
    apellido:'C',
    legajo: 456,
  },
  {
    nombre:'E',
    apellido:'F',
    legajo: 789,
  },

]

  articulo : Articulos | null = null

  agregar(articulo:Articulos){
    this.listado.push(articulo)
  }

  verdetalleFinal(articulo:Articulos){
    this.articulo =articulo;
  }


}
