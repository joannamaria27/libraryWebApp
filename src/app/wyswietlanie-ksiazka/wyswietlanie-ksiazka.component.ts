import { Component, OnInit } from '@angular/core';
import { Ksiazka } from '../models/ksiazka';

@Component({
  selector: 'app-wyswietlanie-ksiazka',
  templateUrl: './wyswietlanie-ksiazka.component.html',
  styleUrls: ['./wyswietlanie-ksiazka.component.css']
})
export class WyswietlanieKsiazkaComponent implements OnInit {

  title = 'Biblioteka';
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

  dodajKsiazke(ksiazka: Ksiazka){
    
    this.ksiazki.push(ksiazka);
  }

  onSelectK(ksiazka: Ksiazka): void {
    this.wybranaKsiazka = ksiazka;
  }
 
  

}
