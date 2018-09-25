import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B03InteractionComponent } from './b03-interaction.component';
import { B00ComponentComponent } from 'src/app/bases/b00-component/b00-component.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { B03ChildComponent } from 'src/app/bases/b03-interaction/b03-child/b03-child.component';

describe('B03InteractionComponent', () => {
  let component: B03InteractionComponent;
  let fixture: ComponentFixture<B03InteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B03InteractionComponent, B03ChildComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B03InteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
