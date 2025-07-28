import { Component } from '@angular/core';
import { UserserviceService } from '../../../core/services/userservice.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../../core/services/token/token.service';
import { response } from 'express';
import { ResetPasswordRequestComponent } from '../reset-password-request/reset-password-request.component';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,ResetPasswordRequestComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private jwtHelper = new JwtHelperService();


    authRequest: any = {email: '', password: ''};
 // username:any;
  //password:any;
  resultat:any;
  errorMsg: Array<string> = [];
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private userService: UserserviceService,
    
  ) {
  }

  
  loginUser() {
    this.userService.login(this.authRequest).subscribe(
      response => {
        console.log('Access Token:', response); // Vérifiez la structure de la réponse
        localStorage.setItem('token',response);
        this.handleToken(response);

        //this.router.navigate(['/home']);
        this.errorMessage = null; // Réinitialiser le message d'erreur


      },
      error => {
        console.error('Login failed', error);
        this.errorMessage='login failed : invalid username or password ';

      }
    );
  }

  handleToken(token: string): void {
    const decodedToken = this.jwtHelper.decodeToken(token);
    const userRole = decodedToken.role;

    if (userRole === 'ADMIN') {
      this.router.navigate(['/tables']);
    } else   {
      this.router.navigate(['/ressource']);
    } 
  }

  register() {
    this.router.navigate(['/signup']);
  }

}
