import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../../../core/services/payment.service';
import { abonnement } from '../../../../core/model/abonnement';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from '../../tables/tables.component';

@Component({
  selector: 'app-updateabonn',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,TablesComponent],
  templateUrl: './updateabonn.component.html',
  styleUrl: './updateabonn.component.css'
})
export class UpdateabonnComponent implements OnInit {

abonn:abonnement = new abonnement();
@Input() id : number=0;
  constructor(private service: PaymentService, public activeModal: NgbActiveModal){

  }

  ngOnInit(): void {
    this.service.getabonn(this.id)
    .subscribe((result: abonnement) => {
      this.abonn = result;
    });
  }

  updateAbonnement() {
    this.service.updateabonn(this.abonn.id,this.abonn)
    .subscribe(
      response => {
        console.log('Abonnement updated successfully');
        this.activeModal.close(true);
      },
      error => {
        console.error('Error updating abonnement', error);
      }
    );
  }
onSubmit() {
  this.updateAbonnement();
}

onCancel(): void {
  this.activeModal.dismiss();
}




}
