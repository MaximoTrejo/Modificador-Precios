import { Component } from '@angular/core';
import { ListadoArticulos } from "../../component/listado-component/listado-articulos";
import { AgregarArticulos } from '../../component/agregar-component/agregar-articulos';
import { DetalleArticulos } from '../../component/detalle-component/detalle-articulos';
import { Articulo } from '../../classes/articulo';

@Component({
  selector: 'app-articulos',
  imports: [ListadoArticulos,AgregarArticulos,DetalleArticulos],
  templateUrl: './articulos.html',
  styleUrl: './articulos.css'
})
export class Articulos {

listado: Articulo[]=[ 
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

  articulo : Articulo | null = null

  agregar(articulo:Articulo){
    this.listado.push(articulo)
  }

  verdetalleFinal(articulo:Articulo){
    this.articulo =articulo;
  }


}