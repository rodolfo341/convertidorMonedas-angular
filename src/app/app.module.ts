import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ConvertidorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
