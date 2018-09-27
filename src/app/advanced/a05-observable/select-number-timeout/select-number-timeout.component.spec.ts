import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNumberTimeoutComponent } from './select-number-timeout.component';

describe('SelectNumberTimeoutComponent', () => {
  let component: SelectNumberTimeoutComponent;
  let fixture: ComponentFixture<SelectNumberTimeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNumberTimeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNumberTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
