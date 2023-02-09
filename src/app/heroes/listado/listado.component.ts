import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Hulk','Ironman','Thor','Capitan America','Ojo de Halcon'];
  heroeBorrado: string ="";


  borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || "";


  }


}



