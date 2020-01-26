import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlanieStudentComponent } from './wyswietlanie-student.component';

describe('WyswietlanieStudentComponent', () => {
  let component: WyswietlanieStudentComponent;
  let fixture: ComponentFixture<WyswietlanieStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyswietlanieStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyswietlanieStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
