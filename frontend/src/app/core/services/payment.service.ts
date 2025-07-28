import { Injectable } from '@angular/core';
import { groupesrc } from '../model/grprsrc';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { abonnement } from '../model/abonnement';
import { subscription } from '../model/subscription';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiurl="http://localhost:8082/payment/addgrouperessource";
  baseurl="http://localhost:8082"

  constructor(private x:HttpClient) { }


  public addressource(grp :groupesrc,id:number):Observable<groupesrc>
  {
    let params = new HttpParams().set('id',id.toString());

      return this.x.post<groupesrc>(this.apiurl,grp,{params})
  
  }

  public getlistgrprsrc():Observable<any>
  {
    return this.x.get(`${this.baseurl}/payment/grouperessourcelist`)
  }
  
  public getlistgrprsrcbyuser(id:any):Observable<any>
  {
    return this.x.get(`${this.baseurl}/payment/grpBYuser/${id}`);
  }

  public deletegrp(id:number){
    return this.x.delete(`${this.baseurl}/payment/grp/delete/${id}`);
  }

  public addabonn(abonn:abonnement,id:number):Observable<abonnement>
  {
    let params= new HttpParams().set('id',id.toString())
    return this.x.post<abonnement>(`${this.baseurl}/abonnement/add`,abonn,{params});
  }
  public getabonn(id:number):Observable<abonnement>
  {
    return this.x.get<abonnement>(`${this.baseurl}/abonnement/${id}`);
  }

  public getlistabonn():Observable<any>
  {
    return this.x.get(`${this.baseurl}/abonnement/list`);
  }

  public getlistabonnbyuser(id:number):Observable<any>
  {
    return this.x.get(`${this.baseurl}/abonnbyuser/${id}`);

  }



  public deleteabonn(id:number)
  {
    return this.x.delete(`${this.baseurl}/abonnement/delete/${id}`)
  }

  public updateabonn(id:number,abonn:abonnement):Observable<abonnement>
  {
    return this.x.put<abonnement>(`${this.baseurl}/updateabonn/${id}`,abonn);

  }
   
   


  public userabonn(): Observable<any>
  {
    return this.x.get(`${this.baseurl}/user/abonn`)
  }

  public usersubsc():Observable<any>
  {
    return this.x.get(`${this.baseurl}/user/subsc`)
  }

  public usertoabonn(id:number):Observable<any>
  {
    
    let params = new HttpParams().set('id',id.toString());
    return this.x.post(`${this.baseurl}/abonntouser`,{},{params})
  }

  public usertosubsc1(id:number):Observable<any>
  {
    
    let params = new HttpParams().set('id',id.toString());
    return this.x.post(`${this.baseurl}/subsc1touser`,{},{params})
  }
  
  public usertosubsc2(id:number):Observable<any>
  {
    
    let params = new HttpParams().set('id',id.toString());
    return this.x.post(`${this.baseurl}/subsc2touser`,{},{params})
  }

  public addsubsc(subsc:subscription, id: number):Observable<subscription>
  {
    let params= new HttpParams().set('id',id.toString());
    return this.x.post<subscription>(`${this.baseurl}/subscription/add`,subsc,{params});
  }
  public getsubsc(id:number):Observable<subscription>
  {
    return this.x.get<subscription>(`${this.baseurl}/subscription/${id}`);
  }

  public getlistsubsc():Observable<any>
  {
    return this.x.get(`${this.baseurl}/subscription/list`);
  }
  public getlistsubscbyuser(id:number):Observable<any>
  {
    return this.x.get(`${this.baseurl}/subscbyuser/${id}`);
  }

  public deletesubsc(id:number)
  {
    return this.x.delete(`${this.baseurl}/subscription/delete/${id}`)
  }

  public updatesubsc(id:number,subsc:subscription):Observable<subscription>
  {
         return this.x.put<subscription>(`${this.baseurl}/updatesubsc/${id}`,subsc)
  }

  public calculeprix(id:number)
  {
    return this.x.post(`${this.baseurl}/payment/prix/${id}`,{})
  }

  public sendemail()
  {
    return this.x.post(`${this.baseurl}/payment/sendemail`,{});
  }

  public sendemail1()
  {
    return this.x.post(`${this.baseurl}/payment/sendemailmensuel`,{});
  }

  public sendemail2()
  {
    return this.x.post(`${this.baseurl}/payment/sendemailannuel`,{});
  }
  public sendemaildeploy()
  {
    return this.x.post(`${this.baseurl}/payment/sendemaildeploylocal`,{});
  }
  public sendemailhebergement()
  {
    return this.x.post(`${this.baseurl}/payment/sendemailhebergement`,{});
  }
  
  /*public sommme(id:number)
  {
    return this.x.post(`${this.baseurl}/payment/sommme/${id}`,{})
  }*/
 

    public getpayment()
    {
      return this.x.get(`${this.baseurl}/payment/list`)
    }

    public gettransaction()
    {
      return this.x.get(`${this.baseurl}/stripedashboard`)
    }

    public getdashboardback()
    {
      return this.x.get(`${this.baseurl}/dashboard/backend`)
    }

    public getdashboarddatabase()
    {
      return this.x.get(`${this.baseurl}/dashboard/database`)
    }

    public getdashboardVM()
    {
      return this.x.get(`${this.baseurl}/dashboard/machine`)
    }

    public getdashboardContainers()
    {
      return this.x.get(`${this.baseurl}/dashboard/containers`)
    }

}
