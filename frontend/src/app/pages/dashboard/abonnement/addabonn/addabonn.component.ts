import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../../core/services/payment.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { abonnement } from '../../../../core/model/abonnement';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserserviceService } from '../../../../core/services/userservice.service';

@Component({
  selector: 'app-addabonn',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addabonn.component.html',
  styleUrl: './addabonn.component.css'
})
export class AddabonnComponent implements OnInit {

  constructor(private service: PaymentService,public activeModal: NgbActiveModal, private x:UserserviceService){}

  abonn: abonnement =new abonnement();
  id: any ;
  currentuserid: any ;
  onSubmit() {
    this.addabonn();
  }
  addabonn() {
    this.service.addabonn(this.abonn,this.id).
    subscribe(
      (data) => {
        console.log('abonnement ajouté avec succès :', data)
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
