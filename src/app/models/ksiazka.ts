import { Autor } from './autor';


export interface IKsiazka {
  ksiazkaId: number;
  tytul: String;
  liczbaStron: number;
  isbn: number;
  dataWydania: Date;
  autorId: number ;
}

export class Ksiazka implements IKsiazka {
    ksiazkaId: number;
    tytul: String;
    liczbaStron: number;
    isbn: number;
    dataWydania: Date;
    autorId: number;

    constructor(obj = {} as Ksiazka) {
        this.ksiazkaId = obj.ksiazkaId;
        this.tytul = obj.tytul;
        this.liczbaStron = obj.liczbaStron;
        this.isbn = obj.isbn;
        this.dataWydania = obj.dataWydania;
        this.autorId = obj.autorId;
  }
}
