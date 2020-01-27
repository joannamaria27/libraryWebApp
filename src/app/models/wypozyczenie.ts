import { Autor } from './autor';


export interface IWypozyczenie {
  id: number;
  idKsiazki: number;
  idStudenta: number;
  dataWypozyczenia: Date;
  dataDoZwrotu: Date;
}

export class Wypozyczenie implements IWypozyczenie {
    id: number;
    idKsiazki: number;
    idStudenta: number;
    dataWypozyczenia: Date;
    dataDoZwrotu: Date;


    constructor(obj = {} as Wypozyczenie) {
        this.id = obj.id;
        this.idKsiazki = obj.idKsiazki;
        this.idStudenta = obj.idStudenta;
        this.dataWypozyczenia = obj.dataWypozyczenia;
        this.dataDoZwrotu = obj.dataDoZwrotu;

  }
}
