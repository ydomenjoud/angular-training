import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationInterceptorService } from './authentication-interceptor.service';

describe('AuthenticationInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationInterceptorService]
    });
  });

  it('should be created', inject([AuthenticationInterceptorService], (service: AuthenticationInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
