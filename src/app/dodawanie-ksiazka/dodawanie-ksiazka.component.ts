import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Autor } from '../models/autor';
import { Ksiazka } from '../models/ksiazka';



@Component({
  selector: 'app-dodawanie-ksiazka',
  templateUrl: './dodawanie-ksiazka.component.html',
  styleUrls: ['./dodawanie-ksiazka.component.css']
})
export class DodawanieKsiazkaComponent implements OnInit {
  @Output() dodajKsiazke: EventEmitter<Ksiazka> = new EventEmitter();
  nowaKsiazka: Ksiazka = new Ksiazka();
  autorzy: Autor[] = new Array<Autor>();

  constructor() {

  }

  ngOnInit() {
    var res = fetch("http://localhost:3000/autor");
    res.then(x => {
      x.json().then(data => {
        this.autorzy = data as Autor[];
      })
    })
  }

  dodawanieKsiazki() {
    this.dodajKsiazke.emit(this.nowaKsiazka);

    fetch("http://localhost:3000/ksiazka/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.nowaKsiazka)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })

  }

}
