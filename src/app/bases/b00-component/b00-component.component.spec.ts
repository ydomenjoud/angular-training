import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B00ComponentComponent } from './b00-component.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

describe('B00ComponentComponent', () => {
  let component: B00ComponentComponent;
  let fixture: ComponentFixture<B00ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B00ComponentComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B00ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
