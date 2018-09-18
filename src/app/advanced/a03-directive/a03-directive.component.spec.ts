import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A03DirectiveComponent } from './a03-directive.component';

describe('A03DirectiveComponent', () => {
  let component: A03DirectiveComponent;
  let fixture: ComponentFixture<A03DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A03DirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A03DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
