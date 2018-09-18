import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/auth/user';
import { AuthToken } from 'src/app/auth/auth-token';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: BehaviorSubject<User> = new BehaviorSubject(null);

  token$: BehaviorSubject<AuthToken> = new BehaviorSubject(null);

  private apiUrl = environment.apiUrl + '/Users';

  constructor(private http: HttpClient) {
    this.token$.subscribe(
      token => {
        if (token.user) {
          this.user$.next(token.user);
        }
      }
    );
  }

  get user(): User {
    return this.user$.value;
  }

  get token(): string {
    return this.token$.value
      ? this.token$.value.id
      : null;
  }

  register$(body: { email, password }): Observable<any> {
    return this.http.post(this.apiUrl, body);
  }

  login$(credentials: { email, password }): Observable<User> {
    const url = this.apiUrl + '/login?include=User';
    return this.http
      .post<AuthToken>(url, credentials)
      .pipe(
        tap(token => this.token$.next(token)),
        map(token => token.user)
      );
  }

  logout$() {
    const url = this.apiUrl + '/logout';
    return this.http
      .post(url, {}, {
        headers: {
          'Authorization': this.token
        }
      })
      .pipe(
        tap(() => {
          this.token$.next(null);
          this.user$.next(null);
        })
      );
  }
}
