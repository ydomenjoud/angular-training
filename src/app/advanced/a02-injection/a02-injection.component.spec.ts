import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A02InjectionComponent } from './a02-injection.component';

describe('A02InjectionComponent', () => {
  let component: A02InjectionComponent;
  let fixture: ComponentFixture<A02InjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A02InjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A02InjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
