import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Ksiazka} from '../models/ksiazka';
import {Autor} from '../models/autor';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edycja-ksiazka',
  templateUrl: './edycja-ksiazka.component.html',
  styleUrls: ['./edycja-ksiazka.component.css']
})
export class EdycjaKsiazkaComponent implements OnInit {

  @Input() edytowanaKsiazka: Ksiazka;
  autorzyBD: Autor[] = new Array<Autor>();
  Formularz: FormGroup

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
      'tytul': [null, Validators.required],
      'idAutora': [null, Validators.required],
      'liczbaStron': [null, Validators.compose([Validators.required, Validators.min(1)])],
      'isbn': [null, Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      'dataWydania': [null, Validators.required]
    });
  }

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

  edytujKsiazke(id: number) {
    // this.edytujKsiazke.emit(this.staraKsiazka);
    alert("Zedytowano ksiazke: " + "\nTytul: " + this.edytowanaKsiazka.tytul);

    fetch("http://localhost:3000/ksiazka/" + id, {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.edytowanaKsiazka)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
  }

  wyslijFormularz() {
    this.edytujKsiazke(this.edytowanaKsiazka.id)
  }

}
