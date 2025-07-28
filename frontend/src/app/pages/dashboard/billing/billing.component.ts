import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: 'C://pfefront//pfeFront//src//assets//css//material-dashboard.css'
})
export class BillingComponent implements OnInit{
  resultat:any;
  resultats:any;
  constructor(private ps:PaymentService)

  {

  }
  ngOnInit(): void {
this.getpayment();
 }


  getpayment()
  {
    return this.ps.getpayment().subscribe(data=>{this.resultat=data;
      console.log(this.resultat);

    })
  }

  gettransactions()
  {
    return this.ps.gettransaction().subscribe(data=>{this.resultats=data;

    })
  }

}
