import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../../core/services/payment.service';
import { UserserviceService } from '../../../core/services/userservice.service';

@Component({
  selector: 'app-stripe',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css'
})
export class StripeComponent {
  currentuserid:any;
  id:any;
  resultat:any;
  resultats:any;
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationClass: string = '';
  hideNotification() {
    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 2700); // Par exemple, masquer après 3 secondes
  }
  constructor (private a:PipelineserviceService, private p:PaymentService, private x:UserserviceService){};


   async chargeCreditCard() {
      let form = document.getElementsByTagName("form")[0];
      (<any>window).Stripe.card.createToken({
       // name:form['cardName'].value,
        number: form['cardNumber'].value,
        exp_month: form['expMonth'].value,
        exp_year: form['expYear'].value,
        cvc: form['cvv'].value
      }, async (status: number, response: any) => {
        if (status === 200) {
          let token = response.id;
          this.a.chargeCard(token);
        //  this.activeModal.close(true)
              }
              else {
                console.log(response.error.message);
              }

      });
      this.showNotificationWithMessage('Félicitations !', 'notification-a');
      await this.delay(3000);
      this.showNotificationWithMessage('vérifiez votre boîte mail','notification-success');
      //pour le moment
     // this.affectusertosubscription();
      //this.sendemail2();

    }
    
  async  showNotificationWithMessage(message: string, className: string) {
        this.notificationMessage = message;
        this.showNotification = true;
        this.notificationClass = className;
        this.hideNotification();

    } 
     


    
    affectusertosubscription()
    {
      this.p.usertosubsc2(this.id).subscribe(data=>{this.resultat=data
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
   
    sendemail2(){
      this.p.sendemail2().subscribe(data=>{this.resultats=data;
        console.log(this.resultats=data);
      })
    }

    delay(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }



}
