import { TestBed, async, inject } from '@angular/core/testing';

import { UserControlGuard } from './user-control.guard';

describe('UserControlGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserControlGuard]
    });
  });

  it('should ...', inject([UserControlGuard], (guard: UserControlGuard) => {
    expect(guard).toBeTruthy();
  }));
});
