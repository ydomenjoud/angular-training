import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C02DirectiveComponent } from './c02-directive.component';

describe('C02DirectiveComponent', () => {
  let component: C02DirectiveComponent;
  let fixture: ComponentFixture<C02DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C02DirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C02DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
