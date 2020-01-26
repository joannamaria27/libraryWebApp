import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Autor } from '../models/autor';
import { Ksiazka } from '../models/ksiazka';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dodawanie-ksiazka',
  templateUrl: './dodawanie-ksiazka.component.html',
  styleUrls: ['./dodawanie-ksiazka.component.css']
})
export class DodawanieKsiazkaComponent implements OnInit {
  @Output() dodajKsiazke: EventEmitter<Ksiazka> = new EventEmitter();
  nowaKsiazka: Ksiazka = new Ksiazka();
  autorzyBD: Autor[] = new Array<Autor>();
  Formularz: FormGroup;
  post: any;

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
    'tytul': [null, Validators.required],
    'idAutora' : [null, Validators.required],
    'liczbaStron' : [null, Validators.required],
    'isbn' : [null, Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13)])],
    'dataWydania' : [null, Validators.required]
    });
  }

  ngOnInit() {
    var res = fetch("http://localhost:3000/autor");
    res.then(x => {
      x.json().then(data => {
        this.autorzyBD = data as Autor[];
      })
    })
  }

  wyslijFormularz() {
    this.dodajKsiazke.emit(this.nowaKsiazka);
    alert("Dodano ksiazke: " + "\nImie: " + this.nowaKsiazka.tytul )

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