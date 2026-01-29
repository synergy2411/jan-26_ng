import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class ResponseService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.log('RESPONSE INTERCEPTOR');
    return next.handle(req).pipe(
      tap((value) => console.log('[TAPPING RESPONSE]', value)),
      catchError((err) => {
        console.log('CACTHING ERROR HERE', err);
        throw of(err);
      }),
    );
  }
}
