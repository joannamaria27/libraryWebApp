import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-dodawanie-autor',
  templateUrl: './dodawanie-autor.component.html',
  styleUrls: ['./dodawanie-autor.component.css']
})
export class DodawanieAutorComponent implements OnInit {
  @Output() dodajAutora: EventEmitter<Autor> = new EventEmitter();
  nowyAutor: Autor = new Autor();

  constructor() { }

  ngOnInit() {
  }
  
  dodawanieAutora() {
    this.dodajAutora.emit(this.nowyAutor);

    fetch("http://localhost:3000/autor/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.nowyAutor)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
    
  }
}
