import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({
      headers: request.headers
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Methods', ['GET', 'POST']),
    });
    return next.handle(cloned);
  }
}
