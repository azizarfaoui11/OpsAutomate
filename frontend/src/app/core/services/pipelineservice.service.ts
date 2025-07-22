import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PipelineParams } from '../model/pipelineParams';
//import { testvalidation } from '../models/testvalidation';
//import { question } from '../models/question';

import { catchError, map, tap } from 'rxjs/operators'
//import { passage } from '../models/passage';

@Injectable({
  providedIn: 'root'
})
export class PipelineserviceService {

  private pipelineParamsSource = new BehaviorSubject<PipelineParams>({
    targetstage1: "",
    targetstage2: "",
    targetstage3: "",
    targetstage4: "",
    
  });
  //pipelineParams$:Observable<PipelineParams> = this.pipelineParamsSource.asObservable();


  constructor(private httpclient:HttpClient) {}
  private baseUrl = 'http://localhost:8082/pipeline';
  private apiUrl = 'http://localhost:8082/openUrl';
  private apiUrl1 = 'http://localhost:8082/openUrljmeter';
  private apiUrl2 = 'http://localhost:8082/downloadartifact';
  private apiUrl3= 'http://localhost:8082/pipeline2';






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

    public Selenuim(): Observable<any> {
      // Les données que vous souhaitez envoyer avec la requête
      const body = {}; // Remplacez {} par les données réelles que vous souhaitez envoyer
  
      // Envoi de la requête POST avec l'URL de l'API et les données
      return this.httpclient.post<any>(`${this.apiUrl3}`, body);
    }

    public chargeCard(token: string) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      const body = {
        token: token,
        amount: 1000 // Le montant en cents
      };
      this.httpclient.post('http://localhost:8082/payment/charge', body, { headers: headers })
        .subscribe(resp => {
          console.log(resp);
        }, error => {
          console.error('Payment failed', error);
        });
    }
  }








 /* triggerPipeline(targetstage1: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpclient.post(this.baseUrl, { targetstage1 }, { headers: headers });
  }*/
  




  /*triggerPipeline(): Observable<any> {
    const headers = new HttpHeaders({
     // 'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('aziz:11f72b60ec8526a5e0697bf7b2559686ab') // Remplacez avec votre nom d'utilisateur et token API
    });

    

    return this.httpclient.post(this.APIurl, null, { headers: headers, responseType: 'text' });
  }

}*/
/*triggerPipeline(): Observable<any> {
  console.log('Appel à triggerPipeline dans le service');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('aziz:11ad7512add4d956ec5530229b6ba925f6')
  });

  return this.httpclient.post(this.APIurl, null, { headers: headers, responseType: 'text' })
    .pipe(
      tap((response: any) => {
        console.log('Réponse du service Spring:', response);
      }),
      catchError(error => {
        console.error('Erreur lors de la requête:', error);
        throw error;
      })
    );
}
*/

  
  /*gettestt() : Observable<testvalidation[]>
   {
    return this.httpclient.get<testvalidation[]>('/testdevalidation/showallvalidation')
   }
   gettestbyid(id:number ) {
    console.log("getbyid :",id);
    return this.httpclient.get<testvalidation[]>(`/testdevalidation/showvalidation/${id}`)
  }
  getpassagebyid(id:number ) {
    console.log("getbyid :",id);
    return this.httpclient.get<passage[]>(`/testdevalidation/getpassagebyid/${id}`)
  }


  savequiz(quiz: testvalidation): Observable<testvalidation>
  {
    console.log(quiz)
    return this.httpclient.post<testvalidation>('/testdevalidation/addvalidation',quiz );
  }

  //updatequiz(id: number): Observable<testvalidation>{

    //return this.httpclient.get<testvalidation>(`/updatevalidation/${id}`).pipe(map(response => response));
    //return this.httpclient.put<testvalidation>(`/updatevalidation/${id}`);

  
     //}
     updatequiz(data: testvalidation): Observable<testvalidation> {
  return this.httpclient.put<testvalidation>('/testdevalidation/updatevalidation', data);
     }


     delete(id:string){
      return this.httpclient.delete(`/testdevalidation/deletevalidation/${id}`,{responseType:"text"})
    }

    deletequest(id:string){
      return this.httpclient.delete(`/testdevalidation/deletequestion/${id}`,{responseType:"text"})
    }


    getquest() : Observable<question[]>
   {
    return this.httpclient.get<question[]>('/testdevalidation/showallquestion')
   }
   savequestion(qu: question): Observable<question>
   {
     return this.httpclient.post<question>('/testdevalidation/addquestion',qu );
   }


   savequesttotest(qu: question, id:number): Observable<question>
  {
    return this.httpclient.post<question>(`/testdevalidation/addquestion/${id}`,qu);
  }
  updatequest(data: question): Observable<question> {
    return this.httpclient.put<question>('/testdevalidation//updatequestion', data);
       }

       getquestbyid(id:number ) {
        console.log("getbyid :",id);
        return this.httpclient.get<question[]>(`/testdevalidation/showquestion/${id}`)
      }

      getpassage() : Observable<passage[]>
   {
    return this.httpclient.get<passage[]>('/testdevalidation/allpassages')
   }
   gettoppassage() : Observable<passage[]>
   {
    return this.httpclient.get<passage[]>('/testdevalidation/toppassage/2')
   }
   getPassagesByScore(a: number, b: number): Observable<passage[]> {
    const params = new HttpParams().set('a', a.toString()).set('b', b.toString());
    return this.httpclient.get<passage[]>(`/testdevalidation/scorebetween`, { params });
  }
 



  generateqrcode(id: string): Observable<Blob> {
    const headers = new HttpHeaders().append('responseType', 'blob');
    return this.httpclient.get(`/testdevalidation/Qrtotest/4`, { headers, responseType: 'blob' });
  }

  addBlog(duree : any,image : any,pts : any ,titre : any): Observable<any> {
    return this.httpclient.post<any>('/testdevalidation/addvalidation',  {duree,
      image,
      pts,
      titre 
       
  },); 
  }
 */
  
  

  

