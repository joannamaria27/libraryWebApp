import { Ksiazka } from './ksiazka';

export interface IStudent {
      studentId: number;
      imie: String;
      nazwisko: String;
      dataUrodzenia: Date;
      pesel: number;
   
    }
    
  export class Student implements IStudent {
      studentId: number;
      imie: String;
      nazwisko: String;
      dataUrodzenia: Date;
      pesel: number;


      constructor(obj = {} as Student) {
          this.studentId = obj.studentId;
          this.imie = obj.imie;
          this.nazwisko = obj.nazwisko;
          this.dataUrodzenia = obj.dataUrodzenia;
          this.pesel = obj.pesel;

    }
  }
