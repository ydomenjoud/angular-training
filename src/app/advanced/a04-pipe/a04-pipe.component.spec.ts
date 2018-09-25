import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A04PipeComponent } from './a04-pipe.component';
import { A01RoutingComponent } from 'src/app/advanced/a01-routing/a01-routing.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { SquarePipe } from 'src/app/advanced/square.pipe';

describe('A04PipeComponent', () => {
  let component: A04PipeComponent;
  let fixture: ComponentFixture<A04PipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        A04PipeComponent,
        HighlightDirective,
        SquarePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A04PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
