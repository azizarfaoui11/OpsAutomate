import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DashService } from '../../../core/services/dash.service';
import { response } from 'express';
import { AdduserComponent } from '../adduser/adduser.component';
import { User } from '../../../core/model/User';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../../core/services/payment.service';
import { abonnement } from '../../../core/model/abonnement';
import { AddabonnComponent } from '../abonnement/addabonn/addabonn.component';
import { UpdateabonnComponent } from '../abonnement/updateabonn/updateabonn.component';
import { subscription } from '../../../core/model/subscription';
import { AddsubscComponent } from '../abonnement/addsubsc/addsubsc.component';
import { UpdatesubscComponent } from '../abonnement/updatesubsc/updatesubsc.component';
import { groupesrc } from '../../../core/model/grprsrc';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { Projet } from '../../../core/model/projet';
import { GrouperessourceComponent } from '../../front/grouperessource/grouperessource.component';
import { UserdetailsComponent } from '../../front/userdetails/userdetails.component';



@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,AdduserComponent,NgbModule],
  templateUrl: './tables.component.html',
  styleUrl: 'C://pfefront//pfeFront//src//assets//css//material-dashboard.css'
})
export class TablesComponent {
 // @ViewChild(AdduserComponent) forfun!: AdduserComponent;
  //@ViewChild(UpdateuComponent) forfunn!: UpdateuComponent;


  resultat:User[]=[];
  results:abonnement[]=[];
  donne:subscription[]=[];
  donnee:groupesrc[]=[];
  currentUserId: any;
  userStatuses: { [key: number]: string } = {}; // Objet pour stocker les statuts des utilisateurs
  reslt:any;
  reponse:any;
  rr:any;
  a:any;
  b:any;
    //resultat:any;

  constructor(private service:DashService, private x:PaymentService,  private dialog: MatDialog, private modalservice: NgbModal,
    private s:PaymentService, private ps:PipelineserviceService
    ) {}

  ngOnInit(): void {
    this.getusers();
    this.getabonnements();
    this.getsubscriptions();
    this.getabonnuser();
    this.getsubscuser();
    this.getgrouperessource();
    this.getprojects();
    //this.getabonnements();

   // console.log("hello")
  }
 
  

  getusers()
  {
    this.service.getallusers().subscribe(data=>{this.resultat=data;
      //console.log(this.resultat);
      this.resultat.forEach(user => {
        this.getStatus(user.id);
      });

    }
    );
      }

      getStatus(userId: number) {
        this.service.getstatus(userId).subscribe(response => {
          this.userStatuses[userId] = response.status;
        });
      }

      deleteUser(id: number) {
        this.service.deleteuser(id).subscribe(
          response => {
            console.log('User deleted successfully');
            // Ajoutez ici votre logique pour actualiser la liste des utilisateurs, par exemple :
            this.getusers();
          },
          error => {
            console.error('Error deleting user', error);
          }
        );
      }

     
        openAddModal() {
          const modalRef = this.modalservice.open(AdduserComponent);
      
          modalRef.result.then((result) => {
            console.log('Modal closed with result:', result);
            this.getusers();
            // Actualisez la liste des utilisateurs si nécessaire
          }).catch((error) => {
            console.log('Modal dismissed with error:', error);
          });
        }
    
    openUpdateModal(userId: number) {
      const modalRef = this.modalservice.open(UpdateComponent);
      modalRef.componentInstance.id = userId;
  
      modalRef.result.then((result) => {
        console.log('Modal closed with result:', result);
        this.getusers();
        // Actualisez la liste des utilisateurs si nécessaire
      }).catch((error) => {
        console.log('Modal dismissed with error:', error);
      });
    }


    //for abonnement 
    getabonnements()
    {
    this.s.getlistabonn()
    .subscribe(data=>{this.results=data;
      console.log(this.results);
    }
    );
     }


      deleteabonn(id: number) {
        this.s.deleteabonn(id)
        .subscribe(
          response => {
            console.log('Abonnement deleted successfully');
            this.getabonnements();
          },
          error => {
            console.error('Error deleting abonnement', error);
          }
        );
      }
     
      addabonnn() {
        const modalRef = this.modalservice.open(AddabonnComponent);
    
        modalRef.result.then((result) => {
          console.log('Modal closed with result:', result);
          this.getabonnements();
          // Actualisez la liste des utilisateurs si nécessaire
        }).catch((error) => {
          console.log('Modal dismissed with error:', error);
        });
      }

      updateabonn(userId: number) {
        const modalRef = this.modalservice.open(UpdateabonnComponent);
        modalRef.componentInstance.id = userId;
    
        modalRef.result.then((result) => {
          console.log('Modal closed with result:', result);
          this.getabonnements();
          // Actualisez la liste des utilisateurs si nécessaire
        }).catch((error) => {
          console.log('Modal dismissed with error:', error);
        });
      }

      getabonnuser()
      {
        this.x.userabonn().subscribe(data=>{this.reslt=data;
          console.log(this.reslt);
        })
      }

      getsubscuser()
      {
        this.x.usersubsc().subscribe(data=>{this.reponse=data
          console.log(this.reponse);
        });
      }


     //subscription

     getsubscriptions()
     {
       this.s.getlistsubsc()
       .subscribe(data=>{this.donne=data;
         console.log(this.donne);
       }
       );
     }

     deletesubsc(id: number) {
      this.s.deletesubsc(id)
      .subscribe(
        response => {
          console.log('Subscription deleted successfully');
          this.getsubscriptions();
        },
        error => {
          console.error('Error deleting subscription', error);
        }
      );
    }

    addsubsc() {
      const modalRef = this.modalservice.open(AddsubscComponent);
  
      modalRef.result.then((result) => {
        console.log('Modal closed with result:', result);
        this.getsubscriptions();
        // Actualisez la liste des utilisateurs si nécessaire
      }).catch((error) => {
        console.log('Modal dismissed with error:', error);
      });
    }

    updatesubsc(userId: number) {
      const modalRef = this.modalservice.open(UpdatesubscComponent);
      modalRef.componentInstance.id = userId;
  
      modalRef.result.then((result) => {
        console.log('Modal closed with result:', result);
        this.getsubscriptions();
        // Actualisez la liste des utilisateurs si nécessaire
      }).catch((error) => {
        console.log('Modal dismissed with error:', error);
      });
    }
    
    //grouperessource

    public getgrouperessource()
    {
      return this.x.getlistgrprsrc().subscribe(data=>{this.donnee=data;
        console.log(this.donnee);
      }
      )
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



    public getprojects()
    {
      return this.ps.getproject().subscribe(data=>{this.rr=data;
        console.log(this.rr);
        
      })
    }

    deleteproject(id:number)
    {
      return this.ps.deleteproject(id).subscribe(data=>{this.a=data ;
        this.getprojects();

       })
    }

    deletegroupe(id:number)
    {
      return this.x.deletegrp(id).subscribe(data=>{this.b=data;
        this.getgrouperessource();


      })
    }

    getdetails() {
      const modalRef = this.modalservice.open(UserdetailsComponent);
  
      modalRef.result.then((result) => {
        console.log('Modal closed with result:', result);
        //this.redirection1();
        // Actualisez la liste des utilisateurs si nécessaire
      }).catch((error) => {
        console.log('Modal dismissed with error:', error);
      });
    }

    

}
