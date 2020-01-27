import {Component, Input, OnInit} from '@angular/core';
import {Autor} from "../models/autor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edycja-autor',
  templateUrl: './edycja-autor.component.html',
  styleUrls: ['./edycja-autor.component.css']
})
export class EdycjaAutorComponent implements OnInit {

  @Input() edytowanyAutor: Autor
  Formularz: FormGroup

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
      'imie': [null, Validators.required],
      'nazwisko' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  edytujAutora(){
    alert("Zedytowano autora")

    fetch("http://localhost:3000/autor/" + this.edytowanyAutor.id, {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.edytowanyAutor)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
  }

}
