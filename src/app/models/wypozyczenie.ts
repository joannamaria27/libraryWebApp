import { Autor } from './autor';


export interface IWypozyczenie {
  wypozyczenieId: number;
  idKsiazki: number;
  idStudenta: number;
  dataWypozyczenia: Date;
  dataDoZwrotu: Date;
}

export class Wypozyczenie implements IWypozyczenie {
    wypozyczenieId: number;
    idKsiazki: number;
    idStudenta: number;
    dataWypozyczenia: Date;
    dataDoZwrotu: Date;


    constructor(obj = {} as Wypozyczenie) {
        this.wypozyczenieId = obj.wypozyczenieId;
        this.idKsiazki = obj.idKsiazki;
        this.idStudenta = obj.idStudenta;
        this.dataWypozyczenia = obj.dataWypozyczenia;
        this.dataDoZwrotu = obj.dataDoZwrotu;

  }
}
