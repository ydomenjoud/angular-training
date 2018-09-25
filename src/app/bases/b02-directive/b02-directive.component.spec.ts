import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B02DirectiveComponent } from './b02-directive.component';
import { B00ComponentComponent } from 'src/app/bases/b00-component/b00-component.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('B02DirectiveComponent', () => {
  let component: B02DirectiveComponent;
  let fixture: ComponentFixture<B02DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B02DirectiveComponent, HighlightDirective ]
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
