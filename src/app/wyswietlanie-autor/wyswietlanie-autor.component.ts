import {Component, OnInit} from '@angular/core';
import {Autor} from "../models/autor";

@Component({
  selector: 'app-wyswietlanie-autor',
  templateUrl: './wyswietlanie-autor.component.html',
  styleUrls: ['./wyswietlanie-autor.component.css']
})
export class WyswietlanieAutorComponent implements OnInit {

  autorzy: Autor[] = []
  wybranyAutor: Autor
  edit: boolean

  constructor() {
  }

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

  editClicked() {
    this.edit = !this.edit
  }

  usuwanieAutor(id: number) {
    alert("Usunieto autora: " + "\nID: " + id)
    for (let i = 0; i < this.autorzy.length; i++) {
      if (id == this.autorzy[i].id) {
        fetch("http://localhost:3000/autor/" + id, {
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
