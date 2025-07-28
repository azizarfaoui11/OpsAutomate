import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { PaymentService } from '../../../core/services/payment.service';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { UserserviceService } from '../../../core/services/userservice.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit {

  proj:any;
  abonn:any;
  grp:any;
  subsc:any;
  id:any;
  currentuserid:any;
  nomuser:any;
  private openSections = new Set<string>();


  constructor(private ps:PaymentService, private pss:PipelineserviceService, private x:UserserviceService , public activeModal: NgbActiveModal)           
  {

  }
  ngOnInit(): void {
    this.fetchUserData();
  }
  


  getproject()
  {
    return this.pss.getprojectbyuser(this.id).subscribe(data=>{this.proj=data;

    })
  }

  getabonn()
  {
    return this.ps.getlistabonnbyuser(this.id).subscribe(data=>{this.abonn=data;

    })
  }

  getgroupe()
  {
    return this.ps.getlistgrprsrcbyuser(this.id).subscribe(data=>{this.grp=data;

    })
  }

  getsubsc()
  {
    return this.ps.getlistsubscbyuser(this.id).subscribe(data=>{this.subsc=data;

    })
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
            this.nomuser=data.firstname;
            this.updateId(); 
            this.getabonn();
            this.getgroupe();
          this.getproject();
        this.getsubsc();  
      
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
  

  toggleSection(title: string): void {
      if (this.openSections.has(title)) {
          this.openSections.delete(title);
      } else {
          this.openSections.add(title);
      }
  }

  isOpen(title: string): boolean {
      return this.openSections.has(title);
  }
  onCancel(): void {
    this.activeModal.dismiss();
  }

}
