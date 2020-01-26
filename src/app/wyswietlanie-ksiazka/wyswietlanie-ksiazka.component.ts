import { Component, OnInit } from '@angular/core';
import { Ksiazka } from '../models/ksiazka';

@Component({
  selector: 'app-wyswietlanie-ksiazka',
  templateUrl: './wyswietlanie-ksiazka.component.html',
  styleUrls: ['./wyswietlanie-ksiazka.component.css']
})
export class WyswietlanieKsiazkaComponent implements OnInit {
  ksiazki: Ksiazka[]=[];
  wybranaKsiazka: Ksiazka;

  constructor() {
  }

  ngOnInit(): void {
    var resKsiazka = fetch("http://localhost:3000/ksiazka");
    resKsiazka.then(x => {
      x.json().then(data => {
        this.ksiazki = data as Ksiazka[];
      })
    })
  }

  onSelectK(ksiazka: Ksiazka): void {
    this.wybranaKsiazka = ksiazka;
  }
  edytuj() {
    //przejdz do komponentu edytuj-ksiazka
  }
  

}
