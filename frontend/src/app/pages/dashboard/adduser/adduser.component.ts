import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DashService } from '../../../core/services/dash.service';
import { User } from '../../../core/model/User';
import { Module } from 'module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
    user:User = new User();
    resultat:any;

  constructor(private service: DashService, private router:Router,public activeModal: NgbActiveModal
  ){
    
  }
  onSubmit() {
    this.adduser();
  }
  adduser() {
    this.service.adduser(this.user).subscribe(
      (data) => {
        console.log('Utilisateur ajouté avec succès :', data)
        //this.router.navigate(['/dash/tables']); // Redirection après ajout réussi
        //this.router.navigate(['/tables']);
        this.activeModal.close(true);

      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        // Gérer l'erreur ici (par exemple, afficher un message à l'utilisateur)
      }
    );
  }

  onCancel(): void {
    this.activeModal.dismiss();
  }

}
