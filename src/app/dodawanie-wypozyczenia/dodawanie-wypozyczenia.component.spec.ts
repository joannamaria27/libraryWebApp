import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieWypozyczeniaComponent } from './dodawanie-wypozyczenia.component';

describe('DodawanieWypozyczeniaComponent', () => {
  let component: DodawanieWypozyczeniaComponent;
  let fixture: ComponentFixture<DodawanieWypozyczeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieWypozyczeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieWypozyczeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
