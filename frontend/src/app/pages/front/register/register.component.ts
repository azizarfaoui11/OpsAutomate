import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/model/User';
import { response } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerRequest: any = { firstname: '', lastname: '', username:'',email:'', password: '', role :'USER'};
  errorMsg: Array<string> = [];
  

  constructor(
    private router: Router,
    private userservice: UserserviceService
  ) {
  }

  login() {
    this.router.navigate(['/signin']);
  }

  registerUser() {
    // Appel à l'API pour connecter un utilisateur
    this.userservice.register( this.registerRequest ).subscribe(response => {
      console.log('message:', response);
    });
  }
  ping()
  { 
    this.userservice.ping().subscribe(response=>{
      console.log('message:',response);
    })
  }

}
