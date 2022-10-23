import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-convertidor',
    templateUrl: './convertidor.component.html',
    styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
    cantidad: number = 0;
    tengo: string = "USD";
    quiero: string = "EUR";
    total: number = 0;
    monedas: string[] = ['USD','EUR','LIBRA'];

    convertir(): void {
        
        if ( this.tengo === "USD"){
            if ( this.quiero === "USD") this.total = this.cantidad;
            if ( this.quiero === "EUR") this.total = this.cantidad * 0.84;
            if ( this.quiero === "LIBRA") this.total = this.cantidad * 0.75;   
        }

        if ( this.tengo === "EUR"){
            if ( this.quiero === "USD") this.total = this.cantidad * 1.2;
            if ( this.quiero === "EUR") this.total = this.cantidad;
            if ( this.quiero === "LIBRA") this.total = this.cantidad * 0.9;   
        }

        if ( this.tengo === "LIBRA"){
            if ( this.quiero === "USD") this.total = this.cantidad * 1.33;
            if ( this.quiero === "EUR") this.total = this.cantidad * 1.11;
            if ( this.quiero === "LIBRA") this.total = this.cantidad;   
        }

    }


    constructor() { }

    ngOnInit(): void {
    }

}
