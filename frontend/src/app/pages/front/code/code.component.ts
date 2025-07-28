/*import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, response } from 'express';
import { UserserviceService } from '../../../core/services/userservice.service';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {

  username: string = "latifa";
  code: string = '';
  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';
  code5: string = '';
  code6: string = '';
  


  constructor(private userservice:UserserviceService) {
  }

  updatecode()
  {
    this.code=this.code1+this.code2+this.code3+this.code4+this.code5+this.code6;

  }

 /* onSubmit() {
    const url = `/verify-email?username=${this.username}&code=${this.code}`;
    this.http.post(url, {}).subscribe(
      (response: any) => {
        alert(response);
        this.router.navigate(['/success']);  // Redirect to a success page
      },
      (error: any) => {
        alert('Verification failed. Please try again.');
      }
    );
  }*/
 /*onSubmit()

 {
  this.updatecode();
  console.log(this.code);
  console.log(this.username);
     this.userservice.verifyaccount(this.username,this.code).subscribe(response=>
      {
        console.log(response);
      }
     )
 }
 */
//}
