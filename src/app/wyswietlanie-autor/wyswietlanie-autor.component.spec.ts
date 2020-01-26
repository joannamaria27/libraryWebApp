import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlanieAutorComponent } from './wyswietlanie-autor.component';

describe('WyswietlanieAutorComponent', () => {
  let component: WyswietlanieAutorComponent;
  let fixture: ComponentFixture<WyswietlanieAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyswietlanieAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyswietlanieAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
