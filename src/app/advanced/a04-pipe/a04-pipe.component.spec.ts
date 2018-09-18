import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A04PipeComponent } from './a04-pipe.component';

describe('A04PipeComponent', () => {
  let component: A04PipeComponent;
  let fixture: ComponentFixture<A04PipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A04PipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A04PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
