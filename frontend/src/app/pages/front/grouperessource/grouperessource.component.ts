import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PaymentService } from '../../../core/services/payment.service';
import { groupesrc } from '../../../core/model/grprsrc';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from '../../../core/services/userservice.service';





@Component({
  selector: 'app-grouperessource',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,MatFormFieldModule ,MatInputModule,MatSelectModule,MatButtonModule,MatRadioModule ],
  templateUrl: './grouperessource.component.html',
  styleUrl: './grouperessource.component.css'
})

export class GrouperessourceComponent implements OnInit{

  grp=new groupesrc();
  resultat:any;
  currentuserid:any;
  id:any;

  constructor(private x:PaymentService,public activeModal: NgbActiveModal, private u:UserserviceService){
    
  }
  ngOnInit(): void {
this.fetchUserData();
  }

  addressource()
  {
    this.x.addressource(this.grp,this.id).subscribe(data=>{this.resultat=data
      console.log(this.resultat)
    })
  }

  onSubmit(){
    this.addressource();
    this.refreshPage();
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
  this.u.getCurrentUser().subscribe(
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
