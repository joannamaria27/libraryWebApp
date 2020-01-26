import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Wypozyczenie } from '../models/wypozyczenie';
import { Ksiazka } from '../models/ksiazka';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dodawanie-wypozyczenia',
  templateUrl: './dodawanie-wypozyczenia.component.html',
  styleUrls: ['./dodawanie-wypozyczenia.component.css']
})
export class DodawanieWypozyczeniaComponent implements OnInit {
@Output() dodajWypozyczenie: EventEmitter<Wypozyczenie> = new EventEmitter();
noweWypozyczenie: Wypozyczenie = new Wypozyczenie();
ksiazkiBD: Ksiazka[] = new Array<Ksiazka>();
Formularz: FormGroup;
post: any;

constructor(private fb: FormBuilder) {
  this.Formularz = fb.group({
    'idKsiazki':[null, Validators.required],
    'idStudenta':[null, Validators.required],
    'dataWypozyczenia':[null, Validators.required],
    'dataDoZwrotu':[null, Validators.required]

  })}

  ngOnInit() {
    var res = fetch("http://localhost:3000/ksiazka");
    res.then(x => {
      x.json().then(data => {
        this.ksiazkiBD = data as Ksiazka[];
      })
    })
  }

  wyslijFormularz() 
  {
    this.dodajWypozyczenie.emit(this.noweWypozyczenie);
    alert("Dodano wypozyczenie: "+"\nStudent: "+this.noweWypozyczenie.idStudenta+"Ksizka: "+this.noweWypozyczenie.idKsiazki);
    fetch("http://localhost:3000/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.noweWypozyczenie)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
  }
    
}
