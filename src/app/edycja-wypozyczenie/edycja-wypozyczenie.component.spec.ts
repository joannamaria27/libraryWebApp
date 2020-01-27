import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaWypozyczenieComponent } from './edycja-wypozyczenie.component';

describe('EdycjaWypozyczenieComponent', () => {
  let component: EdycjaWypozyczenieComponent;
  let fixture: ComponentFixture<EdycjaWypozyczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaWypozyczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaWypozyczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
