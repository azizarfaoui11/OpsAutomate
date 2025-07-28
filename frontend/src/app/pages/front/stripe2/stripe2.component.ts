import { Component } from '@angular/core';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-stripe2',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './stripe2.component.html',
  styleUrl: './stripe2.component.css'
})
export class Stripe2Component {
  
  currentuserid:any;
  id:any;
  resultat:any;
  result:any;
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 2700); // Par exemple, masquer après 3 secondes
  }
  constructor (private a:PipelineserviceService, private x : UserserviceService, private p:PaymentService){};


   async chargeCreditCard() {
      let form = document.getElementsByTagName("form")[0];
      (<any>window).Stripe.card.createToken({
       // name:form['cardName'].value,
        number: form['cardNumber'].value,
        exp_month: form['expMonth'].value,
        exp_year: form['expYear'].value,
        cvc: form['cvv'].value
      }, (status: number, response: any) => {
        if (status === 200) {
          let token = response.id;
          this.a.chargeCardd(token);
        //  this.activeModal.close(true);

        } else {
          console.log(response.error.message);
        }
      });
      this.showNotificationWithMessage('Félicitations !', 'notification-a');
      await this.delay(3000);
      this.showNotificationWithMessage('vérifiez votre boîte mail','notification-success');
      //pour le moment 
     // this.affectusertosubscription();
      //this.sendemail1();

    }


    affectusertosubscription()
{
  this.p.usertosubsc1(this.id).subscribe(data=>{this.resultat=data
    console.log(this.resultat);
  });
  }
ngOnInit(): void {
  this.fetchUserData();
   }
   
ngOnChanges(): void {
  console.log("ID mis à jour dans le composant payment:", this.currentuserid);
  this.id = this.currentuserid;
}

fetchUserData(): void {
  this.x.getCurrentUser().subscribe(
      (data) => {
          console.log('Données utilisateur reçues:', data);
          this.currentuserid=data.id;
          this.updateId(); 
      },
      (error) => {
          console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
  );
}

updateId(): void {
this.id = this.currentuserid;
console.log("ID mis à jour dans le composant payment:", this.id);
}
sendemail1()
{
  this.p.sendemail1().subscribe(data=>{this.result=data;
    console.log(this.result);
  })
}
async  showNotificationWithMessage(message: string, className: string) {
  this.notificationMessage = message;
  this.showNotification = true;
  this.notificationClass = className;
  this.hideNotification();

} 
delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}



   

}
