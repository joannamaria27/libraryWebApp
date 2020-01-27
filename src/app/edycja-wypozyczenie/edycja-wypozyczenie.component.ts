import {Component, Input, OnInit} from '@angular/core';
import {Wypozyczenie} from "../models/wypozyczenie";
import {Ksiazka} from "../models/ksiazka";
import {Student} from "../models/student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edycja-wypozyczenie',
  templateUrl: './edycja-wypozyczenie.component.html',
  styleUrls: ['./edycja-wypozyczenie.component.css']
})
export class EdycjaWypozyczenieComponent implements OnInit {

  @Input() edytowaneWypozyczenie: Wypozyczenie;
  ksiazkaDB: Ksiazka[] = new Array<Ksiazka>()
  studentDB: Student[] = new Array<Student>()
  Formularz: FormGroup

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
      'idKsiazki': [null, Validators.required],
      'idStudenta': [null, Validators.required],
      'dataWypozyczenia': [null, Validators.required],
      'dataDoZwrotu': [null, Validators.required]
    });
  }

  ngOnInit() {
    var res = fetch("http://localhost:3000/ksiazka");
    res.then(x => {
      x.json().then(data => {
        this.ksiazkaDB = data as Ksiazka[];
      })
    })
    var res = fetch("http://localhost:3000/student");
    res.then(x => {
      x.json().then(data => {
        this.studentDB = data as Student[];
      })
    })
  }

  wyslijFormularz() {
    alert("Zedytowano wypozyczenie");

    fetch("http://localhost:3000/wypozyczenie/" + this.edytowaneWypozyczenie.id, {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.edytowaneWypozyczenie)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
  }


}
