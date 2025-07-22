import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserserviceService } from '../../../core/services/userservice.service';

@Component({
  selector: 'app-reset-password-request',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './reset-password-request.component.html',
  styleUrl: './reset-password-request.component.css'
})
export class ResetPasswordRequestComponent {
  constructor(private userservice: UserserviceService) {

  }
  email:string="" ;

 

  passwordrequest() {
    this.userservice.passwordrequest(this.email)
      .subscribe(response => {
        console.log(response);
      });
  }

}
