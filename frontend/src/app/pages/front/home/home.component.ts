import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../../../core/services/userservice.service';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaymentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  currentuser:any;
  user:any;
  currentusername:any;
  currentuserid:any;
  resultat:any;
  result:any;
  resultats:any;


    constructor(private userService:UserserviceService, private router:Router, private p:PaymentService
    ){}
  
  ngOnInit(): void {
    console.log('ngOnInit exécuté');
    this.fetchUserData();
    }
    fetchUserData(): void {
      // Ton code pour appeler le service utilisateur et récupérer les données
      this.userService.getCurrentUser().subscribe(
          (data) => {
              console.log('Données utilisateur reçues:', data);
              this.currentusername=data.firstname;
              this.currentuserid=data.id;
              this.currentuser=data;
              // Mettre à jour les données utilisateur dans le composant Angular
          },
          (error) => {
              console.error('Erreur lors de la récupération des données utilisateur:', error);
          }
      );
  }

  logoutUser() {
    
    this.userService.logout(this.currentuser).subscribe(
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
