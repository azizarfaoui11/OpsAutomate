import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../core/model/User';
import { response } from 'express';
import bootstrap from '../../../../main.server';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  exampleModalToggle!: ElementRef;
  registerRequest: any = { firstname: '', lastname: '', username:'',email:'', password: '', role :'USER '};
  errorMessage: string | null = null;
  username: string = "";
  code: string = '';
  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';
  code5: string = '';
  code6: string = '';
  showSuccessNotification = false;
  showErrorNotification = false;
  showNotification: boolean = false;
  notificationMessage: string = '';
  notificationClass: string = '';
  

  constructor(
    private router: Router,
    private userservice: UserserviceService,
    private renderer: Renderer2
     
  ) {
  }

  login() {
    this.router.navigate(['/signin']);
  }
  


 

    registerUser(form: NgForm) {
      if (!form.valid) {
        console.log('Form is invalid');
        return;
      }
      //this.registerRequest.firstname = "Moahmed";

    
      this.userservice.register(this.registerRequest).subscribe(
        response => {
          console.log('Message:', response);
          this.notificationMessage = 'Registration successful';
          this.showNotification = true;
          this.notificationClass = 'notification-success'; 
    
          setTimeout(() => {
            this.showNotification = false;
          }, 5000); 

          const modalElement = document.getElementById('exampleModalToggle');
          if (modalElement) {
            this.renderer.setStyle(modalElement, 'display', 'block');
            modalElement.classList.add('show');
            document.body.classList.add('modal-open');
          }

        },
        error => {
          console.error('Error:', error);
          this.notificationMessage = 'Registration failed';
          this.showNotification = true;
          this.notificationClass = 'notification-error'; 
    
          
          setTimeout(() => {
            this.showNotification = false;
          }, 5000); 
        }
      );
    }
  ping()
  { 
    this.userservice.ping().subscribe(response=>{
      console.log('message:',response);
    })
  }
  
  updatecode()
  {
    this.code=this.code1+this.code2+this.code3+this.code4+this.code5+this.code6;

  }
  updateusername()
  {
    this.username=this.registerRequest.username;
  }

 
  onSubmit() {
    this.updatecode();
    this.updateusername();

    this.userservice.verifyAccount(this.username, this.code).subscribe(
      (response: any) => {
        console.log('Verification response:', response);
        if (response && response.status === 'success') {
          this.notificationMessage = 'Account verified successfully';
          this.notificationClass = 'notification-success';
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
            this.router.navigate(['/signin']);
          }, 3000);
        } else {
          this.notificationMessage = response.message || 'Verification failed';
          this.notificationClass = 'notification-error';
          this.showNotification = true;
          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('HTTP error occurred:', error);
        this.notificationMessage = 'Verification failed';
        this.notificationClass = 'notification-error';
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    );
  }

}
