import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-usuwanie-autor',
  templateUrl: './usuwanie-autor.component.html',
  styleUrls: ['./usuwanie-autor.component.css']
})
export class UsuwanieAutorComponent implements OnInit {
autor: Autor[]=new Array<Autor>();
wybranyAutor: Autor;

  constructor() { }

  ngOnInit() {
    var res = fetch("http://localhost:3000/autor",);
    res.then(x => {
      x.json().then(data => {
        this.autor = data as Autor[];
      })
    })
  }

  onSelect(autor: Autor): void {
    this.wybranyAutor = autor;
  }

  usuwanieAutor(id : number)
  {
   
      if(id==this.wybranyAutor.autorId)
      {
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
