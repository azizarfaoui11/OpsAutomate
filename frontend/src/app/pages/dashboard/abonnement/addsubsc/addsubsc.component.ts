import { Component } from '@angular/core';
import { PaymentService } from '../../../../core/services/payment.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { subscription } from '../../../../core/model/subscription';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserserviceService } from '../../../../core/services/userservice.service';

@Component({
  selector: 'app-addsubsc',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addsubsc.component.html',
  styleUrl: './addsubsc.component.css'
})
export class AddsubscComponent {
  subsc:subscription = new subscription();
  id: any ;
  currentuserid: any ;

  constructor(private service:PaymentService,public activeModal: NgbActiveModal, private x:UserserviceService){}

  onSubmit() {
    this.addsubsc();
  }
  addsubsc() {
    this.service.addsubsc(this.subsc,this.id).
    subscribe(
      (data) => {
        console.log('subscription ajouté avec succès :', data)
        //this.router.navigate(['/dash/tables']); // Redirection après ajout réussi
        //this.router.navigate(['/tables']);
        this.activeModal.close(true);
        

      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'abonnement :', error);
      }
    );
  }

  onCancel(): void {
    this.activeModal.dismiss();
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

}
