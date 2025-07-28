import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  private baseUrl = 'http://localhost:8082'; 



  constructor(private http : HttpClient) { }


  getallusers():Observable<any> 
  {
   return  this.http.get<any>(`${this.baseUrl}/getallusers`);
  }
  getuserbyid(id:number):Observable<User>
  {
    return this.http.get<User>(`${this.baseUrl}/getuser/${id}`);
  }
  /*getuserbyemail(email:string):Observable<any>
  {

   return this.http.get<User>(`${this.baseUrl}/userbyemail`,{ params: new HttpParams().set('email', email)}
  );
  }*/

  deleteuser(id:number)
  {
      return this.http.delete(`${this.baseUrl}/delete/${id}`);
}


updateuser(id:number,user:User):Observable<any>
{
  return this.http.put(`${this.baseUrl}/updateuser/${id}`,user)
}

adduser(user:User):Observable<User>
{
  return this.http.post<User>(`${this.baseUrl}/adduser`,user);
}
  getstatus(id:number):Observable<{ status: string }>
  {
    return this.http.post<{ status: string }>(`${this.baseUrl}/status/${id}`,{ responseType: 'text' });
  }

}