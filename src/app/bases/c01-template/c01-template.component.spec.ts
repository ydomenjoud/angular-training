import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C01TemplateComponent } from './c01-template.component';

describe('C01TemplateComponent', () => {
  let component: C01TemplateComponent;
  let fixture: ComponentFixture<C01TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C01TemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C01TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
