import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { AuthenticationInterceptorService } from 'src/app/auth/authentication-interceptor.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserModule } from 'src/app/auth/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
