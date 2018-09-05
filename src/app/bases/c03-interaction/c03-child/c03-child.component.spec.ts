import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C03ChildComponent } from './c03-child.component';

describe('C03ChildComponent', () => {
  let component: C03ChildComponent;
  let fixture: ComponentFixture<C03ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C03ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C03ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
