import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C03InteractionComponent } from './c03-interaction.component';

describe('C03InteractionComponent', () => {
  let component: C03InteractionComponent;
  let fixture: ComponentFixture<C03InteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C03InteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C03InteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
