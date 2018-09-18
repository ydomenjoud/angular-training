import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05ObservableComponent } from './a05-observable.component';

describe('A05ObservableComponent', () => {
  let component: A05ObservableComponent;
  let fixture: ComponentFixture<A05ObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A05ObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
