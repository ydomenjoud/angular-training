import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { B05FormsReactiveComponent } from 'src/app/bases/b05-forms-reactive/b05-forms-reactive.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('B05FormsReactiveComponent', () => {
  let component: B05FormsReactiveComponent;
  let fixture: ComponentFixture<B05FormsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ B05FormsReactiveComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B05FormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
