import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A03DirectiveComponent } from './a03-directive.component';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('A03DirectiveComponent', () => {
  let component: A03DirectiveComponent;
  let fixture: ComponentFixture<A03DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        A03DirectiveComponent,
        HighlightDirective
      ]
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
