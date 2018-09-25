import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B06LifecycleComponent } from './b06-lifecycle.component';
import { B00ComponentComponent } from 'src/app/bases/b00-component/b00-component.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('B06LifecycleComponent', () => {
  let component: B06LifecycleComponent;
  let fixture: ComponentFixture<B06LifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B06LifecycleComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B06LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
