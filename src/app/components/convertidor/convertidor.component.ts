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

    constructor() { }

    ngOnInit(): void {
    }

}
