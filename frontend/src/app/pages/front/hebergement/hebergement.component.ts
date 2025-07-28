import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { HebergementParams } from '../../../core/model/hebergementparams';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-hebergement',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hebergement.component.html',
  styleUrl: './hebergement.component.css'
})
export class HebergementComponent {
  count1: number = 0; // Exemple de valeur initiale
  count2: number = 0; // Exemple de valeur initiale
  count3: number = 0; // Exemple de valeur initiale
  nom:string="";
  isModalVisible: boolean = false;
  newCount: number=0;
   count:number = 0; 
   resultat:any;
   HebegementParams : HebergementParams={
    frontend:0,
    backend:0,
    db:0,
    noueds:0,
    nom:""

   }
   notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 3300); // Par exemple, masquer après 3 secondes
  }

  constructor(private service:PipelineserviceService , private p:PaymentService)
  {}

  updateTargetStage1(): void {
    if (this.count1) {
      this.HebegementParams.frontend = this.count1;
    }
  }
  updateTargetStage2(): void {
    if (this.count2) {
      this.HebegementParams.backend = this.count2;
    }
  }

  updateTargetStage3(): void {
    if (this.count3) {
      this.HebegementParams.db = this.count3;
    }
  }

  updateTargetStage4(): void {
    if (this.count) {
      this.HebegementParams.noueds = this.count;
    }
  }

  updateTargetStage5(): void {
    if (this.nom) {
      this.HebegementParams.nom = this.nom;
    }
  }


  
  

 async googlelcloud(){

   this.updateTargetStage1();
   this.updateTargetStage2();
   this.updateTargetStage3();
   this.updateTargetStage4();
   this.updateTargetStage5();


  this.service.deployGCP(
    { 
      frontend: this.HebegementParams.frontend,
      backend: this.HebegementParams.backend,
      db: this.HebegementParams.db,
      noueds: this.HebegementParams.noueds,
      nom: this.HebegementParams.nom
      }
  ).subscribe(  async () => {
   // console.log('Pipeline triggered successfully');
   await this.delay(5000);
   this.notificationMessage = 'Hebrgement en cours';

   this.showNotification = true;
   this.notificationClass = 'notification-success';
   this.hideNotification();
   this.notificationMessage = 'vérifiez votre boîte mail';

   this.showNotification = true;
   this.notificationClass = 'notification-success';
   this.hideNotification();
},
async(error) => {
   // console.error('Error triggering pipeline:', error);
  await this.delay(700);
   this.notificationMessage = 'Hebrgement en cours';

   this.showNotification = true;
   this.notificationClass = 'notification-success';
   this.hideNotification();
   await this.delay(4200);
   this.notificationMessage = 'vérifiez votre boîte mail';

   this.showNotification = true;
   this.notificationClass = 'notification-success';
   this.hideNotification();

}
); 
 await this.delay(101000);
 this.sendemail();

} 

 sendemail()
{
  this.p.sendemailhebergement().
  subscribe(data=>{this.resultat=data
   console.log(this.resultat); 
  });
}
 // Fonction de délai
 delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
  
  
  openPopup() {
      this.isModalVisible = true;
    }

  closePopup() {
    this.isModalVisible = false;
  }

  updateCount() {  
    if (this.newCount && this.newCount >= 0) {
      if (this.count1 === this.newCount) {
        this.count1 = this.newCount;
      } else if (this.count2 === this.newCount) {
        this.count2 = this.newCount;
      } else if (this.count3 === this.newCount) {
        this.count3 = this.newCount;
      }
    }
    this.closePopup();
  }
  

   increment() {
     this.count++; // Incrémente la valeur de count
  }
  decrement()
  {
    this.count--;
  }
 
  incr1()
  {
   this.count1++;
  }
  decr1(){
    this.count1--;
  }
  incr2()
  {
   this.count2++;
  }
  decr2(){
    this.count2--;
  }
  incr3()
  {
   this.count3++;
  }
  decr3(){
    this.count3--;
  }

  
}
