import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B02DirectiveComponent } from './b02-directive.component';

describe('B02DirectiveComponent', () => {
  let component: B02DirectiveComponent;
  let fixture: ComponentFixture<B02DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B02DirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B02DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
