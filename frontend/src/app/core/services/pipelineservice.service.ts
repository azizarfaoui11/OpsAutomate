import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PipelineParams } from '../model/pipelineParams';

//import { testvalidation } from '../models/testvalidation';
//import { question } from '../models/question';

import { catchError, map, tap } from 'rxjs/operators'
import { Projet } from '../model/projet';
import { ProcessEnvOptions } from 'child_process';
import { HebergementParams } from '../model/hebergementparams';
//import { passage } from '../models/passage';

@Injectable({
  providedIn: 'root'
})
export class PipelineserviceService {

  /*private pipelineParamsSource = new BehaviorSubject<PipelineParams>({
    targetstage1: "",
    targetstage2: "",
    targetstage3: "",
    targetstage4: "",
    
  });*/
  //pipelineParams$:Observable<PipelineParams> = this.pipelineParamsSource.asObservable();


  constructor(private httpclient:HttpClient) {}
  private baseUrl = 'http://localhost:8082/pipeline';
  private apiUrl = 'http://localhost:8082/openUrl';
  private apiUrl1 = 'http://localhost:8082/openUrljmeter';
  private apiUrl2 = 'http://localhost:8082/downloadartifact';
  private apiUrl3= 'http://localhost:8082/pipeline2';
  private apiUrl4= 'http://localhost:8082/pipeline3';
  private apiUrl5= 'http://localhost:8082/pipeline4';
  private apiUrl6=  'http://localhost:8082/pipeline5';
  private baseurl='http://localhost:8082/payment';
  somme:any;






  /*setPipelineParams(params: PipelineParams) {
    this.pipelineParamsSource.next(params);
  }

  // Récupérer les paramètres actuels du pipeline
  getPipelineParams() {
    return this.pipelineParamsSource.value;
  }*/



 /* triggerPipeline(pipelineParams:PipelineParams):Observable<any> {
   // const url = `${this.baseUrl}/pipeline`;

    return this.httpclient.post(this.baseUrl,pipelineParams);
  }*/
  triggerPipeline(pipelineParams: PipelineParams): Observable<any> {
    //const url = `${this.baseUrl}/pipeline`;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'

    });

    return this.httpclient.post(this.baseUrl, pipelineParams, { headers: headers });
}

  analyse(): Observable<any> {
  return this.httpclient.get<any>(`${this.apiUrl}`);
     }
  jmeter(): Observable<any> {
      return this.httpclient.get<any>(`${this.apiUrl1}`);
    }
    jarfile(): Observable<any> {
      return this.httpclient.get<any>(`${this.apiUrl2}`);
    }

    public Selenuim(pipelineParams: PipelineParams): Observable<any> {
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'

    });
      return this.httpclient.post<any>(`${this.apiUrl3}` , pipelineParams, { headers: headers });
    }

    public jmeterpip(pipelineParams: PipelineParams): Observable<any> {
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'

    });
      return this.httpclient.post<any>(`${this.apiUrl4}` , pipelineParams, { headers: headers });
    }

    public sonarandjunit(pipelineParams: PipelineParams): Observable<any> {
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'

    });
      return this.httpclient.post<any>(`${this.apiUrl5}` , pipelineParams, { headers: headers });
    }


    public deployGCP(request: HebergementParams): Observable<any> {
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'

    });
      return this.httpclient.post<any>(`${this.apiUrl6}` , request, { headers: headers });
    }

    /*public chargeCard(token: string) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      const body = {
        token: token,
        amount: 1000 // Le montant en cents
      };
      this.httpclient.post('http://localhost:8082/payment/charge/1', body, { headers: headers })
        .subscribe(resp => {
          console.log(resp);
        }, error => {
          console.error('Payment failed', error);
        });
    }*/

        public  chargeCard(token: string) {
          const headers = new HttpHeaders({'Content-Type': 'application/json'});
          const body = {
            token: token,
            amount: 25000 // Le montant en cents
          };
          this.httpclient.post('http://localhost:8082/payment/charge', body, { headers: headers })
            .subscribe(resp => {
              console.log(resp);
            }, error => {
              console.error('Payment failed', error);
            });
        }

        public chargeCardd(token: string) {
          const headers = new HttpHeaders({'Content-Type': 'application/json'});
          const body = {
            token: token,
            amount: 3000 // Le montant en cents
          };
          this.httpclient.post('http://localhost:8082/payment/charge', body, { headers: headers })
            .subscribe(resp => {
              console.log(resp);
            }, error => {
              console.error('Payment failed', error);
            });
        }



        public chargeCardstripe(token: string,id:number,id1:number) {
          const headers = new HttpHeaders({'Content-Type': 'application/json'});
          let params=new HttpParams().set('id1',id1.toString());
         // let params = new HttpParams().set('id',id.toString());

          const body = {
            token: token,
            //amount:0, // Le montant en cents
          };
          this.httpclient.post(`http://localhost:8082/payment/charge/abonn/${id}`, body,{headers:headers,params:params})
            .subscribe(resp => {
              console.log(resp);
            }, error => {
              console.error('Payment failed', error);
            });
        }

        public getproject()
        {
          return this.httpclient.get('http://localhost:8082/payment/project/list');
        }
       
        public addproject(projet:Projet,id:number)
        {
          let params = new HttpParams().set('id',id.toString());

          return this.httpclient.post('http://localhost:8082/payment/project/add',projet,{params});
        }

        public getprojectbyuser(id:number)
        {
          return this.httpclient.get(`${this.baseurl}/projetbyuser/${id}`);
        }

        public deleteproject(id:number):Observable<any>
        {
          return this.httpclient.delete(`${this.baseurl}/projet/delete/${id}`)
        }

        public updateproject(id:number,proj:Projet):Observable<Projet>
        {
          return this.httpclient.put<Projet>(`${this.baseurl}/updateaprojet/${id}`,proj)
        }

        public getprojectt(id:number)
        {
          return this.httpclient.get(`${this.baseurl}/getproject/${id}`)
        }
      

  }








 
