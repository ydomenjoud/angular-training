import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req.clone({
      setHeaders: {
        Authorization: this.userService.token
      }
    });

    return next.handle(req);
  }
}
