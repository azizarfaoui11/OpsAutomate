import { Component } from '@angular/core';
import { UserInfo } from 'os';
import { UserserviceService } from '../../../core/services/userservice.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  newPassword: string="";
  token: string="";
  response:any;

  constructor(private userservice: UserserviceService, private route: ActivatedRoute) {
   this.route.queryParams.subscribe(params => {
     // this.token = params['token'];
     const encodedToken = params['token'];
     if (encodedToken) {
       this.token = atob(encodedToken); // Décoder le token
       console.log(this.token); // Utilisez le token décodé comme nécessaire
     } else {
       console.error('No token found in URL');
     }

    });
  }

  passwordreset() {
    this.userservice.passwordreset
    (this.token, this.newPassword)
      .subscribe((response:any)=> {
        console.log(response);
      });
  }

}
