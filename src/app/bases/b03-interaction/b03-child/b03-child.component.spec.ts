import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B03ChildComponent } from './b03-child.component';

describe('B03ChildComponent', () => {
  let component: B03ChildComponent;
  let fixture: ComponentFixture<B03ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B03ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B03ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
