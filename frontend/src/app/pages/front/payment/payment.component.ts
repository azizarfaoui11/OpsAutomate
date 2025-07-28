import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from '../../../core/services/payment.service';
import { groupesrc } from '../../../core/model/grprsrc';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserserviceService } from '../../../core/services/userservice.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  grp:groupesrc[]=[];
  id: any ;
  currentuserid: any ;
  constructor(private x:PaymentService, private service:UserserviceService){

    // this.grp = new groupesrc(true,true,true)
   }
  ngOnInit(): void {
    this.fetchUserData();
     }
     
  ngOnChanges(): void {
    console.log("ID mis à jour dans le composant payment:", this.currentuserid);
    this.id = this.currentuserid;
  }

  

  /*addgrouperessource()
  {
    this.x.addressource(this.grp,this.id).subscribe(  response => {
      console.log('Groupe Ressource created:', response);
    },
    error => {
      console.error('There was an error!', error);
    });
  } */

 

  fetchUserData(): void {
    this.service.getCurrentUser().subscribe(
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
