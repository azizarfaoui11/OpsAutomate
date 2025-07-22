import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { RegistrationRequest } from '../model/RegistrationRquest';
import { TokenService } from './token/token.service';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:8082'; // Remplacez ceci par l'URL de votre API backend
  private apiurl='http://localhost:8082/password-reset/request';
  private apiurll='http://localhost:8082/password-reset/reset';
  email: any;
  newPassword:any;
  token:any;


  constructor(private http: HttpClient) { }

  register(user: User): Observable<RegistrationRequest> {
    return this.http.post<RegistrationRequest>(`${this.baseUrl}/register`, user);
  }

  /*login(user: User): Observable<{token:string}> {
    return this.http.post<{token:string}>(`${this.baseUrl}/login`, user);
  }*/
  login(user: User): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' }).pipe(
      map((response: string) => response)
    );
  }

 /* ping ():Observable<string>
  {
    const token="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJsYWxvdSIsImlhdCI6MTcxNjk4NjQ5OSwiZXhwIjoxNzE3MDcyODk5fQ.9ugX8ldJIF_6FC0nQk1SVtkh2o_85aGkmkLt31aHLwjljgZNfEOhjpK8RFPYIgUu"
    // if (token && !req.url.includes('/login')) {
      console.log('Token JWT utilisé:', token); // Ajoutez cette ligne pour vérifier le token avant l'envoi de la requête

    
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
     

    
    
    // return next.handle(req);
    return this.http.get(`${this.baseUrl}/ping `, {headers:headers, responseType: 'text' });
    //.pipe(
      //map((response: string) => response));
  }}*/

  ping(): Observable<string> {
   // const token="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJheml6IiwiaWF0IjoxNzE2OTk1OTQ3LCJleHAiOjE3MTcwODIzNDd9.beG50_TAR0SLSnTy8JXzkLDWh8MqZy0zFkQQ0b-JqEbmVeXvHTmYlsk5ip9oNCng"
      const token=this.gettoken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.baseUrl}/ping `, { headers: headers ,responseType: 'text'})
    .pipe(
     map((response: string) => response));
}

settoken(token: string) {
  localStorage.setItem('token', token);
}

gettoken() {
  return localStorage.getItem('token') as string;
}

passwordrequest(email:string): Observable<any> {
 return  this.http.post(this.apiurl, { email });
    
}

passwordreset(token:string,newPassword:any):Observable<any> {
  return this.http.post(this.apiurll, { token, newPassword });
   
}

}
  

