import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProgressBarModule }  
   from 'primeng/progressbar'; 
import { ToastModule } from 'primeng/toast'; 

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.css'
})
export class RecapComponent {
  name:any ; 
  width:any;
  //width: number = 10; pour les fonction increase et decrease 

  

 
  
  ngOnInit() { 
    this.name="In progress"
    this.width=10;
  } 
  increaseWidth() {
    this.width += 10;
    if (this.width > 100) {
      this.width = 100;
    }
  }

  decreaseWidth() {
    this.width -= 10;
    if (this.width < 0) {
      this.width = 0;
    }
  }

}
