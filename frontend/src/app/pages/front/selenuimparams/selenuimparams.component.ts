import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selenuimparams',
  standalone: true,
  imports: [CommonModule,FormsModule,NgbModule],
  templateUrl: './selenuimparams.component.html',
  styleUrl: './selenuimparams.component.css'
})
export class SelenuimparamsComponent {



  endpoint: string = '';
  element: string = '';
  classn: string='';
 
  

  saveChanges() {
    // Vous pouvez ajouter ici le code pour traiter les données saisies par l'utilisateur
    console.log('votre methode:', this.endpoint);
    console.log('votre path:', this.element);
    console.log('nombre utulisateurs:', this.classn);
  
  }


}
