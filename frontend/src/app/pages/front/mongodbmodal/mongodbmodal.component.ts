import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mongodbmodal',
  standalone: true,
  imports: [CommonModule, NgFor,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './mongodbmodal.component.html',
  styleUrl: './mongodbmodal.component.css'
})
export class MongodbmodalComponent {

  constructor()
  {

  }
  databaseName: string = '';
  dataSourceUrl: string = '';
  dataSourceUsername: string = '';
  dataSourcePassword: string = '';

}
