import { Component, OnInit } from '@angular/core';
import {Autor} from "../models/autor";

@Component({
  selector: 'app-wyswietlanie-autor',
  templateUrl: './wyswietlanie-autor.component.html',
  styleUrls: ['./wyswietlanie-autor.component.css']
})
export class WyswietlanieAutorComponent implements OnInit {

  autorzy: Autor[] = []
  wybranyAutor: Autor

  constructor() { }

  ngOnInit() {
    var resAutor = fetch("http://localhost:3000/autor");
    resAutor.then(x => {
      x.json().then(data => {
        this.autorzy = data as Autor[]
      })
    })
  }

  onSelectA(autor: Autor): void {
    this.wybranyAutor = autor;
  }

}
