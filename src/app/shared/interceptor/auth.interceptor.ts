import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authenticationService.getToken();

    this.spinnerService.show();

    if (token) {
      return next.handle(this.addTokenHeader(request, token)).pipe(finalize(() => this.spinnerService.hide()));
    }
    return next.handle(request);
  }

  private addTokenHeader(request: HttpRequest<any>, token: String) {
    return request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) })
  }
}
