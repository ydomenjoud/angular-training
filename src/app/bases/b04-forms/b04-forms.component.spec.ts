import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B04FormsComponent } from './b04-forms.component';
import { B00ComponentComponent } from 'src/app/bases/b00-component/b00-component.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { FormsModule } from '@angular/forms';

describe('B04FormsComponent', () => {
  let component: B04FormsComponent;
  let fixture: ComponentFixture<B04FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ B04FormsComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B04FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
