import { Component, OnInit } from '@angular/core';
import { Wypozyczenie } from '../models/wypozyczenie';

@Component({
  selector: 'app-wyswietlanie-wypozyczenie',
  templateUrl: './wyswietlanie-wypozyczenie.component.html',
  styleUrls: ['./wyswietlanie-wypozyczenie.component.css']
})
export class WyswietlanieWypozyczenieComponent implements OnInit {

  wypozyczenia: Wypozyczenie[]=[];
  wybraneWypozyczenie: Wypozyczenie;

  constructor() { 

  }

  ngOnInit(): void {
    var resWyp = fetch("http://localhost:3000/wypozyczenie");
    resWyp.then(x => {
      x.json().then(data => {
        this.wypozyczenia = data as Wypozyczenie[];
      })
    })
  }
  onSelectW(wypozyczenie: Wypozyczenie): void {
    this.wybraneWypozyczenie = wypozyczenie;
  }
}
