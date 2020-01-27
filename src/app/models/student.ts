import { Ksiazka } from './ksiazka';

export interface IStudent {
      id: number;
      imie: String;
      nazwisko: String;
      dataUrodzenia: Date;
      pesel: number;
   
    }
    
  export class Student implements IStudent {
      id: number;
      imie: String;
      nazwisko: String;
      dataUrodzenia: Date;
      pesel: number;


      constructor(obj = {} as Student) {
          this.id = obj.id;
          this.imie = obj.imie;
          this.nazwisko = obj.nazwisko;
          this.dataUrodzenia = obj.dataUrodzenia;
          this.pesel = obj.pesel;

    }
  }
