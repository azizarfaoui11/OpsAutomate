import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjetComponent } from '../projet/projet.component';
import { GrouperessourceComponent } from '../grouperessource/grouperessource.component';
import { PaymentService } from '../../../core/services/payment.service';
import { PipelineserviceService } from '../../../core/services/pipelineservice.service';
import { NgFor, NgIf } from '@angular/common';
import { UserserviceService } from '../../../core/services/userservice.service';
import { groupesrc } from '../../../core/model/grprsrc';
import { Projet } from '../../../core/model/projet';

@Component({
  selector: 'app-ressource',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,NgFor,NgIf],
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css'
})
export class RessourceComponent implements OnInit {

  resultat:any;
  resultats:any;
  results:any;
  resultatt:any;
  currentuserid:any;
  currentuser:any;

  id:any;
  r:any;
  re:any;
  ree:any;
  rrr:any;
  aa:any;
  currentusername:any;



  constructor(private modalservice: NgbModal, private router:Router, private ps:PaymentService,private pss:PipelineserviceService,private x:UserserviceService){

  }
  ngOnInit(): void {
    this.fetchUserData();
   // this.calculprix(3); //temchi mriguel ama lezem nbadelha khater maandich id mtaa ressource nhot bouton wale juste nzayenha w nwasetha 
//this.getressources();
//this.getprojects();
//this.getprojectsbyuser();
//this.getabonnements();
//this.getsubscriptions();
  }

  
  addprojet() {
    const modalRef = this.modalservice.open(ProjetComponent);

    modalRef.result.then((result) => {
      console.log('Modal closed with result:', result);
      //this.redirection1();
      // Actualisez la liste des utilisateurs si nécessaire
    }).catch((error) => {
      console.log('Modal dismissed with error:', error);
    });


  }

    deleteprojet(id:number)
    {
      this.pss.deleteproject(id).subscribe(data=>{this.r=data;

      })
    }

    deleteabonn(id:number)
    {
      this.ps.deleteabonn(id).subscribe(data=>{this.re=data;

      })
      this.router.navigate(['/ressource'])
    }

    deletegroupe(id:number)
    {
      this.ps.deletegrp(id).subscribe(data=>{this.ree=data;
      })
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

  getressourcesbyuser()
  {
     this.ps.getlistgrprsrcbyuser(this.id)
     .subscribe(data=>{this.resultat=data;

    });
  }

  

  getprojectsbyuser()
  {
    this.pss.getprojectbyuser(this.id).subscribe(data=>{this.resultats=data;

    })
  }

  getabonnementsbyuser()
{
  this.ps.getlistabonnbyuser(this.id)
  .subscribe(data=>{this.results=data;

  })
}


getsubscriptionsbyuser()
{
  this.ps.getlistsubscbyuser(this.id)
  .subscribe(data=>{this.resultatt=data;

  })
}


calculprix(id:number)
{
  this.ps.calculeprix(id).subscribe(data=>{this.rrr=data;
    console.log("votre estimation est :",this.rrr)
  })
}

 chargeCreditCard(idd:number) {
  
  let cardName = "aziz-card";  
  let cardNumber = "4242424242424242";  
  let expMonth = 12;  
  let expYear = 2025;  
  let cvc = "123";  

  (<any>window).Stripe.card.createToken({
      name: cardName,
      number: cardNumber,
      exp_month: expMonth,
      exp_year: expYear,
      cvc: cvc
  }, (status: number, response: any) => {
      if (status === 200) {
          let token = response.id;
          this.pss.chargeCardstripe(token,idd,this.id);
      } else {
          console.log(response.error.message);
      }
  });

  this.router.navigate(['/home']);
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
          this.currentusername=data.username;
          this.currentuser=data;

          this.updateId(); 
          this.getressourcesbyuser();
          this.getabonnementsbyuser();
          this.getprojectsbyuser();

         this.getsubscriptionsbyuser();
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
logoutUser() {
    
  this.x.logout(this.currentuser).subscribe(
    response => {
      console.log('Logout successful:', response);
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    },
    error => {
      console.error('Logout failed', error);
    }
  );
}


}


