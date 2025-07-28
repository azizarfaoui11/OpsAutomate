import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestsComponent } from '../tests/tests.component';

@Component({
  selector: 'app-jmeterparams',
  standalone: true,
  imports: [CommonModule,FormsModule,NgbModule],
  templateUrl: './jmeterparams.component.html',
  styleUrl: './jmeterparams.component.css'
})
export class JmeterparamsComponent {

  
  
  methode: string = '';
  path: string = '';
  users: number= 0;
  boucle: number=0 ;
  periode:number=0;
  

  // Fonction pour enregistrer les changements
  saveChanges() {
    // Vous pouvez ajouter ici le code pour traiter les données saisies par l'utilisateur
    console.log('votre methode:', this.methode);
    console.log('votre path:', this.path);
    console.log('nombre utulisateurs:', this.users);
    console.log('nombre de boucle :', this.boucle);
    console.log("periode du test : ",this.periode);


    
    



    // Vous pouvez également ajouter ici le code pour envoyer les données à un service ou effectuer d'autres actions nécessaires
  }

  
  }
  



