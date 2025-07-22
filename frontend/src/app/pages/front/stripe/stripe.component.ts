import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';

@Component({
  selector: 'app-stripe',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css'
})
export class StripeComponent {

  constructor (private a:PipelineserviceService){};


    chargeCreditCard() {
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
          this.a.chargeCard(token);
        } else {
          console.log(response.error.message);
        }
      });
    }

}
