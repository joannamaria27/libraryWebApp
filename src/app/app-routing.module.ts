import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WyswietlanieKsiazkaComponent } from './wyswietlanie-ksiazka/wyswietlanie-ksiazka.component'
import { WypozyczeniaComponent } from './wypozyczenia/wypozyczenia.component';
import {WyswietlanieStudentComponent} from "./wyswietlanie-student/wyswietlanie-student.component";
import {WyswietlanieAutorComponent} from "./wyswietlanie-autor/wyswietlanie-autor.component";
import { WyswietlanieWypozyczenieComponent } from './wyswietlanie-wypozyczenie/wyswietlanie-wypozyczenie.component';


const routes: Routes = [
  { path: "", component: WypozyczeniaComponent, pathMatch: 'full'},
  { path: "student", component: WyswietlanieStudentComponent, pathMatch: 'full'},
  { path: "autor", component: WyswietlanieAutorComponent, pathMatch: 'full'},
  { path: "ksiazka", component: WyswietlanieKsiazkaComponent, pathMatch: 'full'},
  { path: "wypozyczenie", component: WyswietlanieWypozyczenieComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
