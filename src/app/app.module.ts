import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodawanieAutorComponent } from './dodawanie-autor/dodawanie-autor.component';
import { DodawanieKsiazkaComponent } from './dodawanie-ksiazka/dodawanie-ksiazka.component';
import { DodawanieStudentComponent } from './dodawanie-student/dodawanie-student.component';
import { WypozyczeniaComponent } from './wypozyczenia/wypozyczenia.component';
import { HomeComponent } from './home/home.component';
import { DodawanieWypozyczeniaComponent } from './dodawanie-wypozyczenia/dodawanie-wypozyczenia.component';
import { WyswietlanieKsiazkaComponent } from './wyswietlanie-ksiazka/wyswietlanie-ksiazka.component';
import { EdycjaKsiazkaComponent } from './edycja-ksiazka/edycja-ksiazka.component';
import { WyswietlanieStudentComponent } from './wyswietlanie-student/wyswietlanie-student.component';
import { WyswietlanieAutorComponent } from './wyswietlanie-autor/wyswietlanie-autor.component';
import { WyswietlanieWypozyczenieComponent } from './wyswietlanie-wypozyczenie/wyswietlanie-wypozyczenie.component';
import { EdycjaStudentComponent } from './edycja-student/edycja-student.component';
import { EdycjaAutorComponent } from './edycja-autor/edycja-autor.component';
import { EdycjaWypozyczenieComponent } from './edycja-wypozyczenie/edycja-wypozyczenie.component';


@NgModule({


  declarations: [
    AppComponent,
    DodawanieAutorComponent,
    DodawanieKsiazkaComponent,
    DodawanieStudentComponent,
    WypozyczeniaComponent,
    
    HomeComponent,
    DodawanieWypozyczeniaComponent,
    WyswietlanieKsiazkaComponent,
    EdycjaKsiazkaComponent,
    WyswietlanieStudentComponent,
    WyswietlanieAutorComponent,
    WyswietlanieWypozyczenieComponent,
    EdycjaStudentComponent,
    EdycjaAutorComponent,
    EdycjaWypozyczenieComponent,
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
