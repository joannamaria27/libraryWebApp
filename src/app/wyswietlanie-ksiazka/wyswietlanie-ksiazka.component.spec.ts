import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlanieKsiazkaComponent } from './wyswietlanie-ksiazka.component';

describe('WyswietlanieKsiazkaComponent', () => {
  let component: WyswietlanieKsiazkaComponent;
  let fixture: ComponentFixture<WyswietlanieKsiazkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyswietlanieKsiazkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyswietlanieKsiazkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
