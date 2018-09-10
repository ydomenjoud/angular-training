import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B01TemplateComponent } from './b01-template.component';

describe('B01TemplateComponent', () => {
  let component: B01TemplateComponent;
  let fixture: ComponentFixture<B01TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B01TemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B01TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
