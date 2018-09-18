import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A01RoutingComponent } from './a01-routing.component';

describe('A01RoutingComponent', () => {
  let component: A01RoutingComponent;
  let fixture: ComponentFixture<A01RoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A01RoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A01RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
