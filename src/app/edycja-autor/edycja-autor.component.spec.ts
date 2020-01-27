import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaAutorComponent } from './edycja-autor.component';

describe('EdycjaAutorComponent', () => {
  let component: EdycjaAutorComponent;
  let fixture: ComponentFixture<EdycjaAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
