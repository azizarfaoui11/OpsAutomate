import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StripeComponent } from '../stripe/stripe.component';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-abonn',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule,NgbModule,StripeComponent],
  templateUrl: './abonn.component.html',
  styleUrl: './abonn.component.css'
})
export class AbonnComponent implements OnInit{

  ida:number=1;
  ids1:number=1;
  ids2:number=2;
  resultat:any;
  resultat1:any;
  resultat2:any;
  constructor(private router:Router, private p:PaymentService) {
           
  }
  ngOnInit(): void {
           this.getabonn();
          // this.getsubscmensuel();
          // this.getsubscannuel();
  }

  redirectionpaymentbyYear()
  { 
        this.router.navigate(['/stripe']);
  }

  redirectionpaymentbyMonth()
  { 
        this.router.navigate(['/stripe2']);
  }

  redirectionpaymentPayAsYouGo()
  { 
        this.router.navigate(['/stripe3']);
  }

  getabonn(){
    this.p.getabonn(this.ida).subscribe(data=>{this.resultat=data
      console.log(this.resultat);
    });
  }

  getsubscmensuel()
  {
    this.p.getsubsc(this.ids1).subscribe(data=>{this.resultat1=data
      console.log(this.resultat1);
    })
  }
  
  getsubscannuel()
  {
    this.p.getsubsc(this.ids2).subscribe(data=>{this.resultat2=data
      console.log(this.resultat2);
    })
  }

  



}
