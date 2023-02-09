import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[
    HeroeComponent,//Se declara los componentes internos que pertenece a este modulo
    ListadoComponent //Se declara los componentes internos que pertenece a este modulo
  ],
  exports:[
    ListadoComponent //Exporto Listado Component
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{} //Se coloca el nombre del modulo que se exporta en todo el proyecto
