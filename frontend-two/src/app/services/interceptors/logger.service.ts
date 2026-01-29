import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // console.log('[REQUEST]', req);
    console.log('REQUEST INTERCEPTOR');
    const headers = new HttpHeaders();
    if (req.method === 'POST') {
      console.log('METHOD = POST');
      headers.set('Content-Type', 'application/json');
    }
    const clonedReq = req.clone({
      headers,
    });
    return next
      .handle(clonedReq)
      .pipe(tap((value) => console.log('[TAPPING REQUEST]', value)));
  }
}
