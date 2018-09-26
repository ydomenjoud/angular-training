import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05ObservableExample1Component } from './a05-observable-example1.component';
import { CountdownComponent } from 'src/app/advanced/a05-observable/a05-observable-example4/countdown.component';

describe('A05ObservableExample1Component', () => {
  let component: A05ObservableExample1Component;
  let fixture: ComponentFixture<A05ObservableExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A05ObservableExample1Component, CountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05ObservableExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
