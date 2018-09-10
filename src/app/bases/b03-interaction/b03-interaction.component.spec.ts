import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B03InteractionComponent } from './b03-interaction.component';

describe('B03InteractionComponent', () => {
  let component: B03InteractionComponent;
  let fixture: ComponentFixture<B03InteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B03InteractionComponent ]
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
