import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenservice: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = this.tokenservice.gettoken();
    //console.log(token);
    const token="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJsYWxvdSIsImlhdCI6MTcxNjk4NjQ5OSwiZXhwIjoxNzE3MDcyODk5fQ.9ugX8ldJIF_6FC0nQk1SVtkh2o_85aGkmkLt31aHLwjljgZNfEOhjpK8RFPYIgUu"
   // if (token && !req.url.includes('/login')) {
    if(token){ 
      const authreq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authreq);

    }
    return next.handle(req);

  }
}
