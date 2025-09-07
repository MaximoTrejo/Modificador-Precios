import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Articulos } from '../../classes/articulos';

@Component({
  selector: 'app-agregar-articulos',
  imports: [FormsModule],
  templateUrl: './agregar-articulos.html',
  styleUrl: './agregar-articulos.css'
})
export class AgregarArticulos {

  nombre:string = '';
  apellido:string ='';
  legajo:number = 0;


  envioArticulo = output<Articulos>();

  agregar(){
    //envia al padre el elemento de agregar
    const persona =  new Articulos(this.legajo,this.nombre,this.apellido);
    console.log(persona);
    this.envioArticulo.emit(persona)
  }
}
