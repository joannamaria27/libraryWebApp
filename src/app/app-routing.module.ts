import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DodawanieStudentComponent } from './dodawanie-student/dodawanie-student.component'
import { DodawanieAutorComponent } from './dodawanie-autor/dodawanie-autor.component'
import { WyswietlanieKsiazkaComponent } from './wyswietlanie-ksiazka/wyswietlanie-ksiazka.component'
import { WypozyczeniaComponent } from './wypozyczenia/wypozyczenia.component';


const routes: Routes = [
  { path: "", component: WypozyczeniaComponent, pathMatch: 'full'},
  { path: "student", component: DodawanieStudentComponent, pathMatch: 'full'},
  { path: "autor", component: DodawanieAutorComponent, pathMatch: 'full'},
  { path: "ksiazka", component: WyswietlanieKsiazkaComponent, pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
