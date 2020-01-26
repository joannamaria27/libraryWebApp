import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaKsiazkaComponent } from './edycja-ksiazka.component';

describe('EdycjaKsiazkaComponent', () => {
  let component: EdycjaKsiazkaComponent;
  let fixture: ComponentFixture<EdycjaKsiazkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaKsiazkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaKsiazkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
