import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Autor } from '../models/autor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodawanie-autor',
  templateUrl: './dodawanie-autor.component.html',
  styleUrls: ['./dodawanie-autor.component.css']
})
export class DodawanieAutorComponent implements OnInit {
  @Output() dodajAutora: EventEmitter<Autor> = new EventEmitter();
  nowyAutor: Autor = new Autor();
  Formularz: FormGroup;
  post: any;

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
      'imie': [null, Validators.required],
      'nazwisko' : [null, Validators.required],
      });
   }

  wyslijFormularz() {
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

  ngOnInit() {
  }
}
