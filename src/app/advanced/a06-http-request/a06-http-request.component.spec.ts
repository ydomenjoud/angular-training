import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A06HttpRequestComponent } from './a06-http-request.component';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('A06HttpRequestComponent', () => {
  let component: A06HttpRequestComponent;
  let fixture: ComponentFixture<A06HttpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        A06HttpRequestComponent,
        HighlightDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A06HttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
