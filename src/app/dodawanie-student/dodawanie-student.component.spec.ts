import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieStudentComponent } from './dodawanie-student.component';

describe('DodawanieStudentComponent', () => {
  let component: DodawanieStudentComponent;
  let fixture: ComponentFixture<DodawanieStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
