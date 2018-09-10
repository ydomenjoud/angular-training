import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B04FormsComponent } from './b04-forms.component';

describe('B04FormsComponent', () => {
  let component: B04FormsComponent;
  let fixture: ComponentFixture<B04FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B04FormsComponent ]
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
