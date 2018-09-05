import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C04FormsComponent } from './c04-forms.component';

describe('C04FormsComponent', () => {
  let component: C04FormsComponent;
  let fixture: ComponentFixture<C04FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C04FormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C04FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
