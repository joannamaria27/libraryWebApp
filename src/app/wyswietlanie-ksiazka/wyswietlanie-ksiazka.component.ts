import {Component, DoCheck, EventEmitter, OnInit} from '@angular/core';
import {Ksiazka} from '../models/ksiazka';

@Component({
  selector: 'app-wyswietlanie-ksiazka',
  templateUrl: './wyswietlanie-ksiazka.component.html',
  styleUrls: ['./wyswietlanie-ksiazka.component.css']
})
export class WyswietlanieKsiazkaComponent implements OnInit{
  ksiazki: Ksiazka[] = [];
  wybranaKsiazka: Ksiazka;
  eventBook = new EventEmitter<Ksiazka>();
  edit: boolean;

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

  editClicked(id){
    // this.eventBook.emit(id)
    this.edit = !this.edit;
    console.log(this.edit)

  }

  usuwanieKsiazka(id: number) {
    alert("Usunieto ksiazke: " + "\nID: " + id)
    for (let i = 0; i < this.ksiazki.length; i++) {
      if (id == this.ksiazki[i].id) {
        fetch("http://localhost:3000/ksiazka/" + id, {
          method: "delete",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          res.json().then(data => {
            console.log("Successful " + data);
          })
        })
      }
    }
  }


}
