import { Component, OnInit } from '@angular/core';
import { Student } from "../models/student";
import {Ksiazka} from "../models/ksiazka";

@Component({
  selector: 'app-wyswietlanie-student',
  templateUrl: './wyswietlanie-student.component.html',
  styleUrls: ['./wyswietlanie-student.component.css']
})
export class WyswietlanieStudentComponent implements OnInit {

  studenci: Student[] = []
  student: Student;

  constructor() { }

  ngOnInit() {
    var resStudent = fetch("http://localhost:3000/student");
    resStudent.then(x => {
      x.json().then(data => {
        this.studenci = data as Student[];
      })
    })
  }

  onSelectS(student: Student): void {
    this.student = student;
  }

}
