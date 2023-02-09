import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from "./contador/contador.module";



@NgModule({
    declarations: [
        AppComponent
        //      ContadorComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesModule,//Importo el Modulo Heroes en el app principal
        ContadorModule

    ]
})
export class AppModule { }
