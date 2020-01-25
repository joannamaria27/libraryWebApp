import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieKsiazkaComponent } from './dodawanie-ksiazka.component';

describe('DodawanieKsiazkaComponent', () => {
  let component: DodawanieKsiazkaComponent;
  let fixture: ComponentFixture<DodawanieKsiazkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieKsiazkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieKsiazkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
