import { Component } from '@angular/core';
import { UserInfo } from 'os';
import { UserserviceService } from '../../../core/services/userservice.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule,ReactiveFormsModule,MatIconModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  newPassword: string="";
  token: string="";
  response:any;
  confirmPassword: string="";
  userEmail:string="hammaarfaoui123@gmail.com";
  hide:boolean=true;
  passwordForm: FormGroup;


  constructor(private userservice: UserserviceService, private route: ActivatedRoute,private fb: FormBuilder , private router:Router) {
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

    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },{validators: this.passwordMatchValidator}   );
  }

  passwordreset() {
    if (this.passwordForm.invalid) {
      return; // Do not proceed if the form is invalid
    }
    const newPassword = this.passwordForm.get('newPassword')?.value;

    this.userservice.passwordreset
    (this.token, newPassword)
      .subscribe((response:any)=> {
        console.log(response);

      });
      this.router.navigate(['/signin']);

  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }


   passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { passwordsDoNotMatch: true };
  }

}
