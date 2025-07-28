import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { abonnement } from '../../../core/model/abonnement';
import { groupesrc } from '../../../core/model/grprsrc';
import { Projet } from '../../../core/model/projet';
import { PaymentService } from '../../../core/services/payment.service';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { CommonModule } from '@angular/common';
import { subscription } from '../../../core/model/subscription';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from '../../../core/services/userservice.service';
import { GrouperessourceComponent } from '../grouperessource/grouperessource.component';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent implements OnInit{
  projet:Projet= new Projet();
  abonnements: abonnement[]=[];
  groupesDeRessources: groupesrc[]=[];
  id:any;
  currentuserid:any;
  //selectedAbonnement: string|undefined; // Propriété pour la sélection

  constructor
(private service:PaymentService, private s:PipelineserviceService,public activeModal: NgbActiveModal,private modalservice: NgbModal, private x : UserserviceService){

}
  ngOnInit(): void {
    this.fetchUserData();

//console.log(this.groupesDeRessources);
  }


  addProjet(): void {
    this.s.addproject(this.projet,this.id)
  .subscribe((data) => {
      console.log(data);
    });
  }

  addgrouperessource() {
    const modalRef = this.modalservice.open(GrouperessourceComponent);

    modalRef.result.then((result) => {
      console.log('Modal closed with result:', result);
      //this.redirection1();
      // Actualisez la liste des utilisateurs si nécessaire
    }).catch((error) => {
      console.log('Modal dismissed with error:', error);
    });
  }

  

  getAbonnements()  {
    this.service.getlistabonnbyuser(this.id)
    .subscribe((data) => {
      this.abonnements = data;
    });
  }

  onSubmit()
  {
    this.addProjet();
    this.refreshPage();
  }



  getGroupesDeRessources(): void {
    this.service.getlistgrprsrcbyuser(this.id)
    .subscribe((data) => {
      this.groupesDeRessources = data;
    });
  }
  onCancel(): void {
    this.activeModal.dismiss();
  }
  refreshPage() {
    window.location.reload();
    
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
          this.getAbonnements();
          this.getGroupesDeRessources();
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
