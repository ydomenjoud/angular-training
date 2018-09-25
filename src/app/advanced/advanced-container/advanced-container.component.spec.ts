import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedContainerComponent } from './advanced-container.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdvancedContainerComponent', () => {
  let component: AdvancedContainerComponent;
  let fixture: ComponentFixture<AdvancedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdvancedContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
