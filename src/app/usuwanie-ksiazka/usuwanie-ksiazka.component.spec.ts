import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuwanieKsiazkaComponent } from './usuwanie-ksiazka.component';

describe('UsuwanieKsiazkaComponent', () => {
  let component: UsuwanieKsiazkaComponent;
  let fixture: ComponentFixture<UsuwanieKsiazkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuwanieKsiazkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuwanieKsiazkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
