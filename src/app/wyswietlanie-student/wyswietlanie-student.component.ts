import {Component, OnInit} from '@angular/core';
import {Student} from "../models/student";
import {Ksiazka} from "../models/ksiazka";

@Component({
  selector: 'app-wyswietlanie-student',
  templateUrl: './wyswietlanie-student.component.html',
  styleUrls: ['./wyswietlanie-student.component.css']
})
export class WyswietlanieStudentComponent implements OnInit {

  studenci: Student[] = []
  student: Student;
  edit: boolean;

  constructor() {
  }

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

  editClicked() {
    this.edit = !this.edit
  }

  usuwanieStudent(id: number) {
    alert("Usunieto studenta: " + "\nID: " + id)
    for (let i = 0; i < this.studenci.length; i++) {
      if (id == this.studenci[i].id) {
        fetch("http://localhost:3000/student/" + id, {
          method: "delete",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          res.json().then(data => {
            console.log("Successful " + data);
          })
        })
      }
    }
  }

}
