import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../models/student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edycja-student',
  templateUrl: './edycja-student.component.html',
  styleUrls: ['./edycja-student.component.css']
})
export class EdycjaStudentComponent implements OnInit {

  @Input() edytowanyStudent: Student
  Formularz: FormGroup

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
      'imie': [null, Validators.required],
      'nazwisko': [null, Validators.required],
      'data': [null, Validators.required],
      'pesel': [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
    });
  }

  ngOnInit() {
  }

  edytujStudenta() {
    alert("Zedytowano studenta")

    fetch("http://localhost:3000/student/" + this.edytowanyStudent.id, {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.edytowanyStudent)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
  }
}
