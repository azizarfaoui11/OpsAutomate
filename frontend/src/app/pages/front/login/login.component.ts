import { Component } from '@angular/core';
import { UserserviceService } from '../../../core/services/userservice.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../../core/services/token/token.service';
import { response } from 'express';
import { ResetPasswordRequestComponent } from '../reset-password-request/reset-password-request.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,ResetPasswordRequestComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    authRequest: any = {username: '', password: ''};
 // username:any;
  //password:any;
  resultat:any;
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private userService: UserserviceService,
    //private tokenService : TokenService
    //private tokenService: TokenService
  ) {
  }

  /*loginUser() {
    // Appel à l'API pour connecter un utilisateur
    this.userService.login( this.authRequest ).subscribe(response => {
     console.log('Access Token:', response.token);
     localStorage.setItem('token',response.token);

    });
        //console.log('Access Token:', );

  }*/
  loginUser() {
    this.userService.login(this.authRequest).subscribe(
      response => {
        console.log('Access Token:', response); // Vérifiez la structure de la réponse
        localStorage.setItem('token',response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  register() {
    this.router.navigate(['/signup']);
  }

}
