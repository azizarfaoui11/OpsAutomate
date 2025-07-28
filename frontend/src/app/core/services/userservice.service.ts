import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../model/User';
import { RegistrationRequest } from '../model/RegistrationRquest';
import { TokenService } from './token/token.service';

import { Observable, catchError, map, throwError } from 'rxjs';
import { SafeUrl,DomSanitizer} from '@angular/platform-browser';
import { blob } from 'stream/consumers';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl = 'http://localhost:8082'; // Remplacez ceci par l'URL de votre API backend
  private apiurl='http://localhost:8082/password-reset/request';
  private apiurll='http://localhost:8082/password-reset/reset';
  //private baseU='http://localhost:8088/download-pdf';
  private baseu='http://localhost:8082/junit-results-pdf';
  private selenurl='http://localhost:8082/selenuim-results-pdf';
  private jmeterurl='http://localhost:8082/jmeter-results-pdf';
  email: any;
  newPassword:any;
  token:any;


  constructor(private http: HttpClient,private sanitizer: DomSanitizer,@Inject(PLATFORM_ID) private platformId: Object) { }

  register(user: User): Observable<RegistrationRequest> {
    return this.http.post<RegistrationRequest>(`${this.baseUrl}/register`, user);
  }

  
  login(user: User): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' }).pipe(
      map((response: string) => response)
    );
  }

 

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



passwordrequest(email:string): Observable<any> {
 return  this.http.post(this.apiurl, { email });
    
}

passwordreset(token:string,newPassword:any):Observable<any> {
  return this.http.post(this.apiurll, { token, newPassword });
   
}

logout(user:User): Observable<any> {
  return this.http.post(`${this.baseUrl}/revoke-tokens`, user, { responseType: 'text' }).pipe(
    map((response: any) => response)
  );
}

gettoken(): string | null {
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token);  // Log to verify token retrieval
    return token;
  } else {
    console.warn('localStorage is not available');
    return null;
  }
}

getCurrentUser(): Observable<any> {
  const token = this.gettoken();
  if (!token) {
    console.error('Token is null');
    return throwError('Token is null');
  }
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  return this.http.get<any>(`${this.baseUrl}/me`, { headers }).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error occurred:', error);
      return throwError(error);
    })
  );
}


/*gettoken() {
  return localStorage.getItem('token') as string;
}*/

/*getCurrentUser(): Observable<any> {
  //const token = localStorage.getItem('token');
  const token = this.gettoken();
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  };

  return this.http.get<any>(`${this.baseUrl}/me`, {});
}*/

/*verifyaccount(username:string,code:string):Observable<any>
{
  const params = new HttpParams()
        .set('username', username)
        .set('code', code);
    return this.http.post(`${this.baseUrl}/verify-email`,params)
}*/

verifyAccount(username: string, code: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  const body = `username=${encodeURIComponent(username)}&code=${encodeURIComponent(code)}`;

  return this.http.post<any>(`${this.baseUrl}/verify-email`, body, { headers });
}



//uploadfile
pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  const data: FormData = new FormData();
  data.append('file', file);
  const newRequest = new HttpRequest('POST', 'http://localhost:8082/upload', data, {
    reportProgress: true,
    responseType: 'text'
  });
  return this.http.request(newRequest);
}

//fichierjmeterpdf
/*downloadPdf(): Observable<SafeUrl> {
  return this.http.get(this.baseU, {
    responseType: 'blob' // Indiquez que la réponse est de type Blob (fichier binaire)
  }).pipe(
    map((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileUrl = URL.createObjectURL(file);
      return this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    })
  );
}*/

junitpdf(): Observable<SafeUrl> {
  return this.http.get(this.baseu, {
    responseType: 'blob' // Indiquez que la réponse est de type Blob (fichier binaire)
  }).pipe(
    map((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileUrl = URL.createObjectURL(file);
      return this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    })
  );
}

seleniumpdf(): Observable<SafeUrl>
{
  return this.http.get(this.selenurl, {
    responseType :'blob'
  }).pipe(
    map((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileUrl = URL.createObjectURL(file);
      return this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    })
  );
}

jmeterpdf():Observable<SafeUrl>
{
  return this.http.get(this.jmeterurl, {
    responseType : 'blob' 
  }).pipe(
    map((blob : Blob )=> {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileUrl = URL.createObjectURL(file);
      return this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
  })
);
}





}
  

