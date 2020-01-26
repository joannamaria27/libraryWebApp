import { Component, OnInit } from '@angular/core';
import { Ksiazka } from '../models/ksiazka';

@Component({
  selector: 'app-usuwanie-ksiazka',
  templateUrl: './usuwanie-ksiazka.component.html',
  styleUrls: ['./usuwanie-ksiazka.component.css']
})
export class UsuwanieKsiazkaComponent implements OnInit {
  ksiazki: Ksiazka[] = new Array<Ksiazka>();
  wybranaKsiazka: Ksiazka;

  constructor() { }

  ngOnInit() {
    var res = fetch("http://localhost:3000/ksiazka",);
    res.then(x => {
      x.json().then(data => {
        this.ksiazki = data as Ksiazka[];
      })
    })
  }

  onSelect(ksiazka: Ksiazka): void {
    this.wybranaKsiazka = ksiazka;
  }

  usuwanieKsiazka(id : number)
  {
   
      if(id==this.wybranaKsiazka.ksiazkaId)
      {
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