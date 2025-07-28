import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablesComponent } from '../../tables/tables.component';
import { PaymentService } from '../../../../core/services/payment.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { subscription } from '../../../../core/model/subscription';

@Component({
  selector: 'app-updatesubsc',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,TablesComponent],
  templateUrl: './updatesubsc.component.html',
  styleUrl: './updatesubsc.component.css'
})
export class UpdatesubscComponent {
  subsc:subscription = new subscription();
  @Input() id: number=0;

  constructor(private service: PaymentService, public activeModal: NgbActiveModal){

  }

  ngOnInit(): void {
    this.service.getsubsc(this.id)
    .subscribe((result: subscription) => {
      this.subsc = result;
    });
  }

  updateSubscription() {
    this.service.updatesubsc(this.subsc.id,this.subsc)
    .subscribe(
      response => {
        console.log('Subscription updated successfully');
        this.activeModal.close(true);
      },
      error => {
        console.error('Error updating subscription', error);
      }
    );
  }
onSubmit() {
  this.updateSubscription();
}

onCancel(): void {
  this.activeModal.dismiss();
}




}
