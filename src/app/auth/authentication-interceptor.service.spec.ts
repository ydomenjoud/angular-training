import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthenticationInterceptorService } from './authentication-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from 'src/app/auth/user.service';
import { AuthToken } from 'src/app/auth/auth-token';

describe('AuthenticationInterceptorService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthenticationInterceptorService,
        UserService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthenticationInterceptorService,
          multi: true,
        }
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([AuthenticationInterceptorService], (service: AuthenticationInterceptorService) => {
    expect(service).toBeTruthy();
  }));


  it('should add an Authorization header when logged', inject([UserService], (userService: UserService) => {

    // create dummy token
    const token = new AuthToken();
    token.id = 'my_token';

    // login user
    userService.login$({email: 'email', password: 'password'}).subscribe(() => {
      // observable without subscriber is not triggered
    });
    const httpRequestLogin = httpMock.expectOne(`${userService.apiUrl}/login?include=User`);
    httpRequestLogin.flush(token);

    userService.logout$().subscribe(() => {
      // observable without subscriber is not triggered
    });

    const httpRequest = httpMock.expectOne(`${userService.apiUrl}/logout`);

    expect(httpRequest.request.headers.get('Authorization')).toEqual(token.id);
  }));
});
