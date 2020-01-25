export interface IAutor {
    autorId: number;
    imie: String;
    nazwisko: String;
  }

  export class Autor implements IAutor {
    autorId: number;
    imie: String;
    nazwisko: String;

    constructor(obj = {} as Autor) {
        this.autorId = obj.autorId;
        this.imie = obj.imie;
        this.nazwisko = obj.nazwisko;
        
  }
}