import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05ObservableExample2Component } from './a05-observable-example2.component';

describe('A05ObservableExample2Component', () => {
  let component: A05ObservableExample2Component;
  let fixture: ComponentFixture<A05ObservableExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A05ObservableExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05ObservableExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
