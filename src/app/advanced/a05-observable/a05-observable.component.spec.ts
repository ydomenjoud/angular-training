import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05ObservableComponent } from './a05-observable.component';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('A05ObservableComponent', () => {
  let component: A05ObservableComponent;
  let fixture: ComponentFixture<A05ObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [A05ObservableComponent,
        HighlightDirective
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
