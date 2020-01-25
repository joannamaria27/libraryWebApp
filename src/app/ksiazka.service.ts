import { Injectable } from '@angular/core';
import { Ksiazka } from './models/ksiazka';
import { Autor } from './models/autor';
import { Student } from './models/student';


@Injectable({
  providedIn: 'root'
})

export class KsiazkaService {

  constructor() { }

  getKsiazka(): Ksiazka[] {
    return [
      
    ]}

  getAutor(): Autor[] {
    return [
      
    ]}

  getStudent(): Student[] {
    return [
      
    ]}
}
