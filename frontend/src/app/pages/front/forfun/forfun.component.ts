import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-forfun',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './forfun.component.html',
  styleUrl: './forfun.component.css'
})
export class ForfunComponent {
  databaseName: string = '';
  dataSourceUrl: string = '';
  dataSourceUsername: string = '';
  dataSourcePassword: string = '';

  // Fonction pour enregistrer les changements
  saveChanges() {
    // Vous pouvez ajouter ici le code pour traiter les données saisies par l'utilisateur
    console.log('Database Name:', this.databaseName);
    console.log('DataSource URL:', this.dataSourceUrl);
    console.log('DataSource Username:', this.dataSourceUsername);
    console.log('DataSource Password:', this.dataSourcePassword);

    // Vous pouvez également ajouter ici le code pour envoyer les données à un service ou effectuer d'autres actions nécessaires
  }

}
