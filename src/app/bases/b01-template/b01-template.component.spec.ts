import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B01TemplateComponent } from './b01-template.component';
import { B00ComponentComponent } from 'src/app/bases/b00-component/b00-component.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('B01TemplateComponent', () => {
  let component: B01TemplateComponent;
  let fixture: ComponentFixture<B01TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B01TemplateComponent, HighlightDirective ]
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
