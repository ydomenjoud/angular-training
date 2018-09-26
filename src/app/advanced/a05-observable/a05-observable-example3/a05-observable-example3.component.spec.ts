import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05ObservableExample3Component } from './a05-observable-example3.component';

describe('A05ObservableExample3Component', () => {
  let component: A05ObservableExample3Component;
  let fixture: ComponentFixture<A05ObservableExample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A05ObservableExample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05ObservableExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
