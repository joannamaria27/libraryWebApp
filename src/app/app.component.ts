import { Component } from '@angular/core';
import { Autor } from './models/autor';
import { KsiazkaService } from './ksiazka.service';
import { Ksiazka } from './models/ksiazka';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteka';
  ksiazki: Ksiazka[]=[];
  wybranaKsiazka: Ksiazka;
  autorzy: Autor[]=[];
  wybranyAutor: Autor;
  studenci: Student[]=[];
  wybranyStudent: Student;

  constructor() {


  }

  ngOnInit(): void {
    var resAutor = fetch("http://localhost:3000/autor");
    resAutor.then(x => {
      x.json().then(data => {
        this.autorzy = data as Autor[];
      })
    })

    var resKsiazka = fetch("http://localhost:3000/ksiazka");
    resKsiazka.then(x => {
      x.json().then(data => {
        this.ksiazki = data as Ksiazka[];
      })
    })
  }

  dodajKsiazke(ksiazka: Ksiazka){
    
    this.ksiazki.push(ksiazka);
  }

  onSelectK(ksiazka: Ksiazka): void {
    this.wybranaKsiazka = ksiazka;
  }
  onSelectA(autor: Autor): void {
    this.wybranyAutor = autor;
  }

  dodajAutora(autor: Autor)
  {

  this.autorzy.push(autor);
  }
  dodajStudenta(student: Student){
    
    this.studenci.push(student);
  }

  onSelectS(student: Student): void {
    this.wybranyStudent = student;
  }
}
