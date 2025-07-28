import { Component } from '@angular/core';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../../core/services/payment.service';
import { UserserviceService } from '../../../core/services/userservice.service';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stripe3',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './stripe3.component.html',
  styleUrl: './stripe3.component.css'
})
export class Stripe3Component {

  resultat:any;
  id:any;
  currentuserid:any;
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 3200); // Par exemple, masquer après 3 secondes
  }

  constructor(private a:PipelineserviceService, private p:PaymentService,private x:UserserviceService){

  }
  
//payement payasyougo
/*chargeCreditCard() {
  let form = document.getElementsByTagName("form")[0];
  (<any>window).Stripe.card.createToken({
    name:form['cardName'].value,
    number: form['cardNumber'].value,
    exp_month: form['expMonth'].value,
    exp_year: form['expYear'].value,
    cvc: form['cvv'].value
  }, (status: number, response: any) => {
    if (status === 200) {
      let token = response.id;
      this.a.chargeCardstripe(token);
    //  this.activeModal.close(true);

    } else {
      console.log(response.error.message);
    }
  });

  this.affectusertoabonnement();
} */
//zedet async kodem methode wel faza teaa delay bech nahehom w nhothom maa deploy khater mail habech yetbaath mtaa ki tekmeml pipeline deploy local et hebergement
 async affectusertoabonnement()  
{
  this.p.usertoabonn(this.id).subscribe(data=>{this.resultat=data
    console.log(this.resultat);
  });
  this.showNotificationWithMessage('Félicitations !', 'notification-a');
  await this.delay(3500);
  this.showNotificationWithMessage('vérifiez votre boîte mail','notification-success');
    await this.delay(10);
    this.sendemail();  
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

sendemail()
{
  this.p.sendemail().subscribe(data=>{this.resultat=data
   console.log(this.resultat); 
  });
}
 // Fonction de délai
 delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async  showNotificationWithMessage(message: string, className: string) {
  this.notificationMessage = message;
  this.showNotification = true;
  this.notificationClass = className;
  this.hideNotification();

} 




}
