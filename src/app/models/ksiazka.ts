import { Autor } from './autor';


export interface IKsiazka {
  id: number;
  tytul: String;
  liczbaStron: number;
  isbn: number;
  dataWydania: Date;
  autorId: number ;
}

export class Ksiazka implements IKsiazka {
    id: number;
    tytul: String;
    liczbaStron: number;
    isbn: number;
    dataWydania: Date;
    autorId: number;

    constructor(obj = {} as Ksiazka) {
        this.id = obj.id;
        this.tytul = obj.tytul;
        this.liczbaStron = obj.liczbaStron;
        this.isbn = obj.isbn;
        this.dataWydania = obj.dataWydania;
        this.autorId = obj.autorId;
  }
}
