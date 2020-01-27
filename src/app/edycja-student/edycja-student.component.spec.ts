import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaStudentComponent } from './edycja-student.component';

describe('EdycjaStudentComponent', () => {
  let component: EdycjaStudentComponent;
  let fixture: ComponentFixture<EdycjaStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
