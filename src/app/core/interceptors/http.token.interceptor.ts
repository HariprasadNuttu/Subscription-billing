import { Injectable, Injector } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './../services/user/user.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor (private userService: UserService) {}

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = {}
    if (localStorage.getItem('authentication_token') !== null) {
      headers = {
        setHeaders: {
          'authentication-token': localStorage.getItem('authentication_token')
        }
      }
    }
    const request = req.clone(headers)
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      return throwError(error);
    }))
  }
}
