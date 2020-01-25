export interface IAutor {
    id: number;
    imie: String;
    nazwisko: String;
  }

  export class Autor implements IAutor {
    id: number;
    imie: String;
    nazwisko: String;

    constructor(obj = {} as Autor) {
        this.id = obj.id;
        this.imie = obj.imie;
        this.nazwisko = obj.nazwisko;
        
  }
}