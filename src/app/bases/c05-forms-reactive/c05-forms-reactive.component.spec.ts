import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C05FormsReactiveComponent } from './c05-forms-reactive.component';

describe('C05FormsReactiveComponent', () => {
  let component: C05FormsReactiveComponent;
  let fixture: ComponentFixture<C05FormsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C05FormsReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C05FormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
