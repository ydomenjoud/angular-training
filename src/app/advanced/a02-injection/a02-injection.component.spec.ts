import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A02InjectionComponent } from './a02-injection.component';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('A02InjectionComponent', () => {
  let component: A02InjectionComponent;
  let fixture: ComponentFixture<A02InjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        A02InjectionComponent,
        HighlightDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A02InjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
