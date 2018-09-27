import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCancelComponent } from './save-cancel.component';
import { CountdownComponent } from 'src/app/advanced/a05-observable/countdown/countdown.component';

describe('SaveCancelComponent', () => {
  let component: SaveCancelComponent;
  let fixture: ComponentFixture<SaveCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCancelComponent, CountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
