import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodawanie-student',
  templateUrl: './dodawanie-student.component.html',
  styleUrls: ['./dodawanie-student.component.css']
})
export class DodawanieStudentComponent implements OnInit {
  @Output() dodajStudenta: EventEmitter<Student> = new EventEmitter();
  nowyStudent: Student = new Student();
  Formularz: FormGroup;
  post: any;

  constructor(private fb: FormBuilder) {
    this.Formularz = fb.group({
    'imie': [null, Validators.required],
    'nazwisko' : [null, Validators.required],
    'data' : [null, Validators.required],
    'pesel' : [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
    });
  }
  wyslijFormularz() {
    this.dodajStudenta.emit(this.nowyStudent);
    alert("Dodano studenta: " + "\nImie: " + this.nowyStudent.imie + "\nNazwisko: " + this.nowyStudent.nazwisko + "\nData urodzenia: " + this.nowyStudent.dataUrodzenia + "\nPESEL: " + this.nowyStudent.pesel)

    fetch("http://localhost:3000/student/", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.nowyStudent)
    }).then((res) => {
      res.json().then(data => {
        console.log("Successful " + data);
      })
    })
  }

  ngOnInit() {
  }
}

