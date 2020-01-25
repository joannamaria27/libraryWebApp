import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodawanieAutorComponent } from './dodawanie-autor/dodawanie-autor.component';
import { DodawanieKsiazkaComponent } from './dodawanie-ksiazka/dodawanie-ksiazka.component';
import { DodawanieStudentComponent } from './dodawanie-student/dodawanie-student.component';
import { WypozyczeniaComponent } from './wypozyczenia/wypozyczenia.component';
import { UsuwanieKsiazkaComponent } from './usuwanie-ksiazka/usuwanie-ksiazka.component';
import { HomeComponent } from './home/home.component';

@NgModule({


  declarations: [
    AppComponent,
    DodawanieAutorComponent,

    DodawanieKsiazkaComponent,

    DodawanieStudentComponent,

    WypozyczeniaComponent,

    UsuwanieKsiazkaComponent,

    HomeComponent
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
