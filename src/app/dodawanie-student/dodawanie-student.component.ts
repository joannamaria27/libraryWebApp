import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-dodawanie-student',
  templateUrl: './dodawanie-student.component.html',
  styleUrls: ['./dodawanie-student.component.css']
})
export class DodawanieStudentComponent implements OnInit {
  @Output() dodajStudenta: EventEmitter<Student> = new EventEmitter();
  nowyStudent: Student = new Student();

  constructor() { }

  ngOnInit() {
  }

  dodawanieStudenta() {
    this.dodajStudenta.emit(this.nowyStudent);
    this.nowyStudent = new Student();
  }
}

