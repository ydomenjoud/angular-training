import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B05FormsReactiveComponent } from './b05-forms-reactive.component';

describe('B05FormsReactiveComponent', () => {
  let component: B05FormsReactiveComponent;
  let fixture: ComponentFixture<B05FormsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B05FormsReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B05FormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
