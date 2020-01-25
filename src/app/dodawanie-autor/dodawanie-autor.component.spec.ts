import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieAutorComponent } from './dodawanie-autor.component';

describe('DodawanieAutorComponent', () => {
  let component: DodawanieAutorComponent;
  let fixture: ComponentFixture<DodawanieAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
