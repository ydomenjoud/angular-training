import { TestBed, async, inject } from '@angular/core/testing';

import { UserControlGuard } from './user-control.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserControlGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserControlGuard]
    });
  });

  it('should ...', inject([UserControlGuard], (guard: UserControlGuard) => {
    expect(guard).toBeTruthy();
  }));
});
