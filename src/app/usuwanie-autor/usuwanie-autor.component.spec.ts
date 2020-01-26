import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuwanieAutorComponent } from './usuwanie-autor.component';

describe('UsuwanieAutorComponent', () => {
  let component: UsuwanieAutorComponent;
  let fixture: ComponentFixture<UsuwanieAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuwanieAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuwanieAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
