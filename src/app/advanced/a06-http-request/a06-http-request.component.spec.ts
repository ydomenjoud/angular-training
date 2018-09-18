import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A06HttpRequestComponent } from './a06-http-request.component';

describe('A06HttpRequestComponent', () => {
  let component: A06HttpRequestComponent;
  let fixture: ComponentFixture<A06HttpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A06HttpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A06HttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
