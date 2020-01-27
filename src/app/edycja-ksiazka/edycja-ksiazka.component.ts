import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ksiazka } from '../models/ksiazka';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-edycja-ksiazka',
  templateUrl: './edycja-ksiazka.component.html',
  styleUrls: ['./edycja-ksiazka.component.css']
})
export class EdycjaKsiazkaComponent implements OnInit {
@Output() edytujKsiazke: EventEmitter<Ksiazka> = new EventEmitter();
autorzyBD: Autor[] = new Array<Autor>();
staraKsiazka: Ksiazka;

  constructor() { }

  ngOnInit() {
    var res = fetch("http://localhost:3000/autor");
    res.then(x => {
      x.json().then(data => {
        //coś dopisać
      })
    })
    var res = fetch("http://localhost:3000/autor");
    res.then(x => {
      x.json().then(data => {
        this.autorzyBD = data as Autor[];
      })
    })
  }

  edytuj()
  {
    this.edytujKsiazke.emit(this.staraKsiazka);
    alert("Zedytowano ksiazke: " + "\nTytul: " + this.staraKsiazka.tytul );

    // fetch("http://localhost:3000/ksiazka/" + id, {
    //       method: "",
    //       headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //       }
    //     }).then((res) => {
    //       res.json().then(data => {
    //       console.log("Successful " + data);
    //       })
    //     })
  }

}
