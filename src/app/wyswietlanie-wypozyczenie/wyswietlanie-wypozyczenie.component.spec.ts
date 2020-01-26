import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlanieWypozyczenieComponent } from './wyswietlanie-wypozyczenie.component';

describe('WyswietlanieWypozyczenieComponent', () => {
  let component: WyswietlanieWypozyczenieComponent;
  let fixture: ComponentFixture<WyswietlanieWypozyczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyswietlanieWypozyczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyswietlanieWypozyczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
