import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesContainerComponent } from './bases-container.component';

describe('BasesContainerComponent', () => {
  let component: BasesContainerComponent;
  let fixture: ComponentFixture<BasesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
